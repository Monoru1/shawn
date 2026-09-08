import { Link, useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { archiveEntries } from '../data/archive'
import { useI18n } from '../i18n/I18nContext'

export default function Archive() {
  const { t } = useI18n()
  const [params, setParams] = useSearchParams()
  const place = params.get('place') || ''
  const medium = params.get('medium') || ''
  const entries = archiveEntries.filter(entry => (!place || entry.place === place) && (!medium || entry.medium === medium))
  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  return <main id="main-content" className="archive-page">
    <Seo title="Index" description={t({ fr: 'Œuvres de Shawn N. Hounkpatin, par lieu et par médium.', en: 'Works by Shawn N. Hounkpatin, by place and medium.' })} />
    <header><span className="archive-label">Shawn N. Hounkpatin</span><h1>{t({ fr: 'Index des œuvres', en: 'Index of works' })}</h1></header>
    <div className="archive-controls">
      <label>{t({ fr: 'Lieu', en: 'Place' })}<select value={place} onChange={event => update('place', event.target.value)}>
        <option value="">{t({ fr: 'Tous les lieux', en: 'All places' })}</option><option value="cotonou">Cotonou</option><option value="adjarra">Adjarra</option><option value="grand-popo">Grand-Popo</option><option value="benin">{t({ fr: 'Côte béninoise', en: 'Beninese coast' })}</option>
      </select></label>
      <label>{t({ fr: 'Médium', en: 'Medium' })}<select value={medium} onChange={event => update('medium', event.target.value)}>
        <option value="">{t({ fr: 'Tous les médiums', en: 'All media' })}</option><option value="photo">{t({ fr: 'Photographie', en: 'Photography' })}</option><option value="film">{t({ fr: 'Cinéma', en: 'Film' })}</option>
      </select></label>
      <p role="status">{entries.length} {t({ fr: 'entrées', en: 'entries' })}</p>
    </div>
    <div className="archive-rows">{entries.map(entry => <Link className="archive-row" key={entry.id} to={entry.href}>
      <span>{entry.year || t({ fr: 'En cours', en: 'Ongoing' })}</span><div><h2>{entry.title}</h2><p>{t(entry.relation)}</p></div><span>{t(entry.placeLabel)}</span><span>{t(entry.medium === 'photo' ? { fr: 'Photographie', en: 'Photography' } : { fr: 'Film', en: 'Film' })} ↗</span>
    </Link>)}</div>
    {!entries.length ? <div className="archive-empty"><p>{t({ fr: 'Aucune œuvre dans cette sélection.', en: 'No works in this selection.' })}</p><button type="button" onClick={() => setParams({})}>{t({ fr: 'Effacer les filtres', en: 'Clear filters' })}</button></div> : null}
  </main>
}
