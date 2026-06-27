import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Linha "stone gym" */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 0 }}>
          <span style={{
            fontFamily: 'Arial Black, Arial',
            fontWeight: 900,
            fontSize: 20,
            color: 'white',
            letterSpacing: -0.5,
            lineHeight: 1,
          }}>
            stone
          </span>
          <span style={{
            fontFamily: 'Arial Black, Arial',
            fontWeight: 900,
            fontSize: 20,
            color: '#7B2FBE',
            letterSpacing: -0.5,
            lineHeight: 1,
            marginLeft: 3,
          }}>
            gym
          </span>
        </div>

        {/* Sorriso SVG abaixo de "gym" */}
        <svg width="36" height="10" viewBox="0 0 36 10" style={{ marginTop: 2, marginLeft: 18 }}>
          <path
            d="M1 1 Q18 12 35 1"
            stroke="#7B2FBE"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
