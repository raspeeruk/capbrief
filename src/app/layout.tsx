import type { Metadata } from 'next'
import { Cinzel, Josefin_Sans, Fira_Mono } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '700'],
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '600'],
})

const firaMono = Fira_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'CapBrief — Cap Table to Investor-Ready Equity Reports',
  description: 'Upload a messy cap table CSV. AI infers missing data and calculates dilution. Get an investor-ready PDF report in minutes.',
  openGraph: {
    title: 'CapBrief — Cap Table to Investor-Ready Equity Reports',
    description: 'Upload a messy cap table CSV. AI infers missing data and calculates dilution. Get an investor-ready PDF report in minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${josefinSans.variable} ${firaMono.variable}`}>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  )
}
