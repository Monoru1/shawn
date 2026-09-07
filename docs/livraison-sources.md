# Shawn — fichiers complets

Version consultable : https://deploy-preview-1--shawn5.netlify.app/

Chaque fichier ci-dessous est intégral, précédé de son chemin dans le dépôt. Les 21 fichiers WebP sont fournis dans `public/media/works/` sur la même branche GitHub. La provenance des images figure dans `docs/editorial-notes.md` et `public/media/works/sources.json`.

## index.html

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#faf9f6" />

    <title>Shawn N. Hounkpatin — Photographe &amp; Cinéaste</title>
    <meta name="description" content="Shawn N. Hounkpatin — photographe et cinéaste béninois. Documentaire, mode, art. Fondateur de Kerawa Studio, Cotonou." />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Shawn N. Hounkpatin — Photographe & Cinéaste" />
    <meta property="og:description" content="Documentaire, mode, art. Cotonou, Bénin. Kerawa Studio." />
    <meta property="og:image" content="https://shawn5.netlify.app/media/works/kidjo-1-800.webp" />
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=DM+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&display=swap"
    />

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Shawn N. Hounkpatin",
        "jobTitle": ["Photographer", "Filmmaker"],
        "nationality": "Benin",
        "address": { "@type": "PostalAddress", "addressLocality": "Cotonou", "addressCountry": "BJ" },
        "worksFor": { "@type": "Organization", "name": "Kerawa Studio" },
        "sameAs": ["https://www.instagram.com/shawnpicture__/"]
      }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## public/favicon.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#f3f0e8"/><text x="11" y="49" font-family="Georgia,serif" font-size="54" font-weight="bold" fill="#292a24">s</text><circle cx="49" cy="47" r="5" fill="#9b3926"/></svg>
```

## src/App.tsx

```tsx
import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Photography from './pages/Photography'
import WorkList from './pages/WorkList'
import WorkDetail from './pages/WorkDetail'
import Kerawa from './pages/Kerawa'
import NotFound from './pages/NotFound'

export default function App() {
  useSmoothScroll()
  const location = useLocation()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          id="page-content"
          tabIndex={-1}
          key={location.pathname}
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: reducedMotion ? 1 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<WorkList medium="film" />} />
            <Route path="/films/:slug" element={<WorkDetail />} />
            <Route path="/photographie" element={<Photography />} />
            <Route path="/photographie/:slug" element={<WorkDetail />} />
            <Route path="/kerawa" element={<Kerawa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
```

## src/components/Footer.tsx

```tsx
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { CONTACT_EMAIL, INSTAGRAM_PERSONAL } from '../i18n/dictionary'

export default function Footer() {
  const { t } = useI18n()
  return <footer className="site-footer" id="contact">
    <div className="footer-contact"><div><h2>{t(e.footerLabel)}</h2><a className="contact-address" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div><a href={INSTAGRAM_PERSONAL} target="_blank" rel="noreferrer">Instagram ↗</a></div>
    <div className="footer-colophon micro"><span>© {new Date().getFullYear()} Shawn N. Hounkpatin</span><span>{t(e.role)}</span><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>{t(e.backTop)} ↑</button></div>
  </footer>
}
```

## src/components/Header.tsx

```tsx
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'

export default function Header() {
  const { t, lang, toggle } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuButton = useRef<HTMLButtonElement>(null)
  useEffect(() => setOpen(false), [location.pathname])
  const links = [
    { to: '/photographie', label: e.photography },
    { to: '/films', label: e.cinema },
    { to: '/kerawa', label: { fr: 'Kerawa Studio', en: 'Kerawa Studio' } },
  ]
  return <>
    <a className="skip-link" href="#page-content">{t(e.skip)}</a>
    <header className="site-header" onKeyDown={event => {
      if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus() }
    }}>
      <Link to="/" className="site-mark" aria-label="Shawn N. Hounkpatin">Shawn<span> N. Hounkpatin</span></Link>
      <nav id="site-navigation" className={`site-navigation${open ? ' is-open' : ''}`} aria-label={t(e.navigation)}>
        {links.map(link => <NavLink to={link.to} key={link.to}>{t(link.label)}</NavLink>)}
        <a href="#contact" onClick={() => setOpen(false)}>{t(e.contact)} <span aria-hidden="true">↗</span></a>
      </nav>
      <div className="site-tools">
        <button type="button" className="site-language" onClick={toggle} aria-label={t(e.changeLanguage)}><span className={lang === 'fr' ? 'selected' : ''}>FR</span><span aria-hidden="true">/</span><span className={lang === 'en' ? 'selected' : ''}>EN</span></button>
        <button ref={menuButton} type="button" className="site-menu" aria-expanded={open} aria-controls="site-navigation" aria-label={t(open ? e.closeMenu : e.menu)} onClick={() => setOpen(value => !value)}>{open ? '−' : '+'}</button>
      </div>
    </header>
  </>
}
```

## src/components/PhotoImage.tsx

```tsx
import { useState } from 'react'
import { type Photograph, photoUrl, photoWidths } from '../data/photography'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'

type Props = { photo: Photograph; eager?: boolean; sizes?: string; className?: string }

export default function PhotoImage({ photo, eager = false, sizes = '(max-width: 700px) 100vw, 50vw', className = '' }: Props) {
  const { t } = useI18n()
  const [failed, setFailed] = useState(false)
  if (failed) return <span className="photo-error" style={{ aspectRatio: `${photo.width} / ${photo.height}` }} role="img" aria-label={t(photo.alt)}>{t(e.imageError)}</span>
  return <img className={className} src={photoUrl(photo, 800)}
    srcSet={photoWidths.map(width => `${photoUrl(photo, width)} ${width}w`).join(', ')}
    sizes={sizes} alt={t(photo.alt)} width={photo.width} height={photo.height}
    loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async"
    onError={() => setFailed(true)} />
}
```

## src/components/PhotoLightbox.tsx

```tsx
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Photograph } from '../data/photography'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { getLenis } from '../hooks/useSmoothScroll'
import PhotoImage from './PhotoImage'

type Props = { photos: Photograph[]; index: number; onChange: (index: number) => void; onClose: () => void }

export default function PhotoLightbox({ photos, index, onChange, onClose }: Props) {
  const { t } = useI18n()
  const dialog = useRef<HTMLDialogElement>(null)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const photo = photos[index]

  useEffect(() => {
    const element = dialog.current!
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const overflow = document.body.style.overflow
    const lenis = getLenis()
    const wasStopped = lenis?.isStopped
    element.showModal()
    document.body.style.overflow = 'hidden'
    lenis?.stop()
    return () => {
      element.close()
      document.body.style.overflow = overflow
      if (!wasStopped) lenis?.start()
      trigger?.focus({ preventScroll: true })
    }
  }, [])

  const step = (direction: number) => onChange((index + direction + photos.length) % photos.length)

  return createPortal(
    <dialog ref={dialog} className="photo-lightbox" aria-label={t(e.viewer)}
      onCancel={event => { event.preventDefault(); onClose() }}
      onClick={event => { if (event.target === event.currentTarget) onClose() }}
      onKeyDown={event => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault()
          step(event.key === 'ArrowRight' ? 1 : -1)
        }
        if (event.key === 'Home') { event.preventDefault(); onChange(0) }
        if (event.key === 'End') { event.preventDefault(); onChange(photos.length - 1) }
      }}>
      <div className="lightbox-top">
        <span className="micro">Shawn N. Hounkpatin </span>
        <button type="button" className="lightbox-close" onClick={onClose}>{t(e.close)} <span aria-hidden="true">×</span></button>
      </div>
      <div className="lightbox-stage"
        onTouchStart={event => { if (event.touches.length === 1) touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY } }}
        onTouchEnd={event => {
          if (!touch.current || !event.changedTouches.length) return
          const dx = event.changedTouches[0].clientX - touch.current.x
          const dy = event.changedTouches[0].clientY - touch.current.y
          if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1)
          touch.current = null
        }}>
        <button type="button" className="lightbox-arrow" aria-label={t(e.previous)} onClick={() => step(-1)} disabled={photos.length < 2}>←</button>
        <figure className="lightbox-image"><PhotoImage key={photo.id} photo={photo} eager sizes="(max-width: 700px) 90vw, 80vw" /></figure>
        <button type="button" className="lightbox-arrow" aria-label={t(e.next)} onClick={() => step(1)} disabled={photos.length < 2}>→</button>
      </div>
      <div className="lightbox-bottom">
        <div aria-live="polite" aria-atomic="true"><span className="micro">{String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span><div className="lightbox-caption"><p>{t(photo.title)}</p><span>{t(photo.place)}{photo.year && ` — ${photo.year}`}</span><small>{t(photo.context)}</small></div></div>
        <span className="micro lightbox-help">{t(e.keyboard)}</span>
      </div>
    </dialog>, document.body,
  )
}
```

## src/components/VideoPlayer.tsx

```tsx
import { useCallback, useRef, useState } from 'react'

type Props = {
  /** URL d'embed YouTube (mode façade : l'iframe n'est chargée qu'au clic). */
  embedUrl?: string
  /** Fichier vidéo auto-hébergé (mp4/webm) — prioritaire sur embedUrl si fourni. */
  fileSrc?: string
  /** Image d'attente. Obligatoire : c'est elle qui porte le site avant le clic. */
  poster: string
  /** Titre de l'œuvre, utilisé pour le libellé accessible de l'iframe. */
  title: string
  /** Libellé du bouton, ex. « Regarder le film ». */
  playLabel: string
  /** Seconde ligne facultative sous le libellé, ex. « 12 min · 2025 ». */
  meta?: string
}

const YT_ORIGINS = ['https://www.youtube-nocookie.com', 'https://i.ytimg.com']

/** Ajoute les paramètres de lecture au clic sans casser une query existante. */
function withAutoplay(url: string): string {
  const sep = url.includes('?') ? '&' : '?'
  return `${url}${sep}autoplay=1&playsinline=1`
}

/**
 * Lecteur en façade.
 *
 * Tant que l'utilisateur n'a pas cliqué, aucune ressource tierce n'est chargée :
 * on n'affiche que le poster et une commande dessinée maison. Au clic, l'iframe
 * YouTube est montée avec autoplay — le visiteur ne voit donc jamais le player
 * tiers avant d'avoir choisi de regarder.
 *
 * Le jour où les masters passent en HLS auto-hébergé, il suffit de renseigner
 * `fileSrc` : la façade et l'habillage restent identiques.
 */
export default function VideoPlayer({
  embedUrl,
  fileSrc,
  poster,
  title,
  playLabel,
  meta,
}: Props) {
  const [active, setActive] = useState(false)
  const warmed = useRef(false)

  /** Pré-résout le DNS de YouTube au survol : la lecture démarre plus vite. */
  const warm = useCallback(() => {
    if (warmed.current || fileSrc) return
    warmed.current = true
    for (const href of YT_ORIGINS) {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = href
      link.crossOrigin = ''
      document.head.appendChild(link)
    }
  }, [fileSrc])

  const activate = useCallback(() => setActive(true), [])

  if (!embedUrl && !fileSrc) return null

  return (
    <div className="player">
      {!active && (
        <button
          type="button"
          className="player__facade"
          onClick={activate}
          onPointerEnter={warm}
          onFocus={warm}
          aria-label={`${playLabel} — ${title}`}
        >
          <img className="player__poster" src={poster} alt="" loading="lazy" />
          <span className="player__scrim" aria-hidden="true" />
          <span className="player__cue">
            <span className="player__disc" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M6 3.5v17l15-8.5z" />
              </svg>
            </span>
            <span className="player__label">
              <b>{playLabel}</b>
              {meta && <span>{meta}</span>}
            </span>
          </span>
        </button>
      )}

      {active && fileSrc && (
        <video
          className="player__native"
          src={fileSrc}
          poster={poster}
          controls
          autoPlay
          playsInline
        />
      )}

      {active && !fileSrc && embedUrl && (
        <iframe
          className="player__frame"
          src={withAutoplay(embedUrl)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </div>
  )
}
```

## src/data/photography.ts

```ts
import type { Localized } from './works'

export type PhotoCategory = 'portrait' | 'research' | 'documentary'
export type Photograph = {
  id: string
  title: Localized
  alt: Localized
  category: PhotoCategory
  place: Localized
  context: Localized
  year?: string
  source: string
  width: number
  height: number
  layout: 'portrait' | 'landscape'
}

// Image/caption associations checked against Shawn's own posts, reposted by Kerawa.
// Exhibition locations are explicitly labelled; they are not shooting locations.
const source = 'https://bj.linkedin.com/showcase/kerawa-space/'
const kidjoContext = { fr: 'Femi et Sica Kidjo, deux sœurs DJ, photographiées dans les rues d’Akpakpa à leur retour à Cotonou. Série Portrait of a Genius.', en: 'DJ sisters Femi and Sica Kidjo, photographed in the streets of Akpakpa on their return to Cotonou. From Portrait of a Genius.' }
const donliContext = { fr: 'Lady Donli, musicienne nigériane, pendant sa résidence musicale à Cotonou. Série Portrait of a Genius.', en: 'Nigerian musician Lady Donli during her music residency in Cotonou. From Portrait of a Genius.' }
export const photographs: Photograph[] = [
  { id: 'kidjo-1', title: { fr: 'Femi & Sica Kidjo — I', en: 'Femi & Sica Kidjo — I' }, alt: { fr: 'Les deux sœurs Kidjo sur une place d’Akpakpa : l’une debout au premier plan, l’autre assise, un grand arbre derrière elles.', en: 'The Kidjo sisters in an Akpakpa square: one standing in the foreground, the other seated, with a large tree behind them.' }, category: 'portrait', place: { fr: 'Akpakpa, Cotonou · Bénin', en: 'Akpakpa, Cotonou · Benin' }, context: kidjoContext, year: '2026', width: 800, height: 652, layout: 'landscape', source },
  { id: 'donli-1', title: { fr: 'Lady Donli — I', en: 'Lady Donli — I' }, alt: { fr: 'Lady Donli aux cheveux roux et aux lunettes bleues, le menton posé dans sa main, devant un feuillage.', en: 'Lady Donli with red hair and blue glasses, resting her chin on her hand in front of foliage.' }, category: 'portrait', place: { fr: 'Cotonou · Bénin', en: 'Cotonou · Benin' }, context: donliContext, year: '2026', width: 800, height: 1000, layout: 'portrait', source },
  { id: 'enchantresse-1', title: { fr: 'Enchantresse', en: 'Enchantresse' }, alt: { fr: 'Une figure drapée de brun se tient sur les rochers face à l’océan, sous un ciel bleu. Tirage photographique avec sa marge blanche.', en: 'A figure draped in brown stands on rocks by the ocean under a blue sky. Photographic print with its white border.' }, category: 'research', place: { fr: 'Exposée à Grand-Popo · Bénin', en: 'Exhibited in Grand-Popo · Benin' }, context: { fr: 'Une figure fictive inspirée des prêtresses vodoun. Série présentée au festival Lopo Lopo, dans le cadre de la résidence Finding Etherea.', en: 'A fictional figure inspired by vodun priestesses. Series presented at the Lopo Lopo festival as part of the Finding Etherea residency.' }, width: 800, height: 533, layout: 'landscape', source },
  { id: 'mathias-1', title: { fr: 'Portrait de Mathias', en: 'Portrait of Mathias' }, alt: { fr: 'Mathias, un jeune garçon d’Adjarra, tient un petit fruit rouge dans sa main, dans une cour bordée de palmes.', en: 'Mathias, a young boy from Adjarra, holds a small red fruit in a palm-lined courtyard.' }, category: 'documentary', place: { fr: 'Adjarra, Ouémé · Bénin', en: 'Adjarra, Ouémé · Benin' }, context: { fr: 'Portrait réalisé à Adjarra, dans le sud-est du Bénin.', en: 'A portrait made in Adjarra, in south-eastern Benin.' }, year: '2025', width: 800, height: 1000, layout: 'portrait', source },
  { id: 'kidjo-2', title: { fr: 'Femi & Sica Kidjo — II', en: 'Femi & Sica Kidjo — II' }, alt: { fr: 'L’une des sœurs Kidjo, vêtue de blanc et noir, se tient contre un mur blanc traversé d’une bande bleue et rouge.', en: 'One of the Kidjo sisters, dressed in black and white, stands against a white wall crossed by a blue and red stripe.' }, category: 'portrait', place: { fr: 'Akpakpa, Cotonou · Bénin', en: 'Akpakpa, Cotonou · Benin' }, context: kidjoContext, year: '2026', width: 800, height: 640, layout: 'landscape', source },
  { id: 'donli-2', title: { fr: 'Lady Donli — II', en: 'Lady Donli — II' }, alt: { fr: 'Lady Donli appuie la tête sur ses bras croisés au bord d’un muret, en chemise rouge rayée.', en: 'Lady Donli rests her head on her crossed arms on a low wall, wearing a red striped shirt.' }, category: 'portrait', place: { fr: 'Cotonou · Bénin', en: 'Cotonou · Benin' }, context: donliContext, year: '2026', width: 800, height: 640, layout: 'landscape', source },
]

export const filmPoster: Photograph = {
  id: 'between', title: { fr: 'Between Land and Ocean', en: 'Between Land and Ocean' },
  alt: { fr: 'Affiche du film Between Land and Ocean : une jeune fille de dos face à la mer, et le titre en lettres jaunes.', en: 'Between Land and Ocean film poster: a girl seen from behind facing the sea, with the title in yellow letters.' },
  category: 'documentary', place: { fr: 'Gbècon · Bénin', en: 'Gbècon · Benin' }, year: '2025',
  context: { fr: 'À Gbècon, une jeune fille raconte le quotidien d’un village face à l’érosion côtière. Réalisation et image : Shawn N. Hounkpatin. Production : Kerawa Studio.', en: 'In Gbècon, a young girl tells of everyday life in a village facing coastal erosion. Directed and photographed by Shawn N. Hounkpatin. Produced by Kerawa Studio.' },
  source, width: 800, height: 1000, layout: 'portrait',
}

// Public social exports are 800px wide. Do not invent larger masters or upscale.
export const photoWidths = [400, 600, 800] as const
export const photoUrl = (photo: Photograph, width: number) => `/media/works/${photo.id}-${width}.webp`
```

## src/data/works.ts

```ts
import { media } from './media'

export type Medium = 'film' | 'photo'
export type Localized = { fr: string; en: string }

export type Credit = { label: Localized; value: string }

export type Video = {
  embedUrl: string
  watchUrl: string
}

export type Work = {
  slug: string
  medium: Medium
  year: string
  order: number
  title: Localized
  category: Localized
  role: Localized
  location: Localized
  statement: Localized
  body: Localized[]
  credits: Credit[]
  partners?: string[]
  video?: Video
  cover: string
  gallery: readonly string[]
  ratio: 'wide' | 'portrait'
  note?: Localized
}

export const works: Work[] = [
  {
    slug: 'between-land-and-ocean',
    medium: 'film',
    year: '2025',
    order: 1,
    title: { fr: 'Between Land and Ocean', en: 'Between Land and Ocean' },
    category: { fr: 'Documentaire narratif', en: 'Narrative documentary' },
    role: { fr: 'Réalisation & Image', en: 'Director & DOP' },
    location: { fr: 'Gbècon, Bénin', en: 'Gbècon, Benin' },
    statement: {
      fr: "Trouver la façon la plus honnête de raconter Gbècon, un village profondément touché par l'érosion côtière.",
      en: 'Finding the most honest way to tell the story of Gbècon, a village deeply affected by coastal erosion.',
    },
    body: [
      {
        fr: "Avec mon équipe, nous avons choisi une approche immersive, construite sur une journée type à Gbècon, vue par les yeux d'une jeune fille du village.",
        en: 'With my team, we chose an immersive approach, built around a typical day in Gbècon, seen through the eyes of a young girl from the village.',
      },
      {
        fr: "Ce film montre qu'on peut parler de sujets graves comme l'érosion à travers une histoire humaine et simple. Le documentaire narratif devient une manière de ressentir, d'apprendre, et d'ouvrir une conversation.",
        en: 'The film shows that serious subjects like erosion can be told through a simple, human story. The narrative documentary becomes a way to feel, to learn, and to start a conversation.',
      },
      {
        fr: "Alors que le changement climatique devient un défi bien réel, j'espère que ce film touche les cœurs et éveille les consciences sur ce que vivent des communautés comme celle de Gbècon.",
        en: 'As climate change becomes a very real challenge, I hope this film touches hearts and raises awareness of what communities like Gbècon are living through.',
      },
    ],
    credits: [
      { label: { fr: 'Réalisation', en: 'Director' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Image', en: 'Cinematography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Production', en: 'Production' }, value: 'Kerawa Studio' },
      { label: { fr: 'Année', en: 'Year' }, value: '2025' },
    ],
    partners: ['Nordic Development Fund', 'World Bank', 'WACA — West Africa Coastal Areas'],
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/Q2Fk8eVHc3o?rel=0&modestbranding=1',
      watchUrl: 'https://www.youtube.com/watch?v=Q2Fk8eVHc3o',
    },
    cover: media.betweenLandAndOcean.cover,
    gallery: [],
    ratio: 'wide',
  },

  {
    slug: 'enchantresse',
    medium: 'photo',
    year: '2025',
    order: 2,
    title: { fr: 'Enchantresse', en: 'Enchantresse' },
    category: { fr: 'Série photographique', en: 'Photographic series' },
    role: { fr: 'Photographie & Direction artistique', en: 'Photography & Art direction' },
    location: { fr: 'Grand-Popo, Bénin', en: 'Grand-Popo, Benin' },
    statement: {
      fr: "Tout a commencé par une envie de ralentir.",
      en: 'It all began with a desire to slow down.',
    },
    body: [
      {
        fr: "Cette exploration a donné naissance à Enchantresse, mon premier projet artistique, présenté lors du festival Lopo Lopo à Grand-Popo dans le cadre de la résidence Finding Etherea.",
        en: 'This exploration gave birth to Enchantresse, my first artistic project, shown at the Lopo Lopo festival in Grand-Popo as part of the Finding Etherea residency.',
      },
      {
        fr: "À travers la figure d'une Enchantresse — personnage fictif librement inspiré des prêtresses vodoun du Bénin — j'explore le rituel, la nature et la contemplation comme un espace de connexion entre le visible et l'invisible.",
        en: 'Through the figure of an Enchantress — a fictional character freely inspired by the vodun priestesses of Benin — I explore ritual, nature and contemplation as a space of connection between the visible and the invisible.',
      },
      {
        fr: "Ce projet s'inscrit dans une recherche autour du réalisme magique, de la poésie et des mythologies, avec l'envie de créer des univers contemporains ancrés dans nos héritages culturels. Je souhaite continuer à le développer en l'ouvrant à d'autres médiums : installation, performance et cinéma.",
        en: 'The project is part of a research into magical realism, poetry and mythology, seeking contemporary worlds rooted in our cultural heritage. I intend to keep developing it across other media: installation, performance and film.',
      },
    ],
    credits: [
      { label: { fr: 'Photographie', en: 'Photography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Résidence', en: 'Residency' }, value: 'Finding Etherea' },
      { label: { fr: 'Exposition', en: 'Exhibition' }, value: 'Festival Lopo Lopo, Grand-Popo' },
      { label: { fr: 'Année', en: 'Year' }, value: '2025' },
    ],
    cover: media.enchantresse.cover,
    gallery: media.enchantresse.gallery,
    ratio: 'portrait',
  },

  {
    slug: 'my-lover',
    medium: 'film',
    year: '2025',
    order: 3,
    title: { fr: 'My Lover', en: 'My Lover' },
    category: { fr: 'Court-métrage', en: 'Short film' },
    role: { fr: 'Réalisation, Image & Montage', en: 'Director, Cinematography & Editor' },
    location: { fr: 'Bénin', en: 'Benin' },
    statement: {
      fr: "Un film né d'une alchimie spontanée et d'une envie d'exploration.",
      en: 'A film born of a spontaneous alchemy and a desire to explore.',
    },
    body: [
      {
        fr: "Après avoir écouté quelques vers introspectifs écrits par Naëtt Mbaye dans ses moments de méditation, je me suis surpris à chercher comment traduire en images les émotions que son poème a réveillées en moi.",
        en: 'After listening to a few introspective verses written by Naëtt Mbaye during her moments of meditation, I found myself searching for a way to translate into images the emotions her poem awoke in me.',
      },
      {
        fr: "Une manière d'approfondir mes explorations, mais surtout mon apprentissage du septième art.",
        en: 'A way of deepening my explorations, and above all my apprenticeship in cinema.',
      },
    ],
    credits: [
      { label: { fr: 'Réalisation & Montage', en: 'Directed & Edited by' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Image', en: 'Cinematography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Scénario', en: 'Written by' }, value: 'Carmen Mélissa J. Houenou Hounsinou' },
      { label: { fr: 'Texte & Voix', en: 'Text & Voice' }, value: 'Naëtt Mbaye' },
      { label: { fr: 'Musique', en: 'Music' }, value: 'Jean-François Amou' },
      { label: { fr: 'Avec', en: 'Starring' }, value: 'Naëtt Mbaye, Milo Ndour' },
      { label: { fr: 'Lumière', en: 'Lighting' }, value: 'Khaled Mamah, Alexandre Gandaho' },
      { label: { fr: 'Production', en: 'Production' }, value: 'Kerawa Studio' },
    ],
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/e5d2Bag4pCI?rel=0',
      watchUrl: 'https://www.youtube.com/watch?v=e5d2Bag4pCI',
    },
    cover: 'https://i.ytimg.com/vi/e5d2Bag4pCI/hqdefault.jpg',
    gallery: [],
    ratio: 'wide',
  },

  {
    slug: 'lami-cotonou',
    medium: 'photo',
    year: '2025',
    order: 4,
    title: { fr: "L'AMI Cotonou", en: "L'AMI Cotonou" },
    category: { fr: 'Commande — Hôtellerie', en: 'Commission — Hospitality' },
    role: { fr: 'Direction artistique & Image', en: 'Art direction & Imagery' },
    location: { fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' },
    statement: {
      fr: "Une commande pour L'AMI Cotonou, produite par Kerawa Studio.",
      en: "A commission for L'AMI Cotonou, produced by Kerawa Studio.",
    },
    body: [
      {
        fr: "Un travail de commande mené pour un établissement de Cotonou, où l'exigence documentaire rencontre le langage de la marque : lieux, gestes, lumière et atmosphère.",
        en: 'A commissioned work for a Cotonou venue, where documentary rigour meets brand language: places, gestures, light and atmosphere.',
      },
    ],
    credits: [
      { label: { fr: 'Auteur', en: 'Author' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Client', en: 'Client' }, value: "L'AMI Cotonou — Sofitel" },
      { label: { fr: 'Production', en: 'Production' }, value: 'Kerawa Studio' },
    ],
    cover: media.lamiCotonou.cover,
    gallery: media.lamiCotonou.gallery,
    ratio: 'wide',
    note: {
      fr: 'Nature exacte du livrable (photo / film) et année à confirmer.',
      en: 'Exact deliverable (photo / film) and year to be confirmed.',
    },
  },

  {
    slug: 'mode-editorial',
    medium: 'photo',
    year: '2023—2026',
    order: 5,
    title: { fr: 'Mode & Éditorial', en: 'Fashion & Editorial' },
    category: { fr: 'Sélection', en: 'Selection' },
    role: { fr: 'Photographie', en: 'Photography' },
    location: { fr: 'Cotonou & ailleurs', en: 'Cotonou & elsewhere' },
    statement: {
      fr: 'Une sélection de travaux de mode et de commandes éditoriales.',
      en: 'A selection of fashion work and editorial commissions.',
    },
    body: [
      {
        fr: "La mode comme terrain d'essai : le vêtement, le corps et le décor employés pour construire un personnage plutôt que pour illustrer un produit.",
        en: 'Fashion as a testing ground: garment, body and setting used to build a character rather than illustrate a product.',
      },
    ],
    credits: [{ label: { fr: 'Photographie', en: 'Photography' }, value: 'Shawn N. Hounkpatin' }],
    cover: media.mode.cover,
    gallery: media.mode.gallery,
    ratio: 'portrait',
    note: {
      fr: 'Regroupement thématique — à éclater en séries nommées dès réception des travaux.',
      en: 'Thematic grouping — to be split into named series once the works are received.',
    },
  },

  {
    slug: 'documentaire',
    medium: 'photo',
    year: '2023—2026',
    order: 6,
    title: { fr: 'Documentaire', en: 'Documentary' },
    category: { fr: 'Sélection', en: 'Selection' },
    role: { fr: 'Photographie', en: 'Photography' },
    location: { fr: 'Bénin', en: 'Benin' },
    statement: {
      fr: 'Portraits, reportages et repérages.',
      en: 'Portraits, reportage and location scouting.',
    },
    body: [
      {
        fr: "Le versant documentaire du travail : ce qui est photographié parce que c'est là, et non parce que ça a été construit.",
        en: 'The documentary side of the work: what is photographed because it is there, not because it was built.',
      },
    ],
    credits: [{ label: { fr: 'Photographie', en: 'Photography' }, value: 'Shawn N. Hounkpatin' }],
    cover: media.documentaire.cover,
    gallery: media.documentaire.gallery,
    ratio: 'wide',
    note: {
      fr: 'Regroupement thématique — à éclater en séries nommées dès réception des travaux.',
      en: 'Thematic grouping — to be split into named series once the works are received.',
    },
  },
]

export const films = works.filter(w => w.medium === 'film')
export const photos = works.filter(w => w.medium === 'photo')

export const findWork = (slug?: string) => works.find(w => w.slug === slug)

export const nextWork = (current: Work) => {
  const pool = works.filter(w => w.medium === current.medium)
  const i = pool.indexOf(current)
  return pool[(i + 1) % pool.length]
}

export const pathFor = (w: Work) =>
  w.medium === 'film' ? `/films/${w.slug}` : `/photographie/${w.slug}`
```

## src/i18n/dictionary.ts

```ts
export type Lang = 'fr' | 'en'

export const dictionary = {
  nav: {
    films: { fr: 'Films', en: 'Films' },
    photography: { fr: 'Photographie', en: 'Photography' },
    kerawa: { fr: 'Kerawa', en: 'Kerawa' },
    about: { fr: 'Profil', en: 'Profile' },
    contact: { fr: 'Contact', en: 'Contact' },
    menu: { fr: 'Menu', en: 'Menu' },
    close: { fr: 'Fermer', en: 'Close' },
  },

  preview: {
    label: { fr: 'Aperçu', en: 'Preview' },
    text: {
      fr: 'Maquette de présentation — photographies et films de Shawn, textes et crédits réels.',
      en: 'Presentation mock-up — Shawn’s photography and films, with real texts and credits.',
    },
  },

  hero: {
    role: { fr: 'Photographe & Cinéaste', en: 'Photographer & Filmmaker' },
    base: { fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' },
    line: {
      fr: 'Deux façons de regarder la même chose : ce qui reste, et ce qui passe.',
      en: 'Two ways of looking at one thing: what remains, and what passes.',
    },
    enterFilm: { fr: 'Voir les films', en: 'View films' },
    enterPhoto: { fr: 'Voir la photographie', en: 'View photography' },
    scroll: { fr: 'Défiler', en: 'Scroll' },
  },

  index: {
    eyebrow: { fr: 'Index des travaux', en: 'Index of works' },
    title: { fr: 'Films et photographies,\nune seule pratique.', en: 'Films and photographs,\na single practice.' },
    colYear: { fr: 'Année', en: 'Year' },
    colTitle: { fr: 'Titre', en: 'Title' },
    colMedium: { fr: 'Médium', en: 'Medium' },
    colCategory: { fr: 'Nature', en: 'Type' },
    colLocation: { fr: 'Lieu', en: 'Location' },
    all: { fr: 'Tout', en: 'All' },
  },

  medium: {
    film: { fr: 'Film', en: 'Film' },
    photo: { fr: 'Photographie', en: 'Photography' },
  },

  about: {
    eyebrow: { fr: 'Profil', en: 'Profile' },
    bio1: {
      fr: "Shawn N. Hounkpatin est un artiste pluridisciplinaire béninois. Il travaille la photographie de mode, d'art et de documentaire, et réalise des films depuis Cotonou.",
      en: 'Shawn N. Hounkpatin is a Beninese multi-disciplinary artist. He works in fashion, art and documentary photography, and directs films from Cotonou.',
    },
    bio2: {
      fr: "Sa recherche explore le réalisme magique, la poésie et les mythologies, avec l'envie de créer des univers contemporains ancrés dans les héritages culturels du continent. Il est le fondateur de Kerawa Studio.",
      en: 'His research explores magical realism, poetry and mythology, seeking contemporary worlds rooted in the cultural heritage of the continent. He is the founder of Kerawa Studio.',
    },
    basedLabel: { fr: 'Basé à', en: 'Based in' },
    fieldsLabel: { fr: 'Domaines', en: 'Fields' },
    fieldsValue: { fr: 'Documentaire, mode, art', en: 'Documentary, fashion, art' },
    studioLabel: { fr: 'Studio', en: 'Studio' },
    availabilityLabel: { fr: 'Disponible pour', en: 'Available for' },
    availabilityValue: { fr: 'Commandes sélectionnées', en: 'Selected commissions' },
  },

  kerawa: {
    eyebrow: { fr: 'Le studio', en: 'The studio' },
    tagline: {
      fr: "Une maison de production née à Cotonou, pour porter des récits africains jusqu'aux écrans.",
      en: 'A production house born in Cotonou, carrying African stories to the screen.',
    },
    intro: {
      fr: "Kerawa Studio produit les films de Shawn N. Hounkpatin et accompagne des projets documentaires, artistiques et de commande. Le studio travaille avec des institutions internationales comme avec des marques et des auteurs du continent.",
      en: 'Kerawa Studio produces the films of Shawn N. Hounkpatin and supports documentary, artistic and commissioned projects. The studio works with international institutions as well as brands and authors from the continent.',
    },
    servicesTitle: { fr: 'Ce que fait le studio', en: 'What the studio does' },
    teamTitle: { fr: 'Équipe', en: 'Team' },
    partnersTitle: { fr: 'Ils ont travaillé avec le studio', en: 'They worked with the studio' },
    worksTitle: { fr: 'Produit par Kerawa', en: 'Produced by Kerawa' },
    cta: { fr: 'Parler d’un projet', en: 'Discuss a project' },
  },

  work: {
    backFilms: { fr: '← Tous les films', en: '← All films' },
    backPhoto: { fr: '← Toute la photographie', en: '← All photography' },
    statement: { fr: "Note d'intention", en: "Director's note" },
    credits: { fr: 'Crédits', en: 'Credits' },
    partners: { fr: 'Partenaires', en: 'Partners' },
    next: { fr: 'Projet suivant', en: 'Next project' },
    watch: { fr: 'Voir le film', en: 'Watch the film' },
    notFound: { fr: 'Ce projet n’existe pas.', en: 'This project does not exist.' },
  },

  list: {
    filmsTitle: { fr: 'Films', en: 'Films' },
    filmsIntro: {
      fr: 'Documentaires, formes courtes et commandes. Réalisation et image.',
      en: 'Documentaries, short forms and commissions. Directing and cinematography.',
    },
    photoTitle: { fr: 'Photographie', en: 'Photography' },
    photoIntro: {
      fr: 'Séries personnelles, mode et éditorial, reportage.',
      en: 'Personal series, fashion and editorial, reportage.',
    },
  },

  footer: {
    title: { fr: 'Travaillons\nensemble.', en: "Let's work\ntogether." },
    emailLabel: { fr: 'Écrire', en: 'Write' },
    rights: { fr: 'Tous droits réservés', en: 'All rights reserved' },
    top: { fr: 'Haut de page', en: 'Back to top' },
    credit: { fr: 'Site en cours de conception', en: 'Site in progress' },
  },

  notFound: {
    title: { fr: 'Hors champ.', en: 'Out of frame.' },
    text: { fr: 'Cette page n’existe pas ou a été déplacée.', en: 'This page does not exist or has moved.' },
    back: { fr: 'Retour à l’accueil', en: 'Back home' },
  },
} as const

export const CONTACT_EMAIL = 'shawn@kerawastudio.com'
export const INSTAGRAM_PERSONAL = 'https://www.instagram.com/shawnpicture__/'
export const INSTAGRAM_STUDIO = 'https://www.instagram.com/kerawa.space/'
```

## src/i18n/editorial.ts

```ts
export const editorial = {
  cinema: { fr: 'Cinéma', en: 'Cinema' },
  photography: { fr: 'Photographie', en: 'Photography' },
  contact: { fr: 'Contact', en: 'Contact' },
  menu: { fr: 'Ouvrir le menu', en: 'Open menu' },
  closeMenu: { fr: 'Fermer le menu', en: 'Close menu' },
  navigation: { fr: 'Navigation principale', en: 'Main navigation' },
  changeLanguage: { fr: 'Read in English', en: 'Lire en français' },
  skip: { fr: 'Aller au contenu', en: 'Skip to content' },
  role: { fr: 'Photographe & cinéaste', en: 'Photographer & filmmaker' },
  location: { fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' },
  openPhoto: { fr: 'Toutes les photographies', en: 'All photographs' },
  selectedWorks: { fr: 'Œuvres choisies — photographie et cinéma', en: 'Selected works — photography and cinema' },
  selectedPhotographs: { fr: 'Autres regards', en: 'Further photographs' },
  kidjoLink: { fr: 'Voir Femi & Sica Kidjo, à Akpakpa', en: 'View Femi & Sica Kidjo, in Akpakpa' },
  filmLink: { fr: 'Découvrir le film Between Land and Ocean', en: 'Explore the film Between Land and Ocean' },
  directorCredit: { fr: 'Un film de Shawn N. Hounkpatin', en: 'A film by Shawn N. Hounkpatin' },
  profile: { fr: 'À propos de Shawn', en: 'About Shawn' },
  bio: { fr: 'Shawn N. Hounkpatin est photographe et cinéaste béninois. Entre portraits de musiciens, photographie de mode et films documentaires, son travail explore l’identité, la mémoire et les héritages culturels.', en: 'Shawn N. Hounkpatin is a Beninese photographer and filmmaker. Through portraits of musicians, fashion photography and documentary films, his work explores identity, memory and cultural heritage.' },
  bioSecond: { fr: 'Fondé par Shawn à Cotonou, Kerawa réunit des artistes autour de la photographie, du cinéma et de la culture africaine.', en: 'Founded by Shawn in Cotonou, Kerawa brings artists together around photography, cinema and African culture.' },
  studioLabel: { fr: 'Fondé par Shawn', en: 'Founded by Shawn' },
  studioTitle: { fr: 'Cinéma, photographie\net culture africaine.', en: 'Cinema, photography\nand African culture.' },
  studioText: { fr: 'Shawn a fondé Kerawa Studio à Cotonou. Le studio produit ses films et porte son engagement pour la création et la promotion du cinéma africain.', en: 'Shawn founded Kerawa Studio in Cotonou. The studio produces his films and supports his commitment to creating and promoting African cinema.' },
  studioLink: { fr: 'Le studio', en: 'The studio' },
  footerLabel: { fr: 'Commandes & collaborations', en: 'Commissions & collaborations' },
  backTop: { fr: 'Retour en haut', en: 'Back to top' },
  galleryTitle: { fr: 'Photographies', en: 'Photographs' },
  galleryIntro: { fr: 'Portraits, rencontres et recherches personnelles.', en: 'Portraits, encounters and personal studies.' },
  galleryNote: { fr: 'Photographies de Shawn N. Hounkpatin. Chaque image s’ouvre avec sa légende.', en: 'Photographs by Shawn N. Hounkpatin. Open an image to read its caption.' },
  all: { fr: 'Tout', en: 'All' },
  portrait: { fr: 'Portraits', en: 'Portraits' },
  research: { fr: 'Recherche', en: 'Personal work' },
  documentary: { fr: 'Documentaire', en: 'Documentary' },
  filters: { fr: 'Filtrer les photographies', en: 'Filter photographs' },
  layout: { fr: 'Disposition de la galerie', en: 'Gallery layout' },
  editorialView: { fr: 'Parcours', en: 'Sequence' },
  indexView: { fr: 'Index', en: 'Index' },
  images: { fr: 'images', en: 'images' },
  image: { fr: 'image', en: 'image' },
  open: { fr: 'Agrandir', en: 'Enlarge' },
  viewer: { fr: 'Visionneuse de photographies', en: 'Photograph viewer' },
  close: { fr: 'Fermer', en: 'Close' },
  previous: { fr: 'Image précédente', en: 'Previous image' },
  next: { fr: 'Image suivante', en: 'Next image' },
  keyboard: { fr: 'Flèches pour naviguer · Échap pour fermer', en: 'Arrow keys to navigate · Esc to close' },
  imageError: { fr: 'L’image n’a pas pu être chargée.', en: 'The image could not be loaded.' },
} as const
```

## src/main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { I18nProvider } from './i18n/I18nContext'
import App from './App'
import './styles/base.css'
import './styles/app.css'
import './styles/refine.css'
import './styles/editorial.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <App />
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>
)
```

## src/pages/Home.tsx

```tsx
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { photographs, filmPoster } from '../data/photography'
import { INSTAGRAM_PERSONAL } from '../i18n/dictionary'
import PhotoImage from '../components/PhotoImage'
import Seo from '../components/Seo'

export default function Home() {
  const { t } = useI18n()
  return <main id="main-content" className="editorial-home">
    <Seo title={t(e.role)} description={t(e.bio)} />
    <header className="portfolio-intro">
      <h1>Shawn N. Hounkpatin</h1>
      <p>{t(e.role)}<span>{t(e.location)}</span></p>
    </header>
    <section className="selected-works" aria-label={t(e.selectedWorks)}>
      <article className="selected-photo">
        <h2 className="work-medium"><Link to="/photographie">{t(e.photography)} <span aria-hidden="true">↗</span></Link></h2>
        <Link to="/photographie?image=kidjo-1" className="work-image" aria-label={t(e.kidjoLink)}><PhotoImage photo={photographs[0]} eager sizes="(max-width: 700px) 92vw, 55vw" /></Link>
        <div className="work-caption"><h3><Link to="/photographie?image=kidjo-1">Femi & Sica Kidjo</Link></h3><p>{t(photographs[0].place)} — 2026</p><span>Portrait of a Genius</span></div>
      </article>
      <article className="selected-film">
        <h2 className="work-medium"><Link to="/films">{t(e.cinema)} <span aria-hidden="true">↗</span></Link></h2>
        <Link to="/films/between-land-and-ocean" className="work-image film-poster" aria-label={t(e.filmLink)}><PhotoImage photo={filmPoster} eager sizes="(max-width: 700px) 65vw, 29vw" /></Link>
        <div className="work-caption"><h3><Link to="/films/between-land-and-ocean">Between Land and Ocean</Link></h3><p>{t(filmPoster.place)} — 2025</p><span>{t(e.directorCredit)}</span></div>
      </article>
    </section>
    <section className="portfolio-sequence" aria-labelledby="sequence-heading">
      <div className="sequence-heading"><h2 id="sequence-heading">{t(e.selectedPhotographs)}</h2><Link className="text-link" to="/photographie">{t(e.openPhoto)} ↗</Link></div>
      <div className="sequence-pair">
        {[photographs[1], photographs[2]].map(photo => <figure key={photo.id}>
          <Link className="work-image" to={`/photographie?image=${photo.id}`} aria-label={`${t(e.open)} — ${t(photo.title)}`}><PhotoImage photo={photo} /></Link>
          <figcaption className="work-caption"><h3>{t(photo.title).replace(' — I', '')}</h3><p>{t(photo.place)}{photo.year && ` — ${photo.year}`}</p><span>{t(photo.context)}</span></figcaption>
        </figure>)}
      </div>
    </section>
    <section className="artist-notes" aria-labelledby="artist-heading">
      <h2 id="artist-heading">{t(e.profile)}</h2>
      <div><p className="artist-bio">{t(e.bio)}</p><a className="text-link" href={INSTAGRAM_PERSONAL} target="_blank" rel="noreferrer">Instagram · @shawnpicture__ ↗</a></div>
      <aside aria-labelledby="studio-heading"><span className="micro">{t(e.studioLabel)}</span><h3 id="studio-heading">Kerawa Studio</h3><p>{t(e.studioText)}</p><Link className="text-link" to="/kerawa">{t(e.studioLink)} ↗</Link></aside>
    </section>
  </main>
}
```

## src/pages/Kerawa.tsx

```tsx
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { INSTAGRAM_STUDIO } from '../i18n/dictionary'
import Seo from '../components/Seo'

export default function Kerawa() {
  const { t } = useI18n()
  return <main id="main-content" className="kerawa-editorial">
    <Seo title="Kerawa Studio" description={t(e.studioText)} />
    <div className="section-label micro"><span>{t(e.studioLabel)}</span><span>{t(e.location)}</span></div>
    <h1>kerawa<span>studio</span></h1>
    <div className="studio-layout"><h2>{t(e.studioTitle)}</h2><div><p>{t(e.studioText)}</p><p>{t(e.bioSecond)}</p><a className="text-link" href={INSTAGRAM_STUDIO} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a></div></div>
    <div className="kerawa-return"><span className="micro">Shawn N. Hounkpatin</span><Link to="/photographie">{t(e.photography)} ↗</Link><Link to="/films">{t(e.cinema)} ↗</Link></div>
  </main>
}
```

## src/pages/Photography.tsx

```tsx
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { photographs, type PhotoCategory } from '../data/photography'
import PhotoImage from '../components/PhotoImage'
import PhotoLightbox from '../components/PhotoLightbox'
import Seo from '../components/Seo'

type Filter = PhotoCategory | 'all'
const filters: Filter[] = ['all', 'portrait', 'research', 'documentary']

export default function Photography() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')
  const [layout, setLayout] = useState<'editorial' | 'index'>('editorial')
  const [params, setParams] = useSearchParams()
  const activeId = params.get('image')
  const visible = useMemo(() => photographs.filter(photo => filter === 'all' || photo.category === filter), [filter])

  const active = visible.findIndex(photo => photo.id === activeId)
  const selectImage = (index: number) => setParams({ image: visible[index].id }, { replace: true })
  const closeImage = () => setParams({}, { replace: true })

  return <main id="main-content" className="photography-page">
    <Seo title={t(e.galleryTitle)} description={t(e.galleryIntro)} />
    <header className="gallery-heading">
      <div className="section-label micro"><span>Shawn N. Hounkpatin</span><span>{t(e.location)}</span></div>
      <h1>{t(e.galleryTitle)}<sup>({String(photographs.length).padStart(2, '0')})</sup></h1>
      <div className="gallery-intro"><p>{t(e.galleryIntro)}</p><span className="micro">{t(e.galleryNote)}</span></div>
    </header>
    <div className="gallery-toolbar">
      <div className="gallery-filters" role="group" aria-label={t(e.filters)}>
        {filters.map(key => <button key={key} type="button" aria-pressed={filter === key} onClick={() => { closeImage(); setFilter(key) }}>{t(e[key])}<sup>{key === 'all' ? photographs.length : photographs.filter(photo => photo.category === key).length}</sup></button>)}
      </div>
      <div className="gallery-layout-control" role="group" aria-label={t(e.layout)}>
        <button type="button" aria-pressed={layout === 'editorial'} onClick={() => setLayout('editorial')}>{t(e.editorialView)}</button>
        <span aria-hidden="true">/</span>
        <button type="button" aria-pressed={layout === 'index'} onClick={() => setLayout('index')}>{t(e.indexView)}</button>
      </div>
    </div>
    <p className="sr-only" role="status">{visible.length} {t(visible.length === 1 ? e.image : e.images)}</p>
    <div className={`photo-grid photo-grid--${layout}`}>
      {visible.map((photo, index) => <figure key={photo.id} className={`photo-item photo-item--${photo.layout}`}>
        <button type="button" className="photo-open" onClick={() => selectImage(index)} aria-label={`${t(e.open)} — ${t(photo.title)}`} aria-haspopup="dialog">
          <PhotoImage photo={photo} eager={index === 0} sizes={layout === 'index' ? '(max-width: 700px) 45vw, 24vw' : '(max-width: 700px) 90vw, 48vw'} />
          <span className="photo-open-cue" aria-hidden="true">↗</span>
        </button>
        <figcaption><span className="photo-caption-title">{t(photo.title)}</span><span className="photo-caption-place">{t(photo.place)}{photo.year && ` — ${photo.year}`}</span><span className="photo-caption-context">{t(photo.context)}</span></figcaption>
      </figure>)}
    </div>
    <div className="gallery-end micro"><span>© Shawn N. Hounkpatin</span><span>{String(visible.length).padStart(2, '0')} {t(visible.length === 1 ? e.image : e.images)}</span></div>
    {active >= 0 && <PhotoLightbox photos={visible} index={active} onChange={selectImage} onClose={closeImage} />}
  </main>
}
```

## src/styles/editorial.css

```css
/* Shawn: photographs, captions, space. No decorative image cropping. */
:root {
  --bg: #faf9f6;
  --fg: #252722;
  --paper: #faf9f6;
  --ink: #252722;
  --paper-dim: #62645d;
  --sea: #465646;
  --sea-light: #465646;
  --line: #d5d6cf;
  --line-strong: #8c9185;
  --accent: #52613e;
  --editorial-pad: clamp(20px, 3.3vw, 64px);
}
html { scroll-padding-top: 90px; scrollbar-gutter: stable; }
body { overflow-x: clip; }
button, a { -webkit-tap-highlight-color: transparent; }
button { border-radius: 0; }
::selection { background: var(--accent); color: var(--paper); }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 5px; }
.micro { font-family: var(--mono); font-size: 10px; line-height: 1.6; font-weight: 400; letter-spacing: .025em; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
.skip-link { position: fixed; top: 8px; left: 8px; transform: translateY(-200%); background: var(--fg); color: var(--paper); z-index: 100; padding: 12px; }
.skip-link:focus { transform: none; }
.site-header { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; gap: 25px; min-height: 76px; margin: 0 var(--editorial-pad); background: var(--bg); border-bottom: 1px solid var(--line); }
.site-header::before { content: ''; position: absolute; inset: 0 calc(-1 * var(--editorial-pad)); background: var(--bg); z-index: -1; }
.site-mark { font-family: var(--ui); font-size: 14px; font-weight: 500; letter-spacing: -.035em; line-height: 1.2; }
.site-navigation { display: flex; align-items: center; gap: clamp(18px, 2.3vw, 42px); }
.site-navigation a { font-size: 12px; padding: 12px 0; }
.site-navigation a:hover, .site-navigation a.active { text-decoration: underline; text-underline-offset: 5px; }
.site-tools { display: flex; gap: 14px; align-items: center; }
.site-language { display: flex; gap: 7px; align-items: center; font-size: 11px; padding: 12px 0; color: #65675f; }
.site-language .selected { color: var(--fg); text-decoration: underline; text-underline-offset: 5px; }
.site-menu { display: none; font-size: 28px; width: 44px; height: 44px; }
.editorial-home { padding-inline: var(--editorial-pad); }
.portfolio-intro { display: flex; justify-content: space-between; align-items: baseline; gap: 24px; padding: 44px 0 42px; }
.portfolio-intro h1 { font-family: Georgia, serif; font-size: clamp(28px, 3.7vw, 58px); letter-spacing: -.045em; line-height: 1.1; }
.portfolio-intro p { font-size: 13px; margin: 0; line-height: 1.5; }
.portfolio-intro p span { display: block; color: var(--paper-dim); }
.selected-works { display: grid; grid-template-columns: 1.35fr 1fr; column-gap: clamp(40px, 6.5vw, 110px); align-items: start; }
.work-medium { font-size: 16px; font-weight: 500; margin-bottom: 22px; }
.work-medium a { display: flex; align-items: center; justify-content: space-between; }
.work-medium a:hover { color: var(--accent); }
.work-image { display: block; }
.work-image img { height: auto; object-fit: contain; }
.film-poster { width: 69%; margin-inline: auto; }
.selected-film .work-caption { margin-top: 20px; }
.work-caption { margin-top: 17px; }
.work-caption h3 { font-size: clamp(17px, 1.5vw, 23px); line-height: 1.25; font-weight: 500; letter-spacing: -.025em; }
.work-caption h3 a:hover { text-decoration: underline; text-underline-offset: 4px; }
.work-caption p { font-size: 12px; margin: 6px 0; }
.work-caption > span { display: block; font-size: 12px; color: var(--paper-dim); line-height: 1.65; max-width: 47ch; }
.portfolio-sequence { padding-block: clamp(65px, 8vw, 120px); }
.sequence-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; padding-bottom: 24px; border-top: 1px solid var(--line); padding-top: 20px; }
.sequence-heading h2 { font-size: 13px; }
.text-link { display: inline-block; font-size: 12px; padding: 8px 0; text-decoration: underline; text-underline-offset: 5px; }
.text-link:hover { color: var(--accent); }
.sequence-pair { display: grid; grid-template-columns: 1fr 1.45fr; gap: 12%; align-items: center; padding-inline: 5%; }
.sequence-pair > figure:first-child { max-width: 370px; }
.artist-notes { display: grid; grid-template-columns: .65fr 1.4fr 1fr; gap: 7%; border-top: 1px solid var(--line); padding: 36px 0 75px; }
.artist-notes > h2 { font-size: 13px; }
.artist-bio { font-family: Georgia, serif; font-size: clamp(21px, 2vw, 28px); line-height: 1.4; letter-spacing: -.02em; }
.artist-notes aside { border-left: 1px solid var(--line); padding-left: 25px; }
.artist-notes aside h3 { font-size: 19px; margin-block: 8px 18px; font-weight: 500; }
.artist-notes aside p { font-size: 13px; }
.site-footer { margin-inline: var(--editorial-pad); padding: 30px 0 24px; border-top: 1px solid var(--line); }
.footer-contact { display: flex; justify-content: space-between; align-items: end; gap: 24px; padding-bottom: 50px; }
.footer-contact h2 { font-size: 12px; margin-bottom: 12px; }
.contact-address { font-family: Georgia, serif; font-size: clamp(21px, 3vw, 43px); letter-spacing: -.035em; overflow-wrap: anywhere; }
.contact-address:hover { text-decoration: underline; text-underline-offset: 6px; }
.footer-contact > a { font-size: 12px; }
.footer-colophon { border-top: 1px solid var(--line); padding-top: 20px; display: flex; justify-content: space-between; gap: 20px; }
.footer-colophon button { padding: 0; font-size: inherit; letter-spacing: inherit; min-height: 32px; }
/* Two display ratios, with contain preserving each complete photograph. */
.photography-page { padding: 42px var(--editorial-pad) 0; }
.section-label { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; margin-bottom: 24px; }
.gallery-heading h1 { font-family: Georgia, serif; font-size: clamp(42px, 5vw, 74px); letter-spacing: -.055em; line-height: 1.1; }
.gallery-heading h1 sup { font-family: var(--mono); font-size: 11px; letter-spacing: 0; vertical-align: top; display: inline-block; margin: 8px 0 0 15px; }
.gallery-intro { display: flex; justify-content: space-between; align-items: end; gap: 30px; margin: 20px 0 35px; }
.gallery-intro p { margin: 0; font-size: 14px; }
.gallery-intro > span { max-width: 39ch; color: var(--paper-dim); }
.gallery-toolbar { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px 30px; border-block: 1px solid var(--line); padding: 4px 0; margin-bottom: 46px; }
.gallery-filters, .gallery-layout-control { display: flex; align-items: center; gap: 23px; }
.gallery-toolbar button { font-size: 12px; padding: 12px 0; color: var(--paper-dim); }
.gallery-toolbar button[aria-pressed='true'] { color: var(--fg); text-decoration: underline; text-underline-offset: 6px; }
.gallery-toolbar button:hover { color: var(--accent); }
.gallery-toolbar sup { font-family: var(--mono); font-size: 9px; margin-left: 5px; }
.gallery-layout-control { gap: 10px; }
.photo-grid { display: grid; align-items: start; }
.photo-grid--editorial { grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 80px 25px; }
.photo-grid--editorial .photo-item { grid-column: 1 / span 7; }
.photo-grid--editorial .photo-item:nth-child(even) { grid-column: 9 / span 4; margin-top: 75px; }
.photo-grid--editorial .photo-item:nth-child(4n+3) { grid-column: 2 / span 6; }
.photo-open { display: block; width: 100%; position: relative; padding: 0; cursor: zoom-in; }
.photo-item--portrait .photo-open { aspect-ratio: 4 / 5; }
.photo-item--landscape .photo-open { aspect-ratio: 5 / 4; }
.photo-open img { object-fit: contain; }
.photo-open-cue { position: absolute; right: 12px; bottom: 12px; width: 36px; height: 36px; display: grid; place-items: center; background: var(--paper); font-size: 21px; opacity: 0; transition: opacity .18s; }
.photo-open:hover .photo-open-cue, .photo-open:focus-visible .photo-open-cue { opacity: 1; }
.photo-item figcaption { display: flex; flex-direction: column; gap: 4px; padding-top: 14px; }
.photo-caption-title { font-size: 16px; font-weight: 500; letter-spacing: -.025em; }
.photo-caption-place { font-size: 12px; }
.photo-caption-context { font-size: 12px; color: var(--paper-dim); max-width: 48ch; margin-top: 5px; }
.photo-grid--index { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 36px 24px; }
.photo-grid--index .photo-open { aspect-ratio: 4 / 5; }
.photo-grid--index .photo-caption-context { display: none; }
.photo-grid--index .photo-caption-title { font-size: 13px; }
.photo-grid--index .photo-caption-place { font-size: 11px; }
.gallery-end { display: flex; justify-content: space-between; gap: 25px; padding: 22px 0; border-top: 1px solid var(--line); margin-top: 75px; }
.photo-error { display: grid; place-items: center; width: 100%; height: 100%; min-height: 140px; background: #eeeee8; padding: 25px; font-size: 13px; text-align: center; }
/* Native modal: inert background, keyboard navigation, visible contextual captions. */
.photo-lightbox { width: 100%; height: 100dvh; max-width: none; max-height: none; position: fixed; inset: 0; margin: 0; border: 0; padding: 12px var(--editorial-pad); color: var(--fg); background: var(--paper); overflow: auto; }
.photo-lightbox[open] { display: grid; grid-template-rows: auto minmax(140px, 1fr) auto; gap: 16px; animation: viewer-in .16s ease-out; }
.photo-lightbox::backdrop { background: var(--paper); }
.lightbox-top, .lightbox-bottom { display: flex; align-items: center; justify-content: space-between; gap: 25px; }
.lightbox-top { border-bottom: 1px solid var(--line); padding-bottom: 8px; }
.lightbox-close { display: flex; align-items: center; gap: 15px; min-height: 44px; font-size: 12px; padding: 0 8px; }
.lightbox-close span { font-size: 30px; }
.lightbox-stage { display: grid; grid-template-columns: 50px minmax(0, 1fr) 50px; align-items: center; gap: 22px; min-height: 0; }
.lightbox-image { min-width: 0; height: 100%; min-height: 0; }
.lightbox-image img { object-fit: contain; }
.lightbox-arrow { width: 50px; height: 50px; font-size: 28px; border: 1px solid var(--line); }
.lightbox-arrow:hover { background: var(--ink); color: var(--paper); }
.lightbox-arrow:disabled { visibility: hidden; }
.lightbox-bottom { border-top: 1px solid var(--line); padding-top: 12px; padding-bottom: 8px; }
.lightbox-bottom > div { display: flex; align-items: baseline; gap: 28px; }
.lightbox-caption p { font-size: 18px; font-weight: 500; margin: 0 0 4px; }
.lightbox-caption > span { font-size: 12px; display: block; }
.lightbox-caption small { display: block; max-width: 70ch; font-size: 12px; color: var(--paper-dim); margin-top: 5px; }
.lightbox-help { font-size: 9px; flex-shrink: 0; }
@keyframes viewer-in { from { opacity: 0; } to { opacity: 1; } }
/* Existing destinations keep their page structure within the shared shell. */
.kerawa__services-grid article { background: var(--paper); }
.kerawa__hero h1 span { color: var(--accent); }
.tag--photo { color: #655f4a; }
.player__cue { color: #faf9f6; }
.player__disc { border-color: #faf9f6; }
.kerawa-editorial { padding: 55px var(--editorial-pad) 65px; }
.kerawa-editorial > h1 { font-family: Georgia, serif; font-size: clamp(65px, 12vw, 180px); line-height: .95; letter-spacing: -.055em; margin: 40px 0 70px; }
.kerawa-editorial > h1 span { display: block; font-family: var(--mono); font-size: 13px; letter-spacing: .2em; margin-top: 20px; }
.studio-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 10%; }
.studio-layout h2 { font-family: Georgia, serif; white-space: pre-line; font-size: clamp(30px, 4vw, 55px); line-height: 1.15; letter-spacing: -.035em; }
.studio-layout > div { font-size: 15px; max-width: 50ch; }
.kerawa-return { display: flex; align-items: center; flex-wrap: wrap; gap: 25px; border-top: 1px solid var(--line); padding-top: 24px; margin-top: 70px; font-size: 13px; }
.kerawa-return > span { margin-right: auto; }
@media (min-width: 1700px) {
  .editorial-home, .photography-page, .kerawa-editorial { max-width: 1700px; margin-inline: auto; }
}
@media (max-width: 1000px) {
  .site-mark span { display: none; }
  .portfolio-intro h1 { font-size: 34px; }
  .selected-works { gap: 40px; }
  .film-poster { width: 82%; }
  .artist-notes { grid-template-columns: 1fr 1fr; gap: 35px; }
  .artist-notes > h2 { grid-column: 1 / -1; }
  .lightbox-help { display: none; }
  .photo-grid--index { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 700px) {
  .site-header { min-height: 66px; gap: 16px; }
  .site-mark span { display: inline; }
  .site-mark { max-width: 170px; }
  .site-menu { display: block; }
  .site-navigation { display: none; position: absolute; left: calc(-1 * var(--editorial-pad)); right: calc(-1 * var(--editorial-pad)); top: 100%; background: var(--paper); padding: 18px var(--editorial-pad) 24px; border-bottom: 1px solid var(--line); }
  .site-navigation.is-open { display: flex; flex-direction: column; align-items: stretch; gap: 0; }
  .site-navigation a { font-size: 22px; padding: 12px 0; }
  .portfolio-intro { padding: 30px 0; display: block; }
  .portfolio-intro h1 { font-size: clamp(26px, 7vw, 40px); }
  .portfolio-intro p { display: flex; flex-wrap: wrap; gap: 5px 20px; font-size: 11px; margin-top: 14px; }
  .selected-works { grid-template-columns: 1fr; gap: 42px; }
  .work-medium { font-size: 14px; margin-bottom: 16px; }
  .work-caption h3 { font-size: 20px; }
  .film-poster { width: 67%; max-width: 320px; }
  .sequence-heading { flex-wrap: wrap; gap: 5px; }
  .sequence-pair { grid-template-columns: 1fr; gap: 45px; padding-inline: 0; }
  .sequence-pair > figure:first-child { width: 75%; }
  .artist-notes { grid-template-columns: 1fr; gap: 25px; padding-bottom: 45px; }
  .artist-notes > h2 { grid-column: auto; }
  .artist-notes aside { border-left: 0; border-top: 1px solid var(--line); padding: 25px 0 0; }
  .artist-bio { font-size: 23px; }
  .footer-contact { align-items: start; flex-direction: column; padding-bottom: 30px; }
  .footer-colophon { flex-wrap: wrap; font-size: 9px; gap: 12px; }
  .footer-colophon > span:nth-child(2) { display: none; }
  .photography-page { padding-top: 30px; }
  .gallery-heading h1 { font-size: 11vw; }
  .gallery-heading h1 sup { font-size: 9px; margin: 5px 0 0 8px; }
  .gallery-intro { flex-direction: column; align-items: start; gap: 12px; margin-bottom: 25px; }
  .gallery-intro p { font-size: 13px; }
  .gallery-toolbar { margin-bottom: 30px; }
  .gallery-filters { gap: 10px; width: 100%; justify-content: space-between; }
  .gallery-toolbar button { font-size: 11px; }
  .gallery-layout-control { margin-left: auto; }
  .photo-grid--editorial { grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 45px 10px; }
  .photo-grid--editorial .photo-item:nth-child(n) { grid-column: 1 / -1; margin: 0; }
  .photo-grid--editorial .photo-item--portrait:nth-child(n) { grid-column: 2 / -1; }
  .photo-grid--index { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px 16px; }
  .photo-caption-title { font-size: 15px; }
  .photo-caption-place, .photo-caption-context { font-size: 11px; }
  .gallery-end { margin-top: 50px; font-size: 9px; }
  .photo-lightbox { padding: 8px 14px; }
  .photo-lightbox[open] { gap: 12px; }
  .lightbox-top .micro { font-size: 9px; }
  .lightbox-stage { grid-template-columns: 1fr; position: relative; padding-bottom: 48px; }
  .lightbox-image { grid-row: 1; grid-column: 1; }
  .lightbox-arrow { position: absolute; bottom: 0; left: 0; width: 44px; height: 44px; z-index: 1; background: var(--paper); font-size: 23px; }
  .lightbox-arrow:last-child { left: auto; right: 0; }
  .lightbox-bottom > div { gap: 14px; width: 100%; }
  .lightbox-bottom > div > .micro { flex-shrink: 0; font-size: 9px; }
  .lightbox-caption p { font-size: 16px; }
  .lightbox-caption small, .lightbox-caption > span { font-size: 11px; }
  .lightbox-bottom { padding-bottom: env(safe-area-inset-bottom); }
  .studio-layout { grid-template-columns: 1fr; gap: 30px; }
  .kerawa-return > span { width: 100%; }
}
@media (hover: none) { .photo-open-cue { opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .photo-lightbox[open] { animation: none; } }
```

## Fichiers touchés

- index.html
- public/favicon.svg
- src/App.tsx
- src/components/Footer.tsx
- src/components/Header.tsx
- src/components/PhotoImage.tsx
- src/components/PhotoLightbox.tsx
- src/components/VideoPlayer.tsx
- src/data/photography.ts
- src/data/works.ts
- src/i18n/dictionary.ts
- src/i18n/editorial.ts
- src/main.tsx
- src/pages/Home.tsx
- src/pages/Kerawa.tsx
- src/pages/Photography.tsx
- src/styles/editorial.css
- public/media/works/ : 21 variantes WebP et sources.json
- docs/editorial-notes.md
- docs/livraison-sources.md

## Polices

Archivo (400, 500, 600), DM Mono (300, 400, 500), Fraunces (300–700, romain et italique) : Google Fonts, feuille complète dans index.html. Georgia : police système, aucun téléchargement. Fraunces est conservée pour les pages existantes.

## Trois décisions de design

1. Des œuvres réelles dès le premier écran, avec photographie et cinéma au même niveau, pour présenter immédiatement Shawn par son travail.
2. Des légendes visibles avec les sujets, lieux et contextes confirmés, pour donner à chaque image une histoire précise.
3. Une composition claire et asymétrique, un index compact et des images non recadrées, pour laisser les œuvres déterminer le rythme du portfolio.
