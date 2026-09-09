import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const origin = 'https://shawn5.netlify.app'
const routes = [
  { path: '/', title: 'Shawn N. Hounkpatin — Photographe & Cinéaste', description: 'Shawn N. Hounkpatin, photographe et cinéaste béninois. Documentaire, mode et art depuis Cotonou.', image: '/media/works/kidjo-1-800.webp', type: 'website' },
  { path: '/photographie', title: 'Photographie — Shawn N. Hounkpatin', description: 'Portraits, recherches personnelles et récits documentaires photographiés par Shawn au Bénin.', image: '/media/works/kidjo-1-800.webp', type: 'website' },
  { path: '/films', title: 'Films — Shawn N. Hounkpatin', description: 'Films documentaires et expérimentaux réalisés et mis en images par Shawn N. Hounkpatin.', image: '/media/films/between-1280.webp', type: 'website' },
  { path: '/films/between-land-and-ocean', title: 'Between Land and Ocean — Shawn N. Hounkpatin', description: 'À Avloh, Shawn filme une communauté confrontée aux transformations du littoral béninois.', image: '/media/films/between-1280.webp', type: 'article' },
  { path: '/films/my-lover', title: 'My Lover — Shawn N. Hounkpatin', description: 'Un court métrage expérimental réalisé par Shawn à partir des vers et de la voix de Naëtt Mbaye.', image: '/media/films/my-lover-480.webp', type: 'article' },
  { path: '/photographie/portrait-of-a-genius', title: 'Portrait of a Genius — Shawn N. Hounkpatin', description: 'Femi et Sica Kidjo, puis Lady Donli, photographiées par Shawn dans les lieux de leurs séjours à Cotonou.', image: '/media/works/kidjo-1-800.webp', type: 'article' },
  { path: '/photographie/enchantresse', title: 'Enchantresse — Shawn N. Hounkpatin', description: 'Une recherche photographique de Shawn entre figure fictive, héritages vodun, nature et contemplation.', image: '/media/works/enchantresse-1-800.webp', type: 'article' },
  { path: '/archive', title: 'Index des œuvres — Shawn N. Hounkpatin', description: 'Index chronologique des films et photographies de Shawn N. Hounkpatin.', image: '/media/works/kidjo-1-800.webp', type: 'website' },
  { path: '/shawn', title: 'Shawn N. Hounkpatin — Profil', description: 'Photographe, cinéaste béninois et fondateur de Kerawa Studio, Shawn travaille depuis Cotonou.', image: '/media/profile/shawn-1200.webp', type: 'profile' },
  { path: '/kerawa', title: 'Kerawa Studio — Fondé par Shawn N. Hounkpatin', description: 'Kerawa Studio produit les films de Shawn et accompagne la création et la promotion du cinéma africain.', image: '/media/films/between-1280.webp', type: 'website' },
]

const escapeAttribute = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const template = await readFile('dist/index.html', 'utf8')

for (const route of routes) {
  const url = `${origin}${route.path === '/' ? '/' : route.path}`
  const title = escapeAttribute(route.title)
  const description = escapeAttribute(route.description)
  const image = `${origin}${route.image}`
  let html = template
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

  const output = route.path === '/' ? 'dist/index.html' : join('dist', route.path, 'index.html')
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, html)
}
