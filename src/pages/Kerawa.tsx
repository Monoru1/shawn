import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { dictionary as d, CONTACT_EMAIL } from '../i18n/dictionary'
import { useReveal } from '../hooks/useReveal'
import { kerawaServices, kerawaTeam, kerawaPartners } from '../data/kerawa'
import { works, pathFor } from '../data/works'
import { media } from '../data/media'
import Seo from '../components/Seo'

export default function Kerawa() {
  const root = useRef<HTMLElement>(null)
  const { t, lang } = useI18n()
  useReveal(root, [lang])

  const produced = works.filter(w =>
    w.credits.some(c => c.value.toLowerCase().includes('kerawa'))
  )

  return (
    <main ref={root} className="kerawa">
      <Seo title="Kerawa Studio" description={t(d.kerawa.tagline)} />

      <header className="kerawa__hero">
        <p className="eyebrow">{t(d.kerawa.eyebrow)}</p>
        <h1>Kerawa<br /><span>Studio</span></h1>
        <p className="kerawa__tagline">{t(d.kerawa.tagline)}</p>
      </header>

      <figure className="kerawa__cover" data-reveal>
        <img src={media.kerawaCover} alt="Kerawa Studio" />
      </figure>

      <section className="kerawa__intro">
        <p>{t(d.kerawa.intro)}</p>
      </section>

      <section className="kerawa__services">
        <h2 className="eyebrow">{t(d.kerawa.servicesTitle)}</h2>
        <div className="kerawa__services-grid">
          {kerawaServices.map((s, i) => (
            <article key={s.title.fr} data-rise>
              <span className="kerawa__num">K—0{i + 1}</span>
              <h3>{t(s.title)}</h3>
              <p>{t(s.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerawa__works">
        <h2 className="eyebrow">{t(d.kerawa.worksTitle)}</h2>
        <ul className="kerawa__works-list">
          {produced.map(w => (
            <li key={w.slug} data-rise>
              <Link to={pathFor(w)}>
                <span>{w.year}</span>
                <strong>{t(w.title)}</strong>
                <span>{t(w.category)}</span>
                <i aria-hidden="true">↗</i>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="kerawa__bottom">
        <div>
          <h2 className="eyebrow">{t(d.kerawa.teamTitle)}</h2>
          <dl className="spec">
            {kerawaTeam.map(m => (
              <div key={m.name}>
                <dt>{m.name}</dt>
                <dd>{t(m.role)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="eyebrow">{t(d.kerawa.partnersTitle)}</h2>
          <ul className="kerawa__partners">
            {kerawaPartners.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>

      <section className="kerawa__cta">
        <a className="btn btn--lg" href={`mailto:${CONTACT_EMAIL}`}>{t(d.kerawa.cta)} →</a>
      </section>
    </main>
  )
}

