"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY as STORAGE_KEY } from "./themeScript";

type Theme = "light" | "dark" | "system";

const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
  { value: "system", label: "System theme", Icon: Monitor },
];

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
}

export function ThemeToggle() {
  // Unknown until mounted; rendering nothing active on the server keeps hydration consistent.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    setTheme(saved === "light" || saved === "dark" ? saved : "system");
  }, []);

  return (
    <div role="radiogroup" aria-label="Colour theme" className="flex items-center rounded-full border border-line p-0.5">
      {options.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => {
              setTheme(value);
              applyTheme(value);
            }}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
              active ? "bg-navy text-on-navy" : "text-muted hover:text-heading"
            }`}
          >
            <Icon size={14} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
