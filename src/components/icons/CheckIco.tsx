import type { SVGProps } from 'react'

export default function CheckIco(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="check-ico"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}
