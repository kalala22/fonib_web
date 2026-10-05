import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { AboutSection } from '@/components/sections/about-section'
import { Pillars } from '@/components/sections/pillars'
import { DonationCta } from '@/components/sections/donation-cta'
import { about, brand } from '@/lib/site'

export const metadata: Metadata = {
  title: 'À Propos',
  description: about.text.slice(0, 160),
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: `À Propos · ${brand.short}`,
    description: 'Découvrez la vision, la mission et l’action sociale de la Fondation Nicole Bwatshia (FONIB) en RDC.',
    url: `${brand.url}/a-propos`,
    images: [{ url: '/fonib-women.webp', width: 1200, height: 630, alt: 'À Propos - FONIB' }],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: brand.url },
    { '@type': 'ListItem', position: 2, name: 'À Propos', item: `${brand.url}/a-propos` },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow="Qui sommes-nous ?"
        title={<>Notre mission pour le <span className="italic text-fonib-orange">capital humain</span></>}
        description={`« ${about.text} »`}
        image="/fonib-women.webp"
      />
      <AboutSection />
      <Pillars />
      <DonationCta />
    </>
  )
}
