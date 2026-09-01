/**
 * SOURCE UNIQUE DE TOUS LES VISUELS DU SITE.
 *
 * Aperçu : images de substitution libres de droits, déterministes (une seed = une image fixe).
 * Production : remplacer chaque valeur par un chemin local, ex. '/media/enchantresse-01.jpg'
 * en déposant les fichiers dans `public/media/`. Aucun autre fichier n'est à modifier.
 */

const placeholder = (seed: string, w = 1800, h = 1200) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/**
 * Vidéo de fond du hero.
 * Laisser vide ('') pour afficher l'image fixe à la place.
 * En production : déposer un .mp4 dans `public/media/` et mettre '/media/hero.mp4'.
 * Pour l'aperçu : un clip CC0 (Pexels Videos, Coverr) suffit — sobre, désaturé, sans visage.
 */
export const HERO_VIDEO = ''

export const media = {
  heroPoster: placeholder('shawn-hero-coast', 2400, 1400),
  portrait: placeholder('shawn-portrait', 1400, 1750),
  kerawaCover: placeholder('kerawa-studio-set', 2200, 1200),

  betweenLandAndOcean: {
    cover: placeholder('bloa-cover-ocean', 2400, 1350),
    gallery: [
      placeholder('bloa-01-village', 1800, 1200),
      placeholder('bloa-02-shore', 1800, 2250),
      placeholder('bloa-03-child', 1800, 1200),
    ],
  },

  poeme: {
    cover: placeholder('poeme-cover', 2400, 1350),
    gallery: [placeholder('poeme-01', 1800, 1200), placeholder('poeme-02', 1800, 2250)],
  },

  lamiCotonou: {
    cover: placeholder('lami-cotonou-cover', 2400, 1350),
    gallery: [placeholder('lami-01', 1800, 1200), placeholder('lami-02', 1800, 2250)],
  },

  enchantresse: {
    cover: placeholder('enchantresse-cover', 1800, 2250),
    gallery: [
      placeholder('enchantresse-01', 1800, 2250),
      placeholder('enchantresse-02', 1800, 1200),
      placeholder('enchantresse-03', 1800, 2250),
      placeholder('enchantresse-04', 1800, 1200),
    ],
  },

  mode: {
    cover: placeholder('mode-cover', 1800, 2250),
    gallery: [
      placeholder('mode-01', 1800, 2250),
      placeholder('mode-02', 1800, 1200),
      placeholder('mode-03', 1800, 2250),
      placeholder('mode-04', 1800, 1200),
    ],
  },

  documentaire: {
    cover: placeholder('doc-cover', 2400, 1350),
    gallery: [
      placeholder('doc-01', 1800, 1200),
      placeholder('doc-02', 1800, 2250),
      placeholder('doc-03', 1800, 1200),
    ],
  },
} as const

