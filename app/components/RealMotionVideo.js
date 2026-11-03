"use client";
import { useState, useEffect, useRef } from "react";

export default function RealMotionVideo({ src, alt }) {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  if (hasError || !src) {
    return (
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #1a1a1a 0%, #78350f 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fde68a", fontSize: "11px", fontWeight: "800", textAlign: "center", padding: "12px", borderRadius: "16px" }}>
        Real Motion — No Black Box — Fallback
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      onError={() => setHasError(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "16px", background: "black" }}
    />
  );
}
