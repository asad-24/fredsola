import { NextResponse } from "next/server";

import { escapeHtml, getFormValue, sendBrevoEmail } from "@/lib/brevo";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = getFormValue(formData, "firstName");
    const lastName = getFormValue(formData, "lastName");
    const email = getFormValue(formData, "email");
    const phone = getFormValue(formData, "phone");
    const licenseStatus = getFormValue(formData, "licenseStatus");
    const message = getFormValue(formData, "message");
    const appointmentDate = getFormValue(formData, "appointmentDate");
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (!firstName || !lastName || !email || !phone || !licenseStatus) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    await sendBrevoEmail({
      subject: "FKSola Financial Join Us inquiry",
      replyTo: {
        email,
        name,
      },
      htmlContent: `
        <h2>New FKSola Financial Join Us inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Life insurance license:</strong> ${escapeHtml(licenseStatus)}</p>
        <p><strong>Selected appointment date:</strong> ${escapeHtml(
          appointmentDate || "No date selected"
        )}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "No message provided.").replaceAll(
          "\n",
          "<br />"
        )}</p>
      `,
      textContent: [
        "New FKSola Financial Join Us inquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Life insurance license: ${licenseStatus}`,
        `Selected appointment date: ${appointmentDate || "No date selected"}`,
        `Message: ${message || "No message provided."}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to send your inquiry right now." },
      { status: 500 }
    );
  }
}
