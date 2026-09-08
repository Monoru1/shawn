import type { Localized } from './works'

export type ArtworkAsset = {
  src: string
  srcSet?: string
  width: number
  height: number
  alt: Localized
}

const asset = (
  src: string,
  width: number,
  height: number,
  alt: Localized,
  srcSet?: string,
): ArtworkAsset => ({ src, srcSet, width, height, alt })

const betweenAlt = {
  fr: "Affiche de Between Land and Ocean : une jeune fille de dos face à l'océan.",
  en: 'Between Land and Ocean poster: a young girl seen from behind, facing the ocean.',
}

const loverAlt = {
  fr: 'Affiche de My Lover : une femme tourne le regard vers un homme, dans une lumière sombre.',
  en: 'My Lover poster: a woman looks toward a man in low, intimate light.',
}

export const HERO_VIDEO = '/media/hero.webm'
export const HERO_VIDEO_FALLBACK = '/media/hero.mp4'

export const media = {
  heroPoster: asset(
    '/media/hero-poster.jpg',
    1920,
    1080,
    {
      fr: "Une femme d'un village côtier béninois, image extraite d'un film de Shawn.",
      en: 'A woman in a Beninese coastal village, a frame from a film by Shawn.',
    },
  ),
  portrait: asset(
    '/media/profile/shawn-1200.webp',
    1200,
    1800,
    {
      fr: 'Portrait de Shawn N. Hounkpatin, regard tourné vers la lumière.',
      en: 'Portrait of Shawn N. Hounkpatin, looking toward the light.',
    },
    '/media/profile/shawn-480.webp 480w, /media/profile/shawn-800.webp 800w, /media/profile/shawn-1200.webp 1200w',
  ),
  betweenLandAndOcean: {
    cover: asset(
      '/media/films/between-1280.webp',
      1280,
      720,
      betweenAlt,
      '/media/films/between-640.webp 640w, /media/films/between-960.webp 960w, /media/films/between-1280.webp 1280w',
    ),
    gallery: [] as ArtworkAsset[],
  },
  myLover: {
    cover: asset('/media/films/my-lover-480.webp', 480, 360, loverAlt),
    gallery: [] as ArtworkAsset[],
  },
  enchantresse: {
    cover: asset(
      '/media/works/enchantresse-1-800.webp',
      800,
      533,
      {
        fr: "Une figure drapée se tient sur les rochers face à l'océan, sous un ciel bleu.",
        en: 'A draped figure stands on rocks facing the ocean under a blue sky.',
      },
      '/media/works/enchantresse-1-400.webp 400w, /media/works/enchantresse-1-600.webp 600w, /media/works/enchantresse-1-800.webp 800w',
    ),
    gallery: [] as ArtworkAsset[],
  },
  portraitOfAGenius: {
    cover: asset(
      '/media/works/kidjo-1-800.webp',
      800,
      652,
      {
        fr: "Femi et Sica Kidjo photographiées dans les rues d'Akpakpa, à Cotonou.",
        en: 'Femi and Sica Kidjo photographed in the streets of Akpakpa, Cotonou.',
      },
      '/media/works/kidjo-1-400.webp 400w, /media/works/kidjo-1-600.webp 600w, /media/works/kidjo-1-800.webp 800w',
    ),
    gallery: [
      asset('/media/works/kidjo-2-800.webp', 800, 640, { fr: 'L’une des sœurs Kidjo dans une rue d’Akpakpa.', en: 'One of the Kidjo sisters in a street in Akpakpa.' }, '/media/works/kidjo-2-400.webp 400w, /media/works/kidjo-2-600.webp 600w, /media/works/kidjo-2-800.webp 800w'),
      asset('/media/works/donli-1-800.webp', 800, 1000, { fr: 'Lady Donli pendant sa résidence musicale à Cotonou.', en: 'Lady Donli during her music residency in Cotonou.' }, '/media/works/donli-1-400.webp 400w, /media/works/donli-1-600.webp 600w, /media/works/donli-1-800.webp 800w'),
      asset('/media/works/donli-2-800.webp', 800, 640, { fr: 'Lady Donli en chemise rouge rayée, à Cotonou.', en: 'Lady Donli in a red striped shirt, in Cotonou.' }, '/media/works/donli-2-400.webp 400w, /media/works/donli-2-600.webp 600w, /media/works/donli-2-800.webp 800w'),
    ],
  },
} as const

export const mediaSources = {
  portrait: 'https://www.54journal.com/stories/shawn-hounkpatin',
  photography: 'https://bj.linkedin.com/showcase/kerawa-space/',
  betweenLandAndOcean: 'https://www.youtube.com/watch?v=Q2Fk8eVHc3o',
  myLover: 'https://www.youtube.com/watch?v=e5d2Bag4pCI',
} as const
