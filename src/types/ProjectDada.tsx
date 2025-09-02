export type ProjectData = {
  title: string
  subtitle: string
  image: string
  links: { text: string; url: string }[]
  challenges: string[]
  learned: string[]
  techStack: { text: string; ico?: string; noIcon?: boolean }[]
}

export interface ProjectsData extends Array<ProjectData> {}
