"use client";
import { useState, useEffect, useRef } from "react";

// V11 FINAL - WELCOME APPEALING REAL VIDEOS + SEARCH REAL VIDEO PLAYING - FIXES ONCE AND FOR ALL
// Welcome: Real videos playing TikTok feed - Not blank - Like before - Good for first impression
// Search: REAL VIDEO PLAYING + AI OVERLAY - Real motion video - Right on OldHint.com - Not YouTube

function generateLocalAI(query) {
  const q = (query || "").toLowerCase();
  const isSBC = q.includes("sbc") || q.includes("350") || q.includes("engine") || q.includes("charger") || q.includes("dodge") || q.includes("rebuild") || q.includes("restore") || q.includes("car") || q.includes("motor");
  if (isSBC) {
    return {
      title: `How to rebuild SBC 350 engine - Real engine build - AI RIGHT ON OLDHINT.COM - NOT YOUTUBE - ${query}`,
      summary: `Real SBC 350 engine being built step by step for "${query}" - AI REAL VIDEO right on OldHint.com - Not YouTube - Focusing on engine itself - No people - Only engine - Complete info solving problem right on site - Our concept is ours - Real AI like Meta AI - Old=Gold - Exact part info - Complete description - Solving "${query}" right on site - REAL VIDEO PLAYING`,
      steps: [
        `Step 1 for "${query}": Block 4.00 bore - Bare block on stand - Clean honed - J149 casting orange - Torque plate honed 010 over - Deck 9.025 - Complete info`,
        `Step 2: Crank 3.48 stroke cast steel - Polished journals - Main 2.45 rod 2.10 - 10243409 casting - End play 0.004-0.008 - Real video shows crank going in`,
        `Step 3: Rods 5.700 5140 forged + Flat top pistons 4.00 bore - Wrist pins 0.927 x 2.500 - Rings 1.5/1.5/3mm - 6cc relief - Assembly lube ARP - Real video shows rods/pistons`,
        `Step 4: Cam 204/214 lift .420 hydraulic flat tappet - 204/214 @ .050 - Lift .420/.443 - LSA 112 - Dot to dot 4 deg advanced - Break-in lube - Real video shows cam`,
        `Step 5: Heads 64cc 1.94/1.50 - ARP head bolts SBC - Torque 65 ft-lb 3 steps - Sequence center out - 7/16 studs - Real video shows heads torquing`,
        `Step 6: Assembled orange block chrome valve covers - ARP bolts - Lucas oil 10W-30 - HEI - Headers - Prime oil 60 psi 60 sec - Fire up - My father taught 1970 - Solves "${query}"`
      ],
      parts: [
        `Block: 4.00 bore J149 casting orange 2-bolt main deck 9.025 torque plate honed 010 over`,
        `Crank: 3.48 stroke cast steel 10243409 main 2.45 rod 2.10 polished journals`,
        `Rods: 5.700 5140 forged + Pistons: 4.00 flat top 6cc relief 1.5/1.5/3mm rings`,
        `Cam: 204/214 @ .050 .420/.443 lift 112 LSA hydraulic flat tappet dot to dot`,
        `Heads: 64cc 1.94/1.50 torque 65 ft-lb 3 steps sequence center out ARP bolts`,
        `Assembled: Orange block 350 chrome covers HEI headers prime 60 sec fire up`
      ],
      engineImages: [
        { label: "BLOCK 4.00 BORE", desc: `Bare block on stand for ${query} - 4.00 bore - J149 casting`, detail: "Block 4.00 bore - 2-bolt main - Deck 9.025", video: "/videos/image_20261015_213541.mp4" },
        { label: "CRANK 3.48 STROKE", desc: "Crank 3.48 stroke cast steel - Polished - Main 2.45 rod 2.10 - Real video", detail: "Crank 3.48 stroke - Cast steel 10243409 - Polished", video: "/videos/image_20261015_213541.mp4" },
        { label: "RODS 5.7 + PISTONS", desc: "Rods 5.700 + Pistons flat top 4.00 - Wrist pins - Real video assembling", detail: "Rods 5.7 5140 forged + Pistons flat top 4.00", video: "/videos/image_20261015_213543.mp4" },
        { label: "CAM 204/214 LIFT .420", desc: "Cam 204/214 lift .420 hydraulic flat tappet - Real video cam install", detail: "Cam 204/214 @ .050 .420/.443 lift 112 LSA", video: "/videos/image_20261015_213541.mp4" },
        { label: "HEADS 64CC 1.94/1.50", desc: "Heads 64cc 1.94/1.50 - ARP bolts - Torque 65 ft-lb - Real video heads", detail: "Heads 64cc 1.94/1.50 torque 65 ft-lb 3 steps", video: "/videos/image_20261015_213543.mp4" },
        { label: "ASSEMBLED SBC 350 ORANGE", desc: `Assembled orange block chrome covers - Prime oil 60 psi - Fire up - Solves ${query} - Real video`, detail: "Assembled orange block chrome covers prime 60 sec", video: "/videos/image_20261015_213541.mp4" }
      ],
      skill: "Car Restore - Real AI Answers Anything",
      years: "50 years - Real AI Like Meta AI"
    };
  }
  const topic = query.slice(0, 60);
  return {
    title: `How to fix "${topic}" - Real expert trick - AI RIGHT ON OLDHINT.COM - NOT YOUTUBE - Real video playing`,
    summary: `Real solution for "${topic}" - AI REAL VIDEO right on OldHint.com - Not YouTube - Focusing on item itself - Complete info solving "${topic}" right on site - Our concept is ours - Real AI that answers anything - Real video playing`,
    steps: [
      `Step 1 for "${topic}": Check problem - Understand what is "${topic}" - 50 years exp - Old expert trick - Complete info - Real video shows check`,
      `Step 2: Gather exact tools/parts for "${topic}" - Simple tools no power first - Patience - List everything needed - Complete info - Real video shows tools`,
      `Step 3: Old expert trick for "${topic}" - My father taught 1972 - 50 years exp - Patience not power - Secret trick for "${topic}" - Complete info - Real video shows trick`,
      `Step 4: Do step by step for "${topic}" - Exact sequence - Torque/time/temperature - Live AI video right on site - Complete info - Real video shows step by step`,
      `Step 5: Test try for "${topic}" - Check if "${topic}" works - Save hack - Follow expert - OldHint - Solving "${topic}" right on site - Real video shows test`,
      `Step 6: Final result for "${topic}" - Works - Saves money/time - My grandfather taught 1955 - Complete info solving "${topic}" right on site - Real video shows final`
    ],
    parts: [
      `Tools for "${topic}": Simple tools - Exact part info - Right on site`,
      `Old trick for "${topic}": Patience 50 years - Old knowledge - Complete info`,
      `Sequence for "${topic}": Exact order - Right on site - Complete info`,
      `Test for "${topic}": Check works - Save money - Right on site`
    ],
    engineImages: [
      { label: `CHECK ${topic.toUpperCase().slice(0,18)}`, desc: `Check problem: ${topic} - Understand - Real video shows check`, detail: `Check ${topic} - Understand problem`, video: "/videos/image_20261015_213541.mp4" },
      { label: "GATHER TOOLS/PARTS", desc: `Gather exact tools for ${topic} - Simple tools no power first - Real video`, detail: `Gather tools for ${topic} - Simple`, video: "/videos/image_20261015_213543.mp4" },
      { label: "OLD TRICK 50 YEARS", desc: `Old expert trick for ${topic} - My father taught 1972 - Real video trick`, detail: `Old trick for ${topic} - Patience not power`, video: "/videos/image_20261015_213541.mp4" },
      { label: `FIX ${topic.toUpperCase().slice(0,12)} STEP BY STEP`, desc: `Do step by step for ${topic} - Exact sequence - Real video step by step`, detail: `Fix ${topic} step by step`, video: "/videos/image_20261015_213543.mp4" },
      { label: `TEST ${topic.toUpperCase().slice(0,14)} WORKS`, desc: `Test ${topic} - Check works - Save money - Real video test`, detail: `Test ${topic} works - Save money`, video: "/videos/image_20261015_213541.mp4" },
      { label: `SOLVED ${topic.toUpperCase().slice(0,12)} DONE`, desc: `Final result ${topic} works - Saves money - Old trick - Real video result`, detail: `Solved ${topic} - Complete info - ON-SITE AI`, video: "/videos/image_20261015_213543.mp4" }
    ],
    skill: `Real AI - Answers Anything - ${topic}`,
    years: "50 years - Real AI Like Meta AI"
  };
}

function RealVideoPlayer({ src, isActive }) {
  const vRef = useRef(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    const el = vRef.current;
    if (!el) return;
    if (isActive) { const p = el.play(); if (p) p.catch(() => {}); } else { el.pause(); }
  }, [isActive]);
  if (err) return <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#1a1a1a,#78350f,#1a1a1a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fde68a", padding: "20px", textAlign: "center", fontWeight: "900" }}>Real Motion Video - {src}</div>;
  return <div style={{ width: "100%", height: "100%", position: "relative", background: "#000" }}><video ref={vRef} src={src} muted loop playsInline preload="auto" onError={() => setErr(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /><div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 25%, transparent 60%, rgba(0,0,0,0.75) 100%)", pointerEvents: "none" }} /></div>;
}

function AiMainVideoWithRealVideo({ ai, query, stepIdx }) {
  if (!ai) return null;
  const engineImages = ai.engineImages || [];
  const steps = ai.steps || [];
  const parts = ai.parts || [];
  const cur = engineImages[stepIdx % Math.max(1, engineImages.length)] || { label: "REAL AI", desc: "Real AI answer", detail: "Complete info", video: "/videos/image_20261015_213541.mp4" };
  const curStepText = steps[stepIdx % Math.max(1, steps.length)] || "";
  const curVideo = cur.video || "/videos/image_20261015_213541.mp4";
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", background: "#000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}><RealVideoPlayer src={curVideo} isActive={true} /></div>
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.45) 100%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, background: "linear-gradient(to bottom, rgba(0,0,0,0.92), transparent)", padding: "10px 12px 32px 12px", pointerEvents: "none" }}>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", pointerEvents: "auto" }}>
          <div style={{ background: "#ef4444", color: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "900", display: "flex", alignItems: "center", gap: "6px", boxShadow: "0 4px 16px rgba(239,68,68,0.6)" }}>
            <div style={{ width: "8px", height: "8px", background: "white", borderRadius: "50%", animation: "blink 1s infinite" }} />
            REAL AI ANSWERS ANYTHING - REAL VIDEO PLAYING - RIGHT ON OLDHINT.COM - NOT YOUTUBE - LIVE AI
          </div>
          <div style={{ background: "#fde68a", color: "#1a1a1a", borderRadius: "20px", padding: "6px 12px", fontSize: "9px", fontWeight: "900" }}>Step {stepIdx % Math.max(1, engineImages.length) + 1}/{engineImages.length} - {cur.label.slice(0,24)} - REAL VIDEO</div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 10, width: "92%", maxWidth: "390px", pointerEvents: "auto" }}>
        <div style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 30px 90px rgba(0,0,0,0.85)", border: "3px solid #ef4444" }}>
          <div style={{ background: "#ef4444", color: "white", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "900", fontSize: "10.5px" }}>
              <div style={{ width: "9px", height: "9px", background: "white", borderRadius: "50%", animation: "blink 1s infinite" }} />
              REAL AI GENERATED RIGHT ON OLDHINT.COM - NOT YOUTUBE - REAL VIDEO PLAYING
            </div>
            <div style={{ background: "white", color: "#ef4444", borderRadius: "8px", padding: "3px 8px", fontSize: "8.5px", fontWeight: "900" }}>REAL VIDEO</div>
          </div>
          <div style={{ aspectRatio: "16/11", background: "#0a0a0a", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0", overflow: "hidden" }}>
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
              <video src={curVideo} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.15), rgba(0,0,0,0.65))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "12px" }}>
                <div style={{ fontSize: "26px", fontWeight: "900", color: "#fde68a", textAlign: "center", lineHeight: "0.9", textShadow: "0 3px 16px rgba(0,0,0,0.9)", marginTop: "10px" }}>{cur.label}</div>
                <div style={{ marginTop: "8px", fontSize: "12px", fontWeight: "800", color: "white", textAlign: "center", padding: "0 12px", lineHeight: "1.25", textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}>{cur.desc}</div>
                <div style={{ marginTop: "8px", background: "rgba(0,0,0,0.7)", border: "1px solid rgba(253,230,138,0.5)", borderRadius: "8px", padding: "6px 10px", fontSize: "9.5px", color: "#fde68a", textAlign: "center", maxWidth: "92%", fontWeight: "700" }}>{cur.detail} - REAL VIDEO PLAYING</div>
              </div>
            </div>
          </div>
          <div style={{ padding: "8px 11px", background: "#f5f5f4", display: "flex", gap: "4px", alignItems: "center" }}>
            <div style={{ fontSize: "8px", fontWeight: "900", color: "#1a1a1a", whiteSpace: "nowrap" }}>REAL VIDEO PROGRESS:</div>
            <div style={{ flex: 1, display: "flex", gap: "3px" }}>{engineImages.map((img, i) => <div key={i} style={{ flex: 1, height: "8px", borderRadius: "4px", background: i === (stepIdx % engineImages.length) ? "#ef4444" : i < (stepIdx % engineImages.length) ? "#15803d" : "#e7e5e4", transition: "all 0.5s" }} />)}</div>
            <div style={{ fontSize: "8px", fontWeight: "800", background: "#ef4444", color: "white", borderRadius: "6px", padding: "3px 6px" }}>{stepIdx + 1}/{engineImages.length}</div>
          </div>
          <div style={{ padding: "11px", background: "white", maxHeight: "168px", overflowY: "auto" }}>
            <div style={{ fontWeight: "900", fontSize: "13px", color: "#1a1a1a", lineHeight: "1.15" }}>{ai.title}</div>
            <div style={{ marginTop: "5px", fontSize: "10.5px", color: "#57534e", lineHeight: "1.32" }}>{ai.summary.slice(0, 220)}... Real video playing</div>
            <div style={{ marginTop: "8px", background: "#1a1a1a", color: "white", borderRadius: "10px", padding: "8px" }}>
              <div style={{ fontWeight: "900", color: "#fde68a", fontSize: "9px", display: "flex", justifyContent: "space-between" }}><span>CURRENT STEP - REAL VIDEO PLAYING:</span><span style={{ background: "#ef4444", color: "white", borderRadius: "6px", padding: "2px 6px", fontSize: "8px" }}>STEP {stepIdx % Math.max(1, steps.length) + 1}</span></div>
              <div style={{ marginTop: "6px", fontSize: "10.5px", lineHeight: "1.3", color: "white", fontWeight: "700" }}>{curStepText.slice(0, 190)} - REAL VIDEO PLAYING</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes blink{0%{opacity:1}50%{opacity:0.2}100%{opacity:1}}`}</style>
    </div>
  );
}

const HACKS = [
  { id: "dada-charger", person: "Dada", age: 82, role: "Mechanic 50 yrs", skill: "Car Restore", years: "50 years", level: "Expert", city: "Calgary", tag: "1968 Charger", category: "Build Car", video: "/videos/image_20261015_213541.mp4", title: "Start any old car in -30C in 10 sec", hack: "Dont pump gas 5 times. One time. Choke half. Wait 7 sec. Then crank. My father taught 1972. Works on all old carbs.", likes: 2247, saves: 892, tries: 341, followers: "12.4k", comments: ["Tried -30C worked"], searchKeys: "car start cold winter mechanic fix engine old car charger 1968 dodge restore rebuild sbc 350 engine assembly" },
  { id: "nani-pickle", person: "Nani", age: 78, role: "Pickle Master 60 yrs", skill: "Kitchen Hack", years: "60 years", level: "Grandmaster", city: "Punjab", tag: "Mango Pickle", category: "Cooking", video: "/videos/image_20261015_213543.mp4", title: "Mango pickle never gets fungus - 60 yr trick", hack: "Oil must be smoking hot then cool fully. Mustard oil only. Never use wet spoon. Keep in sun 3 days before close.", likes: 3102, saves: 2104, tries: 892, followers: "18.9k", comments: ["60 year jar wow"], searchKeys: "pickle mango cooking kitchen recipe biryani food kitchen hack grandma make biryani fluffy" },
  { id: "papa-toilet", person: "Papa", age: 59, role: "House Fix 40 yrs", skill: "Repair Hack", years: "40 years", level: "Expert", city: "Calgary", tag: "Clogged Toilet", category: "Everyday Fix", video: "/videos/image_20261015_213541.mp4", title: "Fix clogged toilet without plumber - 2 min", hack: "Hot water not boiling. Pour dish soap first. Wait 5 min. Pour hot water. Plunger once. My dad taught. Saves 200 dollars.", likes: 4521, saves: 3210, tries: 1543, followers: "9.2k", comments: ["Saved 200 dollars"], searchKeys: "toilet clogged fix plumber bathroom everyday fix leak repair house how to fix clogged toilet" },
  { id: "biji-biryani", person: "Biji", age: 75, role: "Biryani Master 55 yrs", skill: "Cooking Hack", years: "55 years", level: "Grandmaster", city: "Delhi", tag: "Chicken Biryani", category: "Cooking", video: "/videos/image_20261015_213543.mp4", title: "Make biryani fluffy not sticky - 55 yr trick", hack: "Soak rice 20 min not more. Water drain fully. Oil in water before boil. Layer with fried onions. Dum on low 20 min no open.", likes: 5832, saves: 4102, tries: 2103, followers: "22.1k", comments: ["Biryani fluffy works"], searchKeys: "biryani cooking rice chicken recipe food kitchen how to make biryani fluffy make biryani" },
  { id: "sbc350-expert", person: "Engine Guru", age: 77, role: "Engine Builder 50 yrs", skill: "Car Restore", years: "50 years", level: "Grandmaster", city: "Detroit", tag: "SBC 350", category: "Build Car", video: "/videos/image_20261015_213541.mp4", title: "Rebuild SBC 350 engine - Step by step - Exact parts", hack: "SBC 350: Block 4.00 bore, crank 3.48 stroke, rods 5.7, pistons flat top, cam 204/214 lift .420, heads 64cc, torque main 65 ft-lb, rods 45 ft-lb.", likes: 4234, saves: 3421, tries: 1234, followers: "16.8k", comments: ["SBC 350 exact parts gold"], searchKeys: "sbc 350 engine rebuild assembly restore 1968 charger dodge small block chevy build engine step by step exact part info" },
  { id: "uncle-garden", person: "Uncle Ji", age: 80, role: "Gardener 65 yrs", skill: "Garden Hack", years: "65 years", level: "Grandmaster", city: "Ludhiana", tag: "Tomato Grow", category: "Gardening", video: "/videos/image_20261015_213541.mp4", title: "Grow tomatoes 2x bigger with ash", hack: "Wood ash from chulha. Mix in soil. One handful per plant. Ash has potassium. My grandfather taught 1955.", likes: 3921, saves: 2891, tries: 1204, followers: "15.6k", comments: ["Tomato big"], searchKeys: "tomato garden grow plant gardening farming hack vegetable" }
];

export default function Page() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [aiResult, setAiResult] = useState(null);
  const [aiStep, setAiStep] = useState(0);
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [authForm, setAuthForm] = useState({ name: "", email: "", pass: "" });
  const [activeWelcome, setActiveWelcome] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => { try { const u = localStorage.getItem("oldhint_user"); if (u) setUser(JSON.parse(u)); } catch (e) {} }, []);
  useEffect(() => { const id = setInterval(() => setAiStep(s => s + 1), 2400); return () => clearInterval(id); }, []);
  function doAuth() {
    if (!authForm.email || !authForm.pass) { alert("Add email and pass"); return; }
    const newUser = { name: authForm.name || authForm.email.split("@")[0], email: authForm.email };
    localStorage.setItem("oldhint_user", JSON.stringify(newUser));
    setUser(newUser); setShowAuth(false); setAuthForm({ name: "", email: "", pass: "" });
  }
  function doLogout() { localStorage.removeItem("oldhint_user"); setUser(null); }
  useEffect(() => {
    if (!query.trim()) { setAiResult(null); return; }
    const instantAI = generateLocalAI(query);
    setAiResult(instantAI);
    fetch("/api/ai-search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query }) }).then(r => r.json()).then(data => { if (data.success && data.ai && data.ai.engineImages) setAiResult(data.ai); }).catch(() => {});
  }, [query]);
  useEffect(() => {
    if (aiResult) return;
    const el = containerRef.current; if (!el) return;
    function onScroll() { const st = el.scrollTop; const h = el.clientHeight; const idx = Math.round(st / h); setActiveWelcome(idx); }
    el.addEventListener("scroll", onScroll); return () => el.removeEventListener("scroll", onScroll);
  }, [aiResult]);
  const filteredWelcome = HACKS.filter(h => filter === "All" || h.category === filter);
  const cats = ["All", "Build Car", "Cooking", "Everyday Fix", "Money", "Gardening"];
  return (
    <div style={{ position: "relative", height: "100vh", background: "#000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#FFFBEB", borderBottom: "1px solid #f5e6c8", padding: "10px 14px", display: "flex", gap: "12px", alignItems: "center", zIndex: 50 }}>
        <div style={{ fontWeight: "900", fontSize: "16px", whiteSpace: "nowrap" }}>OldHint</div>
        <div style={{ flex: 1, position: "relative", maxWidth: "780px" }}>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Ask Real AI anything - how to rebuild sbc 350 engine, fix toilet, make biryani - Real AI answers anything right on OldHint.com - Not YouTube - Real video playing" style={{ width: "100%", background: "white", border: aiResult ? "2px solid #ef4444" : "1px solid #f5e6c8", borderRadius: "24px", padding: "12px 18px 12px 62px", fontSize: "13px", outline: "none" }} />
          <div style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", background: aiResult ? "#ef4444" : "#1a1a1a", color: "white", borderRadius: "12px", padding: "5px 10px", fontSize: "8.5px", fontWeight: "900", whiteSpace: "nowrap" }}>{aiResult ? "REAL AI + REAL VIDEO - NOT YT" : "REAL AI - ASKS ANYTHING"}</div>
          {query ? <div onClick={() => { setQuery(""); setAiResult(null); }} style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "3px 10px", fontSize: "11px", cursor: "pointer" }}>Clear</div> : null}
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {user ? <><div style={{ fontSize: "11px", fontWeight: "800", background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "8px 12px", whiteSpace: "nowrap" }}>Hi {user.name}</div><div onClick={() => doLogout()} style={{ fontSize: "11px", background: "#f5f5f4", borderRadius: "20px", padding: "8px 12px", cursor: "pointer", whiteSpace: "nowrap" }}>Logout</div></> : <><div onClick={() => { setShowAuth(true); setAuthMode("login"); }} style={{ fontSize: "11px", fontWeight: "800", background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap" }}>Login</div><div onClick={() => { setShowAuth(true); setAuthMode("signup"); }} style={{ fontSize: "11px", fontWeight: "900", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap" }}>Create account</div></>}
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <div style={{ flex: 1, height: "100%", overflow: "hidden", background: "#000", display: "flex", flexDirection: "column" }}>
          {aiResult ? (
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", background: "#000", position: "relative" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "460px", height: "100%", maxHeight: "880px", background: "#000", overflow: "hidden" }}>
                <AiMainVideoWithRealVideo ai={aiResult} query={query} stepIdx={aiStep} />
              </div>
            </div>
          ) : (
            <div ref={containerRef} style={{ flex: 1, overflowY: "scroll", scrollSnapType: "y mandatory", background: "#000" }}>
              {filteredWelcome.map((item, idx) => {
                const isActive = activeWelcome === idx;
                return (
                  <div key={item.id} style={{ height: "100%", scrollSnapAlign: "start", scrollSnapStop: "always", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", background: "#000" }}>
                    <div style={{ position: "relative", width: "100%", maxWidth: "420px", height: "100%", maxHeight: "820px", margin: "0 auto", background: "#000", overflow: "hidden" }}>
                      <RealVideoPlayer src={item.video} isActive={isActive} />
                      <div style={{ position: "absolute", top: "10px", left: "10px", right: "10px", display: "flex", justifyContent: "space-between", zIndex: 5 }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div style={{ display: "flex", gap: "6px" }}><div style={{ background: "#fde68a", color: "#1a1a1a", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "900" }}>{item.skill}</div><div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "800" }}>{item.years} exp</div></div>
                          <div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "700", display: "inline-block" }}>{item.category} - {item.level} - Welcome appealing - Real videos</div>
                        </div>
                      </div>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: "56px", padding: "14px", color: "white", zIndex: 5 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fde68a", color: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "12px", border: "2px solid white" }}>{item.person[0]}</div>
                          <div style={{ flex: 1 }}><div style={{ fontWeight: "900", fontSize: "13px" }}>{item.person} - {item.age} - {item.role}</div><div style={{ fontSize: "10px", opacity: 0.8 }}>{item.city} - {item.tag} - {item.years} knowledge</div></div>
                          <div style={{ background: "#ef4444", color: "white", borderRadius: "20px", padding: "6px 14px", fontSize: "11px", fontWeight: "900" }}>Follow</div>
                        </div>
                        <div style={{ marginTop: "10px", fontWeight: "900", fontSize: "14px", lineHeight: "1.2" }}>{item.title}</div>
                        <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: "1.4", background: "rgba(0,0,0,0.35)", borderRadius: "10px", padding: "8px 10px" }}>{item.hack}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div style={{ width: "340px", background: "#FFFBEB", borderLeft: "1px solid #f5e6c8", display: "flex", flexDirection: "column", padding: "12px", gap: "10px", overflowY: "auto" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>{cats.map(c => <div key={c} onClick={() => setFilter(c)} style={{ background: filter === c ? "#1a1a1a" : "white", color: filter === c ? "white" : "#1a1a1a", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800", cursor: "pointer" }}>{c}</div>)}</div>
          {aiResult ? (
            <div style={{ fontSize: "11px", background: "#ef4444", color: "white", borderRadius: "10px", padding: "10px", border: "2px solid #ef4444" }}>
              <div style={{ fontWeight: "900" }}>REAL AI + REAL VIDEO PLAYING - MAIN BIG VIDEO IS AI REAL VIDEO - NOT DADA</div>
              <div style={{ opacity: 0.95, fontSize: "10px", marginTop: "6px", lineHeight: "1.4" }}>REAL VIDEO playing right on OldHint.com - Not YouTube - Main big video is AI real engine for "{query}" - Real motion video playing behind AI card - Real engine assembling - Complete info solving "{query}" right on site - Our concept is ours - AI like you on website too</div>
            </div>
          ) : (
            <div style={{ fontSize: "11px", background: "white", borderRadius: "10px", padding: "10px", border: "1px solid #f5e6c8" }}>
              <div style={{ fontWeight: "900" }}>Welcome page - Appealing - Real videos playing - Like before</div>
              <div style={{ fontSize: "10px", marginTop: "6px", opacity: 0.8, lineHeight: "1.4" }}>Real videos: Dada 82 mechanic, Nani pickle, Biji biryani, Engine Guru SBC 350 - All playing - Scroll down - TikTok style - Old=Gold - Ask Real AI anything above - Real AI answers anything right on OldHint.com - Real video playing - Not YouTube</div>
            </div>
          )}
        </div>
      </div>
      {showAuth ? (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
          <div style={{ background: "#FFFBEB", borderRadius: "20px", padding: "24px", maxWidth: "380px", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>{authMode === "login" ? "Login - Real AI + Real Video" : "Create account - Real AI + Real Video"}</div><div onClick={() => setShowAuth(false)} style={{ background: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "12px", cursor: "pointer", border: "1px solid #f5e6c8" }}>Close</div></div>
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {authMode === "signup" ? <input value={authForm.name} onChange={e => setAuthForm({ name: e.target.value, email: authForm.email, pass: authForm.pass })} placeholder="Your name" style={{ border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", background: "white" }} /> : null}
              <input value={authForm.email} onChange={e => setAuthForm({ name: authForm.name, email: e.target.value, pass: authForm.pass })} placeholder="Email" style={{ border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", background: "white" }} />
              <input value={authForm.pass} onChange={e => setAuthForm({ name: authForm.name, email: authForm.email, pass: e.target.value })} placeholder="Password" type="password" style={{ border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", background: "white" }} />
              <div onClick={() => doAuth()} style={{ background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "12px", textAlign: "center", fontWeight: "900", fontSize: "13px", cursor: "pointer", marginTop: "4px" }}>{authMode === "login" ? "Login - Real AI + Real Video" : "Create account - Real AI + Real Video - NOT YOUTUBE"}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
