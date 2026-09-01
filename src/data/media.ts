/**
 * SOURCE UNIQUE DE TOUS LES VISUELS DU SITE.
 *
 * Les photographies ci-dessous sont des œuvres de Shawn publiées dans son
 * portrait 54Journal. Les images du documentaire viennent de la page officielle
 * du Nordic Development Fund. Dès réception des masters, il suffira de remplacer
 * ces URL par des chemins `/media/...` sans toucher aux composants.
 */

const journal = {
  lead: 'https://cdn.sanity.io/images/x3v7xpoi/production/827ef8d4e84987a1430b0e4b787210cfb4b3c046-1352x560.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&h=1200&q=92&w=2900',
  portrait: 'https://cdn.sanity.io/images/x3v7xpoi/production/2d912043f91a68f12a4c7ea03c663eea6f9e5b1d-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
  image02: 'https://cdn.sanity.io/images/x3v7xpoi/production/2b1558f12b7fb1963872183012d7a297e00e4789-810x540.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1800',
  image03: 'https://cdn.sanity.io/images/x3v7xpoi/production/b3baf4d524b6ee1113aeb9d8ecbed03d085a3322-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
  image04: 'https://cdn.sanity.io/images/x3v7xpoi/production/9d86ea08684a7ed2606ed8ff8e38e9eb1a25fae9-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
  image05: 'https://cdn.sanity.io/images/x3v7xpoi/production/03ae997b06c2c5257a542a4d8435fc9789fe1879-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
  image06: 'https://cdn.sanity.io/images/x3v7xpoi/production/2b694171a086d7974228218b94397c9f87dda138-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
  image07: 'https://cdn.sanity.io/images/x3v7xpoi/production/67017b606c7decc7a05ad6f5917747e20c658e38-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
  image08: 'https://cdn.sanity.io/images/x3v7xpoi/production/c5f70516da3f4ff26286f536459acd63e77fb827-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
  image09: 'https://cdn.sanity.io/images/x3v7xpoi/production/8354c6dcd883ccea293e994d840f997da792ca6e-810x540.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1800',
  image10: 'https://cdn.sanity.io/images/x3v7xpoi/production/3b91ffe0e207311ed612faffa2ca09120adcab5f-810x540.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1800',
  image11: 'https://cdn.sanity.io/images/x3v7xpoi/production/c0225417b3643f0eb95ca0797d99de0ed18ccc50-810x540.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1800',
  image12: 'https://cdn.sanity.io/images/x3v7xpoi/production/2d9f00774c0008802f10f55273fde571b7f455d3-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
  image13: 'https://cdn.sanity.io/images/x3v7xpoi/production/3bc66c72577bb3a588a13eb3365ad76c5e2486a8-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
  image14: 'https://cdn.sanity.io/images/x3v7xpoi/production/49fc0dcfaadbbb639a96dafee73479a11cfb3c38-540x810.jpg?auto=format&crop=focalpoint&fit=crop&fm=webp&q=90&w=1200',
} as const

const film = {
  betweenPoster: 'https://i.ytimg.com/vi/Q2Fk8eVHc3o/maxresdefault.jpg',
  wacaCover: 'https://www.ndf.int/media/cache/waca-thumbnail-1920x9999%2Cq%3D85.jpg',
  avloh: 'https://www.ndf.int/media/cache/results-report-2024-cover-9-900x600%2Cq%3D85.jpg',
  coast: 'https://www.ndf.int/media/cache/results-report-2024-cover-14-1-900x600%2Cq%3D85.jpg',
} as const

export const HERO_VIDEO = ''

export const media = {
  heroPoster: journal.lead,
  portrait: journal.portrait,
  kerawaCover: film.wacaCover,

  betweenLandAndOcean: {
    cover: film.betweenPoster,
    gallery: [film.wacaCover, film.avloh, film.coast],
  },

  myLover: {
    cover: journal.image11,
    gallery: [journal.image12, journal.image13, journal.image14],
  },

  lamiCotonou: {
    cover: journal.image09,
    gallery: [journal.image10, journal.image02],
  },

  enchantresse: {
    cover: journal.image03,
    gallery: [journal.image04, journal.image05, journal.image06, journal.image07],
  },

  mode: {
    cover: journal.image08,
    gallery: [journal.image03, journal.image05, journal.image12, journal.image14],
  },

  documentaire: {
    cover: journal.image02,
    gallery: [journal.image09, journal.image10, journal.image11],
  },
} as const

export const mediaSources = {
  photography: 'https://www.54journal.com/stories/shawn-hounkpatin',
  betweenLandAndOcean: 'https://www.youtube.com/watch?v=Q2Fk8eVHc3o',
  ndf: 'https://www.ndf.int/newsroom/protecting-west-african-coastlines-from-the-impacts-of-climate-change.html',
} as const
