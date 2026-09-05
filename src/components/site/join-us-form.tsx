"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Clock3 } from "lucide-react";

const dateOptions = [
  { day: "Mon", date: "Sep 7" },
  { day: "Tue", date: "Sep 8" },
  { day: "Wed", date: "Sep 9" },
  { day: "Thu", date: "Sep 10" },
  { day: "Mon", date: "Sep 14" },
];

type SubmitState = "idle" | "sending" | "success" | "error";

export function JoinUsForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setMessage("");

    const response = await fetch("/api/join-us", {
      method: "POST",
      body: new FormData(event.currentTarget),
    });

    if (response.ok) {
      event.currentTarget.reset();
      setSelectedDate("");
      setSubmitState("success");
      setMessage("Thank you. Your inquiry has been sent to FKSola Financial.");
      return;
    }

    const data = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    setSubmitState("error");
    setMessage(data?.error ?? "Unable to send your inquiry right now.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[22px] border border-[#0B1F3A]/10 bg-white p-5 shadow-2xl shadow-[#071629]/12 sm:p-7 lg:p-9"
    >
      <p className="text-sm font-bold text-[#C9A227]">Step 1 of 2</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#071629]">
        Tell us about yourself
      </h2>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <CareerField label="First name *" name="firstName" required />
        <CareerField label="Last name *" name="lastName" required />
        <CareerField label="Email *" name="email" type="email" required />
        <CareerField label="Phone *" name="phone" type="tel" required />
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-bold text-[#071629]">
          Do you currently have an active life insurance license? *
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="flex h-13 cursor-pointer items-center gap-3 rounded-[8px] border border-[#0B1F3A]/10 px-4 text-sm font-semibold text-[#071629] transition hover:border-[#C9A227] hover:bg-[#F7F4EC]">
            <input
              type="radio"
              name="licenseStatus"
              value="Yes, I am licensed"
              required
              className="size-4 accent-[#0B1F3A]"
            />
            Yes, I am licensed
          </label>
          <label className="flex h-13 cursor-pointer items-center gap-3 rounded-[8px] border border-[#0B1F3A]/10 px-4 text-sm font-semibold text-[#071629] transition hover:border-[#C9A227] hover:bg-[#F7F4EC]">
            <input
              type="radio"
              name="licenseStatus"
              value="Not yet"
              required
              className="size-4 accent-[#0B1F3A]"
            />
            Not yet
          </label>
        </div>
      </fieldset>

      <label className="mt-6 grid gap-2 text-sm font-bold text-[#071629]">
        Anything you would like us to know?{" "}
        <span className="font-normal text-[#5F6B7A]">(optional)</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Share any experience, questions, or goals you want to discuss."
          className="resize-none rounded-[8px] border border-[#0B1F3A]/10 bg-white px-4 py-3 text-sm font-normal leading-7 text-[#071629] outline-none transition placeholder:text-[#5F6B7A]/70 focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15"
        />
      </label>

      <div className="my-7 h-px bg-[#0B1F3A]/10" />

      <p className="text-sm font-bold text-[#C9A227]">Step 2 of 2</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#071629]">
        Choose a time
      </h2>
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#071629] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#071629]/20">
        <Clock3 className="size-4 text-[#C9A227]" aria-hidden="true" />
        30-minute conversation · Eastern Time
      </div>

      <input type="hidden" name="appointmentDate" value={selectedDate} />
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {dateOptions.map((option) => {
          const value = `${option.day}, ${option.date}`;
          const isSelected = selectedDate === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => setSelectedDate(value)}
              className={`rounded-[8px] border px-3 py-3 text-left transition ${
                isSelected
                  ? "border-[#C9A227] bg-[#F7F4EC] shadow-sm"
                  : "border-[#0B1F3A]/10 bg-white hover:border-[#C9A227] hover:bg-[#F7F4EC]"
              }`}
            >
              <span className="block text-sm font-bold text-[#071629]">
                {option.day}
              </span>
              <span className="mt-1 block text-sm text-[#5F6B7A]">
                {option.date}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-[8px] bg-[#F3F4F6] px-4 py-5 text-center text-sm text-[#5F6B7A]">
        {selectedDate
          ? `${selectedDate} selected. Exact time slots can be connected when Fred provides a booking calendar.`
          : "Select a date to see available times."}
      </div>

      <button
        type="submit"
        disabled={submitState === "sending"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-[8px] bg-[#C9A227] px-5 text-sm font-bold text-[#071629] transition hover:bg-[#0B1F3A] hover:text-white disabled:pointer-events-none disabled:opacity-60"
      >
        {submitState === "sending"
          ? "Sending..."
          : "Schedule my conversation"}
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>

      {message ? (
        <p
          className={`mt-5 text-center text-xs leading-6 ${
            submitState === "success" ? "text-[#0B1F3A]" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : (
        <p className="mt-5 text-center text-xs leading-6 text-[#5F6B7A]">
          By submitting, you agree that FKSola Financial may contact you about
          this opportunity.
        </p>
      )}
    </form>
  );
}

function CareerField({
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
    <label className="grid gap-2 text-sm font-bold text-[#071629]">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 rounded-[8px] border border-[#0B1F3A]/10 bg-white px-4 text-sm font-normal text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15"
      />
    </label>
  );
}
