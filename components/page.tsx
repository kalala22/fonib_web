import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { contact } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez la Fondation Nicole Bwatshia (FONIB) à Kinshasa, RDC.',
}

const items = [
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: 'Téléphone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Adresse', value: 'Kinshasa · RDC' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Nous<br /><span className="text-[#4b9bc4]">rejoindre.</span></>} description="Une question, un partenariat, une envie de vous engager ? Écrivez-nous." />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 md:grid-cols-3 lg:px-8">
        {items.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <div className="mb-6 grid size-12 place-items-center rounded-full bg-[#f7e7b2] text-[#ef9224]"><Icon size={20} /></div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef9224]">{label}</p>
              <p className="mt-3 text-lg font-bold">{value}</p>
            </>
          )
          const cls = 'block rounded-[1.75rem] bg-white p-8 shadow-xl shadow-black/5 transition hover:-translate-y-1'
          return href ? <a key={label} href={href} className={cls}>{content}</a> : <div key={label} className={cls}>{content}</div>
        })}
      </section>
    </>
  )
}
