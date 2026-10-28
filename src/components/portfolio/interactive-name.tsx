import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "motion/react"
import type { PointerEvent } from "react"

const spring = { mass: 1, stiffness: 100, damping: 10 }

function Letter({ character }: { character: string }) {
  const reducedMotion = useReducedMotion()
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)
  const rotation = useSpring(0, spring)
  const transform = useMotionTemplate`translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`

  function followPointer(event: PointerEvent<HTMLSpanElement>) {
    if (
      reducedMotion ||
      event.pointerType !== "mouse" ||
      !matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return
    const bounds = event.currentTarget.getBoundingClientRect()
    const position = (event.clientX - bounds.left) / bounds.width - 0.5
    x.set(position * 14)
    y.set(-Math.min(bounds.height * 0.12, 22))
    rotation.set(position * 16)
  }

  function reset() {
    x.set(0)
    y.set(0)
    rotation.set(0)
  }

  return (
    <span
      className="name-letter-slot"
      onPointerEnter={followPointer}
      onPointerMove={followPointer}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.span
        className={
          character === "." ? "name-letter name-period" : "name-letter"
        }
        style={{ transform: reducedMotion ? "none" : transform }}
      >
        {character}
      </motion.span>
    </span>
  )
}

export function InteractiveName() {
  return (
    <h1 id="hero-title" aria-label="Micka Daoud">
      {["Micka", "Daoud."].map((word) => (
        <span className="name-word" aria-hidden="true" key={word}>
          {[...word].map((character, index) => (
            <Letter key={`${character}-${index}`} character={character} />
          ))}
        </span>
      ))}
    </h1>
  )
}
