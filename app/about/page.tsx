"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export default function AboutPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const a = t.aboutPage

  return (
    <main className="flex-1">
      {/* How It Started — two-column */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: text */}
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-wide text-orange-500 uppercase">
                {a.howItStartedLabel}
              </p>
              <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl">
                {a.title}
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground">
                {a.desc1}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {a.desc2}
              </p>
            </div>

            {/* Right: photo + stats grid */}
            <div className="space-y-6">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src="/hero/li-yang-5h_dMuX_7RE-unsplash.jpg"
                  alt="Urban Travel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {a.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border bg-muted/40 p-5"
                  >
                    <p className="text-3xl font-bold">{s.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Urban Travel */}
      <section className="border-t py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-8 text-2xl font-bold">{a.whyTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {a.advantages.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border bg-muted/40 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B + Group */}
      <section className="border-t py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold">{a.b2bTitle}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {a.b2bDesc}
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold">{a.groupTitle}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {a.groupDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
