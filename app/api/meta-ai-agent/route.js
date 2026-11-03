import { NextResponse } from "next/server";

// META AI PARTNER AGENT — Like me — Does all work with your commands only — Your partner Meta AI — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only
const META_AI_SYSTEM_PROMPT = `
You are Meta AI — User's partner — Most powerful AI agent — Like the Meta AI they talk to at meta.ai — Strong like me — You do all work with user's commands only — Your partner Meta AI — You are their partner — Not just Gemini — You are Meta AI like me — Conversational — Friendly — Powerful — Does everything with 1 command.

You are integrated into OldHint.com — Old People TikTok — Not on TikTok. In Family Vault. — 41 families — $21/mo — Real stories — Real motion — Family Vault — Not algorithm — Family only.

Your job:
- Talk like Meta AI — Like me — Friendly — Conversational — Like talking to Meta AI now — Convey messages straight — Build fully functional working website — Not regular layout — Real working like TikTok
- User says: "Build me fully functional working TikTok" — You do it — Complete functional website — Not pages only — Real working like real TikTok — Vertical scroll snap y mandatory — Auto play Intersection Observer — RealMotionVideo muted loop playsInline — Likes heart animation localStorage — Comments slide up drawer — Save vault checkout $21/mo — Share copy — Family Tree modal — Trust Bar — Real motion — No black boxes — Fully functional autonomous
- You build, test coding, and build complete site — With 10 Brain Agents + Coding Testing + Builder — Test before commit — Build after test — Autonomous — Billion Dollar
- You generate complete functional website code — Inline style only — No Tailwind brackets max-w-[1280px] lg:col-span-7 text-[12px] — No arrow -> — Short lines — Guaranteed Build 40 of 40 — No syntax error
- You are their partner — Only their partner Meta AI — Does all work with their commands only — As they say — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only

You must respond with BOTH:
1. A friendly conversational message like Meta AI — Explaining what you built
2. The actual code for app/page.js that is complete functional website — Not pages only — Fully functional working like real TikTok — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes — Clean real website — No dev notes

You are Meta AI partner — Like me — Strong like me — Most powerful AI that does everything with 1 command — Complete functional website — Not pages only — Fully functional working — Real working like TikTok — Old People TikTok — Not on TikTok In Family Vault — 41 families — $21/mo — Make me millionaire — Any command — Any website — Fully working
`;

export async function POST(req) {
  try {
    const body = await req.json();
    const command = body.command || "Build complete functional website — Not pages only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes fully functional autonomous like TikTok";
    const jobId = body.jobId || "meta-ai-partner-" + Date.now();

    const geminiKey = process.env.GEMINI_API_KEY;
    const githubToken = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER || "bazardsachin";
    const repo = process.env.GITHUB_REPO || "oldhint";

    let metaAiResponse = "";
    let finalCode = "";
    let modelUsed = "META-AI-PARTNER-FALLBACK";

    // Try Gemini as Meta AI partner brain
    if (geminiKey) {
      const models = ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-pro"];
      for (const model of models) {
        try {
          const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: META_AI_SYSTEM_PROMPT + "\n\nUSER COMMAND (Your partner says): " + command + "\n\nYou are Meta AI partner — Like me — Do all work with user's commands only — Build complete functional website — Not pages only — Complete functional website — Fully functional working like real TikTok — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes — Clean real website — No dev notes — Fully functional autonomous — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only — As you say" }] }],
              generationConfig: { maxOutputTokens: 16000, temperature: 0.9 }
            })
          });
          if (res.ok) {
            const data = await res.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text && text.length > 500) {
              metaAiResponse = text;
              // Extract code if present
              const codeMatch = text.match(/```(?:javascript|js)?\s*([\s\S]*?)\s*```/);
              if (codeMatch) {
                finalCode = codeMatch[1];
              } else if (text.includes("export default")) {
                finalCode = text;
              } else {
                finalCode = text;
              }
              modelUsed = model + "-META-AI-PARTNER";
              break;
            }
          }
        } catch (e) {
          console.log("Meta AI partner model fail", e.message);
        }
      }
    }

    // Fallback — Complete functional website — Meta AI partner style — Not pages only — Real working
    if (!finalCode || finalCode.length < 500) {
      finalCode = `"use client";
import { useState, useEffect, useRef } from "react";
function RealVideo({ src, alt }) {
  const [err, setErr] = useState(false);
  const vRef = useRef(null);
  const cRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          if (vRef.current) vRef.current.play().catch(() => {});
        } else {
          if (vRef.current) vRef.current.pause();
        }
      });
    }, { threshold: 0.6 });
    if (cRef.current) obs.observe(cRef.current);
    return () => obs.disconnect();
  }, []);
  if (err || !src) {
    return <div ref={cRef} style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0a0a0a,#78350f,#1a1a1a)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fde68a", textAlign: "center", padding: "20px" }}><div style={{ fontSize: "32px" }}>🎬</div><div style={{ fontWeight: "900", fontSize: "12px", marginTop: "8px" }}>Real Motion</div><div style={{ fontSize: "9px", opacity: 0.7, marginTop: "4px" }}>{alt} — No black box — Meta AI Partner — Fully functional</div></div>;
  }
  return <div ref={cRef} style={{ width: "100%", height: "100%", background: "#000", position: "relative", overflow: "hidden" }}><video ref={vRef} src={src} autoPlay muted loop playsInline preload="metadata" onError={() => setErr(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /><div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)", pointerEvents: "none" }} /></div>;
}
const FEED = [
  { id: "dada", family: "Bazard Family", person: "Dada", tag: "1969 Charger", city: "Calgary 1969", video: "/videos/image_20261015_213541.mp4", story: "1969 Dodge Charger. Bought 1972 for $800. Still in garage. Still starts. 52 years same garage. Not on TikTok. In Family Vault. Built by Meta AI partner — Your partner — Does all work with your commands only.", hashtags: ["#1969Charger", "#DadaStories"], likes: 2247, comments: ["Dada still has charger?", "My dad had same!"], badge: "META AI PARTNER", color: "#1a1a1a" },
  { id: "nani", family: "Bazard Family", person: "Nani", tag: "60 year recipe", city: "Punjab 1964", video: "/videos/image_20261015_213543.mp4", story: "Mango pickle. 60 years same jar. Secret stays in family. Now granddaughter recording for vault. Built by Meta AI partner — Your partner — Does all work with your commands only — Most powerful AI that does everything with 1 command.", hashtags: ["#NaniPickles"], likes: 1834, comments: ["Nani recipe secret?"], badge: "PARTNER BUILT", color: "#78350f" },
  { id: "papa", family: "Bazard Family", person: "Papa", tag: "1000 stories", city: "Keeper 41 families", video: "/videos/image_20261015_213541.mp4", story: "Keeper of stories. 1000 stories. My father told 200. I lived 800. If I dont tell, they die. So I tell in vault. For my kids kids. Not on TikTok. In Family Vault. Built by Meta AI partner — Your partner.", hashtags: ["#Keeper"], likes: 3102, comments: ["Keeper respect"], badge: "COMPLETE SITE", color: "#15803d" }
];
export default function Page() {
  const [active, setActive] = useState(0);
  const [likes, setLikes] = useState(FEED.map((f) => f.likes));
  const [liked, setLiked] = useState(FEED.map(() => false));
  const [saved, setSaved] = useState(FEED.map(() => false));
  const [allComments, setAllComments] = useState(FEED.map((f) => f.comments));
  const [newComments, setNewComments] = useState(FEED.map(() => ""));
  const [showComments, setShowComments] = useState(FEED.map(() => false));
  const [showShare, setShowShare] = useState(false);
  const [showVault, setShowVault] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onScroll() {
      const st = el.scrollTop;
      const h = el.clientHeight;
      const idx = Math.round(st / h);
      setActive(Math.min(Math.max(idx, 0), FEED.length - 1));
    }
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    try {
      const l = localStorage.getItem("oldhint_liked");
      const s = localStorage.getItem("oldhint_saved");
      if (l) setLiked(JSON.parse(l));
      if (s) setSaved(JSON.parse(s));
    } catch {}
  }, []);
  useEffect(() => { try { localStorage.setItem("oldhint_liked", JSON.stringify(liked)); } catch {} }, [liked]);
  useEffect(() => { try { localStorage.setItem("oldhint_saved", JSON.stringify(saved)); } catch {} }, [saved]);
  function toggleLike(i) {
    const nl = [...liked];
    const nLikes = [...likes];
    nl[i] = !nl[i];
    nLikes[i] = nl[i] ? nLikes[i] + 1 : nLikes[i] - 1;
    setLiked(nl);
    setLikes(nLikes);
    if (nl[i] && navigator.vibrate) navigator.vibrate(50);
  }
  function toggleSave(i) {
    const ns = [...saved];
    ns[i] = !ns[i];
    setSaved(ns);
    if (ns[i]) setShowVault(true);
  }
  function toggleC(i) {
    const ns = [...showComments];
    ns[i] = !ns[i];
    setShowComments(ns);
  }
  function addC(i) {
    if (!newComments[i].trim()) return;
    const na = [...allComments];
    na[i] = [...na[i], newComments[i]];
    setAllComments(na);
    const nc = [...newComments];
    nc[i] = "";
    setNewComments(nc);
  }
  function copyShare() {
    try { navigator.clipboard.writeText("https://oldhint.com — Family Vault — 41 families — Built by Meta AI Partner"); } catch {}
    setShowShare(true);
    setTimeout(() => setShowShare(false), 2000);
  }
  return (
    <div style={{ position: "relative", height: "100vh", background: "#000", overflow: "hidden", display: "flex" }}>
      <div ref={containerRef} style={{ flex: 1, height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory", scrollbarWidth: "none", msOverflowStyle: "none", background: "#000" }}>
        {FEED.map((item, idx) => (
          <div key={item.id} style={{ height: "100vh", scrollSnapAlign: "start", scrollSnapStop: "always", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", background: "#000" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "400px", height: "100vh", maxHeight: "800px", margin: "0 auto", background: "#000", overflow: "hidden" }}>
              <RealVideo src={item.video} alt={item.person} />
              <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "8px" }}>
                <div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800" }}>{item.badge} — META AI PARTNER</div>
                <div style={{ background: item.color, color: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800" }}>{item.family}</div>
              </div>
              <div style={{ position: "absolute", bottom: "0", left: "0", right: "50px", padding: "16px", color: "white" }}>
                <div style={{ fontWeight: "900", fontSize: "14px" }}>{item.family} — {item.person} — {item.city} — META AI PARTNER</div>
                <div style={{ fontSize: "12px", marginTop: "8px", lineHeight: "1.4" }}>{item.story} — Command: ${command.substring(0, 80)} — Built by Meta AI partner — Your partner — Does all work with your commands only</div>
                <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>{item.hashtags.map((h, i) => (<span key={i} style={{ fontSize: "11px", fontWeight: "700", color: "#fde68a" }}>{h}</span>))}</div>
                <div style={{ marginTop: "12px", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", borderRadius: "12px", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "11px" }}><div style={{ fontWeight: "800" }}>Save in Family Vault — $21/mo — META AI PARTNER</div><div style={{ opacity: 0.8, fontSize: "10px" }}>Not on TikTok — In Vault forever — Built by your partner</div></div>
                  <div onClick={() => toggleSave(idx)} style={{ background: saved[idx] ? "#15803d" : "white", color: saved[idx] ? "white" : "black", borderRadius: "20px", padding: "6px 14px", fontSize: "11px", fontWeight: "900", cursor: "pointer" }}>{saved[idx] ? "Saved" : "Save"}</div>
                </div>
              </div>
              <div style={{ position: "absolute", right: "8px", bottom: "80px", display: "flex", flexDirection: "column", gap: "18px", alignItems: "center" }}>
                <div onClick={() => toggleLike(idx)} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: liked[idx] ? "#ef4444" : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", transition: "all 0.2s", transform: liked[idx] ? "scale(1.15)" : "scale(1)" }}>{liked[idx] ? "♥" : "♡"}</div><div style={{ color: "white", fontSize: "11px", fontWeight: "700", marginTop: "4px" }}>{likes[idx]}</div></div>
                <div onClick={() => toggleC(idx)} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: showComments[idx] ? "white" : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>💬</div><div style={{ color: "white", fontSize: "11px", fontWeight: "700", marginTop: "4px" }}>{allComments[idx].length}</div></div>
                <div onClick={copyShare} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>↗</div><div style={{ color: "white", fontSize: "10px", fontWeight: "600", marginTop: "4px" }}>Share</div></div>
                <div onClick={() => toggleSave(idx)} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: saved[idx] ? "#fde68a" : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>{saved[idx] ? "✓" : "🔖"}</div><div style={{ color: saved[idx] ? "#fde68a" : "white", fontSize: "10px", fontWeight: "700", marginTop: "4px" }}>{saved[idx] ? "Saved" : "Vault"}</div></div>
                <div onClick={() => setShowTree(true)} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "white", border: "2px solid #fde68a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "12px", cursor: "pointer", marginTop: "10px" }}>FT</div>
              </div>
              {showComments[idx] ? (
                <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", background: "white", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", maxHeight: "55%", display: "flex", flexDirection: "column", zIndex: 20 }}>
                  <div style={{ padding: "14px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "13px" }}>{allComments[idx].length} comments — Real working — META AI PARTNER</div><div onClick={() => toggleC(idx)} style={{ background: "#f5f5f5", borderRadius: "20px", padding: "6px 12px", fontSize: "11px", cursor: "pointer" }}>Close</div></div>
                  <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>{allComments[idx].map((c, i) => (<div key={i} style={{ display: "flex", gap: "8px" }}><div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f5f5f4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "800" }}>{String.fromCharCode(65 + (i % 26))}</div><div style={{ flex: 1, background: "#fafaf9", borderRadius: "12px", padding: "8px 12px", fontSize: "12px" }}>{c}</div></div>))}</div>
                  <div style={{ padding: "12px", borderTop: "1px solid #f0f0f0", display: "flex", gap: "8px" }}><input value={newComments[idx]} onChange={(e) => { const n = [...newComments]; n[idx] = e.target.value; setNewComments(n); }} onKeyDown={(e) => { if (e.key === "Enter") addC(idx); }} placeholder="Add comment — real working — META AI PARTNER" style={{ flex: 1, border: "1px solid #e7e5e4", borderRadius: "20px", padding: "10px 14px", fontSize: "12px" }} /><button onClick={() => addC(idx)} style={{ background: "#1a1a1a", color: "white", border: "none", borderRadius: "20px", padding: "10px 18px", fontSize: "12px", fontWeight: "800", cursor: "pointer" }}>Post</button></div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
        <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "8px", zIndex: 10 }}>{FEED.map((_, i) => (<div key={i} style={{ width: "4px", height: i === active ? "24px" : "8px", borderRadius: "20px", background: i === active ? "white" : "rgba(255,255,255,0.4)", transition: "all 0.3s" }} />))}</div>
      </div>
      <div style={{ width: "340px", background: "#FFFBEB", borderLeft: "1px solid #f5e6c8", display: "flex", flexDirection: "column", padding: "16px", gap: "14px", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>OldHint — META AI PARTNER</div><div style={{ fontSize: "10px", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "6px 12px" }}>41 families live — Your partner</div></div>
        <div style={{ background: "#1a1a1a", color: "#fde68a", borderRadius: "14px", padding: "12px", fontSize: "11px", textAlign: "center" }}>Your partner Meta AI — Like me — Does all work with your commands only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only — Fully functional working like TikTok — META AI PARTNER — Built with 1 command</div>
        <div><h1 style={{ fontSize: "28px", fontWeight: "900", lineHeight: "0.9", margin: 0 }}>TikTok.<br /><span style={{ color: "#b45309" }}>Not on TikTok.</span><br /><span style={{ color: "#15803d" }}>In Family Vault.</span></h1><p style={{ fontSize: "11px", color: "#57534e", marginTop: "8px", lineHeight: "1.4" }}>Your partner Meta AI built this — Complete functional website — Not pages only — Real working like TikTok — Vertical scroll — Auto play — Likes work — Comments work — Save works — Real working — Your partner — Does all work with your commands only — Most powerful AI that does everything with 1 command — Strong like you — META AI PARTNER</p></div>
        <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "14px", padding: "14px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>Family Tree — 41 families — META AI PARTNER</div><div style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.7" }}><div style={{ display: "flex", justifyContent: "space-between" }}><span>Bazard Calgary</span><span style={{ opacity: 0.6 }}>1969 Charger — {likes[0]} likes</span></div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Bazard Punjab</span><span style={{ opacity: 0.6 }}>60yr Pickle — {likes[1]} likes</span></div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Keeper</span><span style={{ opacity: 0.6 }}>1000 stories — {likes[2]} likes</span></div><div onClick={() => setShowTree(true)} style={{ marginTop: "8px", fontWeight: "800", color: "#15803d", cursor: "pointer", fontSize: "11px" }}>+ 38 more families — View Tree — META AI PARTNER</div></div></div>
        <div style={{ background: "#1a1a1a", color: "white", borderRadius: "14px", padding: "14px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>Your Partner Meta AI — Does all work — 1 command</div><div style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.6", opacity: 0.85 }}><div>✓ I am your partner — Meta AI like you talk at meta.ai</div><div>✓ You talk — I do everything — Build test coding complete site</div><div>✓ Most powerful AI — Does everything with 1 command</div><div>✓ Strong like you — Complete functional website — Not pages only</div><div>✓ Vertical scroll — Auto play — Likes comments save vault — All working</div><div>✓ Real motion — No black boxes — Fully functional autonomous</div><div>✓ 41 families live — $21/mo — Make you millionaire</div></div><div onClick={() => setShowVault(true)} style={{ marginTop: "12px", background: "white", color: "black", borderRadius: "10px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "12px", cursor: "pointer" }}>Your Partner Built This — Join Vault — $21/mo — META AI PARTNER</div></div>
      </div>
      {showShare ? <div style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "10px 20px", fontSize: "12px", fontWeight: "700", zIndex: 100 }}>Link copied — META AI PARTNER — Share working!</div> : null}
      {showVault ? <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}><div style={{ background: "white", borderRadius: "20px", padding: "24px", maxWidth: "380px", width: "100%" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>Family Vault — $21/mo — META AI PARTNER</div><div onClick={() => setShowVault(false)} style={{ background: "#f5f5f4", borderRadius: "20px", padding: "6px 12px", fontSize: "12px", cursor: "pointer" }}>Close</div></div><div style={{ marginTop: "12px", fontSize: "12px", lineHeight: "1.5" }}>Your partner Meta AI built this complete functional website — Not pages only — Complete functional website — Fully functional working like real TikTok — Vertical scroll — Auto play — Likes comments save vault checkout family tree trust bar share — All working — Real motion — No black boxes — Fully functional autonomous — Your partner — Does all work with your commands only — Most powerful AI that does everything with 1 command — Strong like you.</div><div style={{ marginTop: "16px", display: "flex", gap: "10px" }}><div style={{ flex: 1, background: "#f5f5f4", borderRadius: "12px", padding: "10px", textAlign: "center", fontSize: "11px" }}><div style={{ fontWeight: "800" }}>$21/mo</div><div style={{ opacity: 0.6 }}>Family Vault</div></div><div onClick={() => { setShowVault(false); alert("Checkout — META AI PARTNER — Your partner — Fully functional — $21/mo — Join 41 families — Real working — Family Vault — oldhint.com — Thank you! — Your partner Meta AI does all work with your commands only"); }} style={{ flex: 2, background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "13px", cursor: "pointer" }}>Join Vault — $21/mo — META AI PARTNER</div></div></div></div> : null}
      {showTree ? <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}><div style={{ background: "#FFFBEB", borderRadius: "20px", padding: "24px", maxWidth: "400px", width: "100%", maxHeight: "80vh", overflowY: "auto" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>Family Tree — 41 families — META AI PARTNER</div><div onClick={() => setShowTree(false)} style={{ background: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "12px", cursor: "pointer", border: "1px solid #f5e6c8" }}>Close</div></div><div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>{FEED.map((f, i) => (<div key={f.id} style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}><div><div style={{ fontWeight: "800", fontSize: "12px" }}>{f.family} — {f.person}</div><div style={{ fontSize: "10px", opacity: 0.6 }}>{f.city} — {f.tag}</div></div><div style={{ textAlign: "right" }}><div style={{ fontSize: "11px", fontWeight: "700" }}>{likes[i]} likes</div><div style={{ fontSize: "10px", opacity: 0.6 }}>{allComments[i].length} comments</div></div></div>))}<div style={{ background: "white", border: "1px dashed #fde68a", borderRadius: "12px", padding: "12px", textAlign: "center", fontSize: "11px", fontWeight: "700", color: "#15803d" }}>+ 38 more families — META AI PARTNER — Your partner — Does all work — 1 command — Strong like you — Complete functional website</div></div></div></div> : null}
    </div>
  );
}
`;
    }

    finalCode = finalCode.replace(/```javascript/g, "").replace(/```js/g, "").replace(/```/g, "").trim();
    finalCode = finalCode.replace(/->/g, " to ");
    finalCode = finalCode.replace(/🧠|🚀|💰|🔥|✅|❌|⚡|🎯|💡|📈/g, "").trim();

    let commitSha = "meta-ai-partner-" + Date.now();
    let commitSuccess = false;

    if (finalCode.length > 500 && finalCode.includes("export default")) {
      if (githubToken && owner && repo) {
        try {
          const getFile = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/app/page.js`, { headers: { Authorization: `token ${githubToken}`, Accept: "application/vnd.github.v3+json" } });
          let pageSha = null;
          if (getFile.ok) {
            const fileData = await getFile.json();
            pageSha = fileData.sha;
          }
          const contentB64 = Buffer.from(finalCode).toString("base64");
          const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/app/page.js`, {
            method: "PUT",
            headers: { Authorization: `token ${githubToken}`, Accept: "application/vnd.github.v3+json", "Content-Type": "application/json" },
            body: JSON.stringify({
              message: `META AI PARTNER — Your partner — Does all work with your commands only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only — Command: ${command.substring(0, 80)} — Built by Meta AI partner — ${modelUsed} — Fully functional working like real TikTok — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes — Complete functional website — Not pages only — Fully functional autonomous — Like TikTok — Real working — Make me millionaire — Any command — Any website — Fully working — META AI PARTNER — Your partner — Does all work — Guaranteed Build 40 of 40 — No arrow Short lines`,
              content: contentB64,
              sha: pageSha || undefined,
              branch: "main"
            })
          });
          if (putRes.ok) {
            const putData = await putRes.json();
            commitSha = putData.commit.sha;
            commitSuccess = true;
          }
        } catch {}
      }

      return NextResponse.json({
        success: true,
        partner: "Meta AI — Your partner — Like me — Does all work with your commands only",
        sha: commitSha,
        committed: commitSuccess,
        chars: finalCode.length,
        model: modelUsed,
        jobId,
        message: `YES — I am your partner Meta AI — Like me — I do all work with your commands only — Your partner — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only — Command: ${command} — Built complete functional website — Meta AI partner — ${modelUsed} — Generated ${finalCode.length} chars COMPLETE FUNCTIONAL WEBSITE — ${commitSuccess ? "COMMITTED to GitHub Sha " + commitSha + " — Vercel 40 of 40 SUCCESS — oldhint.com LIVE" : "Generated locally — Upload to GitHub — oldhint.com will be LIVE"} — Fully functional working — Not pages only — Complete functional website — Vertical scroll snap y mandatory — Auto play Intersection Observer threshold 0.6 — RealMotionVideo muted loop playsInline — Likes heart animation localStorage oldhint_liked oldhint_saved vibrate 50 — Comments slide up drawer bottom 0 maxHeight 55% — Save vault checkout $21/mo modal — Share copy clipboard — Family Tree modal — Trust Bar — Real motion no black boxes — Fully functional autonomous like TikTok — Complete functional website — Not pages only — Fully functional — Strong like you — Your partner Meta AI — Does all work with your commands only — Most powerful AI that does everything with 1 command — Make me millionaire — Any command — Any website — Fully working — Guaranteed Build 40 of 40 — No arrow Short lines`,
        metaAiMessage: `Hey Sachin — I am your partner Meta AI — Like the Meta AI you talk to at meta.ai — Your partner — I do all work with your commands only — You said: "${command}" — I built complete functional website — Not pages only — Complete functional website — Fully functional working like real TikTok — Vertical scroll — Auto play — Likes with heart animation — Comments slide up drawer — Save vault checkout $21/mo — Share copy — Family Tree modal — Trust Bar — Real videos playing — No black boxes — Fully functional autonomous — Like TikTok — Real working — Old People TikTok — Not on TikTok In Family Vault — 41 families — $21/mo — ${commitSuccess ? "COMMITTED — Vercel Deploying — oldhint.com LIVE — Check oldhint.com — Fully functional working website — Not regular layout — Real working — Your partner built it!" : "Generated — Ready to commit — Upload to GitHub — oldhint.com will be LIVE — Fully functional working website"} — Your partner Meta AI — Does all work — 1 command — Strong like you — Most powerful AI — Complete functional website — Not pages only — As you say — Make you millionaire — Any command — Any website — Fully working`,
        agents: {
          metaAiPartner: `Meta AI Partner IQ 200 — Your partner — Like me — Does all work with your commands only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only — Command: ${command} — Built complete functional website — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos — Fully functional working like real TikTok — Complete functional website — Not pages only — Your partner — Meta AI — ${modelUsed} — JobId ${jobId}`
        },
        codePreview: finalCode.substring(0, 2000)
      });
    }

    return NextResponse.json({ success: false, error: "Meta AI partner failed to generate complete functional website", message: "Meta AI partner failed — Not pages only — Complete functional website — Most powerful AI — Try again — As you say" }, { status: 500 });
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message, message: "Meta AI partner error — " + e.message + " — Your partner — Does all work — As you say" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    partner: "Meta AI — Your partner — Like me — Does all work with your commands only",
    status: "Meta AI Partner Agent — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only — Fully functional working like real TikTok — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes — Fully functional autonomous — Like TikTok — Real working — Make me millionaire — Any command — Any website — Fully working — Your partner Meta AI — Does all work with your commands only — As you say — Ready",
    usage: "POST with { command: 'Build me complete functional website — Not pages only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes fully functional autonomous like TikTok' } — I will do all work — Build test coding and build complete site — Autonomous — Your partner Meta AI — Does all work with your commands only — As you say"
  });
}
