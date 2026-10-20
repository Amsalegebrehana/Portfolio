import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";
import { sectionCopy } from "@/data/site";

export function Projects() {
  return (
    <Section id="projects" index="04" title="Projects" intro={sectionCopy.projects}>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={i * 0.08}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_var(--shadow)] motion-reduce:hover:translate-y-0">
              {project.image ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1200}
                  height={675}
                  className="aspect-video w-full object-cover"
                />
              ) : (
                <div aria-hidden="true" className="relative aspect-[16/7] bg-navy">
                  <span className="font-display absolute bottom-4 left-6 text-6xl font-bold text-on-navy/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display absolute top-5 left-6 text-sm tracking-[0.2em] text-on-navy/70 uppercase">
                    {project.tagline}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-heading">{project.title}</h3>
                <p className="mt-3 leading-7 text-ink">{project.description}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1 w-3 shrink-0 bg-heading/40" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>

                {(project.repoUrl || project.liveUrl) && (
                  <div className="mt-auto flex gap-5 pt-6 text-sm font-medium">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-heading underline-offset-4 hover:underline"
                      >
                        <SocialIcon label="GitHub" size={16} /> Code
                        <span className="sr-only"> for {project.title}</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-heading underline-offset-4 hover:underline"
                      >
                        <ExternalLink size={16} aria-hidden="true" /> Live
                        <span className="sr-only"> demo of {project.title}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
