import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { isAdminUser } from "@/lib/admin";

const forbiddenPageHtml = `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;background:#090909;color:#f7f6f0;font-family:ui-sans-serif,system-ui,sans-serif;display:grid;place-items:center;min-height:100vh">
  <div style="text-align:center;padding:2rem;max-width:34rem">
    <p style="text-transform:uppercase;letter-spacing:.16em;font-size:.66rem;font-weight:700;color:#00bde7">Private workspace</p>
    <h1 style="font-size:clamp(2rem,5vw,3rem);letter-spacing:-.05em;margin:.75rem 0 0">Access denied</h1>
    <p style="color:#a4a49d;line-height:1.6;margin-top:1rem">You don&rsquo;t have permission to view this area.</p>
    <a href="/" style="display:inline-block;margin-top:1.5rem;background:#fff200;color:#0b0b0b;padding:.8rem 1.4rem;border-radius:999px;font-weight:700;text-decoration:none;font-size:.8rem">Back to site</a>
  </div>
</body>
</html>`;

export async function proxy(req: NextRequest) {
  const res = NextResponse.next();

  const { pathname } = req.nextUrl;
  const isAdminPage =
    pathname.startsWith("/admin") && pathname !== "/admin/login";
  const isAdminApi = pathname.startsWith("/api/admin");

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Fail closed: if config is missing, deny protected access loudly rather
  // than silently passing through (which would disable the auth gate).
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      "[proxy] Supabase env vars missing: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set. Denying protected access."
    );
    if (isAdminApi) {
      return NextResponse.json(
        { error: "Server misconfiguration: authentication is unavailable" },
        { status: 500 }
      );
    }
    if (isAdminPage) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/admin/login";
      return NextResponse.redirect(redirectUrl);
    }
    return res;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return req.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          req.cookies.set(name, value);
          res.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (isAdminApi) {
    // Unauthenticated -> 401 (existing behavior).
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // Authenticated but not the configured admin (or admin unconfigured) -> 403.
    if (!isAdminUser(user)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  if (isAdminPage) {
    // Unauthenticated -> redirect to login (existing behavior).
    if (!user) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/admin/login";
      return NextResponse.redirect(redirectUrl);
    }
    // Authenticated but not the configured admin (or admin unconfigured) -> 403.
    if (!isAdminUser(user)) {
      return new NextResponse(forbiddenPageHtml, {
        status: 403,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
