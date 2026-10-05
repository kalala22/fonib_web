import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SocialIcon } from '@/components/social-icon'
import { brand, contact, fonibLogo, navItems, socials } from '@/lib/site'

export function Footer() {
  const items = [
    { icon: Phone, label: 'Ligne téléphonique', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Adresse électronique', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock, label: "Horaires d'ouverture", value: contact.hours },
  ]

  return (
    <footer className="relative overflow-hidden bg-fonib-ink text-white">
      <div aria-hidden className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold leading-none text-white/[0.03]">
        {brand.short}
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 lg:px-8">
        <div className="grid gap-4 border-b border-white/10 pb-14 md:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }) => {
            const body = (
              <>
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-fonib-orange/15 text-fonib-orange transition group-hover:bg-fonib-orange group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{label}</span>
                  <span className="mt-1 block font-semibold text-xs sm:text-sm [overflow-wrap:anywhere] leading-snug">{value}</span>
                </div>
              </>
            )
            const cls = 'group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-fonib-orange/40 hover:bg-white/[0.05] min-w-0 overflow-hidden h-full'
            return href ? <a key={label} href={href} className={cls}>{body}</a> : <div key={label} className={cls}>{body}</div>
          })}
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src={fonibLogo} alt={brand.name} className="size-16 rounded-full bg-white object-contain p-1" />
              <div>
                <p className="text-lg font-extrabold tracking-[0.2em]">{brand.short}</p>
                <p className="text-sm text-white/50">{brand.name}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm font-display text-xl italic text-white/80">« {brand.motto} »</p>
          </div>
          <nav aria-label="Liens du pied de page">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-fonib-orange">Navigation</p>
            <ul className="grid grid-cols-2 gap-3 text-sm text-white/60">
              {[...navItems, { label: 'Don', href: '/don' }].map((n) => (
                <li key={n.href}><Link href={n.href} className="transition hover:text-white">{n.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-fonib-orange">Suivez-nous</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid size-11 place-items-center rounded-full border border-white/15 transition hover:-translate-y-1 hover:border-fonib-orange hover:bg-fonib-orange">
                  <SocialIcon name={s.icon} className="size-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-white/50"><MapPin className="size-4" /> {contact.city}, RDC</p>
          </div>
        </div>

        <p className="border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} {brand.short} · {brand.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
