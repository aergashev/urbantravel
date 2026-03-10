"use client"

import { notFound } from "next/navigation"
import { use } from "react"
import { MapPin, CalendarDays, Phone, CheckCircle2, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { BookingForm } from "@/components/booking-form"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { getTourBySlug } from "@/lib/tours"

interface Props {
  params: Promise<{ slug: string }>
}

export default function TourPage({ params }: Props) {
  const { slug } = use(params)
  const { lang } = useLanguage()
  const t = translations[lang]

  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  return (
    <main className="flex-1">
      {/* ── Photo bento ──────────────────────────────────────────── */}
      <section className="container mx-auto grid grid-cols-2 gap-1">
        <div
          className="aspect-4/3 bg-cover bg-center"
          style={{ backgroundImage: `url('${tour.photos[0]}')` }}
          role="img"
          aria-label={tour.title[lang]}
        />
        <div
          className="aspect-4/3 bg-cover bg-center"
          style={{ backgroundImage: `url('${tour.photos[1]}')` }}
          role="img"
          aria-label={tour.title[lang]}
        />
      </section>

      {/* ── Content ──────────────────────────────────────────────── */}
      <section className="py-10 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* ── Left column ───────────────────────────────── */}
            <div>
              {/* Badges */}
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge variant="secondary">🇨🇳 China</Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {tour.route[lang]}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <CalendarDays className="h-3 w-3" />
                  {tour.dates[lang]}
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {tour.title[lang]}
              </h1>

              {/* Price */}
              {tour.price && (
                <p className="mt-3 flex items-center gap-2 text-2xl font-bold text-primary">
                  <Tag className="h-5 w-5" />
                  {t.tours.from} {tour.price}
                </p>
              )}

              <Separator className="my-7" />

              {/* Highlights */}
              <h2 className="mb-4 text-lg font-semibold">
                {lang === "ru" ? "Программа тура" : "Tur dasturi"}
              </h2>
              <ul className="space-y-2.5">
                {tour.highlights[lang].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-7" />

              {/* Description */}
              <h2 className="mb-4 text-lg font-semibold">
                {lang === "ru" ? "Описание" : "Tavsif"}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                {tour.content[lang].split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <Separator className="my-7" />

              {/* Contacts */}
              <h2 className="mb-3 text-lg font-semibold">
                {lang === "ru" ? "Связаться с нами" : "Biz bilan bog'lanish"}
              </h2>
              <div className="space-y-2">
                <a
                  href="tel:+998903930591"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +998 90 393 05 91 — Urban Travel 1
                </a>
                <a
                  href="tel:+998936260888"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +998 93 626 08 88 — Urban Travel 2
                </a>
              </div>
            </div>

            {/* ── Right column: Booking card ─────────────────── */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Card className="overflow-hidden shadow-md">
                {/* Card header */}
                <div
                  className="px-6 py-5 text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.12 0.09 222) 0%, oklch(0.40 0.12 222) 70%, oklch(0.609 0.126 221.723) 100%)",
                  }}
                >
                  <p className="text-sm font-medium opacity-80">
                    {lang === "ru" ? "Забронировать место" : "Joy band qilish"}
                  </p>
                  <p className="mt-0.5 text-xl font-bold">{tour.title[lang]}</p>
                  {tour.price && (
                    <p className="mt-1 text-sm opacity-90">
                      {t.tours.from} {tour.price}
                    </p>
                  )}
                </div>
                <CardContent className="pt-5">
                  <BookingForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
