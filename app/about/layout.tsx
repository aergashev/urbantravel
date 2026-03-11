import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Biz haqimizda | О компании Urban Travel",
  description:
    "Urban Travel - Toshkentdan 14 yillik tajribaga ega turistik kompaniya. Xitoyga biznes, turizm va ko'rgazma safarlarini tashkil qilamiz. Туристическая компания из Ташкента с 14-летним опытом поездок в Китай.",
  alternates: {
    canonical: "/about",
    languages: {
      uz: "/uz/about",
      ru: "/ru/about",
    },
  },
  openGraph: {
    title: "Biz haqimizda | Urban Travel",
    description:
      "Urban Travel - Toshkentdan 14 yillik tajribaga ega turistik kompaniya. Xitoyga biznes, turizm va ko'rgazma safarlarini tashkil qilamiz.",
    url: "https://urbantravel.uz/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biz haqimizda | Urban Travel",
    description:
      "Urban Travel - Toshkentdan 14 yillik tajribaga ega turistik kompaniya. Xitoyga biznes, turizm va ko'rgazma safarlarini tashkil qilamiz.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
