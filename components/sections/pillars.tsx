import Image from 'next/image'
import { pillars } from '@/lib/site'
import { SectionHeading } from '@/components/sections/section-heading'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'

/** Piliers d'intervention (<FeatureCards />). */
export function Pillars() {
  return (
    <section id="piliers" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
      <SectionHeading eyebrow="Nos piliers d'intervention" title={<>Deux piliers, une même <span className="italic text-fonib-orange">devise</span></>} />
      <RevealGroup className="mt-16 grid gap-8 md:grid-cols-2">
        {pillars.map((p, i) => (
          <RevealItem key={p.title}>
            <article className="group relative h-full overflow-hidden rounded-[2.5rem] bg-fonib-ink text-white shadow-2xl">
              <div className="relative h-80 overflow-hidden sm:h-96">
                <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                  fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-fonib-ink via-fonib-ink/30 to-transparent" />
                <span className="absolute left-8 top-8 font-display text-7xl font-bold text-white/20">0{i + 1}</span>
              </div>
              <div className="relative -mt-24 p-8 sm:p-10">
                <span className={`mb-4 block h-1 w-14 rounded-full transition-all duration-500 group-hover:w-28 ${i === 0 ? 'bg-fonib-orange' : 'bg-fonib-blue'}`} />
                <h3 className="font-display text-3xl font-bold sm:text-4xl">{p.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-white/70">« {p.text} »</p>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
