export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-bg px-2.5 py-1 text-xs font-medium text-heading">
      {children}
    </span>
  );
}
