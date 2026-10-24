import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, FolderHeart, HeartHandshake } from 'lucide-react'
import { brand } from '@/lib/site'
import { getMediaUrl, getProjectBySlug } from '@/lib/payload'
import { Badge } from '@/components/ui/badge'
import { RichText } from '@/components/cms/rich-text'
import { EmptyState } from '@/components/ui/empty-state'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: `Projet non trouvé · ${brand.short}`,
    }
  }

  const imageUrl = getMediaUrl(project.image)

  return {
    title: `${project.title} · Projets · ${brand.short}`,
    description: project.text || project.title,
    alternates: {
      canonical: `/projets/${project.slug || slug}`,
    },
    openGraph: {
      title: `${project.title} · ${brand.name}`,
      description: project.text || project.title,
      url: `/projets/${project.slug || slug}`,
      images: [{ url: imageUrl, alt: project.title }],
    },
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-fonib-cream/30 pt-36 pb-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <EmptyState
            icon={FolderHeart}
            title="Projet introuvable"
            description="Ce projet n'existe pas ou a été déplacé. Consultez la liste de nos projets pour découvrir nos initiatives."
            actionLabel="Retour aux projets"
            actionHref="/projets"
          />
        </div>
      </div>
    )
  }

  const imageUrl = getMediaUrl(project.image)

  return (
    <article className="min-h-screen bg-fonib-cream/30 pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        {/* Fil d'ariane & Retour */}
        <div className="mb-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-fonib-ink/60 transition hover:text-fonib-orange"
          >
            <ArrowLeft className="size-4" />
            Retour à tous les projets
          </Link>
        </div>

        {/* En-tête */}
        <header className="mb-10">
          <Badge className="mb-4 bg-fonib-orange uppercase tracking-wider text-white">
            {project.category}
          </Badge>

          <h1 className="font-display text-3xl font-extrabold text-fonib-ink sm:text-4xl md:text-5xl leading-tight">
            {project.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-fonib-ink/75 sm:text-xl">
            {project.text}
          </p>
        </header>

        {/* Image principale */}
        {imageUrl && (
          <div className="relative mb-12 h-72 sm:h-96 md:h-[460px] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        {/* Contenu détaillé du projet */}
        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
          {project.content ? (
            <RichText content={project.content} />
          ) : (
            <p className="text-fonib-ink/80 leading-relaxed">
              {project.text}
            </p>
          )}

          {/* Bannière d'appel à action pour soutenir ce projet */}
          <div className="mt-14 rounded-2xl bg-fonib-cream p-6 sm:p-8 border border-fonib-orange/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-fonib-orange text-white shadow-md">
                <HeartHandshake className="size-7" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-fonib-ink">
                  Vous souhaitez soutenir cette action ?
                </h4>
                <p className="text-xs text-fonib-ink/70 mt-1">
                  Rejoignez les partenaires et donateurs engagés à nos côtés pour changer des vies.
                </p>
              </div>
            </div>

            <Link
              href="/don"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-fonib-orange px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-fonib-ink"
            >
              Faire un don <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 pt-6">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 rounded-full border border-fonib-ink/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-fonib-ink transition hover:bg-fonib-ink hover:text-white"
            >
              <ArrowLeft className="size-3.5" /> Explorer d'autres projets
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-fonib-ink px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-fonib-orange"
            >
              Devenir partenaire
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
