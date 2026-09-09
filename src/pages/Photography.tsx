import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { photographs, type PhotoCategory } from '../data/photography'
import PhotoImage from '../components/PhotoImage'
import PhotoLightbox from '../components/PhotoLightbox'
import Seo from '../components/Seo'
import { photos as projectWorks, pathFor } from '../data/works'

type Filter = PhotoCategory | 'all' | 'projects'
const filters: Filter[] = ['all', 'portrait', 'editorial', 'research', 'documentary', 'projects']

export default function Photography() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')
  const [layout, setLayout] = useState<'editorial' | 'index'>('editorial')
  const [params, setParams] = useSearchParams()
  const activeId = params.get('image')
  const isProjectView = filter === 'projects'
  const visible = useMemo(() => photographs.filter(photo => filter === 'all' || (!isProjectView && photo.category === filter)), [filter, isProjectView])

  const active = visible.findIndex(photo => photo.id === activeId)
  const selectImage = (index: number) => setParams({ image: visible[index].id }, { replace: true })
  const closeImage = () => setParams({}, { replace: true })

  return <main id="main-content" className="photography-page">
    <Seo title={t(e.galleryTitle)} description={t(e.galleryIntro)} />
    <header className="gallery-heading">
      <div className="section-label micro"><span>Shawn N. Hounkpatin</span><span>{t(e.location)}</span></div>
      <h1>{t(e.galleryTitle)}</h1>
      <div className="gallery-intro"><p>{t(e.galleryIntro)}</p><span className="micro">{t(e.galleryNote)}</span></div>
    </header>
    <div className="gallery-toolbar">
      <div className="gallery-filters" role="group" aria-label={t(e.filters)}>
        {filters.map(key => <button key={key} type="button" aria-pressed={filter === key} onClick={() => { closeImage(); setFilter(key) }}>{key === 'projects' ? t({ fr: 'Projets', en: 'Projects' }) : t(e[key])}</button>)}
      </div>
      {!isProjectView && <div className="gallery-layout-control" role="group" aria-label={t(e.layout)}>
        <button type="button" aria-pressed={layout === 'editorial'} onClick={() => setLayout('editorial')}>{t(e.editorialView)}</button>
        <span aria-hidden="true">/</span>
        <button type="button" aria-pressed={layout === 'index'} onClick={() => setLayout('index')}>{t(e.indexView)}</button>
      </div>}
    </div>
    <p className="sr-only" role="status">{isProjectView ? projectWorks.length : visible.length} {t(isProjectView ? { fr: 'projets', en: 'projects' } : visible.length === 1 ? e.image : e.images)}</p>
    {isProjectView ? <div className="photo-project-grid">
      {projectWorks.map((work, index) => <article className="photo-project-card" key={work.slug}>
        <Link to={pathFor(work)}><img src={work.cover.src} srcSet={work.cover.srcSet} sizes="(max-width: 760px) 100vw, 50vw" width={work.cover.width} height={work.cover.height} alt={t(work.cover.alt)} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} /></Link>
        <div><span className="photo-caption-place">{t(work.location)} · {work.year}</span><h2>{t(work.title)}</h2><p>{t(work.statement)}</p><Link className="photo-caption-project" to={pathFor(work)}>{t({ fr: 'Lire le projet', en: 'Read the project' })} ↗</Link></div>
      </article>)}
    </div> : <div className={`photo-grid photo-grid--${layout}`}>
      {visible.map((photo, index) => <figure key={photo.id} className={`photo-item photo-item--${photo.layout}`}>
        <button type="button" className="photo-open" onClick={() => selectImage(index)} aria-label={`${t(e.open)} — ${t(photo.title)}`} aria-haspopup="dialog">
          <PhotoImage photo={photo} eager={index === 0} sizes={layout === 'index' ? '(max-width: 700px) 45vw, 24vw' : '(max-width: 700px) 90vw, 48vw'} />
          <span className="photo-open-cue" aria-hidden="true">↗</span>
        </button>
        <figcaption><span className="photo-caption-title">{t(photo.title)}</span><span className="photo-caption-place">{t(photo.place)}{photo.year && ` — ${photo.year}`}</span><span className="photo-caption-context">{t(photo.context)}</span>{photo.project ? <Link className="photo-caption-project" to={photo.project.href}>{t({ fr: 'Lire la série', en: 'Read the series' })} · {t(photo.project.title)} ↗</Link> : null}</figcaption>
      </figure>)}
    </div>}
    <div className="gallery-end micro"><span>© Shawn N. Hounkpatin</span><span>{t({ fr: 'Prendre le temps de regarder', en: 'Take time to look' })}</span></div>
    {active >= 0 && <PhotoLightbox photos={visible} index={active} onChange={selectImage} onClose={closeImage} />}
  </main>
}
