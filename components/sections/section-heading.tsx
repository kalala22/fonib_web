import { cn } from '@/lib/utils'
import { Reveal } from '@/components/motion/reveal'

type Props = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  dark?: boolean
}

export function SectionHeading({ eyebrow, title, description, align = 'center', dark }: Props) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-fonib-orange">{eyebrow}</p>
      <h2 className={cn('mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl', dark ? 'text-white' : 'text-fonib-ink')}>{title}</h2>
      {description && <p className={cn('mt-5 text-lg leading-relaxed', dark ? 'text-white/60' : 'text-fonib-ink/60')}>{description}</p>}
    </Reveal>
  )
}
