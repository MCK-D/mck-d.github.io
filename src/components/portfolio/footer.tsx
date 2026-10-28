import { ArrowUp } from "lucide-react"
import { profile } from "../../data/portfolio"
export function Footer() {
  return (
    <footer className="footer">
      <a className="wordmark" href="#top">
        mck<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Micka Daoud</p>
      <div className="social-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.behance} target="_blank" rel="noreferrer">
          Behance
        </a>
      </div>
      <a className="back-top" href="#top">
        Back to top <ArrowUp size={16} />
      </a>
    </footer>
  )
}
