import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

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
          background:
            "radial-gradient(1200px 630px at 100% 0%, #577590 0%, #1a2228 55%)",
          color: "white",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #577590, #f2a541, #f08a4b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            S
          </div>
          <span style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Spint<span style={{ color: "#f08a4b" }}>soft</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "960px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Software a Medida &amp;&nbsp;
            <span style={{ color: "#f2a541" }}>Sistemas de Gestión</span>
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#cbd5e1",
              maxWidth: "860px",
              lineHeight: 1.35,
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "24px",
            color: "#e2e8f0",
          }}
        >
          <span>Presencia Digital</span>
          <span style={{ color: "#f08a4b" }}>•</span>
          <span>Sistemas de Gestión</span>
          <span style={{ color: "#f08a4b" }}>•</span>
          <span>Automatización</span>
          <span style={{ color: "#f08a4b" }}>•</span>
          <span>Software a Medida</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
