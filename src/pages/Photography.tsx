import { useMemo, useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { photographs, type PhotoCategory } from '../data/photography'
import PhotoImage from '../components/PhotoImage'
import PhotoLightbox from '../components/PhotoLightbox'
import Seo from '../components/Seo'

type Filter = PhotoCategory | 'all'
const filters: Filter[] = ['all', 'portrait', 'fashion', 'nature']

export default function Photography() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')
  const [layout, setLayout] = useState<'editorial' | 'index'>('editorial')
  const [active, setActive] = useState<number | null>(null)
  const visible = useMemo(() => photographs.filter(photo => filter === 'all' || photo.category === filter), [filter])

  return <main id="main-content" className="photography-page">
    <Seo title={t(e.galleryTitle)} description={t(e.galleryIntro)} />
    <header className="gallery-heading">
      <div className="section-label micro"><span>Shawn N. Hounkpatin</span><span>{t(e.previewShort)}</span></div>
      <h1>{t(e.galleryTitle)}<sup>({String(photographs.length).padStart(2, '0')})</sup></h1>
      <div className="gallery-intro"><p>{t(e.galleryIntro)}</p><span className="micro">{t(e.galleryNote)}</span></div>
    </header>
    <div className="gallery-toolbar">
      <div className="gallery-filters" role="group" aria-label={t(e.filters)}>
        {filters.map(key => <button key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)}>{t(e[key])}<sup>{key === 'all' ? photographs.length : photographs.filter(photo => photo.category === key).length}</sup></button>)}
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
        <button type="button" className="photo-open" onClick={() => setActive(index)} aria-label={`${t(e.open)} — ${t(photo.title)}`} aria-haspopup="dialog">
          <PhotoImage photo={photo} eager={index === 0} sizes={layout === 'index' ? '(max-width: 700px) 45vw, 24vw' : '(max-width: 700px) 90vw, 48vw'} />
          <span className="photo-open-cue" aria-hidden="true">↗</span>
        </button>
        <figcaption><span className="micro">{String(photographs.indexOf(photo) + 1).padStart(2, '0')}</span><span>{t(photo.title)}</span><span className="micro">{t(e[photo.category])}</span></figcaption>
      </figure>)}
    </div>
    <div className="gallery-end micro"><span>{t(e.preview)}</span><span>{String(visible.length).padStart(2, '0')} {t(visible.length === 1 ? e.image : e.images)}</span></div>
    {active !== null && <PhotoLightbox photos={visible} index={active} onChange={setActive} onClose={() => setActive(null)} />}
  </main>
}
