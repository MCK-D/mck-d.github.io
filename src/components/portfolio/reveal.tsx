import { type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
