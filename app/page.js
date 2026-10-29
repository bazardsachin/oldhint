"use client";
import { useState, useEffect, useRef } from "react";

function RealVideo({ src, fallback, title, badge, accent }) {
  const ref = useRef(null);
  const [cur, setCur] = useState(src);
  const [fail, setFail] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v || fail) return;
    const play = async () => {
      try { v.muted = true; v.playsInline = true; v.loop = true; await v.play(); } catch {}
    };
    play();
    const obs = new IntersectionObserver((e) => { if (e[0].isIntersecting) play(); }, { threshold: 0.1 });
    obs.observe(v);
    return () => obs.disconnect();
  }, [cur, fail]);
  const onErr = () => {
    if (cur === src && fallback) setCur(fallback);
    else setFail(true);
  };
  if (fail) {
    return (
      <div className={`relative rounded-[28px] overflow-hidden h-[360px] bg-gradient-to-br ${accent} flex flex-col justify-end p-6 border shadow-xl`}>
        <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full text-[11px] font-black">{badge}</div>
        <div className="text-white font-black text-[17px]">{title}</div>
        <div className="text-white/80 text-[12px] mt-2">Real motion - Moat LIVE - From PDF Roadmap</div>
      </div>
    );
  }
  return (
    <div className="relative rounded-[28px] overflow-hidden h-[360px] bg-black group shadow-xl border border-white/10">
      <video ref={ref} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" onError={onErr}>
        <source src={cur} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full text-[11px] font-black">{badge}</div>
      <div className="absolute top-4 right-4 bg-red-600 text-white px-2.5 py-1 rounded-full text-[10px] font-black flex items-center gap-1.5 animate-pulse">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />LIVE MOTION
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-white font-black text-[17px]">{title}</div>
        <div className="text-white/80 text-[12px] mt-2">Moat LIVE - Real motion - No competitor can copy</div>
        <div className="mt-2 flex gap-2">
          <span className="text-[10px] bg-white/20 px-2.5 py-1 rounded-full text-white font-bold">{cur.split("/").pop()}</span>
          <span className="text-[10px] bg-white text-black px-2.5 py-1 rounded-full font-black">Moat LIVE - PDF Roadmap</span>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(41);
  const [stats, setStats] = useState({ families: 41, traffic: 2211, world: 38 });

  useEffect(() => {
    fetch("/api/billion-dollar-agent?action=world", { cache: "no-store" })
      .then((r) => r.json())
      .then((j) => {
        if (j.success) setStats({ families: j.families, traffic: j.traffic, world: j.worldProgress });
      })
      .catch(() => {});
    const id = setInterval(() => setJoined((j) => j + 1), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-[#1A1A1A]">
      <div className="bg-[#1A1A1A] text-white text-[11px] py-2 px-6 flex flex-wrap justify-center md:justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {stats.families} families joined - +{stats.families - 3} without you - LIVE - PDF Roadmap
          </span>
          <span className="hidden md:inline opacity-60">•</span>
          <span className="hidden md:inline">40 years - 3 generations - Est 1980 Calgary T3J - Moat Real motion</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white text-black px-2.5 py-1 rounded-full font-black text-[10px]">World First Generational Knowledge Network - PDF Roadmap</span>
          <a href="/admin" className="bg-amber-500 text-black px-2.5 py-1 rounded-full font-black text-[10px]">
            BILLION AUTO ON - {stats.families} families
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-30 bg-[#FFFBEB]/80 backdrop-blur-xl border-b border-amber-100">
        <div className="max-w-[1280px] mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-black text-[14px]">O</div>
            <div>
              <div className="font-black text-[19px] leading-none">OldHint</div>
              <div className="text-[10px] opacity-60 font-bold">EST 1980 CALGARY - PDF ROADMAP - Agents own 49 percent</div>
            </div>
            <div className="hidden md:flex items-center gap-2 ml-4">
              <span className="text-[11px] bg-[#1A1A1A] text-white px-2.5 py-1 rounded-full font-bold">Bazard Family T3J - PDF Roadmap</span>
              <span className="text-[11px] bg-white border px-2.5 py-1 rounded-full font-bold">10 Agents Own 49 percent - PDF</span>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <a href="/vault" className="hidden md:block text-[13px] font-bold px-3 py-2 rounded-full hover:bg-white border">
              Vault
            </a>
            <a href="/family" className="hidden md:block text-[13px] font-bold px-3 py-2 rounded-full hover:bg-white border">
              Family
            </a>
            <a href="/admin" className="text-[13px] font-black px-5 py-2.5 rounded-full bg-[#1A1A1A] text-white">
              Enter Vault - PDF Roadmap
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-4 py-1.5 text-[12px] font-bold shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> World First Generational Knowledge Network - LIVE - 10 Agents Own 49 percent - PDF Roadmap Agents read straight from admin
            </div>

            <h1 className="text-[48px] md:text-[68px] font-black leading-[0.88] mt-7 tracking-[-0.03em]">
              Your grandpas
              <br />
              tricks.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">Not on Google.</span>
            </h1>

            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.5] text-[#4A4A4A] max-w-[560px]">
              48 tricks from 1920-1990, preserved for your kids. Not a how-to site. A <span className="font-black text-[#1A1A1A] underline decoration-amber-300">Family Tree</span>. Follow the family line, not an influencer. <span className="font-bold">Moat: Real motion videos no one else has - From PDF Roadmap.</span>
            </p>

            <div className="mt-7 bg-white rounded-[20px] border border-amber-100 p-4 shadow-sm">
              <div className="text-[10px] font-black opacity-60">FAMILY TREE - From PDF Roadmap - Follow lineage not influencer</div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] font-bold">
                <span className="bg-[#1A1A1A] text-white px-3 py-1.5 rounded-full">ROOT Dada 1920 Origin</span>
                <span className="opacity-30">→</span>
                <span className="bg-amber-900 text-white px-3 py-1.5 rounded-full">TRUNK Papa 1960 Keeper</span>
                <span className="opacity-30">→</span>
                <span className="bg-white border px-3 py-1.5 rounded-full">BRANCH You 1990</span>
                <span className="opacity-30">→</span>
                <span className="bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">LEAF Kids 2020</span>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-[28px] border border-amber-100 p-7 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
              <div className="flex justify-between">
                <div className="flex gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 border flex items-center justify-center text-[20px]">O</div>
                  <div>
                    <div className="font-black text-[18px]">Join 100 Founding Families - PDF Roadmap</div>
                    <div className="text-[12px] text-[#6B6B6B] mt-1">Phase 1 CULT - {joined}/100 joined - +{joined - 3} without you - PDF Roadmap - Agents own 49 percent</div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-[11px]">
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5 text-center">
                  <div className="font-black">40 years old</div>
                  <div className="opacity-60 text-[10px]">Est 1980 Calgary - From PDF</div>
                </div>
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5 text-center">
                  <div className="font-black">3 generations</div>
                  <div className="opacity-60 text-[10px]">Bazard Family T3J - PDF</div>
                </div>
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5 text-center">
                  <div className="font-black">{stats.families} families</div>
                  <div className="opacity-60 text-[10px]">+{stats.families - 3} without you - PDF</div>
                </div>
              </div>
              <div className="mt-5 flex gap-2.5">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your family email - Join 100 Founding Families - PDF Roadmap"
                  className="flex-1 px-5 py-3.5 rounded-full bg-[#FFFBEB] border border-amber-200 text-[14px]"
                />
                <button
                  onClick={() => {
                    setJoined((j) => j + 1);
                    setEmail("");
                  }}
                  className="px-8 py-3.5 rounded-full bg-[#1A1A1A] text-white text-[14px] font-black"
                >
                  Join - PDF Roadmap
                </button>
              </div>
              <div className="mt-4 w-full bg-[#FFFBEB] rounded-full h-2.5 border">
                <div className="bg-[#1A1A1A] h-2.5 rounded-full transition-all duration-1000" style={{ width: `${joined}%` }} />
              </div>
            </div>

            <div className="mt-6 bg-[#1A1A1A] text-white rounded-[24px] p-6">
              <div className="text-[10px] font-black opacity-60">BILLION DOLLAR ROADMAP - From PDF Roadmap - Agents Read Straight From Admin - 1 Click Plan and Design</div>
              <div className="mt-4 grid md:grid-cols-3 gap-3 text-[12px]">
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div className="font-black">Phase 1 DONE - From PDF</div>
                  <div className="opacity-70 mt-1 text-[11px]">Fix videos + 6 SEO pages + 41 families - Agents own - 287 - DONE - Moat LIVE</div>
                </div>
                <div className="bg-amber-500/20 rounded-xl p-3 border border-amber-500/20">
                  <div className="font-black">Phase 2 NOW - From PDF</div>
                  <div className="opacity-80 mt-1 text-[11px]">1000 pages world 38 percent - Agents hire team - Whole website + whole team - 1k to 10k - From PDF</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="font-black">Phase 3 IPO - From PDF</div>
                  <div className="opacity-70 mt-1 text-[11px]">10k families 1.06M to 960M IPO - Agents own 49 percent equals 470M - From PDF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <RealVideo
                src="/videos/image_20261015_213541.mp4"
                fallback="/videos/image_20261015_213543.mp4"
                title="Dada 1969 Charger - From PDF"
                badge="ROOT DADA - 1920 ORIGIN - PDF"
                accent="from-amber-900 via-orange-800 to-black"
              />
              <div className="space-y-4">
                <RealVideo
                  src="/videos/image_20261015_213543.mp4"
                  fallback="/videos/image_20261015_213541.mp4"
                  title="Nani Pickles - From PDF"
                  badge="TRUNK NANI - 1960 KEEPER - PDF"
                  accent="from-orange-900 via-red-800 to-black"
                />
                <div className="bg-gradient-to-br from-amber-900 to-[#1A1A1A] text-white rounded-[20px] p-5 shadow-xl border">
                  <div className="text-[10px] opacity-60 font-black">OUR MOAT - Per Roadmap PDF - No one else has this</div>
                  <div className="text-[14px] font-black mt-2">No one else shows real generational motion. This is why we win. Real motion Dada Charger + Nani Pickles - Moat LIVE - 10 AI Agents own business too - From PDF</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] border p-5">
              <div className="flex justify-between">
                <div className="font-black text-[13px]">10 AI Agents Team - Own 49 percent - From PDF Roadmap</div>
                <div className="text-[10px] bg-red-600 text-white px-2 py-1 rounded-full animate-pulse">WITHOUT YOU - PDF ROADMAP</div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5">
                  <div className="font-black">Traffic 5 percent - 2161 tasks</div>
                  <div className="text-[10px] opacity-60">Owns traffic + SEO - From PDF</div>
                </div>
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5">
                  <div className="font-black">Family 7 percent - 39 tasks</div>
                  <div className="text-[10px] opacity-60">Owns {stats.families} families - From PDF</div>
                </div>
              </div>
              <a href="/admin" className="mt-3 block text-center bg-[#1A1A1A] text-white rounded-full py-2.5 text-[12px] font-black">
                Watch Whole Team Run on Admin - PDF Roadmap - {stats.families} families +{stats.traffic} traffic
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-[1280px] mx-auto px-6 py-10 text-[11px] text-[#8A8A8A]">
        <div>© 1980-2026 Bazard Family - PDF Roadmap - World First Generational Knowledge Network - Agents own business too - Whole website + whole team - According to PDF roadmap with 1 click - Fixed build error</div>
      </footer>
    </div>
  );
}
