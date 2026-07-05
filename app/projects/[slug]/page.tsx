import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  Clock,
  Lightbulb,
  ListChecks,
  Target,
  TrendingUp,
  UserRound,
  Workflow,
  Cpu,
} from "lucide-react"
import { getProject, projects } from "@/lib/projects"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return { title: project.title, description: project.summary }
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
          <Icon className="size-4.5" />
        </span>
        <h2 className="font-serif text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="mt-4 text-pretty leading-relaxed text-foreground/80">{children}</div>
    </section>
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article>
      <div className="mx-auto max-w-4xl px-5 pt-12 lg:px-8 lg:pt-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          All projects
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {project.category}
          </span>
        </div>

        <h1 className="mt-4 text-balance font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{project.summary}</p>

        <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 size-4 text-primary" />
            <div>
              <dt className="text-xs text-muted-foreground">Client</dt>
              <dd className="text-sm font-medium">{project.client}</dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 size-4 text-primary" />
            <div>
              <dt className="text-xs text-muted-foreground">Year</dt>
              <dd className="text-sm font-medium">{project.year}</dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 size-4 text-primary" />
            <div>
              <dt className="text-xs text-muted-foreground">Duration</dt>
              <dd className="text-sm font-medium">{project.duration}</dd>
            </div>
          </div>
        </dl>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-2xl border border-border bg-card p-5 text-center">
              <p className="font-serif text-3xl font-semibold text-primary">{kpi.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-5 py-14 lg:px-8">
        <Section icon={Lightbulb} title="Overview">
          <p>{project.overview}</p>
        </Section>

        <Section icon={Target} title="Business Challenge">
          <p>{project.challenge}</p>
        </Section>

        <Section icon={UserRound} title="My Role">
          <p>{project.role}</p>
        </Section>

        <Section icon={Workflow} title="Approach">
          <p>{project.approach}</p>
        </Section>

        <Section icon={ListChecks} title="Key Activities">
          <ol className="space-y-4 border-l border-border pl-6">
            {project.activities.map((activity, i) => (
              <li key={activity} className="relative">
                <span className="absolute -left-[1.9rem] flex size-6 items-center justify-center rounded-full border border-border bg-card text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-foreground/80">{activity}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section icon={TrendingUp} title="Business Outcomes">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.outcomes.map((o) => (
              <div key={o.label} className="rounded-2xl border border-border bg-secondary p-5 text-center">
                <p className="font-serif text-3xl font-semibold text-primary">{o.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{o.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section icon={Cpu} title="Technology">
          <div className="flex flex-wrap gap-2">
            {project.technology.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section icon={Lightbulb} title="Lessons Learned">
          <p>{project.lessons}</p>
        </Section>
      </div>

      <div className="mx-auto max-w-4xl px-5 pb-20 lg:px-8">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Next case study</p>
            <p className="mt-1 font-serif text-xl font-semibold">{next.title}</p>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors group-hover:bg-secondary">
            Read next
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </article>
  )
}