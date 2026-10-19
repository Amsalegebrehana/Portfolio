import { GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { sectionCopy, site } from "@/data/site";

export function About() {
  return (
    <Section id="about" index="01" title="About" intro={sectionCopy.about} tone="alt">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <p className="max-w-[65ch] text-lg leading-8 text-ink">{site.summary}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-6 border-l-2 border-heading pl-6">
            <div>
              <dt className="flex items-center gap-2 text-sm font-medium text-muted">
                <MapPin size={16} aria-hidden="true" /> Based in
              </dt>
              <dd className="mt-1 font-medium text-heading">{site.location}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-medium text-muted">
                <GraduationCap size={16} aria-hidden="true" /> Education
              </dt>
              <dd className="mt-1 font-medium text-heading">{site.education.degree}</dd>
              <dd className="text-sm text-muted">
                {site.education.school} · {site.education.period}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
