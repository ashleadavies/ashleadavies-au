import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { person, stats } from "@/lib/site"
export const metadata: Metadata = {
  title: "Ashlea Davies — Business Transformation Consultant",
  description:
    "Business Transformation Consultant with experience across business analysis, operational readiness, deployment leadership and customer-focused transformation across healthcare and community services.",
  openGraph: {
    title: "Ashlea Davies — Business Transformation Consultant",
    description:
      "Business Transformation Consultant with experience across business analysis, operational readiness, deployment leadership and customer-focused transformation across healthcare and community services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashlea Davies Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashlea Davies — Business Transformation Consultant",
    description:
      "Business Transformation Consultant with experience across business analysis, operational readiness, deployment leadership and customer-focused transformation across healthcare and community services.",
    images: ["/og-image.jpg"],
  },
}
import { projects } from "@/lib/projects"

export default function HomePage() {
  const featured = projects.slice(0, 3)
  const capabilities = [
    "Business Analysis",
    "Deployment Consultant",
    "Deployment & Adoption Lead",
    "Community Liason Manager",
    "Service Consultant",
    "Home Care Worker",
  ]

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-highlight" />
              Business Analyst • Operational Readiness Consultant • Deployment & Adoption Lead
            </span>

            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {person.name}
            </h1>

            <p className="mt-4 text-pretty text-lg font-medium text-muted-foreground sm:text-xl">
              {person.roles.join("  ·  ")}
            </p>

            <h2 className="mt-6 text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
              Helping organisations by making complex transformation practical, operational and sustainable.
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/80">
              {person.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore case studies
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View resume
              </Link>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li key={capability} className="flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-3 py-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  {capability}
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
              <p className="font-serif text-2xl font-semibold text-primary">Transformation delivery</p>
              <p className="text-xs text-muted-foreground">Across service, deployment and change adoption</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured case studies
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            All case studies
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-primary px-8 py-14 text-center text-primary-foreground lg:px-16">
          <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Turning strategy into operational success.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
            I partner with organisations to translate strategy into practical delivery through business analysis, operational readiness, stakeholder engagement and sustainable adoption.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card/90"
            >
              Let’s connect
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}