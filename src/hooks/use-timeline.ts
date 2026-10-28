import { useCallback, useEffect, useRef, useState } from "react"

const IDLE_MS = 6000

export function useTimeline(count: number) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [detail, setDetail] = useState<string | null>(null)
  const hasEntered = useRef(false)
  const lastActivity = useRef(0)
  const interact = useCallback(() => {
    lastActivity.current = Date.now()
  }, [])
  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current
      const target = track?.children[index] as HTMLElement | undefined
      if (!track || !target) return
      interact()
      track.scrollTo({
        left: target.offsetLeft - (track.children[0] as HTMLElement).offsetLeft,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      })
    },
    [interact]
  )

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return
    let visible = false
    let frame = 0
    const reduce = matchMedia("(prefers-reduced-motion: reduce)")
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.25
        interact()
        if (!visible || hasEntered.current) return
        hasEntered.current = true
        if (reduce.matches) return
        section
          .querySelector(".timeline-rail")
          ?.animate(
            [{ transform: "scaleX(0.05)" }, { transform: "scaleX(1)" }],
            { duration: 850, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
          )
        section.querySelectorAll(".timeline-event").forEach((item, index) => {
          item.animate(
            [
              { opacity: 0.15, transform: "translateY(35px) rotate(2deg)" },
              { opacity: 1, transform: "translateY(0) rotate(0)" },
            ],
            {
              duration: 700,
              delay: index * 75,
              easing: "cubic-bezier(0.23, 1, 0.32, 1)",
            }
          )
        })
      },
      { threshold: 0.25 }
    )
    observer.observe(section)
    const onScroll = () => {
      interact()
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const first = (track.children[0] as HTMLElement).offsetLeft
        let closest = 0
        let distance = Infinity
        Array.from(track.children).forEach((node, index) => {
          const next = Math.abs(
            (node as HTMLElement).offsetLeft - first - track.scrollLeft
          )
          if (next < distance) {
            distance = next
            closest = index
          }
        })
        setActive(closest)
      })
    }
    track.addEventListener("scroll", onScroll, { passive: true })
    const timer = window.setInterval(() => {
      if (
        !visible ||
        document.hidden ||
        reduce.matches ||
        Date.now() - lastActivity.current < IDLE_MS
      )
        return
      if (section.matches(":hover") && matchMedia("(hover: hover)").matches)
        return
      if (section.contains(document.activeElement) || paused || detail) return
      goTo((active + 1) % count)
    }, 250)
    const onVisibility = () => interact()
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      observer.disconnect()
      track.removeEventListener("scroll", onScroll)
      document.removeEventListener("visibilitychange", onVisibility)
      clearInterval(timer)
      cancelAnimationFrame(frame)
    }
  }, [active, count, detail, goTo, interact, paused])

  return {
    sectionRef,
    trackRef,
    active,
    paused,
    setPaused,
    detail,
    setDetail,
    interact,
    goTo,
  }
}
