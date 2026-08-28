import type { Metadata } from 'next'
import { Cinzel, Fira_Mono, Josefin_Sans } from 'next/font/google'
import './globals.css'

const display = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '700'],
})

const body = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '600'],
})

const mono = Fira_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://roundbrief.com'),
  title: 'RoundBrief.com — Domain available for acquisition',
  description:
    'RoundBrief.com is available for acquisition: a concise .com for board papers, executive summaries and meeting intelligence.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'RoundBrief.com — Domain available for acquisition',
    description:
      'A polished .com for board papers, funding updates, executive summaries and meeting intelligence.',
    url: '/',
    siteName: 'RoundBrief.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
