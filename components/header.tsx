"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { cn } from "@/lib/utils"
import Logo from "./logo"

export function Header() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang]
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/tours", label: t.nav.tours },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ]

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right: language + phone */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center text-sm">
              <button
                onClick={() => setLang("ru")}
                className={cn(
                  "rounded px-2 py-1 font-medium transition-colors",
                  lang === "ru"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                RU
              </button>
              <span className="text-muted-foreground/50">|</span>
              <button
                onClick={() => setLang("uz")}
                className={cn(
                  "rounded px-2 py-1 font-medium transition-colors",
                  lang === "uz"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                UZ
              </button>
            </div>
            <ThemeToggle />
            <Button asChild size="sm" variant="default">
              <a href="tel:+998903930591">
                <Phone className="h-3.5 w-3.5" />
                +998 90 393 05 91
              </a>
            </Button>
          </div>

          {/* Mobile: language switcher + burger */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center text-sm">
              <button
                onClick={() => setLang("ru")}
                className={cn(
                  "rounded px-1.5 py-1 font-medium",
                  lang === "ru" ? "text-foreground" : "text-muted-foreground"
                )}
              >
                RU
              </button>
              <span className="text-muted-foreground/50">|</span>
              <button
                onClick={() => setLang("uz")}
                className={cn(
                  "rounded px-1.5 py-1 font-medium",
                  lang === "uz" ? "text-foreground" : "text-muted-foreground"
                )}
              >
                UZ
              </button>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-1"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="space-y-1 border-t py-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block rounded-lg px-2 py-2.5 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t pt-2">
              <a
                href="tel:+998903930591"
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +998 90 393 05 91
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
