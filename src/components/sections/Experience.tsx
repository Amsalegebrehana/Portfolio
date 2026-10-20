"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/experience";
import { sectionCopy } from "@/data/site";

// Track and fill are centred on the 11px dots (dot centre = 5.5px from the column edge).
const trackX = "left-[5px] md:left-[calc(12rem+5px)]";
const fillX = "left-[4px] md:left-[calc(12rem+4px)]";

/** Timeline dot that turns blue once it's above the middle of the viewport (i.e. the fill has reached it). */
function Dot() {
  const ref = useRef<HTMLSpanElement>(null);
  // Huge top margin keeps dots that have scrolled past the top "reached"; -50% bottom = viewport middle.
  const reached = useInView(ref, { margin: "100000px 0px -50% 0px" });
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`absolute top-2 left-0 z-10 h-[11px] w-[11px] rounded-full border-2 transition-[background-color,border-color,box-shadow] duration-500 md:left-48 ${
        reached
          ? "border-accent bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_25%,transparent)]"
          : "border-heading bg-bg"
      }`}
    />
  );
}

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 50%", "end 50%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <Section id="experience" index="03" title="Experience" intro={sectionCopy.experience} tone="alt" wide>
      <div className="relative">
        <span aria-hidden="true" className={`absolute top-2 bottom-2 w-px bg-line ${trackX}`} />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: fill }}
          className={`absolute top-2 bottom-2 w-[3px] origin-top rounded-full bg-accent ${fillX}`}
        />
        <ol ref={listRef} className="relative space-y-12">
          {experience.map((role) => (
            <Reveal as="li" key={`${role.company}-${role.period}`} className="relative grid gap-3 pl-8 md:grid-cols-[12rem_1fr] md:gap-10 md:pl-0">
              <Dot />
              <p className="text-sm font-medium text-muted md:pt-0.5 md:text-right md:pr-6">{role.period}</p>

              <div className="md:pl-10">
                <h3 className="font-display text-xl font-semibold tracking-tight text-heading">
                  {role.title} <span className="text-muted">·</span> {role.company}
                  {role.type && <span className="ml-2 align-middle text-sm font-medium text-muted">({role.type})</span>}
                </h3>
                <ul className="mt-4 space-y-3 leading-7 text-ink">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.75 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
                  {role.stack.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
