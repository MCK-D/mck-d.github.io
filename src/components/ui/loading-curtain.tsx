import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import React, { useState } from "react"
import { Typewriter } from "@/components/ui/typewriter"

const LoadingCurtain: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <AnimatePresence>
      {isLoading && <motion.div
        className="flex flex-col items-center justify-center absolute w-screen h-screen bg-emerald-950"
        initial={{ left: "-100%" }}
        animate={{ left: 0 }}
        exit={{ left: "100%", transition: { delay: .65 } }}
      >
        <motion.div animate={{ scale: pressed ? .9 : 1 }} >
          <Typewriter text="Mck" speed={400} delay={500} className="text-8xl font-bold uppercase tracking-wider" />
        </motion.div>
        <Button
          className="mt-2"
          onClick={() => setIsLoading(false)}
          onMouseDown={() => setPressed(true)}
           onMouseUp={() => setPressed(false)}
        >
          Enter
        </Button>
      </motion.div>}
    </AnimatePresence>
  )
}

export default LoadingCurtain;
