"use client"

import { MapPin, Phone, Mail, Clock, Send, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { BookingForm } from "@/components/booking-form"

const WRAP = "mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20"

export default function ContactPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const c = t.contact

  return (
    <main className="flex-1">
      {/* ── HEADER ───────────────────────────────────────────────── */}
      <section className="border-b bg-background py-20">
        <div className={WRAP}>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Urban Travel
          </p>
          <h1 className="text-5xl font-bold tracking-[-0.03em] sm:text-6xl">
            {c.title}
          </h1>
        </div>
      </section>

      {/* ── MAIN: form + info ────────────────────────────────────── */}
      <section className="py-20">
        <div className={WRAP}>
          <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-24">

            {/* LEFT: Booking form */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4">{t.booking.title}</Badge>
                <p className="text-muted-foreground text-sm max-w-sm">
                  {lang === "ru"
                    ? "Оставьте заявку — мы свяжемся с вами в ближайшее время."
                    : "Ariza qoldiring — tez orada siz bilan bog'lanamiz."}
                </p>
              </div>
              <BookingForm />
            </div>

            {/* RIGHT: Contact details */}
            <div className="space-y-0">
              {/* Address */}
              <div className="flex gap-4 py-6">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="mb-1 text-sm font-semibold">{c.address}</p>
                  <p className="text-sm text-muted-foreground">{c.addressLine1}</p>
                  <p className="text-sm text-muted-foreground">{c.addressLine2}</p>
                </div>
              </div>

              <Separator />

              {/* Phone */}
              <div className="flex gap-4 py-6">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="mb-2 text-sm font-semibold">{c.phone}</p>
                  <div className="space-y-1">
                    <p>
                      <a href="tel:+998903930591" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        +998 90 393 05 91
                      </a>
                    </p>
                    <p>
                      <a href="tel:+998936260888" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        +998 93 626 08 88
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Email */}
              <div className="flex gap-4 py-6">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="mb-1 text-sm font-semibold">{c.email}</p>
                  <a
                    href="mailto:urbantravelchina2025@gmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    urbantravelchina2025@gmail.com
                  </a>
                </div>
              </div>

              <Separator />

              {/* Hours */}
              <div className="flex gap-4 py-6">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="mb-1 text-sm font-semibold">{c.hours}</p>
                  {c.hoursValue.split("\n").map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Social */}
              <div className="py-6">
                <p className="mb-3 text-sm font-semibold">{c.social}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://t.me/urbantravel_uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Send className="h-4 w-4" />
                    Telegram
                  </a>
                  <a
                    href="https://www.instagram.com/urban.travel.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ──────────────────────────────────────────────────── */}
      <section className={`${WRAP} pb-20`}>
        <p className="mb-6 text-sm font-semibold tracking-[0.15em] text-muted-foreground uppercase">
          {c.mapTitle}
        </p>
        <div className="h-120 overflow-hidden rounded-3xl border">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A074f3b6edb110391b1abf9866a06b6a06528fb3988eeaeb47c1b1ca744aee80a&amp;source=constructor"
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        </div>
      </section>
    </main>
  )
}
