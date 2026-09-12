import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Heek-E — Building better distribution for SaaS brands.";

const titleStyle = {
  fontSize: "72px",
  fontWeight: 800,
  letterSpacing: "-3px",
  lineHeight: 1.05,
};

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#090909",
          color: "#f7f6f0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "20px",
          }}
        >
          <div style={{ fontSize: "40px", fontWeight: 800, letterSpacing: "-1px" }}>
            HEEK-E
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#a4a49d",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Digital Marketing + Influencer Agency
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={titleStyle}>Building better distribution</div>
          <div style={{ ...titleStyle, color: "#fff200" }}>for SaaS brands.</div>
        </div>
      </div>
    ),
    { ...size }
  );
}