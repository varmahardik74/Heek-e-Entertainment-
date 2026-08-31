"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const inputClass =
  "mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm";

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
    <section>
      <h1 className="text-3xl font-semibold">Admin Login</h1>
      <p className="mt-3 max-w-2xl text-gray-700">
        Sign in to manage contact submissions.
      </p>

      {error && (
        <p
          role="alert"
          className="mt-4 max-w-xl rounded border border-red-200 bg-red-50 p-3 text-sm text-red-800"
        >
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-xl space-y-4"
        aria-busy={submitting}
      >
        <div>
          <label htmlFor="email" className="text-sm font-medium">
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
          <label htmlFor="password" className="text-sm font-medium">
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

        <button
          type="submit"
          disabled={submitting}
          className="rounded bg-black px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </section>
  );
}
