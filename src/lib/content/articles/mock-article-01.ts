import { Article } from '@/types'
import content from './mock-article-01.md'
import { calculateReadTime } from '@/lib/helpers'

export const article: Article = {
  slug: `mock-article-01`,
  tag: `mock`,
  time: calculateReadTime(content),
  created: `Jul 30 2026`,
  title: `mock-article-01`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  content,
}
