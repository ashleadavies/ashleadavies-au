import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { TestimonialCard } from "@/components/testimonial-card"

export const metadata: Metadata = {
  title: "Recommendations",
  description: "Leadership recognition for Ashlea Davies across business analysis, operational readiness, deployment and transformation.",
}

const recognitionHighlights = [
  {
    title: "2024 Performance",
    value: "Inspiring",
    text: "Highest performance rating received for leadership, delivery and organisational contribution.",
  },
  {
    title: "2025 Performance",
    value: "Delivering",
    text: "Recognised for analytical capability, transformation delivery and operational readiness.",
  },
  {
    title: "Business Analysis",
    value: "Trusted Business Analyst",
    text: "Recognised by the Business Analysis Practice Lead for delivery excellence, stakeholder engagement and capability uplift.",
  },
  {
    title: "Experience",
    value: "7+ Years",
    text: "Progressed from frontline operations to business analysis, deployment leadership and enterprise transformation.",
  },
]

const recommendations = [
  {
    quote:
      "Ashlea quickly established herself as a trusted and highly effective Business Analyst, delivering quality outcomes across complex transformation initiatives. Her contribution to the IVR enhancement initiative was significant, with stakeholders recognising her collaborative approach, attention to detail and ability to navigate complex environments. Beyond project delivery, she strengthened the Business Analysis Community of Practice through initiatives that improved collaboration, capability and engagement. Ashlea consistently demonstrates a growth mindset, goes above and beyond to support others, and leaves a lasting legacy of delivery excellence and practice improvement.",
    name: "Krista Beattie",
    position: "Business Analyst Practice Lead",
    organisation: "Technology, Digital & Transformation\nAustralian Unity",
    initials: "KB",
    category: "Business Analysis & Practice Uplift",
    dateLabel: "FY26 People Leader Feedback",
  },
  {
    quote:
      "Ashlea consistently exceeded what would normally be expected of a Deployment Consultant. She demonstrated exceptional analytical capability, played a pivotal role during Cutover 1, identified critical data migration issues and established a ten-person data remediation working group that resolved complex operational challenges. Her ability to analyse operational data, lead remediation activities and translate business needs into practical solutions made her instrumental to the success of the Salesforce Health Cloud transformation.",
    name: "Michael Wynter",
    position: "Deployment Manager",
    organisation: "Enterprise Home Health Transformation\nAustralian Unity",
    initials: "MW",
    category: "Deployment, Data & Transformation",
    dateLabel: "2025 Performance Review",
  },
  {
    quote:
      "Ashlea consistently demonstrated leadership, critical thinking and a commitment to continuous improvement. She successfully balanced dual responsibilities while maintaining high-quality delivery, proactively identified risks and developed practical solutions, and went above and beyond in mentoring and training colleagues. Her willingness to learn, collaborate and consistently deliver results made her an invaluable member of the team.",
    name: "Amandeep Bhatia",
    position: "Deployment Leader",
    organisation: "Home Health Transformation\nAustralian Unity",
    initials: "AB",
    category: "Leadership & Continuous Improvement",
    dateLabel: "2024 Performance Review",
  },
]

export default function RecommendationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Leadership Recognition"
        description="Recognition from Business Analysis Practice Leaders and Operational Leaders, reflecting delivery, performance and contribution across business analysis, operational readiness, deployment and transformation initiatives."
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 pt-4 lg:px-8">
        <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 text-center text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
          <div>7+ Years Experience</div>
          <div>53+ National Deployments</div>
          <div>3,000+ Employees Supported</div>
          <div>45,000+ Customer Records Prepared</div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight">Recognition at a Glance</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                A snapshot of formal performance recognition and leadership feedback received throughout my transformation career.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {recognitionHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-background p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{item.title}</p>
                <p className="mt-3 text-2xl font-semibold text-foreground">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-2 lg:px-8">
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {recommendations.map((r) => (
            <TestimonialCard
              key={r.name}
              quote={r.quote}
              name={r.name}
              position={r.position}
              organisation={r.organisation}
              initials={r.initials}
              category={r.category}
              dateLabel={r.dateLabel}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Recognised across multiple leaders</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Business Analysis Practice Lead",
              "Operational Leaders",
              "Deployment Leaders",
              "Transformation Stakeholders",
              "Customer Experience Programs",
            ].map((item) => (
              <span key={item} className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Have we worked together?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            I would genuinely appreciate a LinkedIn recommendation reflecting your experience of working with me. Every recommendation helps future employers understand the impact I strive to make.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="https://www.linkedin.com/in/ashlea-davies-4a758240b"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Leave a LinkedIn recommendation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
