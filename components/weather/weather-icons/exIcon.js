import * as React from "react"
const ExIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      className="canvas-weather-icon"
      stroke="#F0F8FF"
      strokeLinecap="round"
      strokeWidth={3}
      d="m18 18 15 15m0-15L18 33"
    />
  </svg>
)
export default ExIcon
