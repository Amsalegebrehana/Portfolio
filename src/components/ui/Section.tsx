import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  /** Large heading under the label. Optional: without it, the label itself becomes the section heading. */
  intro?: string;
  tone?: "light" | "alt" | "navy";
  /** Wider container (1280px instead of 1100px) for content with long lines. */
  wide?: boolean;
  children: React.ReactNode;
};

const tones = {
  light: "bg-bg text-ink",
  alt: "bg-bg-alt text-ink",
  navy: "bg-navy text-on-navy",
};

export function Section({ id, index, title, intro, tone = "light", wide = false, children }: SectionProps) {
  const onNavy = tone === "navy";
  // The label is the accessible heading when there's no intro line.
  const Label = intro ? "p" : "h2";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${tones[tone]} py-20 sm:py-28`}>
      <div className={`mx-auto px-5 sm:px-8 ${wide ? "max-w-320" : "max-w-275"}`}>
        <Reveal className="mb-12 sm:mb-16">
          <Label
            id={intro ? undefined : `${id}-title`}
            className={`font-display text-sm font-medium tracking-[0.2em] uppercase ${
              onNavy ? "text-on-navy/70" : "text-muted"
            }`}
          >
            <span aria-hidden="true">{index} — </span>
            {title}
          </Label>
          {intro && (
            <h2
              id={`${id}-title`}
              className={`font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${
                onNavy ? "text-on-navy" : "text-heading"
              }`}
            >
              {intro}
            </h2>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
