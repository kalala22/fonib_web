import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ContactBlock } from '@/components/sections/contact-block'
import { contact } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez la Fondation Nicole Bwatshia (FONIB) à Kinshasa, RDC.',
}

export default function ContactPage() {
  return (
    <>
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
