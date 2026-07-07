import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ashleadavies.au"),
  title: {
    default: "Ashlea Davies — Business Analyst & Business Transformation Consultant",
    template: "%s — Ashlea Davies",
  },
  description:
    "Ashlea Davies is a Business Analyst, Business Transformation Consultant and Operational Readiness Specialist helping enterprises lead change with confidence.",
  applicationName: "Ashlea Davies",
  authors: [{ name: "Ashlea Davies" }],
  generator: "v0.app",
  icons: {
    icon: [
      "/logos/favicon.ico",
      { url: "/logos/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/logos/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/logos/apple-icon.png",
    shortcut: "/logos/favicon.ico",
  },
  openGraph: {
    title: "Ashlea Davies — Business Analyst & Business Transformation Consultant",
    description:
      "Ashlea Davies is a Business Analyst, Business Transformation Consultant and Operational Readiness Specialist helping enterprises lead change with confidence.",
    url: "https://ashleadavies.au",
    siteName: "Ashlea Davies",
    type: "website",
    locale: "en_AU",
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
    title: "Ashlea Davies — Business Analyst & Business Transformation Consultant",
    description:
      "Ashlea Davies is a Business Analyst, Business Transformation Consultant and Operational Readiness Specialist helping enterprises lead change with confidence.",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e3dcd4" },
    { media: "(prefers-color-scheme: dark)", color: "#14100d" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
