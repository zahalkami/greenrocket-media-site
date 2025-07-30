import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GreenRocket Media - Vystrelime vasi znacku rychle zelene!",
  description:
    "Digitalni marketingova agentura specializujici se na web development, social media management a cenove dostupne balicky. Rychle, chytre a pratelsky.",
  keywords: "web development, social media, digital marketing, SEO, branding, Praha, Ceska republika",
  authors: [{ name: "GreenRocket Media" }],
  openGraph: {
    title: "GreenRocket Media - Vystrelime vasi znacku rychle zelene!",
    description:
      "Digitalni marketingova agentura specializujici se na web development, social media management a cenove dostupne balicky.",
    url: "https://greenrocketmedia.cz",
    siteName: "GreenRocket Media",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GreenRocket Media - Digital Marketing Agency",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenRocket Media - Vystrelime vasi znacku rychle zelene!",
    description:
      "Digitalni marketingova agentura specializujici se na web development, social media management a cenove dostupne balicky.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
