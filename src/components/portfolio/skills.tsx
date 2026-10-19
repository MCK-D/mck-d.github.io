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
      className="border-b border-[#deded6] py-[55px] min-[761px]:py-[77px]"
    >
      <Reveal>
        <div className="mb-[35px] flex flex-col items-start justify-between gap-[15px] min-[761px]:flex-row min-[761px]:items-end min-[761px]:gap-[25px] [&>div>p]:mb-4 [&>div>p]:text-[#6d7066] [&>p]:text-xs [&>p]:leading-[1.8] [&>p]:text-[#77796f]">
          <div>
            <p className="mb-[25px] flex items-center gap-2.5 text-[10px] font-[550] tracking-[1.8px]">
              02 / MY TOOLKIT
            </p>
            <h2 className="text-[30px] leading-[1.2] font-medium tracking-[-1.5px] min-[761px]:text-4xl">
              What I work with<span className="text-[#bd4e29]">.</span>
            </h2>
          </div>
          <p>
            A practical toolkit.
            <br />
            An always-learning mindset.
          </p>
        </div>
      </Reveal>
      <div className="mt-[30px] grid grid-cols-1 gap-8 min-[541px]:mt-[45px] min-[541px]:grid-cols-3 min-[541px]:gap-5 min-[761px]:gap-8">
        {skills.map(({ icon: Icon, title, description, items }) => (
          <Reveal
            key={title}
            className="min-[541px]:[&>div]:max-w-[260px] [&>h3]:text-xl [&>h3]:tracking-[-0.4px] min-[541px]:[&>h3]:text-base min-[761px]:[&>h3]:text-lg [&>p]:mt-[9px] [&>p]:mb-[15px] [&>p]:text-[11px] [&>p]:text-[#77796f] min-[541px]:[&>p]:mb-[22px] [&>svg]:mb-3 [&>svg]:text-[#b95532] min-[541px]:[&>svg]:mb-[22px]"
          >
            <Icon size={25} strokeWidth={1.4} />
            <h3 className="text-[25px] font-medium tracking-[-0.7px]">
              {title}
            </h3>
            <p>{description}</p>
            <div className="flex flex-wrap gap-[7px] [&>span]:rounded [&>span]:border [&>span]:border-[#dedfd6] [&>span]:px-[9px] [&>span]:py-[5px] [&>span]:text-[9px]">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-[25px] text-[10px] text-[#77796f]">
        Sample toolkit — ready to personalize with your skills.
      </p>
    </section>
  )
}
