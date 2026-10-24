import React from 'react'
import Link from 'next/link'
import { Clock, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  title?: string
  description?: string
  icon?: LucideIcon
  actionLabel?: string
  actionHref?: string
  className?: string
}

export function EmptyState({
  title = 'Contenu bientôt disponible',
  description = 'Les contenus seront mis à jour bientôt. Revenez très prochainement pour découvrir nos nouvelles publications.',
  icon: Icon = Clock,
  actionLabel,
  actionHref,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'relative mx-auto flex w-full max-w-2xl flex-col items-center justify-center rounded-3xl border border-black/5 bg-white/80 p-10 text-center shadow-sm backdrop-blur-sm sm:p-14',
        className,
      )}
    >
      <div className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-fonib-orange/10 text-fonib-orange ring-8 ring-fonib-orange/5">
        <Icon className="size-8" />
      </div>

      <h3 className="font-display text-xl font-bold text-fonib-ink sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-fonib-ink/70 sm:text-base">
        {description}
      </p>

      {actionLabel && actionHref && (
        <div className="mt-6">
          <Link
            href={actionHref}
            className="inline-flex items-center justify-center rounded-full bg-fonib-ink px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-fonib-orange"
          >
            {actionLabel}
          </Link>
        </div>
      )}
    </div>
  )
}

