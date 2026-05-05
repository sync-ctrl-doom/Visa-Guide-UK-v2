# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Britannia Visas & Immigration Consultancy — uk-immigration artifact

### Completed Features
- All core pages: Home, Services (×7), Visa Types (×8), About, Contact, Free Assessment, Insights, FAQ, Eligibility Checker, 4 legal pages, Sitemap HTML
- **Logo**: `logo-horizontal.png` (lion + wordmark) in Navbar (white bg container), `brightness-0 invert` in Footer
- **Dark mode**: FloatingDarkModeToggle (bottom-right), ThemeContext in `src/contexts/ThemeContext.tsx`
- **Hero banners**: Background images + gradient overlay on every page. Verified images (all Pexels free or Wikimedia): Home=London aerial night, Family=family portrait (7799614), Skilled Worker=medical professional (5998474), Right of Abode=Big Ben/Parliament (672532), ILR=professional team meeting (3184291), EEA=Eiffel Tower (460740), British Citizenship=Union Jack flag (Wikimedia), Nationality=team collaboration (3183197), Visa Categories=airport traveller (3943882), About=legal gavel (5668473), Entry Clearance=airplane wing
- **Forms**: All free-assessment inputs have placeholders (First Name "John", Last Name "Doe", Email "john.doe@example.com", Phone "+44 7700 900123", Nationality "e.g. Indian, Nigerian, Chinese")
- **Global branding**: "Britannia Visas & Immigration Consultancy" across all files
- SearchModal, DisclaimerBanner, LanguageModal (16 languages incl. Welsh/Cymraeg), animated stats, testimonials, FadeUp scroll animations, team section
- **CookieConsent** (`src/components/CookieConsent.tsx`): GDPR-compliant banner, fixed bottom, navy/red branded; Essential (always on) + Analytics + Marketing toggles; Accept All / Reject Non-Essential / Manage Preferences; saves to `localStorage["bvi_cookie_consent"]`; 800ms delay on first visit
- GEO/AI optimisation: robots.txt allowing GPTBot/ClaudeBot/PerplexityBot/Google-Extended, llms.txt, sitemap.xml (28 URLs), JSON-LD schemas, full OG/Twitter meta
- Footer: logo + IAA disclaimer, nav links, social icons, newsletter input
- All legal links use real `<Link>` components to `/privacy-policy`, `/terms-of-service`, `/complaints-procedure`, `/sitemap`

### Asset files (`src/assets/`)
- `logo-horizontal.png` — lion + "BRITANNIA VISAS & IMMIGRATION CONSULTANCY" wordmark, white bg
- `logo-icon-navy.png` — square icon, navy bg, colour
- `logo-icon-color.png` — square icon, white bg, colour
- `logo-icon-white.png` — square icon, navy bg, all-white
- `london-skyline.png` — hero background (opacity 35%)

## Supabase Backend & Admin System

### Setup
- **SQL schema**: `SUPABASE_SETUP.sql` — run once in Supabase SQL Editor to create all tables, RLS, bucket
- **Secrets**: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY
- **First admin login**: `admin@britannia-visas.co.uk` / `Admin1234!` (change immediately in Settings)

### Tables
- `clients` — client records with bcrypt-hashed passwords, auto-generated BVI-YYYY-NNNNN refs
- `documents` — per-client document checklist; status: Not uploaded / Uploaded / Approved / Rejected
- `messages` — secure messaging between adviser (sender="adviser") and client (sender="client")
- `admin_users` — admin staff accounts with bcrypt-hashed passwords
- `client-documents` — private Supabase Storage bucket; files accessed only via 1-hour signed URLs

### API Routes (`artifacts/api-server/src/routes/`)
- `auth.ts` — POST /api/auth/admin-login, POST /api/auth/client-login (JWT, 5-attempt rate-limit)
- `admin-clients.ts` — GET/POST /api/admin/clients, GET/PATCH /api/admin/clients/:id, send-welcome-email, send-reminder
- `admin-documents.ts` — GET/POST /api/admin/clients/:id/documents, PATCH/DELETE /api/admin/documents/:id, signed-url
- `admin-messages.ts` — GET/POST /api/admin/clients/:id/messages, unread-count
- `admin-settings.ts` — GET/POST/DELETE /api/admin/settings/admins, change-password
- `client-portal.ts` — GET /api/client/portal/me, documents, messages; POST upload, messages
- `lib/docTemplates.ts` — default document checklists for 8 visa types (auto-populated on client creation)
- `lib/email.ts` — Resend email: welcome, doc approved, doc rejected, new message, reminder
- `middleware/auth.ts` — requireAdmin / requireClient JWT middleware (stores ID in res.locals)

### Admin Dashboard (`/admin/*`)
- `/admin/login` — separate admin login (no navbar/footer)
- `/admin` — client list with search, filter by status/visa type, upload progress column
- `/admin/clients/new` — create client form; shows one-time ref+password after creation
- `/admin/clients/:id` — tabs: Documents (approve/reject/add/remove), Details (edit), Messages (chat)
- `/admin/settings` — change own password, add/remove admin users

### Frontend API Client
- `artifacts/uk-immigration/src/lib/api.ts` — typed wrapper for all API calls, reads JWT from localStorage

## Artifacts

### UK Immigration & Visa (`artifacts/uk-immigration`)
- **Brand**: Britannia Visas and Immigration
- **URL**: `/` (root)
- **Type**: react-vite + Express API backend
- **Color scheme**: Union Jack red/white/blue (navy primary, red secondary)
- **Fonts**: Playfair Display (serif headings), Inter (body)
- **Logo**: `src/assets/britannia-logo.png` (AI-generated lion head)
- **Admin token**: localStorage key `bvi_admin_token`
- **Client token**: localStorage key `bvi_client_token`

#### Pages
- `/` — Home (hero, trust signals, services overview, CTA)
- `/about` — About the firm, IAA regulation explainer
- `/free-assessment` — Enquiry form with zod validation
- `/contact` — Contact details and form
- `/services` — Services hub (links to sub-pages)
- `/services/visa-applications` — Visa applications service page + FAQ
- `/services/entry-clearance` — Entry clearance service page + FAQ
- `/services/eea-settled-status` — EU Settlement Scheme page + FAQ
- `/services/right-of-abode` — Right of abode page + FAQ
- `/services/nationality-citizenship` — Nationality & citizenship page + FAQ
- `/services/asylum` — Asylum claims page + FAQ
- `/services/appeals` — Appeals & tribunals page + FAQ
- `/visa-types` — Visa types hub (links to sub-pages)
- `/visa-types/skilled-worker` — Skilled Worker Visa + FAQ
- `/visa-types/student` — Student Visa + FAQ
- `/visa-types/family` — Family Visa + FAQ
- `/visa-types/visitor` — Visitor Visa + FAQ
- `/visa-types/ilr` — Indefinite Leave to Remain + FAQ
- `/visa-types/british-citizenship` — British Citizenship + FAQ
- `/visa-types/bno` — BNO Visa + FAQ
- `/visa-types/graduate` — Graduate Visa + FAQ
- `/secure-portal` — Client portal: real Supabase auth, document upload, secure messaging
- `/admin/login` — Admin login (separate from client portal)
- `/admin` — Admin dashboard
- `/admin/clients/new` — New client form
- `/admin/clients/:id` — Client record
- `/admin/settings` — Admin settings
