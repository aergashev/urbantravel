"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react"
import type { Language } from "@/lib/translations"

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ru",
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("ru")

  useEffect(() => {
    const stored = localStorage.getItem("lang")
    if (stored === "ru" || stored === "uz") {
      setLangState(stored)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("lang", newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
