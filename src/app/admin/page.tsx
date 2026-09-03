"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type SubmissionStatus = "new" | "contacted" | "closed";

type Submission = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  status: SubmissionStatus;
  created_at: string;
};

const STATUS_OPTIONS: SubmissionStatus[] = ["new", "contacted", "closed"];

type LoadState = "loading" | "loaded" | "error" | "unauthorized";

const statusStyles: Record<SubmissionStatus, string> = {
  new: "border-accent/60 bg-accent/10 text-accent",
  contacted: "border-primary/60 bg-primary/10 text-primary",
  closed: "border-border bg-muted/40 text-muted-foreground",
};

const logoutClass =
  "inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary active:scale-[.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-60";

const selectClass =
  "cursor-pointer rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

export default function AdminPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [loadError, setLoadError] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState("");

  const getSupabase = useCallback(() => createSupabaseBrowserClient(), []);

  const fetchSubmissions = useCallback(async (): Promise<
    | { state: "loaded"; submissions: Submission[] }
    | { state: "unauthorized" }
    | { state: "error"; error: string }
  > => {
    const res = await fetch("/api/admin/submissions");

    if (res.status === 401) {
      return { state: "unauthorized" };
    }

    if (!res.ok) {
      return { state: "error", error: "Something went wrong loading submissions." };
    }

    const data = await res.json();
    return {
      state: "loaded",
      submissions: Array.isArray(data.submissions) ? data.submissions : [],
    };
  }, []);

  useEffect(() => {
    let active = true;

    fetchSubmissions()
      .then((result) => {
        if (!active) return;
        if (result.state === "unauthorized") {
          setLoadState("unauthorized");
        } else if (result.state === "error") {
          setLoadError(result.error);
          setLoadState("error");
        } else {
          setSubmissions(result.submissions);
          setLoadState("loaded");
        }
      })
      .catch(() => {
        if (!active) return;
        setLoadError("Something went wrong loading submissions.");
        setLoadState("error");
      });

    return () => {
      active = false;
    };
  }, [fetchSubmissions]);

  async function handleStatusChange(id: string, status: SubmissionStatus) {
    if (updatingId) return;

    setUpdatingId(id);
    setActionError("");

    try {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (res.status === 401) {
        setLoadState("unauthorized");
        return;
      }

      if (!res.ok) {
        setActionError("Could not update status. Please try again.");
        return;
      }

      // Reflect the updated status immediately.
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status } : s))
      );
    } catch {
      setActionError("Could not update status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  }

  async function handleLogout() {
    try {
      const supabase = getSupabase();
      await supabase.auth.signOut();
    } catch {
      // Continue to the login page regardless.
    }
    router.push("/admin/login");
    router.refresh();
  }

  // Unauthorized: session missing or expired.
  if (loadState === "unauthorized") {
    return (
      <section className="container-shell py-20 text-center md:py-28">
        <p className="section-kicker accent-text">PRIVATE WORKSPACE</p>
        <h1 className="display-heading mt-5">Session expired</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Your session has ended. Please sign in again to continue.
        </p>
        <a
          href="/admin/login"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground active:translate-y-0 active:scale-[.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Sign in <span aria-hidden>→</span>
        </a>
      </section>
    );
  }

  return (
    <section className="container-shell py-12 md:py-20">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="section-kicker accent-text">PRIVATE WORKSPACE</p>
          <h1 className="display-heading mt-4 !text-4xl md:!text-5xl">Admin</h1>
          <p className="mt-2 text-muted-foreground">Contact submissions</p>
        </div>
        <button type="button" onClick={handleLogout} className={logoutClass}>
          Log out
        </button>
      </div>

      {actionError && (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-red-400/40 bg-red-950/30 p-3 text-sm text-red-300"
        >
          {actionError}
        </p>
      )}

      <div className="mt-8">
        {loadState === "loading" && (
          <p className="text-muted-foreground" aria-live="polite">
            Loading submissions…
          </p>
        )}

        {loadState === "error" && (
          <p
            role="alert"
            className="rounded-lg border border-red-400/40 bg-red-950/30 p-3 text-sm text-red-300"
          >
            {loadError}
          </p>
        )}

        {loadState === "loaded" && submissions.length === 0 && (
          <p className="rounded-lg border border-border bg-card p-5 text-muted-foreground">
            No submissions yet. They&rsquo;ll appear here once the contact form
            is used.
          </p>
        )}

        {loadState === "loaded" && submissions.length > 0 && (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <article
                key={submission.id}
                className="rounded-[1.25rem] border border-border bg-card p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-foreground">
                      {submission.name}
                    </h2>
                    <div className="mt-1 space-y-0.5 text-sm">
                      <a
                        href={`mailto:${submission.email}`}
                        className="text-muted-foreground transition hover:text-accent"
                      >
                        {submission.email}
                      </a>
                      {submission.company && (
                        <p className="text-muted-foreground">
                          {submission.company}
                        </p>
                      )}
                    </div>
                  </div>
                  <time
                    dateTime={submission.created_at}
                    className="text-xs text-muted-foreground"
                  >
                    {new Date(submission.created_at).toLocaleString()}
                  </time>
                </div>

                <p className="mt-4 whitespace-pre-wrap rounded-lg border border-border bg-surface/50 p-3.5 text-sm leading-relaxed text-muted-foreground">
                  {submission.message}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold capitalize ${statusStyles[submission.status]}`}
                  >
                    {submission.status}
                  </span>
                  <label
                    className="sr-only"
                    htmlFor={`status-${submission.id}`}
                  >
                    Update status
                  </label>
                  <select
                    id={`status-${submission.id}`}
                    value={submission.status}
                    disabled={updatingId === submission.id}
                    onChange={(e) =>
                      handleStatusChange(
                        submission.id,
                        e.target.value as SubmissionStatus
                      )
                    }
                    className={selectClass}
                  >
                    {STATUS_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {updatingId === submission.id && (
                    <span className="text-xs text-muted-foreground" aria-live="polite">
                      Updating…
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
