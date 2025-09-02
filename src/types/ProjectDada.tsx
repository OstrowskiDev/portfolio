export type ProjectData = {
  title: string
  subtitle: string
  image: string
  bgColor: string
  links: { text: string; url: string }[]
  challenges: string[]
  learned: string[]
  techStack: { text: string; ico?: string; noIcon?: boolean }[]
}

export interface ProjectsData extends Array<ProjectData> {}
