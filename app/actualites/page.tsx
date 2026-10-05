import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { brand, news } from '@/lib/site'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Toutes les actualités, communiqués et histoires d’impact de la Fondation Nicole Bwatshia (FONIB).',
  alternates: {
    canonical: '/actualites',
  },
  openGraph: {
    title: `Actualités · ${brand.short}`,
    description: 'Reportages, communiqués et histoires d’impact de FONIB sur le terrain en RDC.',
    url: `${brand.url}/actualites`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Actualités - FONIB' }],
  },
}

const newsJsonLd = news.map((n) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: n.title,
  description: n.excerpt,
  image: [`${brand.url}${n.image}`],
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
}))

export default function NewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsJsonLd) }}
      />
      <PageHero
        eyebrow="Actualités & Média"
        title={<>Restez informés de notre <span className="italic text-fonib-orange">actualité</span></>}
        description="Retrouvez l’ensemble des reportages, communiqués et histoires d’impact de FONIB sur le terrain."
        image="/fonib-hero.webp"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <RevealGroup className="grid gap-8 md:grid-cols-3">
          {news.map((n, idx) => (
            <RevealItem key={idx}>
            <Card className="group h-full overflow-hidden rounded-3xl border-none bg-white shadow-xl transition hover:-translate-y-2">
              <div className="relative h-60 overflow-hidden">
                <Image src={n.image} alt={n.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-xl font-bold">{n.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-fonib-ink/70">{n.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="text-xs font-bold uppercase tracking-wider text-fonib-orange hover:underline">
                  Lire la suite &rarr;
                </Link>
              </CardFooter>
            </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  )
}
