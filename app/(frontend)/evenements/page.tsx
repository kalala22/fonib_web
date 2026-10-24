import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/ui/empty-state'
import { brand } from '@/lib/site'
import { getEventsList, getMediaUrl } from '@/lib/payload'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Événements',
  description: 'Rejoignez les événements, ateliers et rassemblements de la Fondation Nicole Bwatshia (FONIB) à Kinshasa et en RDC.',
  alternates: {
    canonical: '/evenements',
  },
  openGraph: {
    title: `Événements · ${brand.short}`,
    description: 'Ateliers, conférences et campagnes de sensibilisation de FONIB en RDC.',
    url: '/evenements',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Événements - FONIB' }],
  },
}

export default async function EventsPage() {
  const eventList = await getEventsList()

  const eventsJsonLd = eventList.map((e) => {
    const img = getMediaUrl(e.image)
    return {
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
      image: img.startsWith('http') ? img : `${brand.url}${img}`,
    }
  })

  return (
    <>
      {eventsJsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
        />
      )}
      <PageHero
        eyebrow="Événements"
        title={<>Rejoignez-nous lors de nos prochains <span className="italic text-fonib-orange">rassemblements</span></>}
        description="Ateliers, conférences, campagnes de sensibilisation et actions communautaires à Kinshasa et en provinces."
        image="/fonib-women.webp"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        {eventList.length === 0 ? (
          <EmptyState
            icon={Calendar}
            title="Aucun événement à venir pour le moment"
            description="Les contenus seront mis à jour bientôt. Les prochaines dates d’ateliers, conférences et actions communautaires seront annoncées ici."
            actionLabel="Nous contacter"
            actionHref="/contact"
          />
        ) : (
          <RevealGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {eventList.map((e) => {
              const imageUrl = getMediaUrl(e.image)
              const eventSlug = (e.slug && e.slug.trim().length > 0) ? e.slug.trim() : String(e.id)
              const eventUrl = `/evenements/${eventSlug}`

              return (
                <RevealItem key={e.id || eventSlug}>
                  <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-none bg-white shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <Link href={eventUrl} className="relative block h-52 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={e.title}
                        fill
                        sizes="(min-width: 768px) 25vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-semibold text-white">
                        <MapPin className="size-3.5 text-fonib-orange" /> {e.place}
                      </span>
                    </Link>
                    <CardHeader className="flex-1 p-5">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-fonib-orange">
                        <Calendar className="size-3" /> {e.date}
                      </span>
                      <CardTitle className="mt-2 font-display text-lg font-bold leading-snug">
                        <Link href={eventUrl} className="transition-colors hover:text-fonib-orange">
                          {e.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardFooter className="p-5 pt-0">
                      <Link
                        href={eventUrl}
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-fonib-orange hover:underline"
                      >
                        Détails & Inscription &rarr;
                      </Link>
                    </CardFooter>
                  </Card>
                </RevealItem>
              )
            })}
          </RevealGroup>
        )}
      </section>
    </>
  )
}
