import { NextRequest, NextResponse } from "next/server"
import { Bot } from "grammy"
import { createBookingSchema } from "@/lib/booking-schema"

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  // Validate with Zod (use ru as the server-side error language)
  const schema = createBookingSchema("ru")
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { name, phone, comment } = parsed.data
  const tour = (body as Record<string, unknown>).tour as string | undefined

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.error("Telegram credentials not configured")
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    )
  }

  const bot = new Bot(token)

  const lines = [
    "📋 *Новая заявка*",
    `👤 *Имя:* ${name.trim()}`,
    `📞 *Телефон:* ${phone.trim()}`,
  ]
  if (tour) lines.push(`🗺 *Тур:* ${tour}`)
  if (comment?.trim()) lines.push(`💬 *Комментарий:* ${comment.trim()}`)

  await bot.api.sendMessage(chatId, lines.join("\n"), {
    parse_mode: "Markdown",
  })

  return NextResponse.json({ ok: true })
}
