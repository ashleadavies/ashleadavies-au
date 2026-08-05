"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsSending(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const payload = {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        company: String(formData.get("company") ?? ""),
        message: String(formData.get("message") ?? ""),
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { success?: boolean; error?: string }

      if (!response.ok || !result.success) {
        setError(result.error || "Unable to send your message right now. Please try again later.")
        return
      }

      setSubmitted(true)
    } catch {
      setError("Unable to send your message right now. Please try again later.")
    } finally {
      setIsSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-highlight/15 text-highlight">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="mt-4 font-serif text-xl font-semibold">Thank you</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. I've received your message and will be in touch as soon as possible.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="Your email" className={inputClass} />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <input id="company" name="company" placeholder="Organisation (optional)" className={inputClass} />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your opportunity, project or how I can help..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error ? (
        <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSending}>
        {isSending ? "Sending..." : "Send message"}
        <Send className="size-4" />
      </Button>
    </form>
  )
}
