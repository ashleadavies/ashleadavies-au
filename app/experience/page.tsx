import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Experience",
  description: "Career history and professional experience of Ashlea Davies.",
}

const experience = [
  {
    period: "2022 — Present",
    role: "Principal Digital Transformation Consultant",
    company: "Independent (placeholder)",
    summary:
      "Placeholder copy. Lead consultant on enterprise transformation programmes, owning discovery, target operating model design and operational readiness.",
    highlights: [
      "Delivered 40+ enterprise programmes across public and private sectors",
      "Established readiness frameworks adopted as organisational standards",
      "Advised C-suite stakeholders on transformation strategy and risk",
    ],
    tags: ["Transformation", "Readiness", "Strategy"],
  },
  {
    period: "2019 — 2022",
    role: "Senior Business Analyst",
    company: "Global Consultancy (placeholder)",
    summary:
      "Placeholder copy. Led business analysis workstreams on large-scale platform and process transformations for global clients.",
    highlights: [
      "Owned requirements across multi-market CRM and ERP migrations",
      "Introduced reusable analysis and process harmonisation templates",
      "Mentored a growing team of analysts across engagements",
    ],
    tags: ["Business Analysis", "CRM", "ERP"],
  },
  {
    period: "2016 — 2019",
    role: "Business Analyst",
    company: "Financial Services (placeholder)",
    summary:
      "Placeholder copy. Delivered process improvement and change initiatives across operations and customer service.",
    highlights: [
      "Mapped and optimised high-volume back-office processes",
      "Supported regulatory change programmes end to end",
      "Built dashboards to track performance and adoption",
    ],
    tags: ["Process", "Change", "Analytics"],
  },
  {
    period: "2014 — 2016",
    role: "Operations Analyst",
    company: "Operations Provider (placeholder)",
    summary:
      "Placeholder copy. Analysed operational data to improve planning, capacity and service levels across a national network.",
    highlights: [
      "Improved forecasting accuracy and resource allocation",
      "Standardised operational reporting across regions",
      "Partnered with front-line teams on continuous improvement",
    ],
    tags: ["Operations", "Forecasting", "Reporting"],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="A decade of leading enterprise change"
        description="A career built on structured analysis, calm delivery and a relentless focus on measurable outcomes."
      />

      <section className="mx-auto max-w-4xl px-5 pb-20 pt-8 lg:px-8">
        <ol className="relative border-l border-border">
          {experience.map((item) => (
            <li key={item.role} className="mb-10 ml-8 last:mb-0">
              <span className="absolute -left-[9px] flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background" />
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.period}</p>
                <h2 className="mt-2 font-serif text-xl font-semibold tracking-tight">{item.role}</h2>
                <p className="text-sm font-medium text-muted-foreground">{item.company}</p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/80">{item.summary}</p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-foreground/80">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
