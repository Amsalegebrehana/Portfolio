"use client";

import { Star } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { Testimonial } from "@/data/testimonials";

/** Compact testimonial: quote clamped to a few lines, with "See more" only when it actually overflows. */
export function TestimonialCard({ t, focusable = true }: { t: Testimonial; focusable?: boolean }) {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const quoteId = useId();
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    const measure = () => {
      if (!expanded) setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [expanded]);

  return (
    <figure className="flex min-h-64 w-full flex-col rounded-2xl border border-line bg-bg p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_var(--shadow)]">
      {t.rating && (
        <p className="flex items-center gap-0.5" aria-label={`Rated ${t.rating.toFixed(1)} out of 5`}>
          {Array.from({ length: 5 }, (_, s) => (
            <Star
              key={s}
              size={14}
              aria-hidden="true"
              className={s < Math.round(t.rating!) ? "fill-star text-star" : "text-line"}
            />
          ))}
          <span aria-hidden="true" className="ml-1.5 text-xs font-semibold text-heading">
            {t.rating.toFixed(1)}
          </span>
        </p>
      )}

      <div className="mt-3 mb-4 flex flex-col">
        <blockquote className="text-sm leading-6 text-ink">
          <p id={quoteId} ref={quoteRef} className={expanded ? "" : "line-clamp-4"}>
            “{t.quote}”
          </p>
        </blockquote>
        {(overflows || expanded) && (
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={quoteId}
            tabIndex={focusable ? undefined : -1}
            onClick={() => setExpanded((e) => !e)}
            className="mt-1.5 self-start text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>

      <figcaption className="mt-auto border-t border-line pt-3 text-xs">
        <span className="line-clamp-1 font-medium text-heading" title={t.project}>
          {t.project}
        </span>
        <span className="text-muted">
          {t.source} client · {t.period}
        </span>
      </figcaption>
    </figure>
  );
}
