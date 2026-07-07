import { siteUrl } from "@/lib/site"
import type { MetadataRoute } from "next"

const staticRoutes = [
  "",
  "about",
  "projects",
  "experience",
  "skills",
  "resume",
  "recommendations",
  "contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))
}
