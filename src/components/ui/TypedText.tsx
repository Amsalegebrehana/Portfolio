"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type TypedTextProps = {
  text: string;
  /** Milliseconds per character. */
  speed?: number;
  /** Milliseconds before the first character appears. */
  startDelay?: number;
};

/**
 * Types `text` out one character at a time with a blinking caret.
 * Screen readers get the full text immediately; the full text is also laid out invisibly
 * underneath so the heading never changes size (no layout shift).
 */
export function TypedText({ text, speed = 90, startDelay = 300 }: TypedTextProps) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Decided after mount, not during render, so server and client HTML match (no hydration error).
    if (reduceMotion) {
      setCount(text.length);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < text.length) timer = setTimeout(tick, speed);
    };
    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [text, speed, startDelay, reduceMotion]);

  const shown = text.slice(0, count);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="relative inline-block">
        <span className="invisible">{text}</span>
        <span className="absolute inset-0">
          {shown}
          <span className="animate-caret ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.08em] bg-current" />
        </span>
      </span>
    </>
  );
}
