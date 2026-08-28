// Central place for real, verified facts about Zumhoo Studios.
// Anything NOT verified stays a bracketed placeholder — never invented.

export const SITE = {
  name: 'Zumhoo Studios',
  shortName: 'ZUMHOO',
  tagline: 'Cameroonian stories. Global screens.',
  founder: {
    name: 'Agbor Obed Agbor',
    role: 'Founder & CEO',
  },
  phone: {
    display: '+237 6 78 06 36 81',
    tel: '+237678063681',
  },
  email: null, // not provided — render as [EMAIL]
  location: {
    label: 'Buea, South West Region, Cameroon',
    mapsUrl: 'https://maps.app.goo.gl/qtWvREhgb3PyVa8bA',
  },
  social: {
    instagram: 'https://www.instagram.com/zumhoostudios2/',
    facebook: 'https://www.facebook.com/zumhoostudios/',
    youtube: 'https://www.youtube.com/@zumhoocameroon4422/videos',
  },
  year: 2026,
}

// Verified, real Unsplash photos (checked individually before use).
// Used as realistic stand-ins until real Zumhoo footage/photography replaces them.
export const IMG = {
  projector: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26',
  cinemaSeats: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
  onSetGelLight: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b',
  filmReels: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1',
  studioMic: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618',
  cameraFlatlay: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  vintageCameraRim: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84',
  clapperHeld: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf',
  clapperDesert: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
  typewriterNews: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167',
  galleryHall: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04',
  crowdSpotlight: 'https://images.unsplash.com/photo-1478147427282-58a87a120781',
  portraitMan: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919',
  portraitWoman: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
  ridgeSunset: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
  designSwatches: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
  designStyleGuide: 'https://images.unsplash.com/photo-1558655146-d09347e92766',
}

export const img = (url, { w = 1600, h, fit = 'crop', q = 80 } = {}) => {
  const params = new URLSearchParams({ w: String(w), q: String(q), auto: 'format' })
  if (h) params.set('h', String(h))
  if (h) params.set('fit', fit)
  return `${url}?${params.toString()}`
}
