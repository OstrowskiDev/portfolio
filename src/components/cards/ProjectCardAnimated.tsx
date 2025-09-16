import { ProjectData } from '@/types/ProjectDada'
import TechStackItem from './TechStackItem'
import ExternalLinksSection from './ExternalLinksSection'
import ProjectCardHeader from './ProjectCardHeader'
import ChallengesSection from './ChallengesSection'
import LearnedSection from './LearnedSection'

export default function ProjectCardAnimated({
  index,
  projectData,
  currentIndex,
  totalProjects,
}: {
  index: number
  projectData: ProjectData
  currentIndex: number
  totalProjects: number
}) {
  const position = index - currentIndex
  const absPosition = Math.abs(position)

  // Constants
  const CARD_OFFSET = 40
  const SCALE_FACTOR = 0.08
  const BASE_Z_INDEX = 10

  // Calculate styles
  const translateX = position * CARD_OFFSET
  const scale = 1 - absPosition * SCALE_FACTOR
  const zIndex = BASE_Z_INDEX - absPosition
  const opacity = position < 3 || position > -3 ? 1 : 0

  return (
    <div
      key={index}
      role="tabpanel"
      aria-label={`Project ${index + 1} of ${totalProjects}`}
      aria-hidden={index !== currentIndex}
      tabIndex={index === currentIndex ? 0 : -1}
      className={`
        project-card-${index} 
        absolute top-1/2 left-1/2
        flex flex-col 
        w-[580px] h-[640px] px-6 pt-4 
        bg-white rounded-xl shadow-[0_0_45px_rgba(0,0,0,.9)]
        font-inter
        transition-transform duration-500 ease-out
        `}
      style={{
        transform: `translateX(-50%) translateX(${translateX}px) 
        translateY(-50%) scale(${scale})`,
        zIndex: zIndex,
        opacity: opacity,
      }}
    >
      <ProjectCardHeader
        title={projectData.title}
        subtitle={projectData.subtitle}
      />

      <ExternalLinksSection links={projectData.links} />

      <ChallengesSection challenges={projectData.challenges} />

      <LearnedSection learned={projectData.learned} />

      <div className="project-tech-stack-container flex flex-wrap justify-between mt-auto w-full h-[55px] pt-1 border-t border-primary-300">
        {projectData.techStack.map((tech, i) => {
          return (
            <TechStackItem
              key={i}
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
