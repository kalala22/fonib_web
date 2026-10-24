import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Newspaper } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/ui/empty-state'
import { brand } from '@/lib/site'
import { formatDate, getMediaUrl, getNewsList } from '@/lib/payload'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Toutes les actualités, communiqués et histoires d’impact de la Fondation Nicole Bwatshia (FONIB).',
  alternates: {
    canonical: '/actualites',
  },
  openGraph: {
    title: `Actualités · ${brand.short}`,
    description: 'Reportages, communiqués et histoires d’impact de FONIB sur le terrain en RDC.',
    url: '/actualites',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Actualités - FONIB' }],
  },
}

export default async function NewsPage() {
  const newsList = await getNewsList()

  const newsJsonLd = newsList.map((n) => {
    const img = getMediaUrl(n.image)
    return {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: n.title,
      description: n.excerpt,
      image: [img.startsWith('http') ? img : `${brand.url}${img}`],
      author: {
        '@type': 'Organization',
        name: brand.name,
        url: brand.url,
      },
      publisher: {
        '@type': 'Organization',
        name: brand.name,
        logo: {
          '@type': 'ImageObject',
          url: `${brand.url}/logo-fonib.png`,
        },
      },
    }
  })

  return (
    <>
      {newsJsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(newsJsonLd) }}
        />
      )}
      <PageHero
        eyebrow="Actualités & Média"
        title={<>Restez informés de notre <span className="italic text-fonib-orange">actualité</span></>}
        description="Retrouvez l’ensemble des reportages, communiqués et histoires d’impact de FONIB sur le terrain."
        image="/fonib-hero.webp"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        {newsList.length === 0 ? (
          <EmptyState
            icon={Newspaper}
            title="Aucune actualité publiée pour le moment"
            description="Les contenus seront mis à jour bientôt. Restez connectés pour suivre les prochaines actions et annonces de la fondation."
            actionLabel="Nous contacter"
            actionHref="/contact"
          />
        ) : (
          <RevealGroup className="grid gap-8 md:grid-cols-3">
            {newsList.map((n) => {
              const imageUrl = getMediaUrl(n.image)
              const pubDate = formatDate(n.publishedDate || n.createdAt)
              const articleSlug = (n.slug && n.slug.trim().length > 0) ? n.slug.trim() : String(n.id)
              const articleUrl = `/actualites/${articleSlug}`

              return (
                <RevealItem key={n.id || articleSlug}>
                  <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-none bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <Link href={articleUrl} className="relative block h-60 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={n.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <CardHeader className="flex-none">
                      {pubDate && (
                        <span className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-fonib-orange">
                          <Calendar className="size-3" /> {pubDate}
                        </span>
                      )}
                      <CardTitle className="font-display text-xl font-bold line-clamp-2">
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
                    <CardFooter className="pt-0">
                      <Link
                        href={articleUrl}
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-fonib-orange transition hover:translate-x-1"
                      >
                        Lire la suite &rarr;
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
