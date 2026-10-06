import Image from 'next/image'
import { partners, partnersTitle } from '@/lib/site'
import { Reveal } from '@/components/motion/reveal'

/** Bandeau des partenaires (<TrustStats />) avec grands logos officiels. */
export function TrustStats() {
  const marqueeItems = [...partners, ...partners, ...partners, ...partners]

  return (
    <section aria-label="Partenaires" className="relative z-10 px-5 py-10 lg:px-8">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white p-8 lg:p-12 shadow-xl shadow-black/5 border border-black/5">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.35em] text-fonib-orange">
            « {partnersTitle} »
          </p>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
            <div className="partner-marquee flex w-max items-center gap-20 py-4">
              {marqueeItems.map((p, i) => (
                <div key={i} className="group flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={220}
                    height={100}
                    loading="eager"
                    fetchPriority="high"
                    unoptimized
                    className="h-20 sm:h-24 w-auto max-w-[220px] object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 drop-shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
