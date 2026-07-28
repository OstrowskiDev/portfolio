import { Article } from '@/types'
import content from './from-waiting-to-building.md'
import { calculateReadTime } from '@/lib/helpers'

export const article: Article = {
  slug: `from-waiting-to-building`,
  tag: `transformation`,
  time: calculateReadTime(content),
  created: `Jul 18 2026`,
  title: `From Waiting for Better Software to Building My Own`,
  description: `We knew exactly what we needed. But had absolutely no say in whether it would ever be built.`,
  content,
}
