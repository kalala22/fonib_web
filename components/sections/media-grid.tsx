'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Newspaper, FolderHeart } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/ui/empty-state'
import { getMediaUrl } from '@/lib/media'
import type { Event, News, Project } from '@/payload-types'
import { cn } from '@/lib/utils'

interface MediaGridProps {
  projects?: Project[]
  events?: Event[]
  news?: News[]
}

/** Section Projets, Évènements & Actualités (<MediaGrid />). */
export function MediaGrid({
  projects = [],
  events = [],
  news = [],
}: MediaGridProps) {
  const [tab, setTab] = useState<'projets' | 'evenements' | 'actualites'>('projets')

  return (
    <section id="media-grid" className="bg-fonib-cream py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Actions & Écosystème"
          title={<>Projets, Événements & <span className="italic text-fonib-orange">Actualités</span></>}
          description="Découvrez nos initiatives sur le terrain, nos prochains rassemblements et les dernières informations de la fondation."
        />

        {/* Tab navigation */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1.5 shadow-lg shadow-black/5 border border-black/5">
            {[
              { id: 'projets', label: 'Projets', icon: FolderHeart },
              { id: 'evenements', label: 'Événements', icon: Calendar },
              { id: 'actualites', label: 'Actualités', icon: Newspaper },
            ].map((t) => {
              const Icon = t.icon
              const isActive = tab === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id as any)}
                  className={cn(
                    'flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300',
                    isActive
                      ? 'bg-fonib-ink text-white shadow-md'
                      : 'text-fonib-ink/60 hover:text-fonib-ink hover:bg-black/5',
                  )}
                >
                  <Icon className="size-4" />
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Contenu Projets */}
        {tab === 'projets' && (
          <div className="mt-16">
            {projects.length === 0 ? (
              <EmptyState
                icon={FolderHeart}
                title="Aucun projet publié pour le moment"
                description="Les contenus seront mis à jour bientôt. Retrouvez prochainement nos nouvelles initiatives sur le terrain."
                actionLabel="Découvrir la fondation"
                actionHref="/a-propos"
              />
            ) : (
              <div className="grid gap-8 md:grid-cols-3">
                {projects.map((p) => {
                  const imageUrl = getMediaUrl(p.image)
                  const projectSlug = (p.slug && p.slug.trim().length > 0) ? p.slug.trim() : String(p.id)
                  const projectUrl = `/projets/${projectSlug}`

                  return (
                    <Card
                      key={p.id || projectSlug}
                      className="group flex flex-col overflow-hidden rounded-3xl border-none bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <Link href={projectUrl} className="relative block h-60 overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={p.title}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <Badge className="absolute left-5 top-5 bg-fonib-orange font-semibold uppercase tracking-wider text-white">
                          {p.category}
                        </Badge>
                      </Link>
                      <CardHeader className="flex-none">
                        <CardTitle className="font-display text-2xl font-bold">
                          <Link href={projectUrl} className="transition-colors hover:text-fonib-orange">
                            {p.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm leading-relaxed text-fonib-ink/70 line-clamp-3">
                          {p.text}
                        </p>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Link
                          href={projectUrl}
                          prefetch={true}
                          className="group/btn inline-flex items-center gap-2 rounded-full bg-fonib-ink px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-fonib-orange"
                        >
                          En savoir plus{' '}
                          <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Contenu Événements */}
        {tab === 'evenements' && (
          <div className="mt-16">
            {events.length === 0 ? (
              <EmptyState
                icon={Calendar}
                title="Aucun événement à venir pour le moment"
                description="Les contenus seront mis à jour bientôt. Les prochaines dates d’ateliers et conférences seront annoncées ici."
                actionLabel="Nous contacter"
                actionHref="/contact"
              />
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {events.map((e) => {
                  const imageUrl = getMediaUrl(e.image)
                  const eventSlug = (e.slug && e.slug.trim().length > 0) ? e.slug.trim() : String(e.id)
                  const eventUrl = `/evenements/${eventSlug}`

                  return (
                    <Card
                      key={e.id || eventSlug}
                      className="group flex flex-col overflow-hidden rounded-3xl border-none bg-white shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <Link href={eventUrl} className="relative block h-48 overflow-hidden">
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
                        <span className="text-[10px] font-bold uppercase tracking-widest text-fonib-orange">
                          {e.date}
                        </span>
                        <CardTitle className="mt-1 font-display text-lg font-bold leading-snug">
                          <Link href={eventUrl} className="transition-colors hover:text-fonib-orange">
                            {e.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardFooter className="p-5 pt-0">
                        <Link
                          href={eventUrl}
                          prefetch={true}
                          className="text-xs font-bold uppercase tracking-wider text-fonib-blue hover:underline"
                        >
                          Détails de l’événement &rarr;
                        </Link>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Contenu Actualités */}
        {tab === 'actualites' && (
          <div className="mt-16">
            {news.length === 0 ? (
              <EmptyState
                icon={Newspaper}
                title="Aucune actualité publiée pour le moment"
                description="Les contenus seront mis à jour bientôt. Restez connectés pour suivre les prochaines actions et annonces de la fondation."
                actionLabel="Nous contacter"
                actionHref="/contact"
              />
            ) : (
              <div className="grid gap-8 md:grid-cols-3">
                {news.map((n) => {
                  const imageUrl = getMediaUrl(n.image)
                  const articleSlug = (n.slug && n.slug.trim().length > 0) ? n.slug.trim() : String(n.id)
                  const articleUrl = `/actualites/${articleSlug}`

                  return (
                    <Card
                      key={n.id || articleSlug}
                      className="group flex flex-col overflow-hidden rounded-3xl border-none bg-white shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <Link href={articleUrl} className="relative block h-56 overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={n.title}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>
                      <CardHeader className="flex-none">
                        <CardTitle className="font-display text-xl font-bold">
                          <Link href={articleUrl} className="transition-colors hover:text-fonib-orange">
                            {n.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm leading-relaxed text-fonib-ink/70 line-clamp-3">
                          {n.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={articleUrl}
                          prefetch={true}
                          className="text-xs font-bold uppercase tracking-wider text-fonib-orange hover:underline"
                        >
                          Lire l’article complet &rarr;
                        </Link>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
