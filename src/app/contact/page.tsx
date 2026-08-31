"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-1 block w-full rounded border border-gray-300 px-3 py-2 text-sm";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // Prevent duplicate submissions while a request is in flight.
    if (status === "submitting") return;

    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });

      if (res.status === 201) {
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setStatus("success");
        setFeedback(
          "Thanks for getting in touch. We'll be in contact soon."
        );
        return;
      }

      // Only surface the user-facing error the API already returns.
      let messageText = "Something went wrong. Please try again later.";
      try {
        const data = await res.json();
        if (data && typeof data.error === "string" && data.error) {
          messageText = data.error;
        }
      } catch {
        // Non-JSON response; fall back to the generic message.
      }
      setFeedback(messageText);
      setStatus("error");
    } catch {
      setFeedback("Something went wrong. Please try again later.");
      setStatus("error");
    }
  }

  const showSuccess = status === "success";
  const showError = status === "error";

  return (
    <section>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 max-w-2xl text-gray-700">
        Tell us about your brand and what you want to achieve. We&rsquo;ll get
        back to you with next steps.
      </p>

      {showSuccess && (
        <p
          role="status"
          className="mt-4 rounded border border-green-200 bg-green-50 p-3 text-sm text-green-800"
        >
          {feedback}
        </p>
      )}
      {showError && (
        <p
          role="alert"
          className="mt-4 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-800"
        >
          {feedback}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-xl space-y-4"
        aria-busy={status === "submitting"}
      >
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium">
            Company <span className="text-gray-400">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded bg-black px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </form>
    </section>
  );
}
