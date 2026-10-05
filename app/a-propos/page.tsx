import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { AboutSection } from '@/components/sections/about-section'
import { Pillars } from '@/components/sections/pillars'
import { DonationCta } from '@/components/sections/donation-cta'
import { about, brand } from '@/lib/site'

export const metadata: Metadata = {
  title: 'À Propos',
  description: about.text.slice(0, 160),
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Qui sommes-nous ?"
        title={<>Notre mission pour le <span className="italic text-fonib-orange">capital humain</span></>}
        description={`« ${about.text} »`}
        image="/fonib-women.png"
      />
      <AboutSection />
      <Pillars />
      <DonationCta />
    </>
  )
}
