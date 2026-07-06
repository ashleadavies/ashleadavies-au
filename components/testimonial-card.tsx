import type { ReactNode } from "react"

interface TestimonialCardProps {
  quote: string
  name: string
  position: string
  organisation: string
  initials?: string
  image?: string
  category?: string
  dateLabel?: string
}

export function TestimonialCard({
  quote,
  name,
  position,
  organisation,
  initials,
  image,
  category,
  dateLabel,
}: TestimonialCardProps) {
  return (
    <figure className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <span className="text-primary/40">
          <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
            <path d="M9.5 5.5c-2.4 1.4-4 4-4 7.1 0 2.3 1.1 4.2 2.7 5.4a1 1 0 0 0 1.4-.2l.7-1c.3-.4.2-1-.2-1.2A4.3 4.3 0 0 1 8 12.6c0-1.7.8-3.3 2.1-4.4l.4-.3a1 1 0 0 0-.2-1.7l-.8-.3ZM18.5 5.5c-2.4 1.4-4 4-4 7.1 0 2.3 1.1 4.2 2.7 5.4a1 1 0 0 0 1.4-.2l.7-1c.3-.4.2-1-.2-1.2A4.3 4.3 0 0 1 17 12.6c0-1.7.8-3.3 2.1-4.4l.4-.3a1 1 0 0 0-.2-1.7l-.8-.3Z" />
          </svg>
        </span>
        {category ? (
          <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {category}
          </span>
        ) : null}
      </div>

      <blockquote className="mt-4 text-pretty text-sm leading-relaxed text-foreground/85">{quote}</blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        {image ? (
          <img src={image} alt={`${name} profile`} className="size-10 rounded-full object-cover" />
        ) : (
          <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary">
            {initials ?? name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="whitespace-pre-line text-xs text-muted-foreground">
            {position}
            {position && organisation ? "\n" : ""}
            {organisation}
          </p>
          {dateLabel ? <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">{dateLabel}</p> : null}
        </div>
      </figcaption>
    </figure>
  )
}
