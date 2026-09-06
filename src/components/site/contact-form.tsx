"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { TurnstileField, resetTurnstile } from "./turnstile-field";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    setSubmitState("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      if (response.ok) {
        form.reset();
        setSubmitState("success");
        setMessage("Thank you. Your message has been sent to FKSola Financial.");
        return;
      }

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      setSubmitState("error");
      setMessage(data?.error ?? "Unable to send your message right now.");
    } catch {
      setSubmitState("error");
      setMessage(
        "Unable to send your message right now. Please try again or email Fred directly."
      );
    } finally {
      window.clearTimeout(timeout);
      resetTurnstile();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 shadow-xl shadow-[#071629]/8 sm:p-5 lg:p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <Field label="Email address" name="email" type="email" required />
      <Field label="Phone number" name="phone" type="tel" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="City of residence" name="city" required />
        <Field label="State" name="state" required />
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#071629]">
        Conversation topic
        <select
          name="topic"
          className="h-12 rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-base font-normal text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15 sm:text-sm"
        >
          <option>Life insurance</option>
          <option>Mortgage protection</option>
          <option>Income protection planning</option>
          <option>Retirement income planning</option>
          <option>Fixed index annuities</option>
          <option>Financial education</option>
          <option>Careers</option>
          <option>General question</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#071629]">
        Message
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-[6px] border border-[#D1D5DB] bg-white px-4 py-3 text-base font-normal leading-7 text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15 sm:text-sm"
          placeholder="Share what you would like to understand or discuss."
        />
      </label>
      <TurnstileField />
      <Button
        type="submit"
        disabled={submitState === "sending"}
        className="h-12 w-full rounded-full sm:w-fit"
      >
        {submitState === "sending" ? "Sending..." : "Schedule a Conversation"}
      </Button>
      {message ? (
        <p
          className={`text-xs leading-6 ${
            submitState === "success" ? "text-[#0B1F3A]" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : (
        <p className="text-xs leading-6 text-[#334155]">
          Your message will be sent securely to FKSola Financial by email.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#071629]">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-base font-normal text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15 sm:text-sm"
      />
    </label>
  );
}
