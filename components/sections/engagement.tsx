export function Engagement() {
  return (
    <section className="bg-[#1a1715] px-5 py-28 text-white lg:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4b9bc4]">Notre engagement</p>
          <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.05em] sm:text-6xl">Grandir<br /><span className="font-serif font-normal italic text-[#4b9bc4]">ensemble.</span></h2>
        </div>
        <div className="border-l border-white/20 pl-7 sm:pl-12">
          <p className="font-serif text-2xl leading-relaxed text-white/90">« Connaître pour être, être pour connaître. »</p>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60">Notre approche place les communautés au centre : comprendre leurs réalités, renforcer leurs capacités et créer les conditions d’une autonomie véritable.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-widest text-[#4b9bc4]">
            {['Écouter', 'Agir', 'Transmettre'].map((v) => <span key={v} className="rounded-full border border-[#4b9bc4]/40 px-4 py-2">{v}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
