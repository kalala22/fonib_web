import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { brand, events } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Événements',
  description: 'Rejoignez les événements, ateliers et rassemblements de la Fondation Nicole Bwatshia (FONIB) à Kinshasa et en RDC.',
  alternates: {
    canonical: '/evenements',
  },
  openGraph: {
    title: `Événements · ${brand.short}`,
    description: 'Ateliers, conférences et campagnes de sensibilisation de FONIB en RDC.',
    url: `${brand.url}/evenements`,
    images: [{ url: '/fonib-women.png', width: 1200, height: 630, alt: 'Événements - FONIB' }],
  },
}

const eventsJsonLd = events.map((e) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: e.title,
  location: {
    '@type': 'Place',
    name: e.place,
    address: {
      '@type': 'PostalAddress',
      addressLocality: e.place,
      addressCountry: 'CD',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: brand.name,
    url: brand.url,
  },
  image: `${brand.url}${e.image}`,
}))

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      <PageHero
        eyebrow="Événements"
        title={<>Rejoignez-nous lors de nos prochains <span className="italic text-fonib-orange">rassemblements</span></>}
        description="Ateliers, conférences, campagnes de sensibilisation et actions communautaires à Kinshasa et en provinces."
        image="/fonib-women.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {events.map((e, idx) => (
            <Card key={idx} className="group overflow-hidden rounded-3xl border-none bg-white shadow-xl transition hover:-translate-y-2">
              <div className="relative h-52 overflow-hidden">
                <Image src={e.image} alt={e.title} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-semibold text-white">
                  <MapPin className="size-3.5 text-fonib-orange" /> {e.place}
                </span>
              </div>
              <CardHeader className="p-5">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-fonib-orange">
                  <Calendar className="size-3" /> {e.date}
                </span>
                <CardTitle className="mt-2 font-display text-lg font-bold leading-snug">{e.title}</CardTitle>
              </CardHeader>
              <CardFooter className="p-5 pt-0">
                <Link href="/contact" className="text-xs font-bold uppercase tracking-wider text-fonib-orange hover:underline">
                  S'inscrire / En savoir plus &rarr;
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
