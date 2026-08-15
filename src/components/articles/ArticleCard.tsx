import { Article } from '@/types'
import Link from 'next/link'

export default function ArticleCard({ article }: { article: Article }) {
  const { slug, title, created, tag, time, description } = article
  return (
    <Link
      href={`/articles/${slug}`}
      target={'_blank'}
      rel={'noopener noreferrer'}
      className="article group border-b flex flex-row w-full h-[140px] p-4  border-primary-300 bg-white"
    >
      <div className="article-iconography w-2 border-r-[3px] border-primary-300 group-hover:border-accent-600 transition-colors duration-400 ease-out"></div>
      <div className="article-container flex flex-col w-full min-w-0 ml-4">
        <div className="article-tag uppercase text-accent-600 text-xs font-semibold tracking-[0.5px] group-hover:translate-x-1 transition-transform duration-200 ease-out">
          {tag}
        </div>
        <div className="article-title truncate font-bold mt-1 text-primary-950 text-lg group-hover:translate-x-1 transition-transform duration-200 ease-out">
          {title}
        </div>
        <div className="article-description text-sm mt-1 text-primary-500 font-semibold leading-[1.55] group-hover:text-primary-700 group-hover:translate-x-1 transition-transform duration-200 ease-out overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {description}
        </div>
      </div>
      <div className="article-metadata flex flex-col justify-center items-end w-[120px] ml-2">
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
