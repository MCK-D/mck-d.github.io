import { useEffect, useRef, useState, type ReactNode } from "react"

/** Measured height keeps both directions interruptible, including content resizes. */
export function AnimatedCollapse({
  open,
  id,
  children,
}: {
  open: boolean
  id: string
  children: ReactNode
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    const content = contentRef.current
    if (!content) return
    const observer = new ResizeObserver(() =>
      setHeight(content.getBoundingClientRect().height)
    )
    observer.observe(content)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      id={id}
      className="animated-collapse"
      data-open={open}
      style={{ height: open ? height : 0 }}
      inert={!open}
      aria-hidden={!open}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
