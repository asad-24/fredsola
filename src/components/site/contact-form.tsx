import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form className="grid gap-5 rounded-[8px] border border-[#0B1F3A]/10 bg-white p-6 shadow-xl shadow-[#071629]/8 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" />
        <Field label="Last name" name="lastName" />
      </div>
      <Field label="Email address" name="email" type="email" />
      <Field label="Phone number" name="phone" type="tel" />
      <label className="grid gap-2 text-sm font-semibold text-[#071629]">
        Conversation topic
        <select
          name="topic"
          className="h-12 rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-sm font-normal text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15"
        >
          <option>Life insurance</option>
          <option>Mortgage protection</option>
          <option>Retirement planning</option>
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
          className="rounded-[6px] border border-[#D1D5DB] bg-white px-4 py-3 text-sm font-normal leading-7 text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15"
          placeholder="Share what you would like to understand or discuss."
        />
      </label>
      <Button type="button" className="h-12 w-full rounded-full sm:w-fit">
        Schedule a Conversation
      </Button>
      <p className="text-xs leading-6 text-[#5F6B7A]">
        Form delivery will be connected after the preferred email or appointment
        provider is selected.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#071629]">
      {label}
      <input
        name={name}
        type={type}
        className="h-12 rounded-[6px] border border-[#D1D5DB] bg-white px-4 text-sm font-normal text-[#071629] outline-none transition focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/15"
      />
    </label>
  );
}
