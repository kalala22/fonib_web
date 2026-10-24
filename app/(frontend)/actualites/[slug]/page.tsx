import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Newspaper } from 'lucide-react'
import { brand } from '@/lib/site'
import { formatDate, getMediaUrl, getNewsBySlug } from '@/lib/payload'
import { RichText } from '@/components/cms/rich-text'
import { EmptyState } from '@/components/ui/empty-state'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getNewsBySlug(slug)

  if (!article) {
    return {
      title: `Actualité non trouvée · ${brand.short}`,
    }
  }

  const imageUrl = getMediaUrl(article.image)

  return {
    title: `${article.title} · Actualités · ${brand.short}`,
    description: article.excerpt || article.title,
    alternates: {
      canonical: `/actualites/${article.slug || slug}`,
    },
    openGraph: {
      title: `${article.title} · ${brand.name}`,
      description: article.excerpt || article.title,
      url: `/actualites/${article.slug || slug}`,
      images: [{ url: imageUrl, alt: article.title }],
      type: 'article',
      publishedTime: article.publishedDate || article.createdAt,
    },
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = await getNewsBySlug(slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-fonib-cream/30 pt-36 pb-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <EmptyState
            icon={Newspaper}
            title="Actualité introuvable"
            description="Cet article n'existe pas ou a été déplacé. Revenez à la liste des actualités pour découvrir nos dernières parutions."
            actionLabel="Retour aux actualités"
            actionHref="/actualites"
          />
        </div>
      </div>
    )
  }

  const imageUrl = getMediaUrl(article.image)
  const formattedDate = formatDate(article.publishedDate || article.createdAt)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedDate || article.createdAt,
    dateModified: article.updatedAt,
    image: [imageUrl.startsWith('http') ? imageUrl : `${brand.url}${imageUrl}`],
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
              href="/actualites"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-fonib-ink/60 transition hover:text-fonib-orange"
            >
              <ArrowLeft className="size-4" />
              Retour aux actualités
            </Link>
          </div>

          {/* En-tête de l'article */}
          <header className="mb-10">
            {formattedDate && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-fonib-orange/10 px-4 py-1.5 text-xs font-semibold text-fonib-orange">
                <Calendar className="size-3.5" />
                <span>Publié le {formattedDate}</span>
              </div>
            )}

            <h1 className="font-display text-3xl font-extrabold text-fonib-ink sm:text-4xl md:text-5xl leading-tight">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mt-6 border-l-4 border-fonib-orange pl-5 font-serif text-lg italic text-fonib-ink/80 sm:text-xl">
                {article.excerpt}
              </p>
            )}
          </header>

          {/* Image illustrative principale */}
          {imageUrl && (
            <div className="relative mb-12 h-72 sm:h-96 md:h-[480px] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={imageUrl}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Corps de l'article */}
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
            {article.content ? (
              <RichText content={article.content} />
            ) : (
              <p className="text-fonib-ink/70">
                {article.excerpt}
              </p>
            )}

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 pt-8">
              <Link
                href="/actualites"
                className="inline-flex items-center gap-2 rounded-full border border-fonib-ink/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-fonib-ink transition hover:bg-fonib-ink hover:text-white"
              >
                <ArrowLeft className="size-3.5" /> Voir toutes les actualités
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-fonib-orange px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-fonib-ink"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
