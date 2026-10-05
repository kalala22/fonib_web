import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/sonner'
import { brand, hero } from '@/lib/site'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.short} — ${brand.name}`,
    template: `%s · ${brand.short}`,
  },
  description: hero.text.slice(0, 158),
  keywords: ['FONIB', 'Fondation Nicole Bwatshia', 'RDC', 'Kinshasa', 'ONG', 'éducation', 'orphelins', 'malnutrition', 'droits de la femme'],
  openGraph: {
    type: 'website',
    locale: 'fr_CD',
    siteName: brand.name,
    title: `${brand.short} — ${brand.motto}`,
    description: 'Investir dans le capital humain et les valeurs sociétales en RDC.',
    images: ['/fonib-hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#12110f',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`light ${montserrat.variable} ${playfair.variable}`}>
      <body className="bg-fonib-cream text-fonib-ink antialiased">
        <Header />
        <main id="contenu" className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
