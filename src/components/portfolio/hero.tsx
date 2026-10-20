import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Reveal } from "./reveal"

export function Hero() {
  return (
    <section id="home" className="pt-16 md:pt-20">
      <Reveal>
        <h1 className="text-4xl font-medium sm:text-5xl tracking-tighter">
          Hi, I’m Micka<span className="text-amber-700">.</span>
          <br />I turn ideas into
          <br />
          <span className="font-serif font-normal italic">
            digital experiences.
          </span>
        </h1>
        <div className="mt-8 mb-8 flex items-center justify-between [&>p]:text-xs/loose text-stone-500 sm:[&>p]:text-sm">
          <p>
            A developer with an eye for design.
            <br />I enjoy building thoughtful, intuitive things for the web —
            <br className="hidden sm:block" /> one detail at a time.
          </p>
          <a
            className="ml-4 grid size-12 shrink-0 place-items-center rounded-full border border-stone-300 hover:bg-stone-200 hover:translate-y-1 transition duration-200 sm:ml-0 sm:size-16 sm:p-0 [&>svg]:size-8 [&>svg]:sm:size-8"
            href="#projects"
            aria-label="Explore my projects"
          >
            <ArrowDown size={25} />
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-8 rounded bg-amber-700 px-4 py-4 text-xs text-white transition-colors duration-200 hover:bg-amber-800"
        >
          Let’s build something <ArrowUpRight size={17} />
        </a>
      </Reveal>
    </section>
  )
}
