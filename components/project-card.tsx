import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          {project.category}
        </span>
        <span className="text-sm text-muted-foreground">{project.year}</span>
      </div>

      <h3 className="mt-5 text-balance font-serif text-xl font-semibold tracking-tight text-card-foreground">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        View case study
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}
