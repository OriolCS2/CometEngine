-- ============================================================================
-- Comet Engine Marketplace — Admin role
-- Run this in the Supabase SQL Editor AFTER schema.sql.
-- Admins can unpublish/delete ANY package (moderation). Users cannot grant
-- themselves admin: the is_admin column is not updatable through the API.
-- ============================================================================

-- 1. The admin flag
alter table public.profiles add column if not exists is_admin boolean not null default false;

-- Users may only update their name/avatar through the API — never is_admin.
revoke update on table public.profiles from authenticated, anon;
grant update (display_name, avatar_url) on table public.profiles to authenticated;

-- Helper used inside policies (security definer so it can always read profiles).
create or replace function public.is_admin()
returns boolean
language sql stable security definer set search_path = public
as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

grant execute on function public.is_admin() to anon, authenticated;

-- 2. Extend package policies: admins see drafts, can update and delete anything
drop policy if exists "Published packages are readable by everyone" on public.packages;
create policy "Published packages are readable by everyone"
  on public.packages for select
  using (status = 'published' or owner_id = auth.uid() or public.is_admin());

drop policy if exists "Owners can update their packages" on public.packages;
create policy "Owners can update their packages"
  on public.packages for update
  using (owner_id = auth.uid() or public.is_admin());

drop policy if exists "Owners can delete their packages" on public.packages;
create policy "Owners can delete their packages"
  on public.packages for delete
  using (owner_id = auth.uid() or public.is_admin());

drop policy if exists "Versions of visible packages are readable" on public.package_versions;
create policy "Versions of visible packages are readable"
  on public.package_versions for select
  using (exists (
    select 1 from public.packages p
    where p.id = package_id and (p.status = 'published' or p.owner_id = auth.uid() or public.is_admin())
  ));

drop policy if exists "Owners can delete versions" on public.package_versions;
create policy "Owners can delete versions"
  on public.package_versions for delete
  using (public.is_admin() or exists (
    select 1 from public.packages p
    where p.id = package_id and p.owner_id = auth.uid()
  ));

-- 3. Storage: admins can clean up anyone's files
drop policy if exists "Users update files in their own folder" on storage.objects;
create policy "Users update files in their own folder"
  on storage.objects for update
  using (
    bucket_id in ('package-zips', 'package-media')
    and (auth.uid()::text = (storage.foldername(name))[1] or public.is_admin())
  );

drop policy if exists "Users delete files in their own folder" on storage.objects;
create policy "Users delete files in their own folder"
  on storage.objects for delete
  using (
    bucket_id in ('package-zips', 'package-media')
    and (auth.uid()::text = (storage.foldername(name))[1] or public.is_admin())
  );

-- 4. Make YOU the admin (sign in on the website at least once first,
--    so your profile row exists).
update public.profiles set is_admin = true
where id = (select id from auth.users where email = 'contrasnya@gmail.com');

-- Verify: should return your name with is_admin = true
select display_name, is_admin from public.profiles where is_admin;
