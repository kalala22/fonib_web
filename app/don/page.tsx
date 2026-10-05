import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { DonationCta } from '@/components/sections/donation-cta'
import { Pillars } from '@/components/sections/pillars'

export const metadata: Metadata = {
  title: 'Faire un don',
  description: 'Soutenez la Fondation Nicole Bwatshia (FONIB) : un geste aujourd’hui, une vie transformée demain.',
}

export default function DonatePage() {
  return (
    <>
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
