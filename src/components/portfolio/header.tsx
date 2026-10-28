import { useRef, useState } from "react"
import { useScrollDirection } from "../../hooks/use-scroll-direction"
import { ArrowUpRight } from "lucide-react"
const links = [
  ["Work", "#projects"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
]
export function Header() {
  const [open, setOpen] = useState(false)
  const direction = useScrollDirection()
  const menuRef = useRef<HTMLButtonElement>(null)
  return (
    <header className="header" data-hidden={direction === "down" && !open}>
      <a className="wordmark" href="#top" aria-label="Micka Daoud, back to top">
        mck<span>.</span>
      </a>
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="#contact">
        Let’s talk <ArrowUpRight size={17} />
      </a>
      <button
        ref={menuRef}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <span className="menu-glyph" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        data-open={open}
        inert={!open}
        aria-hidden={!open}
        aria-label="Mobile navigation"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false)
            menuRef.current?.focus()
          }
        }}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
