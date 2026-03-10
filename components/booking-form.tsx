"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function BookingForm() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
  const [form, setForm] = useState({ name: "", phone: "", comment: "" })

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {}
    if (!form.name.trim()) newErrors.name = t.booking.nameRequired
    if (!form.phone.trim()) newErrors.phone = t.booking.phoneRequired
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setLoading(true)
    // Placeholder: integrate your email service here
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-3 py-14 text-center">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
          <p className="text-base font-medium">{t.booking.success}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.booking.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="booking-name">{t.booking.name}</Label>
            <Input
              id="booking-name"
              placeholder={t.booking.namePlaceholder}
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value })
                if (errors.name) setErrors({ ...errors, name: undefined })
              }}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="booking-phone">{t.booking.phone}</Label>
            <Input
              id="booking-phone"
              type="tel"
              placeholder={t.booking.phonePlaceholder}
              value={form.phone}
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value })
                if (errors.phone) setErrors({ ...errors, phone: undefined })
              }}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="booking-comment">{t.booking.commentOptional}</Label>
            <Textarea
              id="booking-comment"
              placeholder={t.booking.commentPlaceholder}
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? t.booking.submitting : t.booking.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
