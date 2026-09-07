import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { photographs, filmPoster } from '../data/photography'
import { INSTAGRAM_PERSONAL } from '../i18n/dictionary'
import PhotoImage from '../components/PhotoImage'
import Seo from '../components/Seo'

export default function Home() {
  const { t } = useI18n()
  return <main id="main-content" className="editorial-home">
    <Seo title={t(e.role)} description={t(e.bio)} />
    <header className="portfolio-intro">
      <h1>Shawn N. Hounkpatin</h1>
      <p>{t(e.role)}<span>{t(e.location)}</span></p>
    </header>
    <section className="selected-works" aria-label={t(e.selectedWorks)}>
      <article className="selected-photo">
        <h2 className="work-medium"><Link to="/photographie">{t(e.photography)} <span aria-hidden="true">↗</span></Link></h2>
        <Link to="/photographie?image=kidjo-1" className="work-image" aria-label={t(e.kidjoLink)}><PhotoImage photo={photographs[0]} eager sizes="(max-width: 700px) 92vw, 55vw" /></Link>
        <div className="work-caption"><h3><Link to="/photographie?image=kidjo-1">Femi & Sica Kidjo</Link></h3><p>{t(photographs[0].place)} — 2026</p><span>Portrait of a Genius</span></div>
      </article>
      <article className="selected-film">
        <h2 className="work-medium"><Link to="/films">{t(e.cinema)} <span aria-hidden="true">↗</span></Link></h2>
        <Link to="/films/between-land-and-ocean" className="work-image film-poster" aria-label={t(e.filmLink)}><PhotoImage photo={filmPoster} eager sizes="(max-width: 700px) 65vw, 29vw" /></Link>
        <div className="work-caption"><h3><Link to="/films/between-land-and-ocean">Between Land and Ocean</Link></h3><p>{t(filmPoster.place)} — 2025</p><span>{t(e.directorCredit)}</span></div>
      </article>
    </section>
    <section className="portfolio-sequence" aria-labelledby="sequence-heading">
      <div className="sequence-heading"><h2 id="sequence-heading">{t(e.selectedPhotographs)}</h2><Link className="text-link" to="/photographie">{t(e.openPhoto)} ↗</Link></div>
      <div className="sequence-pair">
        {[photographs[1], photographs[2]].map(photo => <figure key={photo.id}>
          <Link className="work-image" to={`/photographie?image=${photo.id}`} aria-label={`${t(e.open)} — ${t(photo.title)}`}><PhotoImage photo={photo} /></Link>
          <figcaption className="work-caption"><h3>{t(photo.title).replace(' — I', '')}</h3><p>{t(photo.place)}{photo.year && ` — ${photo.year}`}</p><span>{t(photo.context)}</span></figcaption>
        </figure>)}
      </div>
    </section>
    <section className="artist-notes" aria-labelledby="artist-heading">
      <h2 id="artist-heading">{t(e.profile)}</h2>
      <div><p className="artist-bio">{t(e.bio)}</p><a className="text-link" href={INSTAGRAM_PERSONAL} target="_blank" rel="noreferrer">Instagram · @shawnpicture__ ↗</a></div>
      <aside aria-labelledby="studio-heading"><span className="micro">{t(e.studioLabel)}</span><h3 id="studio-heading">Kerawa Studio</h3><p>{t(e.studioText)}</p><Link className="text-link" to="/kerawa">{t(e.studioLink)} ↗</Link></aside>
    </section>
  </main>
}
