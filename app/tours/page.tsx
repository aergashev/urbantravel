"use client"

import { TourCard } from "@/components/tour-card"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { tours } from "@/lib/tours"

export default function ToursPage() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <main className="flex-1">
      {/* Page header */}
      <section className="border-b bg-muted/30 py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">
            {t.tours.pageTitle}
          </h1>
        </div>
      </section>

      {/* Tours grid */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6">
          {tours.length === 0 ? (
            <p className="text-muted-foreground">{t.tours.noTours}</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
