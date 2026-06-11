-- ============================================================================
-- Comet Engine Marketplace — Supabase schema
-- Run this whole file in the Supabase SQL Editor (Dashboard > SQL Editor).
-- Safe to re-run: uses IF NOT EXISTS / OR REPLACE where possible.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Profiles (one row per user, auto-created on signup)
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default 'Anonymous',
  avatar_url text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "Profiles are readable by everyone" on public.profiles;
create policy "Profiles are readable by everyone"
  on public.profiles for select using (true);

drop policy if exists "Users can insert their own profile" on public.profiles;
create policy "Users can insert their own profile"
  on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- Auto-create a profile when a user signs up (name/avatar from Google).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', 'Anonymous'),
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ----------------------------------------------------------------------------
-- 2. Packages
-- ----------------------------------------------------------------------------
create table if not exists public.packages (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles (id) on delete cascade,
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  name text not null check (char_length(name) between 3 and 80),
  summary text not null check (char_length(summary) between 10 and 160),
  description_md text not null default '',
  category text not null,
  tags text[] not null default '{}',
  license text not null default 'MIT',
  homepage_url text,
  repo_url text,
  min_engine_version text,
  icon_url text,
  screenshots text[] not null default '{}',
  status text not null default 'published' check (status in ('draft', 'published')),
  latest_version text,
  download_count bigint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists packages_status_idx on public.packages (status);
create index if not exists packages_owner_idx on public.packages (owner_id);

alter table public.packages enable row level security;

drop policy if exists "Published packages are readable by everyone" on public.packages;
create policy "Published packages are readable by everyone"
  on public.packages for select
  using (status = 'published' or owner_id = auth.uid());

drop policy if exists "Users can create their own packages" on public.packages;
create policy "Users can create their own packages"
  on public.packages for insert with check (owner_id = auth.uid());

drop policy if exists "Owners can update their packages" on public.packages;
create policy "Owners can update their packages"
  on public.packages for update using (owner_id = auth.uid());

drop policy if exists "Owners can delete their packages" on public.packages;
create policy "Owners can delete their packages"
  on public.packages for delete using (owner_id = auth.uid());

-- ----------------------------------------------------------------------------
-- 3. Package versions
-- ----------------------------------------------------------------------------
create table if not exists public.package_versions (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null references public.packages (id) on delete cascade,
  version text not null check (version ~ '^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$'),
  changelog_md text not null default '',
  zip_path text not null,
  zip_size bigint not null default 0,
  download_count bigint not null default 0,
  created_at timestamptz not null default now(),
  unique (package_id, version)
);

create index if not exists package_versions_pkg_idx on public.package_versions (package_id);

alter table public.package_versions enable row level security;

drop policy if exists "Versions of visible packages are readable" on public.package_versions;
create policy "Versions of visible packages are readable"
  on public.package_versions for select
  using (exists (
    select 1 from public.packages p
    where p.id = package_id and (p.status = 'published' or p.owner_id = auth.uid())
  ));

drop policy if exists "Owners can add versions" on public.package_versions;
create policy "Owners can add versions"
  on public.package_versions for insert
  with check (exists (
    select 1 from public.packages p
    where p.id = package_id and p.owner_id = auth.uid()
  ));

drop policy if exists "Owners can delete versions" on public.package_versions;
create policy "Owners can delete versions"
  on public.package_versions for delete
  using (exists (
    select 1 from public.packages p
    where p.id = package_id and p.owner_id = auth.uid()
  ));

-- ----------------------------------------------------------------------------
-- 4. Download counter (called anonymously from the site, so security definer)
-- ----------------------------------------------------------------------------
create or replace function public.increment_download(p_package uuid, p_version uuid)
returns void
language sql
security definer set search_path = public
as $$
  update public.packages set download_count = download_count + 1 where id = p_package;
  update public.package_versions set download_count = download_count + 1 where id = p_version;
$$;

grant execute on function public.increment_download(uuid, uuid) to anon, authenticated;

-- ----------------------------------------------------------------------------
-- 5. Storage buckets
--    package-zips : addon archives (25 MB cap, enforced server-side too)
--    package-media: icons & screenshots (5 MB cap per file)
-- ----------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('package-zips', 'package-zips', true, 26214400,
        array['application/zip', 'application/x-zip-compressed', 'application/octet-stream'])
on conflict (id) do update
  set public = true, file_size_limit = 26214400;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('package-media', 'package-media', true, 5242880,
        array['image/png', 'image/jpeg', 'image/webp', 'image/gif'])
on conflict (id) do update
  set public = true, file_size_limit = 5242880;

-- Files live under <user_id>/... so the first folder must match the uploader.
drop policy if exists "Marketplace files are publicly readable" on storage.objects;
create policy "Marketplace files are publicly readable"
  on storage.objects for select
  using (bucket_id in ('package-zips', 'package-media'));

drop policy if exists "Users upload into their own folder" on storage.objects;
create policy "Users upload into their own folder"
  on storage.objects for insert
  with check (
    bucket_id in ('package-zips', 'package-media')
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "Users update files in their own folder" on storage.objects;
create policy "Users update files in their own folder"
  on storage.objects for update
  using (
    bucket_id in ('package-zips', 'package-media')
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "Users delete files in their own folder" on storage.objects;
create policy "Users delete files in their own folder"
  on storage.objects for delete
  using (
    bucket_id in ('package-zips', 'package-media')
    and auth.uid()::text = (storage.foldername(name))[1]
  );
