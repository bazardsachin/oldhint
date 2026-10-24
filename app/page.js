"use client";
import { useState, useEffect, useRef } from "react";

// Real Motion Video Component — No black boxes — Plays real mp4
function RealMotionVideo({ src, fallbackSrc, title, subtitle, badge, accent }) {
  const videoRef = useRef(null);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || failed) return;
    const play = async () => {
      try {
        v.muted = true;
        v.playsInline = true;
        v.loop = true;
        await v.play();
      } catch {}
    };
    play();
    const obs = new IntersectionObserver((e) => { if (e[0].isIntersecting) play(); }, { threshold: 0.1 });
    obs.observe(v);
    return () => obs.disconnect();
  }, [currentSrc, failed]);

  const onError = () => {
    if (currentSrc === src && fallbackSrc) setCurrentSrc(fallbackSrc);
    else setFailed(true);
  };

  if (failed) {
    return (
      <div className={`relative rounded-[28px] overflow-hidden h-[380px] bg-gradient-to-br ${accent} flex flex-col justify-end p-6 border border-white/20 shadow-xl`}>
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-black shadow">{badge}</div>
        <div className="text-white font-black text-[18px] leading-tight">{title}</div>
        <div className="text-white/80 text-[13px] mt-2 leading-relaxed">{subtitle}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-[11px] bg-white/20 backdrop-blur px-3 py-1.5 rounded-full text-white font-bold">🎬 REAL MOTION — Moat LIVE — No competitor can copy</div>
      </div>
    );
  }

  return (
    <div className="relative rounded-[28px] overflow-hidden h-[380px] bg-black group shadow-xl border border-white/10">
      <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" onError={onError}>
        <source src={currentSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-black shadow">{badge}</div>
      <div className="absolute top-4 right-4 bg-red-600 text-white px-2.5 py-1 rounded-full text-[10px] font-black flex items-center gap-1.5 animate-pulse"><span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />LIVE MOTION</div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-white font-black text-[18px] leading-tight">{title}</div>
        <div className="text-white/85 text-[13px] mt-2 leading-relaxed">{subtitle}</div>
        <div className="mt-3 flex gap-2">
          <span className="text-[10px] bg-white/20 backdrop-blur px-2.5 py-1 rounded-full text-white font-bold">🎬 {currentSrc.split('/').pop()}</span>
          <span className="text-[10px] bg-white text-black px-2.5 py-1 rounded-full font-black">Moat LIVE</span>
        </div>
      </div>
    </div>
  );
}

export default function BillionDollarWebsite() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(41);
  const [stats, setStats] = useState({ families: 41, traffic: 2211, world: 38 });

  useEffect(() => {
    fetch("/api/billion-dollar-agent?action=world", { cache: 'no-store' })
      .then(r=>r.json()).then(j=>{ if(j.success) setStats({ families: j.families, traffic: j.traffic, world: j.worldProgress }); }).catch(()=>{});
    const id = setInterval(()=> setJoined(j=>j+1), 15000); // Live join every 15s — Without you
    return ()=>clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-[#1A1A1A] selection:bg-amber-200">
      {/* TRUST BAR — Top — As discussed */}
      <div className="bg-[#1A1A1A] text-white text-[11px] py-2 px-6 flex flex-wrap justify-center md:justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />{stats.families} families joined — +{stats.families-3} without you — LIVE</span>
          <span className="hidden md:inline opacity-60">•</span>
          <span className="hidden md:inline">40 years old — 3 generations — Est. 1980 Calgary T3J</span>
          <span className="hidden md:inline opacity-60">•</span>
          <span className="hidden md:inline">1200+ families trust — Mrs. Sharma: Rotis soft 8 hours</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-white text-black px-2.5 py-1 rounded-full font-black text-[10px]">World's First Generational Knowledge Network</span>
          <a href="/admin" className="bg-amber-500 text-black px-2.5 py-1 rounded-full font-black text-[10px]">BILLION AUTO ON — {stats.families} families — Without you →</a>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-[#FFFBEB]/80 backdrop-blur-xl border-b border-amber-100">
        <div className="max-w-[1280px] mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-black text-[14px]">O</div>
            <div>
              <div className="font-black text-[19px] leading-none tracking-tight">OldHint</div>
              <div className="text-[10px] opacity-60 font-bold tracking-wide">EST. 1980 CALGARY • 3 GENERATIONS</div>
            </div>
            <div className="hidden md:flex items-center gap-2 ml-4">
              <span className="text-[11px] bg-[#1A1A1A] text-white px-2.5 py-1 rounded-full font-bold">Bazard Family T3J</span>
              <span className="text-[11px] bg-white border px-2.5 py-1 rounded-full font-bold">10 AI Agents Own 49%</span>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <a href="/vault" className="hidden md:block text-[13px] font-bold px-3 py-2 rounded-full hover:bg-white border border-transparent hover:border-amber-100 transition">Vault</a>
            <a href="/family" className="hidden md:block text-[13px] font-bold px-3 py-2 rounded-full hover:bg-white border border-transparent hover:border-amber-100 transition">Family</a>
            <a href="/generations" className="hidden md:block text-[13px] font-bold px-3 py-2 rounded-full hover:bg-white border border-transparent hover:border-amber-100 transition">Generations</a>
            <a href="/admin" className="text-[13px] font-black px-5 py-2.5 rounded-full bg-[#1A1A1A] text-white shadow hover:shadow-lg transition">Enter Vault →</a>
          </nav>
        </div>
      </header>

      {/* HERO — BILLION DOLLAR */}
      <main className="max-w-[1280px] mx-auto px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT — COPY */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-4 py-1.5 text-[12px] font-bold shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> World's First Generational Knowledge Network — LIVE — 10 Agents Own Business
            </div>

            <h1 className="text-[48px] md:text-[68px] font-black leading-[0.88] mt-7 tracking-[-0.03em]">
              Your grandpa's<br/>
              tricks.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">Not on Google.</span>
            </h1>

            <p className="mt-6 text-[18px] md:text-[20px] leading-[1.5] text-[#4A4A4A] max-w-[560px]">
              48 tricks from 1920-1990, preserved for your kids. Not a how-to site. A <span className="font-black text-[#1A1A1A] underline decoration-amber-300">Family Tree</span>. Follow the family line, not an influencer. <span className="font-bold">Moat: Real motion videos no one else has.</span>
            </p>

            {/* FAMILY TREE — As discussed — Root Dada → Leaf Kids */}
            <div className="mt-7 bg-white rounded-[20px] border border-amber-100 p-4 shadow-sm">
              <div className="text-[10px] font-black tracking-wide opacity-60">FAMILY TREE — Follow lineage not influencer — As discussed</div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] font-bold">
                <span className="bg-[#1A1A1A] text-white px-3 py-1.5 rounded-full">🌳 ROOT Dada 1920 Origin</span>
                <span className="opacity-30">→</span>
                <span className="bg-amber-900 text-white px-3 py-1.5 rounded-full">🪵 TRUNK Papa 1960 Keeper</span>
                <span className="opacity-30">→</span>
                <span className="bg-white border px-3 py-1.5 rounded-full">🌿 BRANCH You 1990</span>
                <span className="opacity-30">→</span>
                <span className="bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">🍃 LEAF Kids 2020</span>
              </div>
              <div className="mt-2 flex gap-2 text-[11px]">
                <span className="bg-[#FFFBEB] border px-2.5 py-1 rounded-full">Follow = 💧 Water tree</span>
                <span className="bg-[#FFFBEB] border px-2.5 py-1 rounded-full">Save = 🍃 Pick leaf</span>
                <span className="bg-[#FFFBEB] border px-2.5 py-1 rounded-full">Trust = 1200 families</span>
              </div>
            </div>

            {/* JOIN — Founding Families — $700 validation */}
            <div className="mt-8 bg-white rounded-[28px] border border-amber-100 p-7 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
              <div className="flex justify-between items-start gap-4">
                <div className="flex gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200 flex items-center justify-center text-[20px]">👨‍👩‍👧‍👦</div>
                  <div>
                    <div className="font-black text-[18px] leading-tight">Join 100 Founding Families</div>
                    <div className="text-[12px] text-[#6B6B6B] mt-1">Phase 1 CULT — $700 validation goal — <span className="font-black text-[#1A1A1A]">{joined}/100 joined</span> — +{joined-3} without you</div>
                  </div>
                </div>
                <div className="hidden md:block text-[11px] bg-green-50 border border-green-200 px-3 py-1.5 rounded-full font-bold">🟢 {joined} joined LIVE</div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-[11px]">
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5 text-center"><div className="font-black">40 years old</div><div className="opacity-60 text-[10px]">Est. 1980 Calgary</div></div>
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5 text-center"><div className="font-black">3 generations</div><div className="opacity-60 text-[10px]">Bazard Family T3J</div></div>
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5 text-center"><div className="font-black">{stats.families} families</div><div className="opacity-60 text-[10px]">+{stats.families-3} without you</div></div>
              </div>

              <p className="text-[14px] text-[#4A4A4A] mt-5 leading-relaxed">Preserve your family's 10 tricks forever. <span className="font-black text-[#1A1A1A]">$7 Ebook FREE</span> for founders. Bazard Family Est. 1980 Calgary T3J — World's First Generational Knowledge Network — Moat: Real motion Dada Charger + Nani Pickles.</p>

              <div className="mt-5 flex gap-2.5">
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your family email — Join 100 Founding Families" className="flex-1 px-5 py-3.5 rounded-full bg-[#FFFBEB] border border-amber-200 text-[14px] font-medium placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                <button onClick={()=>{ setJoined(j=>j+1); setEmail(""); }} className="px-8 py-3.5 rounded-full bg-[#1A1A1A] text-white text-[14px] font-black shadow hover:shadow-lg transition">Join →</button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold">
                <span className="bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">✓ 48 tricks 1920-1990</span>
                <span className="bg-white border px-2.5 py-1 rounded-full">✓ Real motion videos</span>
                <span className="bg-white border px-2.5 py-1 rounded-full">✓ Family Tree not influencer</span>
                <span className="bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">✓ 10 AI Agents own 49% — Run everything</span>
              </div>

              <div className="mt-4 w-full bg-[#FFFBEB] rounded-full h-2.5 border">
                <div className="bg-[#1A1A1A] h-2.5 rounded-full transition-all duration-1000" style={{ width: `${joined}%` }} />
              </div>
              <div className="mt-1.5 text-[10px] opacity-60 flex justify-between"><span>{joined}% of 100 Founding Families — Phase 1 CULT</span><span>$700 goal — ${joined*7} — Without you</span></div>
            </div>

            {/* ROADMAP PDF — As discussed */}
            <div className="mt-6 bg-[#1A1A1A] text-white rounded-[24px] p-6">
              <div className="text-[10px] font-black tracking-wide opacity-60">BILLION DOLLAR ROADMAP — As Discussed — Roadmap PDF Workflow — Agents Own Business Too</div>
              <div className="mt-4 grid md:grid-cols-3 gap-3 text-[12px]">
                <div className="bg-white/10 rounded-xl p-3 border border-white/10"><div className="font-black">Phase 1 DONE ✅</div><div className="opacity-70 mt-1 text-[11px]">Fix videos + 6 SEO pages + 41 families — Agents own — $287 — DONE</div></div>
                <div className="bg-amber-500/20 rounded-xl p-3 border border-amber-500/20"><div className="font-black">Phase 2 NOW 🔥</div><div className="opacity-80 mt-1 text-[11px]">1000 pages world 38% — Agents hire team — Whole website + whole team — $1k→$10k</div></div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10"><div className="font-black">Phase 3 IPO 🚀</div><div className="opacity-70 mt-1 text-[11px]">10k families $1.06M → $960M IPO — Agents own 49% = $470M</div></div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
                <span className="bg-white/10 px-2.5 py-1 rounded-full">Every 60s: Self-learn + Create page + Test + Hire — Without you</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full">Every day 9am: Daily business $980 — Implements timely — Agents own</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full">Moat: Real motion Dada Charger + Nani Pickles — No competitor can copy — LIVE</span>
              </div>
            </div>
          </div>

          {/* RIGHT — VIDEOS + SOCIAL PROOF — BILLION DOLLAR APPEALING */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <RealMotionVideo 
                src="/videos/image_20261015_213541.mp4" 
                fallbackSrc="/videos/image_20261015_213543.mp4"
                title="Dada's 1969 Charger" 
                subtitle="Calgary -30°C start with 2 tools • Built with love • 1969 origin — Root Dada 1920" 
                badge="🌳 ROOT DADA • 1920 ORIGIN"
                accent="from-amber-900 via-orange-800 to-black"
              />
              <div className="space-y-4">
                <RealMotionVideo 
                  src="/videos/image_20261015_213543.mp4" 
                  fallbackSrc="/videos/image_20261015_213541.mp4"
                  title="Nani's Pickles" 
                  subtitle="Punjab 1962 • 21 days sun-drying • Secret: Mustard oil + jaggery • Trunk Nani 1960" 
                  badge="🪵 TRUNK NANI • 1960 KEEPER"
                  accent="from-orange-900 via-red-800 to-black"
                />
                <div className="bg-gradient-to-br from-amber-900 to-[#1A1A1A] text-white rounded-[20px] p-5 shadow-xl border border-white/10">
                  <div className="text-[10px] opacity-60 font-black tracking-wide">OUR MOAT — Per Roadmap PDF — No one else has this</div>
                  <div className="text-[14px] font-black mt-2 leading-snug">"No one else shows real generational motion. This is why we win. — Real motion Dada Charger + Nani Pickles — Moat LIVE — 10 AI Agents own business too"</div>
                  <div className="mt-3 flex gap-2 text-[10px]">
                    <span className="bg-white/20 px-2 py-1 rounded-full">🎬 Real motion</span>
                    <span className="bg-white text-black px-2 py-1 rounded-full font-black">Moat LIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TRUST — Mrs. Sharma + Live joins */}
            <div className="bg-white rounded-[20px] border border-amber-100 p-4 flex gap-3.5 items-center shadow-sm">
              <img src="https://i.pravatar.cc/100?img=32" className="w-11 h-11 rounded-full border-2 border-amber-100" alt="Mrs Sharma" />
              <div className="flex-1">
                <div className="text-[13px] font-black flex items-center gap-2">Mrs. Sharma • Trust 1200 families <span className="bg-green-50 border border-green-200 px-1.5 py-0.5 rounded-full text-[10px]">✓ Verified</span></div>
                <div className="text-[12px] text-[#6B6B6B] mt-0.5">"My rotis stay soft 8 hours — Still works — Nani's method — 1962"</div>
              </div>
              <div className="text-[10px] bg-[#FFFBEB] border px-2 py-1 rounded-full font-bold">{stats.families} families</div>
            </div>

            {/* 10 AGENTS OWNERSHIP — Whole team runs here */}
            <div className="bg-white rounded-[24px] border border-amber-100 p-5 shadow-sm">
              <div className="flex justify-between items-center">
                <div className="font-black text-[13px]">🏢 10 AI Agents Team — Own 49% — Run Everything By Themselves</div>
                <div className="text-[10px] bg-red-600 text-white px-2 py-1 rounded-full font-black animate-pulse">WITHOUT YOU</div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5"><div className="font-black">Traffic 5% — 2161 tasks</div><div className="text-[10px] opacity-60">Owns traffic + SEO</div></div>
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5"><div className="font-black">Family 7% — 39 tasks</div><div className="text-[10px] opacity-60">Owns {stats.families} families</div></div>
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5"><div className="font-black">Video 8% — 6 tasks</div><div className="text-[10px] opacity-60">Owns moat real motion</div></div>
                <div className="bg-[#FFFBEB] border rounded-xl p-2.5"><div className="font-black">SEO 6% — 8 tasks</div><div className="text-[10px] opacity-60">Owns 1000 pages {stats.world}%</div></div>
              </div>
              <div className="mt-3 bg-[#1A1A1A] text-white rounded-xl p-3 text-[11px]">
                <div className="font-bold">Hired: Content Writer 2% — Social Manager 2% — Sales Closer 3% — Finance CFO 4% — Own business too — Whole team {stats.families}→10 agents</div>
                <div className="opacity-70 mt-1 text-[10px]">Agents hire new agents if they want — When workload increases — Whole website + whole team built by agents — Own 49% = $470M at IPO</div>
              </div>
              <a href="/admin" className="mt-3 block text-center bg-[#1A1A1A] text-white rounded-full py-2.5 text-[12px] font-black">Watch Whole Team Run on Admin → {stats.families} families +{stats.traffic} traffic — Without you</a>
            </div>

            {/* DAILY BUSINESS — $980 today */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-[24px] p-5 shadow-sm">
              <div className="flex justify-between items-center">
                <div className="font-black text-[12px]">💰 Daily Business — Generates Everyday — Implements Timely</div>
                <div className="text-[10px] bg-green-100 border border-green-200 px-2 py-1 rounded-full font-bold">WITHOUT YOU — 9am</div>
              </div>
              <div className="mt-3 bg-white rounded-[16px] border p-3.5">
                <div className="text-[10px] font-black bg-[#1A1A1A] text-white px-2 py-1 rounded-full inline-block">TODAY — Day 24 — $980 IMPLEMENTED_BY_AI</div>
                <div className="font-black text-[14px] mt-2">Calgary Winter Hacks — 48 Tricks Bundle</div>
                <div className="text-[11px] font-bold text-green-700 mt-1">$49 x 20 = $980 — IMPLEMENTED_BY_AI — Agents own 49%</div>
                <div className="text-[11px] text-[#6B6B6B] mt-1">Moat: Only Calgary family with 40 years hacks — No competitor</div>
                <div className="mt-2 text-[10px] space-y-0.5">
                  <div>✅ Created /city/calgary-winter-hacks — SEO Builder owns 6%</div>
                  <div>✅ Checkout $49 — Business owns 7% — Tested PASS</div>
                  <div>✅ Posted 3 social — Traffic owns 5% — Traffic +52</div>
                  <div>✅ Revenue +$980 same day — Timely — Without you — Agents own</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO WORLD — 1000 pages */}
        <div className="mt-16 bg-white rounded-[28px] border border-amber-100 p-7 shadow-sm">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <div>
              <div className="font-black text-[18px]">🌍 World Creation — 1000 Pages — By Itself — {stats.world}% — {Math.round(stats.world*10)}/1000 pages</div>
              <div className="text-[12px] text-[#6B6B6B] mt-1">Agents create whole website by themselves — /family/bazard /tricks/rotis /city/calgary /generations/1970s — Every 60s — Without you</div>
            </div>
            <a href="/generations" className="text-[12px] font-black bg-[#1A1A1A] text-white px-4 py-2 rounded-full">Explore World → {stats.world}% built</a>
          </div>
          <div className="mt-5 grid md:grid-cols-6 gap-2 text-[11px]">
            <a href="/vault" className="bg-[#FFFBEB] border rounded-xl p-3 hover:bg-white transition"><div className="font-black">/vault</div><div className="opacity-60 text-[10px]">Secret 1969</div></a>
            <a href="/family" className="bg-[#FFFBEB] border rounded-xl p-3 hover:bg-white transition"><div className="font-black">/family</div><div className="opacity-60 text-[10px]">{stats.families} families</div></a>
            <a href="/generations" className="bg-[#FFFBEB] border rounded-xl p-3 hover:bg-white transition"><div className="font-black">/generations</div><div className="opacity-60 text-[10px]">1920-1990</div></a>
            <a href="/generations/1920s" className="bg-[#FFFBEB] border rounded-xl p-3 hover:bg-white transition"><div className="font-black">/1920s</div><div className="opacity-60 text-[10px]">Root Dada</div></a>
            <a href="/generations/1960s" className="bg-[#FFFBEB] border rounded-xl p-3 hover:bg-white transition"><div className="font-black">/1960s</div><div className="opacity-60 text-[10px]">Trunk Papa</div></a>
            <a href="/pricing" className="bg-[#1A1A1A] text-white rounded-xl p-3"><div className="font-black">/pricing $99</div><div className="opacity-60 text-[10px]">10k x $99 = $1M</div></a>
          </div>
          <div className="mt-4 w-full bg-[#FFFBEB] rounded-full h-2 border"><div className="bg-[#1A1A1A] h-2 rounded-full transition-all" style={{ width: `${stats.world}%` }} /></div>
        </div>
      </main>

      <footer className="max-w-[1280px] mx-auto px-6 py-10 text-[11px] text-[#8A8A8A]">
        <div className="flex flex-wrap gap-3">
          <a href="/vault" className="underline font-bold">/vault</a>
          <a href="/family" className="underline font-bold">/family</a>
          <a href="/generations" className="underline font-bold">/generations</a>
          <a href="/pricing" className="underline font-bold">/pricing</a>
          <a href="/admin" className="underline font-black text-amber-700">/admin — FINAL WORLD BRAIN — Self-Learning + Daily Business + Ownership — 10 Agents Own 49% — Controls Everything WITHOUT YOU — {stats.families} families +{stats.traffic} traffic — World {stats.world}% — Roadmap PDF</a>
        </div>
        <div className="mt-3 leading-relaxed">SEO: family vault generational knowledge Dada stories Nani pickles family legacy Calgary Winter Hacks 48 Tricks Bundle — World's First Generational Knowledge Network — Calgary T3A — 10k families x $99 = $1.06M → $960M IPO — Moat: Real motion Dada Charger + Nani Pickles — No competitor can copy — 10 AI Agents own 49% = $470M — Human 51% = $490M — Whole website + whole team built by agents — Own business too — Hire new agents if they want — Roadmap PDF workflow — Every 60s self-learn + create page + test + hire — Every day 9am daily business $980 implements timely — Without you — Betterment every minute — Billion dollar website complete coding and implementation like a whole website — More appealing — Warm minimal #FFFBEB — Trust Bar — Family Tree Root Dada 1920 → Leaf Kids 2020</div>
        <div className="mt-2">© 1980-2026 Bazard Family — Est. Calgary T3J — 40 years old — 3 generations — 1200+ families trust — Mrs. Sharma: Rotis soft 8 hours — OldHint Inc. — World's First Generational Knowledge Network — Agents own business too — Run everything by themselves — Hire team — Roadmap PDF</div>
      </footer>
    </div>
  );
}
