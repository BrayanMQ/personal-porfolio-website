import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Brayan Marín Quirós | Full Stack Developer",
  description:
    "Portfolio de Brayan Steven Marín Quirós: Full Stack Developer especializado en React, TypeScript, Node.js y C#. Ingeniero en Computación del TEC Costa Rica.",
  keywords: [
    "Brayan Marín",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "C#",
    "Costa Rica",
    "Software Engineer",
    "Open Source",
    "TEC Costa Rica",
  ],
  authors: [{ name: "Brayan Steven Marín Quirós" }],
  creator: "Brayan Steven Marín Quirós",
  publisher: "Brayan Steven Marín Quirós",
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
  generator: "My personal porftolio",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/profile.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/background.jpg" as="image" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brayan Steven Marín Quirós",
              jobTitle: "Full Stack Developer",
              description:
                "Computer Science Engineer with solid experience in Full Stack development and open-source collaboration",
              url: "https://brayanmarin.dev",
              image: "/images/profile.jpg",
              sameAs: ["https://github.com/BrayanMQ", "https://www.linkedin.com/in/brayan-steven-marin-quiros"],
              knowsAbout: [
                "React",
                "TypeScript",
                "Node.js",
                "C#",
                "PostgreSQL",
                "Full Stack Development",
                "Open Source",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Instituto Tecnológico de Costa Rica",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cartago",
                addressCountry: "Costa Rica",
              },
            }),
          }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
