import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from '../components/LocalizedLink'
import ArtworkImage from '../components/ArtworkImage'
import PhotoImage from '../components/PhotoImage'
import Seo from '../components/Seo'
import { archiveEntries } from '../data/archive'
import { media } from '../data/media'
import { photographs } from '../data/photography'
import { useI18n } from '../i18n/I18nContext'

export default function Archive() {
  const { t } = useI18n()
  const [params, setParams] = useSearchParams()
  const place = params.get('place') || ''
  const medium = params.get('medium') || ''
  const entries = archiveEntries.filter(entry => (!place || entry.place === place) && (!medium || entry.medium === medium)).sort((a, b) => Number(b.year || 0) - Number(a.year || 0))
  const [activeId, setActiveId] = useState(entries[0]?.id ?? '')
  const touchPreview = useRef<string | null>(null)
  const activeEntry = entries.find(entry => entry.id === activeId) ?? entries[0]
  const preview = activeEntry ? previewFor(activeEntry.id) : null

  useEffect(() => {
    if (entries.length && !entries.some(entry => entry.id === activeId)) setActiveId(entries[0].id)
  }, [activeId, entries])

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  return <main id="main-content" className="archive-page">
    <Seo title="Index" description={t({ fr: 'Œuvres de Shawn N. Hounkpatin, par lieu et par médium.', en: 'Works by Shawn N. Hounkpatin, by place and medium.' })} />
    <header><span className="archive-label">Shawn N. Hounkpatin</span><h1>{t({ fr: 'Index des œuvres', en: 'Index of works' })}</h1><p className="archive-intro">{t({ fr: 'Une chronologie inverse des images, des films et des rencontres. Chaque ligne est une porte vers un lieu, une personne ou un récit.', en: 'A reverse chronology of images, films and encounters. Each line opens onto a place, a person or a story.' })}</p></header>
    <div className="archive-controls">
      <label>{t({ fr: 'Lieu', en: 'Place' })}<select value={place} onChange={event => update('place', event.target.value)}>
        <option value="">{t({ fr: 'Tous les lieux', en: 'All places' })}</option><option value="cotonou">Cotonou</option><option value="adjarra">Adjarra</option><option value="grand-popo">Grand-Popo</option><option value="benin">{t({ fr: 'Côte béninoise', en: 'Beninese coast' })}</option><option value="senegal">{t({ fr: 'Sénégal', en: 'Senegal' })}</option><option value="archive">{t({ fr: 'Lieu non communiqué', en: 'Location not disclosed' })}</option>
      </select></label>
      <label>{t({ fr: 'Médium', en: 'Medium' })}<select value={medium} onChange={event => update('medium', event.target.value)}>
        <option value="">{t({ fr: 'Tous les médiums', en: 'All media' })}</option><option value="photo">{t({ fr: 'Photographie', en: 'Photography' })}</option><option value="film">{t({ fr: 'Cinéma', en: 'Film' })}</option>
      </select></label>
    </div>

    {entries.length ? <div className="archive-explorer">
      <div className="archive-rows">{entries.map(entry => <Link className={`archive-row${entry.id === activeEntry?.id ? ' is-active' : ''}`} key={entry.id} to={entry.href}
        onMouseEnter={() => setActiveId(entry.id)}
        onFocus={() => setActiveId(entry.id)}
        onTouchStart={() => { if (activeEntry?.id !== entry.id) { touchPreview.current = entry.id; setActiveId(entry.id) } }}
        onClick={event => { if (touchPreview.current === entry.id) { event.preventDefault(); touchPreview.current = null } }}>
        <span>{entry.year || t({ fr: 'En cours', en: 'Ongoing' })}</span><div><h2>{entry.title}</h2><p>{t(entry.relation)}</p></div><span>{t(entry.placeLabel)}</span><span>{t(entry.medium === 'photo' ? { fr: 'Photographie', en: 'Photography' } : { fr: 'Cinéma', en: 'Film' })}</span>
      </Link>)}</div>
      {preview && <aside className="archive-preview" aria-live="polite">
        <span className="archive-label">{t({ fr: 'Aperçu de l’œuvre', en: 'Work preview' })}</span>
        {preview.kind === 'photo' ? <PhotoImage photo={preview.photo} eager sizes="(max-width: 760px) 100vw, 44vw" /> : <ArtworkImage asset={preview.asset} eager sizes="(max-width: 760px) 100vw, 44vw" />}
        <p><strong>{activeEntry.title}</strong><span>{t(activeEntry.placeLabel)} · {activeEntry.year || t({ fr: 'En cours', en: 'Ongoing' })}</span></p>
        <small>{t({ fr: 'Sur ordinateur : survole une ligne. Sur téléphone : touche une fois pour l’aperçu, une seconde pour ouvrir.', en: 'On desktop: hover a row. On mobile: tap once for a preview, again to open.' })}</small>
      </aside>}
    </div> : null}
    {!entries.length ? <div className="archive-empty"><p>{t({ fr: 'Aucune œuvre dans cette sélection.', en: 'No works in this selection.' })}</p><button type="button" onClick={() => setParams({})}>{t({ fr: 'Effacer les filtres', en: 'Clear filters' })}</button></div> : null}
  </main>
}

function previewFor(id: string) {
  const photoById = new Map(photographs.map(photo => [photo.id, photo]))
  const photoId = { 'daily-paper': 'daily-paper-converse-1', kidjo: 'kidjo-1', donli: 'donli-1', mathias: 'mathias-1', enchantresse: 'enchantresse-1', 'journal-archive': 'editorial-54-1', ayiroun: 'photovogue-ayiroun', running: 'photovogue-running-1' }[id]
  if (photoId) return { kind: 'photo' as const, photo: photoById.get(photoId)! }
  return { kind: 'film' as const, asset: id === 'between' ? media.betweenLandAndOcean.cover : media.myLover.cover }
}
