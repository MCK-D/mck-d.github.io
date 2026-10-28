import { useEffect, useState } from "react"

export default function LoadingCurtain() {
  const [visible, setVisible] = useState(() => {
    try {
      return (
        !sessionStorage.getItem("mck-intro") &&
        !matchMedia("(prefers-reduced-motion: reduce)").matches
      )
    } catch {
      return false
    }
  })
  useEffect(() => {
    if (!visible) return
    const timer = window.setTimeout(() => {
      setVisible(false)
      try {
        sessionStorage.setItem("mck-intro", "seen")
      } catch {
        /* Storage is optional. */
      }
    }, 2100)
    return () => clearTimeout(timer)
  }, [visible])
  if (!visible) return null
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-panel intro-panel-top" />
      <div className="intro-panel intro-panel-bottom" />
      <div className="intro-content">
        <span>Micka Daoud</span>
        <div className="intro-words">
          <span>Think.</span>
          <span>Make.</span>
          <span>Move.</span>
        </div>
        <span>Design meets development</span>
      </div>
    </div>
  )
}
