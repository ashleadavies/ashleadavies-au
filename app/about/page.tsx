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
    body: "I turn unclear problems, competing priorities and messy operational detail into clear plans teams can actually use.",
  },
  {
    icon: HeartHandshake,
    title: "Change that respects people",
    body: "I bring frontline experience into transformation work, so change is designed with the people delivering services, not just for them.",
  },
  {
    icon: ShieldCheck,
    title: "Readiness before go-live",
    body: "I focus on operational readiness, risk, data, workforce capability and service continuity before change reaches customers and teams.",
  },
  {
    icon: Sparkles,
    title: "Practical outcomes",
    body: "I care about measurable, sustainable improvement: better processes, stronger adoption, cleaner data and confident operations.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I help organisations turn complex transformation into practical, operationally ready change"
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
              My career has grown from frontline service coordination through to operational leadership,
              deployment, adoption and business analysis. That mix gives me a practical view of change:
              I understand the strategy being designed, but also the pressure on the people expected to
              make it work.
            </p>

            <p>
              Across Australian Unity Home Health, I supported large-scale transformation across
              workforce optimisation, Team-Based Care, Salesforce Health Cloud readiness, Procura and
              AlayaCare environments, customer service alignment, capability uplift and deployment
              planning.
            </p>

            <p>
              I work best where change is complex, cross-functional and operationally sensitive. I help
              leaders understand what needs to be true before go-live, where risk is sitting, what data
              needs attention, and how teams can be prepared without overwhelming the business.
            </p>

            <p>
              My approach is structured, calm and practical. I bring clarity to messy problems, connect
              technology decisions back to real service delivery, and help organisations create change
              that is not only delivered, but adopted.
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
              <Link href="/contact">
                <Button size="lg">
                  Work with me
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}