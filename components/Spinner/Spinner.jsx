import * as React from "react"

function Spinner(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <g transform="translate(50 50) scale(.7) translate(-50 -50)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="0.7575757575757576s"
        />
        <path fillOpacity={0.8} fill="#fa224b" d="M50 50V0a50 50 0 0150 50z" />
      </g>
      <g transform="translate(50 50) scale(.7) translate(-50 -50)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1.0101010101010102s"
        />
        <path
          fillOpacity={0.8}
          fill="#fef1e9"
          d="M50 50h50a50 50 0 01-50 50z"
        />
      </g>
      <g transform="translate(50 50) scale(.7) translate(-50 -50)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1.5151515151515151s"
        />
        <path fillOpacity={0.8} fill="#37d390" d="M50 50v50A50 50 0 010 50z" />
      </g>
      <g transform="translate(50 50) scale(.7) translate(-50 -50)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="3.0303030303030303s"
        />
        <path fillOpacity={0.8} fill="#6969da" d="M50 50H0A50 50 0 0150 0z" />
      </g>
    </svg>
  )
}

export default Spinner
