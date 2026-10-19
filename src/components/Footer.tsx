import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-on-navy/70">
      <div className="mx-auto flex max-w-275 flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.fullName}
        </p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
