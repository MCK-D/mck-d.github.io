import { useState } from "react"
import { Plus } from "lucide-react"
import { projects, archive } from "../../data/portfolio"
import { ProjectPreview } from "./project-preview"
import { Reveal } from "./reveal"
import { AnimatedCollapse } from "../ui/animated-collapse"
export function Projects() {
  const [expanded, setExpanded] = useState(false)
  return (
    <section
      id="projects"
      className="projects section-pad"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <Reveal>
          <h2 id="work-title">
            Selected work<span className="accent-dot">.</span>
          </h2>
        </Reveal>
        <p>
          A few things I’ve
          <br />
          brought to life.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            className={`project project-${index}`}
            delay={(index % 2) * 80}
          >
            <article>
              <ProjectPreview name={project.name} color={project.color} />
              <h3>{project.name}</h3>
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <p>{project.description}</p>
              <ul className="tags" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <button
        className="archive-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls="project-archive"
      >
        <span>
          {expanded ? "Close the archive" : "There’s more in the archive"}
        </span>
        <Plus aria-hidden="true" />
      </button>
      <AnimatedCollapse id="project-archive" open={expanded}>
        {archive.map((project) => (
          <article className="archive-row" key={project.name}>
            <h3>{project.name}</h3>
            <div>
              <p>{project.description}</p>
              <span>{project.tags}</span>
            </div>
            <span>{project.year}</span>
          </article>
        ))}
      </AnimatedCollapse>
    </section>
  )
}
