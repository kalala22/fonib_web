'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Compass, Heart, Users, Target } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'
import { about } from '@/lib/site'
import { cn } from '@/lib/utils'

const icons = {
  vision: Target,
  action: Heart,
  collaboration: Users,
} as const

/** Section « À propos » (<AboutSection />) inspirée de Meet & Grow avec présentation interactive. */
export function AboutSection() {
  const [activeTab, setActiveTab] = useState<string>('vision')

  return (
    <section id="a-propos" className="bg-white py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={`${about.title} — ${about.subtitle}`}
          title={<>Engagés pour un changement <span className="italic text-fonib-orange">durable</span></>}
          description={`« ${about.text} »`}
        />

        {/* Section interactive split-screen */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Menu interactif Vision / Action / Collaboration */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {about.blocks.map((b) => {
              const Icon = icons[b.key as keyof typeof icons] || Compass
              const isSelected = activeTab === b.key
              return (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => setActiveTab(b.key)}
                  className={cn(
                    'group text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-5',
                    isSelected
                      ? 'bg-fonib-ink text-white border-fonib-ink shadow-xl shadow-black/10 scale-[1.02]'
                      : 'bg-fonib-cream/50 text-fonib-ink border-black/5 hover:border-fonib-orange/40 hover:bg-white',
                  )}
                >
                  <span
                    className={cn(
                      'grid size-12 shrink-0 place-items-center rounded-xl transition-colors',
                      isSelected ? 'bg-fonib-orange text-white' : 'bg-fonib-orange/10 text-fonib-orange group-hover:bg-fonib-orange group-hover:text-white',
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{b.title}</h3>
                    <p className={cn('mt-2 text-sm leading-relaxed line-clamp-2', isSelected ? 'text-white/70' : 'text-fonib-ink/60')}>
                      {b.text}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Card d'affichage du détail */}
          <div className="relative overflow-hidden rounded-3xl bg-fonib-ink p-8 text-white shadow-2xl lg:col-span-7 lg:p-12">
            <div aria-hidden className="absolute -right-10 -top-10 size-64 rounded-full bg-fonib-orange/20 blur-3xl" />
            <div aria-hidden className="absolute -left-10 -bottom-10 size-64 rounded-full bg-fonib-blue/20 blur-3xl" />

            {about.blocks.map((b) => {
              if (b.key !== activeTab) return null
              const Icon = icons[b.key as keyof typeof icons] || Compass
              return (
                <div key={b.key} className="relative animate-fade-up">
                  <div className="flex items-center gap-3 text-fonib-orange">
                    <Icon className="size-7" />
                    <span className="text-xs font-bold uppercase tracking-[0.25em]">{b.title}</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
                    {b.title === 'Vision' && 'S’imprégner pour transformer l’avenir'}
                    {b.title === 'Action' && 'Baliser l’amont de la rivière'}
                    {b.title === 'Collaboration' && 'Niveler la société vers le haut'}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
                    « {b.text} »
                  </p>
                  <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">FONIB · RDC</span>
                    <Link
                      href="/a-propos"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-fonib-orange transition hover:text-white"
                    >
                      En savoir plus <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
