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
      className="border-b border-[#deded6] py-[55px] min-[761px]:py-[77px]"
    >
      <Reveal>
        <div className="mb-[35px] flex flex-col items-start justify-between gap-[15px] min-[761px]:flex-row min-[761px]:items-end min-[761px]:gap-[25px] [&>div>p]:mb-4 [&>div>p]:text-[#6d7066] [&>p]:text-xs [&>p]:leading-[1.8] [&>p]:text-[#77796f]">
          <div>
            <h2 className="text-[30px] leading-[1.2] font-medium tracking-[-1.5px] min-[761px]:text-4xl">
              A few things I’ve built<span className="text-[#bd4e29]">:</span>
            </h2>
          </div>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-x-5 gap-y-[35px] min-[541px]:grid-cols-2 min-[761px]:gap-x-7 min-[761px]:gap-y-10">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            className={index === 0 ? "group col-span-full" : "group"}
          >
            <ProjectPreview style={project.style} />
            <div className="mt-[23px] mb-2.5 flex justify-between text-[8px] tracking-[1.3px] text-[#777b70]">
              <span>{project.type}</span>
              <span>CONCEPT / 0{index + 1}</span>
            </div>
            <h3 className="text-[25px] font-medium tracking-[-0.7px]">
              {project.name}
            </h3>
            <p className="mt-2.5 mb-4 max-w-[600px] text-xs leading-[1.8] text-[#74776d]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-[7px] [&>span]:rounded [&>span]:border [&>span]:border-[#dedfd6] [&>span]:px-[9px] [&>span]:py-[5px] [&>span]:text-[9px]">
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
