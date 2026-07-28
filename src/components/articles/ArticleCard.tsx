import { Article } from '@/types'
import Link from 'next/link'

export default function ArticleCard({ article }: { article: Article }) {
  const { slug, title, created, tag, time, description } = article
  return (
    <Link
      href={`/articles/${slug}`}
      className="article group border-b flex flex-row w-full h-[140px] p-4 border-primary-300 hover:bg-primary-100"
    >
      <div className="article-iconography w-2 border-r-[3px] border-primary-300 group-hover:border-accent-400 transition-colors duration-400 ease-out"></div>
      <div className="article-container flex flex-col w-full ml-4">
        <div className="article-tag uppercase text-accent-700 text-xs font-bold tracking-[0.5px] group-hover:translate-x-1 transition-transform duration-200 ease-out">
          {tag}
        </div>
        <div className="article-title font-bold mt-1 text-primary-950 text-lg group-hover:translate-x-1 transition-transform duration-200 ease-out">
          {title}
        </div>
        <div className="article-description text-sm mt-1 text-primary-500 font-semibold leading-[1.55] group-hover:text-primary-700 group-hover:translate-x-1 transition-transform duration-200 ease-out">
          {description}
        </div>
      </div>
      <div className="article-metadata flex flex-col justify-center items-end w-[180px] ml-2">
        <div className="article-creation-data text-sm text-primary-400 font-semibold">
          {created}
        </div>
        <div className="article-read-time text-sm text-primary-400 font-semibold">
          {time}
        </div>
      </div>
    </Link>
  )
}
