import { NextResponse } from "next/server"
import { Resend } from "resend"

const RECIPIENT_EMAIL = "ashlea.davies.au@gmail.com"
const FROM_EMAIL = "Ashlea Davies Website <noreply@ashleadavies.au>"

function normaliseText(value: unknown) {
  if (typeof value !== "string") {
    return ""
  }

  return value.replace(/\s+/g, " ").trim()
}

function formatEmailBody({
  name,
  email,
  company,
  message,
}: {
  name: string
  email: string
  company: string
  message: string
}) {
  const receivedAt = new Date().toLocaleString()

  return [
    "Name: " + name,
    "Email: " + email,
    "Organisation: " + (company || "Not provided"),
    "Message: " + message,
    "Date and time received: " + receivedAt,
  ].join("\n")
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: unknown
      email?: unknown
      company?: unknown
      message?: unknown
    }

    const name = normaliseText(payload.name)
    const email = normaliseText(payload.email)
    const company = normaliseText(payload.company)
    const message = normaliseText(payload.message)

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY?.trim()
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email delivery is not configured yet." },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: formatEmailBody({ name, email, company, message }),
    })

    if (response.error) {
      return NextResponse.json(
        { error: response.error.message || "Failed to send the message." },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, message: "Your message has been sent." })
  } catch (error) {
  console.error("Contact form email error:", error)

  return NextResponse.json(
    { error: "Unable to send your message right now. Please try again later." },
    { status: 500 },
  )
}
