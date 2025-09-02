import { ProjectData } from '@/types/ProjectDada'
import GithubIco from '../icons/GithubIco'
import GlobeIco from '../icons/GlobeIco'
import TextIco from '../icons/TextIco'
import TechStackItem from './TechStackItem'

export default function ProjectCard({
  projectData,
}: {
  projectData: ProjectData
}) {
  return (
    <div
      className="project-card-container relative top-[80px] w-[680px] h-[720px] mt-8 rounded-xl bg-primary-900 bg-no-repeat bg-right-top bg-contain"
      style={{ backgroundImage: "url('/projects/open_palette.png')" }}
    >
      <div className="project-card-content flex flex-col  relative w-[600px] h-[500px] mt-[180px] mx-auto px-8 pt-4 bg-white rounded-xl">
        <h3 className="project-title text-3xl text-primary-950 font-bold">
          {projectData.title}
        </h3>
        <p className="project-card-subtitle mt-3">{projectData.subtitle}</p>

        {/* to najlepiej dodać jako osobny komponent */}
        <div className="external-links w-full h-[80px] py-16 px-12 flex justify-around items-center">
          <a className="link-live flex flex-col items-center w-[72px] h-[76px] text-primary-950">
            <GlobeIco width={56} />
            <p className="link-text text-sm mt-auto">
              {projectData.links[0].text}
            </p>
          </a>

          <a className="link-github flex flex-col items-center w-[80px] h-[76px] text-primary-950">
            <GithubIco width={50} />
            <p className="link-text text-sm mt-auto">
              {projectData.links[1].text}
            </p>
          </a>

          <a className="link-case-study flex flex-col items-center w-[80px] h-[76px] text-primary-950">
            <TextIco width={50} />
            <p className="link-text text-sm mt-auto">
              {projectData.links[2].text}
            </p>
          </a>
        </div>

        <div className="project-card-challenges">
          <h3 className="challenges-label text-sm font-semibold">
            Challenges:
          </h3>
          <ul className="challenges-list list-disc pl-5">
            {projectData.challenges.map((text, i) => {
              return (
                <li key={i} className="challenge-description text-sm">
                  {text}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="project-card-learned mt-4">
          <h3 className="learned-label text-sm font-semibold">
            What I learned:
          </h3>
          <ul className="learned-list list-disc pl-5">
            {projectData.learned.map((text, i) => {
              return (
                <li key={i} className="challenge-description text-sm">
                  {text}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="project-tech-stack-container flex flex-wrap justify-between mt-auto w-full h-[55px] pt-1 border-t border-primary-300">
          {projectData.techStack.map((tech) => {
            return (
              <TechStackItem
                text={tech.text}
                ico={tech?.ico}
                hasIco={tech?.hasIco}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
