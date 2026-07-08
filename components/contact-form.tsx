"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-highlight/15 text-highlight">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="mt-4 font-serif text-xl font-semibold">Thank you</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Placeholder confirmation. Your message has been received — I&apos;ll be in touch shortly.
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

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send message
        <Send className="size-4" />
      </Button>
    </form>
  )
}
