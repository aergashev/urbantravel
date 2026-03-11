import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bog‘lanish | Контакты",
  description:
    "Urban Travel bilan bog'laning: Toshkent, Makhtumkuli ko'chasi 79, City Plaza. Telefon: +998 90 393 05 91. Связаться с Urban Travel: Ташкент, ул. Махтумкули 79, City Plaza.",
  alternates: {
    canonical: "/contact",
    languages: {
      uz: "/uz/contact",
      ru: "/ru/contact",
    },
  },
  openGraph: {
    title: "Biz bilan bog'lanish | Urban Travel",
    description:
      "Urban Travel bilan bog'laning: Toshkent, Makhtumkuli ko'chasi 79, City Plaza, 8-qavat, 820-ofis. Telefon: +998 90 393 05 91.",
    url: "https://urban-travel.uz/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biz bilan bog'lanish | Urban Travel",
    description:
      "Urban Travel bilan bog'laning: Toshkent, Makhtumkuli ko'chasi 79, City Plaza, 8-qavat, 820-ofis.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
