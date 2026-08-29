\## Stack (locked — do not change without flagging)

Next.js (App Router, TypeScript), Tailwind CSS, PostgreSQL via Supabase (Auth + DB + RLS), Vercel.



\## Hard rules

\- No MongoDB, no Mongo-flavored ORMs.

\- No custom JWT/auth code — Supabase Auth only, admin-only, no customer accounts.

\- No `/case-studies/\[slug]` route — case studies are index-only, cards, no detail pages.

\- Never invent placeholder metrics, stats, or testimonial quotes as if real — leave fields empty/marked "TBD" instead.

\- Icon-only links always need `aria-label`.

\- Flag any proposed deviation from these rules instead of silently implementing it.



\## Commands

(fill in once known: dev / build / lint / test commands)


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
