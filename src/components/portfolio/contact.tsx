import { ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "./reveal"

export function Contact() {
  return (
    <section
      id="contact"
      className="pt-[55px] pb-[65px] min-[761px]:pt-[76px] [&>div>p:first-child]:text-[#6d7066]"
    >
      <Reveal>
        <p className="mb-[25px] flex items-center gap-2.5 text-[10px] font-[550] tracking-[1.8px]">
          03 / SAY HELLO
        </p>
        <div className="flex items-center justify-between gap-3 min-[541px]:gap-[30px] [&_h2]:text-[35px] [&_h2]:tracking-[-2px] min-[541px]:[&_h2]:text-[clamp(36px,4.8vw,57px)] [&_p]:mt-6 [&_p]:text-xs [&_p]:leading-[1.9] [&_p]:text-[#6a6c64]">
          <div>
            <h2 className="text-[30px] leading-[1.2] font-medium tracking-[-1.5px] min-[761px]:text-4xl">
              Good things start
              <br />
              with a{" "}
              <span className="font-[Georgia,'Times_New_Roman',serif] font-normal italic">
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
            className="grid size-[55px] shrink-0 place-items-center rounded-full bg-[#bd4e29] text-white transition-transform duration-250 hover:rotate-45 motion-reduce:transition-none min-[541px]:size-[100px] max-[540px]:[&>svg]:w-[27px]"
            href="mailto:hello@example.com"
            aria-label="Email hello@example.com"
          >
            <ArrowUpRight size={45} strokeWidth={1.3} />
          </a>
        </div>
        <a
          className="mt-[27px] inline-flex items-center gap-3 border-b border-[#a9ad9f] pb-2 text-sm"
          href="mailto:hello@example.com"
        >
          <Mail size={18} />
          hello@example.com <ArrowUpRight size={17} />
        </a>
        <p className="mt-[25px] text-[10px] text-[#77796f]">
          Placeholder email — replace with your own.
        </p>
      </Reveal>
    </section>
  )
}
