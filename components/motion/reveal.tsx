'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

type BaseProps = {
  children: React.ReactNode
  className?: string
}

/** Apparition simple au scroll (une seule fois). */
export function Reveal({ children, className, y = 16 }: BaseProps & { y?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

/** Conteneur qui fait apparaître ses enfants <RevealItem> en cascade. */
export function RevealGroup({ children, className }: BaseProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={group}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }: BaseProps) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}
