"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const inputClass =
  "mt-2 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent disabled:opacity-60";

const submitClass =
  "mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground active:translate-y-0 active:scale-[.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const supabase = createSupabaseBrowserClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError("Invalid email or password. Please try again.");
        setSubmitting(false);
        return;
      }

      // Session cookie is now set; navigate to the protected dashboard.
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again later.");
      setSubmitting(false);
    }
  }

  return (
    <section className="container-shell grid gap-12 py-16 md:grid-cols-[.9fr_1.1fr] md:py-24">
      <div>
        <p className="section-kicker accent-text">PRIVATE WORKSPACE</p>
        <h1 className="display-heading mt-5 max-w-3xl !text-5xl md:!text-6xl">
          Admin Login
        </h1>
        <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
          Sign in to review and manage contact submissions.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="h-fit space-y-5 rounded-[1.5rem] border border-border bg-card p-6 md:p-8"
        aria-busy={submitting}
      >
        {error && (
          <p
            role="alert"
            className="rounded-lg border border-red-400/40 bg-red-950/30 p-3 text-sm text-red-300"
          >
            {error}
          </p>
        )}

        <div>
          <label htmlFor="email" className="text-sm font-bold text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm font-bold text-foreground"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </div>

        <button type="submit" disabled={submitting} className={submitClass}>
          {submitting ? "Signing in…" : "Sign in"}
          {!submitting && <span aria-hidden>→</span>}
        </button>
      </form>
    </section>
  );
}
