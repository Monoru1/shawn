import { useState } from 'react'
import { type Photograph, photoUrl } from '../data/photography'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'

type Props = { photo: Photograph; eager?: boolean; sizes?: string; className?: string }

export default function PhotoImage({ photo, eager = false, sizes = '(max-width: 700px) 100vw, 50vw', className = '' }: Props) {
  const { t } = useI18n()
  const [failed, setFailed] = useState(false)
  if (failed) return <span className="photo-error" style={{ aspectRatio: `${photo.width} / ${photo.height}` }} role="img" aria-label={t(photo.alt)}>{t(e.imageError)}</span>
  return <img className={className} src={photoUrl(photo, 1600)}
    srcSet={[800, 1600, 2400].map(width => `${photoUrl(photo, width)} ${width}w`).join(', ')}
    sizes={sizes} alt={t(photo.alt)} width={photo.width} height={photo.height}
    loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async"
    onError={() => setFailed(true)} />
}
