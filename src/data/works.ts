import { media, type ArtworkAsset } from './media'

export type Medium = 'film' | 'photo'
export type Localized = { fr: string; en: string }
export type Credit = { label: Localized; value: string }
export type Video = { embedUrl: string; watchUrl: string }

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
  cover: ArtworkAsset
  gallery: readonly ArtworkAsset[]
  ratio: 'wide' | 'portrait'
}

export const works: Work[] = [
  {
    slug: 'between-land-and-ocean',
    medium: 'film',
    year: '2025',
    order: 1,
    title: { fr: 'Between Land and Ocean', en: 'Between Land and Ocean' },
    category: { fr: 'Documentaire narratif', en: 'Narrative documentary' },
    role: { fr: 'Réalisation & image', en: 'Director & cinematography' },
    location: { fr: 'Avloh, Bénin', en: 'Avloh, Benin' },
    statement: {
      fr: "Raconter au plus près Avloh, un village confronté aux conséquences du changement climatique sur la côte béninoise.",
      en: 'Staying close to Avloh, a village facing the effects of climate change on the Beninese coast.',
    },
    body: [
      {
        fr: "Produit par Kerawa Studio, le documentaire donne la parole aux habitants d’Avloh et observe les solutions construites avec les communautés et les partenaires du projet WACA.",
        en: 'Produced by Kerawa Studio, the documentary listens to people in Avloh and observes solutions built with communities and WACA project partners.',
      },
      {
        fr: "La caméra reste auprès des habitants, entre le village et l'océan, pour relier les transformations du littoral à leur quotidien.",
        en: 'The camera stays close to residents, between the village and the ocean, connecting changes along the coast to daily life.',
      },
    ],
    credits: [
      { label: { fr: 'Réalisation', en: 'Director' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Image', en: 'Cinematography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Production', en: 'Production' }, value: 'Kerawa Studio' },
      { label: { fr: 'Année', en: 'Year' }, value: '2025' },
    ],
    partners: ['Nordic Development Fund', 'World Bank', 'WACA - West Africa Coastal Areas'],
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/Q2Fk8eVHc3o?rel=0&modestbranding=1',
      watchUrl: 'https://www.youtube.com/watch?v=Q2Fk8eVHc3o',
    },
    cover: media.betweenLandAndOcean.cover,
    gallery: media.betweenLandAndOcean.gallery,
    ratio: 'wide',
  },
  {
    slug: 'my-lover',
    medium: 'film',
    year: '2025',
    order: 2,
    title: { fr: 'My Lover', en: 'My Lover' },
    category: { fr: 'Court-metrage experimental', en: 'Experimental short film' },
    role: { fr: 'Réalisation, image & montage', en: 'Director, cinematography & editor' },
    location: { fr: 'Lieu non communiqué', en: 'Location not disclosed' },
    statement: {
      fr: "Des vers introspectifs de Naëtt Mbaye deviennent le point de départ d’un court métrage expérimental sur l’amour.",
      en: 'Introspective verses by Naëtt Mbaye become the starting point for an experimental short film about love.',
    },
    body: [
      {
        fr: "Shawn cherche à traduire en images les émotions réveillées par le poème. Le film est né d’une alchimie spontanée et d’une envie d’exploration.",
        en: 'Shawn seeks to translate into images the emotions awakened by the poem. The film grew from a spontaneous chemistry and a desire to explore.',
      },
      {
        fr: "Pour Shawn, ce film marque un déclencheur dans sa pratique et approfondit son apprentissage du cinéma.",
        en: 'For Shawn, the film marks a turning point in his practice and deepens his exploration of cinema.',
      },
    ],
    credits: [
      { label: { fr: 'Réalisation & montage', en: 'Directed & edited by' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Image', en: 'Cinematography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Scénario', en: 'Written by' }, value: 'Carmen Mélissa J. Houenou Hounsinou' },
      { label: { fr: 'Texte & voix', en: 'Text & voice' }, value: 'Naëtt Mbaye' },
      { label: { fr: 'Musique', en: 'Music' }, value: 'Jean-François Amou' },
      { label: { fr: 'Avec', en: 'Starring' }, value: 'Naëtt Mbaye, Milo Ndour' },
      { label: { fr: 'Lumière', en: 'Lighting' }, value: 'Khaled Mamah, Alexandre Gandaho' },
      { label: { fr: 'Production', en: 'Production' }, value: 'Kerawa Studio' },
    ],
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/e5d2Bag4pCI?rel=0',
      watchUrl: 'https://www.youtube.com/watch?v=e5d2Bag4pCI',
    },
    cover: media.myLover.cover,
    gallery: media.myLover.gallery,
    ratio: 'wide',
  },
  {
    slug: 'portrait-of-a-genius',
    medium: 'photo',
    year: '2026',
    order: 3,
    title: { fr: 'Portrait of a Genius', en: 'Portrait of a Genius' },
    category: { fr: 'Portraits de musiciens', en: 'Musician portraits' },
    role: { fr: 'Photographie', en: 'Photography' },
    location: { fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' },
    statement: {
      fr: "Des artistes de passage ou de retour à Cotonou, photographiés dans les lieux qui entourent leurs séjours.",
      en: 'Artists passing through or returning to Cotonou, photographed in the places surrounding their stays.',
    },
    body: [
      {
        fr: "Femi et Sica Kidjo sont photographiées dans les rues d'Akpakpa, à leur retour à Cotonou. Lady Donli est rencontrée pendant une résidence musicale dans la ville.",
        en: 'Femi and Sica Kidjo are photographed in the streets of Akpakpa on their return to Cotonou. Lady Donli is portrayed during a music residency in the city.',
      },
      {
        fr: "La série fait du portrait une rencontre : le décor reste visible, le lieu participe au personnage et la pose conserve quelque chose du moment vécu.",
        en: 'The series treats portraiture as an encounter: the setting stays visible, place becomes part of the character, and the pose keeps something of the lived moment.',
      },
    ],
    credits: [
      { label: { fr: 'Photographie', en: 'Photography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Personnes', en: 'Sitters' }, value: 'Femi Kidjo, Sica Kidjo, Lady Donli' },
      { label: { fr: 'Lieu', en: 'Location' }, value: 'Cotonou, Bénin' },
    ],
    cover: media.portraitOfAGenius.cover,
    gallery: media.portraitOfAGenius.gallery,
    ratio: 'wide',
  },
  {
    slug: 'enchantresse',
    medium: 'photo',
    year: '2025',
    order: 4,
    title: { fr: 'Enchantresse', en: 'Enchantresse' },
    category: { fr: 'Recherche photographique', en: 'Photographic study' },
    role: { fr: 'Photographie & direction artistique', en: 'Photography & art direction' },
    location: { fr: 'Grand-Popo, Bénin', en: 'Grand-Popo, Benin' },
    statement: {
      fr: "Une figure fictive inspirée des prêtresses vodun ouvre un espace entre rituel, nature et contemplation.",
      en: 'A fictional figure inspired by vodun priestesses opens a space between ritual, nature and contemplation.',
    },
    body: [
      {
        fr: "Enchantresse est le premier projet artistique de Shawn. Il a été présenté au festival Lopo Lopo, à Grand-Popo, dans le cadre de la résidence Finding Etherea.",
        en: "Enchantress is Shawn's first artistic project. It was presented at the Lopo Lopo festival in Grand-Popo as part of the Finding Etherea residency.",
      },
      {
        fr: "Le projet explore le réalisme magique et les mythologies pour imaginer des formes contemporaines ancrées dans les héritages culturels du Bénin.",
        en: 'The project explores magical realism and mythology to imagine contemporary forms rooted in the cultural heritage of Benin.',
      },
    ],
    credits: [
      { label: { fr: 'Photographie', en: 'Photography' }, value: 'Shawn N. Hounkpatin' },
      { label: { fr: 'Résidence', en: 'Residency' }, value: 'Finding Etherea' },
      { label: { fr: 'Présentation', en: 'Presentation' }, value: 'Festival Lopo Lopo, Grand-Popo' },
      { label: { fr: 'Année', en: 'Year' }, value: '2025' },
    ],
    cover: media.enchantresse.cover,
    gallery: media.enchantresse.gallery,
    ratio: 'wide',
  },
]

export const films = works.filter(work => work.medium === 'film')
export const photos = works.filter(work => work.medium === 'photo')
export const findWork = (slug?: string) => works.find(work => work.slug === slug)

export const nextWork = (current: Work) => {
  const pool = works.filter(work => work.medium === current.medium)
  return pool[(pool.indexOf(current) + 1) % pool.length]
}

export const pathFor = (work: Work) =>
  work.medium === 'film' ? `/films/${work.slug}` : `/photographie/${work.slug}`
