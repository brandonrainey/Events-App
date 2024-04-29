import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Events App',
  description: 'Events App',
  icons: {
    icon: '/assets/images/logo.webp',
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="preload" href="/assets/images/hero-image-2.webp" as="image" />
          <link rel="preload" href="/assets/images/raked-pattern-low.webp" as="image" />
        </head>
        <body className={`${poppins.variable} bg-raked-pattern`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
