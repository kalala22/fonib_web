import React from 'react'

export default function LoadingEventDetail() {
  return (
    <div className="min-h-screen bg-fonib-cream/30 pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 animate-pulse">
        <div className="mb-8 h-4 w-44 rounded-full bg-black/10" />

        <header className="mb-10 space-y-4">
          <div className="flex gap-3">
            <div className="h-6 w-28 rounded-full bg-fonib-orange/20" />
            <div className="h-6 w-28 rounded-full bg-fonib-blue/20" />
          </div>
          <div className="h-10 w-4/5 rounded-2xl bg-black/15" />
        </header>

        <div className="relative mb-12 h-72 sm:h-96 md:h-[460px] w-full rounded-3xl bg-black/10" />

        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12 space-y-4">
          <div className="h-4 w-full rounded bg-black/10" />
          <div className="h-4 w-11/12 rounded bg-black/10" />
          <div className="h-24 w-full rounded-2xl bg-fonib-cream mt-8" />
        </div>
      </div>
    </div>
  )
}

