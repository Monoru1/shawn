import { media } from './media'

export type Medium = 'film' | 'photo'
export type Localized = { fr: string; en: string }

export type Credit = { label: Localized; value: string }

export type Video = {
  embedUrl: string
  watchUrl: string
}

export type Work = {
  slug: string
  medium: Medium
  year: string
  order: number
  title: Localized
  category: Localized
  role: Localized
  location: Localized
  statement: Localized
  body: Localized[]
  credits: Credit[]
  partners?: string[]
  video?: Video
  cover: string
  gallery: readonly string[]
  ratio: 'wide' | 'portrait'
  note?: Localized
}

export const works: Work[] = [
  {
    slug: 'between-land-and-ocean',
    medium: 'film',
    year: '2025',
    order: 1,
    title: { fr: 'Between Land and Ocean', en: 'Between Land and Ocean' },
    category: { fr: 'Documentaire narratif', en: 'Narrative documentary' },
    role: { fr: 'Réalisation & Image', en: 'Director & DOP' },
    location: { fr: 'Gbècon, Bénin', en: 'Gbècon, Benin' },
    statement: {
      fr: "Trouver la façon la plus honnête de raconter Gbècon, un village profondément touché par l'érosion côtière.",
      en: 'Finding the most honest way to tell the story of Gbècon, a village deeply affected by coastal erosion.',
    },
    body: [
      {
        fr: "Avec mon équipe, nous avons choisi une approche immersive, construite sur une journée type à Gbècon, vue par les yeux d'une jeune fille du village.",
        en: 'With my team, we chose an immersive approach, built around a typical day in Gbècon, seen through the eyes of a young girl from the village.',
      },
      {
        fr: "Ce film montre qu'on peut parler de sujets graves comme l'érosion à travers une histoire humaine et simple. Le documentaire narratif devient une manière de ressentir, d'apprendre, et d'ouvrir une conversation.",
        en: 'The film shows that serious subjects like erosion can be told through a simple, human story. The narrative documentary becomes a way to feel, to learn, and to start a conversation.',
      },
      {
        fr: "Alors que le changement climatique devient un défi bien réel, j'espère que ce film touche les cœurs et éveille les consciences sur ce que vivent des communautés comme celle de Gbècon.",
        en: 'As climate change becomes a very real challenge, I hope this film touches hearts and raises awareness of what communities like Gbècon are living through.',
      },
    ],
    credits: [
      { label: { fr: 'Réalisation', en: 'Director' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Image', en: 'Cinematography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Production', en: 'Production' }, value: 'Kerawa Studio' },
      { label: { fr: 'Année', en: 'Year' }, value: '2025' },
    ],
    partners: ['Nordic Development Fund', 'World Bank', 'WACA — West Africa Coastal Areas'],
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/Q2Fk8eVHc3o?rel=0&modestbranding=1',
      watchUrl: 'https://www.youtube.com/watch?v=Q2Fk8eVHc3o',
    },
    cover: media.betweenLandAndOcean.cover,
    gallery: [],
    ratio: 'wide',
  },

  {
    slug: 'enchantresse',
    medium: 'photo',
    year: '2025',
    order: 2,
    title: { fr: 'Enchantresse', en: 'Enchantresse' },
    category: { fr: 'Série photographique', en: 'Photographic series' },
    role: { fr: 'Photographie & Direction artistique', en: 'Photography & Art direction' },
    location: { fr: 'Grand-Popo, Bénin', en: 'Grand-Popo, Benin' },
    statement: {
      fr: "Tout a commencé par une envie de ralentir.",
      en: 'It all began with a desire to slow down.',
    },
    body: [
      {
        fr: "Cette exploration a donné naissance à Enchantresse, mon premier projet artistique, présenté lors du festival Lopo Lopo à Grand-Popo dans le cadre de la résidence Finding Etherea.",
        en: 'This exploration gave birth to Enchantresse, my first artistic project, shown at the Lopo Lopo festival in Grand-Popo as part of the Finding Etherea residency.',
      },
      {
        fr: "À travers la figure d'une Enchantresse — personnage fictif librement inspiré des prêtresses vodoun du Bénin — j'explore le rituel, la nature et la contemplation comme un espace de connexion entre le visible et l'invisible.",
        en: 'Through the figure of an Enchantress — a fictional character freely inspired by the vodun priestesses of Benin — I explore ritual, nature and contemplation as a space of connection between the visible and the invisible.',
      },
      {
        fr: "Ce projet s'inscrit dans une recherche autour du réalisme magique, de la poésie et des mythologies, avec l'envie de créer des univers contemporains ancrés dans nos héritages culturels. Je souhaite continuer à le développer en l'ouvrant à d'autres médiums : installation, performance et cinéma.",
        en: 'The project is part of a research into magical realism, poetry and mythology, seeking contemporary worlds rooted in our cultural heritage. I intend to keep developing it across other media: installation, performance and film.',
      },
    ],
    credits: [
      { label: { fr: 'Photographie', en: 'Photography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Résidence', en: 'Residency' }, value: 'Finding Etherea' },
      { label: { fr: 'Exposition', en: 'Exhibition' }, value: 'Festival Lopo Lopo, Grand-Popo' },
      { label: { fr: 'Année', en: 'Year' }, value: '2025' },
    ],
    cover: media.enchantresse.cover,
    gallery: media.enchantresse.gallery,
    ratio: 'portrait',
  },

  {
    slug: 'my-lover',
    medium: 'film',
    year: '2025',
    order: 3,
    title: { fr: 'My Lover', en: 'My Lover' },
    category: { fr: 'Court-métrage', en: 'Short film' },
    role: { fr: 'Réalisation, Image & Montage', en: 'Director, Cinematography & Editor' },
    location: { fr: 'Bénin', en: 'Benin' },
    statement: {
      fr: "Un film né d'une alchimie spontanée et d'une envie d'exploration.",
      en: 'A film born of a spontaneous alchemy and a desire to explore.',
    },
    body: [
      {
        fr: "Après avoir écouté quelques vers introspectifs écrits par Naëtt Mbaye dans ses moments de méditation, je me suis surpris à chercher comment traduire en images les émotions que son poème a réveillées en moi.",
        en: 'After listening to a few introspective verses written by Naëtt Mbaye during her moments of meditation, I found myself searching for a way to translate into images the emotions her poem awoke in me.',
      },
      {
        fr: "Une manière d'approfondir mes explorations, mais surtout mon apprentissage du septième art.",
        en: 'A way of deepening my explorations, and above all my apprenticeship in cinema.',
      },
    ],
    credits: [
      { label: { fr: 'Réalisation & Montage', en: 'Directed & Edited by' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Image', en: 'Cinematography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Scénario', en: 'Written by' }, value: 'Carmen Mélissa J. Houenou Hounsinou' },
      { label: { fr: 'Texte & Voix', en: 'Text & Voice' }, value: 'Naëtt Mbaye' },
      { label: { fr: 'Musique', en: 'Music' }, value: 'Jean-François Amou' },
      { label: { fr: 'Avec', en: 'Starring' }, value: 'Naëtt Mbaye, Milo Ndour' },
      { label: { fr: 'Lumière', en: 'Lighting' }, value: 'Khaled Mamah, Alexandre Gandaho' },
      { label: { fr: 'Production', en: 'Production' }, value: 'Kerawa Studio' },
    ],
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/e5d2Bag4pCI?rel=0',
      watchUrl: 'https://www.youtube.com/watch?v=e5d2Bag4pCI',
    },
    cover: 'https://i.ytimg.com/vi/e5d2Bag4pCI/hqdefault.jpg',
    gallery: [],
    ratio: 'wide',
  },

  {
    slug: 'lami-cotonou',
    medium: 'photo',
    year: '2025',
    order: 4,
    title: { fr: "L'AMI Cotonou", en: "L'AMI Cotonou" },
    category: { fr: 'Commande — Hôtellerie', en: 'Commission — Hospitality' },
    role: { fr: 'Direction artistique & Image', en: 'Art direction & Imagery' },
    location: { fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' },
    statement: {
      fr: "Une commande pour L'AMI Cotonou, produite par Kerawa Studio.",
      en: "A commission for L'AMI Cotonou, produced by Kerawa Studio.",
    },
    body: [
      {
        fr: "Un travail de commande mené pour un établissement de Cotonou, où l'exigence documentaire rencontre le langage de la marque : lieux, gestes, lumière et atmosphère.",
        en: 'A commissioned work for a Cotonou venue, where documentary rigour meets brand language: places, gestures, light and atmosphere.',
      },
    ],
    credits: [
      { label: { fr: 'Auteur', en: 'Author' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Client', en: 'Client' }, value: "L'AMI Cotonou — Sofitel" },
      { label: { fr: 'Production', en: 'Production' }, value: 'Kerawa Studio' },
    ],
    cover: media.lamiCotonou.cover,
    gallery: media.lamiCotonou.gallery,
    ratio: 'wide',
    note: {
      fr: 'Nature exacte du livrable (photo / film) et année à confirmer.',
      en: 'Exact deliverable (photo / film) and year to be confirmed.',
    },
  },

  {
    slug: 'mode-editorial',
    medium: 'photo',
    year: '2023—2026',
    order: 5,
    title: { fr: 'Mode & Éditorial', en: 'Fashion & Editorial' },
    category: { fr: 'Sélection', en: 'Selection' },
    role: { fr: 'Photographie', en: 'Photography' },
    location: { fr: 'Cotonou & ailleurs', en: 'Cotonou & elsewhere' },
    statement: {
      fr: 'Une sélection de travaux de mode et de commandes éditoriales.',
      en: 'A selection of fashion work and editorial commissions.',
    },
    body: [
      {
        fr: "La mode comme terrain d'essai : le vêtement, le corps et le décor employés pour construire un personnage plutôt que pour illustrer un produit.",
        en: 'Fashion as a testing ground: garment, body and setting used to build a character rather than illustrate a product.',
      },
    ],
    credits: [{ label: { fr: 'Photographie', en: 'Photography' }, value: 'Shawn N. Hounkpatin' }],
    cover: media.mode.cover,
    gallery: media.mode.gallery,
    ratio: 'portrait',
    note: {
      fr: 'Regroupement thématique — à éclater en séries nommées dès réception des travaux.',
      en: 'Thematic grouping — to be split into named series once the works are received.',
    },
  },

  {
    slug: 'documentaire',
    medium: 'photo',
    year: '2023—2026',
    order: 6,
    title: { fr: 'Documentaire', en: 'Documentary' },
    category: { fr: 'Sélection', en: 'Selection' },
    role: { fr: 'Photographie', en: 'Photography' },
    location: { fr: 'Bénin', en: 'Benin' },
    statement: {
      fr: 'Portraits, reportages et repérages.',
      en: 'Portraits, reportage and location scouting.',
    },
    body: [
      {
        fr: "Le versant documentaire du travail : ce qui est photographié parce que c'est là, et non parce que ça a été construit.",
        en: 'The documentary side of the work: what is photographed because it is there, not because it was built.',
      },
    ],
    credits: [{ label: { fr: 'Photographie', en: 'Photography' }, value: 'Shawn N. Hounkpatin' }],
    cover: media.documentaire.cover,
    gallery: media.documentaire.gallery,
    ratio: 'wide',
    note: {
      fr: 'Regroupement thématique — à éclater en séries nommées dès réception des travaux.',
      en: 'Thematic grouping — to be split into named series once the works are received.',
    },
  },
]

export const films = works.filter(w => w.medium === 'film')
export const photos = works.filter(w => w.medium === 'photo')

export const findWork = (slug?: string) => works.find(w => w.slug === slug)

export const nextWork = (current: Work) => {
  const pool = works.filter(w => w.medium === current.medium)
  const i = pool.indexOf(current)
  return pool[(i + 1) % pool.length]
}

export const pathFor = (w: Work) =>
  w.medium === 'film' ? `/films/${w.slug}` : `/photographie/${w.slug}`
