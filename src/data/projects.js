import { IMG } from './site'

// Placeholder project data. Structure is production-ready — swap image/title/
// category/year/description with real Zumhoo credits when available. Nothing
// here is a real production credit; every entry is clearly a placeholder.
// Order matters: the grid lays these out left-to-right, top-to-bottom, and
// each `size` maps directly to how much room it takes in that flow (see
// WorkGrid.jsx SIZE_CLASSES). Row 1 = large + medium. Row 2 = three small.
// Row 3 = one full-width. Reorder both together if you change the shape.
export const PROJECTS = [
  {
    id: 'p1',
    title: '[PROJECT TITLE]',
    category: 'Film',
    year: '[YEAR]',
    image: IMG.onSetGelLight,
    description: '[PROJECT DESCRIPTION]',
    featured: true,
    size: 'large',
  },
  {
    id: 'p2',
    title: '[PROJECT TITLE]',
    category: 'Photography',
    year: '[YEAR]',
    image: IMG.vintageCameraRim,
    description: '[PROJECT DESCRIPTION]',
    size: 'medium',
  },
  {
    id: 'p3',
    title: '[PROJECT TITLE]',
    category: 'Television',
    year: '[YEAR]',
    image: IMG.clapperDesert,
    description: '[PROJECT DESCRIPTION]',
    size: 'small',
  },
  {
    id: 'p5',
    title: '[PROJECT TITLE]',
    category: 'Photography',
    year: '[YEAR]',
    image: IMG.portraitWoman,
    description: '[PROJECT DESCRIPTION]',
    size: 'small',
  },
  {
    id: 'p6',
    title: '[PROJECT TITLE]',
    category: 'Film',
    year: '[YEAR]',
    image: IMG.clapperHeld,
    description: '[PROJECT DESCRIPTION]',
    size: 'small',
  },
  {
    id: 'p4',
    title: '[PROJECT TITLE]',
    category: 'Brand & Commercial',
    year: '[YEAR]',
    image: IMG.cameraFlatlay,
    description: '[PROJECT DESCRIPTION]',
    size: 'wide',
  },
]

export const FEATURED_PROJECT = {
  title: '[PROJECT TITLE]',
  description: '[SHORT DESCRIPTION — a line or two once a real title is confirmed.]',
  duration: '00:00',
  image: IMG.onSetGelLight,
}

export const CAPABILITIES = [
  {
    n: '01',
    title: 'Film & Television',
    text: '[CAPABILITY DESCRIPTION]',
    image: IMG.projector,
  },
  {
    n: '02',
    title: 'Video Production',
    text: '[CAPABILITY DESCRIPTION]',
    image: IMG.onSetGelLight,
  },
  {
    n: '03',
    title: 'Photography',
    text: '[CAPABILITY DESCRIPTION]',
    image: IMG.cameraFlatlay,
  },
  {
    n: '04',
    title: 'Brand & Commercial Content',
    text: '[CAPABILITY DESCRIPTION]',
    image: IMG.studioMic,
  },
  {
    n: '05',
    title: 'Creative Direction',
    text: '[CAPABILITY DESCRIPTION]',
    image: IMG.filmReels,
  },
  {
    n: '06',
    title: 'Training / Consulting',
    text: '[CAPABILITY DESCRIPTION]',
    image: IMG.vintageCameraRim,
  },
]

export const BTS_GALLERY = [
  { image: IMG.clapperHeld, tall: true },
  { image: IMG.onSetGelLight, tall: false },
  { image: IMG.filmReels, tall: false },
  { image: IMG.portraitMan, tall: true },
  { image: IMG.clapperDesert, tall: false },
  { image: IMG.studioMic, tall: false },
  { image: IMG.cameraFlatlay, tall: true },
  { image: IMG.portraitWoman, tall: false },
]

export const RECOGNITION = [
  { award: '[AWARD]', project: '[PROJECT]', year: '[YEAR]' },
  { award: '[AWARD]', project: '[PROJECT]', year: '[YEAR]' },
  { award: '[AWARD]', project: '[PROJECT]', year: '[YEAR]' },
]

export const JOURNAL = [
  {
    category: 'Film',
    title: '[ARTICLE TITLE]',
    date: '[DATE]',
    image: IMG.filmReels,
  },
  {
    category: 'Behind the Scenes',
    title: '[ARTICLE TITLE]',
    date: '[DATE]',
    image: IMG.clapperHeld,
  },
  {
    category: 'Culture',
    title: '[ARTICLE TITLE]',
    date: '[DATE]',
    image: IMG.typewriterNews,
  },
]

export const TIMELINE = [
  { label: 'Founding', detail: '[DETAIL]' },
  { label: 'Early Productions', detail: '[DETAIL]' },
  { label: 'Major Projects', detail: '[DETAIL]' },
  { label: 'Today', detail: '[DETAIL]' },
]
