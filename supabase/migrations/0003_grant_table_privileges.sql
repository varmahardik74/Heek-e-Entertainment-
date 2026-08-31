-- Grant the base table privileges required for the RLS policies in 0002.
-- RLS policies only enforce row-level access; the roles still need table-level
-- GRANTs to perform the operations the policies allow. Without these, the
-- "anon" role is denied INSERT (42501) even though the policy permits it.
--
-- These grants are the minimum needed to match the existing policies exactly
-- and do not weaken security:
--   anon           -> INSERT only (public contact form)
--   authenticated  -> SELECT + UPDATE only (admin dashboard)

alter table contact_submissions enable row level security;

grant insert on contact_submissions to anon;
grant select on contact_submissions to authenticated;
grant update on contact_submissions to authenticated;
