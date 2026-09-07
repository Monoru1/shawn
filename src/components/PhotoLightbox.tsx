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
