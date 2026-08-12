import { ProjectData } from '@/types'
import TechStackItem from './TechStackItem'
import ExternalLinksSection from './ExternalLinksSection'
import ProjectCardHeader from './ProjectCardHeader'
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
  const isActive = index === currentIndex

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
      role="tabpanel"
      aria-label={`Project ${index + 1} of ${totalProjects}`}
      aria-hidden={!isActive}
      tabIndex={isActive ? 0 : -1}
      className={`
        project-card-${index} 
        absolute top-1/2 left-1/2
        flex flex-col 
        w-[540px] h-[540px] tall:h-[680px] 
        px-5 tall:px-6 pt-4 
        bg-primary-50 
        border border-primary-600
        shadow-[0_0_45px_rgba(0,0,0,.9)]
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
        tag={projectData.tag}
        title={projectData.title}
        subtitle={projectData.subtitle}
      />

      <ExternalLinksSection links={projectData.links} />

      <LearnedSection learned={projectData.learned} />

      <div
        role="group"
        aria-label="project tech stack"
        className="project-tech-stack-container flex flex-wrap justify-around items-end gap-x-4 tall:gap-x-0 gap-y-1 mt-auto w-full mb-3 tall:mb-4 pt-1 border-t border-primary-300"
      >
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
