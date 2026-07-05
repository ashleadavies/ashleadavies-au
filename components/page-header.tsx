export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-4 pt-16 lg:px-8 lg:pt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
