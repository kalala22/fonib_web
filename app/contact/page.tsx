import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ContactBlock } from '@/components/sections/contact-block'
import { brand, contact } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez la Fondation Nicole Bwatshia (FONIB) à Kinshasa, RDC. Téléphone, email, adresse et formulaire de contact.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contact · ${brand.short}`,
    description: 'Prenez contact avec la Fondation Nicole Bwatshia à Kinshasa, RDC.',
    url: `${brand.url}/contact`,
    images: [{ url: '/fonib-hero.png', width: 1200, height: 630, alt: 'Contact - FONIB' }],
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact - ${brand.name}`,
  description: `Coordonnées de la Fondation FONIB à ${contact.city}, RDC.`,
  url: `${brand.url}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: brand.name,
    telephone: contact.phone,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: contact.city,
      addressCountry: 'CD',
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <PageHero
        eyebrow={contact.subtitle}
        title={<>Nous <span className="italic text-fonib-orange">contacter</span></>}
        description={`Retrouvez-nous à ${contact.city}, RDC ou envoyez-nous un message.`}
        image="/fonib-hero.png"
      />
      <ContactBlock />
    </>
  )
}
