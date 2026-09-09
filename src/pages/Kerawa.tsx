import { Link } from 'react-router-dom'
import ArtworkImage from '../components/ArtworkImage'
import Seo from '../components/Seo'
import { media } from '../data/media'
import { films, pathFor } from '../data/works'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { INSTAGRAM_STUDIO } from '../i18n/dictionary'

export default function Kerawa() {
  const { t } = useI18n()

  return <main id="main-content" className="studio-page">
    <Seo title="Kerawa Studio" description={t(e.studioText)} />
    <header className="studio-page__header">
      <div className="section-label micro"><span>{t(e.studioLabel)}</span><span>{t(e.location)}</span></div>
      <h1>Kerawa <em>Studio</em></h1>
      <p>{t(e.studioText)}</p>
    </header>

    <figure className="studio-page__image"><ArtworkImage asset={media.betweenLandAndOcean.cover} eager sizes="100vw" /><figcaption>Between Land and Ocean / Kerawa Studio / 2025</figcaption></figure>

    <section className="studio-page__relation">
      <span className="micro">Shawn × Kerawa</span>
      <div><h2>{t(e.studioRelationshipTitle)}</h2><p>{t(e.studioRelationship)}</p></div>
    </section>

    <section className="studio-page__works" aria-labelledby="studio-works-title">
      <h2 id="studio-works-title">{t(e.producedWorks)}</h2>
      {films.map(film => <Link to={pathFor(film)} key={film.slug}><strong>{t(film.title)}</strong><small>{film.year} / {t(film.role)}</small><i aria-hidden="true">↗</i></Link>)}
    </section>

    <div className="studio-page__links"><Link to="/">← Shawn N. Hounkpatin</Link><a href={INSTAGRAM_STUDIO} target="_blank" rel="noreferrer">Instagram / @kerawa.space ↗</a></div>
  </main>
}
