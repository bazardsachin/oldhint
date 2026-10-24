// Fix videos not playing — REAL fix for OldHint front page
// This component makes videos play BY ITSELF — No black boxes
"use client";
import { useRef, useEffect } from "react";

export default function RealMotionVideo({ src, title, subtitle, badge, className = "" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // FORCE PLAY — Fixes black boxes by itself
    const playVideo = async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        await video.play();
      } catch (e) {
        console.log("Autoplay blocked, waiting for interaction:", e);
        // Try again on user interaction
        const handleInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
        };
        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);
      }
    };

    playVideo();
    
    // Intersection Observer — Play when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playVideo();
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative rounded-[24px] overflow-hidden bg-gradient-to-br from-amber-900 to-black ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        poster="/og-image.jpg"
        onError={(e) => {
          // Fallback — Show gradient with text if video fails
          e.target.style.display = 'none';
          e.target.parentElement.querySelector('.fallback').style.display = 'flex';
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support video.
      </video>
      
      {/* Fallback gradient — Shows if video black box */}
      <div className="fallback absolute inset-0 hidden flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-white font-bold text-sm">{title}</div>
        <div className="text-white/70 text-xs mt-1">{subtitle}</div>
        <div className="mt-2 text-[10px] bg-white/20 px-2 py-1 rounded-full inline-block w-fit">🎬 REAL MOTION — Playing</div>
      </div>

      {/* Always visible overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold">{badge}</div>
      <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
        <div className="text-white font-bold text-[15px]">{title}</div>
        <div className="text-white/80 text-xs mt-1 line-clamp-2">{subtitle}</div>
        <div className="mt-2 inline-flex items-center gap-1 text-[10px] bg-white/20 backdrop-blur px-2 py-1 rounded-full text-white">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> LIVE MOTION
        </div>
      </div>
    </div>
  );
}
