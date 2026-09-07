import type { Localized } from './works'

export type PhotoCategory = 'portrait' | 'research' | 'documentary'
export type Photograph = {
  id: string
  title: Localized
  alt: Localized
  category: PhotoCategory
  place: Localized
  context: Localized
  year?: string
  source: string
  width: number
  height: number
  layout: 'portrait' | 'landscape'
}

// Image/caption associations checked against Shawn's own posts, reposted by Kerawa.
// Exhibition locations are explicitly labelled; they are not shooting locations.
const source = 'https://bj.linkedin.com/showcase/kerawa-space/'
const kidjoContext = { fr: 'Femi et Sica Kidjo, deux sœurs DJ, photographiées dans les rues d’Akpakpa à leur retour à Cotonou. Série Portrait of a Genius.', en: 'DJ sisters Femi and Sica Kidjo, photographed in the streets of Akpakpa on their return to Cotonou. From Portrait of a Genius.' }
const donliContext = { fr: 'Lady Donli, musicienne nigériane, pendant sa résidence musicale à Cotonou. Série Portrait of a Genius.', en: 'Nigerian musician Lady Donli during her music residency in Cotonou. From Portrait of a Genius.' }
export const photographs: Photograph[] = [
  { id: 'kidjo-1', title: { fr: 'Femi & Sica Kidjo — I', en: 'Femi & Sica Kidjo — I' }, alt: { fr: 'Les deux sœurs Kidjo sur une place d’Akpakpa : l’une debout au premier plan, l’autre assise, un grand arbre derrière elles.', en: 'The Kidjo sisters in an Akpakpa square: one standing in the foreground, the other seated, with a large tree behind them.' }, category: 'portrait', place: { fr: 'Akpakpa, Cotonou · Bénin', en: 'Akpakpa, Cotonou · Benin' }, context: kidjoContext, year: '2026', width: 800, height: 652, layout: 'landscape', source },
  { id: 'donli-1', title: { fr: 'Lady Donli — I', en: 'Lady Donli — I' }, alt: { fr: 'Lady Donli aux cheveux roux et aux lunettes bleues, le menton posé dans sa main, devant un feuillage.', en: 'Lady Donli with red hair and blue glasses, resting her chin on her hand in front of foliage.' }, category: 'portrait', place: { fr: 'Cotonou · Bénin', en: 'Cotonou · Benin' }, context: donliContext, year: '2026', width: 800, height: 1000, layout: 'portrait', source },
  { id: 'enchantresse-1', title: { fr: 'Enchantresse', en: 'Enchantresse' }, alt: { fr: 'Une figure drapée de brun se tient sur les rochers face à l’océan, sous un ciel bleu. Tirage photographique avec sa marge blanche.', en: 'A figure draped in brown stands on rocks by the ocean under a blue sky. Photographic print with its white border.' }, category: 'research', place: { fr: 'Exposée à Grand-Popo · Bénin', en: 'Exhibited in Grand-Popo · Benin' }, context: { fr: 'Une figure fictive inspirée des prêtresses vodoun. Série présentée au festival Lopo Lopo, dans le cadre de la résidence Finding Etherea.', en: 'A fictional figure inspired by vodun priestesses. Series presented at the Lopo Lopo festival as part of the Finding Etherea residency.' }, width: 800, height: 533, layout: 'landscape', source },
  { id: 'mathias-1', title: { fr: 'Portrait de Mathias', en: 'Portrait of Mathias' }, alt: { fr: 'Mathias, un jeune garçon d’Adjarra, tient un petit fruit rouge dans sa main, dans une cour bordée de palmes.', en: 'Mathias, a young boy from Adjarra, holds a small red fruit in a palm-lined courtyard.' }, category: 'documentary', place: { fr: 'Adjarra, Ouémé · Bénin', en: 'Adjarra, Ouémé · Benin' }, context: { fr: 'Portrait réalisé à Adjarra, dans le sud-est du Bénin.', en: 'A portrait made in Adjarra, in south-eastern Benin.' }, year: '2025', width: 800, height: 1000, layout: 'portrait', source },
  { id: 'kidjo-2', title: { fr: 'Femi & Sica Kidjo — II', en: 'Femi & Sica Kidjo — II' }, alt: { fr: 'L’une des sœurs Kidjo, vêtue de blanc et noir, se tient contre un mur blanc traversé d’une bande bleue et rouge.', en: 'One of the Kidjo sisters, dressed in black and white, stands against a white wall crossed by a blue and red stripe.' }, category: 'portrait', place: { fr: 'Akpakpa, Cotonou · Bénin', en: 'Akpakpa, Cotonou · Benin' }, context: kidjoContext, year: '2026', width: 800, height: 640, layout: 'landscape', source },
  { id: 'donli-2', title: { fr: 'Lady Donli — II', en: 'Lady Donli — II' }, alt: { fr: 'Lady Donli appuie la tête sur ses bras croisés au bord d’un muret, en chemise rouge rayée.', en: 'Lady Donli rests her head on her crossed arms on a low wall, wearing a red striped shirt.' }, category: 'portrait', place: { fr: 'Cotonou · Bénin', en: 'Cotonou · Benin' }, context: donliContext, year: '2026', width: 800, height: 640, layout: 'landscape', source },
]

export const filmPoster: Photograph = {
  id: 'between', title: { fr: 'Between Land and Ocean', en: 'Between Land and Ocean' },
  alt: { fr: 'Affiche du film Between Land and Ocean : une jeune fille de dos face à la mer, et le titre en lettres jaunes.', en: 'Between Land and Ocean film poster: a girl seen from behind facing the sea, with the title in yellow letters.' },
  category: 'documentary', place: { fr: 'Gbècon · Bénin', en: 'Gbècon · Benin' }, year: '2025',
  context: { fr: 'À Gbècon, une jeune fille raconte le quotidien d’un village face à l’érosion côtière. Réalisation et image : Shawn N. Hounkpatin. Production : Kerawa Studio.', en: 'In Gbècon, a young girl tells of everyday life in a village facing coastal erosion. Directed and photographed by Shawn N. Hounkpatin. Produced by Kerawa Studio.' },
  source, width: 800, height: 1000, layout: 'portrait',
}

// Public social exports are 800px wide. Do not invent larger masters or upscale.
export const photoWidths = [400, 600, 800] as const
export const photoUrl = (photo: Photograph, width: number) => `/media/works/${photo.id}-${width}.webp`
