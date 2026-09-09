import { Link } from '../components/LocalizedLink'
import ArtworkImage from '../components/ArtworkImage'
import Seo from '../components/Seo'
import { media, mediaSources } from '../data/media'
import { photos, pathFor } from '../data/works'
import { useI18n } from '../i18n/I18nContext'
import { editorial as e } from '../i18n/editorial'

export default function Shawn() {
  const { t } = useI18n()
  const chapters = [
    {
      number: { fr: 'Origine', en: 'Origin' },
      title: { fr: 'Les images ont d’abord été des traces de famille.', en: 'Images began as family traces.' },
      paragraphs: [
        { fr: 'Enfant à Cotonou, Shawn regarde les photographies de fêtes et de bals masqués conservées par ses parents. Il y apprend que l’image ne sert pas seulement à montrer : elle garde une présence, un vêtement, une lumière, un moment que l’on peut retrouver.', en: 'Growing up in Cotonou, Shawn looked through his parents’ photographs of celebrations and masked balls. There he learned that an image does more than show: it retains a presence, a garment, a light, a moment one can return to.' },
        { fr: 'Plus tard, les magazines d’art et de mode ouvrent d’autres possibilités. Il commence à photographier avec le téléphone de sa mère, avec cette même attention pour ce qui est déjà là — une personne, une rue, un décor.', en: 'Later, art and fashion magazines opened up other possibilities. He began photographing with his mother’s phone, keeping that same attention on what was already there — a person, a street, a setting.' },
      ],
    },
    {
      number: { fr: 'Lieu', en: 'Place' },
      title: { fr: 'Faire du lieu un personnage.', en: 'Making place a character.' },
      paragraphs: [
        { fr: 'Dans ses portraits, le cadre n’est pas un fond neutre. Les rues d’Akpakpa entourent Femi et Sica Kidjo à leur retour à Cotonou ; la ville accompagne aussi la rencontre avec Lady Donli pendant sa résidence musicale. Le portrait reste lié au temps et au lieu où il est né.', en: 'In his portraits, the frame is not a neutral backdrop. The streets of Akpakpa surround Femi and Sica Kidjo on their return to Cotonou; the city also accompanies his meeting with Lady Donli during her music residency. The portrait remains bound to the time and place of its making.' },
        { fr: 'Cette attention au réel cohabite avec une mise en scène discrète : une pose, une couleur, un espace qui laisse à la personne sa propre présence.', en: 'That attention to the real sits alongside a restrained staging: a pose, a colour, a space that lets the person keep their own presence.' },
      ],
    },
    {
      number: { fr: 'Récit', en: 'Narrative' },
      title: { fr: 'Passer de l’image fixe au récit.', en: 'Moving from a still image to a narrative.' },
      paragraphs: [
        { fr: 'Photographe et cinéaste au même niveau, Shawn fait circuler les mêmes questions d’un médium à l’autre : mémoire, identité, environnement, et le moment précis où un lieu devient récit. Le cinéma lui permet de rester plus longtemps auprès de ses sujets ; la photographie en isole une intensité.', en: 'Photographer and filmmaker on equal footing, Shawn carries the same questions from one medium to the other: memory, identity, environment, and the precise moment when a place becomes a story. Cinema lets him stay longer with his subjects; photography isolates an intensity.' },
        { fr: 'Dans Between Land and Ocean, réalisé à Avloh, la caméra se tient auprès des habitants face aux transformations du littoral. Dans Enchantresse, une figure fictive inspirée des prêtresses vodun fait entrer le réalisme magique dans le paysage de Grand-Popo.', en: 'In Between Land and Ocean, made in Avloh, the camera stays with residents facing changes to the coastline. In Enchantresse, a fictional figure inspired by vodun priestesses brings magical realism into the landscape of Grand-Popo.' },
      ],
    },
    {
      number: { fr: 'Transmission', en: 'Transmission' },
      title: { fr: 'Construire un espace pour les récits.', en: 'Building a space for stories.' },
      paragraphs: [
        { fr: 'Kerawa Studio est la structure fondée par Shawn pour produire et accompagner des récits africains au cinéma. Ce n’est pas une signature qui remplace son travail d’auteur : c’est l’outil collectif qui permet à certains projets d’exister, de circuler et de rencontrer leur public.', en: 'Kerawa Studio is the structure Shawn founded to produce and support African stories in cinema. It is not a signature replacing his authorship: it is a collective tool that lets certain projects exist, travel and meet an audience.' },
      ],
    },
  ]

  return <main id="main-content" className="artist-page artist-page--longform">
    <Seo title={t(e.profile)} description={t(e.bio)} />
    <header className="artist-page__header">
      <span className="archive-label">{t(e.location)} · {t(e.role)}</span>
      <h1>Shawn N.<br />Hounkpatin</h1>
      <p>{t({ fr: 'Photographe et cinéaste béninois. Son travail part des rencontres et laisse au décor, aux corps et aux récits le temps de révéler leur propre mémoire.', en: 'Beninese photographer and filmmaker. His work begins with encounters, giving setting, bodies and stories time to reveal their own memory.' })}</p>
    </header>

    <section className="artist-origin" aria-label={t({ fr: 'Portrait de Shawn', en: 'Portrait of Shawn' })}>
      <figure><ArtworkImage asset={media.portrait} eager sizes="(max-width: 760px) 88vw, 38vw" /></figure>
      <div>
        <span className="archive-label">Cotonou · Bénin</span>
        <p className="artist-origin__pull">{t({ fr: '« Je pars de ce qui est là : les gens, les lieux, ce qui persiste après le passage. »', en: '“I begin with what is there: people, places, what remains after a passing.”' })}</p>
        <p>{t({ fr: 'La pratique de Shawn traverse la photographie, le documentaire et la fiction. Elle cherche moins à illustrer un sujet qu’à rester auprès de lui, jusqu’à ce qu’un détail — un regard, une texture, un horizon — porte le récit.', en: 'Shawn’s practice crosses photography, documentary and fiction. It seeks less to illustrate a subject than to stay with it, until a detail — a glance, a texture, a horizon — carries the story.' })}</p>
      </div>
    </section>

    <section className="artist-chapters" aria-label={t({ fr: 'Parcours', en: 'Practice' })}>
      {chapters.map(chapter => <article className="artist-chapter" key={chapter.number.fr}>
        <span className="archive-label">{t(chapter.number)}</span>
        <div><h2>{t(chapter.title)}</h2>{chapter.paragraphs.map((paragraph, index) => <p key={index}>{t(paragraph)}</p>)}</div>
      </article>)}
    </section>

    <section className="artist-works" aria-labelledby="artist-works-title">
      <div><span className="archive-label">Sélection</span><h2 id="artist-works-title">{t({ fr: 'Voir les projets en images.', en: 'See the projects in images.' })}</h2></div>
      <div>{photos.map(work => <Link key={work.slug} to={pathFor(work)}>
        <strong>{t(work.title)}</strong><small>{t(work.location)} · {work.year}</small>
      </Link>)}</div>
    </section>

    <div className="artist-page__source"><a className="note-link" href={mediaSources.portrait} target="_blank" rel="noreferrer">{t(e.readPortrait)}</a><Link className="note-link" to="/kerawa">{t(e.studioLink)}</Link></div>
  </main>
}
