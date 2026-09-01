import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { dictionary as d } from '../i18n/dictionary'
import { useReveal } from '../hooks/useReveal'
import { findWork, nextWork, pathFor } from '../data/works'
import Seo from '../components/Seo'

export default function WorkDetail() {
  const { slug } = useParams()
  const root = useRef<HTMLElement>(null)
  const { t, lang } = useI18n()
  const work = findWork(slug)
  useReveal(root, [lang, slug])

  if (!work) {
    return (
      <main className="empty">
        <h1>{t(d.work.notFound)}</h1>
        <Link to="/" className="link-underline">{t(d.notFound.back)}</Link>
      </main>
    )
  }

  const next = nextWork(work)
  const backLabel = t(work.medium === 'film' ? d.work.backFilms : d.work.backPhoto)
  const backPath = work.medium === 'film' ? '/films' : '/photographie'

  return (
    <main ref={root} className={`detail detail--${work.medium}`}>
      <Seo title={t(work.title)} description={t(work.statement)} />

      <header className="detail__head">
        <Link to={backPath} className="link-underline detail__back">{backLabel}</Link>
        <h1>{t(work.title)}</h1>
        <dl className="detail__facts">
          <div><dt>{t(d.index.colMedium)}</dt><dd>{t(d.medium[work.medium])}</dd></div>
          <div><dt>{t(d.index.colCategory)}</dt><dd>{t(work.category)}</dd></div>
          <div><dt>{t(d.index.colYear)}</dt><dd>{work.year}</dd></div>
          <div><dt>{t(d.index.colLocation)}</dt><dd>{t(work.location)}</dd></div>
        </dl>
      </header>

      <figure className="detail__hero" data-reveal>
        <img src={work.cover} alt={t(work.title)} />
      </figure>

      <section className="detail__statement">
        <p className="eyebrow">{t(d.work.statement)}</p>
        <div>
          <blockquote>{t(work.statement)}</blockquote>
          {work.body.map((p, i) => <p key={i}>{t(p)}</p>)}
          {work.videoUrl && (
            <a className="btn" href={work.videoUrl} target="_blank" rel="noreferrer">
              {t(d.work.watch)} ↗
            </a>
          )}
        </div>
      </section>

      <section className="detail__gallery">
        {work.gallery.map((src, i) => (
          <figure key={src} className={i % 3 === 1 ? 'is-offset' : ''} data-reveal>
            <img src={src} alt={`${t(work.title)} — ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </section>

      <section className="detail__credits">
        <h2>{t(d.work.credits)}</h2>
        <dl className="spec">
          {work.credits.map(c => (
            <div key={c.value + t(c.label)}>
              <dt>{t(c.label)}</dt>
              <dd>{c.value}</dd>
            </div>
          ))}
        </dl>

        {work.partners && (
          <div className="detail__partners">
            <p className="eyebrow">{t(d.work.partners)}</p>
            <ul>{work.partners.map(p => <li key={p}>{p}</li>)}</ul>
          </div>
        )}

        {work.note && <p className="detail__note">{t(work.note)}</p>}
      </section>

      <Link className="detail__next" to={pathFor(next)}>
        <span className="eyebrow">{t(d.work.next)}</span>
        <strong>{t(next.title)}</strong>
        <span aria-hidden="true">→</span>
      </Link>
    </main>
  )
}

