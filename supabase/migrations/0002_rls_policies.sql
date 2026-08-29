alter table contact_submissions enable row level security;

create policy "Anon can insert contact submissions"
  on contact_submissions
  for insert
  to anon
  with check (true);

create policy "Authenticated can read contact submissions"
  on contact_submissions
  for select
  to authenticated
  using (true);

create policy "Authenticated can update contact submissions"
  on contact_submissions
  for update
  to authenticated
  using (true)
  with check (true);
