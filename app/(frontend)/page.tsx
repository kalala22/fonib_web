import type { Metadata } from 'next'
import { HomeHero } from '@/components/sections/home-hero'
import { TrustStats } from '@/components/sections/trust-stats'
import { Pillars } from '@/components/sections/pillars'
import { AboutSection } from '@/components/sections/about-section'
import { MediaGrid } from '@/components/sections/media-grid'
import { DonationCta } from '@/components/sections/donation-cta'
import { ContactBlock } from '@/components/sections/contact-block'
import { brand, hero } from '@/lib/site'
import { getEventsList, getNewsList, getProjectsList } from '@/lib/payload'

export const metadata: Metadata = {
  title: `${brand.short} — Accueil | ${brand.name}`,
  description: hero.text.slice(0, 160),
}

export default async function HomePage() {
  const [projects, events, news] = await Promise.all([
    getProjectsList(6),
    getEventsList(4),
    getNewsList(3),
  ])

  return (
    <>
      <HomeHero />
      <TrustStats />
      <Pillars />
      <AboutSection />
      <MediaGrid projects={projects} events={events} news={news} />
      <DonationCta />
      <ContactBlock />
    </>
  )
}
