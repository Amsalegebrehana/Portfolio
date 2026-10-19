import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { sectionCopy, site } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" index="06" title="Contact" intro={sectionCopy.contact} tone="navy">
      <Reveal>
        <p className="max-w-[55ch] text-lg leading-8 text-on-navy/80">{site.contactBlurb}</p>
        <a
          href={`mailto:${site.email}`}
          className="font-display group mt-8 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight break-all text-on-navy underline decoration-on-navy/30 underline-offset-8 transition-colors hover:decoration-on-navy sm:text-4xl"
        >
          {site.email}
          <ArrowUpRight
            size={32}
            aria-hidden="true"
            className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        <ul className="mt-12 flex flex-wrap gap-3">
          {site.socials
            .filter((s) => s.label !== "Email")
            .map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-on-navy/25 px-4 py-2.5 font-medium text-on-navy transition-colors hover:bg-on-navy hover:text-navy"
                >
                  <SocialIcon label={s.label} size={18} />
                  {s.label}
                </a>
              </li>
            ))}
        </ul>
      </Reveal>
    </Section>
  );
}
