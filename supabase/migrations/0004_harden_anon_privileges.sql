-- Hardening: ensure "anon" has ONLY INSERT on contact_submissions.
--
-- The route no longer uses .select() after .insert(), so anon never needs
-- SELECT. Supabase's table editor commonly grants "all" on the table to
-- "anon" when RLS is configured via the UI; with RLS and no SELECT policy
-- that results in an empty result set (200 []), not a permission error. To
-- strictly enforce "anon cannot SELECT", revoke every privilege anon holds on
-- this table and re-grant only INSERT.
--
-- This does not weaken security; it tightens it to exactly match the intended
-- model (anon = submit only, authenticated = read/update).

revoke all on contact_submissions from anon;
grant insert on contact_submissions to anon;
