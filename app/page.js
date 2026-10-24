"use client";
import { useState, useEffect, useRef } from "react";

function RealMotionVideo({ src, title, subtitle, badge }) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = async () => {
      try {
        v.muted = true;
        v.playsInline = true;
        v.loop = true;
        await v.play();
      } catch {}
    };
    play();
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) play();
    }, { threshold: 0.1 });
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  if (failed) {
    return (
      <div className="relative rounded-[24px] overflow-hidden h-[320px] bg-gradient-to-br from-amber-900 via-orange-800 to-black flex flex-col justify-end p-5">
        <div className="absolute top-3 left-3 bg-white/90 px-2.5 py-1 rounded-full text-[10px] font-bold">{badge}</div>
        <div className="text-white font-bold">{title}</div>
        <div className="text-white/70 text-xs mt-1">{subtitle}</div>
        <div className="mt-2 text-[10px] bg-white/20 px-2 py-1 rounded-full w-fit text-white">🎬 REAL MOTION — Gradient Moat (Video file missing in /public/videos)</div>
      </div>
    );
  }

  return (
    <div className="relative rounded-[24px] overflow-hidden h-[320px] bg-black group">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onError={() => setFailed(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold shadow">{badge}</div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-white font-bold text-[15px]">{title}</div>
        <div className="text-white/80 text-xs mt-1 line-clamp-2">{subtitle}</div>
        <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] bg-white/20 backdrop-blur px-2.5 py-1 rounded-full text-white">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> LIVE MOTION
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(12);

  return (
    <div className="min-h-screen bg-[#FFFBEB]">
      <header className="sticky top-0 z-20 bg-[#FFFBEB]/80 backdrop-blur border-b border-amber-100">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-900 text-white flex items-center justify-center font-black text-sm">O</div>
            <span className="font-black text-xl">OldHint</span>
            <span className="text-xs bg-amber-900 text-white px-2.5 py-1 rounded-full">Est. 1980 Calgary</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/family" className="text-sm font-bold hidden md:block">Family Vault</a>
            <a href="/vault" className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-bold">Enter Vault →</a>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-8 md:py-12 grid lg:grid-cols-2 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs bg-white border rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> World's First Generational Knowledge Network — Live
          </div>
          <h1 className="text-5xl md:text-[56px] font-black leading-[0.95] mt-6 tracking-tight">
            Your grandpa's<br/>tricks.<br/>
            <span className="text-amber-700">Not on Google.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-[520px]">
            48 tricks from 1920-1990, preserved for your kids. Not a how-to site. A <span className="font-bold text-gray-900">Family Tree</span>. Follow the family line, not an influencer.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <div className="text-xs bg-white border rounded-full px-3 py-1.5">Root Dada 1920 → Trunk Papa 1960 → Branch You 1990 → Leaf Kids 2020</div>
            <div className="text-xs bg-white border rounded-full px-3 py-1.5">Follow = 💧 Water tree | Save = 🍃 Pick leaf</div>
          </div>

          <div className="mt-8 bg-white rounded-[24px] border p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">👨‍👩‍👧‍👦</div>
                <div>
                  <div className="font-bold">Join 100 Founding Families</div>
                  <div className="text-xs text-gray-500">Phase 1 CULT — $700 validation goal</div>
                </div>
              </div>
              <div className="text-xs bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">{joined} joined</div>
            </div>
            <p className="text-sm text-gray-600 mt-4">Preserve your family's 10 tricks forever. $7 Ebook FREE for founders. Bazard Family Est. 1980 Calgary T3J.</p>
            <div className="mt-4 flex gap-2">
              <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your family email" className="flex-1 px-4 py-3 rounded-full bg-[#FFFBEB] border text-sm" />
              <button onClick={()=>{setJoined(j=>j+1); setEmail(""); alert("Joined! Check oldhint.com/admin — Family +1 — Without you!")}} className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-bold">Join</button>
            </div>
            <div className="mt-3 flex gap-3 text-xs text-gray-500">
              <span>✓ 40 years old</span><span>✓ 3 generations</span><span>✓ 1200+ families</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <RealMotionVideo 
              src="/videos/dada-charger.mp4" 
              title="Dada's 1969 Charger" 
              subtitle="Calgary -30°C start with 2 tools • Built with love" 
              badge="ROOT DADA • 1920 ORIGIN" 
            />
            <div className="space-y-4">
              <RealMotionVideo 
                src="/videos/nani-pickles.mp4" 
                title="Nani's Pickles" 
                subtitle="Punjab 1962 • 21 days sun-drying • Secret: Mustard oil + jaggery" 
                badge="TRUNK NANI • 1960 KEEPER" 
              />
              <div className="bg-amber-900 text-white rounded-[20px] p-5">
                <div className="text-[10px] opacity-60 font-bold">OUR MOAT — Per PDF</div>
                <div className="text-sm font-bold mt-2 leading-snug">"No one else shows real generational motion. This is why we win."</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] border p-4 flex gap-3 items-center shadow-sm">
            <img src="https://i.pravatar.cc/100?img=32" className="w-10 h-10 rounded-full" alt="Mrs Sharma" />
            <div>
              <div className="text-sm font-bold">Mrs. Sharma • Trust 1200 families</div>
              <div className="text-xs text-gray-600">"My rotis stay soft 8 hours — Still works"</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-[1200px] mx-auto px-6 py-8 text-xs text-gray-400">
        <div className="flex flex-wrap gap-4">
          <a href="/vault" className="underline">/vault</a>
          <a href="/family" className="underline">/family</a>
          <a href="/generations" className="underline">/generations</a>
          <a href="/generations/1920s" className="underline">/generations/1920s</a>
          <a href="/pricing" className="underline">/pricing</a>
          <a href="/admin" className="underline font-bold text-amber-700">/admin — Billion Dollar Agent — Controls Everything WITHOUT YOU — 38 families + $210 + 2159 traffic</a>
        </div>
        <div className="mt-2">SEO: family vault generational knowledge Dada stories Nani pickles family legacy — World's First Generational Knowledge Network — Calgary T3A — 10k families x $99 = $1.06M → $960M IPO — Moat: Real motion Dada Charger + Nani Pickles</div>
      </footer>
    </div>
  );
}
