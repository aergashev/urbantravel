import type { Metadata } from "next"
import { getTourBySlug } from "@/lib/tours"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) {
    return {
      title: "Tur topilmadi",
      description: "So'ralgan tur mavjud emas.",
    }
  }

  const titleUz = tour.title.uz
  const titleRu = tour.title.ru
  const descriptionUz = tour.highlights.uz.slice(0, 3).join(". ")
  const descriptionRu = tour.highlights.ru.slice(0, 3).join(". ")
  const coverImage = tour.photos[0] ?? "/assets/logo.png"
  const tourUrl = `https://urbantravel.uz/tours/${slug}`

  return {
    title: `${titleUz} | ${titleRu}`,
    description: `${descriptionUz} ${descriptionRu}`,
    alternates: {
      canonical: `/tours/${slug}`,
      languages: {
        uz: `/uz/tours/${slug}`,
        ru: `/ru/tours/${slug}`,
      },
    },
    openGraph: {
      title: `${titleUz} | Urban Travel`,
      description: descriptionUz,
      url: tourUrl,
      type: "website",
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: titleUz,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleUz} | Urban Travel`,
      description: descriptionUz,
      images: [coverImage],
    },
  }
}

export default function TourSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
