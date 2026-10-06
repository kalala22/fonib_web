import Image from 'next/image'

export function Programs({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section className="bg-[#f7f5f0] px-5 py-28 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {showIntro && (
          <div className="mb-20 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef9224]">Notre raison d’être</p>
              <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">Notre mission,<br /><span className="font-serif font-normal italic text-[#ef9224]">notre impact.</span></h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-[#315b83]">Découvrez les initiatives clés de FONIB pour le changement sociétal et l’autonomisation en RDC. Chaque programme accompagne une transformation concrète et durable.</p>
          </div>
        )}
        <div className="flex flex-col gap-10">
          <article className="sticky top-24 z-10 mx-auto grid w-full max-w-5xl min-h-[320px] overflow-hidden rounded-[30px] bg-white shadow-2xl shadow-black/10 lg:grid-cols-[2fr_3fr]">
            <div className="relative min-h-[220px] overflow-hidden">
              <Image src="/fonib-women.webp" alt="Des femmes collaborent autour d'un projet d'autonomisation" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#151515]/10" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ef9224]">Épanouissement, leadership et sororité</p>
              <h3 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Women<br />Empowerment</h3>
              <p className="mt-8 font-serif text-xl leading-relaxed text-slate-600 sm:text-2xl">“Grâce au programme Women Empowerment, j’ai pu développer mon leadership et trouver un réseau de femmes inspirantes qui m’ont soutenue dans chaque étape de ma croissance...”</p>
            </div>
          </article>
          <article className="sticky top-24 z-20 mx-auto grid w-full max-w-5xl min-h-[320px] overflow-hidden rounded-[30px] bg-white shadow-2xl shadow-black/10 lg:grid-cols-[3fr_2fr]">
            <div className="relative order-2 min-h-[220px] overflow-hidden">
              <Image src="/fonib-family.webp" alt="Des entrepreneurs échangent autour d'une table de travail" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#151515]/10" />
              <span className="absolute bottom-5 right-6 font-serif text-xs italic text-white/80">fonib</span>
            </div>
            <div className="order-1 flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ef9224]">Intelligence collective et performance entrepreneuriale</p>
              <h3 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Business<br />Corner</h3>
              <p className="mt-8 font-serif text-xl leading-relaxed text-slate-600 sm:text-2xl">“Le Business Corner a été un tournant décisif. L’intelligence collective et les échanges avec d’autres dirigeants m’ont permis de repenser ma stratégie et de doubler mon chiffre d’affaires.”</p>
              <div className="mt-8 flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-[#4b9bc4] text-lg font-black text-white">M</span>
                <div><p className="font-bold">Marc Yuma</p><p className="text-sm text-slate-500">Directeur de startup</p></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
