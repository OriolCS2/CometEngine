# Comet Engine Marketplace — Backend Setup

The marketplace frontend is fully built and currently runs in **demo mode**
(sample packages, login disabled). To make it real you connect it to a free
[Supabase](https://supabase.com) project. No credit card needed, ~15 minutes.

The free tier includes: 500 MB database, 1 GB file storage, 50,000 monthly
active users. Package ZIPs are capped at **25 MB** (enforced in the UI and at
the storage bucket level).

---

## 1. Create the Supabase project

1. Go to <https://supabase.com> → **Start your project** → sign in with GitHub.
2. **New project** → name it `comet-marketplace`, pick a region close to your
   users (e.g. `eu-west`), generate a database password (you won't need it
   day-to-day) → **Create**.
3. Wait ~1 minute while it provisions.

## 2. Apply the database schema

1. In the Supabase dashboard, open **SQL Editor** (left sidebar).
2. Open [`supabase/schema.sql`](supabase/schema.sql) from this repo, paste the
   whole file, press **Run**.
3. You should see "Success. No rows returned". This creates the tables
   (`profiles`, `packages`, `package_versions`), all Row Level Security
   policies, the download counter, and the two storage buckets
   (`package-zips`, `package-media`).

## 3. Set up Google login

### 3a. Google Cloud Console

1. Go to <https://console.cloud.google.com> → create a project (e.g.
   `comet-marketplace`).
2. **APIs & Services → OAuth consent screen**: choose **External**, fill in
   app name ("Comet Engine Marketplace"), support email, and developer email.
   Save. (You can publish the app later; in "Testing" mode only test users can
   log in.)
3. **APIs & Services → Credentials → Create credentials → OAuth client ID**:
   - Application type: **Web application**
   - Authorized JavaScript origins:
     - `https://www.cometengine.org`
     - `http://localhost:5173` (for local dev)
   - Authorized redirect URIs:
     - `https://<YOUR-PROJECT-REF>.supabase.co/auth/v1/callback`
       (find the exact value in Supabase under **Authentication → Sign In / Up →
       Google** — it shows you the callback URL to copy)
4. Copy the generated **Client ID** and **Client secret**.

### 3b. Supabase

1. In Supabase: **Authentication → Sign In / Up → Google** → enable it and
   paste the Client ID and Client secret. Save.
2. **Authentication → URL Configuration**:
   - Site URL: `https://www.cometengine.org`
   - Additional redirect URLs: `http://localhost:5173`

## 4. Connect the website

1. In Supabase: **Project Settings → API**. Copy:
   - **Project URL** (looks like `https://abcdefgh.supabase.co`)
   - **anon / public key**
2. Paste both into [`src/lib/supabase.js`](src/lib/supabase.js):

   ```js
   export const SUPABASE_URL = 'https://abcdefgh.supabase.co';
   export const SUPABASE_ANON_KEY = 'eyJ...';
   ```

   > These two values are **safe to commit** — they are public by design.
   > All protection comes from the Row Level Security policies.

3. Run `npm run dev`, open `http://localhost:5173/#marketplace` — the demo
   banner should be gone and the store will be empty (no packages yet).
4. Sign in with Google, upload a first package from **My Packages → Upload
   New Package**, and verify it appears in the marketplace.

## 5. Deploy

Publish as usual (`python Publish.py "Marketplace"`). Nothing else changes:
the site stays 100% static on GitHub Pages and talks to Supabase directly
from the browser.

---

## How it's wired (reference)

| Piece | Where |
|---|---|
| Supabase config & client | `src/lib/supabase.js` |
| Data layer (queries, uploads, auth) | `src/lib/marketplace-api.js` |
| Demo data (used until configured) | `src/lib/mock-data.js` |
| Navbar login button / avatar menu | `src/lib/auth-ui.js` |
| Store front + package page + publisher page | `src/pages/marketplace.js` |
| Account dashboard + publish/edit/version forms | `src/pages/account.js` |
| DB schema, RLS policies, buckets | `supabase/schema.sql` |

Limits enforced client-side (and by bucket config server-side):

- Package ZIP: **25 MB max**, `.zip` only
- Icon / screenshots: 4 MB per image, max 6 screenshots
- Versions: semantic versioning (`1.2.3`), each new version must be higher
  than the current latest; every version keeps its own changelog (Markdown)
  and stays downloadable forever.
