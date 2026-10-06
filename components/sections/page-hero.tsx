import Image from 'next/image'

type PageHeroProps = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  image?: string
}

export function PageHero({ eyebrow, title, description, image = '/fonib-hero.webp' }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-fonib-ink text-white pt-40 pb-24 lg:pt-48 lg:pb-32">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-fonib-ink/90 via-fonib-ink/80 to-fonib-ink" />
      <div aria-hidden className="absolute -right-20 top-1/2 -z-10 size-96 -translate-y-1/2 rounded-full bg-fonib-orange/20 blur-3xl" />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center lg:px-8">
        <span className="inline-flex rounded-full bg-fonib-orange px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-lg shadow-fonib-orange/30">
          {eyebrow}
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-3xl text-center text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
