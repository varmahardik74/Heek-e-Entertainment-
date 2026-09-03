import type { User } from "@supabase/supabase-js";

// Server-only admin allow-list.
// The single intended administrator is identified by email via the server-side
// ADMIN_EMAIL environment variable. This module must only ever be imported on
// the server (proxy / API routes). It never exports the value to the client.
//
// Fail closed: a misconfigured or unset ADMIN_EMAIL means "no admin is
// configured", so every user (including otherwise-authenticated ones) is
// treated as non-admin and denied access.

const configuredAdminEmail = (): string | null =>
  process.env.ADMIN_EMAIL?.trim().toLowerCase() || null;

export function isAdminEmail(email: string | undefined | null): boolean {
  if (!email) return false;
  const admin = configuredAdminEmail();
  if (!admin) return false;
  return email.trim().toLowerCase() === admin;
}

export function isAdminUser(user: User | null): boolean {
  if (!user) return false;
  return isAdminEmail(user.email);
}
