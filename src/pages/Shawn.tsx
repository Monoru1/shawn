import { Link } from 'react-router-dom'
import ArtworkImage from '../components/ArtworkImage'
import Seo from '../components/Seo'
import { media, mediaSources } from '../data/media'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'

export default function Shawn() {
  const { t } = useI18n()
  return <main id="main-content" className="artist-page">
    <Seo title={t(e.profile)} description={t(e.bio)} />
    <header><span className="archive-label">{t(e.location)}</span><h1>Shawn N.<br />Hounkpatin</h1><p>{t(e.role)}</p></header>
    <div className="artist-story">
      <figure><ArtworkImage asset={media.portrait} eager sizes="(max-width: 760px) 90vw, 35vw" /></figure>
      <div>
        <h2>{t({ fr: 'D’abord, les albums de famille.', en: 'First, the family albums.' })}</h2>
        <p>{t({ fr: 'Enfant à Cotonou, Shawn regardait les photographies de fêtes et de bals masqués conservées par ses parents. Plus tard, les magazines d’art et de mode lui ont montré d’autres possibilités. Il a commencé avec le téléphone de sa mère.', en: 'As a child in Cotonou, Shawn looked through his parents’ photographs of celebrations and masked balls. Later, art and fashion magazines revealed other possibilities. He began with his mother’s phone.' })}</p>
        <h2>{t({ fr: 'Construire une image.', en: 'Building an image.' })}</h2>
        <p>{t({ fr: 'De la photographie de rue aux récits mis en scène, sa pratique associe mode, documentaire et cinéma. La mémoire, l’identité et le rapport à l’environnement traversent ce travail, nourri par le réalisme magique.', en: 'From street photography to staged narratives, his practice brings fashion, documentary and cinema together. Memory, identity and the relationship with the environment run through this work, informed by magical realism.' })}</p>
        <a className="note-link" href={mediaSources.portrait} target="_blank" rel="noreferrer">{t(e.readPortrait)} ↗</a>
        <h2>Kerawa Studio</h2>
        <p>{t({ fr: 'Shawn est le fondateur de Kerawa Studio, la structure de production de My Lover et Between Land and Ocean.', en: 'Shawn is the founder of Kerawa Studio, the production company behind My Lover and Between Land and Ocean.' })}</p>
        <Link className="note-link" to="/kerawa">{t(e.studioLink)} ↗</Link>
      </div>
    </div>
  </main>
}
