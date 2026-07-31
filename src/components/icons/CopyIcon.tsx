import type { SVGProps } from 'react'

export function CopyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2.25" strokeWidth={1.8} />
      <path
        d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"
        strokeWidth={1.8}
      />
    </svg>
  )
}
