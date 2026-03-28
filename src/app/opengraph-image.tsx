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
          backgroundColor: "#09090B",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Violet radial glow */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 30%, transparent 55%)",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top border accent */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent 0%, #8b5cf6 25%, #8b5cf6 75%, transparent 100%)",
            opacity: 0.5,
          }}
        />

        {/* Terminal-style decorative element - top left */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "40px",
            left: "48px",
            flexDirection: "column",
            gap: "6px",
            opacity: 0.2,
          }}
        >
          <div style={{ display: "flex", gap: "6px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#8b5cf6" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#6d28d9" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#4c1d95" }} />
          </div>
          <div style={{ display: "flex", fontSize: "14px", color: "#8b5cf6", fontFamily: "monospace" }}>
            $ claude --skill vibecode
          </div>
          <div style={{ display: "flex", fontSize: "14px", color: "#5b21b6", fontFamily: "monospace" }}>
            Generating iOS app...
          </div>
        </div>

        {/* Terminal-style decorative element - bottom right */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "70px",
            right: "48px",
            flexDirection: "column",
            gap: "4px",
            alignItems: "flex-end",
            opacity: 0.15,
          }}
        >
          <div style={{ display: "flex", fontSize: "13px", color: "#8b5cf6", fontFamily: "monospace" }}>
            BUILD SUCCEEDED
          </div>
          <div style={{ display: "flex", fontSize: "13px", color: "#5b21b6", fontFamily: "monospace" }}>
            33 apps shipped
          </div>
        </div>

        {/* Dot pattern accents */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "50px",
            right: "200px",
            width: "100px",
            height: "100px",
            backgroundImage:
              "radial-gradient(circle, rgba(139, 92, 246, 0.12) 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "80px",
            left: "200px",
            width: "80px",
            height: "80px",
            backgroundImage:
              "radial-gradient(circle, rgba(139, 92, 246, 0.08) 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Decorative ring */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "1px solid rgba(139, 92, 246, 0.08)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            backgroundColor: "rgba(139, 92, 246, 0.15)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            marginBottom: "28px",
            fontSize: "24px",
            fontWeight: "900",
            color: "#8b5cf6",
          }}
        >
          V
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            color: "#fafafa",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Ship 30+ Apps/Year
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            textAlign: "center",
            color: "#8b5cf6",
            marginBottom: "28px",
          }}
        >
          Solo
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#71717a",
            textAlign: "center",
            maxWidth: "680px",
            lineHeight: 1.5,
          }}
        >
          The complete vibecoding methodology for building profitable iOS apps at scale using AI
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {[
            { label: "33+ Apps", value: "Shipped" },
            { label: "16", value: "Modules" },
            { label: "54+", value: "Lessons" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                padding: "8px 20px",
                borderRadius: "20px",
                backgroundColor: "rgba(139, 92, 246, 0.06)",
                border: "1px solid rgba(139, 92, 246, 0.12)",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#8b5cf6", fontSize: "14px", fontWeight: "700" }}>{stat.label}</span>
              <span style={{ color: "#52525b", fontSize: "14px" }}>{stat.value}</span>
            </div>
          ))}
        </div>

        {/* URL footer */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "32px",
            right: "48px",
          }}
        >
          <span style={{ fontSize: "18px", color: "#52525b", fontWeight: "500" }}>
            vibecodeyour.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
