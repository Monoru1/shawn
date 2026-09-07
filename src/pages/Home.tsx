import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { photographs } from '../data/photography'
import PhotoImage from '../components/PhotoImage'
import Seo from '../components/Seo'

export default function Home() {
  const { t } = useI18n()
  return (
    <main id="main-content" className="editorial-home">
      <Seo title={t(e.role).replace('\n', ' ')} description={t(e.bio)} />
      <section className="cover" aria-labelledby="shawn-name">
        <div className="cover-kicker micro"><span>{t(e.location)}</span><span>{t(e.previewShort)} / 2026</span></div>
        <h1 id="shawn-name" className="cover-name" aria-label="Shawn N. Hounkpatin">SHAWN<span aria-hidden="true">.</span></h1>
        <div className="cover-byline"><span>N. Hounkpatin</span><span className="micro">{t(e.photography)} & {t(e.cinema)}</span></div>
        <div className="cover-composition">
          <div className="cover-intro">
            <h2>{t(e.role)}</h2>
            <p>{t(e.introduction)}</p>
            <div className="cover-links">
              <Link to="/photographie"><span>{t(e.photography)}</span><span aria-hidden="true">↗</span></Link>
              <Link to="/films"><span>{t(e.cinema)}</span><span aria-hidden="true">↗</span></Link>
            </div>
            <span className="micro cover-scroll">↓ &nbsp; {t(e.scroll)}</span>
          </div>
          <figure className="cover-portrait">
            <PhotoImage photo={photographs[0]} eager sizes="(max-width: 700px) 65vw, 42vw" />
            <figcaption className="micro"><span>01 / {t(e.photography)}</span><span>{t(e.previewShort)}</span></figcaption>
          </figure>
          <div className="cover-aside">
            <span className="cover-ampersand" aria-hidden="true">&</span>
            <Link to="/films" className="cover-film" aria-label={t(e.openCinema)}>
              <PhotoImage photo={photographs[4]} eager sizes="(max-width: 700px) 35vw, 25vw" />
              <span className="micro"><span>02 / {t(e.cinema)}</span><span aria-hidden="true">↗</span></span>
            </Link>
            <p>{t(e.filmCaption)}</p>
          </div>
        </div>
        <p className="cover-note micro">{t(e.preview)}</p>
      </section>

      <section className="practice" aria-labelledby="practice-heading">
        <div className="section-label micro"><span>01 — {t(e.practice)}</span><span>Shawn N. Hounkpatin</span></div>
        <h2 id="practice-heading" className="editorial-heading">{t(e.practiceTitle)}</h2>
        <div className="practice-pair">
          <article className="practice-universe">
            <Link to="/photographie" className="universe-image" aria-label={t(e.openPhoto)}><PhotoImage photo={photographs[3]} /><span className="image-corner" aria-hidden="true">↗</span></Link>
            <div className="universe-caption"><span className="micro">I / {t(e.previewShort)}</span><h3><Link to="/photographie">{t(e.photography)} <span aria-hidden="true">↗</span></Link></h3><p>{t(e.photoDescription)}</p></div>
          </article>
          <article className="practice-universe practice-universe--film">
            <Link to="/films" className="universe-image universe-image--landscape" aria-label={t(e.openCinema)}><PhotoImage photo={photographs[4]} /><span className="image-corner" aria-hidden="true">↗</span></Link>
            <div className="universe-caption"><span className="micro">II / {t(e.previewShort)}</span><h3><Link to="/films">{t(e.cinema)} <span aria-hidden="true">↗</span></Link></h3><p>{t(e.filmDescription)}</p></div>
          </article>
        </div>
      </section>

      <section className="artist" aria-labelledby="artist-heading">
        <div className="section-label micro"><span>02 — {t(e.profile)}</span><span>{t(e.location)}</span></div>
        <div className="artist-layout"><h2 id="artist-heading">{t(e.profileTitle)}</h2><div><p>{t(e.bio)}</p><p>{t(e.bioSecond)}</p><a className="text-link" href="#contact">{t(e.contact)} <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <section className="studio-intro" aria-labelledby="studio-heading">
        <div className="section-label micro"><span>03 — Kerawa Studio</span><span>{t(e.studioLabel)}</span></div>
        <div className="studio-layout"><h2 id="studio-heading">{t(e.studioTitle)}</h2><div><p>{t(e.studioText)}</p><Link to="/kerawa" className="text-link">{t(e.studioLink)} <span aria-hidden="true">↗</span></Link></div></div>
        <Link to="/kerawa" className="studio-wordmark" aria-label={t(e.studioLink)}>kerawa<span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}
