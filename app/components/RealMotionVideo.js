"use client";
import { useState, useEffect, useRef } from "react";

export default function RealMotionVideo({ src, alt }) {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  if (hasError || !src) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1a1a1a 0%, #78350f 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fde68a",
          fontSize: "11px",
          fontWeight: "800",
          textAlign: "center",
          padding: "12px",
          borderRadius: "16px"
        }}
      >
        Real Motion — Moat LIVE — No Black Box — Fallback Gradient
        <br />
        {alt || "OldHint Video"}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        background: "black",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onError={() => setHasError(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block"
        }}
      />
    </div>
  );
}
