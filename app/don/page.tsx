import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { DonationCta } from '@/components/sections/donation-cta'
import { Pillars } from '@/components/sections/pillars'

import { brand } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Faire un don',
  description: 'Soutenez la Fondation Nicole Bwatshia (FONIB) en RDC : un geste aujourd’hui, une vie transformée demain.',
  alternates: {
    canonical: '/don',
  },
  openGraph: {
    title: `Faire un don · ${brand.short}`,
    description: 'Soutenez nos programmes sociaux, d’éducation et de santé en République Démocratique du Congo.',
    url: `${brand.url}/don`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Faire un don - FONIB' }],
  },
}

const donateJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DonateAction',
  name: 'Faire un don à la Fondation Nicole Bwatshia',
  description: "Soutien aux programmes d'éducation, de nutrition et d'aide aux orphelins en RDC.",
  recipient: {
    '@type': 'Organization',
    name: brand.name,
    url: brand.url,
  },
}

export default function DonatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateJsonLd) }}
      />
      <PageHero
        eyebrow="Soutenir FONIB"
        title={<>Un geste aujourd’hui.<br /><span className="italic text-fonib-orange">Une vie transformée.</span></>}
        description="Votre générosité permet de financer directement nos programmes d'éducation, de nutrition et de soutien aux orphelins."
        image="/fonib-education.png"
      />
      <DonationCta />
      <Pillars />
    </>
  )
}
