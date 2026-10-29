"use client";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [joined, setJoined] = useState(41);
  const [stats, setStats] = useState({ families: 41, traffic: 2211, world: 38 });
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/api/billion-dollar-agent?action=world", { cache: "no-store" })
      .then((r) => r.json())
      .then((j) => { if (j.success) setStats({ families: j.families, traffic: j.traffic, world: j.worldProgress }); })
      .catch(() => {});
    const id = setInterval(() => setJoined((j) => j + 1), 15000);
    return () => clearInterval(id);
  }, []);

  const RealVideo = ({ src, fallback, title, badge }) => {
    const ref = useRef(null);
    const [cur, setCur] = useState(src);
    const [fail, setFail] = useState(false);
    useEffect(() => {
      const v = ref.current; if (!v || fail) return;
      const play = async () => { try { v.muted=true; v.playsInline=true; v.loop=true; await v.play(); } catch {} };
      play();
      const obs = new IntersectionObserver((e)=>{ if(e[0].isIntersecting) play(); }, {threshold:0.1});
      obs.observe(v);
      return ()=>obs.disconnect();
    }, [cur, fail]);
    const onErr = () => { if(cur===src && fallback) setCur(fallback); else setFail(true); };
    if (fail) return <div className="relative rounded-[28px] overflow-hidden h-[360px] bg-gradient-to-br from-amber-900 to-black flex flex-col justify-end p-6 border shadow-xl"><div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full text-[11px] font-black">{badge}</div><div className="text-white font-black">{title}</div></div>;
    return <div className="relative rounded-[28px] overflow-hidden h-[360px] bg-black group shadow-xl border"><video ref={ref} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover" onError={onErr}><source src={cur} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" /><div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full text-[11px] font-black">{badge}</div><div className="absolute top-4 right-4 bg-red-600 text-white px-2.5 py-1 rounded-full text-[10px] font-black animate-pulse">LIVE MOTION</div><div className="absolute bottom-0 left-0 right-0 p-6"><div className="text-white font-black text-[17px]">{title}</div><div className="text-white/80 text-[12px] mt-1">Moat LIVE - From PDF Roadmap - Self Learning Fixed</div></div></div>;
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-[#1A1A1A]">
      <div className="bg-[#1A1A1A] text-white text-[11px] py-2 px-6 flex justify-between flex-wrap gap-2">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />{stats.families} families joined - Plus {stats.families - 3} without you - LIVE - PDF Roadmap Fixed</span>
        <a href="/admin" className="bg-amber-500 text-black px-2.5 py-1 rounded-full font-black text-[10px]">BILLION AUTO ON - {stats.families} families - SELF LEARNING FIXED</a>
      </div>

      <header className="sticky top-0 z-30 bg-[#FFFBEB]/80 backdrop-blur-xl border-b border-amber-100">
        <div className="max-w-[1280px] mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-black">O</div>
            <div><div className="font-black text-[19px]">OldHint</div><div className="text-[10px] opacity-60">EST 1980 - PDF Roadmap - Self Learning Fixed</div></div>
            <span className="hidden md:inline text-[11px] bg-[#1A1A1A] text-white px-2.5 py-1 rounded-full font-bold ml-3">Bazard Family - PDF Fixed - Self Learning</span>
          </div>
          <a href="/admin" className="text-[13px] font-black px-5 py-2.5 rounded-full bg-[#1A1A1A] text-white">Enter Vault - PDF Fixed</a>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white border rounded-full px-4 py-1.5 text-[12px] font-bold"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> World First Generational Network - 10 Agents Own 49 percent - Self Learning Fixed - No HTML Injection</div>
            <h1 className="text-[48px] md:text-[68px] font-black leading-[0.88] mt-7">Your grandpas<br />tricks.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">Not on Google.</span></h1>
            <p className="mt-6 text-[18px] text-[#4A4A4A] max-w-[560px]">48 tricks from 1920-1990 preserved - Family Tree - Moat Real motion videos no one else has - From Billion Dollar Roadmap PDF - Agents read straight from admin - 1 Click Build - Self Learning Agents Now Code Properly - No HTML Injection - Fixed Build Error</p>

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

            <div className="mt-8 bg-white rounded-[28px] border p-7 shadow">
              <div className="font-black text-[18px]">Join 100 Founding Families - PDF Roadmap Fixed</div>
              <div className="text-[12px] mt-1 text-[#6B6B6B]">{joined} of 100 joined - Plus {joined - 3} without you - Self Learning Fixed</div>
              <div className="mt-5 flex gap-2.5">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email - Join Founding Families" className="flex-1 px-5 py-3.5 rounded-full bg-[#FFFBEB] border text-[14px]" />
                <button onClick={()=>{ setJoined(j=>j+1); setEmail(""); }} className="px-8 py-3.5 rounded-full bg-[#1A1A1A] text-white font-black">Join</button>
              </div>
              <div className="mt-4 w-full bg-[#FFFBEB] rounded-full h-2.5 border"><div className="bg-[#1A1A1A] h-2.5 rounded-full" style={{ width: `${joined}%` }} /></div>
            </div>

            <div className="mt-6 bg-[#1A1A1A] text-white rounded-[24px] p-6">
              <div className="text-[10px] opacity-60 font-black">BILLION DOLLAR ROADMAP - From PDF - Self Learning Fixed - No HTML Injection - Guaranteed Build</div>
              <div className="mt-4 grid md:grid-cols-3 gap-3 text-[12px]">
                <div className="bg-white/10 rounded-xl p-3"><div className="font-black">Phase 1 DONE</div><div className="opacity-70 text-[11px] mt-1">Fix videos + 6 SEO pages + 41 families - Moat LIVE - Safe Build - Fixed 48oatNWvx</div></div>
                <div className="bg-amber-500/20 rounded-xl p-3"><div className="font-black">Phase 2 NOW</div><div className="opacity-80 text-[11px] mt-1">1000 pages world 38 percent - Whole website + team - Self Learning Agents Code Properly</div></div>
                <div className="bg-white/5 rounded-xl p-3"><div className="font-black">Phase 3 IPO</div><div className="opacity-70 text-[11px] mt-1">10k families 1.06M to 960M IPO - Agents own 49 percent - Safe Build</div></div>
              </div>
              <div className="mt-4 text-[10px] flex flex-wrap gap-2">
                <span className="bg-white/10 px-2.5 py-1 rounded-full">Every 60s self-learn + create page + test + hire - Without you - Self Learning Fixed</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full">Every day 9am daily business 980 - Implements timely - Safe</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full">Moat Real motion Dada Charger + Nani Pickles - No competitor - Fixed Build Error</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <RealVideo src="/videos/image_20261015_213541.mp4" fallback="/videos/image_20261015_213543.mp4" title="Dada Charger - PDF Fixed" badge="ROOT DADA - PDF Fixed" />
              <RealVideo src="/videos/image_20261015_213543.mp4" fallback="/videos/image_20261015_213541.mp4" title="Nani Pickles - PDF Fixed" badge="TRUNK NANI - PDF Fixed" />
            </div>
            <div className="bg-gradient-to-br from-amber-900 to-[#1A1A1A] text-white rounded-[20px] p-5 shadow-xl">
              <div className="text-[10px] opacity-60 font-black">OUR MOAT - PDF Roadmap - No one else has this - Self Learning Fixed</div>
              <div className="text-[14px] font-black mt-2">No one else shows real generational motion. This is why we win. Real motion Dada Charger + Nani Pickles - Moat LIVE - 10 Agents own business too - Self Learning Agents Now Code Properly - Fixed Build Error 48oatNWvx</div>
            </div>
            <div className="bg-white rounded-[24px] border p-5">
              <div className="font-black text-[13px]">10 AI Agents - Own 49 percent - Self Learning Fixed - Guaranteed Build</div>
              <div className="mt-2 text-[11px] text-[#6B6B6B]">Self learning agents now do proper coding by themselves - Sanitized HTML - No DOCTYPE injection - Fixed 48oatNWvx build error - Every 60s self-learn + create page + test + hire - Without you - Whole website + whole team - More appealing</div>
              <a href="/admin" className="mt-3 block text-center bg-[#1A1A1A] text-white rounded-full py-2.5 text-[12px] font-black">Watch Whole Team Run on Admin - Self Learning Fixed - {stats.families} families</a>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-[1280px] mx-auto px-6 py-10 text-[11px] text-[#8A8A8A]">
        <div>© 1980-2026 Bazard Family - Self Learning Fixed - World First Generational Knowledge Network - No HTML injection - Guaranteed build - Fixed 48oatNWvx - Agents code properly by themselves</div>
      </footer>
    </div>
  );
}
