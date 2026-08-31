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
  new: "bg-blue-50 text-blue-800",
  contacted: "bg-amber-50 text-amber-800",
  closed: "bg-gray-100 text-gray-600",
};

export default function AdminPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [loadError, setLoadError] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState("");

  const getSupabase = useCallback(
    () => createSupabaseBrowserClient(),
    []
  );

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
      <section>
        <h1 className="text-3xl font-semibold">Admin</h1>
        <p className="mt-3 text-gray-700">
          Your session has expired. Please sign in again.
        </p>
        <a
          href="/admin/login"
          className="mt-4 inline-block rounded bg-black px-4 py-2 text-sm text-white"
        >
          Sign in
        </a>
      </section>
    );
  }

  return (
    <section>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Admin</h1>
          <p className="mt-1 text-gray-700">Contact submissions</p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
        >
          Log out
        </button>
      </div>

      {actionError && (
        <p
          role="alert"
          className="mt-4 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-800"
        >
          {actionError}
        </p>
      )}

      <div className="mt-6">
        {loadState === "loading" && (
          <p className="text-gray-600">Loading submissions…</p>
        )}

        {loadState === "error" && (
          <p
            role="alert"
            className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-800"
          >
            {loadError}
          </p>
        )}

        {loadState === "loaded" && submissions.length === 0 && (
          <p className="rounded border border-gray-200 p-4 text-gray-600">
            No submissions yet. They&rsquo;ll appear here once the contact
            form is used.
          </p>
        )}

        {loadState === "loaded" && submissions.length > 0 && (
          <ul className="space-y-4">
            {submissions.map((submission) => (
              <li
                key={submission.id}
                className="rounded border border-gray-200 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h2 className="font-semibold">{submission.name}</h2>
                    <p className="text-sm text-gray-600">{submission.email}</p>
                    {submission.company && (
                      <p className="text-sm text-gray-600">
                        {submission.company}
                      </p>
                    )}
                  </div>
                  <time className="text-xs text-gray-400">
                    {new Date(submission.created_at).toLocaleString()}
                  </time>
                </div>

                <p className="mt-2 whitespace-pre-wrap text-sm text-gray-700">
                  {submission.message}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-medium capitalize ${statusStyles[submission.status]}`}
                  >
                    {submission.status}
                  </span>
                  <label className="sr-only" htmlFor={`status-${submission.id}`}>
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
                    className="rounded border border-gray-300 px-2 py-1 text-sm disabled:opacity-50"
                  >
                    {STATUS_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {updatingId === submission.id && (
                    <span className="text-xs text-gray-500">Updating…</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
