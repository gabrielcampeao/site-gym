export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const scale = size === 'sm' ? 0.6 : size === 'lg' ? 1.4 : 1
  const w = Math.round(210 * scale)
  const h = Math.round(56 * scale)

  return (
    <svg width={w} height={h} viewBox="0 0 210 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* "stone" em branco */}
      <text
        x="0" y="40"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="38"
        fill="white"
      >
        stone
      </text>
      {/* "gym" em roxo — começa depois de "stone" + espaço */}
      <text
        x="108" y="40"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="38"
        fill="#7B2FBE"
      >
        gym
      </text>
      {/* Sorriso roxo sob "gym" */}
      <path
        d="M110 49 Q146 61 183 49"
        stroke="#7B2FBE"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
