import { ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "./reveal"

export function Contact() {
  return (
    <section
      id="contact"
      className="pt-12 pb-16 md:pt-20 [&>div>p:first-child]:text-stone-500"
    >
      <Reveal>
        <p className="mb-8 flex items-center gap-2.5 text-xs font-medium tracking-widest">
          03 / SAY HELLO
        </p>
        <div className="flex items-center justify-between gap-3 sm:gap-8 [&_h2]:text-4xl [&_h2]:tracking-tighter sm:[&_h2]:text-5xl [&_p]:mt-8 [&_p]:text-xs [&_p]:leading-loose [&_p]:text-stone-500">
          <div>
            <h2 className="text-3xl leading-tight font-medium tracking-tighter md:text-4xl">
              Good things start
              <br />
              with a{" "}
              <span className="font-serif font-normal italic">
                conversation.
              </span>
            </h2>
            <p>
              Have an idea, a project, or just something to say?
              <br />
              I’d love to hear from you.
            </p>
          </div>
          <a
            className="grid size-12 shrink-0 place-items-center rounded-full bg-amber-700 text-white transition-transform duration-250 hover:rotate-45 motion-reduce:transition-none sm:size-24 max-sm:[&>svg]:w-8"
            href="mailto:hello@example.com"
            aria-label="Email hello@example.com"
          >
            <ArrowUpRight size={45} strokeWidth={1.3} />
          </a>
        </div>
        <a
          className="mt-8 inline-flex items-center gap-3 border-b border-stone-400 pb-2 text-sm"
          href="mailto:hello@example.com"
        >
          <Mail size={18} />
          hello@example.com <ArrowUpRight size={17} />
        </a>
        <p className="mt-8 text-xs text-stone-500">
          Placeholder email — replace with your own.
        </p>
      </Reveal>
    </section>
  )
}
