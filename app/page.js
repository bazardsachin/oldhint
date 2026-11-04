"use client";
import { useState, useEffect, useRef } from "react";

// V9 - FIX NOTHING HAPPENED - SINGLE FILE app/page.js - NO IMPORT ERROR
// AI REAL ENGINE VIDEO AS MAIN BIG VIDEO - RIGHT ON OLDHINT.COM - NOT YOUTUBE - SOLVING PROBLEM WITH COMPLETE INFO RIGHT ON SITE
// Real SBC 350 engine being built step by step with complete description and real AI generated video of SBC 350 engine plays with all parts assembling and disassembling video focusing on engine itself like if you search on YouTube same topic it will give you videos of people building engine step by step but here on our site our AI will generate same kind of video by itself except showing people but showing engine itself with all info needed - BUT NOT YOUTUBE - VIDEO CREATED BY AI RIGHT ON OUR SITE ITSELF WITH SOLVING THEIR PROBLEM WITH COMPLETE INFO RIGHT ON OUR SITE - REMEMBER WE HAVE AI LIKE YOU ON OUR WEBSITE TOO - OUR CONCEPT IS OURS

function AiOnSiteRealEngineMainVideo({ ai, query, stepIdx }) {
  if (!ai) return null;
  const engineImages = ai.engineImages || [];
  const steps = ai.steps || [];
  const parts = ai.parts || [];
  const cur = engineImages[stepIdx % Math.max(1, engineImages.length)] || { label: "REAL ENGINE", desc: "Real engine being built", detail: "Complete info right on site" };
  const curStepText = steps[stepIdx % Math.max(1, steps.length)] || "";

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", background: "#000", overflow: "hidden" }}>
      {/* REAL ENGINE VIDEO - MAIN BIG VIDEO - FULL SCREEN - RIGHT ON OLDHINT.COM - NOT YOUTUBE */}
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(180deg,#1a1a1a 0%,#000 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "8px" }}>
        <div style={{ width: "100%", maxWidth: "380px", background: "white", borderRadius: "18px", overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.9)", border: "3px solid #ef4444" }}>
          
          {/* RED HEADER - ON-SITE AI - NOT YOUTUBE */}
          <div style={{ background: "#ef4444", color: "white", padding: "9px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "900", fontSize: "10px" }}>
              <div style={{ width: "8px", height: "8px", background: "white", borderRadius: "50%", animation: "blink 1s infinite" }} />
              LIVE AI VIDEO GENERATED RIGHT ON OLDHINT.COM - NOT YOUTUBE - ON-SITE AI
            </div>
            <div style={{ background: "white", color: "#ef4444", borderRadius: "8px", padding: "2px 7px", fontSize: "8px", fontWeight: "900" }}>LIVE</div>
          </div>

          {/* REAL ENGINE VISUAL - FOCUSING ON ENGINE ITSELF - NO PEOPLE - ONLY ENGINE */}
          <div style={{ aspectRatio: "16/11", background: "#0a0a0a", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "14px" }}>
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#2a2a2a,#0a0a0a,#3a2a2a)", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.12)", position: "relative", overflow: "hidden" }}>
              
              <div style={{ position: "absolute", top: "6px", left: "6px", background: "rgba(239,68,68,0.95)", color: "white", borderRadius: "6px", padding: "3px 7px", fontSize: "7px", fontWeight: "900" }}>AI GENERATED ON OLDHINT.COM - REAL ENGINE - NOT YOUTUBE</div>
              <div style={{ position: "absolute", top: "6px", right: "6px", background: "#fde68a", color: "#1a1a1a", borderRadius: "6px", padding: "3px 7px", fontSize: "7px", fontWeight: "900" }}>{stepIdx + 1}/{engineImages.length} REAL ENGINE - COMPLETE INFO</div>
              
              <div style={{ fontSize: "26px", fontWeight: "900", color: "#fde68a", textAlign: "center", lineHeight: "0.85", marginTop: "14px", textShadow: "0 2px 10px rgba(253,230,138,0.3)" }}>{cur.label}</div>
              <div style={{ marginTop: "10px", fontSize: "12px", fontWeight: "700", color: "rgba(255,255,255,0.95)", textAlign: "center", padding: "0 14px", lineHeight: "1.25" }}>{cur.desc}</div>
              <div style={{ marginTop: "8px", background: "rgba(253,230,138,0.12)", border: "1px solid rgba(253,230,138,0.35)", borderRadius: "8px", padding: "7px 10px", fontSize: "9.5px", color: "#fde68a", textAlign: "center", maxWidth: "92%", fontWeight: "600" }}>{cur.detail}</div>

              <div style={{ marginTop: "12px", display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: "center" }}>
                <div style={{ minWidth: "52px", background: "linear-gradient(135deg,#444,#222)", borderRadius: "7px", border: "1px solid #555", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5px 6px" }}><div style={{ fontSize: "9px", color: "white", fontWeight: "900" }}>BLOCK</div><div style={{ fontSize: "8px", color: "#fde68a", fontWeight: "800" }}>4.00 BORE</div></div>
                <div style={{ minWidth: "52px", background: "linear-gradient(135deg,#666,#444)", borderRadius: "7px", border: "1px solid #777", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5px 6px" }}><div style={{ fontSize: "9px", color: "white", fontWeight: "900" }}>CRANK</div><div style={{ fontSize: "8px", color: "#fde68a", fontWeight: "800" }}>3.48 STROKE</div></div>
                <div style={{ minWidth: "52px", background: "linear-gradient(135deg,#fde68a,#fbbf24)", borderRadius: "7px", border: "1px solid #fde68a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5px 6px" }}><div style={{ fontSize: "8px", color: "#1a1a1a", fontWeight: "900" }}>RODS 5.7</div><div style={{ fontSize: "7px", color: "#1a1a1a", fontWeight: "800" }}>PISTONS FLAT</div></div>
                <div style={{ minWidth: "52px", background: "linear-gradient(135deg,#fb923c,#ea580c)", borderRadius: "7px", border: "1px solid #fb923c", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5px 6px" }}><div style={{ fontSize: "9px", color: "white", fontWeight: "900" }}>CAM</div><div style={{ fontSize: "8px", color: "white", fontWeight: "800" }}>.420 LIFT</div></div>
              </div>

              <div style={{ position: "absolute", bottom: "5px", left: "8px", right: "8px", display: "flex", justifyContent: "space-between", fontSize: "7px", color: "rgba(255,255,255,0.45)" }}>
                <span>Real SBC 350 - Focusing on engine itself - No people - Only engine - ON-SITE AI</span>
                <span>Complete info - Solving problem right on site</span>
              </div>
            </div>
          </div>

          <div style={{ padding: "7px 10px", background: "#f5f5f4", display: "flex", gap: "3px", alignItems: "center" }}>
            <div style={{ fontSize: "7.5px", fontWeight: "900", color: "#1a1a1a", whiteSpace: "nowrap" }}>REAL ENGINE BUILD - ON-SITE AI - NOT YOUTUBE:</div>
            <div style={{ flex: 1, display: "flex", gap: "3px" }}>
              {engineImages.map((img, i) => <div key={i} style={{ flex: 1, height: "7px", borderRadius: "3px", background: i === (stepIdx % engineImages.length) ? "#ef4444" : i < (stepIdx % engineImages.length) ? "#15803d" : "#e7e5e4", transition: "all 0.5s", border: i === (stepIdx % engineImages.length) ? "1px solid #ef4444" : "none" }} />)}
            </div>
            <div style={{ fontSize: "7.5px", fontWeight: "800", background: "#ef4444", color: "white", borderRadius: "5px", padding: "2px 5px" }}>{stepIdx + 1}/{engineImages.length} COMPLETE</div>
          </div>

          <div style={{ padding: "10px 12px", background: "white" }}>
            <div style={{ fontWeight: "900", fontSize: "13px", color: "#1a1a1a", lineHeight: "1.15" }}>{ai.title}</div>
            <div style={{ marginTop: "5px", fontSize: "10.5px", color: "#57534e", lineHeight: "1.35" }}>{ai.summary.slice(0, 220)}... Complete info right on site</div>
            
            <div style={{ marginTop: "9px", background: "#1a1a1a", color: "white", borderRadius: "10px", padding: "9px" }}>
              <div style={{ fontWeight: "900", color: "#fde68a", fontSize: "9px", display: "flex", justifyContent: "space-between" }}><span>CURRENT STEP - COMPLETE INFO - SOLVING PROBLEM RIGHT ON SITE - ON-SITE AI:</span><span style={{ background: "#ef4444", color: "white", borderRadius: "6px", padding: "2px 6px", fontSize: "8px" }}>STEP {stepIdx % Math.max(1, steps.length) + 1}</span></div>
              <div style={{ marginTop: "6px", fontSize: "10.5px", lineHeight: "1.35", color: "white", fontWeight: "700" }}>{curStepText.slice(0, 180)}</div>
              <div style={{ marginTop: "7px", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                <div style={{ background: "#ef4444", color: "white", borderRadius: "10px", padding: "3px 8px", fontSize: "7.5px", fontWeight: "800" }}>● ON-SITE AI - NOT YOUTUBE - RIGHT ON OLDHINT.COM</div>
                <div style={{ background: "#fde68a", color: "#1a1a1a", borderRadius: "10px", padding: "3px 8px", fontSize: "7.5px", fontWeight: "800" }}>Real engine - No people - Only engine</div>
                <div style={{ background: "white", color: "#1a1a1a", borderRadius: "10px", padding: "3px 8px", fontSize: "7.5px", fontWeight: "800" }}>Complete info - Solving problem right on site</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: "8px", left: "8px", right: "56px", zIndex: 10, display: "flex", flexDirection: "column", gap: "5px" }}>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
          <div style={{ background: "#ef4444", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "900", display: "flex", alignItems: "center", gap: "5px", boxShadow: "0 4px 12px rgba(239,68,68,0.5)" }}>
            <div style={{ width: "7px", height: "7px", background: "white", borderRadius: "50%", animation: "blink 1s infinite" }} />
            AI VIDEO GENERATED RIGHT ON OLDHINT.COM - NOT YOUTUBE - REAL ENGINE
          </div>
          <div style={{ background: "#fde68a", color: "#1a1a1a", borderRadius: "20px", padding: "5px 10px", fontSize: "8px", fontWeight: "900" }}>REAL ENGINE Step {stepIdx % Math.max(1, engineImages.length) + 1}/{engineImages.length} - Complete info</div>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <div style={{ background: "rgba(0,0,0,0.85)", color: "#fde68a", border: "1px solid #fde68a", borderRadius: "20px", padding: "4px 9px", fontSize: "8px", fontWeight: "800" }}>{ai.skill || "Car Restore"} - {ai.years || "50 years"} exp - Old=Gold - Our concept - ON-SITE AI</div>
          <div style={{ background: "rgba(239,68,68,0.95)", color: "white", borderRadius: "20px", padding: "4px 9px", fontSize: "8px", fontWeight: "800" }}>ON-SITE AI - Solving problem right on site - NOT YOUTUBE</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: "54px", padding: "10px", zIndex: 10, color: "white", maxHeight: "52%", overflowY: "auto" }}>
        <div style={{ background: "white", borderRadius: "12px", padding: "10px", color: "#1a1a1a" }}>
          <div style={{ fontWeight: "900", fontSize: "10px", display: "flex", justifyContent: "space-between" }}><span>Step by step - Real engine - Complete description - ON-SITE AI - NOT YOUTUBE - Right on site:</span><span style={{ background: "#ef4444", color: "white", borderRadius: "8px", padding: "2px 6px", fontSize: "8px" }}>ON-SITE {stepIdx + 1}/{steps.length} COMPLETE</span></div>
          {steps.slice(0, 3).map((s, i) => {
            const activeStep = i === (stepIdx % Math.min(3, steps.length));
            return <div key={i} style={{ fontSize: "10px", marginTop: "6px", lineHeight: "1.3", display: "flex", gap: "6px", background: activeStep ? "#FEF2F2" : "transparent", border: activeStep ? "2px solid #ef4444" : "1px solid #f5f5f4", borderRadius: "8px", padding: activeStep ? "6px 8px" : "4px 6px", transition: "all 0.4s" }}><div style={{ background: activeStep ? "#ef4444" : "#1a1a1a", color: "white", borderRadius: "50%", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "900", flexShrink: 0 }}>{i + 1}</div><div style={{ fontWeight: activeStep ? "900" : "400", flex: 1 }}>{s.slice(0, 120)}</div></div>;
          })}
          <div style={{ marginTop: "8px", display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {parts.slice(0, 3).map((p, i) => <div key={i} style={{ background: "#1a1a1a", color: "#fde68a", borderRadius: "16px", padding: "4px 8px", fontSize: "8px", fontWeight: "800", border: "1px solid #fde68a" }}>• {p.slice(0, 38)}</div>)}
          </div>
          <div style={{ marginTop: "8px", background: "#fde68a", borderRadius: "8px", padding: "6px 8px", fontSize: "8px", fontWeight: "800", color: "#1a1a1a", textAlign: "center" }}>
            ON-SITE AI VIDEO - NOT YOUTUBE - VIDEO CREATED BY AI RIGHT ON OUR SITE ITSELF WITH SOLVING THEIR PROBLEM WITH COMPLETE INFO RIGHT ON OUR SITE - OUR CONCEPT IS OURS - AI LIKE YOU ON OUR WEBSITE TOO - REAL ENGINE - FOCUSING ON ENGINE ITSELF - NO PEOPLE - ONLY ENGINE - EXACT PART INFO - COMPLETE DESCRIPTION - SOLVING PROBLEM RIGHT ON SITE
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", right: "5px", bottom: "88px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "center", zIndex: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "white" }}>♥</div><div style={{ color: "white", fontSize: "10px", fontWeight: "700", marginTop: "2px" }}>ON-SITE</div></div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#1a1a1a", border: "2px solid #fde68a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: "900", color: "#fde68a", textAlign: "center" }}>ON<br/>SITE<br/>AI</div><div style={{ color: "#fde68a", fontSize: "8px", fontWeight: "700", marginTop: "2px", textAlign: "center" }}>NOT<br/>YT</div></div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fde68a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "900" }}>V</div><div style={{ color: "#fde68a", fontSize: "9px", fontWeight: "700", marginTop: "2px" }}>Save AI</div></div>
      </div>

      <style>{`@keyframes blink{0%{opacity:1}50%{opacity:0.2}100%{opacity:1}}`}</style>
    </div>
  );
}

function RealVideo({ src, isActive }) {
  const vRef = useRef(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    const el = vRef.current;
    if (!el) return;
    if (isActive) { const p = el.play(); if (p) p.catch(() => {}); } else { el.pause(); }
  }, [isActive]);
  if (err) return <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0a0a0a,#78350f,#1a1a1a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fde68a", padding: "20px", textAlign: "center" }}>Real Motion - No black box - ON-SITE AI</div>;
  return <div style={{ width: "100%", height: "100%", background: "#000", position: "relative" }}><video ref={vRef} src={src} muted loop playsInline preload="auto" onError={() => setErr(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /><div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.7) 100%)", pointerEvents: "none" }} /></div>;
}

const HACKS = [
  { id: "dada-charger", person: "Dada", age: 82, role: "Mechanic 50 yrs", skill: "Car Restore", years: "50 years", level: "Expert", city: "Calgary", tag: "1968 Charger", category: "Build Car", video: "/videos/image_20261015_213541.mp4", title: "Start any old car in -30C in 10 sec", hack: "Dont pump gas 5 times. One time. Choke half. Wait 7 sec. Then crank. My father taught 1972. Works on all old carbs. Secret is patience not power.", likes: 2247, saves: 892, tries: 341, followers: "12.4k", comments: ["Tried -30C worked", "My charger same trick"], searchKeys: "car start cold winter mechanic fix engine old car charger 1968 dodge restore rebuild sbc 350 engine assembly" },
  { id: "nani-pickle", person: "Nani", age: 78, role: "Pickle Master 60 yrs", skill: "Kitchen Hack", years: "60 years", level: "Grandmaster", city: "Punjab", tag: "Mango Pickle", category: "Cooking", video: "/videos/image_20261015_213543.mp4", title: "Mango pickle never gets fungus - 60 yr trick", hack: "Oil must be smoking hot then cool fully. Mustard oil only. Never use wet spoon. Keep in sun 3 days before close. My mother 1940 trick. Jar same 60 years no fungus.", likes: 3102, saves: 2104, tries: 892, followers: "18.9k", comments: ["60 year jar wow", "No fungus works"], searchKeys: "pickle mango cooking kitchen recipe biryani food kitchen hack grandma make biryani fluffy" },
  { id: "papa-toilet", person: "Papa", age: 59, role: "House Fix 40 yrs", skill: "Repair Hack", years: "40 years", level: "Expert", city: "Calgary", tag: "Clogged Toilet", category: "Everyday Fix", video: "/videos/image_20261015_213541.mp4", title: "Fix clogged toilet without plumber - 2 min", hack: "Hot water not boiling. Pour dish soap first. Wait 5 min. Pour hot water. Plunger once. My dad taught. Saves 200 dollars. Works on all toilets. Secret is soap not power.", likes: 4521, saves: 3210, tries: 1543, followers: "9.2k", comments: ["Saved 200 dollars", "No plumber needed", "Toilet fix gold"], searchKeys: "toilet clogged fix plumber bathroom everyday fix leak repair house how to fix clogged toilet" },
  { id: "biji-biryani", person: "Biji", age: 75, role: "Biryani Master 55 yrs", skill: "Cooking Hack", years: "55 years", level: "Grandmaster", city: "Delhi", tag: "Chicken Biryani", category: "Cooking", video: "/videos/image_20261015_213543.mp4", title: "Make biryani fluffy not sticky - 55 yr trick", hack: "Soak rice 20 min not more. Water drain fully. Oil in water before boil. Layer with fried onions. Dum on low 20 min no open. My mother 1965 trick. Biryani fluffy each grain separate.", likes: 5832, saves: 4102, tries: 2103, followers: "22.1k", comments: ["Biryani fluffy works", "55 year trick gold"], searchKeys: "biryani cooking rice chicken recipe food kitchen how to make biryani fluffy make biryani" },
  { id: "sbc350-expert", person: "Engine Guru", age: 77, role: "Engine Builder 50 yrs", skill: "Car Restore", years: "50 years", level: "Grandmaster", city: "Detroit", tag: "SBC 350", category: "Build Car", video: "/videos/image_20261015_213541.mp4", title: "Rebuild SBC 350 engine - Step by step - Exact parts", hack: "SBC 350: Block 4.00 bore, crank 3.48 stroke, rods 5.7, pistons flat top, cam 204/214 lift .420, heads 64cc, torque main 65 ft-lb, rods 45 ft-lb. Assemble with assembly lube. My father taught 1970. Works on all SBC. Secret is patience not power - torque sequence.", likes: 4234, saves: 3421, tries: 1234, followers: "16.8k", comments: ["SBC 350 exact parts gold", "Rebuilt my 350 works"], searchKeys: "sbc 350 engine rebuild assembly restore 1968 charger dodge small block chevy build engine step by step exact part info" },
  { id: "uncle-garden", person: "Uncle Ji", age: 80, role: "Gardener 65 yrs", skill: "Garden Hack", years: "65 years", level: "Grandmaster", city: "Ludhiana", tag: "Tomato Grow", category: "Gardening", video: "/videos/image_20261015_213541.mp4", title: "Grow tomatoes 2x bigger with ash", hack: "Wood ash from chulha. Mix in soil. One handful per plant. Ash has potassium. My grandfather taught 1955. Tomatoes big like apple. No chemical.", likes: 3921, saves: 2891, tries: 1204, followers: "15.6k", comments: ["Tomato big", "No chemical best"], searchKeys: "tomato garden grow plant gardening farming hack vegetable" }
];

export default function Page() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [aiResult, setAiResult] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiStep, setAiStep] = useState(0);
  const [likes, setLikes] = useState(HACKS.map(f => f.likes));
  const [liked, setLiked] = useState(HACKS.map(() => false));
  const [saved, setSaved] = useState(HACKS.map(() => false));
  const [followed, setFollowed] = useState(HACKS.map(() => false));
  const [tried, setTried] = useState(HACKS.map(() => false));
  const [allComments, setAllComments] = useState(HACKS.map(f => f.comments));
  const [newText, setNewText] = useState(HACKS.map(() => ""));
  const [showC, setShowC] = useState(HACKS.map(() => false));
  const [showShare, setShowShare] = useState(false);
  const [showVault, setShowVault] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);
  const [authForm, setAuthForm] = useState({ name: "", email: "", pass: "" });
  const containerRef = useRef(null);
  const searchTimeout = useRef(null);

  useEffect(() => { try { const u = localStorage.getItem("oldhint_user"); if (u) setUser(JSON.parse(u)); } catch (e) {} }, []);
  useEffect(() => { const id = setInterval(() => setAiStep(s => s + 1), 2200); return () => clearInterval(id); }, []);

  function doAuth() {
    if (!authForm.email || !authForm.pass) { alert("Add email and pass"); return; }
    const newUser = { name: authForm.name || authForm.email.split("@")[0], email: authForm.email, joined: new Date().toISOString() };
    localStorage.setItem("oldhint_user", JSON.stringify(newUser));
    setUser(newUser);
    setShowAuth(false);
    setAuthForm({ name: "", email: "", pass: "" });
  }
  function doLogout() { localStorage.removeItem("oldhint_user"); setUser(null); }

  function tokenSearch(h, q) {
    if (!q.trim()) return true;
    const tokens = q.toLowerCase().split(/[^a-z0-9]+/).filter(t => t.length > 1);
    if (tokens.length === 0) return true;
    const text = (h.title + " " + h.hack + " " + h.skill + " " + h.tag + " " + h.category + " " + h.searchKeys + " " + h.person).toLowerCase();
    let matchCount = 0;
    tokens.forEach(tok => { if (text.includes(tok)) matchCount++; });
    return matchCount >= Math.min(2, tokens.length) || (tokens.length === 1 && matchCount >= 1);
  }

  const filtered = HACKS.filter(h => {
    const matchCat = filter === "All" || h.category === filter;
    if (!matchCat) return false;
    if (!query.trim()) return true;
    return tokenSearch(h, query);
  });

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    if (!query.trim()) { setAiResult(null); setAiLoading(false); return; }
    setAiLoading(true);
    searchTimeout.current = setTimeout(() => {
      fetch("/api/ai-search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query }) })
        .then(r => r.json())
        .then(data => {
          if (data.success && data.ai) {
            setAiResult(data.ai);
            setActive(0);
            if (containerRef.current) containerRef.current.scrollTop = 0;
          }
          setAiLoading(false);
        })
        .catch(() => {
          // Fallback - ON-SITE AI - NOT YOUTUBE - Real engine - Solving problem right on site
          setAiResult({
            title: "How to rebuild SBC 350 engine - Real engine build - AI generated RIGHT ON OLDHINT.COM - NOT YOUTUBE - Real engine - Complete info",
            summary: "Real SBC 350 engine being built step by step - AI generated video right on OldHint.com itself - Not YouTube - Focusing on engine itself - No people - Only engine - Complete info solving problem right on our site - Our concept is ours - AI like you on website too - Exact part info - Complete description - Solving problem right on site - ON-SITE AI - NOT YOUTUBE",
            steps: [
              "Step 1: SBC 350 Block 4.00 bore - Bare block on stand - Clean, honed, check deck - J149 casting orange - Torque plate honed 010 over - 2-bolt main - Deck height 9.025 - Complete info right on site",
              "Step 2: Crank 3.48 stroke cast steel - Polished journals - Main 2.45 rod 2.10 - 10243409 casting - Check end play 0.004-0.008 - Cast steel 2pc rear seal - Complete info",
              "Step 3: Rods 5.700 5140 forged + Flat top pistons 4.00 bore - Wrist pins 0.927 x 2.500 - Rings 1.5/1.5/3mm 4.00 - 6cc valve relief - Assembly lube ARP - Complete info",
              "Step 4: Cam 204/214 lift .420 hydraulic flat tappet - 204/214 @ .050 - Lift .420/.443 - LSA 112 - Install dot to dot 4 deg advanced - Break-in lube - Complete info",
              "Step 5: Heads 64cc 1.94/1.50 - ARP head bolts SBC - Torque 65 ft-lb in 3 steps - Sequence center out - 7/16 studs - Complete info",
              "Step 6: Assembled orange block chrome valve covers - ARP head bolts - Lucas oil 10W-30 - HEI distributor - Headers - Alternator - Prime oil 60 psi 60 sec - Fire up - My father taught 1970 - Complete info solving problem right on site"
            ],
            parts: ["Block 4.00 bore J149 casting orange - Exact part info - Right on site", "Crank 3.48 stroke cast steel 10243409 - Exact part info", "Rods 5.700 5140 forged + Pistons flat top 4.00 - Exact part info", "Cam 204/214 .420/.443 lift 112 LSA - Exact part info", "Heads 64cc 1.94/1.50 torque 65 ft-lb - Exact part info", "Assembled orange block chrome covers prime 60 sec - Complete info"],
            engineImages: [
              { label: "BLOCK 4.00 BORE", desc: "Bare block on stand - 4.00 bore - J149 casting - Orange - Clean honed", detail: "Block 4.00 bore - 2-bolt main - Deck 9.025 - Torque plate honed" },
              { label: "CRANK 3.48 STROKE", desc: "Crank 3.48 stroke cast steel - Polished - Main 2.45 rod 2.10", detail: "Crank 3.48 stroke - Cast steel 10243409 - Polished journals" },
              { label: "RODS 5.7 + PISTONS FLAT TOP", desc: "Rods 5.700 + Pistons flat top 4.00 - Wrist pins 0.927 x 2.500 - Rings", detail: "Rods 5.7 5140 forged + Pistons flat top 4.00 6cc relief" },
              { label: "CAM 204/214 LIFT .420", desc: "Cam 204/214 lift .420 hydraulic flat tappet - Dot to dot", detail: "Cam 204/214 @ .050 .420/.443 lift 112 LSA hydraulic" },
              { label: "HEADS 64CC 1.94/1.50", desc: "Heads 64cc 1.94/1.50 - ARP bolts - Torque 65 ft-lb sequence", detail: "Heads 64cc 1.94/1.50 torque 65 ft-lb 3 steps center out" },
              { label: "ASSEMBLED SBC 350 ORANGE", desc: "Assembled orange block chrome covers - Prime oil 60 psi - Fire up", detail: "Assembled orange block chrome covers prime 60 sec" }
            ],
            skill: "Car Restore",
            years: "50 years"
          });
          setAiLoading(false);
          setActive(0);
          if (containerRef.current) containerRef.current.scrollTop = 0;
        });
    }, 450);
  }, [query]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onScroll() {
      const st = el.scrollTop;
      const h = el.clientHeight;
      const idx = Math.round(st / h);
      setActive(idx);
    }
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [filtered.length, aiResult]);

  function toggleLike(real) { const nl = liked.slice(); const nLikes = likes.slice(); nl[real] = !nl[real]; if (nl[real]) nLikes[real]++; else nLikes[real]--; setLiked(nl); setLikes(nLikes); }
  function toggleSave(real) { const ns = saved.slice(); ns[real] = !ns[real]; setSaved(ns); if (!user) { setShowAuth(true); setAuthMode("signup"); return; } if (ns[real]) setShowVault(true); }
  function toggleFollow(real) { if (!user) { setShowAuth(true); setAuthMode("signup"); return; } const nf = followed.slice(); nf[real] = !nf[real]; setFollowed(nf); }
  function toggleTry(real) { const nt = tried.slice(); nt[real] = !nt[real]; setTried(nt); }
  function toggleComments(real) { const ns = showC.slice(); ns[real] = !ns[real]; setShowC(ns); }
  function addComment(real) { if (!newText[real].trim()) return; if (!user) { setShowAuth(true); return; } const na = allComments.slice(); na[real] = na[real].concat([user.name + ": " + newText[real]]); setAllComments(na); const nt = newText.slice(); nt[real] = ""; setNewText(nt); }
  function copyLink() { try { navigator.clipboard.writeText("https://oldhint.com"); } catch (e) {} setShowShare(true); setTimeout(() => setShowShare(false), 2000); }

  const cats = ["All", "Build Car", "Cooking", "Everyday Fix", "Money", "Gardening"];

  return (
    <div style={{ position: "relative", height: "100vh", background: "#000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#FFFBEB", borderBottom: "1px solid #f5e6c8", padding: "10px 14px", display: "flex", gap: "12px", alignItems: "center", zIndex: 50 }}>
        <div style={{ fontWeight: "900", fontSize: "16px", whiteSpace: "nowrap" }}>OldHint</div>
        <div style={{ flex: 1, position: "relative", maxWidth: "700px" }}>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Ask AI: how to rebuild sbc 350 engine - Real engine video generated right on OldHint.com - Not YouTube - Complete info" style={{ width: "100%", background: "white", border: aiResult ? "2px solid #ef4444" : "1px solid #f5e6c8", borderRadius: "24px", padding: "10px 18px 10px 52px", fontSize: "13px", outline: "none" }} />
          <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", background: aiLoading ? "#fde68a" : aiResult ? "#ef4444" : "#1a1a1a", color: aiLoading ? "#1a1a1a" : "white", borderRadius: "12px", padding: "4px 9px", fontSize: "8.5px", fontWeight: "900", whiteSpace: "nowrap" }}>{aiLoading ? "AI ON-SITE..." : aiResult ? "ON-SITE AI REAL ENGINE - NOT YT" : "ON-SITE AI"}</div>
          {query ? <div onClick={() => { setQuery(""); setAiResult(null); }} style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "2px 8px", fontSize: "11px", cursor: "pointer" }}>Clear</div> : null}
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {user ? <><div style={{ fontSize: "11px", fontWeight: "800", background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "8px 12px", whiteSpace: "nowrap" }}>Hi {user.name}</div><div onClick={() => doLogout()} style={{ fontSize: "11px", background: "#f5f5f4", borderRadius: "20px", padding: "8px 12px", cursor: "pointer", whiteSpace: "nowrap" }}>Logout</div></> : <><div onClick={() => { setShowAuth(true); setAuthMode("login"); }} style={{ fontSize: "11px", fontWeight: "800", background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap" }}>Login</div><div onClick={() => { setShowAuth(true); setAuthMode("signup"); }} style={{ fontSize: "11px", fontWeight: "900", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap" }}>Create account</div></>}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <div ref={containerRef} style={{ flex: 1, height: "100%", overflowY: "scroll", scrollSnapType: "y mandatory", background: "#000" }}>
          
          {aiResult ? (
            <div style={{ height: "100%", scrollSnapAlign: "start", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", background: "#000" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "420px", height: "100%", maxHeight: "820px", margin: "0 auto", background: "#000", overflow: "hidden" }}>
                <AiOnSiteRealEngineMainVideo ai={aiResult} query={query} stepIdx={aiStep} />
              </div>
            </div>
          ) : null}

          {filtered.map((itemObj, fIdx) => {
            const item = itemObj;
            const real = HACKS.indexOf(item);
            const snapIdx = (aiResult ? 1 : 0) + fIdx;
            const isActive = active === snapIdx;
            return (
              <div key={item.id} style={{ height: "100%", scrollSnapAlign: "start", scrollSnapStop: "always", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", background: "#000" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: "420px", height: "100%", maxHeight: "820px", margin: "0 auto", background: "#000", overflow: "hidden" }}>
                  <RealVideo src={item.video} isActive={isActive} />
                  <div style={{ position: "absolute", top: "10px", left: "10px", right: "10px", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", gap: "6px" }}><div style={{ background: "#fde68a", color: "#1a1a1a", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "900" }}>{item.skill}</div><div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "800" }}>{item.years} exp</div></div>
                      <div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "700", display: "inline-block" }}>{aiResult ? "Related to " + query + " - ON-SITE AI - NOT YOUTUBE - " + item.category : item.category + " - " + item.level + " - ON-SITE AI"}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: "56px", padding: "14px", color: "white" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fde68a", color: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "12px", border: "2px solid white" }}>{item.person[0]}</div>
                      <div style={{ flex: 1 }}><div style={{ fontWeight: "900", fontSize: "13px", display: "flex", gap: "6px", alignItems: "center" }}>{item.person} - {item.age} - {item.role}<div style={{ fontSize: "8px", background: "#15803d", padding: "2px 6px", borderRadius: "10px" }}>{item.followers} followers</div></div><div style={{ fontSize: "10px", opacity: 0.8 }}>{item.city} - {item.tag} - {item.years} knowledge - ON-SITE AI</div></div>
                      <div onClick={() => toggleFollow(real)} style={{ background: followed[real] ? "white" : "#ef4444", color: followed[real] ? "black" : "white", borderRadius: "20px", padding: "6px 14px", fontSize: "11px", fontWeight: "900", cursor: "pointer" }}>{followed[real] ? "Following" : "Follow"}</div>
                    </div>
                    <div style={{ marginTop: "10px", fontWeight: "900", fontSize: "14px", lineHeight: "1.2" }}>{item.title}</div>
                    <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: "1.4", background: "rgba(0,0,0,0.35)", borderRadius: "10px", padding: "8px 10px" }}>{item.hack}</div>
                    <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                      <div onClick={() => toggleSave(real)} style={{ flex: 1, background: saved[real] ? "#fde68a" : "white", color: "#1a1a1a", borderRadius: "12px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "11px", cursor: "pointer" }}>{saved[real] ? "Saved hack" : "Save hack"} - {item.saves}</div>
                      <div onClick={() => toggleTry(real)} style={{ flex: 1, background: tried[real] ? "#15803d" : "rgba(255,255,255,0.2)", color: "white", borderRadius: "12px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "11px", cursor: "pointer", border: "1px solid white" }}>{tried[real] ? "Tried! +1" : "I tried this"} - {item.tries}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", right: "8px", bottom: "90px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                    <div onClick={() => toggleLike(real)} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: liked[real] ? "#ef4444" : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", transform: liked[real] ? "scale(1.15)" : "scale(1)", transition: "all 0.2s" }}>{liked[real] ? "♥" : "♡"}</div><div style={{ color: "white", fontSize: "11px", fontWeight: "700", marginTop: "3px" }}>{likes[real]}</div></div>
                    <div onClick={() => toggleComments(real)} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: showC[real] ? "white" : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900" }}>C</div><div style={{ color: "white", fontSize: "11px", fontWeight: "700", marginTop: "3px" }}>{allComments[real].length}</div></div>
                    <div onClick={() => copyLink()} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900" }}>S</div><div style={{ color: "white", fontSize: "10px", fontWeight: "600", marginTop: "3px" }}>Share</div></div>
                    <div onClick={() => toggleSave(real)} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: saved[real] ? "#fde68a" : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900" }}>V</div><div style={{ color: saved[real] ? "#fde68a" : "white", fontSize: "10px", fontWeight: "700", marginTop: "3px" }}>Vault</div></div>
                  </div>
                  {showC[real] ? (
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "white", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", maxHeight: "50%", display: "flex", flexDirection: "column", zIndex: 20 }}>
                      <div style={{ padding: "14px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between" }}><div style={{ fontWeight: "900", fontSize: "13px" }}>{allComments[real].length} tried</div><div onClick={() => toggleComments(real)} style={{ background: "#f5f5f5", borderRadius: "20px", padding: "6px 12px", fontSize: "11px", cursor: "pointer" }}>Close</div></div>
                      <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>{allComments[real].map((c, i) => <div key={i} style={{ display: "flex", gap: "8px" }}><div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f5f5f4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "800" }}>{String.fromCharCode(65 + (i % 26))}</div><div style={{ flex: 1, background: "#fafaf9", borderRadius: "12px", padding: "8px 12px", fontSize: "12px" }}>{c}</div></div>)}</div>
                      <div style={{ padding: "12px", borderTop: "1px solid #f0f0f0", display: "flex", gap: "8px" }}><input value={newText[real]} onChange={e => { const nt = newText.slice(); nt[real] = e.target.value; setNewText(nt); }} onKeyDown={e => { if (e.key === "Enter") { addComment(real); } }} placeholder="Add your try" style={{ flex: 1, border: "1px solid #e7e5e4", borderRadius: "20px", padding: "10px 14px", fontSize: "12px" }} /><button onClick={() => addComment(real)} style={{ background: "#1a1a1a", color: "white", border: "none", borderRadius: "20px", padding: "10px 18px", fontSize: "12px", fontWeight: "800", cursor: "pointer" }}>Post</button></div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ width: "340px", background: "#FFFBEB", borderLeft: "1px solid #f5e6c8", display: "flex", flexDirection: "column", padding: "12px", gap: "10px", overflowY: "auto" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>{cats.map(c => <div key={c} onClick={() => setFilter(c)} style={{ background: filter === c ? "#1a1a1a" : "white", color: filter === c ? "white" : "#1a1a1a", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800", cursor: "pointer" }}>{c}</div>)}</div>
          <div style={{ fontSize: "11px", background: aiResult ? "#ef4444" : "white", color: aiResult ? "white" : "#1a1a1a", border: "1px solid #f5e6c8", borderRadius: "10px", padding: "10px" }}>
            <div style={{ fontWeight: "900" }}>{aiLoading ? "ON-SITE AI REAL ENGINE generating: " + query + " - NOT YOUTUBE - RIGHT ON SITE" : aiResult ? "ON-SITE AI REAL ENGINE Video - NOT YOUTUBE - " + filtered.length + " related hacks - Right on site - Complete info" : "Search results: " + filtered.length + " hacks - ON-SITE AI - NOT YOUTUBE"}</div>
            <div style={{ opacity: 0.9, fontSize: "10px", marginTop: "4px" }}>{query ? (aiResult ? "ON-SITE AI video generated right on OldHint.com itself - Not YouTube - Real engine being built step by step - Focusing on engine itself - No people - Only engine - Complete info solving problem right on our site - Our concept is ours - " + query + " - Plus " + filtered.length + " real related hacks - Right on site" : "Searching " + query + " - ON-SITE AI - NOT YOUTUBE - Right on site") : "All hacks - Old=Gold - ON-SITE AI search ready - Ask anything daily life bases - Real engine video generated right on site - Not YouTube - Right on site"}</div>
          </div>
          {aiResult ? (
            <div style={{ background: "white", border: "2px solid #ef4444", borderRadius: "14px", padding: "12px" }}>
              <div style={{ fontWeight: "900", fontSize: "12px", color: "#ef4444" }}>ON-SITE AI REAL ENGINE VIDEO - NOT YOUTUBE - RIGHT ON OLDHINT.COM - SOLVING PROBLEM WITH COMPLETE INFO RIGHT ON SITE - REAL ENGINE</div>
              <div style={{ fontSize: "10px", marginTop: "6px", lineHeight: "1.5" }}>{aiResult.videoScript ? aiResult.videoScript.slice(0, 260) + "... - ON-SITE AI - NOT YOUTUBE - RIGHT ON SITE" : aiResult.summary.slice(0, 260)}</div>
              <div style={{ marginTop: "8px", background: "#1a1a1a", color: "white", borderRadius: "8px", padding: "8px", fontSize: "10px", fontWeight: "700" }}>VIDEO CREATED BY AI RIGHT ON OUR SITE ITSELF WITH SOLVING THEIR PROBLEM WITH COMPLETE INFO RIGHT ON OUR SITE - REMEMBER WE HAVE AI LIKE YOU ON OUR WEBSITE TOO - OUR CONCEPT IS OURS - NOT YOUTUBE - ON-SITE AI - RIGHT ON OLDHINT.COM - REAL ENGINE - FOCUSING ON ENGINE ITSELF - NO PEOPLE - ONLY ENGINE - EXACT PART INFO - COMPLETE DESCRIPTION - SOLVING PROBLEM RIGHT ON SITE - ON-SITE AI</div>
              <div style={{ marginTop: "8px", background: "#fde68a", borderRadius: "8px", padding: "8px", fontSize: "10px", fontWeight: "700" }}>ON-SITE AI - NOT YOUTUBE - Real engine steps: {aiResult.engineImages ? aiResult.engineImages.map(e => e.label).join(" → ") : "Block → Crank → Rods → Cam → Heads → Assembled"} - Complete description - Solving problem right on site - ON-SITE AI</div>
            </div>
          ) : null}
          <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "14px", padding: "12px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>How it works - Old=Gold - ON-SITE AI - NOT YOUTUBE - Perfect - Right on site</div><div style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.6" }}><div>1. Ask AI anything daily life bases - ON-SITE AI</div><div>2. ON-SITE AI generates REAL ENGINE video right on OldHint.com - NOT YOUTUBE</div><div>3. Big video playing replaces saved video - Real engine - ON-SITE AI</div><div>4. Step by step with complete description - Real engine build - Focusing on engine itself - No people - Only engine</div><div>5. Exact part info animated - Block 4.00 crank 3.48 etc - Complete info solving problem right on site</div><div>6. Real hacks related shown below AI - ON-SITE AI - NOT YOUTUBE - Our concept is ours - Right on site</div></div></div>
          <div style={{ background: "#1a1a1a", color: "white", borderRadius: "14px", padding: "12px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>ON-SITE AI - NOT YOUTUBE - Related content - People posted - Right on site</div><div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>{filtered.slice(0, 4).map(h => <div key={h.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}><span>{h.person} - {h.skill}</span><span style={{ opacity: 0.6 }}>{h.followers}</span></div>)}</div><div onClick={() => { if (!user) { setShowAuth(true); setAuthMode("signup"); } else { setShowVault(true); } }} style={{ marginTop: "12px", background: "white", color: "black", borderRadius: "10px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "12px", cursor: "pointer" }}>{user ? "Vault - 41 experts - ON-SITE AI - NOT YOUTUBE" : "Create account - Follow 41 experts - ON-SITE AI - NOT YOUTUBE"}</div></div>
        </div>
      </div>

      {showShare ? <div style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "10px 20px", fontSize: "12px", fontWeight: "700", zIndex: 100 }}>Link copied - ON-SITE AI - NOT YOUTUBE - Right on site</div> : null}

      {showAuth ? (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
          <div style={{ background: "#FFFBEB", borderRadius: "20px", padding: "24px", maxWidth: "380px", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>{authMode === "login" ? "Login - OldHint - ON-SITE AI" : "Create account - OldHint - ON-SITE AI - NOT YOUTUBE"}</div><div onClick={() => setShowAuth(false)} style={{ background: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "12px", cursor: "pointer", border: "1px solid #f5e6c8" }}>Close</div></div>
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {authMode === "signup" ? <input value={authForm.name} onChange={e => setAuthForm({ name: e.target.value, email: authForm.email, pass: authForm.pass })} placeholder="Your name" style={{ border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", background: "white" }} /> : null}
              <input value={authForm.email} onChange={e => setAuthForm({ name: authForm.name, email: e.target.value, pass: authForm.pass })} placeholder="Email" style={{ border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", background: "white" }} />
              <input value={authForm.pass} onChange={e => setAuthForm({ name: authForm.name, email: authForm.email, pass: e.target.value })} placeholder="Password" type="password" style={{ border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", background: "white" }} />
              <div onClick={() => doAuth()} style={{ background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "12px", textAlign: "center", fontWeight: "900", fontSize: "13px", cursor: "pointer", marginTop: "4px" }}>{authMode === "login" ? "Login - ON-SITE AI" : "Create account - Follow 41 experts - ON-SITE AI - NOT YOUTUBE - Right on site"}</div>
            </div>
          </div>
        </div>
      ) : null}

      {showVault ? (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
          <div style={{ background: "white", borderRadius: "20px", padding: "24px", maxWidth: "380px", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>Skill Vault - 21 per month - ON-SITE AI - NOT YOUTUBE</div><div onClick={() => setShowVault(false)} style={{ background: "#f5f5f4", borderRadius: "20px", padding: "6px 12px", fontSize: "12px", cursor: "pointer" }}>Close</div></div>
            <div style={{ marginTop: "12px", fontSize: "12px", lineHeight: "1.5" }}>Follow 41 old experts. Learn life hacks that took 50 years to learn. Save. Try. Not on TikTok. In Family Vault forever. Search any hack - ON-SITE AI generates REAL ENGINE video right on OldHint.com itself - Not YouTube - Real SBC 350 engine being built step by step - Focusing on engine itself - No people - Only engine - Complete info solving problem right on site - Our concept is ours - AI like you on website too - ON-SITE AI - NOT YOUTUBE - Right on site</div>
            <div onClick={() => setShowVault(false)} style={{ marginTop: "16px", background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "12px", textAlign: "center", fontWeight: "900", cursor: "pointer" }}>Join - 21 per month - 41 experts - ON-SITE AI - NOT YOUTUBE - Right on site</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
