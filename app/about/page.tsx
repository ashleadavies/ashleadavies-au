import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { person } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ashlea Davies — business analysis, operational readiness, workforce optimisation and digital transformation expertise.",
}

const values = [
  {
    icon: Compass,
    title: "Clarity from complexity",
    body: "I translate complex operating environments into clear delivery plans, practical roadmaps and actions that teams can confidently execute.",
  },
  {
    icon: HeartHandshake,
    title: "People-first change",
    body: "I focus on the people impacted by change, ensuring leaders, frontline teams and stakeholders are prepared, engaged and supported through transition.",
  },
  {
    icon: ShieldCheck,
    title: "Readiness over risk",
    body: "I use structured readiness assessment, risk identification and deployment planning to protect customers, employees and service continuity through go-live.",
  },
  {
    icon: Sparkles,
    title: "Outcomes that endure",
    body: "I focus on sustainable business outcomes, improving workforce capability, operational performance, data quality and adoption beyond implementation.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Turning operational complexity into confident, measurable transformation"
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <Image
                src="/images/portrait.png"
                alt={`Portrait of ${person.name}`}
                width={560}
                height={700}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold">{person.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{person.roles.join(" · ")}</p>
              <p className="mt-3 text-sm text-muted-foreground">{person.location}</p>
            </div>
          </div>

          <div className="space-y-6 text-pretty text-lg leading-relaxed text-foreground/80">
            <p>
              I&apos;m a Business Analyst, Digital Transformation Consultant and Operational Readiness
              Specialist with experience delivering enterprise change across healthcare, aged care,
              customer operations and technology-enabled transformation.
            </p>

            <p>
              My background spans frontline service coordination, operational leadership, deployment,
              adoption and business analysis. That means I understand transformation from both sides:
              the strategy being designed and the people expected to make it work in day-to-day operations.
            </p>

            <p>
              Across Australian Unity Home Health, I supported large-scale operational transformation,
              including Team-Based Care, workforce optimisation, Salesforce Health Cloud readiness,
              Procura and AlayaCare environments, customer service alignment, capability uplift and
              deployment planning.
            </p>

            <p>
              My work is grounded in practical delivery. I help organisations assess readiness, uncover
              operational risk, improve data quality, align workforce capability to customer demand, and
              create change that can actually be adopted by the teams delivering services.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button render={<Link href="/contact" />} size="lg">
                Work with me
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}