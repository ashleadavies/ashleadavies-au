import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { person } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: "About Ashlea Davies — business analysis, digital transformation and operational readiness expertise.",
}

const values = [
  {
    icon: Compass,
    title: "Clarity from complexity",
    body: "Placeholder copy. I turn ambiguous problems into clear, prioritised roadmaps that stakeholders trust and teams can act on.",
  },
  {
    icon: HeartHandshake,
    title: "People-first change",
    body: "Placeholder copy. Lasting transformation happens when the people doing the work are engaged, prepared and confident.",
  },
  {
    icon: ShieldCheck,
    title: "Readiness over risk",
    body: "Placeholder copy. Rigorous operational readiness protects customers and colleagues through every go-live.",
  },
  {
    icon: Sparkles,
    title: "Outcomes that endure",
    body: "Placeholder copy. I focus on measurable, sustainable value — not change for its own sake.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Turning complex change into confident, measurable transformation"
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
              Placeholder biography copy. I&apos;m a Business Analyst, Digital Transformation Consultant and Operational
              Readiness Specialist with over a decade of experience helping enterprises navigate complex change. My work
              sits at the intersection of strategy, operations and technology.
            </p>
            <p>
              Placeholder copy. I partner with leaders to understand the real problem beneath the brief, then design
              pragmatic, evidence-led solutions. From discovery and requirements to target operating models and
              go-live readiness, I bring structure and momentum to programmes of every scale.
            </p>
            <p>
              Placeholder copy. My clients span public sector, financial services and large operational networks. Across
              all of them, I&apos;m known for calm delivery under pressure, clear communication, and an unwavering focus
              on the people who make change stick.
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
