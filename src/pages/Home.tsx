import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { dictionary as d } from '../i18n/dictionary'
import { useReveal } from '../hooks/useReveal'
import { media, HERO_VIDEO, HERO_VIDEO_FALLBACK } from '../data/media'
import { films, photos, pathFor } from '../data/works'
import WorkIndex from '../components/WorkIndex'
import Seo from '../components/Seo'

export default function Home() {
  const root = useRef<HTMLElement>(null)
  const { t, lang } = useI18n()
  useReveal(root, [lang])

  // La boucle du hero ne se charge que si l'utilisateur n'a pas demandé
  // à réduire les animations. Sinon on reste sur le poster : plus rapide,
  // et conforme aux préférences système.
  const [reelOk, setReelOk] = useState(false)
  const [reelReady, setReelReady] = useState(false)

  useEffect(() => {
    if (!HERO_VIDEO) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReelOk(!mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const featuredFilm = films[0]
  const featuredPhoto = photos[0]

  return (
    <main ref={root}>
      <Seo
        title={lang === 'fr' ? 'Photographe & Cinéaste' : 'Photographer & Filmmaker'}
        description={t(d.about.bio1)}
      />

      <section className="hero">
        <div className="hero__media">
          <img
            src={media.heroPoster}
            alt=""
            style={{
              opacity: reelReady ? 0 : 1,
              transition: 'opacity 1.2s var(--ease)',
            }}
          />
          {reelOk && (
            <video
              poster={media.heroPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onCanPlay={() => setReelReady(true)}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: reelReady ? 1 : 0,
                transition: 'opacity 1.2s var(--ease)',
              }}
            >
              <source src={HERO_VIDEO} type="video/webm" />
              {HERO_VIDEO_FALLBACK && (
                <source src={HERO_VIDEO_FALLBACK} type="video/mp4" />
              )}
            </video>
          )}
          <div className="hero__veil" />
          <div className="grain" aria-hidden="true" />
        </div>

        <div className="hero__content">
          <p className="hero__role">{t(d.hero.role)}</p>
          <h1 className="hero__name">
            <span>Shawn N.</span>
            <span>Hounkpatin</span>
          </h1>
          <p className="hero__line">{t(d.hero.line)}</p>
        </div>

        <div className="hero__doors">
          <Link to="/films" className="door">
            <span className="door__num">01</span>
            <span className="door__label">{t(d.hero.enterFilm)}</span>
            <span className="door__arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/photographie" className="door">
            <span className="door__num">02</span>
            <span className="door__label">{t(d.hero.enterPhoto)}</span>
            <span className="door__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="hero__foot">
          <span>{t(d.hero.base)}</span>
          <span>{t(d.hero.scroll)} ↓</span>
        </div>
      </section>

      <WorkIndex />

      <section className="pair">
        {[featuredFilm, featuredPhoto].map(w => (
          <article key={w.slug} className={`pair__item pair__item--${w.ratio}`}>
            <Link to={pathFor(w)} className="pair__media" data-reveal>
              <img src={w.cover} alt={t(w.title)} loading="lazy" />
            </Link>
            <div className="pair__meta">
              <span className={`tag tag--${w.medium}`}>{t(d.medium[w.medium])}</span>
              <h3>{t(w.title)}</h3>
              <p>{t(w.statement)}</p>
              <Link to={pathFor(w)} className="link-underline">
                {t(w.medium === 'film' ? d.work.backFilms : d.work.backPhoto).replace('← ', '')} ↗
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="about" id="profil">
        <p className="eyebrow">{t(d.about.eyebrow)}</p>
        <div className="about__grid">
          <figure className="about__portrait" data-reveal>
            <img src={media.portrait} alt="Shawn N. Hounkpatin" loading="lazy" />
          </figure>
          <div className="about__copy">
            <p className="about__lead">{t(d.about.bio1)}</p>
            <p>{t(d.about.bio2)}</p>
            <dl className="spec">
              <div><dt>{t(d.about.basedLabel)}</dt><dd>{t(d.hero.base)}</dd></div>
              <div><dt>{t(d.about.fieldsLabel)}</dt><dd>{t(d.about.fieldsValue)}</dd></div>
              <div><dt>{t(d.about.studioLabel)}</dt><dd>Kerawa Studio</dd></div>
              <div><dt>{t(d.about.availabilityLabel)}</dt><dd>{t(d.about.availabilityValue)}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="kerawa-teaser">
        <div className="kerawa-teaser__media" data-reveal>
          <img src={media.kerawaCover} alt="" loading="lazy" />
        </div>
        <div className="kerawa-teaser__copy">
          <p className="eyebrow">{t(d.kerawa.eyebrow)}</p>
          <h2>Kerawa<br />Studio</h2>
          <p className="kerawa-teaser__line">{t(d.kerawa.tagline)}</p>
          <Link to="/kerawa" className="btn">{t(d.nav.kerawa)} →</Link>
        </div>
      </section>
    </main>
  )
}
