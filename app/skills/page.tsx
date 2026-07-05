import type { Metadata } from "next"
import { BarChart3, Boxes, Brain, ClipboardList, GitBranch, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Skills",
  description: "Core capabilities across business analysis, transformation and operational readiness.",
}

const skillGroups = [
  {
    icon: ClipboardList,
    title: "Business Analysis",
    skills: ["Requirements engineering", "Process mapping", "Stakeholder management", "Gap analysis", "User stories"],
  },
  {
    icon: GitBranch,
    title: "Transformation",
    skills: ["Target operating models", "Change management", "Roadmapping", "Benefits realisation", "Governance"],
  },
  {
    icon: Boxes,
    title: "Operational Readiness",
    skills: ["Cutover planning", "Readiness assessments", "Hypercare", "Runbooks", "Contingency planning"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    skills: ["Use-case framing", "RPA delivery", "Human-in-the-loop design", "Data requirements", "Model governance"],
  },
  {
    icon: BarChart3,
    title: "Data & Insight",
    skills: ["KPI design", "Power BI / Tableau", "Demand analysis", "Reporting", "Data quality"],
  },
  {
    icon: Users,
    title: "Leadership",
    skills: ["Workshop facilitation", "Coaching & mentoring", "Executive communication", "Cross-functional delivery"],
  },
]

const proficiency = [
  { label: "Business Analysis", value: 95 },
  { label: "Digital Transformation", value: 90 },
  { label: "Operational Readiness", value: 92 },
  { label: "Stakeholder Engagement", value: 88 },
  { label: "AI & Automation", value: 80 },
]

const tools = [
  "Jira",
  "Confluence",
  "Azure DevOps",
  "Power BI",
  "Tableau",
  "Miro",
  "Visio",
  "ServiceNow",
  "Salesforce",
  "SAP",
  "UiPath",
  "Smartsheet",
]

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Skills that turn strategy into delivery"
        description="A blended toolkit across analysis, transformation, readiness and data — grounded in strong stakeholder leadership."
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 pt-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <group.icon className="size-5" />
              </span>
              <h2 className="mt-4 font-serif text-lg font-semibold">{group.title}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-serif text-2xl font-semibold tracking-tight">Proficiency</h2>
            <div className="mt-6 space-y-5">
              {proficiency.map((p) => (
                <div key={p.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{p.label}</span>
                    <span className="text-muted-foreground">{p.value}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${p.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-serif text-2xl font-semibold tracking-tight">Tools &amp; platforms</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Placeholder copy. A representative set of the tools I use to deliver analysis and transformation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
