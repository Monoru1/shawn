import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'
import { INSTAGRAM_STUDIO } from '../i18n/dictionary'
import Seo from '../components/Seo'

export default function Kerawa() {
  const { t } = useI18n()
  return <main id="main-content" className="kerawa-editorial">
    <Seo title="Kerawa Studio" description={t(e.studioText)} />
    <div className="section-label micro"><span>{t(e.studioLabel)}</span><span>{t(e.location)}</span></div>
    <h1>kerawa<span>studio</span></h1>
    <div className="studio-layout"><h2>{t(e.studioTitle)}</h2><div><p>{t(e.studioText)}</p><p>{t(e.bioSecond)}</p><a className="text-link" href={INSTAGRAM_STUDIO} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a></div></div>
    <div className="kerawa-return"><span className="micro">Shawn N. Hounkpatin</span><Link to="/photographie">{t(e.photography)} ↗</Link><Link to="/films">{t(e.cinema)} ↗</Link></div>
  </main>
}
