import { useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'

type Props = { title: string; description: string }

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr.startsWith('og:') ? 'property' : 'name', attr)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

export default function Seo({ title, description }: Props) {
  const { lang } = useI18n()
  useEffect(() => {
    const full = `${title} — Shawn N. Hounkpatin`
    document.title = full
    setMeta('meta[name="description"]', 'description', description)
    setMeta('meta[property="og:title"]', 'og:title', full)
    setMeta('meta[property="og:description"]', 'og:description', description)
    setMeta('meta[property="og:locale"]', 'og:locale', lang === 'fr' ? 'fr_FR' : 'en_US')
  }, [title, description, lang])
  return null
}

