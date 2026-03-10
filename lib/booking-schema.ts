import { z } from "zod"
import { isValidPhoneNumber } from "libphonenumber-js"
import { bookingErrors } from "./booking-errors"

export const createBookingSchema = (lang: "uz" | "ru") =>
  z.object({
    name: z
      .string()
      .min(1, bookingErrors.name.required[lang])
      .min(2, bookingErrors.name.min[lang]),

    phone: z
      .string()
      .min(1, bookingErrors.phone.required[lang])
      .refine((v) => isValidPhoneNumber(v), {
        message: bookingErrors.phone.invalid[lang],
      }),

    comment: z
      .string()
      .max(500, bookingErrors.comment.max[lang])
      .optional()
      .or(z.literal("")),
  })

export type BookingFormValues = z.infer<ReturnType<typeof createBookingSchema>>
