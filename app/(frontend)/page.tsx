import type { Metadata } from 'next'
import { HomeHero } from '@/components/sections/home-hero'
import { TrustStats } from '@/components/sections/trust-stats'
import { Pillars } from '@/components/sections/pillars'
import { AboutSection } from '@/components/sections/about-section'
import { MediaGrid } from '@/components/sections/media-grid'
import { DonationCta } from '@/components/sections/donation-cta'
import { ContactBlock } from '@/components/sections/contact-block'
import { brand, hero } from '@/lib/site'

export const metadata: Metadata = {
  title: `${brand.short} — Accueil | ${brand.name}`,
  description: hero.text.slice(0, 160),
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStats />
      <Pillars />
      <AboutSection />
      <MediaGrid />
      <DonationCta />
      <ContactBlock />
    </>
  )
}
