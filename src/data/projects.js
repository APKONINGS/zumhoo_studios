import { IMG, SITE } from './site'

// Work is organized the way the client actually thinks about their output:
// Film, Brand Stories (a mix of corporate work + film), Photography, and
// Graphic Design. Video items link straight out to the real YouTube channel;
// image items link out to the real Instagram — every link on this page is a
// verified, working URL, never a dead "#". Swap `href` for a specific
// video/post URL per item once real links are supplied; everything else
// (title, year, description) stays a placeholder until then.
export const CATEGORIES = ['Film', 'Brand Stories', 'Photography', 'Graphic Design']

export const WORK_ITEMS = [
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
    id: 'w2',
    title: '[PROJECT TITLE]',
    category: 'Brand Stories',
    type: 'video',
    year: '[YEAR]',
    image: IMG.studioMic,
    href: SITE.social.youtube,
  },
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
    id: 'w4',
    title: '[PROJECT TITLE]',
    category: 'Graphic Design',
    type: 'image',
    year: '[YEAR]',
    image: IMG.designSwatches,
    href: SITE.social.instagram,
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
    id: 'w6',
    title: '[PROJECT TITLE]',
    category: 'Brand Stories',
    type: 'image',
    year: '[YEAR]',
    image: IMG.cameraFlatlay,
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
    id: 'w8',
    title: '[PROJECT TITLE]',
    category: 'Graphic Design',
    type: 'image',
    year: '[YEAR]',
    image: IMG.designStyleGuide,
    href: SITE.social.instagram,
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
    id: 'w10',
    title: '[PROJECT TITLE]',
    category: 'Film',
    type: 'video',
    year: '[YEAR]',
    image: IMG.clapperDesert,
    href: SITE.social.youtube,
  },
]
