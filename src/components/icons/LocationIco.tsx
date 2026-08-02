import type { SVGProps } from 'react'

type LocationIcoProps = SVGProps<SVGSVGElement> & {
  size?: number | string
  color?: string
}

export default function LocationIco({
  size = 18,
  color = 'currentColor',
  style,
  ...props
}: LocationIcoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width={size}
      height={size}
      style={{ color, ...style }}
      {...props}
    >
      <path
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s6-5.633 6-11a6 6 0 1 0-12 0c0 5.367 6 11 6 11Z"
      />
      <circle cx="12" cy="10" r="2.25" strokeWidth={1.8} />
    </svg>
  )
}
