import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { sectionCopy } from "@/data/site";
import { skills } from "@/data/skills";

// Two rows scrolling in opposite directions: first half of the groups, then the rest.
const half = Math.ceil(skills.length / 2);
const rows = [skills.slice(0, half), skills.slice(half)].map((groups) => ({
  label: groups.map((g) => g.title).join(", "),
  items: groups.flatMap((g) => g.items),
}));

export function Skills() {
  return (
    <Section id="skills" index="02" title="Skills" intro={sectionCopy.skills}>
      <div className="flex flex-col gap-5">
        {rows.map(({ label, items }, r) => (
          <Reveal key={r} delay={r * 0.1}>
            <Marquee
              duration={items.length * 3}
              reverse={r % 2 === 1}
              gap={16}
              label={label}
              className="-my-2 py-2"
            >
              {items.map((item) => (
                <li
                  key={item}
                  className="flex shrink-0 items-center gap-3 rounded-xl border border-line bg-bg px-5 py-3.5 text-heading transition-[transform,background-color,color] duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-on-navy"
                >
                  <SkillIcon name={item} />
                  <span className="font-display text-base font-medium whitespace-nowrap">{item}</span>
                </li>
              ))}
            </Marquee>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
