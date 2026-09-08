import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArtworkImage from '../components/ArtworkImage'
import PhotoImage from '../components/PhotoImage'
import Seo from '../components/Seo'
import { HERO_VIDEO, HERO_VIDEO_FALLBACK, media, mediaSources } from '../data/media'
import { photographs } from '../data/photography'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { INSTAGRAM_PERSONAL } from '../i18n/dictionary'

export default function Home() {
  const { t } = useI18n()
  const [playReel, setPlayReel] = useState(false)
  const [reelReady, setReelReady] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPlayReel(!preference.matches)
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  return <main id="main-content" className="home">
    <Seo title={t(e.role)} description={t(e.bio)} />

    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__media" aria-hidden="true">
        <ArtworkImage asset={media.heroPoster} alt="" eager />
        {playReel && <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.heroPoster.src}
          onCanPlay={() => setReelReady(true)}
          className={reelReady ? 'is-ready' : ''}
        >
          <source src={HERO_VIDEO} type="video/webm" />
          <source src={HERO_VIDEO_FALLBACK} type="video/mp4" />
        </video>}
        <span className="home-hero__veil" />
      </div>
      <div className="home-hero__top micro">
        <span>{t(e.role)}</span>
        <span>{t(e.location)}</span>
      </div>
      <h1 id="home-title"><span>Shawn N.</span><span>Hounkpatin</span></h1>
      <div className="home-hero__foot">
        <p>{t(e.heroLine)}</p>
        <Link to="/films">{t(e.viewFilms)} <span aria-hidden="true">↗</span></Link>
      </div>
    </section>

    <section className="practice" aria-labelledby="practice-title">
      <div className="practice__title">
        <span className="micro">01 / 04</span>
        <h2 id="practice-title">{t(e.practiceTitle)}</h2>
      </div>
      <p>{t(e.practiceText)}</p>
    </section>

    <section className="two-mediums" aria-label={t(e.selectedWorks)}>
      <article className="medium-feature medium-feature--photo">
        <div className="medium-feature__head"><span>01</span><h2>{t(e.photography)}</h2><Link to="/photographie">{t(e.openPhoto)} ↗</Link></div>
        <Link to="/photographie?image=kidjo-1" className="medium-feature__media">
          <PhotoImage photo={photographs[0]} eager sizes="(max-width: 760px) 100vw, 58vw" />
        </Link>
        <div className="medium-feature__caption"><strong>Femi & Sica Kidjo</strong><span>{t(photographs[0].place)} / 2026</span><p>{t(photographs[0].context)}</p></div>
      </article>

      <article className="medium-feature medium-feature--film">
        <div className="medium-feature__head"><span>02</span><h2>{t(e.cinema)}</h2><Link to="/films">{t(e.viewFilms)} ↗</Link></div>
        <Link to="/films/between-land-and-ocean" className="medium-feature__media">
          <ArtworkImage asset={media.betweenLandAndOcean.cover} sizes="(max-width: 760px) 100vw, 42vw" />
        </Link>
        <div className="medium-feature__caption"><strong>Between Land and Ocean</strong><span>Gbecon, Benin / 2025</span><p>{t(e.directorCredit)}. Kerawa Studio.</p></div>
      </article>
    </section>

    <section className="photo-run" aria-labelledby="photo-run-title">
      <header><span className="micro">02 / 04</span><h2 id="photo-run-title">{t(e.selectedPhotographs)}</h2></header>
      <div className="photo-run__grid">
        {[photographs[1], photographs[3], photographs[2]].map((photo, index) => <figure key={photo.id} className={`photo-run__item photo-run__item--${index + 1}`}>
          <Link to={`/photographie?image=${photo.id}`}><PhotoImage photo={photo} sizes="(max-width: 760px) 88vw, 38vw" /></Link>
          <figcaption><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{t(photo.title).replace(' — I', '')}</strong><small>{t(photo.place)}{photo.year && ` / ${photo.year}`}</small><p>{t(photo.context)}</p></div></figcaption>
        </figure>)}
      </div>
      <Link className="editorial-link" to="/photographie">{t(e.openPhoto)} <span aria-hidden="true">→</span></Link>
    </section>

    <section className="shawn-profile" aria-labelledby="profile-title">
      <figure className="shawn-profile__portrait"><ArtworkImage asset={media.portrait} sizes="(max-width: 760px) 92vw, 38vw" /></figure>
      <div className="shawn-profile__copy">
        <span className="micro">03 / 04 · {t(e.profile)}</span>
        <h2 id="profile-title">{t(e.profileQuote)}</h2>
        <p>{t(e.bio)}</p>
        <p>{t(e.bioExtended)}</p>
        <div className="profile-links">
          <a href={mediaSources.portrait} target="_blank" rel="noreferrer">{t(e.readPortrait)} ↗</a>
          <a href={INSTAGRAM_PERSONAL} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>
      <dl className="profile-facts">
        <div><dt>{t(e.fields)}</dt><dd>{t(e.fieldsValue)}</dd></div>
        <div><dt>{t(e.collaborations)}</dt><dd>Daily Paper, Converse</dd></div>
        <div><dt>{t(e.selectedFilm)}</dt><dd>Les Amazones de l'Art · Osaka, 2025</dd></div>
      </dl>
    </section>

    <section className="kerawa-chapter" aria-labelledby="kerawa-title">
      <div><span className="micro">04 / 04 · {t(e.studioLabel)}</span><h2 id="kerawa-title">Kerawa<br />Studio</h2></div>
      <div><p>{t(e.studioText)}</p><Link className="editorial-link" to="/kerawa">{t(e.studioLink)} <span aria-hidden="true">→</span></Link></div>
    </section>
  </main>
}
