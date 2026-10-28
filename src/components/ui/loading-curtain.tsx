import { useEffect, useId } from "react"

/** The timing matches the outline, fill, hold, and curtain sequence in motion.css. */
export default function LoadingCurtain({
  onComplete,
}: {
  onComplete: () => void
}) {
  const waveId = useId()
  const letters = [
    { character: "m", x: 18, width: 240 },
    { character: "c", x: 252, width: 150 },
    { character: "k", x: 395, width: 170 },
  ]
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 4100)
    const media = matchMedia("(prefers-reduced-motion: reduce)")
    const onPreferenceChange = () => {
      if (media.matches) onComplete()
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onComplete()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    media.addEventListener("change", onPreferenceChange)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = previousOverflow
      media.removeEventListener("change", onPreferenceChange)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [onComplete])

  return (
    <div
      className="intro"
      role="status"
      aria-label="Opening Micka Daoud’s portfolio"
    >
      <div className="intro-panel intro-panel-top" />
      <div className="intro-panel intro-panel-bottom" />
      <div className="intro-content" aria-hidden="true">
        <svg className="intro-wordmark" viewBox="0 0 600 300" focusable="false">
          <defs>
            <mask
              id={waveId}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="600"
              height="300"
            >
              <g className="intro-wave-rise">
                <path
                  className="intro-wave-drift"
                  fill="white"
                  d="M-400 0 Q-350 -14 -300 0 T-100 0 T100 0 T300 0 T500 0 T700 0 T900 0 T1100 0 L1100 500 L-400 500 Z"
                />
              </g>
            </mask>
          </defs>
          <g className="intro-outline">
            {letters.map((letter, index) => (
              <g
                className="intro-letter"
                key={letter.character}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <text
                  x={letter.x}
                  y="235"
                  textLength={letter.width}
                  lengthAdjust="spacingAndGlyphs"
                >
                  {letter.character}
                </text>
              </g>
            ))}
          </g>
          <g className="intro-fill" mask={`url(#${waveId})`}>
            {letters.map((letter, index) => (
              <g
                className="intro-letter"
                key={letter.character}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <text
                  x={letter.x}
                  y="235"
                  textLength={letter.width}
                  lengthAdjust="spacingAndGlyphs"
                >
                  {letter.character}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  )
}
