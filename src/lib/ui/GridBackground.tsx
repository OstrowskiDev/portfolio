export default function GridBackground({ ...props }) {
  const mainColor = 'hsl(0, 0%, 55%)'
  const secondaryColor = 'hsl(0, 0%, 45%)'

  return (
    <svg
      className="absolute inset-0 z-[10]"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      {...props}
    >
      <defs>
        <pattern
          id="gridPattern"
          x="0"
          y="0"
          width="26.458"
          height="26.458"
          patternUnits="userSpaceOnUse"
        >
          <g>
            <path
              d="M.13 0h26.2"
              style={{
                stroke: mainColor,
                strokeWidth: 0.52916667,
                strokeLinecap: 'square',
              }}
            />
            <path
              d="M.13 13.23h26.2"
              style={{
                stroke: secondaryColor,
                strokeWidth: 0.26458333,
                strokeLinecap: 'square',
              }}
            />
            <path
              d="M13.23.13v26.2"
              style={{
                stroke: secondaryColor,
                strokeWidth: 0.26458333,
                strokeLinecap: 'square',
              }}
            />
            <path
              d="M.002.3v26.2"
              style={{
                stroke: mainColor,
                strokeWidth: 0.258262,
                strokeLinecap: 'square',
              }}
            />
            <path
              d="M.002.13v26.2"
              style={{
                stroke: mainColor,
                strokeWidth: 0.52916667,
                strokeLinecap: 'square',
              }}
            />
          </g>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#gridPattern)" />
    </svg>
  )
}
