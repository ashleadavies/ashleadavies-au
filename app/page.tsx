import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { person, stats } from "@/lib/site"
import { projects } from "@/lib/projects"

export default function HomePage() {
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-highlight" />
              Available for new engagements
            </span>
            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {person.name}
            </h1>
            <p className="mt-4 text-pretty text-lg font-medium text-muted-foreground sm:text-xl">
              {person.roles.join("  ·  ")}
            </p>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/80">
              {person.tagline} Trusted by enterprise leaders to translate strategy into measurable transformation and
              operational readiness.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button render={<Link href="/projects" />} size="lg">
                View my work
                <ArrowRight className="size-4" />
              </Button>
              <Button render={<Link href="/contact" />} size="lg" variant="outline">
                Get in touch
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {person.roles.map((r) => (
                <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 text-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <Image
                src="/images/portrait.png"
                alt={`Portrait of ${person.name}`}
                width={640}
                height={800}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
              <p className="font-serif text-2xl font-semibold text-primary">10+ yrs</p>
              <p className="text-xs text-muted-foreground">Leading transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            All projects
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-primary px-8 py-14 text-center text-primary-foreground lg:px-16">
          <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to lead your next transformation with confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
            Let&apos;s talk about how thoughtful analysis and operational readiness can de-risk your change programme.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-card text-foreground hover:bg-card/90"
            >
              Start a conversation
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
