'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { SocialIcon } from '@/components/social-icon'
import { cn } from '@/lib/utils'
import { brand, fonibLogo, navItems, socials } from '@/lib/site'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full max-w-full px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 lg:px-6',
          scrolled
            ? 'border border-white/10 bg-fonib-ink/85 shadow-2xl shadow-black/20 backdrop-blur-xl'
            : 'border border-transparent bg-transparent',
        )}
      >
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.03]" aria-label={`${brand.short} — accueil`}>
          <img src={fonibLogo} alt={`${brand.short} — ${brand.name}`} className="h-11 w-11 rounded-full bg-white object-contain p-0.5" />
          <span className="leading-tight text-white">
            <span className="block text-sm font-extrabold tracking-[0.2em]">{brand.short}</span>
            <span className="hidden text-[10px] font-medium tracking-wide text-white/60 sm:block">{brand.name}</span>
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-1 xl:flex">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors',
                isActive(href) ? 'bg-white/15 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 lg:flex">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid size-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-fonib-orange">
                <SocialIcon name={s.icon} className="size-4" />
              </a>
            ))}
          </div>
          <Link
            id="header-don"
            href="/don"
            className="group hidden items-center gap-2 rounded-full bg-fonib-orange px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-fonib-orange/30 transition hover:bg-fonib-red sm:inline-flex"
          >
            <Heart className="size-4 transition-transform group-hover:scale-125" fill="currentColor" /> Don
          </Link>

          {/* Menu Mobile Compact en Haut */}
          <Sheet>
            <SheetTrigger
              id="header-menu"
              aria-label="Ouvrir le menu"
              className="grid size-10 place-items-center rounded-full border border-white/25 text-white xl:hidden"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="top" className="h-auto self-start w-full border-b border-white/15 bg-fonib-ink/95 p-4 text-white shadow-2xl backdrop-blur-2xl rounded-none">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <img src={fonibLogo} alt={brand.name} className="h-8 w-8 rounded-full bg-white object-contain p-0.5" />
                <div>
                  <SheetTitle className="text-xs font-extrabold tracking-[0.15em] text-white">{brand.short}</SheetTitle>
                  <p className="text-[10px] text-white/50">{brand.name}</p>
                </div>
              </div>

              {/* Liens de navigation compacts en 2 colonnes */}
              <nav className="mt-3 grid grid-cols-2 gap-2" aria-label="Navigation mobile">
                {[...navItems, { label: 'Don', href: '/don' }].map(({ label, href }) => (
                  <SheetClose
                    key={href}
                    href={href}
                    className={cn(
                      'rounded-xl py-2.5 px-3 text-center text-[11px] font-bold uppercase tracking-wider transition',
                      isActive(href) ? 'bg-fonib-orange text-white shadow-md' : 'bg-white/10 text-white/80 hover:bg-white/15',
                    )}
                  >
                    {label}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-[10px] text-white/50">
                <span>Kinshasa · RDC</span>
                <div className="flex gap-1.5">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid size-7 place-items-center rounded-full bg-white/10 text-white transition hover:bg-fonib-orange">
                      <SocialIcon name={s.icon} className="size-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
