import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FolderHeart } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/ui/empty-state'
import { brand } from '@/lib/site'
import { getMediaUrl, getProjectsList } from '@/lib/payload'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Nos Projets',
  description: 'Découvrez les projets de la Fondation Nicole Bwatshia (FONIB) en RDC : éducation, soutien aux orphelins, parité et santé.',
  alternates: {
    canonical: '/projets',
  },
  openGraph: {
    title: `Nos Projets · ${brand.short}`,
    description: 'Actions concrètes de la Fondation FONIB pour le développement social et humain en RDC.',
    url: '/projets',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Nos Projets - FONIB' }],
  },
}

export default async function ProjectsPage() {
  const projectList = await getProjectsList()

  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Projets de la Fondation Nicole Bwatshia',
    itemListElement: projectList.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: p.title,
      description: p.text,
    })),
  }

  return (
    <>
      {projectList.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
        />
      )}
      <PageHero
        eyebrow="Nos Projets"
        title={<>Des actions concrètes sur le <span className="italic text-fonib-orange">terrain</span></>}
        description="Famille, éducation, santé et promotion des droits de la femme : nos projets s’inscrivent dans une démarche de transformation sociale durable."
        image="/fonib-family.webp"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        {projectList.length === 0 ? (
          <EmptyState
            icon={FolderHeart}
            title="Aucun projet publié pour le moment"
            description="Les contenus seront mis à jour bientôt. Nos équipes préparent la publication de nos initiatives et programmes récents."
            actionLabel="Faire un don"
            actionHref="/don"
          />
        ) : (
          <RevealGroup className="grid gap-10 md:grid-cols-3">
            {projectList.map((p) => {
              const imageUrl = getMediaUrl(p.image)
              const projectSlug = (p.slug && p.slug.trim().length > 0) ? p.slug.trim() : String(p.id)
              const projectUrl = `/projets/${projectSlug}`

              return (
                <RevealItem key={p.id || projectSlug}>
                  <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-none bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <Link href={projectUrl} className="relative block h-64 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <Badge className="absolute left-5 top-5 bg-fonib-orange uppercase tracking-wider text-white">
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
                        className="inline-flex items-center gap-2 rounded-full bg-fonib-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-fonib-orange"
                      >
                        Découvrir ce projet <ArrowRight className="size-4" />
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
