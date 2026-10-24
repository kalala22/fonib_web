import React from 'react'

export default function LoadingNewsDetail() {
  return (
    <div className="min-h-screen bg-fonib-cream/30 pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 animate-pulse">
        {/* Bouton retour skeleton */}
        <div className="mb-8 h-4 w-36 rounded-full bg-black/10" />

        {/* En-tête skeleton */}
        <header className="mb-10 space-y-4">
          <div className="h-6 w-44 rounded-full bg-fonib-orange/20" />
          <div className="h-10 w-4/5 rounded-2xl bg-black/15" />
          <div className="h-10 w-2/3 rounded-2xl bg-black/15" />
          <div className="mt-4 h-16 w-full rounded-2xl bg-black/5" />
        </header>

        {/* Image skeleton */}
        <div className="relative mb-12 h-72 sm:h-96 md:h-[480px] w-full rounded-3xl bg-black/10" />

        {/* Corps skeleton */}
        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12 space-y-4">
          <div className="h-4 w-full rounded bg-black/10" />
          <div className="h-4 w-11/12 rounded bg-black/10" />
          <div className="h-4 w-4/5 rounded bg-black/10" />
          <div className="h-4 w-full rounded bg-black/10" />
          <div className="h-4 w-3/4 rounded bg-black/10" />
          <div className="pt-6 border-t border-black/5 flex justify-between">
            <div className="h-8 w-32 rounded-full bg-black/10" />
            <div className="h-8 w-28 rounded-full bg-fonib-orange/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

