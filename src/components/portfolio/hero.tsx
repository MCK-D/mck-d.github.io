import { ArrowDown, ArrowUpRight } from "lucide-react"
import { InteractiveName } from "./interactive-name"
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-intro">
        <p>
          Fullstack developer.
          <br />
          An eye for design.
        </p>
        <p className="hero-note">
          From the first idea
          <br />
          to the last interaction.
        </p>
      </div>
      <div className="hero-name">
        <InteractiveName />
        <div className="hero-stamp" aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <path d="M50 5V95M5 50H95M18 18L82 82M18 82L82 18" />
          </svg>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          I build web and mobile experiences,
          <br />
          with care for how they work and feel.
        </p>
        <a className="round-link" href="#projects">
          <span>Explore my work</span>
          <span className="round-icon">
            <ArrowDown size={24} />
          </span>
        </a>
      </div>
      <a
        className="hero-social"
        href="https://github.com/mck-d"
        target="_blank"
        rel="noreferrer"
      >
        Find me on GitHub <ArrowUpRight size={16} />
      </a>
    </section>
  )
}
