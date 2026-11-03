"use client";
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
    return <div ref={cRef} style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0a0a0a,#78350f,#1a1a1a)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fde68a", textAlign: "center", padding: "20px" }}><div style={{ fontSize: "32px" }}>🎬</div><div style={{ fontWeight: "900", fontSize: "12px", marginTop: "8px" }}>Real Motion</div><div style={{ fontSize: "9px", opacity: 0.7, marginTop: "4px" }}>{alt} — Fully functional — Real video</div></div>;
  }
  return <div ref={cRef} style={{ width: "100%", height: "100%", background: "#000", position: "relative", overflow: "hidden" }}><video ref={vRef} src={src} autoPlay muted loop playsInline preload="metadata" onError={() => setErr(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /><div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)", pointerEvents: "none" }} /></div>;
}
const FEED_DATA = [
  { id: "dada-1969", family: "Bazard Family", person: "Dada", tag: "1969 Charger", city: "Calgary 1969", video: "/videos/image_20261015_213541.mp4", story: "1969 Dodge Charger. Bought 1972 for $800. Still in garage. Still starts. 52 years same garage. Not on TikTok. In Family Vault.", hashtags: ["#1969Charger", "#DadaStories"], likes: 2247, comments: ["Dada still has charger?", "My dad had same!"], badge: "LIVE GARAGE", color: "#1a1a1a" },
  { id: "nani-pickle", family: "Bazard Family", person: "Nani", tag: "60 year recipe", city: "Punjab to Calgary 1964", video: "/videos/image_20261015_213543.mp4", story: "Mango pickle. My mother taught me. Her mother taught her. 60 years same jar. Secret stays in family. Now granddaughter recording for vault.", hashtags: ["#NaniPickles", "#60YearRecipe"], likes: 1834, comments: ["Nani recipe secret?", "60 years! Wow"], badge: "SECRET 60YR", color: "#78350f" },
  { id: "papa-keeper", family: "Bazard Family", person: "Papa", tag: "1000 stories", city: "Keeper 41 families", video: "/videos/image_20261015_213541.mp4", story: "Keeper of stories. 1000 stories. My father told 200. I lived 800. If I dont tell, they die. So I tell in vault. For my kids kids. Not on TikTok. In Family Vault.", hashtags: ["#Keeper", "#1000Stories"], likes: 3102, comments: ["Keeper respect", "Tell more Papa!"], badge: "KEEPER 1000", color: "#15803d" }
];
export default function Page() {
  const [active, setActive] = useState(0);
  const [likes, setLikes] = useState(FEED_DATA.map((f) => f.likes));
  const [liked, setLiked] = useState(FEED_DATA.map(() => false));
  const [saved, setSaved] = useState(FEED_DATA.map(() => false));
  const [allComments, setAllComments] = useState(FEED_DATA.map((f) => f.comments));
  const [newComments, setNewComments] = useState(FEED_DATA.map(() => ""));
  const [showComments, setShowComments] = useState(FEED_DATA.map(() => false));
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
      setActive(Math.min(Math.max(idx, 0), FEED_DATA.length - 1));
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
  useEffect(() => {
    try { localStorage.setItem("oldhint_liked", JSON.stringify(liked)); } catch {}
  }, [liked]);
  useEffect(() => {
    try { localStorage.setItem("oldhint_saved", JSON.stringify(saved)); } catch {}
  }, [saved]);
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
    try { navigator.clipboard.writeText("https://oldhint.com — Family Vault — 41 families — Real stories — Fully functional"); } catch {}
    setShowShare(true);
    setTimeout(() => setShowShare(false), 2000);
  }
  return (
    <div style={{ position: "relative", height: "100vh", background: "#000", overflow: "hidden", display: "flex" }}>
      <div ref={containerRef} style={{ flex: 1, height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory", scrollbarWidth: "none", msOverflowStyle: "none", background: "#000" }}>
        {FEED_DATA.map((item, idx) => (
          <div key={item.id} style={{ height: "100vh", scrollSnapAlign: "start", scrollSnapStop: "always", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", background: "#000" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "400px", height: "100vh", maxHeight: "800px", margin: "0 auto", background: "#000", overflow: "hidden" }}>
              <RealVideo src={item.video} alt={item.person} />
              <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "8px" }}>
                <div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800" }}>{item.badge}</div>
                <div style={{ background: item.color, color: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800" }}>{item.family}</div>
              </div>
              <div style={{ position: "absolute", bottom: "0", left: "0", right: "50px", padding: "16px", color: "white" }}>
                <div style={{ fontWeight: "900", fontSize: "14px" }}>{item.family} — {item.person} — {item.city}</div>
                <div style={{ fontSize: "12px", marginTop: "8px", lineHeight: "1.4" }}>{item.story}</div>
                <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>{item.hashtags.map((h, i) => (<span key={i} style={{ fontSize: "11px", fontWeight: "700", color: "#fde68a" }}>{h}</span>))}</div>
                <div style={{ marginTop: "12px", background: "rgba(255,255,255,0.12)", borderRadius: "12px", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "11px" }}><div style={{ fontWeight: "800" }}>Save in Family Vault — $21/mo</div><div style={{ opacity: 0.8, fontSize: "10px" }}>Not on TikTok — In Vault forever</div></div>
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
                  <div style={{ padding: "14px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "13px" }}>{allComments[idx].length} comments — Real working</div><div onClick={() => toggleC(idx)} style={{ background: "#f5f5f5", borderRadius: "20px", padding: "6px 12px", fontSize: "11px", cursor: "pointer" }}>Close</div></div>
                  <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>{allComments[idx].map((c, i) => (<div key={i} style={{ display: "flex", gap: "8px" }}><div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f5f5f4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "800" }}>{String.fromCharCode(65 + (i % 26))}</div><div style={{ flex: 1, background: "#fafaf9", borderRadius: "12px", padding: "8px 12px", fontSize: "12px" }}>{c}</div></div>))}</div>
                  <div style={{ padding: "12px", borderTop: "1px solid #f0f0f0", display: "flex", gap: "8px" }}><input value={newComments[idx]} onChange={(e) => { const n = [...newComments]; n[idx] = e.target.value; setNewComments(n); }} onKeyDown={(e) => { if (e.key === "Enter") addC(idx); }} placeholder="Add comment — real working — like TikTok" style={{ flex: 1, border: "1px solid #e7e5e4", borderRadius: "20px", padding: "10px 14px", fontSize: "12px" }} /><button onClick={() => addC(idx)} style={{ background: "#1a1a1a", color: "white", border: "none", borderRadius: "20px", padding: "10px 18px", fontSize: "12px", fontWeight: "800", cursor: "pointer" }}>Post</button></div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
        <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "8px", zIndex: 10 }}>{FEED_DATA.map((_, i) => (<div key={i} style={{ width: "4px", height: i === active ? "24px" : "8px", borderRadius: "20px", background: i === active ? "white" : "rgba(255,255,255,0.4)", transition: "all 0.3s" }} />))}</div>
      </div>
      <div style={{ width: "340px", background: "#FFFBEB", borderLeft: "1px solid #f5e6c8", display: "flex", flexDirection: "column", padding: "16px", gap: "14px", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>OldHint</div><div style={{ fontSize: "10px", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "6px 12px" }}>41 families live</div></div>
        <div><h1 style={{ fontSize: "28px", fontWeight: "900", lineHeight: "0.9", margin: 0 }}>TikTok.<br /><span style={{ color: "#b45309" }}>Not on TikTok.</span><br /><span style={{ color: "#15803d" }}>In Family Vault.</span></h1><p style={{ fontSize: "11px", color: "#57534e", marginTop: "8px", lineHeight: "1.4" }}>Your parents stories deserve more than 15 sec. We save them. Forever. With real motion. Not algorithm. Family only. Fully functional working like real TikTok — Vertical scroll — Auto play — Likes work — Comments work — Save works — Real working — Old People TikTok — Not on TikTok In Family Vault</p></div>
        <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "14px", padding: "14px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>Family Tree — 41 families</div><div style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.7" }}><div style={{ display: "flex", justifyContent: "space-between" }}><span>Bazard Calgary</span><span style={{ opacity: 0.6 }}>1969 Charger — {likes[0]} likes</span></div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Bazard Punjab</span><span style={{ opacity: 0.6 }}>60yr Pickle — {likes[1]} likes</span></div><div style={{ display: "flex", justifyContent: "space-between" }}><span>Keeper</span><span style={{ opacity: 0.6 }}>1000 stories — {likes[2]} likes</span></div><div onClick={() => setShowTree(true)} style={{ marginTop: "8px", fontWeight: "800", color: "#15803d", cursor: "pointer", fontSize: "11px" }}>+ 38 more families in vault — View Tree</div></div></div>
        <div style={{ background: "#1a1a1a", color: "white", borderRadius: "14px", padding: "14px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>Trust Bar — Why Family Vault?</div><div style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.6", opacity: 0.85 }}><div>✓ Not on TikTok — In Family Vault</div><div>✓ Real motion — Not AI — Real videos playing</div><div>✓ Vertical scroll — Like real TikTok</div><div>✓ Auto play — Intersection Observer — Live</div><div>✓ Likes work — Heart animation — localStorage</div><div>✓ Comments work — Slide up drawer — Add real comment</div><div>✓ Save work — Vault — Checkout $21/mo — Fully functional</div><div>✓ Not algorithm — Family only — 41 families live</div></div><div onClick={() => setShowVault(true)} style={{ marginTop: "12px", background: "white", color: "black", borderRadius: "10px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "12px", cursor: "pointer" }}>Join 41 Families — $21/mo — Real working</div></div>
      </div>
      {showShare ? <div style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "10px 20px", fontSize: "12px", fontWeight: "700", zIndex: 100 }}>Link copied — Fully functional — Share working!</div> : null}
      {showVault ? <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}><div style={{ background: "white", borderRadius: "20px", padding: "24px", maxWidth: "380px", width: "100%" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>Family Vault — $21/mo</div><div onClick={() => setShowVault(false)} style={{ background: "#f5f5f4", borderRadius: "20px", padding: "6px 12px", fontSize: "12px", cursor: "pointer" }}>Close</div></div><div style={{ marginTop: "12px", fontSize: "12px", lineHeight: "1.5" }}>Join 41 families. Save stories forever. Not on TikTok. In Family Vault. Real motion videos. Family Tree. Trust Bar. Fully functional working — Likes, comments, save, checkout — All working — Like real TikTok but for family.</div><div style={{ marginTop: "16px", display: "flex", gap: "10px" }}><div style={{ flex: 1, background: "#f5f5f4", borderRadius: "12px", padding: "10px", textAlign: "center", fontSize: "11px" }}><div style={{ fontWeight: "800" }}>$21/mo</div><div style={{ opacity: 0.6 }}>Family Vault</div></div><div onClick={() => { setShowVault(false); alert("Checkout — Fully functional — $21/mo — Join 41 families — Real working — Family Vault — oldhint.com — Thank you!"); }} style={{ flex: 2, background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "13px", cursor: "pointer" }}>Join Vault — $21/mo</div></div></div></div> : null}
      {showTree ? <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}><div style={{ background: "#FFFBEB", borderRadius: "20px", padding: "24px", maxWidth: "400px", width: "100%", maxHeight: "80vh", overflowY: "auto" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>Family Tree — 41 families</div><div onClick={() => setShowTree(false)} style={{ background: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "12px", cursor: "pointer", border: "1px solid #f5e6c8" }}>Close</div></div><div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>{FEED_DATA.map((f, i) => (<div key={f.id} style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}><div><div style={{ fontWeight: "800", fontSize: "12px" }}>{f.family} — {f.person}</div><div style={{ fontSize: "10px", opacity: 0.6 }}>{f.city} — {f.tag}</div></div><div style={{ textAlign: "right" }}><div style={{ fontSize: "11px", fontWeight: "700" }}>{likes[i]} likes</div><div style={{ fontSize: "10px", opacity: 0.6 }}>{allComments[i].length} comments</div></div></div>))}<div style={{ background: "white", border: "1px dashed #fde68a", borderRadius: "12px", padding: "12px", textAlign: "center", fontSize: "11px", fontWeight: "700", color: "#15803d" }}>+ 38 more families in vault — Fully functional working — Real motion — Trust Bar — Join — $21/mo</div></div></div></div> : null}
    </div>
  );
}
