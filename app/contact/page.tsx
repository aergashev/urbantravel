"use client"

import { MapPin, Phone, Mail, Clock, Send, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export default function ContactPage() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

  return (
    <main className="flex-1">
      {/* Page header */}
      <section
        className="relative border-b py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.09 222) 0%, oklch(0.25 0.10 222) 35%, oklch(0.40 0.12 222) 70%, oklch(0.609 0.126 221.723) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {t.title}
          </h1>
        </div>
      </section>

      {/* Contact info + map */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
            {/* Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="mb-1 text-sm font-semibold">{t.address}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.addressLine1}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.addressLine2}
                  </p>
                </div>
              </div>

              <Separator />

              {/* Phones */}
              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="mb-2 text-sm font-semibold">{t.phone}</p>
                  <div className="space-y-1">
                    <p>
                      <a
                        href="tel:+998903930591"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        +998 90 393 05 91
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+998936260888"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        +998 93 626 08 88
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="mb-1 text-sm font-semibold">{t.email}</p>
                  <a
                    href="mailto:urbantravelchina2025@gmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    urbantravelchina2025@gmail.com
                  </a>
                </div>
              </div>

              <Separator />

              {/* Hours */}
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="mb-1 text-sm font-semibold">{t.hours}</p>
                  {t.hoursValue.split("\n").map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Social */}
              <div>
                <p className="mb-3 text-sm font-semibold">{t.social}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://t.me/urbantravel_uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Send className="h-4 w-4" />
                    Telegram
                  </a>
                  <a
                    href="https://www.instagram.com/urban.travel.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl border">
              <iframe
                title={t.mapTitle}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.4890671975046!2d69.26964857651847!3d41.29542997131088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6a9c5f5f5f%3A0x3cf8e8e9e9e9e9e9!2sCity%20Plaza%2C%20Makhtumkuli%2079%2C%20Tashkent!5e0!3m2!1sen!2suz!4v1700000000000!5m2!1sen!2suz"
                width="100%"
                height="100%"
                style={{ minHeight: "420px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
