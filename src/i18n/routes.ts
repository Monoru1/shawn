import type { Lang } from './dictionary'

const routePairs = [
  ['/photographie', '/photography'],
  ['/films', '/films'],
  ['/archive', '/archive'],
  ['/shawn', '/about'],
  ['/kerawa', '/kerawa'],
  ['/contact', '/contact'],
  ['/', '/'],
] as const

function splitPath(to: string) {
  const match = to.match(/^([^?#]*)(.*)$/)
  return { pathname: match?.[1] || '/', suffix: match?.[2] || '' }
}

function toFrenchPathname(pathname: string) {
  const raw = pathname.startsWith('/en') ? pathname.slice(3) || '/' : pathname
  for (const [fr, en] of routePairs) {
    if (raw === en || raw.startsWith(`${en}/`)) return `${fr}${raw.slice(en.length)}` || '/'
  }
  return raw
}

export function localizedPath(to: string, lang: Lang) {
  const { pathname, suffix } = splitPath(to)
  const french = toFrenchPathname(pathname)
  if (lang === 'fr') return `${french}${suffix}`
  for (const [fr, en] of routePairs) {
    if (french === fr || french.startsWith(`${fr}/`)) return `/en${en}${french.slice(fr.length)}${suffix}`
  }
  return `/en${french}${suffix}`
}

export function languageFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr'
}
