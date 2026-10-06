import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { SocialIcon } from '@/components/social-icon'
import { hero, socials } from '@/lib/site'

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-fonib-ink text-white">
      {/* Fond : photo + voiles + halos colorés */}
      <Image src="/fonib-hero.webp" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fonib-ink via-fonib-ink/90 to-fonib-ink/40" />
      <div aria-hidden className="absolute -left-40 top-1/3 -z-10 size-[520px] rounded-full bg-fonib-orange/20 blur-[120px]" />
      <div aria-hidden className="absolute -right-20 bottom-0 -z-10 size-[560px] rounded-full bg-fonib-green/25 blur-[120px]" />

      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 pb-20 pt-32 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full rounded-bl-none bg-fonib-orange px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] shadow-lg shadow-fonib-orange/30">
            Fondation Nicole Bwatshia
          </span>
          <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Connaître <span className="italic text-fonib-orange">pour être</span>,<br />
            Être <span className="italic text-fonib-blue">pour connaître</span>.
          </h1>
          <div className="relative mt-8 max-w-xl">
            <Quote aria-hidden className="absolute -left-2 -top-3 size-8 rotate-180 text-white/10" />
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">{hero.text}</p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link id="hero-cta-projets" href="/projets" className="group inline-flex items-center justify-center gap-2 rounded-full bg-fonib-orange px-8 py-4 font-semibold shadow-xl shadow-fonib-orange/25 transition hover:bg-white hover:text-fonib-ink">
              Découvrir nos projets <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link id="hero-cta-don" href="/don" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white hover:text-fonib-ink">
              Faire un don
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Suivez-nous —</span>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:scale-110 hover:bg-fonib-orange">
                <SocialIcon name={s.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Portrait de la présidente */}
        <div className="relative mx-auto w-full max-w-md self-end lg:max-w-none">
          <div aria-hidden className="absolute inset-x-6 bottom-0 top-16 rounded-t-full bg-gradient-to-b from-fonib-green/70 via-fonib-green/30 to-transparent" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 top-8 animate-spin-slow rounded-full border border-dashed border-white/15" />
          <Image
            src={hero.portrait}
            alt={`${hero.signature.name}, ${hero.signature.title}`}
            width={370}
            height={600}
            priority
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 78vw"
            className="relative mx-auto h-auto w-[78%] drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
          />
          <div className="absolute bottom-8 left-0 right-0 mx-auto w-fit animate-float-slow rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-center shadow-2xl backdrop-blur-xl sm:left-auto sm:right-0 sm:mx-0">
            <p className="font-display text-lg font-bold">{hero.signature.name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-fonib-orange">{hero.signature.title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
