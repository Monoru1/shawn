export type Lang = 'fr' | 'en'

export const dictionary = {
  nav: {
    films: { fr: 'Films', en: 'Films' },
    photography: { fr: 'Photographie', en: 'Photography' },
    kerawa: { fr: 'Kerawa', en: 'Kerawa' },
    about: { fr: 'Profil', en: 'Profile' },
    contact: { fr: 'Contact', en: 'Contact' },
    menu: { fr: 'Menu', en: 'Menu' },
    close: { fr: 'Fermer', en: 'Close' },
  },

  preview: {
    label: { fr: 'Aperçu', en: 'Preview' },
    text: {
      fr: 'Maquette de présentation — visuels temporaires, textes et crédits réels.',
      en: 'Presentation mock-up — temporary visuals, real texts and credits.',
    },
  },

  hero: {
    role: { fr: 'Photographe & Cinéaste', en: 'Photographer & Filmmaker' },
    base: { fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' },
    line: {
      fr: 'Deux façons de regarder la même chose : ce qui reste, et ce qui passe.',
      en: 'Two ways of looking at one thing: what remains, and what passes.',
    },
    enterFilm: { fr: 'Voir les films', en: 'View films' },
    enterPhoto: { fr: 'Voir la photographie', en: 'View photography' },
    scroll: { fr: 'Défiler', en: 'Scroll' },
  },

  index: {
    eyebrow: { fr: 'Index des travaux', en: 'Index of works' },
    title: { fr: 'Films et photographies,\nune seule pratique.', en: 'Films and photographs,\na single practice.' },
    colYear: { fr: 'Année', en: 'Year' },
    colTitle: { fr: 'Titre', en: 'Title' },
    colMedium: { fr: 'Médium', en: 'Medium' },
    colCategory: { fr: 'Nature', en: 'Type' },
    colLocation: { fr: 'Lieu', en: 'Location' },
    all: { fr: 'Tout', en: 'All' },
  },

  medium: {
    film: { fr: 'Film', en: 'Film' },
    photo: { fr: 'Photographie', en: 'Photography' },
  },

  about: {
    eyebrow: { fr: 'Profil', en: 'Profile' },
    bio1: {
      fr: "Shawn N. Hounkpatin est un artiste pluridisciplinaire béninois. Il travaille la photographie de mode, d'art et de documentaire, et réalise des films depuis Cotonou.",
      en: 'Shawn N. Hounkpatin is a Beninese multi-disciplinary artist. He works in fashion, art and documentary photography, and directs films from Cotonou.',
    },
    bio2: {
      fr: "Sa recherche explore le réalisme magique, la poésie et les mythologies, avec l'envie de créer des univers contemporains ancrés dans les héritages culturels du continent. Il est le fondateur de Kerawa Studio.",
      en: 'His research explores magical realism, poetry and mythology, seeking contemporary worlds rooted in the cultural heritage of the continent. He is the founder of Kerawa Studio.',
    },
    basedLabel: { fr: 'Basé à', en: 'Based in' },
    fieldsLabel: { fr: 'Domaines', en: 'Fields' },
    fieldsValue: { fr: 'Documentaire, mode, art', en: 'Documentary, fashion, art' },
    studioLabel: { fr: 'Studio', en: 'Studio' },
    availabilityLabel: { fr: 'Disponible pour', en: 'Available for' },
    availabilityValue: { fr: 'Commandes sélectionnées', en: 'Selected commissions' },
  },

  kerawa: {
    eyebrow: { fr: 'Le studio', en: 'The studio' },
    tagline: {
      fr: "Une maison de production née à Cotonou, pour porter des récits africains jusqu'aux écrans.",
      en: 'A production house born in Cotonou, carrying African stories to the screen.',
    },
    intro: {
      fr: "Kerawa Studio produit les films de Shawn N. Hounkpatin et accompagne des projets documentaires, artistiques et de commande. Le studio travaille avec des institutions internationales comme avec des marques et des auteurs du continent.",
      en: 'Kerawa Studio produces the films of Shawn N. Hounkpatin and supports documentary, artistic and commissioned projects. The studio works with international institutions as well as brands and authors from the continent.',
    },
    servicesTitle: { fr: 'Ce que fait le studio', en: 'What the studio does' },
    teamTitle: { fr: 'Équipe', en: 'Team' },
    partnersTitle: { fr: 'Ils ont travaillé avec le studio', en: 'They worked with the studio' },
    worksTitle: { fr: 'Produit par Kerawa', en: 'Produced by Kerawa' },
    cta: { fr: 'Parler d’un projet', en: 'Discuss a project' },
  },

  work: {
    backFilms: { fr: '← Tous les films', en: '← All films' },
    backPhoto: { fr: '← Toute la photographie', en: '← All photography' },
    statement: { fr: "Note d'intention", en: "Director's note" },
    credits: { fr: 'Crédits', en: 'Credits' },
    partners: { fr: 'Partenaires', en: 'Partners' },
    next: { fr: 'Projet suivant', en: 'Next project' },
    watch: { fr: 'Voir le film', en: 'Watch the film' },
    notFound: { fr: 'Ce projet n’existe pas.', en: 'This project does not exist.' },
  },

  list: {
    filmsTitle: { fr: 'Films', en: 'Films' },
    filmsIntro: {
      fr: 'Documentaires, formes courtes et commandes. Réalisation et image.',
      en: 'Documentaries, short forms and commissions. Directing and cinematography.',
    },
    photoTitle: { fr: 'Photographie', en: 'Photography' },
    photoIntro: {
      fr: 'Séries personnelles, mode et éditorial, reportage.',
      en: 'Personal series, fashion and editorial, reportage.',
    },
  },

  footer: {
    title: { fr: 'Travaillons\nensemble.', en: "Let's work\ntogether." },
    emailLabel: { fr: 'Écrire', en: 'Write' },
    rights: { fr: 'Tous droits réservés', en: 'All rights reserved' },
    top: { fr: 'Haut de page', en: 'Back to top' },
    credit: { fr: 'Site en cours de conception', en: 'Site in progress' },
  },

  notFound: {
    title: { fr: 'Hors champ.', en: 'Out of frame.' },
    text: { fr: 'Cette page n’existe pas ou a été déplacée.', en: 'This page does not exist or has moved.' },
    back: { fr: 'Retour à l’accueil', en: 'Back home' },
  },
} as const

export const CONTACT_EMAIL = 'studio@shawnhounkpatin.com'
export const INSTAGRAM_PERSONAL = 'https://www.instagram.com/shawnpicture__/'
export const INSTAGRAM_STUDIO = 'https://www.instagram.com/kerawa.space/'

