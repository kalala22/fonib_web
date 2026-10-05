'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { toast } from 'sonner'
import { SectionHeading } from '@/components/sections/section-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { contact } from '@/lib/site'
import { Reveal } from '@/components/motion/reveal'

/** Bloc & formulaire de contact (<ContactBlock />) du PDF. */
export function ContactBlock() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 800))
    setLoading(false)
    toast.success(`Merci ${name || ''} ! Votre message a bien été envoyé à la Fondation FONIB.`)
    form.reset()
  }

  return (
    <section id="contact-block" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={contact.subtitle}
          title={<>{contact.title} à <span className="italic text-fonib-orange">{contact.city}</span></>}
          description="Vous souhaitez collaborer, poser une question ou devenir bénévole ? Remplissez ce formulaire et notre équipe vous recontactera sous peu."
        />

        <Reveal className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Informations de contact */}
          <div className="flex flex-col justify-between rounded-3xl bg-fonib-ink p-8 text-white shadow-2xl lg:col-span-5 lg:p-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-fonib-orange">Informations</span>
              <h3 className="mt-4 font-display text-3xl font-bold">Fondation Nicole Bwatshia</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Basés à Kinshasa, nous opérons à travers toute la République Démocratique du Congo.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="group flex items-center gap-4 text-sm font-semibold hover:text-fonib-orange min-w-0">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-fonib-orange transition group-hover:bg-fonib-orange group-hover:text-white">
                    <Phone className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">{contact.phone}</span>
                </a>
                <a href={`mailto:${contact.email}`} className="group flex items-center gap-4 text-sm font-semibold hover:text-fonib-orange min-w-0">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-fonib-orange transition group-hover:bg-fonib-orange group-hover:text-white">
                    <Mail className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">{contact.email}</span>
                </a>
                <div className="flex items-center gap-4 text-sm font-semibold min-w-0">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-fonib-orange">
                    <MapPin className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">{contact.city} · RDC</span>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-fonib-orange">Horaires d'ouverture</p>
              <p className="mt-2 text-sm font-medium">{contact.hours}</p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="rounded-3xl border-none bg-fonib-cream/60 p-6 shadow-xl lg:col-span-7 lg:p-10">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-fonib-ink/70">
                      Nom complet *
                    </Label>
                    <Input id="contact-name" name="name" required placeholder="Ex: Marie Kabange" className="rounded-xl border-black/10 bg-white py-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-fonib-ink/70">
                      Adresse email *
                    </Label>
                    <Input id="contact-email" name="email" type="email" required placeholder="marie@exemple.cd" className="rounded-xl border-black/10 bg-white py-6" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-wider text-fonib-ink/70">
                    Sujet
                  </Label>
                  <Input id="contact-subject" name="subject" placeholder="Devenir partenaire, bénévole..." className="rounded-xl border-black/10 bg-white py-6" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-fonib-ink/70">
                    Message *
                  </Label>
                  <Textarea id="contact-message" name="message" required rows={5} placeholder="Votre message..." className="rounded-xl border-black/10 bg-white" />
                </div>

                <Button type="submit" disabled={loading} className="mt-2 h-14 rounded-full bg-fonib-orange text-sm font-bold uppercase tracking-widest text-white hover:bg-fonib-red">
                  {loading ? 'Envoi en cours...' : <>Envoyer le message <Send className="ml-2 size-4" /></>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
