import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Xitoyga turlar | Туры в Китай",
  description:
    "Urban Travel bilan Xitoyga sayohat qiling. Guruhli turlar, biznes safarlari, xalqaro ko‘rgazmalar va biznes uchrashuvlar.",
  alternates: {
    canonical: "/tours",
    languages: {
      uz: "/uz/tours",
      ru: "/ru/tours",
    },
  },
  openGraph: {
    title: "Xitoyga biznes turlari | Urban Travel",
    description:
      "Urban Travel - Xitoyga barcha biznes turlari: IT va AI, stomatologiya, ko'rgazmalar, B2B uchrashuvlar.",
    url: "https://urban-travel.uz/tours",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xitoyga biznes turlari | Urban Travel",
    description:
      "Urban Travel - Xitoyga barcha biznes turlari: IT va AI, stomatologiya, ko'rgazmalar, B2B uchrashuvlar.",
  },
}

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
