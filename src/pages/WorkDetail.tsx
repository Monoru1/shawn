import { Link, useParams } from 'react-router-dom'
import ArtworkImage from '../components/ArtworkImage'
import Seo from '../components/Seo'
import VideoPlayer from '../components/VideoPlayer'
import { findWork, nextWork, pathFor } from '../data/works'
import { useI18n } from '../i18n/I18nContext'
import { dictionary as d } from '../i18n/dictionary'

export default function WorkDetail() {
  const { slug } = useParams()
  const { t } = useI18n()
  const work = findWork(slug)

  if (!work) return <main id="main-content" className="empty"><h1>{t(d.work.notFound)}</h1><Link to="/">{t(d.notFound.back)}</Link></main>

  const next = nextWork(work)
  const backPath = work.medium === 'film' ? '/films' : '/photographie'
  const backLabel = t(work.medium === 'film' ? d.work.backFilms : d.work.backPhoto)

  return <main id="main-content" className={`project project--${work.medium}`}>
    <Seo title={t(work.title)} description={t(work.statement)} image={work.cover.src} type="article" />
    <header className="project__header">
      <Link to={backPath} className="project__back">{backLabel}</Link>
      <div className="project__number micro">Shawn N. Hounkpatin / {work.year}</div>
      <h1>{t(work.title)}</h1>
      <dl className="project__facts">
        <div><dt>{t(d.index.colMedium)}</dt><dd>{t(d.medium[work.medium])}</dd></div>
        <div><dt>{t(d.index.colCategory)}</dt><dd>{t(work.category)}</dd></div>
        <div><dt>{t(d.index.colLocation)}</dt><dd>{t(work.location)}</dd></div>
        <div><dt>{t(d.index.colYear)}</dt><dd>{work.year}</dd></div>
      </dl>
    </header>

    {work.video ? <section className="project__screen" aria-label={t(d.work.watch)}>
      <VideoPlayer embedUrl={work.video.embedUrl} poster={work.cover.src} title={t(work.title)} playLabel={t(d.work.watch)} meta={`${t(work.category)} / ${work.year}`} />
      <div className="project__screen-credit"><span>{t(work.role)}</span><a href={work.video.watchUrl} target="_blank" rel="noreferrer">YouTube ↗</a></div>
    </section> : <figure className="project__cover"><ArtworkImage asset={work.cover} eager sizes="100vw" /><figcaption>{t(work.location)} / {work.year}</figcaption></figure>}

    <section className="project__story">
      <span className="micro">{t(work.medium === 'film' ? d.work.filmNote : d.work.seriesNote)}</span>
      <div><blockquote>{t(work.statement)}</blockquote>{work.body.map((paragraph, index) => <p key={index}>{t(paragraph)}</p>)}</div>
    </section>

    {work.gallery.length > 0 && <section className="project__gallery" aria-label={t(work.title)}>
      {work.gallery.map((image, index) => <figure key={image.src} className={`project__gallery-item project__gallery-item--${index + 1}`}>
        <ArtworkImage asset={image} sizes="(max-width: 760px) 100vw, 65vw" />
        <figcaption><span>{String(index + 1).padStart(2, '0')}</span><p>{t(image.alt)}</p></figcaption>
      </figure>)}
    </section>}

    <section className="project__credits">
      <h2>{t(d.work.credits)}</h2>
      <dl>{work.credits.map(credit => <div key={`${t(credit.label)}-${credit.value}`}><dt>{t(credit.label)}</dt><dd>{credit.value}</dd></div>)}</dl>
      {work.partners && <div className="project__partners"><span className="micro">{t(d.work.partners)}</span>{work.partners.map(partner => <p key={partner}>{partner}</p>)}</div>}
    </section>

    <Link className="project__next" to={pathFor(next)}><span className="micro">{t(d.work.next)}</span><strong>{t(next.title)}</strong><i aria-hidden="true">→</i></Link>
  </main>
}
