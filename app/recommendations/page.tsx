import type { Metadata } from "next"
import { Quote } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Recommendations",
  description: "What colleagues and clients say about working with Ashlea Davies.",
}

const recommendations = [
  {
    quote:
      "Placeholder testimonial. Ashlea brought immediate clarity to a programme that had stalled. Her structured approach and calm leadership got everyone aligned and moving in weeks.",
    name: "Jordan Mitchell",
    role: "Programme Director",
    company: "Enterprise Group (placeholder)",
    initials: "JM",
  },
  {
    quote:
      "Placeholder testimonial. The operational readiness work Ashlea led meant our go-live was a non-event — exactly what you want. Meticulous, thorough and genuinely collaborative.",
    name: "Priya Nair",
    role: "Head of Operations",
    company: "Financial Services (placeholder)",
    initials: "PN",
  },
  {
    quote:
      "Placeholder testimonial. Ashlea has a rare ability to translate between the boardroom and the front line. Stakeholders trusted her, and that trust made the transformation possible.",
    name: "David Osei",
    role: "Transformation Lead",
    company: "Public Sector (placeholder)",
    initials: "DO",
  },
  {
    quote:
      "Placeholder testimonial. From requirements to benefits realisation, Ashlea kept the outcome front and centre. Our CRM migration delivered on time and exceeded its business case.",
    name: "Sarah Whitfield",
    role: "CRM Product Owner",
    company: "Global Firm (placeholder)",
    initials: "SW",
  },
  {
    quote:
      "Placeholder testimonial. Ashlea mentored our analyst team while delivering at pace. She raised the standard of everyone around her and left us more capable than she found us.",
    name: "Tom Bradley",
    role: "Delivery Manager",
    company: "Consultancy (placeholder)",
    initials: "TB",
  },
  {
    quote:
      "Placeholder testimonial. Introducing AI into our planning could have been daunting. Ashlea framed it around real business value and won the team over with clarity and empathy.",
    name: "Elena Rossi",
    role: "Operations Planning Lead",
    company: "National Provider (placeholder)",
    initials: "ER",
  },
]

export default function RecommendationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recommendations"
        title="Trusted by leaders across sectors"
        description="Placeholder introduction. A few words from the clients and colleagues I've had the privilege to work alongside."
      />

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-8 lg:px-8">
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {recommendations.map((r) => (
            <figure
              key={r.name}
              className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="size-6 text-primary/40" />
              <blockquote className="mt-4 text-pretty text-sm leading-relaxed text-foreground/85">{r.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary">
                  {r.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.role} · {r.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
