import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/sonner'
import { brand, fonibLogo, hero, socials } from '@/lib/site'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  alternates: {
    canonical: '/',
  },
  title: {
    default: `${brand.short} — ${brand.name} | RDC`,
    template: `%s · ${brand.short}`,
  },
  description: hero.text.slice(0, 160),
  keywords: [
    'FONIB',
    'Fondation Nicole Bwatshia',
    'Nicole Bwatshia',
    'RDC',
    'Kinshasa',
    'ONG Kinshasa',
    'ONG RDC',
    'action sociale Congo',
    'soutien aux orphelins RDC',
    'éducation RDC',
    'droits de la femme RDC',
    'lutte contre la malnutrition RDC',
    'bien-être de l’enfant',
    'humanitaire Congo',
  ],
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  publisher: brand.name,
  openGraph: {
    type: 'website',
    locale: 'fr_CD',
    url: brand.url,
    siteName: brand.name,
    title: `${brand.short} — ${brand.motto}`,
    description: 'Investir dans le capital humain et les valeurs sociétales en République Démocratique du Congo.',
    images: [
      {
        url: '/fonib-hero.png',
        width: 1200,
        height: 630,
        alt: `${brand.short} — ${brand.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brand.short} — ${brand.name}`,
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: brand.name,
  alternateName: brand.short,
  url: brand.url,
  logo: `${brand.url}${fonibLogo}`,
  image: `${brand.url}/fonib-hero.png`,
  description: hero.text,
  slogan: brand.motto,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kinshasa',
    addressCountry: 'CD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+243819999960',
    contactType: 'customer service',
    email: 'courrier_fonib@fonib.cd',
    availableLanguage: 'French',
  },
  sameAs: socials.map((s) => s.href),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`light ${montserrat.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
