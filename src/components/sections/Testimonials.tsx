import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { sectionCopy } from "@/data/site";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const featured = testimonials.filter((t) => t.featured);

  return (
    <Section id="testimonials" index="05" title="Testimonials" intro={sectionCopy.testimonials} tone="alt">
      <Reveal>
        <Marquee duration={featured.length * 8} gap={20} label="Client testimonials" className="-my-4 py-4">
          {(isCopy) =>
            featured.map((t) => (
              <li key={t.project} className="flex w-64 shrink-0 self-start sm:w-72">
                <TestimonialCard t={t} focusable={!isCopy} />
              </li>
            ))
          }
        </Marquee>
      </Reveal>
    </Section>
  );
}
