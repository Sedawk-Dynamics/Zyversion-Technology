import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GlobalInteractions from '@/components/utils/GlobalInteractions'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zyverion Technologies — Engineered Intelligence',
  description:
    'Zyverion Technologies delivers next-generation AI-driven solutions, custom software development, cloud infrastructure, and digital transformation services for modern enterprises.',
  keywords: [
    'AI solutions',
    'custom software development',
    'cloud infrastructure',
    'cybersecurity',
    'digital transformation',
    'enterprise technology',
    'Zyverion',
  ],
  authors: [{ name: 'Zyverion Technologies Private Limited' }],
  creator: 'Zyverion Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zyverionex.com',
    siteName: 'Zyverion Technologies',
    title: 'Zyverion Technologies — Engineered Intelligence',
    description:
      'Next-generation technology company engineering intelligent, scalable, and secure digital systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyverion Technologies — Engineered Intelligence',
    description:
      'Next-generation technology company engineering intelligent, scalable, and secure digital systems.',
  },
}

export const viewport: Viewport = {
  themeColor: '#3b9fff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <GlobalInteractions />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
