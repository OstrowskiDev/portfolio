export type ProjectData = {
  tag: string
  title: string
  subtitle: string
  image: string
  bgColor: string
  links: { text: string; url: string }[]
  learned: string[]
  techStack: { text: string; ico?: string; noIcon?: boolean }[]
}

export interface ProjectsData extends Array<ProjectData> {}

export interface Article {
  slug: string
  tag: string
  time: string
  title: string
  description: string
  created: string
  content: string
}
