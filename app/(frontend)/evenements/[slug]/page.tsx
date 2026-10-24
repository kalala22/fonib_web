import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users } from 'lucide-react'
import { brand } from '@/lib/site'
import { getEventBySlug, getMediaUrl } from '@/lib/payload'
import { RichText } from '@/components/cms/rich-text'
import { EmptyState } from '@/components/ui/empty-state'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if (!event) {
    return {
      title: `Événement non trouvé · ${brand.short}`,
    }
  }

  const imageUrl = getMediaUrl(event.image)

  return {
    title: `${event.title} · Événements · ${brand.short}`,
    description: `Rejoignez-nous à ${event.place} : ${event.title}`,
    alternates: {
      canonical: `/evenements/${event.slug || slug}`,
    },
    openGraph: {
      title: `${event.title} · ${brand.name}`,
      description: `Événement FONIB à ${event.place} - Date : ${event.date}`,
      url: `/evenements/${event.slug || slug}`,
      images: [{ url: imageUrl, alt: event.title }],
    },
  }
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if (!event) {
    return (
      <div className="min-h-screen bg-fonib-cream/30 pt-36 pb-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <EmptyState
            icon={Calendar}
            title="Événement introuvable"
            description="Cet événement n'existe pas ou a été déplacé. Consultez la liste de nos événements pour découvrir nos prochains rassemblements."
            actionLabel="Retour aux événements"
            actionHref="/evenements"
          />
        </div>
      </div>
    )
  }

  const imageUrl = getMediaUrl(event.image)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    location: {
      '@type': 'Place',
      name: event.place,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.place,
        addressCountry: 'CD',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: brand.name,
      url: brand.url,
    },
    image: imageUrl.startsWith('http') ? imageUrl : `${brand.url}${imageUrl}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-fonib-cream/30 pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          {/* Fil d'ariane & Retour */}
          <div className="mb-8">
            <Link
              href="/evenements"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-fonib-ink/60 transition hover:text-fonib-orange"
            >
              <ArrowLeft className="size-4" />
              Retour à tous les événements
            </Link>
          </div>

          {/* En-tête de l'événement */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-fonib-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-fonib-orange">
                <Calendar className="size-3.5" /> {event.date}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-fonib-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-fonib-blue">
                <MapPin className="size-3.5" /> {event.place}
              </span>
            </div>

            <h1 className="font-display text-3xl font-extrabold text-fonib-ink sm:text-4xl md:text-5xl leading-tight">
              {event.title}
            </h1>
          </header>

          {/* Image illustrative */}
          {imageUrl && (
            <div className="relative mb-12 h-72 sm:h-96 md:h-[460px] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={imageUrl}
                alt={event.title}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Contenu de l'événement */}
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
            {event.description ? (
              <RichText content={event.description} />
            ) : (
              <p className="text-fonib-ink/75 leading-relaxed">
                Rejoignez-nous à {event.place} pour participer à cet événement.
              </p>
            )}

            {/* Carte inscription / contact */}
            <div className="mt-12 rounded-2xl bg-fonib-cream p-6 sm:p-8 border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-fonib-blue text-white shadow-md">
                  <Users className="size-7" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-fonib-ink">
                    Participer à cet événement
                  </h4>
                  <p className="text-xs text-fonib-ink/70 mt-1">
                    Les inscriptions et informations complémentaires sont disponibles auprès de notre équipe.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-fonib-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-fonib-orange"
              >
                S'inscrire / Nous contacter <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 pt-6">
              <Link
                href="/evenements"
                className="inline-flex items-center gap-2 rounded-full border border-fonib-ink/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-fonib-ink transition hover:bg-fonib-ink hover:text-white"
              >
                <ArrowLeft className="size-3.5" /> Voir les autres rassemblements
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
