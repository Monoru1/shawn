import type { Localized } from './works'

export type PhotoCategory = 'portrait' | 'editorial' | 'research' | 'documentary'
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
  project?: { title: Localized; href: string }
}

// Image/caption associations checked against Shawn's own posts, reposted by Kerawa.
// Exhibition locations are explicitly labelled; they are not shooting locations.
const source = 'https://bj.linkedin.com/showcase/kerawa-space/'
const kidjoContext = { fr: 'Femi et Sica Kidjo, deux sœurs DJ, photographiées dans les rues d’Akpakpa à leur retour à Cotonou. Série Portrait of a Genius.', en: 'DJ sisters Femi and Sica Kidjo, photographed in the streets of Akpakpa on their return to Cotonou. From Portrait of a Genius.' }
const donliContext = { fr: 'Lady Donli, musicienne nigériane, pendant sa résidence musicale à Cotonou. Série Portrait of a Genius.', en: 'Nigerian musician Lady Donli during her music residency in Cotonou. From Portrait of a Genius.' }
const journalSource = 'https://www.54journal.com/stories/shawn-hounkpatin'
const journalPlace = { fr: 'Archive éditoriale · 54 Journal', en: 'Editorial archive · 54 Journal' }
const journalContext = { fr: 'Image publiée dans le portrait de Shawn N. Hounkpatin par 54 Journal. Photographie : Shawn N. Hounkpatin. Lieu de prise de vue non communiqué.', en: 'Image published in 54 Journal’s profile of Shawn N. Hounkpatin. Photography: Shawn N. Hounkpatin. Shooting location not disclosed.' }
export const photographs: Photograph[] = [
  { id: 'kidjo-1', title: { fr: 'Femi & Sica Kidjo — I', en: 'Femi & Sica Kidjo — I' }, alt: { fr: 'Les deux sœurs Kidjo sur une place d’Akpakpa : l’une debout au premier plan, l’autre assise, un grand arbre derrière elles.', en: 'The Kidjo sisters in an Akpakpa square: one standing in the foreground, the other seated, with a large tree behind them.' }, category: 'portrait', place: { fr: 'Akpakpa, Cotonou · Bénin', en: 'Akpakpa, Cotonou · Benin' }, context: kidjoContext, year: '2026', width: 800, height: 652, layout: 'landscape', source, project: { title: { fr: 'Portrait of a Genius', en: 'Portrait of a Genius' }, href: '/photographie/portrait-of-a-genius' } },
  { id: 'donli-1', title: { fr: 'Lady Donli — I', en: 'Lady Donli — I' }, alt: { fr: 'Lady Donli aux cheveux roux et aux lunettes bleues, le menton posé dans sa main, devant un feuillage.', en: 'Lady Donli with red hair and blue glasses, resting her chin on her hand in front of foliage.' }, category: 'portrait', place: { fr: 'Cotonou · Bénin', en: 'Cotonou · Benin' }, context: donliContext, year: '2026', width: 800, height: 1000, layout: 'portrait', source, project: { title: { fr: 'Portrait of a Genius', en: 'Portrait of a Genius' }, href: '/photographie/portrait-of-a-genius' } },
  { id: 'enchantresse-1', title: { fr: 'Enchantresse', en: 'Enchantresse' }, alt: { fr: 'Une figure drapée de brun se tient sur les rochers face à l’océan, sous un ciel bleu. Tirage photographique avec sa marge blanche.', en: 'A figure draped in brown stands on rocks by the ocean under a blue sky. Photographic print with its white border.' }, category: 'research', place: { fr: 'Exposée à Grand-Popo · Bénin', en: 'Exhibited in Grand-Popo · Benin' }, context: { fr: 'Une figure fictive inspirée des prêtresses vodoun. Série présentée au festival Lopo Lopo, dans le cadre de la résidence Finding Etherea.', en: 'A fictional figure inspired by vodun priestesses. Series presented at the Lopo Lopo festival as part of the Finding Etherea residency.' }, width: 800, height: 533, layout: 'landscape', source, project: { title: { fr: 'Enchantresse', en: 'Enchantresse' }, href: '/photographie/enchantresse' } },
  { id: 'mathias-1', title: { fr: 'Portrait de Mathias', en: 'Portrait of Mathias' }, alt: { fr: 'Mathias, un jeune garçon d’Adjarra, tient un petit fruit rouge dans sa main, dans une cour bordée de palmes.', en: 'Mathias, a young boy from Adjarra, holds a small red fruit in a palm-lined courtyard.' }, category: 'documentary', place: { fr: 'Adjarra, Ouémé · Bénin', en: 'Adjarra, Ouémé · Benin' }, context: { fr: 'Portrait réalisé à Adjarra, dans le sud-est du Bénin.', en: 'A portrait made in Adjarra, in south-eastern Benin.' }, year: '2025', width: 800, height: 1000, layout: 'portrait', source },
  { id: 'kidjo-2', title: { fr: 'Femi & Sica Kidjo — II', en: 'Femi & Sica Kidjo — II' }, alt: { fr: 'L’une des sœurs Kidjo, vêtue de blanc et noir, se tient contre un mur blanc traversé d’une bande bleue et rouge.', en: 'One of the Kidjo sisters, dressed in black and white, stands against a white wall crossed by a blue and red stripe.' }, category: 'portrait', place: { fr: 'Akpakpa, Cotonou · Bénin', en: 'Akpakpa, Cotonou · Benin' }, context: kidjoContext, year: '2026', width: 800, height: 640, layout: 'landscape', source, project: { title: { fr: 'Portrait of a Genius', en: 'Portrait of a Genius' }, href: '/photographie/portrait-of-a-genius' } },
  { id: 'donli-2', title: { fr: 'Lady Donli — II', en: 'Lady Donli — II' }, alt: { fr: 'Lady Donli appuie la tête sur ses bras croisés au bord d’un muret, en chemise rouge rayée.', en: 'Lady Donli rests her head on her crossed arms on a low wall, wearing a red striped shirt.' }, category: 'portrait', place: { fr: 'Cotonou · Bénin', en: 'Cotonou · Benin' }, context: donliContext, year: '2026', width: 800, height: 640, layout: 'landscape', source, project: { title: { fr: 'Portrait of a Genius', en: 'Portrait of a Genius' }, href: '/photographie/portrait-of-a-genius' } },
  { id: 'editorial-54-1', title: { fr: 'Archive 54 Journal — I', en: '54 Journal archive — I' }, alt: { fr: 'Trois personnes vêtues de noir et de vert autour d’une moto, sur un sol clair sous un ciel couvert.', en: 'Three people dressed in black and green around a motorbike on pale ground beneath an overcast sky.' }, category: 'editorial', place: journalPlace, context: journalContext, width: 800, height: 534, layout: 'landscape', source: journalSource },
  { id: 'editorial-54-2', title: { fr: 'Archive 54 Journal — II', en: '54 Journal archive — II' }, alt: { fr: 'Une femme porte un long manteau à motif et un pantalon bleu devant un fond noir.', en: 'A woman wears a patterned long coat and blue trousers against a black background.' }, category: 'editorial', place: journalPlace, context: journalContext, width: 800, height: 1200, layout: 'portrait', source: journalSource },
  { id: 'editorial-54-3', title: { fr: 'Archive 54 Journal — III', en: '54 Journal archive — III' }, alt: { fr: 'Portrait en clair-obscur d’un homme torse nu, avec une silhouette projetée sur un fond sombre.', en: 'A chiaroscuro portrait of a shirtless man, with a silhouette cast against a dark backdrop.' }, category: 'editorial', place: journalPlace, context: journalContext, width: 800, height: 1200, layout: 'portrait', source: journalSource },
  { id: 'editorial-54-4', title: { fr: 'Archive 54 Journal — IV', en: '54 Journal archive — IV' }, alt: { fr: 'Trois personnes posent dans une lumière chaude devant un mur aux traces colorées.', en: 'Three people pose in warm light in front of a wall marked with colour.' }, category: 'editorial', place: journalPlace, context: journalContext, width: 800, height: 1200, layout: 'portrait', source: journalSource },
  { id: 'editorial-54-5', title: { fr: 'Archive 54 Journal — V', en: '54 Journal archive — V' }, alt: { fr: 'Portrait d’une femme en chemise sombre et cravate devant un cercle jaune.', en: 'Portrait of a woman in a dark shirt and tie in front of a yellow circle.' }, category: 'editorial', place: journalPlace, context: journalContext, width: 800, height: 1200, layout: 'portrait', source: journalSource },
  { id: 'editorial-54-6', title: { fr: 'Archive 54 Journal — VI', en: '54 Journal archive — VI' }, alt: { fr: 'Une femme en tenue sombre se penche dans une composition bleue et lumineuse.', en: 'A woman in dark clothing bends forward in a luminous blue composition.' }, category: 'editorial', place: journalPlace, context: journalContext, width: 800, height: 1200, layout: 'portrait', source: journalSource },
  { id: 'editorial-54-7', title: { fr: 'Archive 54 Journal — VII', en: '54 Journal archive — VII' }, alt: { fr: 'Une femme aux longues tresses est assise entre des rochers, vêtue d’un drapé brun.', en: 'A woman with long braids sits among rocks, dressed in a brown drape.' }, category: 'editorial', place: journalPlace, context: journalContext, width: 800, height: 1200, layout: 'portrait', source: journalSource },
]

export const filmPoster: Photograph = {
  id: 'between', title: { fr: 'Between Land and Ocean', en: 'Between Land and Ocean' },
  alt: { fr: 'Affiche du film Between Land and Ocean : une jeune fille de dos face à la mer, et le titre en lettres jaunes.', en: 'Between Land and Ocean film poster: a girl seen from behind facing the sea, with the title in yellow letters.' },
  category: 'documentary', place: { fr: 'Avloh · Bénin', en: 'Avloh · Benin' }, year: '2025',
  context: { fr: 'Un documentaire consacré aux communautés côtières d’Avloh et aux effets du changement climatique. Réalisation : Shawn N. Hounkpatin. Production : Kerawa Studio.', en: 'A documentary about Avloh’s coastal communities and the effects of climate change. Directed by Shawn N. Hounkpatin. Produced by Kerawa Studio.' },
  source, width: 800, height: 1000, layout: 'portrait',
}

// Public social exports are 800px wide. Do not invent larger masters or upscale.
export const photoWidths = [400, 600, 800] as const
export const photoUrl = (photo: Photograph, width: number) => `/media/works/${photo.id}-${width}.webp`
