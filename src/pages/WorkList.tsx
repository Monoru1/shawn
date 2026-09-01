import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { dictionary as d } from '../i18n/dictionary'
import { useReveal } from '../hooks/useReveal'
import { works, pathFor, type Medium } from '../data/works'
import Seo from '../components/Seo'

export default function WorkList({ medium }: { medium: Medium }) {
  const root = useRef<HTMLElement>(null)
  const { t, lang } = useI18n()
  useReveal(root, [lang, medium])

  const list = works.filter(w => w.medium === medium)
  const title = t(medium === 'film' ? d.list.filmsTitle : d.list.photoTitle)
  const intro = t(medium === 'film' ? d.list.filmsIntro : d.list.photoIntro)

  return (
    <main ref={root} className="worklist">
      <Seo title={title} description={intro} />

      <header className="worklist__head">
        <p className="eyebrow">{t(d.index.eyebrow)}</p>
        <h1>{title}</h1>
        <p className="worklist__intro">{intro}</p>
      </header>

      <div className={`worklist__grid worklist__grid--${medium}`}>
        {list.map((w, i) => (
          <article key={w.slug} className={`card card--${w.ratio}`} style={{ '--i': i } as React.CSSProperties}>
            <Link to={pathFor(w)} className="card__media" data-reveal>
              <img src={w.cover} alt={t(w.title)} loading={i === 0 ? 'eager' : 'lazy'} />
              <span className="card__cue">
                {medium === 'film' ? t(d.work.watch) : t(d.medium.photo)} ↗
              </span>
            </Link>
            <div className="card__meta">
              <h2>{t(w.title)}</h2>
              <span>{t(w.category)}</span>
              <span>{t(w.role)}</span>
              <span>{w.year} — {t(w.location)}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

