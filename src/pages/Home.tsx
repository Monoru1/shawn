import { Link } from 'react-router-dom'
import ArtworkImage from '../components/ArtworkImage'
import PhotoImage from '../components/PhotoImage'
import Seo from '../components/Seo'
import { photographs } from '../data/photography'
import { films, pathFor } from '../data/works'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'

export default function Home() {
  const { t } = useI18n()
  const kidjo = photographs[0]

  return <main id="main-content" className="living-home">
    <Seo title={t(e.role)} description={t(e.bio)} />

    <header className="archive-masthead">
      <h1>Shawn N. Hounkpatin</h1>
      <p>{t(e.role)}<br />{t(e.location)}</p>
    </header>

    <section className="opening-work" aria-labelledby="opening-title">
      <figure>
        <PhotoImage photo={kidjo} eager sizes="(max-width: 760px) 100vw, 65vw" />
        <figcaption>{t(kidjo.place)} · 2026</figcaption>
      </figure>
      <div className="opening-note">
        <span className="archive-label">{t({ fr: 'Série photographique', en: 'Photographic series' })}</span>
        <h2 id="opening-title">Portrait of<br />a Genius.</h2>
        <p>{t({ fr: 'Femi et Sica Kidjo sont de retour à Cotonou. Shawn les retrouve dans les rues d’Akpakpa, là où la ville reste présente dans chaque portrait.', en: 'Femi and Sica Kidjo are back in Cotonou. Shawn meets them in the streets of Akpakpa, where the city remains present in every portrait.' })}</p>
        <p>{t({ fr: 'La série se poursuit avec Lady Donli pendant sa résidence musicale. Ici, le portrait ne coupe pas le sujet de son passage : il garde la chaleur, les murs, les arbres et les rencontres autour de lui.', en: 'The series continues with Lady Donli during her music residency. Here, portraiture does not separate a subject from their stay: it retains the heat, walls, trees and encounters around them.' })}</p>
        <Link className="note-link" to="/photographie/portrait-of-a-genius">{t({ fr: 'Lire et voir la série complète', en: 'Read and view the complete series' })} <span aria-hidden="true">↗</span></Link>
      </div>
    </section>

    <section className="living-selection" aria-labelledby="selection-title">
      <header className="archive-section-head">
        <h2 id="selection-title">{t({ fr: 'D’une rencontre à l’autre', en: 'From one encounter to another' })}</h2>
        <Link to="/photographie">{t(e.photography)} ↗</Link>
      </header>
      <div className="encounter-pair">
        {[photographs[1], photographs[3]].map(photo => <figure key={photo.id}>
          <Link to={`/photographie?image=${photo.id}`}><PhotoImage photo={photo} sizes="(max-width: 760px) 85vw, 38vw" /></Link>
          <figcaption>
            <span className="archive-label">{t({ fr: 'Photographie', en: 'Photography' })}</span>
            <div>
              <h3>{t(photo.title).replace(' — I', '')}</h3>
              <p>{t(photo.place)} · {photo.year}</p>
              <p>{t(photo.context)}</p>
              {photo.project ? <Link className="note-link" to={photo.project.href}>{t(photo.project.title)} ↗</Link> : null}
            </div>
          </figcaption>
        </figure>)}
      </div>
    </section>

    <section className="living-films" aria-labelledby="film-title">
      <header className="archive-section-head">
        <h2 id="film-title">{t({ fr: 'Au cinéma', en: 'In film' })}</h2>
        <Link to="/films">{t(e.viewFilms)} ↗</Link>
      </header>
      <div className="film-pair">
        {films.map(work => <article key={work.slug}>
          <Link to={pathFor(work)}><ArtworkImage asset={work.cover} sizes="(max-width: 760px) 100vw, 48vw" /><h3>{t(work.title)}</h3></Link>
          <p className="archive-label">{t(work.category)} · {work.year}</p>
          <p>{t(work.statement)}</p>
        </article>)}
      </div>
    </section>

    <section className="ongoing-work">
      <div>
        <span className="archive-label">{t({ fr: 'Recherche en cours', en: 'Ongoing work' })}</span>
        <h2>Enchantresse</h2>
        <p>{t({
          fr: 'Rituel, nature, visible et invisible. Une recherche que Shawn souhaite prolonger en installation, en performance et au cinéma.',
          en: 'Ritual, nature, the visible and invisible. A body of work Shawn intends to extend into installation, performance and cinema.',
        })}</p>
        <Link className="note-link" to="/photographie/enchantresse">{t({ fr: 'Entrer dans le projet', en: 'Explore the project' })} ↗</Link>
      </div>
      <Link to="/photographie/enchantresse"><PhotoImage photo={photographs[2]} sizes="(max-width: 760px) 100vw, 60vw" /></Link>
    </section>

    <section className="home-index">
      <h2>{t({ fr: 'Les lieux, les personnes, les œuvres.', en: 'Places, people, works.' })}</h2>
      <div>
        <Link to="/archive?place=cotonou">Cotonou <span>Femi &amp; Sica Kidjo · Lady Donli</span></Link>
        <Link to="/archive?place=adjarra">Adjarra <span>Mathias</span></Link>
        <Link to="/archive?place=grand-popo">Grand-Popo <span>{t({ fr: 'Enchantresse · exposition', en: 'Enchantresse · exhibition' })}</span></Link>
        <Link to="/archive">{t({ fr: 'Tout l’index', en: 'Complete index' })} ↗</Link>
      </div>
    </section>

    <section className="home-person">
      <h2>Shawn</h2>
      <div>
        <p>{t({
          fr: 'Né à Cotonou, Shawn travaille entre photographie et cinéma. Les albums de famille ont été sa première rencontre avec le pouvoir des images.',
          en: 'Born in Cotonou, Shawn works across photography and cinema. Family albums were his first encounter with the power of images.',
        })}</p>
        <Link className="note-link" to="/shawn">{t({ fr: 'Son parcours', en: 'His story' })} ↗</Link>
        <p className="studio-footnote">{t({ fr: 'Fondateur de', en: 'Founder of' })} <Link to="/kerawa">Kerawa Studio</Link>.</p>
      </div>
    </section>
  </main>
}
