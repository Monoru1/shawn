import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from './dictionary'

type Localized = { fr: string; en: string }

type I18nValue = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  /** Résout un objet { fr, en } dans la langue active. */
  t: (entry: Localized) => string
}

const I18nContext = createContext<I18nValue | null>(null)
const STORAGE_KEY = 'shawn.lang'

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'fr'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'fr' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggle = useCallback(() => setLangState(l => (l === 'fr' ? 'en' : 'fr')), [])
  const t = useCallback((entry: Localized) => entry[lang], [lang])

  const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, setLang, toggle, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}

