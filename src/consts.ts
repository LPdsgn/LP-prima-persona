export type Site = {
  TITLE: string
  DESCRIPTION: string
  AUTHOR: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'LPdsgn',
  DESCRIPTION:
    'astro-erudite is a opinionated, no-frills blogging template—built with Astro, Tailwind, and shadcn/ui.',
  AUTHOR: 'Luigi Pedata',
  EMAIL: 'jason@enscribe.dev',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/jktrn', label: 'GitHub' },
  { href: 'https://twitter.com/enscry', label: 'Twitter' },
  { href: 'jason@enscribe.dev', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]