import Image from 'next/image'
import { partners } from '@/lib/site'

export function PartnersMarquee() {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-7xl items-center gap-12 px-5 lg:px-8">
        <p className="min-w-fit text-[11px] font-bold uppercase tracking-[0.25em] text-fonib-orange">Ils nous font confiance</p>
        <div className="partner-marquee flex min-w-max items-center gap-20">
          {[...partners, ...partners].map((p, i) => (
            <Image
              key={i}
              src={p.logo}
              alt={p.name}
              width={180}
              height={80}
              loading="eager"
              fetchPriority="high"
              unoptimized
              className="h-16 sm:h-20 w-auto object-contain transition-all hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
