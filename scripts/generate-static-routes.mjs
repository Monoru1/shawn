import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const origin = 'https://shawn5.netlify.app'
const routes = [
  { path: '/', enPath: '/en', title: { fr: 'Shawn N. Hounkpatin — Photographe & Cinéaste', en: 'Shawn N. Hounkpatin — Photographer & Filmmaker' }, description: { fr: 'Shawn N. Hounkpatin, photographe et cinéaste béninois. Documentaire, mode et art depuis Cotonou.', en: 'Shawn N. Hounkpatin is a Beninese photographer and filmmaker. Documentary, fashion and art from Cotonou.' }, image: '/media/works/kidjo-1-800.webp', type: 'website', priority: '1.0' },
  { path: '/photographie', enPath: '/en/photography', title: { fr: 'Photographie — Shawn N. Hounkpatin', en: 'Photography — Shawn N. Hounkpatin' }, description: { fr: 'Des portraits, des rencontres et des recherches photographiques de Shawn N. Hounkpatin.', en: 'Portraits, encounters and photographic studies by Shawn N. Hounkpatin.' }, image: '/media/works/kidjo-1-800.webp', type: 'website', priority: '0.9' },
  { path: '/films', enPath: '/en/films', title: { fr: 'Films — Shawn N. Hounkpatin', en: 'Films — Shawn N. Hounkpatin' }, description: { fr: 'Films documentaires et expérimentaux réalisés et mis en images par Shawn N. Hounkpatin.', en: 'Documentary and experimental films directed and shot by Shawn N. Hounkpatin.' }, image: '/media/films/between-1280.webp', type: 'website', priority: '0.9' },
  { path: '/films/between-land-and-ocean', enPath: '/en/films/between-land-and-ocean', title: { fr: 'Between Land and Ocean — Shawn N. Hounkpatin', en: 'Between Land and Ocean — Shawn N. Hounkpatin' }, description: { fr: 'À Avloh, Shawn filme une communauté confrontée aux transformations du littoral béninois.', en: 'In Avloh, Shawn films a community facing changes to the Beninese coastline.' }, image: '/media/films/between-1280.webp', type: 'article', priority: '0.8' },
  { path: '/films/my-lover', enPath: '/en/films/my-lover', title: { fr: 'My Lover — Shawn N. Hounkpatin', en: 'My Lover — Shawn N. Hounkpatin' }, description: { fr: 'Un court métrage expérimental réalisé par Shawn à partir des vers et de la voix de Naëtt Mbaye.', en: 'An experimental short film by Shawn, born from verses and voice by Naëtt Mbaye.' }, image: '/media/films/my-lover-480.webp', type: 'article', priority: '0.8' },
  { path: '/photographie/portrait-of-a-genius', enPath: '/en/photography/portrait-of-a-genius', title: { fr: 'Portrait of a Genius — Shawn N. Hounkpatin', en: 'Portrait of a Genius — Shawn N. Hounkpatin' }, description: { fr: 'Femi et Sica Kidjo, puis Lady Donli, photographiées par Shawn dans les lieux de leurs séjours à Cotonou.', en: 'Femi and Sica Kidjo, then Lady Donli, photographed by Shawn in the places surrounding their stays in Cotonou.' }, image: '/media/works/kidjo-1-800.webp', type: 'article', priority: '0.8' },
  { path: '/photographie/enchantresse', enPath: '/en/photography/enchantresse', title: { fr: 'Enchantresse — Shawn N. Hounkpatin', en: 'Enchantresse — Shawn N. Hounkpatin' }, description: { fr: 'Une recherche photographique de Shawn entre figure fictive, héritages vodun, nature et contemplation.', en: 'A photographic study by Shawn between fictional figure, vodun heritage, nature and contemplation.' }, image: '/media/works/enchantresse-1-800.webp', type: 'article', priority: '0.8' },
  { path: '/archive', enPath: '/en/archive', title: { fr: 'Index des œuvres — Shawn N. Hounkpatin', en: 'Index of works — Shawn N. Hounkpatin' }, description: { fr: 'Index chronologique des films et photographies de Shawn N. Hounkpatin.', en: 'A chronological index of Shawn N. Hounkpatin’s films and photographs.' }, image: '/media/works/kidjo-1-800.webp', type: 'website', priority: '0.6' },
  { path: '/shawn', enPath: '/en/about', title: { fr: 'Shawn N. Hounkpatin — Profil', en: 'Shawn N. Hounkpatin — Profile' }, description: { fr: 'Photographe, cinéaste béninois et fondateur de Kerawa Studio, Shawn travaille depuis Cotonou.', en: 'Beninese photographer, filmmaker and founder of Kerawa Studio, Shawn works from Cotonou.' }, image: '/media/profile/shawn-1200.webp', type: 'profile', priority: '0.7' },
  { path: '/kerawa', enPath: '/en/kerawa', title: { fr: 'Kerawa Studio — Fondé par Shawn N. Hounkpatin', en: 'Kerawa Studio — Founded by Shawn N. Hounkpatin' }, description: { fr: 'Kerawa Studio produit les films de Shawn et accompagne la création et la promotion du cinéma africain.', en: 'Kerawa Studio produces Shawn’s films and supports African cinema creation and promotion.' }, image: '/media/films/between-1280.webp', type: 'website', priority: '0.6' },
  { path: '/contact', enPath: '/en/contact', title: { fr: 'Contact — Shawn N. Hounkpatin', en: 'Contact — Shawn N. Hounkpatin' }, description: { fr: 'Contacter Shawn N. Hounkpatin pour une commande, une collaboration, une projection ou un projet avec Kerawa Studio.', en: 'Contact Shawn N. Hounkpatin for a commission, collaboration, screening or a project with Kerawa Studio.' }, image: '/media/profile/shawn-1200.webp', type: 'website', priority: '0.7' },
]

const escapeAttribute = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const template = await readFile('dist/index.html', 'utf8')
const staticUrls = []

for (const route of routes) {
  for (const lang of ['fr', 'en']) {
    const path = lang === 'fr' ? route.path : route.enPath
    const alternate = lang === 'fr' ? route.enPath : route.path
    const url = `${origin}${path}`
    const alternateUrl = `${origin}${alternate}`
    const title = escapeAttribute(route.title[lang])
    const description = escapeAttribute(route.description[lang])
    const image = `${origin}${route.image}`
    const languageLinks = `<link rel="alternate" hreflang="${lang}" href="${url}" />\n    <link rel="alternate" hreflang="${lang === 'fr' ? 'en' : 'fr'}" href="${alternateUrl}" />\n    <link rel="alternate" hreflang="x-default" href="${origin}${route.path}" />`
    const html = template
      .replace('<html lang="fr">', `<html lang="${lang}">`)
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`)
      .replace(/<meta property="og:type" content="[^"]*"\s*\/?>/, `<meta property="og:type" content="${route.type}" />`)
      .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`)
      .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`)
      .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${image}" />`)
      .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`)
      .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${title}" />`)
      .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${description}" />`)
      .replace(/<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${image}" />`)
      .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
      .replace('</head>', `    ${languageLinks}\n  </head>`)
    const output = path === '/' ? 'dist/index.html' : join('dist', path, 'index.html')
    await mkdir(dirname(output), { recursive: true })
    await writeFile(output, html)
    staticUrls.push({ url, alternate: alternateUrl, lang, priority: route.priority })
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${staticUrls.map(entry => `  <url><loc>${entry.url}</loc><xhtml:link rel="alternate" hreflang="${entry.lang}" href="${entry.url}" /><xhtml:link rel="alternate" hreflang="${entry.lang === 'fr' ? 'en' : 'fr'}" href="${entry.alternate}" /><priority>${entry.priority}</priority></url>`).join('\n')}\n</urlset>\n`
await writeFile('dist/sitemap.xml', sitemap)
