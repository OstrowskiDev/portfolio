import { ProjectData } from '@/types/ProjectDada'
import TechStackItem from './TechStackItem'
import ExternalLinksSection from './ExternalLinksSection'
import ProjectCardHeader from './ProjectCardHeader'
import ChallengesSection from './ChallengesSection'
import LearnedSection from './LearnedSection'

export default function ProjectCardWide({
  projectData,
}: {
  projectData: ProjectData
}) {
  return (
    <div className="project-card-content absolute top-[calc((100%-660px)/2)] left-[calc(50vw-290px)] flex flex-col w-[580px] h-[640px] px-6 pt-4 bg-white rounded-xl shadow-[0_0_45px_rgba(0,0,0,.9)] z-20">
      <ProjectCardHeader
        title={projectData.title}
        subtitle={projectData.subtitle}
      />

      <ExternalLinksSection links={projectData.links} />

      <ChallengesSection challenges={projectData.challenges} />

      <LearnedSection learned={projectData.learned} />

      <div className="project-tech-stack-container flex flex-wrap justify-between mt-auto w-full h-[55px] pt-1 border-t border-primary-300">
        {projectData.techStack.map((tech) => {
          return (
            <TechStackItem
              text={tech.text}
              ico={tech?.ico}
              noIcon={tech?.noIcon}
            />
          )
        })}
      </div>
    </div>
  )
}
