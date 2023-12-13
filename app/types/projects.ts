import type { RichTextContent } from '@graphcms/rich-text-types'

export type KnownTech = {
  // map(
  //   arg0: (tech: any) => import('react').JSX.Element,
  // ): import('react').ReactNode
  iconSvg: string
  name: string
}

export type ProjectSection = {
  title: string
  image: {
    url: string
  }
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  technologies: KnownTech[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  description: {
    raw: RichTextContent
  }
  liveProjectUrl?: string
  githubUrl?: string
}
