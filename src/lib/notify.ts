import { Resend } from "resend";

/**
 * Server-only contact notification via Resend.
 * This module must only ever be imported from server code (API routes). It
 * reads server-only env vars and never exports secrets or client code.
 */

function escapeHtml(value: string | null | undefined): string {
  return (value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function configuredAdminEmail(): string | null {
  const email = process.env.ADMIN_EMAIL?.trim();
  return email || null;
}

function fromEmail(): string | null {
  const email = process.env.RESEND_FROM_EMAIL?.trim();
  return email || null;
}

export function buildContactEmailHtml(input: {
  name: string;
  email: string;
  message: string;
  id: string;
  submittedAt: string | null;
}): string {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const message = escapeHtml(input.message);
  const id = escapeHtml(input.id);
  const submittedAt = escapeHtml(input.submittedAt ?? "Not available");

  // Neutral styling with the site design system palette, no marketing content.
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>New Contact Submission</title>
</head>
<body style="margin:0;padding:0;background:#111111;color:#f7f6f0;font-family:ui-sans-serif,system-ui,sans-serif,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;background:#111111">
    <div style="background:#090909;border:1px solid #30302d;border-radius:16px;padding:28px">
      <p style="margin:0 0 12px;text-transform:uppercase;letter-spacing:.16em;font-size:.68rem;font-weight:700;color:#00bde7">Heek-E · New inquiry</p>
      <h1 style="margin:0 0 20px;font-size:1.35rem;line-height:1.25;letter-spacing:-.02em;color:#f7f6f0">New Contact Submission</h1>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:.9rem">
        <tr>
          <td style="padding:8px 0;color:#a4a49d;width:140px;vertical-align:top">Name</td>
          <td style="padding:8px 0;color:#f7f6f0">${name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#a4a49d;width:140px;vertical-align:top">Email</td>
          <td style="padding:8px 0"><a href="mailto:${email}" style="color:#fff200;text-decoration:none">${email}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#a4a49d;width:140px;vertical-align:top">Submission ID</td>
          <td style="padding:8px 0;color:#f7f6f0;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.82rem">${id}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#a4a49d;width:140px;vertical-align:top">Submitted</td>
          <td style="padding:8px 0;color:#f7f6f0">${submittedAt}</td>
        </tr>
      </table>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid #30302d">
        <p style="margin:0 0 6px;color:#a4a49d;font-size:.78rem;text-transform:uppercase;letter-spacing:.12em">Message</p>
        <p style="margin:0;color:#f7f6f0;line-height:1.6;white-space:pre-wrap">${message}</p>
      </div>
    </div>
    <p style="margin:16px 0 0;color:#6b6b64;font-size:.72rem;text-align:center">Sent by Heek-E contact form.</p>
  </div>
</body>
</html>`;
}

/**
 * Sends the contact notification to the configured admin.
 * Returns { ok, error? }. Never throws.
 */
export async function sendContactNotification(input: {
  name: string;
  email: string;
  message: string;
  id: string;
  submittedAt: string | null;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = configuredAdminEmail();
  const from = fromEmail();

  // Fail closed: if any required server variable is missing, do not send and
  // report a non-sensitive reason. Never fall back to a client-side send.
  if (!apiKey || !to || !from) {
    return {
      ok: false,
      error: "Contact notification email skipped: missing server configuration (RESEND_API_KEY / RESEND_FROM_EMAIL / ADMIN_EMAIL).",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: input.email,
      subject: `New Contact Submission — ${input.name}`,
      html: buildContactEmailHtml(input),
    });

    if (error || !data) {
      return {
        ok: false,
        error: `Contact notification email send failed (Resend): ${error?.message ?? "no data returned"}`,
      };
    }

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: `Contact notification email send threw: ${err instanceof Error ? err.message : "unknown error"}`,
    };
  }
}
