import { IMG, SITE } from './site'

// Every category is its own page (see src/pages/CategoryPage.jsx). Video
// items link straight out to the real YouTube channel; image items link out
// to the real Instagram — every link on the site is a verified, working URL,
// never a dead "#". Swap `href` for a specific video/post URL per item once
// real links are supplied; titles/years stay placeholders until then.

export const CATEGORY_INFO = {
  film: {
    slug: 'film',
    name: 'Film',
    tagline: 'Short film, documentary and narrative work.',
    description:
      '[Placeholder — a line on the studio’s film work: shorts, documentary, narrative.]',
  },
  'brand-stories': {
    slug: 'brand-stories',
    name: 'Brand Stories',
    tagline: 'A combination of corporate work and film.',
    description:
      '[Placeholder — brand films, corporate content and campaign work made for other businesses.]',
  },
  photography: {
    slug: 'photography',
    name: 'Photography',
    tagline: 'Portrait, editorial and event photography.',
    description: '[Placeholder — a line on the studio’s photography practice.]',
  },
  'graphic-design': {
    slug: 'graphic-design',
    name: 'Graphic Design',
    tagline: 'Identity, print and campaign design.',
    description: '[Placeholder — a line on the studio’s design work.]',
  },
}

export const CATEGORIES = Object.values(CATEGORY_INFO).map((c) => c.name)

export const WORK_ITEMS = [
  // Film
  {
    id: 'w1',
    title: '[PROJECT TITLE]',
    category: 'Film',
    type: 'video',
    year: '[YEAR]',
    image: IMG.onSetGelLight,
    href: SITE.social.youtube,
  },
  {
    id: 'w5',
    title: '[PROJECT TITLE]',
    category: 'Film',
    type: 'video',
    year: '[YEAR]',
    image: IMG.clapperHeld,
    href: SITE.social.youtube,
  },
  {
    id: 'w10',
    title: '[PROJECT TITLE]',
    category: 'Film',
    type: 'video',
    year: '[YEAR]',
    image: IMG.clapperDesert,
    href: SITE.social.youtube,
  },
  {
    id: 'w11',
    title: '[PROJECT TITLE]',
    category: 'Film',
    type: 'video',
    year: '[YEAR]',
    image: IMG.projector,
    href: SITE.social.youtube,
  },
  {
    id: 'w12',
    title: '[PROJECT TITLE]',
    category: 'Film',
    type: 'video',
    year: '[YEAR]',
    image: IMG.editingSuite,
    href: SITE.social.youtube,
  },

  // Brand Stories — a combo of corporate work and film
  {
    id: 'w2',
    title: '[PROJECT TITLE]',
    category: 'Brand Stories',
    type: 'video',
    year: '[YEAR]',
    image: IMG.studioMic,
    href: SITE.social.youtube,
  },
  {
    id: 'w9',
    title: '[PROJECT TITLE]',
    category: 'Brand Stories',
    type: 'video',
    year: '[YEAR]',
    image: IMG.portraitMan,
    href: SITE.social.youtube,
  },
  {
    id: 'w13',
    title: '[PROJECT TITLE]',
    category: 'Brand Stories',
    type: 'video',
    year: '[YEAR]',
    image: IMG.handshake,
    href: SITE.social.youtube,
  },
  {
    id: 'w6',
    title: '[PROJECT TITLE]',
    category: 'Brand Stories',
    type: 'image',
    year: '[YEAR]',
    image: IMG.cameraFlatlay,
    href: SITE.social.instagram,
  },
  {
    id: 'w14',
    title: '[PROJECT TITLE]',
    category: 'Brand Stories',
    type: 'image',
    year: '[YEAR]',
    image: IMG.brainstormMeeting,
    href: SITE.social.instagram,
  },

  // Photography
  {
    id: 'w3',
    title: '[PROJECT TITLE]',
    category: 'Photography',
    type: 'image',
    year: '[YEAR]',
    image: IMG.portraitWoman,
    href: SITE.social.instagram,
  },
  {
    id: 'w7',
    title: '[PROJECT TITLE]',
    category: 'Photography',
    type: 'image',
    year: '[YEAR]',
    image: IMG.vintageCameraRim,
    href: SITE.social.instagram,
  },
  {
    id: 'w15',
    title: '[PROJECT TITLE]',
    category: 'Photography',
    type: 'image',
    year: '[YEAR]',
    image: IMG.santorini,
    href: SITE.social.instagram,
  },
  {
    id: 'w16',
    title: '[PROJECT TITLE]',
    category: 'Photography',
    type: 'image',
    year: '[YEAR]',
    image: IMG.floatingCamera,
    href: SITE.social.instagram,
  },
  {
    id: 'w17',
    title: '[PROJECT TITLE]',
    category: 'Photography',
    type: 'image',
    year: '[YEAR]',
    image: IMG.mountainLake,
    href: SITE.social.instagram,
  },

  // Graphic Design
  {
    id: 'w4',
    title: '[PROJECT TITLE]',
    category: 'Graphic Design',
    type: 'image',
    year: '[YEAR]',
    image: IMG.designSwatches,
    href: SITE.social.instagram,
  },
  {
    id: 'w8',
    title: '[PROJECT TITLE]',
    category: 'Graphic Design',
    type: 'image',
    year: '[YEAR]',
    image: IMG.designStyleGuide,
    href: SITE.social.instagram,
  },
  {
    id: 'w18',
    title: '[PROJECT TITLE]',
    category: 'Graphic Design',
    type: 'image',
    year: '[YEAR]',
    image: IMG.typewriterNews,
    href: SITE.social.instagram,
  },
  {
    id: 'w19',
    title: '[PROJECT TITLE]',
    category: 'Graphic Design',
    type: 'image',
    year: '[YEAR]',
    image: IMG.galleryHall,
    href: SITE.social.instagram,
  },
]

export const getItemsByCategoryName = (categoryName) =>
  WORK_ITEMS.filter((item) => item.category === categoryName)

// A cross-category taste of the work for the homepage reel — a couple from
// each category, in a fixed but varied order.
export const HIGHLIGHTS = [
  'w1', 'w2', 'w3', 'w4', 'w5', 'w13', 'w15', 'w9', 'w17', 'w8', 'w10', 'w14',
]
  .map((id) => WORK_ITEMS.find((item) => item.id === id))
  .filter(Boolean)
