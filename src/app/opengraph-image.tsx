import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vibe Code Your App - Ship 30+ iOS Apps/Year Solo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 14,
            backgroundColor: "#8b5cf6",
            marginBottom: 32,
            fontSize: 24,
            fontWeight: 900,
            color: "white",
          }}
        >
          V
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#f0f0f0",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Ship 30+ Apps/Year
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            textAlign: "center",
            background: "linear-gradient(to right, #a78bfa, #c084fc, #e879f9)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 32,
          }}
        >
          Solo
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#737373",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          The complete vibecoding methodology for building profitable iOS apps at scale using AI
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 48,
            fontSize: 16,
            color: "#555",
          }}
        >
          <span>33+ Apps Shipped</span>
          <span>16 Modules</span>
          <span>54+ Lessons</span>
          <span>vibecodeyour.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
