import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log("Contact request", data);

  try {
    const emailBody = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : "",
      data.date ? `Date: ${data.date}` : "",
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || "noreply@example.com",
        to: process.env.CONTACT_EMAIL || "sydneywells103@gmail.com",
        subject: `New contact form submission from ${data.name}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Error sending email:", text);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
