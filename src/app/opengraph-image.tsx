import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Deploy Janitor — Fix AI-Generated Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#10b981",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              color: "#10b981",
              fontSize: "18px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "4px",
            }}
          >
            Deploy Janitor
          </span>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Your AI Wrote the Code.
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#10b981",
            lineHeight: 1.1,
            marginBottom: "32px",
          }}
        >
          We Make It Work.
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            lineHeight: 1.5,
          }}
        >
          Security audits, performance optimization, refactoring, and test coverage for AI-generated codebases.
        </div>
      </div>
    ),
    { ...size }
  );
}
