import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Nos Projets',
  description: 'Découvrez les projets de la Fondation Nicole Bwatshia (FONIB) en République Démocratique du Congo.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos Projets"
        title={<>Des actions concrètes sur le <span className="italic text-fonib-orange">terrain</span></>}
        description="Famille, éducation, santé et promotion des droits de la femme : nos projets s’inscrivent dans une démarche de transformation sociale durable."
        image="/fonib-family.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="group overflow-hidden rounded-3xl border-none bg-white shadow-xl transition hover:-translate-y-2">
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
          ))}
        </div>
      </section>
    </>
  )
}
