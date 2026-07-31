export function getNodes(
  ref: React.RefObject<SVGGElement>,
  query: string,
): NodeListOf<SVGPathElement> | null {
  if (!ref.current) return null
  const nodes = ref.current.querySelectorAll<SVGPathElement>(query)
  return nodes
}

export function calculateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const wordsPerMinute = 200
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes}min`
}

export async function copyToClipboard(value: string): Promise<boolean> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return false

  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    return false
  }
}
