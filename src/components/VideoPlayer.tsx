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
          <img className="player__poster" src={poster} alt="" width="1280" height="720" loading="eager" decoding="async" />
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
