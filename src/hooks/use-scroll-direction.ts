import { useEffect, useState } from "react"

/** Small accumulated movements are ignored to keep touchpads from flickering. */
export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up")

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY)
    let frame = 0

    const update = () => {
      frame = 0
      // Clamp elastic overscroll at both ends of the document.
      const maxY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      )
      const currentY = Math.min(maxY, Math.max(0, window.scrollY))
      const delta = currentY - previousY

      if (currentY <= 100) {
        setDirection("up")
        previousY = currentY
      } else if (Math.abs(delta) >= 8) {
        setDirection(delta > 0 ? "down" : "up")
        previousY = currentY
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return direction
}
