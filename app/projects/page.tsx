import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected transformation case studies across public sector, financial services and operations.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Transformation programmes with measurable impact"
        description="A selection of engagements spanning service redesign, enterprise platforms, AI and post-merger integration. Every case study follows the same structured story, from challenge to outcome."
      />
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-8 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
