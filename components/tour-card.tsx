"use client"

import Link from "next/link"
import { MapPin, CalendarDays, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import type { Tour } from "@/lib/tours"

interface TourCardProps {
  tour: Tour
}

export function TourCard({ tour }: TourCardProps) {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <div className="rounded-3xl bg-card p-3 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md">
      {/* Photo */}
      <div
        className="aspect-4/3 w-full rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url('${tour.photos[0]}')` }}
      />

      {/* Body */}
      <div className="pt-4">
        {/* Title + flag */}
        <div className="flex items-center gap-2">
          <h3 className="flex-1 truncate text-base leading-tight font-bold">
            {tour.title[lang]}
          </h3>
          <span className="text-base">🇨🇳</span>
        </div>

        {/* Route */}
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {tour.route[lang]}
        </p>

        {/* Divider */}
        <div className="my-3 h-px bg-border" />

        {/* Stats row */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5 shrink-0" />
            <span>{tour.dates[lang]}</span>
          </div>
          {tour.price && (
            <div className="flex items-center gap-1 text-sm font-semibold text-primary">
              <Tag className="h-3.5 w-3.5 shrink-0" />
              <span>{tour.price}</span>
            </div>
          )}
        </div>
      </div>
      <Button
        asChild
        size="lg"
        className="mt-4 ml-auto w-full rounded-full px-4"
      >
        <Link href={`/tours/${tour.slug}`}>{t.tours.details}</Link>
      </Button>
    </div>
  )
}
