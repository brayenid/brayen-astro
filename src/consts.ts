import type { Site, Metadata, Socials } from '@types'

export const SITE: Site = {
  NAME: 'Brayen Luhat',
  EMAIL: 'bfenomenal@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3
}

export const HOME: Metadata = {
  TITLE: 'Beranda',
  DESCRIPTION: 'Sebuah ruang menulis seorang pembelajar yang akan terus sebagai pembelajar.'
}

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'Beberapa tulisan yang mungkin tidak saling berkaitan satu sama lain.'
}

export const WORK: Metadata = {
  TITLE: 'Yang Saya Kerjakan',
  DESCRIPTION: 'Beberapa hal yang saya kerjakan.'
}

export const PROJECTS: Metadata = {
  TITLE: 'Proyek',
  DESCRIPTION: 'Beberapa hal yang telah saya kerjakan.'
}

export const SOCIALS: Socials = [
  {
    NAME: 'github',
    HREF: 'https://github.com/brayenid'
  }
]
