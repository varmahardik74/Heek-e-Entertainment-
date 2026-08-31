import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import { getSupabaseClient } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  company: z.string().max(200).optional(),
  message: z.string().min(1).max(5000),
});

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const hitsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hitsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  hitsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input. Check the name, email, and message fields." },
      { status: 400 }
    );
  }

  const { name, email, company, message } = parsed.data;

  try {
    const supabase = getSupabaseClient();

    // Generate the UUID here so we can return the created id. Note: we must
    // NOT use .select() after .insert() here. "anon" has no SELECT privilege or
    // policy, so .insert().select("id") would make PostgREST emit
    // "INSERT ... RETURNING id", which requires SELECT and is rejected with
    // 42501 even though the row is inserted. Inserting with an explicit id
    // keeps the security model intact and lets us echo the id back.
    const id = randomUUID();

    const { error } = await supabase
      .from("contact_submissions")
      .insert({ id, name, email, company, message });

    if (error) {
      console.error("Contact insert failed:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ id }, { status: 201 });
  } catch (err) {
    console.error("Contact insert failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
