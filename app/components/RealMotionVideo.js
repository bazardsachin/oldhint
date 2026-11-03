"use client";
import { useState } from "react";

export default function RealMotionVideo({ src, alt }) {
  const [err, setErr] = useState(false);
  if (err || !src) {
    return (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#f59e0b,#78350f)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "11px", fontWeight: "800", textAlign: "center", padding: "10px" }}>
        {alt || "Real Motion - Moat LIVE - Fallback - No black box - Real videos image_20261015_213541.mp4 plus image_20261015_213543.mp4"}
      </div>
    );
  }
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      onError={() => setErr(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px", background: "black", display: "block" }}
    />
  );
}
