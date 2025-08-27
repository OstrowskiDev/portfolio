export function getNodes(
  ref: React.RefObject<SVGGElement>,
  query: string,
): NodeListOf<SVGPathElement> | null {
  if (!ref.current) return null
  const nodes = ref.current.querySelectorAll<SVGPathElement>(query)
  return nodes
}
