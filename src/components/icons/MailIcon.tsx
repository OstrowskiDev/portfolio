import type { SVGProps } from 'react'

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M4.5 6.75h15a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z"
        strokeWidth={1.8}
      />
      <path d="m4 8 8 5.5L20 8" strokeWidth={1.8} />
    </svg>
  )
}
