import { KnownTech, Project } from './projects'
import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  knownTechs: KnownTech[]
  hightlightProjects: Project
}

export type HomePageData = {
  profilePicture: any
  socials: any
  technologies: any
  introduction: any
  page: HomePageInfo
}
