import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Urban Travel - Быстрые ссылки",
  description:
    "Все официальные ссылки Urban Travel: сайт, туры, Instagram, Telegram и контакты.",
  alternates: {
    canonical: "/links",
    languages: {
      uz: "/uz/links",
      ru: "/ru/links",
    },
  },
  openGraph: {
    title: "Urban Travel - Быстрые ссылки",
    description:
      "Все официальные ссылки Urban Travel: сайт, туры, Instagram, Telegram и контакты.",
    url: "https://urban-travel.uz/links",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Travel - Быстрые ссылки",
    description:
      "Все официальные ссылки Urban Travel: сайт, туры, Instagram, Telegram и контакты.",
  },
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
