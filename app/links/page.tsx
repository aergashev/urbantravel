"use client"

import Link from "next/link"
import {
  CalendarDays,
  Globe,
  Instagram,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react"

import Logo from "@/components/logo"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

type LinkItem = {
  id: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  title: {
    ru: string
    uz: string
  }
}

const links: LinkItem[] = [
  {
    id: "website",
    href: "https://www.urban-travel.uz",
    icon: Globe,
    title: {
      ru: "Основной сайт",
      uz: "Asosiy sayt",
    },
  },
  {
    id: "tours",
    href: "https://www.urban-travel.uz/tours",
    icon: CalendarDays,
    title: {
      ru: "Все туры",
      uz: "Barcha turlar",
    },
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/urban.travel.uz",
    icon: Instagram,
    title: {
      ru: "Instagram",
      uz: "Instagram",
    },
  },
  {
    id: "telegram-channel",
    href: "https://t.me/urbantravel_uz",
    icon: Send,
    title: {
      ru: "Telegram канал",
      uz: "Telegram kanal",
    },
  },
  {
    id: "telegram-manager",
    href: "https://t.me/Urbantravel_uz1",
    icon: MessageCircle,
    title: {
      ru: "Написать менеджеру",
      uz: "Menejerga yozish",
    },
  },
  {
    id: "call",
    href: "tel:+998903930591",
    icon: Phone,
    title: {
      ru: "Позвонить",
      uz: "Qo‘ng‘iroq qilish",
    },
  },
]

export default function LinksPage() {
  const { lang, setLang } = useLanguage()

  const subtitle =
    lang === "ru"
      ? "Деловые поездки и выставки в Китай"
      : "Xitoyga biznes safarlari va ko‘rgazmalar"

  const helperText =
    lang === "ru"
      ? "Быстрые ссылки Urban Travel"
      : "Urban Travel tezkor havolalar"

  return (
    <main className="flex-1 py-6 sm:py-8">
      <div className="container mx-auto max-w-xl px-4 sm:px-6">
        <section className="mb-5 flex items-center justify-between sm:mb-6">
          <div className="flex items-center text-sm">
            <button
              onClick={() => setLang("ru")}
              className={cn(
                "rounded px-2 py-1 font-medium transition-colors",
                lang === "ru"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              RU
            </button>
            <span className="text-muted-foreground/50">|</span>
            <button
              onClick={() => setLang("uz")}
              className={cn(
                "rounded px-2 py-1 font-medium transition-colors",
                lang === "uz"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              UZ
            </button>
          </div>
          <ThemeToggle />
        </section>

        <section className="mb-6 text-center sm:mb-8">
          <div className="inline-flex items-center justify-center">
            <Logo />
          </div>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {subtitle}
          </p>
          <p className="mt-1 text-xs text-muted-foreground/90 sm:text-sm">
            {helperText}
          </p>
        </section>

        <section className="space-y-3 sm:space-y-4">
          {links.map((item) => {
            const Icon = item.icon

            return (
              <Card key={item.id} className="py-0">
                <CardContent className="p-2">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-16 w-full justify-start gap-3 px-5 text-left text-base sm:h-15 sm:text-[15px]"
                  >
                    <Link
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{item.title[lang]}</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </section>
      </div>
    </main>
  )
}
