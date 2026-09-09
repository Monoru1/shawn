import type { Localized } from './works'

export type ArchiveEntry = {
  id: string
  title: string
  year?: string
  medium: 'photo' | 'film'
  place: string
  placeLabel: Localized
  relation: Localized
  href: string
  source: string
  status: 'VERIFIED' | 'CORROBORATED'
}

const shawn = 'https://bj.linkedin.com/showcase/kerawa-space/'
const journal = 'https://www.54journal.com/stories/shawn-hounkpatin'
const dailyPaper = 'https://www.instagram.com/p/C4K6iHDg-6y/'
const photoVogue = 'https://www.vogue.com/photovogue/photographers/289808/gallery'

export const archiveEntries: ArchiveEntry[] = [
  { id: 'kidjo', title: 'Femi & Sica Kidjo', year: '2026', medium: 'photo', place: 'cotonou', placeLabel: { fr: 'Akpakpa, Cotonou', en: 'Akpakpa, Cotonou' }, relation: { fr: 'Portrait of a Genius', en: 'Portrait of a Genius' }, href: '/photographie/portrait-of-a-genius', source: shawn, status: 'VERIFIED' },
  { id: 'donli', title: 'Lady Donli', year: '2026', medium: 'photo', place: 'cotonou', placeLabel: { fr: 'Cotonou', en: 'Cotonou' }, relation: { fr: 'Portrait of a Genius', en: 'Portrait of a Genius' }, href: '/photographie?image=donli-1', source: shawn, status: 'VERIFIED' },
  { id: 'journal-archive', title: 'Archive 54 Journal', year: '2026', medium: 'photo', place: 'archive', placeLabel: { fr: 'Lieu non communiqué', en: 'Location not disclosed' }, relation: { fr: 'Sélection éditoriale', en: 'Editorial selection' }, href: '/photographie?image=editorial-54-1', source: journal, status: 'VERIFIED' },
  { id: 'mathias', title: 'Portrait of Mathias', year: '2025', medium: 'photo', place: 'adjarra', placeLabel: { fr: 'Adjarra', en: 'Adjarra' }, relation: { fr: 'Portrait', en: 'Portrait' }, href: '/photographie?image=mathias-1', source: shawn, status: 'VERIFIED' },
  { id: 'between', title: 'Between Land and Ocean', year: '2025', medium: 'film', place: 'benin', placeLabel: { fr: 'Côte béninoise', en: 'Beninese coast' }, relation: { fr: 'Documentaire', en: 'Documentary' }, href: '/films/between-land-and-ocean', source: 'https://www.ndf.int/newsroom/protecting-west-african-coastlines-from-the-impacts-of-climate-change.html', status: 'VERIFIED' },
  { id: 'lover', title: 'My Lover', year: '2025', medium: 'film', place: '', placeLabel: { fr: '—', en: '—' }, relation: { fr: 'Court-métrage expérimental', en: 'Experimental short film' }, href: '/films/my-lover', source: shawn, status: 'VERIFIED' },
  { id: 'daily-paper', title: 'Colours of Independence', year: '2024', medium: 'photo', place: 'senegal', placeLabel: { fr: 'Sénégal', en: 'Senegal' }, relation: { fr: 'Daily Paper × Converse', en: 'Daily Paper × Converse' }, href: '/photographie/colours-of-independence', source: dailyPaper, status: 'VERIFIED' },
  { id: 'ayiroun', title: 'Ayiroun', year: '2024', medium: 'photo', place: 'cotonou', placeLabel: { fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' }, relation: { fr: 'Sélection PhotoVogue', en: 'PhotoVogue selection' }, href: '/photographie?image=photovogue-ayiroun', source: photoVogue, status: 'VERIFIED' },
  { id: 'running', title: 'We’re Running!', year: '2024', medium: 'photo', place: 'archive', placeLabel: { fr: 'Lieu non communiqué', en: 'Location not disclosed' }, relation: { fr: 'Sélection PhotoVogue', en: 'PhotoVogue selection' }, href: '/photographie?image=photovogue-running-1', source: photoVogue, status: 'VERIFIED' },
  { id: 'enchantresse', title: 'Enchantresse', medium: 'photo', place: 'grand-popo', placeLabel: { fr: 'Grand-Popo · exposition', en: 'Grand-Popo · exhibition' }, relation: { fr: 'Recherche en cours', en: 'Ongoing work' }, href: '/photographie/enchantresse', source: shawn, status: 'CORROBORATED' },
]
