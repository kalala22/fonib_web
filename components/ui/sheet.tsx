'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SheetContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextType>({ open: false, setOpen: () => {} })

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow
      const originalPaddingRight = document.body.style.paddingRight
      
      // Prevent body scrolling when modal/sheet is open
      document.body.style.overflow = 'hidden'

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false)
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = originalOverflow
        document.body.style.paddingRight = originalPaddingRight
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [open])

  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>
}

export function SheetTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = React.useContext(SheetContext)
  return (
    <button type="button" onClick={() => setOpen(true)} className={className} {...props}>
      {children}
    </button>
  )
}

export function SheetClose({
  children,
  className,
  href,
  onClick,
  ...props
}: {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: (e: React.MouseEvent) => void
} & React.HTMLAttributes<HTMLElement>) {
  const { setOpen } = React.useContext(SheetContext)

  const handleClick = (e: React.MouseEvent<any>) => {
    setOpen(false)
    if (onClick) onClick(e)
  }

  if (href) {
    return (
      <Link href={href} onClick={handleClick} className={className} {...(props as any)}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={handleClick} className={className} {...(props as any)}>
      {children}
    </button>
  )
}

export function SheetContent({
  children,
  className,
  side = 'top',
}: {
  children: React.ReactNode
  className?: string
  side?: 'top' | 'right' | 'left' | 'bottom'
}) {
  const { open, setOpen } = React.useContext(SheetContext)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!open || !mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex overflow-hidden">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={() => setOpen(false)} />
      <div
        className={cn(
          'relative z-[101] flex flex-col bg-background p-5 shadow-2xl transition-all duration-300 animate-fade-up max-h-[90vh] overflow-y-auto',
          side === 'top' && 'inset-x-0 top-0 h-auto w-full self-start rounded-none',
          side === 'right' && 'ml-auto h-full w-[85vw] max-w-sm',
          side === 'left' && 'mr-auto h-full w-[85vw] max-w-sm',
          side === 'bottom' && 'inset-x-0 bottom-0 h-auto w-full self-end rounded-t-3xl',
          className,
        )}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 grid size-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <X className="size-4" />
          <span className="sr-only">Fermer</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

export function SheetTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn('text-sm font-bold', className)}>{children}</h2>
}
