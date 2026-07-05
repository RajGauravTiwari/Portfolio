import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

// Render on demand rather than at build time. Avoids a Windows-only
// @vercel/og path bug during static export; works normally on Vercel.
export const dynamic = "force-dynamic";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1000px 500px at 50% -10%, #1e1b4b 0%, #0a0a12 55%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg,#6366f1,#22d3ee)",
              color: "white",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            RT
          </div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 26 }}>
            {site.subheading}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ color: "white", fontSize: 40, fontWeight: 500 }}>
            {site.name}
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              background: "linear-gradient(90deg,#818cf8,#c084fc,#67e8f9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Building Intelligent
            <br />
            Systems at Scale.
          </div>
        </div>

        <div style={{ display: "flex", gap: 48 }}>
          {[
            ["13.4M", "Tenants Scored"],
            ["284", "Features"],
            ["0.998", "PR-AUC"],
            ["Expert", "Codeforces"],
          ].map(([v, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "white", fontSize: 40, fontWeight: 700 }}>
                {v}
              </span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 22 }}>
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
