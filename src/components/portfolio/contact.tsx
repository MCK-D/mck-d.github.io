import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, Check, Copy, Plus } from "lucide-react"
import { profile } from "../../data/portfolio"
export function Contact() {
  const [expanded, setExpanded] = useState(false)
  const [linksHeight, setLinksHeight] = useState(0)
  const linksRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const content = linksRef.current
    if (!content) return
    const observer = new ResizeObserver(([entry]) => {
      setLinksHeight(entry.borderBoxSize[0]?.blockSize ?? content.offsetHeight)
    })
    observer.observe(content)
    return () => observer.disconnect()
  }, [])
  const [status, setStatus] = useState("Copy email")
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus("Copied!")
    } catch {
      setStatus("Please select the email to copy")
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus("Copy email"), 3500)
  }
  return (
    <section
      id="contact"
      className={
        expanded
          ? "contact section-pad contact-expanded"
          : "contact section-pad"
      }
      aria-labelledby="contact-title"
      onKeyDown={(event) => {
        if (event.key === "Escape" && expanded) {
          setExpanded(false)
          triggerRef.current?.focus()
        }
      }}
    >
      <div className="contact-intro">
        <p>
          Have a project in mind?
          <br />
          Or just want to say hello?
        </p>
        <span>Let’s make it happen.</span>
      </div>
      <h2 id="contact-title">
        <button
          ref={triggerRef}
          className="contact-trigger"
          aria-expanded={expanded}
          aria-controls="contact-socials"
          onClick={() => setExpanded((open) => !open)}
        >
          <span>Let’s talk</span>
          <Plus aria-hidden="true" />
        </button>
      </h2>
      <div
        id="contact-socials"
        className="contact-disclosure"
        style={{ height: expanded ? linksHeight : 0 }}
        inert={!expanded}
        aria-hidden={!expanded}
      >
        <div ref={linksRef} className="contact-social-grid">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`}>
            <span>Email</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="contact-bottom">
        <a className="email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <button className="copy-button" onClick={copyEmail}>
          {status === "Copied!" ? <Check size={18} /> : <Copy size={18} />}
          <span aria-live="polite">{status}</span>
        </button>
        <a href="tel:+33782305604">+33 7 82 30 56 04</a>
      </div>
    </section>
  )
}
