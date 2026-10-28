import { useEffect, useRef, type ReactNode } from "react"

/** Content is visible by default; animate only when the browser observes entry. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = ref.current
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        element.animate(
          [
            { opacity: 0.25, transform: "translateY(28px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 700, delay, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
        )
        observer.disconnect()
      },
      { threshold: 0.12 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
