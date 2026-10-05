'use client'

import { useState } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const amounts = [10, 25, 50, 100]

export function DonationCta() {
  const [amount, setAmount] = useState(25)

  function handleDonate() {
    toast.success(`Merci pour votre soutien de ${amount}€ à la Fondation Nicole Bwatshia !`)
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-fonib-ink p-8 text-white shadow-2xl sm:p-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div aria-hidden className="absolute -right-20 -top-20 size-96 rounded-full bg-fonib-orange/20 blur-3xl" />
        <div aria-hidden className="absolute -left-20 -bottom-20 size-96 rounded-full bg-fonib-blue/20 blur-3xl" />

        <div className="relative max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-fonib-orange">
            <Heart className="size-4" fill="currentColor" /> Votre impact commence ici
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Un geste aujourd’hui.<br />Une vie transformée demain.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Chaque don permet de soutenir les orphelins, lutter contre la malnutrition et offrir des ressources éducatives en RDC.
          </p>
        </div>

        <div className="relative mt-10 min-w-[300px] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:mt-0">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">Je souhaite donner</p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {amounts.map((val) => (
              <button
                key={val}
                type="button"
                aria-pressed={amount === val}
                onClick={() => setAmount(val)}
                className={cn(
                  'rounded-xl py-3 text-sm font-bold transition-all',
                  amount === val ? 'bg-fonib-orange text-white shadow-md' : 'bg-white/10 text-white hover:bg-white/20',
                )}
              >
                {val}€
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleDonate}
            className="mt-5 w-full rounded-xl bg-white py-4 text-sm font-bold uppercase tracking-wider text-fonib-ink shadow-lg transition hover:bg-fonib-orange hover:text-white"
          >
            Faire un don de {amount}€ <ArrowRight className="ml-2 inline size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
