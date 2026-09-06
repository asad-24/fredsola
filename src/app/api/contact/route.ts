import { NextResponse } from "next/server";

import { escapeHtml, getFormValue, sendBrevoEmail } from "@/lib/brevo";
import { verifyTurnstile } from "@/lib/turnstile";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = getFormValue(formData, "firstName");
    const lastName = getFormValue(formData, "lastName");
    const email = getFormValue(formData, "email");
    const phone = getFormValue(formData, "phone");
    const city = getFormValue(formData, "city");
    const state = getFormValue(formData, "state");
    const topic = getFormValue(formData, "topic");
    const message = getFormValue(formData, "message");
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (!firstName || !lastName || !email || !phone || !city || !state || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const isHuman = await verifyTurnstile(formData, request);

    if (!isHuman) {
      return NextResponse.json(
        { error: "Please complete the spam protection check." },
        { status: 400 }
      );
    }

    await sendBrevoEmail({
      subject: `FKSola Financial contact request: ${topic || "General question"}`,
      replyTo: {
        email,
        name,
      },
      htmlContent: `
        <h2>New FKSola Financial contact request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>City of residence:</strong> ${escapeHtml(city)}</p>
        <p><strong>State:</strong> ${escapeHtml(state)}</p>
        <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
      textContent: [
        "New FKSola Financial contact request",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `City of residence: ${city}`,
        `State: ${state}`,
        `Topic: ${topic}`,
        `Message: ${message}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}
