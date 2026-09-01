export type Project = {
  slug: string
  index: string
  title: string
  category: string
  role: string
  year: string
  location: string
  image: string
  altImage: string
  ratio: 'wide' | 'portrait' | 'square'
  tone: 'dark' | 'light' | 'rust'
  statement: string
}

// Editorial placeholders only. Replace every entry with Shawn's verified work.
export const projects: Project[] = [
  {
    slug: 'the-last-light', index: '01', title: 'The Last Light', category: 'Short film',
    role: 'Director / Writer', year: '2026', location: 'Cotonou, BJ', ratio: 'wide', tone: 'dark',
    statement: 'A study of silence, distance and the things a city keeps after nightfall.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2400&q=88',
    altImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=88',
  },
  {
    slug: 'red-dust', index: '02', title: 'Red Dust', category: 'Fashion film',
    role: 'Director', year: '2025', location: 'Lomé, TG', ratio: 'portrait', tone: 'rust',
    statement: 'Movement, fabric and heat — a portrait shaped by the red earth.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=88',
    altImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=88',
  },
  {
    slug: 'nocturne', index: '03', title: 'Nocturne', category: 'Music video',
    role: 'Director / Creative direction', year: '2025', location: 'Paris, FR', ratio: 'wide', tone: 'light',
    statement: 'One night, one pulse, and a camera that refuses to look away.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2400&q=88',
    altImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=88',
  },
  {
    slug: 'homecoming', index: '04', title: 'Homecoming', category: 'Documentary',
    role: 'Director / DOP', year: '2024', location: 'Porto-Novo, BJ', ratio: 'square', tone: 'dark',
    statement: 'An intimate return to the gestures, faces and rooms that make a home.',
    image: 'https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?auto=format&fit=crop&w=1800&q=88',
    altImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=88',
  },
]
