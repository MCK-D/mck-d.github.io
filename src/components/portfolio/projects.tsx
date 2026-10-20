import { Reveal } from "./reveal"
import { ProjectPreview } from "./project-preview"

const projects = [
  {
    name: "Forma",
    type: "PRODUCTIVITY APP",
    description:
      "A calmer space to organize projects, capture ideas, and focus on what matters.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    style: "forma",
  },
  {
    name: "Objects",
    type: "E-COMMERCE EXPERIENCE",
    description:
      "A considered storefront for everyday objects, with a simple, seamless shopping experience.",
    tags: ["React", "UI Design", "Motion"],
    style: "objects",
  },
  {
    name: "Atmos",
    type: "WEATHER DASHBOARD",
    description:
      "The forecast, at a glance. A little exploration of data, interaction, and beautiful interfaces.",
    tags: ["TypeScript", "API Integration", "CSS"],
    style: "atmos",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-stone-200 py-12 md:py-20"
    >
      <Reveal>
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-8 [&>div>p]:mb-4 [&>div>p]:text-stone-500 [&>p]:text-xs [&>p]:leading-loose [&>p]:text-stone-500">
          <div>
            <h2 className="text-3xl leading-tight font-medium tracking-tighter md:text-4xl">
              A few things I’ve built<span className="text-amber-700">:</span>
            </h2>
          </div>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-8 md:gap-y-20">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            className={index === 0 ? "group col-span-full" : "group"}
          >
            <ProjectPreview style={project.style} />
            <div className="mt-4 mb-2.5 flex justify-between text-xs tracking-wider text-stone-500">
              <span>{project.type}</span>
              <span>CONCEPT / 0{index + 1}</span>
            </div>
            <h3 className="text-2xl font-medium tracking-tight">
              {project.name}
            </h3>
            <p className="mt-2.5 mb-4 max-w-152 text-xs leading-loose text-stone-500">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 [&>span]:rounded [&>span]:border [&>span]:border-stone-200 [&>span]:px-2 [&>span]:py-1 [&>span]:text-xs">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
