import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#1b2a47",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.75, letterSpacing: 4, textTransform: "uppercase" }}>
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ fontSize: 44, marginTop: 20, opacity: 0.85 }}>{site.role}</div>
        </div>
        <div style={{ fontSize: 28, opacity: 0.75 }}>
          Python · FastAPI · React · TypeScript · Node.js · PostgreSQL
        </div>
      </div>
    ),
    size,
  );
}
