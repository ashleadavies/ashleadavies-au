import Link from "next/link"
import { nav, person } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-serif text-lg font-semibold">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                AD
              </span>
              {person.name}
            </Link>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              {person.tagline}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{person.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Explore</h3>
              <ul className="mt-4 space-y-2.5">
                {nav.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">More</h3>
              <ul className="mt-4 space-y-2.5">
                {nav.slice(4).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect</h3>
              <ul className="mt-4 space-y-2.5">
                {person.socials.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <p>
  Business Analysis &middot; Business Transformation &middot; Operational Readiness
</p>
        </div>
      </div>
    </footer>
  )
}
