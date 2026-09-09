import { useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { localizedPath } from '../i18n/routes'

type Props = { title: string; description: string; image?: string; type?: 'website' | 'article' | 'profile' }

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr.startsWith('og:') ? 'property' : 'name', attr)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setAlternate(hrefLang: 'fr' | 'en', href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hrefLang}"]`)
  if (!link) {
    link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = hrefLang
    document.head.appendChild(link)
  }
  link.href = href
}

export default function Seo({ title, description, image, type = 'website' }: Props) {
  const { lang } = useI18n()
  useEffect(() => {
    const full = `${title} — Shawn N. Hounkpatin`
    const canonical = `${window.location.origin}${window.location.pathname}`
    document.title = full
    setMeta('meta[name="description"]', 'description', description)
    setMeta('meta[property="og:title"]', 'og:title', full)
    setMeta('meta[property="og:description"]', 'og:description', description)
    setMeta('meta[property="og:type"]', 'og:type', type)
    setMeta('meta[property="og:url"]', 'og:url', canonical)
    setMeta('meta[name="twitter:title"]', 'twitter:title', full)
    setMeta('meta[name="twitter:description"]', 'twitter:description', description)
    const selectedImage = image ?? '/media/works/kidjo-1-800.webp'
    const absoluteImage = selectedImage.startsWith('http') ? selectedImage : `${window.location.origin}${selectedImage}`
    setMeta('meta[property="og:image"]', 'og:image', absoluteImage)
    setMeta('meta[name="twitter:image"]', 'twitter:image', absoluteImage)
    setMeta('meta[property="og:locale"]', 'og:locale', lang === 'fr' ? 'fr_FR' : 'en_US')
    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical
    const current = `${window.location.pathname}${window.location.search}${window.location.hash}`
    setAlternate('fr', `${window.location.origin}${localizedPath(current, 'fr')}`)
    setAlternate('en', `${window.location.origin}${localizedPath(current, 'en')}`)
  }, [title, description, image, type, lang])
  return null
}
