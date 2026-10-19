import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { TypedText } from "@/components/ui/TypedText";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden bg-bg pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Faint blueprint grid, fades out toward the bottom. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid max-w-275 gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1 text-sm font-medium text-muted">
            <MapPin size={14} aria-hidden="true" />
            {site.role} · {site.location}
          </p>

          <h1 className="font-display mt-6 text-5xl leading-[1.02] font-bold tracking-tight text-heading sm:text-7xl">
            <TypedText text={site.name} />
          </h1>

          <p className="mt-6 max-w-[34ch] text-xl leading-relaxed text-ink sm:text-2xl">{site.headline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 font-medium text-on-navy transition-colors hover:bg-navy-deep"
            >
              View my work
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-heading/20 px-5 py-3 font-medium text-heading transition-colors hover:border-heading"
            >
              Get in touch
            </a>
            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-3 py-3 font-medium text-heading underline-offset-4 hover:underline"
              >
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>
            )}
          </div>

          <ul className="mt-10 flex gap-2" aria-label="Profiles">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.label !== "Email" && { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-heading transition-colors hover:bg-bg-alt"
                >
                  <SocialIcon label={s.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-label="Highlights"
          className="relative rounded-2xl bg-navy p-7 text-on-navy shadow-[0_30px_60px_-30px_rgba(15,27,51,0.6)] sm:p-8"
        >
          {site.photo && (
            <Image
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              width={96}
              height={96}
              priority
              className="mb-6 h-24 w-24 rounded-full object-cover ring-4 ring-on-navy/15"
            />
          )}
          <dl className="divide-y divide-on-navy/15">
            {site.highlights.map((h) => (
              <div key={h.label} className="flex items-baseline gap-5 py-4 first:pt-0 last:pb-0">
                <dt className="font-display w-24 shrink-0 text-3xl font-semibold tracking-tight">{h.value}</dt>
                <dd className="text-sm leading-snug text-on-navy/80">{h.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
