import { Link } from '../components/LocalizedLink'
import ArtworkImage from '../components/ArtworkImage'
import Seo from '../components/Seo'
import { works, pathFor, type Medium } from '../data/works'
import { useI18n } from '../i18n/I18nContext'
import { dictionary as d } from '../i18n/dictionary'

export default function WorkList({ medium }: { medium: Medium }) {
  const { t } = useI18n()
  const list = works.filter(work => work.medium === medium)
  const title = t(medium === 'film' ? d.list.filmsTitle : d.list.photoTitle)
  const intro = t(medium === 'film' ? d.list.filmsIntro : d.list.photoIntro)

  return <main id="main-content" className="film-index">
    <Seo title={title} description={intro} />
    <header className="film-index__intro">
      <div className="section-label micro"><span>Shawn N. Hounkpatin</span><span>{t(medium === 'film' ? { fr: 'Filmographie', en: 'Filmography' } : { fr: 'Œuvres photographiques', en: 'Photographic works' })}</span></div>
      <div className="film-index__title"><h1>{title}</h1><p>{intro}</p></div>
    </header>

    <div className="film-index__list">
      {list.map((work, index) => <article className="film-row" key={work.slug}>
        <Link to={pathFor(work)} className="film-row__image">
          <ArtworkImage asset={work.cover} eager={index === 0} sizes="(max-width: 760px) 100vw, 72vw" />
          <span>{t(d.work.watch)}</span>
        </Link>
        <div className="film-row__meta">
          <span className="micro">{t(work.role)}</span>
          <h2><Link to={pathFor(work)}>{t(work.title)}</Link></h2>
          <p>{t(work.statement)}</p>
          <dl>
            <div><dt>{t(d.index.colCategory)}</dt><dd>{t(work.category)}</dd></div>
            <div><dt>{t(d.index.colLocation)}</dt><dd>{t(work.location)}</dd></div>
            <div><dt>{t(d.index.colYear)}</dt><dd>{work.year}</dd></div>
            <div><dt>{t(d.index.colMedium)}</dt><dd>{t(work.role)}</dd></div>
          </dl>
        </div>
      </article>)}
    </div>
  </main>
}
