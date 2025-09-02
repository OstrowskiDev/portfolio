export type ProjectData = {
  title: string
  subtitle: string
  links: { text: string; url: string }[]
  challenges: string[]
  learned: string[]
  techStack: { text: string; ico?: string; hasIco?: boolean }[]
}

export interface ProjectsData extends Array<ProjectData> {}
