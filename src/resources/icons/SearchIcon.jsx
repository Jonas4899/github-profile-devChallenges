export function SearchIcon({
  color = 'black',
  width = 24,
  height = 24,
  className = ''
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="2" />
      <path
        d="M20 20L17 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
