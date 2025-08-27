// @ts-nocheck

export default function ArchitectureBpMobile({
  svgRef,
  axesRef,
  structRef,
  descriptRef,
  twClasses,
  ...props
}) {
  const a = '#fff' //axes color
  const s = '#fff' //structure color
  const d = '#fff' // description color

  return (
    <svg
      className={`architecture-blueprint-masters-thesis relative top-[190px] pl-2 z-50 ${twClasses}`}
      style={{ transformOrigin: 'left center' }}
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 50 415 662"
      width="415px"
      height="662px"
      {...props}
    >
      <defs>
        <linearGradient
          ref={axesRef}
          id="axes-gradient"
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="49.9%" stopColor="white" stopOpacity="1" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          ref={structRef}
          id="struct-gradient"
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="49.9%" stopColor="white" stopOpacity="1" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          ref={descriptRef}
          id="descript-gradient"
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="49.9%" stopColor="white" stopOpacity="1" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <mask id="draw-axes-mask">
          <rect
            x="0"
            y="0"
            width="2000"
            height="2000"
            fill="url(#axes-gradient)"
          />
        </mask>

        <mask id="draw-struct-mask">
          <rect
            x="0"
            y="0"
            width="2000"
            height="2000"
            fill="url(#struct-gradient)"
          />
        </mask>

        <mask id="draw-descript-mask">
          <rect
            x="0"
            y="0"
            width="2000"
            height="2000"
            fill="url(#descript-gradient)"
          />
        </mask>
      </defs>

      <g className="struct-fill opacity-0">
        <path
          d="M22.58 174.415h1.5v.75h-1.5z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M24.08 174.415h16.493v.75H24.08z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M44.085 175.165H40.58v-.75h3.505z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M80.33 175.165H53.085v-.75H80.33z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M.08 174.415h22.5v.75H.08z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M38.83 135.165h2v2h-2z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M1.83 137.165H.033v-2H1.83z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M1.83 98.165H.033v-2H1.83z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M38.83 96.165h2v2h-2z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M38.83 57.165h2v2h-2z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M1.83 59.165H.033v-2H1.83z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M76.929 45.365v-.4h1.151v.4zM.08 135.165V17.592h1.5v117.573zm38.75 2v-2h2v2zm39.25-66.25h2.25v.5h-2.25zm0 13h2.25v.5h-2.25zm0 13h2.25v.5h-2.25zm0 13h2.25v.5h-2.25zm0 13h2.25v.5h-2.25zm0 13h2.25v.5h-2.25zm0 13h2.25v.5h-2.25zm0 13h2.25v.5h-2.25zm0-130h2.25v.5h-2.25zm0 13h2.25v.5h-2.25zm0 13h2.25v.5h-2.25zm0-39h1v.5h-1zm-51-1.25v2.25h-.5v-2.25zm-13 0v2.25h-.5v-2.25z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M1.08 17.665v2.25h-.5v-2.25zm39 0v2.25h-.5v-2.25zm26 0v2.25h-.5v-2.25zm-13 0v2.25h-.5v-2.25zm26 1.25v1h-.5v-1zm-79 .927H.033v-2.25H.08zm0 155.323H.033v-4.059l.047.125zm0-104.898H.033v-.75H.08zm0 27.273H.033v-.75H.08zm0 13.897H.033v-.5H.08z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M.08 111.437H.033v-.5H.08zm0 14.475H.033v-.75H.08zm1.103 48.503H.08v-3.184zm77.634.6h.3v.15h-.3z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M80.33 175.165h-2.113v-.75l2.113.003z"
          style={{
            fill: s,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
      </g>
      <g className="descript-fill opacity-0">
        <path
          d="M60.08 149.365v-.4h18v.4z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M60.08 136.365v-.4h18v.4z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M60.08 110.365v-.4h18v.4z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M60.08 45.365v-.4h1.151v.4z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M60.08 97.365v-.4h18v.4z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M60.08 162.365v-.4h18v.4z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M60.08 123.365v-.4h18v.4z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M19.18 159.592v-23.227h.4v23.227zm0 14.823v-10.323h.4v10.323zm41.3-129.45v1.151h-.4v-1.15zm-.4 39.4v-.4h18v.4zm0-13v-.4h18v.4zm0 38.6h18v.4h-18z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M1.83 136.495v-.5h17.75v.5zm17.75-2.961v2.381h-.5v-2.381zm0-21.738h-.5v-2.131h.5zm0-4.262v2.131h-.5v-2.131zm0-21.838h-.5v-2.13h.5z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M19.58 81.734v2.131h-.5v-2.13zm0 4.262h-.5v-2.13h.5zm20.5-66.081v25.65h-.5v-25.65zm-38.25 38.5v-.5h17.668v.5zm58.25-.05v-.4h.4v.4z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M60.08 58.365v-.4h18v.4zm-60 61.718H.033v-.25H.08zm0-17.543H.033v-.25H.08z"
          style={{
            fill: d,
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
          }}
          transform="scale(3.77953)"
        />
      </g>
      <g mask="url(#draw-descript-mask)" className="descript opacity-0">
        <path
          d="M55.78 105.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M19.38 159.592a4.5 4.5 0 0 1 4.5 4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M55.78 118.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M55.78 131.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M55.78 144.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M55.78 157.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M55.78 170.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M25.34 167.698a1.69 1.69 0 1 0-3.381 0 1.69 1.69 0 0 0 3.38 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M26.681 171.057a2.54 2.54 0 1 0-5.08 0 2.54 2.54 0 0 0 5.08 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M55.78 92.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M55.78 79.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M55.78 66.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M25.518 45.365a4.5 4.5 0 0 1-4.5 4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M64.177 32.629a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M58.273 26.061a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M62.506 26.167a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M65.87 28.74a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M67.077 32.8a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M41.266 105.349a2.22 2.22 0 1 0-4.44 0 2.22 2.22 0 0 0 4.44 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M38.472 83.719a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M41.72 83.719a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M44.97 83.719a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M31.93 57.437a2.583 2.583 0 1 0-5.167 0 2.583 2.583 0 0 0 5.166 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M32.519 60.35a1.683 1.683 0 1 0-3.367 0 1.683 1.683 0 0 0 3.367 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M31.062 63.057a1.785 1.785 0 1 0-3.57 0 1.785 1.785 0 0 0 3.57 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M51.11 57.096a2.583 2.583 0 1 0-5.165 0 2.583 2.583 0 0 0 5.166 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M49.122 60.283a1.8 1.8 0 1 0-3.599 0 1.8 1.8 0 0 0 3.6 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M50.789 62.594a.717.717 0 1 0-1.433 0 .717.717 0 0 0 1.433 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M37.148 58.74a1.684 1.684 0 1 0-3.368 0 1.684 1.684 0 0 0 3.367 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M43.399 62.11a1.684 1.684 0 1 0-3.367 0 1.684 1.684 0 0 0 3.367 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M35.223 83.719a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M55.78 53.253a4.5 4.5 0 0 1 4.5-4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M48.136 45.165a4.5 4.5 0 0 1-4.5 4.5"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M71.547 33.606a27 27 0 0 1 2.582 1.808"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M70.884 42.399a27 27 0 0 1-3.047-.806"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M74.287 38.631q-.39.922-.842 1.814"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M74.057 38.534a28 28 0 0 1-.835 1.798"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M53.915 35.297a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M56.689 38.497a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M60.814 39.456a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M64.715 37.807a1.05 1.05 0 1 0-2.1 0 1.05 1.05 0 0 0 2.1 0"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M60.08 149.365h18m0 0v-.4m0 0h-18m0 0v.4m0-13h18m0 0v-.4m0 0h-18m0 0v.4m0-26h18m0 0v-.4m0 0h-18m0 0v.4m.4-65h.751m0 0v-.4m0 0H60.08m0 52.4h18m0 0v-.4m0 0h-18m0 0v.4m0 65h18m0 0v-.4m0 0h-18m0 0v.4m0-39h18m0 0v-.4m0 0h-18m0 0v.4m.2-18.112h-4.5m4.5 0v4.712m0-9.212v-3.388m-41.1 39.13v23.097m0 0h.4m0 0v-23.227m-.4 38.05h.4m0 0v-10.323m0 0h-.4m0 0v10.323m.2-10.323h4.5m36.6-118.727v.751m0 .001h-.4m0 0v-1.152m0 0h.4m-.4 39.4h18m0 0v-.4m0 0h-18m0 0v.4m0-13h18m0 0v-.4m0 0h-18m0 0v.4m0 38.6h18m0 0v.4m0 0h-18m0 0v-.4m5.343-6.556v2.05m0 0h-2.05m0 0v-2.05m0 0h2.05m2.689 6.306h-7.43m.001 0v-3.919m0 0h7.43m-.001 0v3.919m0 0v-4.8m0 0H69.9m0 0v4.8m0 0h-1.788m1.788 0h7.43m0 0v-3.919m0 0H69.9m0 0v3.919m2.69-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-6.298 5.691v.326m0 0h-3.448m0 0v-.326m0 0h3.448m5.428 0v.326m0 0h3.45m0 0v-.326m0 0h-3.45m-4.487-11.485v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.89m0 .001H63.687m0 0v-1.89m7.093-.001v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639M60.28 118.253h-4.5m4.5 0v4.712m0-9.212v-3.388m0 20.888h-4.5m4.5 0v4.712m0-9.212v-3.388m0 20.888h-4.5m4.5 0v4.712m0-9.212v-3.388m0 20.888h-4.5m4.5 0v4.712m0-9.212v-3.388m0 20.888h-4.5m4.5 0v4.712m0-9.212v-3.388m6.953.25v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.891m0 0H63.687m0 0v-1.891m7.093 0v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639m-13.643 11.55H77.33m0 0v-3.919m0 0H60.683m0 0v3.919m7.469-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-.87 5.691v.326m0 0h3.449m-.001 0v-.326m0 0h-3.448m-.049-23.935v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.891m0 0H63.687m0 0v-1.891m7.093 0v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639m-13.643 11.55H77.33m0 0v-3.919m0 0H60.683m0 0v3.919m7.469-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-.87 5.691v.326m0 0h3.449m-.001 0v-.326m0 0h-3.448m-.049-23.935v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.891m0 0H63.687m0 0v-1.891m7.093 0v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639m-13.643 11.55H77.33m0 0v-3.919m0 0H60.683m0 0v3.919m7.469-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-.87 5.691v.326m0 0h3.449m-.001 0v-.326m0 0h-3.448m-1.859-31.141v2.05m0 0h-2.05m0 0v-2.05m0 0h2.05m2.689 6.306h-7.43m.001 0v-3.919m0 0h7.43m-.001 0v3.919m0 0v-4.8m0 0H69.9m0 0v4.8m0 0h-1.788m1.788 0h7.43m0 0v-3.919m0 0H69.9m0 0v3.919m2.69-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-6.298 5.691v.326m0 0h-3.448m0 0v-.326m0 0h3.448m5.428 0v.326m0 0h3.45m0 0v-.326m0 0h-3.45m-4.487-11.485v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.891m0 0H63.687m0 0v-1.891m7.093 0v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639m-8.903 18.794v2.05m0 0h-2.05m0 0v-2.05m0 0h2.05m2.689 6.306h-7.43m.001 0v-3.919m0 0h7.43m-.001 0v3.919m0 0v-4.8m0 0H69.9m0 0v4.8m0 0h-1.788m1.788 0h7.43m0 0v-3.919m0 0H69.9m0 0v3.919m2.69-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-6.298 5.691v.326m0 0h-3.448m0 0v-.326m0 0h3.448m5.428 0v.326m0 0h3.45m0 0v-.326m0 0h-3.45m-4.487-11.485v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.891m0 0H63.687m0 0v-1.891m7.093 0v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639m-63.402 36.081v-16.627m0 0H6.306m0 0v16.627m0 0h4.618m2.538-13.878h-2.05m0 0v-2.05m0 0h2.05m0 0v2.05m0 6.5h-2.05m0 0v-2.05m0 0h2.05m0 0v2.05m0 3.25h-2.05m0 0v-2.05m0 0h2.05m0 0v2.05m0 3.25h-2.05m0 0v-2.05m0 0h2.05m0 0v2.05m-9.694-13h2.05m0 0v-2.05m0 0h-2.05m0 0v2.05m0 6.5h2.05m0 0v-2.05m0 0h-2.05m0 0v2.05m0 3.25h2.05m0 0v-2.05m0 0h-2.05m0 0v2.05m0 3.25h2.05m0 0v-2.05m0 0h-2.05m0 0v2.05m9.694-9.75h-2.05m0 0v-2.05m0 0h2.05m0 0v2.05m-9.694 0h2.05m0 0v-2.05m0 0h-2.05m0 0v2.05m4.968-29.946v-1.824m0 0h3.428m0 0v1.824m0 0H8.736m-3.578 0v-1.824m0 0h3.428m0 0v1.824m0 0H5.158m-3.578 0v-1.824m0 0h3.428m0 0v1.824m0 0H1.58m7.156-8.355v-1.824m0 0h3.428m0 0v1.824m0 0H8.736m-3.578 0v-1.824m0 0h3.428m0 0v1.824m0 0H5.158m-3.578 0v-1.824m0 0h3.428m0 0v1.824m0 0H1.58m42.844 33.414v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-11.803 0v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m14.718 3.177v-4.556m0 0h1.652m-.001 0v6.208m1.653 1.652v-8.257m0 0h-1.652m-.001 0v.397m-1.651 4.556H30.635m-1.652 1.652h19.24m2.42 1.652H27.33m0 0v-1.652m1.653 0H48.99M1.965 102.696h3.092m0 0V91.874m0 0H1.965m0 0v10.822m1.176 0V91.874m-1.176 7.23H3.14m-1.175-3.622H3.14m8.951 7.079V91.769m0 .001h1.653m0 0v10.791m0 0h-1.653m-1.651-.398h1.651m-1.651-9.996h1.651m-1.651 0v9.996M7.524 96.14v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m33.701 72.541v-3.079m0 0H32.57m0 0v3.079m0 0h8.654m-29.06-41.162v1.823m0 0H8.736m0 0v-1.823m3.428 0H8.736m-.15 0v1.823m0 0H5.158m0 0v-1.823m3.428 0H5.158m-.15 0v1.823m0 0H1.58m0 0v-1.823m3.428 0H1.58m30.202 42.002v2.893m0 0h10.23m.001 0v-2.893m0 0h.538m-.001 0v3.552m0 0H31.285m-.001 0v-3.552m0 0h.498m0 .15h10.23m-6.82 0v2.743m3.411-2.743v2.743m26.82-82.004v2.05m0 0h-2.05m0 0v-2.05m0 0h2.05m2.689 6.305h-7.43m.001 0v-3.919m0 0h7.43m-.001 0v3.92m0-.001v-4.8m0 0H69.9m0 0v4.8m0 0h-1.788m1.788 0h7.43m0 0v-3.919m0 0H69.9m0 0v3.92m2.69-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-6.298 5.69v.326m0 0h-3.448m0 0V96.1m0 0h3.448m5.428 0v.326m0 0h3.45m0 0V96.1m0 0h-3.45m-4.487-11.485v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.89m0 .001H63.687m0 0v-1.89m7.093-.001v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639m-8.903-7.205v2.05m0 0h-2.05m0 0v-2.05m0 0h2.05m2.689 6.305h-7.43m.001 0v-3.919m0 0h7.43m-.001 0v3.92m0-.001v-4.8m0 0H69.9m0 0v4.8m0 0h-1.788m1.788 0h7.43m0 0v-3.919m0 0H69.9m0 0v3.92m2.69-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-6.298 5.69v.326m0 0h-3.448m0 0V83.1m0 0h3.448m5.428 0v.326m0 0h3.45m0 0V83.1m0 0h-3.45m-4.487-11.485v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.89m0 .001H63.687m0 0v-1.89m7.093-.001v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639m-13.643-.9H77.33m0 0v-3.919m0 0H60.683m0 0v3.92m7.469-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-.87 5.69v.326m0 0h3.449m-.001 0V70.1m0 0h-3.448M60.28 92.253h-4.5m4.5 0v4.712m0-9.212v-3.388m0-5.112h-4.5m4.5 0v4.712m0-9.212v-3.388m0-5.112h-4.5m4.5 0v4.712m0-9.212v-3.388m-41.1 78.13H1.83m0 0v-.5m0 0h17.75m0 0v.5m-.5-.58v-2.381m0 0h.5m0 0v2.381m-.5-26.25v2.131m0 0h.5m0 0v-2.131m-.5 0v-2.131m0 0h.5m0 0v2.131m0-23.969v-2.13m-.5.299v-2.13m0-.001h.5m0 0v2.131m-.5 0v2.131m0 0h.5m0 0v-2.13M2.287 25.774h-.326m-.001 0v-3.448m0 0h.327m0 0v3.448m0 5.429h-.326m-.001 0v3.449m0 0h.327m0 0v-3.449m5.691-6.298h-2.05m0 0v-2.05m0 0h2.05m0 0v2.05m-6.306 2.69v-7.43m0 0h3.92m-.001 0v7.43m0 0h-3.92m.001 0h4.8m0 0v1.788m0 0h-4.8m0 0v-1.788m0 1.788v7.43m0-.001h3.92m-.001 0v-7.43m0 .001h-3.92m6.307 2.69h-2.05m0 0v2.05m0 0h2.05m0 0v-2.05m13.513-6.299h-.326m0 0v-3.448m0 0h.326m0 0v3.448m0 5.429h-.326m0 0v3.449m0 0h.326m0 0v-3.449m5.691-6.298h-2.05m0 0v-2.05m0 0h2.05m0 0v2.05m-6.306 2.69v-7.43m0 0h3.92m-.001 0v7.43m0 0h-3.92m.001 0h4.8m.001 0v1.788m0 0h-4.801m0 0v-1.788m0 1.788v7.43m0-.001h3.92m-.001 0v-7.43m0 .001h-3.92m6.307 2.69h-2.05m0 0v2.05m0 0h2.05m0 0v-2.05m-7.422-6.299h.327m0 0v-3.448m0 0h-.327m0 0v3.448m0 5.429h.327m0 0v3.449m0 0h-.327m0 0v-3.449m-5.69-6.298h2.05m0 0v-2.05m0 0h-2.05m0 0v2.05m6.306 2.69v-7.43m0 0h-3.92m.001 0v7.43m0 0h3.919m0 0h-4.8m-.001 0v1.788m0 0h4.8m.001 0v-1.788m0 1.788v7.43m0-.001h-3.92m.001 0v-7.43m0 .001h3.919m-6.306 2.69h2.05m0 0v2.05m0 0h-2.05m0 0v-2.05m1.81 21.028h1.824m0 0v3.428m0 0h-1.823m-.001 0v-3.428m0-3.578h1.824m0 0v3.428m0 0h-1.823m-.001 0v-3.428m0-3.578h1.824m0 0v3.428m0 0h-1.823m-.001 0v-3.428m2.882-6.395v-1.823m0 0h-3.428m0 0v1.824m0-.001h3.428m3.578 0v-1.823m0 0h-3.428m0 0v1.824m0-.001h3.428m3.578 0v-1.823m0 0H22.49m0 0v1.824m0-.001h3.428m-4.9 5.815v4.5m17.812 8.3h-3.69m4.94-38.25v25.65m0 0h-.5m0 0v-25.65m0 0h.5M19.33 133.534v-21.738m0-30.062V45.365m-17.5 12.55h17.668m0 0v.5m0 0H1.83m3.178 77.5v-1.823m0 0H1.58m0 0v1.073m.25.75h3.178m3.578 0v-1.823m0 0H5.158m0 0v1.823m0 0h3.428m3.578 0v-1.823m0 0H8.736m0 0v1.823m0 0h3.428m-3.428-62.53v3.647m0 0h3.428m0 0v-3.647m0 0H8.736m3.428 1.824H8.736m-3.578-1.824v3.647m0 0h3.428m0 0v-3.647m0 0H5.158m3.428 1.824H5.158M1.58 73.385v3.647m0 0h3.428m0 0v-3.647m0 0H1.58m3.428 1.824H1.58m7.156 6.531v3.647m0 0h3.428m0 0v-3.646m0-.001H8.736m3.428 1.824H8.736M5.158 81.74v3.647m0 0h3.428m0 0v-3.646m0-.001H5.158m3.428 1.824H5.158M1.58 81.74v3.647m0 0h3.428m0 0v-3.646m0-.001H1.58m3.428 1.824H1.58m7.156-18.575v3.646m0 0h3.428m0 0V64.99m0-.001H8.736m3.428 1.823H8.736m-3.578-1.823v3.646m0 0h3.428m0 0V64.99m0-.001H5.158m3.428 1.823H5.158M1.58 64.989v3.646m0 0h3.428m0 0V64.99m0-.001H1.58m3.428 1.823H1.58m3.428-8.397v1.824m0 0H1.58m.25-1.824h3.178m3.578 0v1.824m0 0H5.158m0 0v-1.824m0 0h3.428m3.578 0v1.824m0 0H8.736m0 0v-1.824m0 0h3.428m18.471 88.943v-4.556m0 0h-1.652m0 0v6.208m-1.653 1.652v-8.257m0 0h1.653m0 0v.397m5.503-8.46v3.647m0 0h3.428m0 0v-3.647m0 0h-3.428m3.428 1.823h-3.428m-3.578-1.823v3.647m0 0h3.428m0 0v-3.647m0 0h-3.428m3.428 1.823h-3.428m14.266-1.823v3.647m0 0h-3.428m0 0v-3.647m0 0h3.428m-3.428 1.823h3.428m3.578-1.823v3.647m0 0h-3.428m0 0v-3.647m0 0h3.428m-3.428 1.823h3.428M49.87 20.92l-5.71 12.297m0 0 .212.098m0 0 5.71-12.297m-.001 0-.211-.098m-22.54 94.056h1.772m0 0v5.459m0 0H27.33m0 0v-5.459m0 5.459h1.772m0 0v5.46m0 0H27.33m0 0v-5.46m0 5.46h1.772m0 0v5.46m0 0H27.33m0 0v-5.46m16.037-5.673v6.117m0 0H40.42m-.001 0v-6.117m0 0h2.948m-2.948 0v6.117m0 0h-2.95m.001 0v-6.117m0 0h2.949m-2.949 0v6.117m0 0h-2.95m.001 0v-6.117m0 0h2.949m6.515.483v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m0 5.151v-2.05m0 0h2.05m0 0v2.05m0 0h-2.05m-10.082-5.151v2.05m0 0h-2.05m0 0v-2.05m0 0h2.05m0 5.151v-2.05m0 0h-2.05m0 0v2.05m0 0h2.05m6.965-8.172v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-2.948 0v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-2.95 0v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m5.898 11.193v-2.05m0 0h2.05m0 0v2.05m0 0h-2.05m-2.948 0v-2.05m0 0h2.05m0 0v2.05m0 0h-2.05m-2.95 0v-2.05m0 0h2.05m0 0v2.05m0 0h-2.05m2.212-15.328v1.723m0 0h-3.428m0 0v-1.723m0 0h3.428m3.578 0v1.723m0 0h-3.428m0 0v-1.723m0 0h3.428m3.578 0v1.723m0 0H40.91m0 0v-1.723m0 0h3.428m6.425 1.427H48.99m0 0v5.459m0 0h1.772m.001 0v-5.459m0 5.459H48.99m0 0v5.46m0 0h1.772m.001 0v-5.46m0 5.46H48.99m0 0v5.46m0 0h1.772m.001 0v-5.46M27.33 97.165h1.772m0 0v5.46m0 0H27.33m0 0v-5.46m0 5.46h1.772m0 0v5.459m0 0H27.33m0 0v-5.459m15.127-.622v-2.894m0 .001h-6.821m0 0v2.893m0 0h-.538m0 0V98.45m0 0h7.856m0 0v3.553m0 0h-.497m0-.15h-6.821m3.41 0v-2.744m-6.086 7.295v-2.15m0 0h2.15m0 0v2.15m0 0h-2.15m-.894.545v-3.24m0 0h3.045m-.001 0v3.24m0 0h-3.044m12.454-.545v-2.15m0 0h-2.15m0 0v2.15m0 0h2.15m.895.545v-3.24m0 0H42.37m0 0v3.24m0 0h3.045m-13.947-5.306v-2.708m0 0h2.709m0 0v2.708m0 0h-2.709m15.156 0v-2.708m0 0h-2.709m.001 0v2.708m0 0h2.708m2.366-4.478h1.772m.001 0v5.46m0 0H48.99m0 0v-5.46m0 5.46h1.772m.001 0v5.459m0 0H48.99m0 0v-5.459M31.62 86.704v2.104m0 0h14.853m0 0v-2.104m0 0H31.62m0 0v-1.216m0 0h14.853m0 0v1.216M27.33 54.988v10.77m0 0h23.433m0 0v-10.77m0 0H27.33m1.25 1.25v8.27m0 0h20.933m0 0v-8.27m0 0H28.58m-1.25 36.558v3.37m0-.001h23.433m0 0v-3.369m0 0H27.33m23.433 1H27.33m32.75-35.431h.4m0 0v-.4m0 0h-.4m0 0v.4M2.287 44.21h-.326m-.001 0v-3.45m0 .001h.327m0 0v3.449m0 5.428h-.326m-.001 0v3.449m0 0h.327m0 0v-3.449m5.691-6.298h-2.05m0 0v-2.05m0 0h2.05m0 0v2.05m-6.306 2.69V38.6m0 0h3.92m-.001 0v7.43m0 0h-3.92m.001 0h4.8m0 0v1.788m0 0h-4.8m0 0V46.03m0 1.788v7.43m0 0h3.92m-.001 0v-7.43m0 0h-3.92m6.307 2.69h-2.05m0 0v2.05m0 0h2.05m0 0v-2.05M30.367 67.67v2.05m-.001 0h-2.05m0 0v-2.05m.001 0h2.05m5.236.002v2.05m-.001 0h2.05m0 .001v-2.05m.001 0h-2.05m-4.618-.736-.002 3.517m0 0 4 .002m0 0 .002-3.518m0 0-4-.001m-.62 6.296-.001 2.05m0 0h-2.05m0 0v-2.05m.001 0h2.05m-.002 5.151v-2.05m.001 0h-2.05m0-.001-.001 2.05m0 0h2.05m5.237-5.148v2.05m0 0h2.05m0 .001v-2.05m0 0-2.05-.001m0 5.15v-2.05m0 0 2.05.001m0 0v2.05m0 0H35.6M30.983 72.5l-.002 6.618m-.001 0 4 .001m0 0 .003-6.618m0 0-4-.001m16.743-4.83v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-5.236.002v2.05m0 0h-2.05m0 .001v-2.05m0 0h2.05m4.618-.736.002 3.517m0 0-4 .002m0 0-.002-3.518m0 0 4-.001m.62 6.296v2.05m.001 0h2.05m0 0-.001-2.05m0 0h-2.05m.002 5.151-.001-2.05m0 0h2.05m0-.001v2.05m.001 0h-2.05m-5.238-5.148v2.05m0 0h-2.05m0 .001v-2.05m0 0 2.05-.001m.002 5.15-.001-2.05m0 0-2.05.001m0 0v2.05m.001 0h2.05M47.11 72.5l.002 6.618m0 0-4 .001m0 0-.002-6.618m0 0 4-.001m12.97-27.335h-20m-.5.2H19.33m51.531-7.225-21.35-16.448m21.35 16.448-26.394-5.583m32.462 12.608H61.23m-1.15 13.2h18m0 0v-.4m0 0h-18m0 0v.4m7.153.25v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.89m0 .001H63.687m0 0v-1.89m7.093-.001v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639M40.197 35.81h1.044m0 0v-3.546m0 .001h-1.044m0 10.638h1.891m0 0V32.265m0 0h-1.89m-.001 7.092h1.044m0 0V35.81m0 0h-1.044m0 7.093h1.044m0 0v-3.546m0 0h-1.044m0-7.092v10.638m0-14.906h1.044m0 0v3.546m0 0h-1.044m0-10.638h1.891m0 0v10.638m0 0h-1.89m-.001-7.092h1.044m0 0v3.546m0 0h-1.044m0-7.092h1.044m0 0v3.546m0 0h-1.044m0 7.092V20.905m20.486 36.81H77.33m0 0v-3.919m0 0H60.683m0 0v3.92m7.469-6.306v2.05m0 0h2.05m0 0v-2.05m0 0h-2.05m-.87 5.69v.326m0 0h3.449m-.001 0V57.1m0 0h-3.448m-7.002-3.847h-4.5m4.5 0v4.712m0-9.212v-2.636m6.953-.502v1.044m0 0h-3.546m0 0v-1.044m10.639 0v1.89m0 .001H63.687m0 0v-1.89m7.093-.001v1.044m0 0h-3.547m0 0v-1.044m7.093 0v1.044m0 0H70.78m0 0v-1.044m-7.093 0h10.639m-30.69-.45v4.5m30.493-14.251-3.245 6.985m3.403-3.768-1.382-.584m.54 2.398-1.337-.68m-1.031-1.742-.168.361m0 0 .833.387m0 0 .168-.361m0 0-.834-.387m-.083.18.02-.043m0 0-.114-.132m.001 0-.05.109m.143.066-.02.043m0 0h-.174m0-.001.05-.108m.698-4.531-3.71 7.986M32.27 26.295h2.05m0 0v-2.05m0 0h-2.05m0 0v2.05m6.307 3.589v-9.23m0 .001h-3.92m0 0v9.23m0-.001h3.92m0 .171h-4.801m0 0v1.788m0 0h4.8m.001 0v-1.788m-.616-2.891h.327m0 0v-3.448m0 0h-.327m0 0v3.448m-5.691 8.44h2.05m0 0v2.05m0 0h-2.05m0 0v-2.05m6.307-3.589v9.23m0-.001h-3.92m0 0v-9.23m0 .001h3.92m-.616 2.72h.327m0 0v3.448m0 0h-.327m0 0v-3.448m.616 6.68h-4.801m0 0v1.788m0 0h4.8m.001 0v-1.788M.033 132.279H.08m0 0v-1.961m0 0H.033m0-10.235H.08m0 0v-.25m0 0H.033m0-17.543H.08m0 0v.25m0 0H.033m0 6.525H.08m-.047 4.243H.08m12.084 5.814v1.823m0 0H8.736m0 0v-1.823m-.15 0v1.823m0 0H5.158m0 0v-1.823m-.15 0v1.823m0 0H1.58m0 0v-1.823m7.156 8.397v-1.824m0 0h3.428m0 0v1.824m-7.006 0v-1.824m0 0h3.428m0 0v1.824m-7.006 0v-1.824m0 0h3.428m0 0v1.824m7.156-16.752v1.823m0 0H8.736m0 0v-1.823m-.15 0v1.823m0 0H5.158m0 0v-1.823m-.15 0v1.823m0 0H1.58m0 0v-1.823m17.5-27.202v2.131"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="m.645-2.916 1.435-.121q.16 1.048.737 1.58.585.523 1.405.523.987 0 1.67-.744t.683-1.974q0-1.17-.66-1.845-.653-.676-1.716-.676-.66 0-1.192.304-.532.296-.835.774L.888-5.262l1.079-5.717h5.535v1.306H3.06l-.6 2.991q1.002-.698 2.103-.698 1.458 0 2.46 1.01t1.003 2.596q0 1.511-.881 2.612Q6.075.19 4.222.19q-1.519 0-2.483-.85Q.782-1.512.645-2.917"
          style={{
            fontSize: '15.5501px',
            fontFamily: 'Arial',
            fill: d,
          }}
          transform="rotate(-90 293.824 97.414)scale(1.33334)"
        />
        <path
          d="M1.412 0v-1.557H2.97V0Z"
          style={{
            fontSize: '15.5501px',
            fontFamily: 'Arial',
            fill: d,
          }}
          transform="rotate(-90 288.087 91.678)scale(1.33334)"
        />
        <path
          d="M5.793 0H4.427v-8.709q-.494.47-1.299.942-.797.47-1.435.706v-1.321q1.147-.54 2.005-1.306.858-.767 1.215-1.489h.88z"
          style={{
            fontSize: '15.5501px',
            fontFamily: 'Arial',
            fill: d,
          }}
          transform="rotate(-90 285.185 88.775)scale(1.33334)"
        />
        <path
          d="M1.412 0v-1.557H2.97V0Z"
          style={{
            fontSize: '15.5501px',
            fontFamily: 'Arial',
            fill: d,
          }}
          transform="rotate(-90 279.449 83.039)scale(1.33334)"
        />
        <path
          d="M5.793 0H4.427v-8.709q-.494.47-1.299.942-.797.47-1.435.706v-1.321q1.147-.54 2.005-1.306.858-.767 1.215-1.489h.88z"
          style={{
            fontSize: '15.5501px',
            fontFamily: 'Arial',
            fill: d,
          }}
          transform="rotate(-90 276.546 80.136)scale(1.33334)"
        />
      </g>
      <g mask="url(#draw-struct-mask)" className="struct opacity-0">
        <path
          d="M53.085 179.665a4.5 4.5 0 0 1-4.5-4.5"
          style={{
            fill: 'none',
            stroke: s,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M48.585 175.165a4.5 4.5 0 0 1-4.5 4.5"
          style={{
            fill: 'none',
            stroke: s,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
        <path
          d="M22.58 174.415h16.5M1.58 17.665h78.75m-78.75 2.25h76.5m0 0v154.5m2.25-156.75v157.5m-41.25-.75h5.005m0 0v.75m9-.75H80.33m0 0v.75m-27.245 0v-.75M.033 137.165H1.83m0 0v-2m0 0H.033m0-37H1.83m0 0v-2m0 0H.033m38.797 0v2m0 0h2m0 0v-2m0 0h-2m0-39v2m0 0h2m0 0v-2m0 0h-2m-38.797 2H1.83m0 0v-2m0 0H.033m1.547 0V17.592m0 0H.08m0 0v39.573m38.75 80v-2m0 0h2m0 0v2m0 0h-2m39.25-66.25v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0 13v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0 13v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0 13v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0 13v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0 13v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0 13v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0 13v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0-130v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0 13v.5m0 0h2.25m0 0v-.5m0 0h-2.25m0 13v.5m0 0h2.25m0 0v-.5m0 0h-2.25m1-38.5v-.5m0 0h-1m0 0v.5m0 0h.5m-51.5-1.75h-.5m0 0v2.25m0 0h.5m0 0v-2.25m-13 0h-.5m0 0v2.25m0 0h.5m0 0v-2.25m26 0h-.5m0 0v2.25m0 0h.5m0 0v-2.25m26 0h-.5m0 0v2.25m0 0h.5m0 0v-2.25m-13 0h-.5m0 0v2.25m0 0h.5m0 0v-2.25m25.5 1.75v.5m0 0h.5m0 0v-1m0 0h-.5m-78.547.927H.08m0 0v-2.25m0 0H.033m0 153.524.047.115M.033 69.517H.08m0 0v.75m0 0H.033m.047 40.92v13.975m-.047 0H.08m-.047-14.225H.08m0 0v.5m0 0H.033m.047-.25V98.165m0 73.066 1.103 3.184M78.08 19.165H1.58M.033 31.372v-11.53m0 11.53v-11.53m90.064 155.323v-.741m0 0H80.09M89.582 1.693v172.731M.08 59.165v37m0 2v37m0 0h1.5m0 0v-37m0-2v-37m77.5-39.25v154.5m-56.5 0h1.5M.033 125.912H.08m0 0v-.75m0 0H.033m1.15 49.253H23.33m66.252.75"
          style={{
            fill: 'none',
            stroke: s,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
      </g>
      <g mask="url(#draw-axes-mask)" className="axes opacity-0">
        <path
          d="M107.332 19.165H.033m107.299 39H.033m107.299 39H.033m107.299 39H.033m107.299 39H.83m39-173.472v173.472m39-173.472v173.472M.83 1.693v173.472m38-40v2m0 0h2m0 0v-2m0 0h-2"
          style={{
            fill: 'none',
            stroke: d,
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="scale(3.77953)"
        />
      </g>
    </svg>
  )
}
