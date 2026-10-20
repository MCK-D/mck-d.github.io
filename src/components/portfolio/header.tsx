import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { ArrowUpRight, Menu, X } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (current) => {
      const previous = scrollY.getPrevious() ?? 0
      if (current > previous && current > 150) {
          setHidden(true)
      } else {
          setHidden(false)
      }
  })

  return (
    <motion.header
      animate={{
        y: hidden ? "-100%" : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}

      className="fixed max-w-6xl w-full mx-auto flex flex-row h-20 md:h-24 items-center border-b border-stone-200 bg-background/60 backdrop-blur-xs z-100 max-sm:px-4"
    >
      <a
        className="text-4xl font-extrabold tracking-tighter"
        href="#main"
        aria-label="Micka home"
      >
        mck<span className="relative top-1 ml-1 align-top text-base">®</span>
      </a>
      <button
        className="grid place-items-center border-0 bg-transparent p-2 sm:hidden"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="navigation"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="navigation"
        className={`max-sm:absolute inset-x-0 top-20 z-10 flex-col text-sm sm:ml-auto sm:flex sm:flex-row sm:items-center sm:rounded-none sm:border-0 sm:p-0 md:gap-8 ${open ? "flex" : "hidden"}`}
      >
        {[
          ["About", "home"],
          ["Projects", "projects"],
          ["Skills", "skills"],
          ["Let’s talk", "contact"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="flex items-center gap-2 p-2 hover:text-amber-800 sm:p-0 last-child:rounded-sm last-child:border last-child:border-stone-300 last-child:px-4 last-child:py-3">
            {label}
            {id === "contact" && <ArrowUpRight size={16} />}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
