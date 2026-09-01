import type { Localized } from './works'

export const kerawaServices: { title: Localized; text: Localized }[] = [
  {
    title: { fr: 'Développement', en: 'Development' },
    text: {
      fr: "Écriture, recherche et construction du dispositif narratif, du premier repérage au découpage.",
      en: 'Writing, research and shaping of the narrative device, from first scouting to shot breakdown.',
    },
  },
  {
    title: { fr: 'Production', en: 'Production' },
    text: {
      fr: "Production exécutive de documentaires, formes courtes et films de commande au Bénin et dans la sous-région.",
      en: 'Executive production of documentaries, short forms and commissioned films in Benin and the wider region.',
    },
  },
  {
    title: { fr: 'Image & Réalisation', en: 'Image & Directing' },
    text: {
      fr: "Réalisation et direction de la photographie, en propre ou pour des commanditaires institutionnels et privés.",
      en: 'Directing and cinematography, in-house or for institutional and private commissioners.',
    },
  },
  {
    title: { fr: 'Post-production', en: 'Post-production' },
    text: {
      fr: "Montage, étalonnage et finition, pensés dès l'écriture plutôt que comme une étape de rattrapage.",
      en: 'Editing, grading and finishing, planned from the writing stage rather than treated as a rescue phase.',
    },
  },
]

export const kerawaTeam: { name: string; role: Localized }[] = [
  { name: 'Shawn N. Hounkpatin', role: { fr: 'Fondateur — Réalisateur & Directeur photo', en: 'Founder — Director & DOP' } },
  { name: 'Tayo Adannouewa', role: { fr: 'Assistant réalisateur', en: 'Assistant director' } },
]

export const kerawaPartners: string[] = [
  'Nordic Development Fund',
  'World Bank',
  'WACA — West Africa Coastal Areas',
  "L'AMI Cotonou — Sofitel",
]

