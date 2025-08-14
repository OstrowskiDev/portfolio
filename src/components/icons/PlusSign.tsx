// @ts-nocheck

import { SVGProps } from 'react'

interface SvgPlusProps extends SVGProps<SVGSVGElement> {
  svgRef?: React.Ref<SVGGElement>
}

export default function PlusSign({ svgRef }: SvgPlusProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      stroke="black"
      strokeWidth="5"
      ref={svgRef}
    >
      {/* Pozioma kreska */}
      <path d="M 20 50 L 80 50" className="opacity-0" />

      {/* Pionowa kreska */}
      <path d="M 50 20 L 50 80" className="opacity-0" />
    </svg>
  )
}
