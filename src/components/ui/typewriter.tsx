"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type TypewriterProps = {
  text: string;
  /** Milliseconds between characters. */
  speed?: number;
  /** Milliseconds before typing starts. */
  delay?: number;
  cursor?: string;
  className?: string;
};

export function Typewriter(props: TypewriterProps) {
  // Remount the animation whenever the text changes.
  return <TypewriterAnimation key={props.text} {...props} />;
}

function TypewriterAnimation({
  text,
  speed = 45,
  delay = 0,
  cursor = "_",
  className,
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();

  const characters = useMemo(() => {
    // Keep emoji and combined characters intact.
    const segmenter = new Intl.Segmenter(undefined, {
      granularity: "grapheme",
    });

    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }, [text]);

  useEffect(() => {
    setCount(0);

    if (reducedMotion || characters.length === 0) return;

    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    function typeNext() {
      index += 1;
      setCount(index);

      if (index < characters.length) {
        timer = setTimeout(typeNext, Math.max(1, speed));
      }
    }

    timer = setTimeout(typeNext, Math.max(0, delay));

    return () => clearTimeout(timer);
  }, [characters, speed, delay, reducedMotion]);

  const visibleText = reducedMotion
    ? text
    : characters.slice(0, count).join("");

  return (
    <span
      className={cn(
        "font-mono whitespace-pre-wrap wrap-break-words",
        className,
      )}
    >
      {/* Screen readers receive the complete text once. */}
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {visibleText}
        {!!cursor && (
          <motion.span
            className={cn("ml-0.5 inline-block", count == 0 && "invisible")}
            initial={{ opacity: 1 }}
            animate={
              reducedMotion
                ? { opacity: 1 }
                : { opacity: [1, 1, 0, 0] }
            }
            transition={{
              duration: 1,
              times: [0, 0.49, 0.5, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          >{cursor}</motion.span>
        )}
      </span>
    </span>
  );
}
