import ArticleLink from './links/ArticleLink'
import GithubLink from './links/GithubLink'
import { Extra } from '@/types/extra'
import YouTubeLink from './links/YouTubeLink'

export default function ExtraCard({ extra }: { extra: Extra }) {
  const { title, description, highlights, links } = extra

  return (
    <div className="extra-card group flex flex-col w-[240px] h-[240px] p-4  border-b border-r border-primary-300 bg-white shadow-md hover:border-primary-300 transition-colors duration-300 ease-out">
      <h4 className="extra-card-title text-lg font-bold leading-6 text-primary-950">
        {title}
      </h4>

      <p className="extra-card-highlights mt-1 text-[12px] leading-5 font-semibold tracking-wide uppercase text-accent-400 group-hover:text-accent-500 line-clamp-2">
        {highlights.join(' · ')}
      </p>

      <p className="extra-card-description mt-1 text-sm leading-6 font-normal text-primary-700 group-hover:text-primary-800 line-clamp-5">
        {description}
      </p>

      <div className="extra-card-footer flex flex-row justify-between items-end mt-auto">
        <span className="extra-card-something text-xs font-medium text-primary-400">
          something
        </span>

        <div className="extra-card-links flex flex-row items-center gap-1">
          {links.github && (
            <GithubLink
              href={links.github}
              colorClassName="text-primary-500 hover:text-accent-600"
            />
          )}

          {links.youtube && (
            <YouTubeLink
              href={links.youtube}
              colorClassName="text-primary-500 hover:text-accent-600"
            />
          )}

          {links.article && (
            <ArticleLink
              href={links.article}
              colorClassName="text-primary-500 hover:text-accent-600"
            />
          )}
        </div>
      </div>
    </div>
  )
}
