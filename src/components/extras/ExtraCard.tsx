import ArticleLink from './links/ArticleLink'
import GithubLink from './links/GithubLink'
import { Extra } from '@/types/extra'
import YouTubeLink from './links/YouTubeLink'

export default function ExtraCard({ extra }: { extra: Extra }) {
  const { title, description, highlights, links } = extra

  return (
    <div className="extra-card group flex flex-col w-full h-[220px] p-4 border border-primary-200 rounded-xl bg-white hover:border-primary-300 transition-colors duration-300 ease-out">
      <h4 className="extra-card-title text-primary-950 text-sm font-bold">
        {title}
      </h4>

      <p className="extra-card-highlights mt-1 text-accent-500 group-hover:text-accent-600 text-xs font-semibold line-clamp-2">
        {highlights.join(' · ')}
      </p>

      <p className="extra-card-description mt-2 text-primary-600 group-hover:text-primary-700 text-xs font-medium leading-[1.55] line-clamp-4">
        {description}
      </p>

      <div className="extra-card-footer flex flex-row justify-between items-end mt-auto">
        <span className="extra-card-something text-primary-400 text-xs font-semibold">
          something
        </span>

        <div className="extra-card-links flex flex-row gap-1 items-center">
          {links.github && (
            <GithubLink
              href={links.github}
              colorClassName="text-primary-600 hover:text-accent-600"
            />
          )}
          {links.youtube && (
            <YouTubeLink
              href={links.youtube}
              colorClassName="text-primary-600 hover:text-accent-600"
            />
          )}
          {links.article && (
            <ArticleLink
              href={links.article}
              colorClassName="text-primary-600 hover:text-accent-600"
            />
          )}
        </div>
      </div>
    </div>
  )
}
