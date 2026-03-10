"use client"

import * as React from "react"
import { useMemo } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import PhoneInput from "react-phone-number-input"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import {
  createBookingSchema,
  type BookingFormValues,
} from "@/lib/booking-schema"
import { bookingErrors } from "@/lib/booking-errors"

// Strips the library's own wrapper div so InputGroup owns the layout
const PhoneContainer = ({
  children,
}: {
  children?: React.ReactNode
  className?: string
}) => <>{children}</>

// Converts an ISO 3166-1 alpha-2 country code to its emoji flag
function countryCodeToFlag(code: string) {
  return code
    .toUpperCase()
    .split("")
    .map((c) => String.fromCodePoint(0x1f1a5 + c.charCodeAt(0)))
    .join("")
}

// Dynamic flag addon - renders the correct flag for whatever country is active
const CountryFlagAddon = ({ value }: { value?: string }) => (
  <InputGroupAddon align="inline-start" className="pr-1">
    <span className="text-base leading-none select-none">
      {value ? countryCodeToFlag(value) : "🌐"}
    </span>
  </InputGroupAddon>
)

export function BookingForm({ tour }: { tour?: string } = {}) {
  const { lang } = useLanguage()
  const t = translations[lang]

  const schema = useMemo(() => createBookingSchema(lang), [lang])

  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", comment: "" },
  })

  const onSubmit = async (data: BookingFormValues) => {
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, tour }),
      })
      if (!res.ok) throw new Error("Request failed")
    } catch {
      setError("root", { message: bookingErrors.submit.error[lang] })
    }
  }

  if (isSubmitSuccessful && !errors.root) {
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="booking-name">{t.booking.name}</Label>
            <Input
              id="booking-name"
              placeholder={t.booking.namePlaceholder}
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="booking-phone">{t.booking.phone}</Label>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <InputGroup>
                  <PhoneInput
                    {...field}
                    id="booking-phone"
                    international
                    defaultCountry="UZ"
                    countries={["UZ"]}
                    placeholder={t.booking.phonePlaceholder}
                    containerComponent={PhoneContainer}
                    inputComponent={InputGroupInput}
                    countrySelectComponent={CountryFlagAddon}
                  />
                </InputGroup>
              )}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Comment */}
          <div className="space-y-1.5">
            <Label htmlFor="booking-comment">{t.booking.commentOptional}</Label>
            <Textarea
              id="booking-comment"
              placeholder={t.booking.commentPlaceholder}
              rows={4}
              {...register("comment")}
            />
            {errors.comment && (
              <p className="text-xs text-destructive">
                {errors.comment.message}
              </p>
            )}
          </div>

          {errors.root && (
            <p className="text-sm text-destructive">{errors.root.message}</p>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t.booking.submitting : t.booking.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
