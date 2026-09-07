import type { Localized } from './works'

export type PhotoCategory = 'portrait' | 'fashion' | 'nature'
export type Photograph = {
  id: string
  unsplashId: string
  title: Localized
  alt: Localized
  category: PhotoCategory
  width: number
  height: number
  layout: 'portrait' | 'landscape'
}

// Verified Unsplash images for this preview. These are not Shawn's works.
export const photographs: Photograph[] = [
  { id: 'presence', unsplashId: '1531123897727-8f129e1688ce', title: { fr: 'Présence', en: 'Presence' }, alt: { fr: 'Portrait d’une femme aux cheveux courts, en chemise imprimée, devant un mur brun.', en: 'Portrait of a short-haired woman in a patterned shirt against a brown wall.' }, category: 'portrait', width: 800, height: 1200, layout: 'portrait' },
  { id: 'foliage', unsplashId: '1518531933037-91b2f5f229cc', title: { fr: 'À l’ombre', en: 'In the shade' }, alt: { fr: 'Feuillage vert dense, traversé par une lumière douce et des ombres profondes.', en: 'Dense green foliage with soft light and deep shadows between the leaves.' }, category: 'nature', width: 800, height: 1422, layout: 'portrait' },
  { id: 'encounter', unsplashId: '1531384441138-2736e62e0919', title: { fr: 'Rencontre', en: 'Encounter' }, alt: { fr: 'Homme souriant portant des lunettes et un béret bleu, assis avec un appareil photo.', en: 'Smiling man wearing glasses and a blue beret, seated with a camera.' }, category: 'portrait', width: 800, height: 1200, layout: 'portrait' },
  { id: 'yellow', unsplashId: '1515886657613-9f3515b0c78f', title: { fr: 'Jaune solaire', en: 'Sun yellow' }, alt: { fr: 'Silhouette en ensemble jaune et bottines blanches sur un terrain de sport en plein soleil.', en: 'Figure in a yellow outfit and white boots on a sunlit sports court.' }, category: 'fashion', width: 800, height: 1107, layout: 'portrait' },
  { id: 'waterline', unsplashId: '1518837695005-2083093ee35b', title: { fr: 'Ligne d’eau', en: 'Waterline' }, alt: { fr: 'Vagues bleu profond vues au ras de l’eau sous un ciel pâle.', en: 'Deep blue waves seen at water level beneath a pale sky.' }, category: 'nature', width: 800, height: 533, layout: 'landscape' },
  { id: 'gesture', unsplashId: '1524504388940-b1c1722653e1', title: { fr: 'Un geste', en: 'A gesture' }, alt: { fr: 'Portrait de trois quarts d’une femme en noir, une main près du visage, sur fond gris.', en: 'Three-quarter portrait of a woman dressed in black, a hand near her face, against grey.' }, category: 'portrait', width: 800, height: 1200, layout: 'portrait' },
]

export const photoUrl = (photo: Photograph, width: number) =>
  `https://images.unsplash.com/photo-${photo.unsplashId}?auto=format&fit=crop&w=${width}&q=80`
