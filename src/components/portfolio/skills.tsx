import { Code2, Layers3, Palette } from "lucide-react"
import { Reveal } from "./reveal"

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Clean code. Thoughtful architecture.",
    items: ["React", "TypeScript", "JavaScript", "HTML & CSS", "Node.js"],
  },
  {
    icon: Palette,
    title: "Design & interaction",
    description: "The details make the difference.",
    items: [
      "Responsive design",
      "Figma",
      "Tailwind CSS",
      "Motion",
      "Accessibility",
    ],
  },
  {
    icon: Layers3,
    title: "Tools & workflow",
    description: "From first idea to final deployment.",
    items: ["Git & GitHub", "Vite", "REST APIs", "VS Code", "Vercel"],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-stone-200 py-12 md:py-20"
    >
      <Reveal>
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-8 [&>div>p]:mb-4 [&>div>p]:text-stone-500 [&>p]:text-xs [&>p]:leading-loose [&>p]:text-stone-500">
          <div>
            <p className="mb-8 flex items-center gap-2.5 text-xs font-medium tracking-widest">
              02 / MY TOOLKIT
            </p>
            <h2 className="text-3xl leading-tight font-medium tracking-tighter md:text-4xl">
              What I work with<span className="text-amber-700">.</span>
            </h2>
          </div>
          <p>
            A practical toolkit.
            <br />
            An always-learning mindset.
          </p>
        </div>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-4 md:gap-8">
        {skills.map(({ icon: Icon, title, description, items }) => (
          <Reveal
            key={title}
            className="sm:[&>div]:max-w-64 [&>h3]:text-xl [&>h3]:tracking-tight sm:[&>h3]:text-base md:[&>h3]:text-lg [&>p]:mt-2 [&>p]:mb-4 [&>p]:text-xs [&>p]:text-stone-500 sm:[&>p]:mb-4 [&>svg]:mb-3 [&>svg]:text-amber-700 sm:[&>svg]:mb-4"
          >
            <Icon size={25} strokeWidth={1.4} />
            <h3 className="text-2xl font-medium tracking-tight">
              {title}
            </h3>
            <p>{description}</p>
            <div className="flex flex-wrap gap-2 [&>span]:rounded [&>span]:border [&>span]:border-stone-200 [&>span]:px-2 [&>span]:py-1 [&>span]:text-xs">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-xs text-stone-500">
        Sample toolkit — ready to personalize with your skills.
      </p>
    </section>
  )
}
