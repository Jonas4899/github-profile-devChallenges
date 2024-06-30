export function ForkIcon({ colorStroke = 'black', width = 24, height = 24 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="18"
        y="15"
        width="4"
        height="4"
        rx="2"
        transform="rotate(90 18 15)"
        stroke={colorStroke}
        strokeWidth="2"
      />
      <rect
        x="6"
        y="8"
        width="4"
        height="4"
        rx="2"
        transform="rotate(-90 6 8)"
        stroke={colorStroke}
        strokeWidth="2"
      />
      <path
        d="M8 8V13C8 14.8856 8 15.8284 8.58579 16.4142C9.17157 17 10.1144 17 12 17H14"
        stroke={colorStroke}
        strokeWidth="2"
      />
    </svg>
  )
}
