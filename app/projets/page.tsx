import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { brand, projects } from '@/lib/site'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Nos Projets',
  description: 'Découvrez les projets de la Fondation Nicole Bwatshia (FONIB) en RDC : éducation, soutien aux orphelins, parité et santé.',
  alternates: {
    canonical: '/projets',
  },
  openGraph: {
    title: `Nos Projets · ${brand.short}`,
    description: 'Actions concrètes de la Fondation FONIB pour le développement social et humain en RDC.',
    url: `${brand.url}/projets`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Nos Projets - FONIB' }],
  },
}

const projectsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Projets de la Fondation Nicole Bwatshia',
  itemListElement: projects.map((p, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: p.title,
    description: p.text,
  })),
}

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <PageHero
        eyebrow="Nos Projets"
        title={<>Des actions concrètes sur le <span className="italic text-fonib-orange">terrain</span></>}
        description="Famille, éducation, santé et promotion des droits de la femme : nos projets s’inscrivent dans une démarche de transformation sociale durable."
        image="/fonib-family.webp"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <RevealGroup className="grid gap-10 md:grid-cols-3">
          {projects.map((p) => (
            <RevealItem key={p.title}>
            <Card className="group h-full overflow-hidden rounded-3xl border-none bg-white shadow-xl transition hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <Badge className="absolute left-5 top-5 bg-fonib-orange uppercase tracking-wider text-white">
                  {p.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-display text-2xl font-bold">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-fonib-ink/70">{p.text}</p>
              </CardContent>
              <CardFooter className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-fonib-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-fonib-orange"
                >
                  Soutenir ce projet <ArrowRight className="size-4" />
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
