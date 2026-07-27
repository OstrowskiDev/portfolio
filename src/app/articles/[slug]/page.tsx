import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { articles } from '@/lib/content/articles'
import styles from './article.module.css'
import NavBar from '@/components/navigation/NavBar'
// !!!! navbar currently not used, decide to add it or remove commented out lines

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const { tag, time, title, content, created } = article

  return (
    <main className="article-page-container mx-auto py-8">
      <article className={`${styles.article} article-page w-full`}>
        <span className={`${styles.eyebrow} article-tag`}>{tag}</span>
        <h1 className="article-title">{title}</h1>
        <span className={`${styles.meta} article-meta`}>
          {created} · {time}
        </span>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  )
}
