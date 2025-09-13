import { ProjectData } from '@/types/ProjectDada'

export default function ProjectBgImage({
  projectData,
  active,
}: {
  projectData: ProjectData
  active: boolean
}) {
  return (
    <div
      className="project-background-image 
                absolute top-0 left-0
                w-full h-[calc(100vh-80px)]
                border-[12px] overflow-hidden
                font-inter
                transition-opacity duration-500 ease-in"
      style={{
        borderColor: projectData.bgColor,
        backgroundColor: projectData.bgColor,
        backgroundImage: `url('./projects/${projectData.image}')`,
        backgroundSize: 'auto 100%',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        opacity: active ? 1 : 0,
      }}
    ></div>
  )
}
