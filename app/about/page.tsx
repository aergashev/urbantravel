"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

const WRAP = "mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20"

export default function AboutPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const a = t.aboutPage

  return (
    <main className="flex-1">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center">
        {/* photo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero/li-yang-5h_dMuX_7RE-unsplash.jpg"
            alt=""
            fill
            className="object-cover brightness-[.38]"
            priority
          />
          {/* bottom fade so text sits cleanly */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />
        </div>

        <div className={`${WRAP} flex flex-col items-center text-center`}>
          <Badge
            variant="outline"
            className="mb-8 border-primary/60 bg-primary/20 text-primary backdrop-blur-sm"
          >
            {a.howItStartedLabel}
          </Badge>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-[-0.03em] text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[1.04]">
            {a.title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg text-white/80 sm:text-xl">
            {a.desc1}
          </p>
        </div>
      </section>

      {/* ── NUMBERS ──────────────────────────────────────────────── */}
      <section className="bg-background py-28">
        <div className={WRAP}>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {a.stats.map((s, i) => (
              <div key={s.label} className="flex flex-col gap-2 py-10 pr-10">
                {i !== 0 && (
                  <Separator
                    orientation="vertical"
                    className="absolute hidden lg:block"
                  />
                )}
                <span className="text-center text-6xl leading-none font-bold tracking-[-0.04em] text-primary">
                  {s.value}
                </span>
                <span className="text-center text-sm font-medium text-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── MISSION STATEMENT ────────────────────────────────────── */}
      <section className="bg-foreground py-32">
        <div
          className={`${WRAP} flex flex-col gap-20 lg:flex-row lg:items-start lg:gap-32`}
        >
          <div className="shrink-0 lg:w-56">
            <Badge className="border-primary/40 bg-primary/30 text-primary">
              {a.missionLabel}
            </Badge>
          </div>
          <p className="text-3xl leading-[1.3] font-semibold tracking-[-0.02em] text-background sm:text-4xl">
            {a.desc2}
          </p>
        </div>
      </section>

      {/* ── ADVANTAGES ───────────────────────────────────────────── */}
      <section className="bg-background py-32">
        <div className={WRAP}>
          <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-sm text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              {a.whyTitle}
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {a.advantages.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between bg-background p-8 transition-colors hover:bg-muted/40"
              >
                <span className="mb-8 text-3xl font-bold text-primary/50 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── B2B + GROUP ──────────────────────────────────────────── */}
      <section className="bg-background">
        <div className={WRAP}>
          {/* B2B */}
          <div className="flex flex-col gap-8 py-24 lg:flex-row lg:items-start lg:gap-32">
            <div className="shrink-0 lg:w-56">
              <Badge>B2B</Badge>
            </div>
            <div className="max-w-2xl">
              <h2 className="mb-5 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
                {a.b2bTitle}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {a.b2bDesc}
              </p>
            </div>
          </div>

          <Separator />

          {/* Groups */}
          <div className="flex flex-col gap-8 py-24 lg:flex-row lg:items-start lg:gap-32">
            <div className="shrink-0 lg:w-56">
              <Badge>Groups</Badge>
            </div>
            <div className="max-w-2xl">
              <h2 className="mb-5 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
                {a.groupTitle}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {a.groupDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-foreground py-32 text-center">
        <div className={WRAP}>
          <p className="mx-auto mb-10 max-w-xl text-4xl font-bold tracking-[-0.03em] text-background sm:text-5xl">
            {t.contact.title}
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/contact">
              {t.nav.contact}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
