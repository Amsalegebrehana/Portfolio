type MarqueeProps = {
  /** List items, or a function receiving `isCopy` so interactive items can drop out of the tab order in the copy. */
  children: React.ReactNode | ((isCopy: boolean) => React.ReactNode);
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  /** Gap between items, in px. */
  gap?: number;
  className?: string;
  label?: string;
};

/**
 * Infinite horizontal scroller. Children (list items) are rendered twice so the loop is seamless;
 * the copy is hidden from assistive tech. Pauses on hover and while anything inside is expanded;
 * becomes a plain scrollable row when the user prefers reduced motion.
 */
export function Marquee({ children, duration = 40, reverse = false, gap = 24, className = "", label }: MarqueeProps) {
  const style = { "--marquee-duration": `${duration}s`, "--marquee-gap": `${gap}px`, gap } as React.CSSProperties;
  const listClass = "flex shrink-0 items-stretch";
  const render = (isCopy: boolean) => (typeof children === "function" ? children(isCopy) : children);

  return (
    <div
      className={`group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none] ${className}`}
    >
      <div
        style={style}
        className={`flex w-max group-hover:[animation-play-state:paused] has-[[aria-expanded=true]]:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        <ul aria-label={label} className={listClass} style={{ gap }}>
          {render(false)}
        </ul>
        <ul aria-hidden="true" className={`${listClass} motion-reduce:hidden`} style={{ gap }}>
          {render(true)}
        </ul>
      </div>
    </div>
  );
}
