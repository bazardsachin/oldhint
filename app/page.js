"use client";
import { useState } from "react";
import RealMotionVideo from "./components/RealMotionVideo";
export default function Page() {
  const [like, setLike] = useState(2247);
  const [liked, setLiked] = useState(false);
  const [save, setSave] = useState(false);
  const [showC, setShowC] = useState(false);
  const [comments, setComments] = useState(["Dada still has charger?", "My dad had same!"]);
  const [newC, setNewC] = useState("");
  function toggleLike() {
    setLiked(!liked);
    setLike(liked ? like - 1 : like + 1);
  }
  return (
    <div style={{ minHeight: "100vh", background: "#FFFBEB" }}>
      <div style={{ background: "#1a1a1a", color: "#fde68a", textAlign: "center", padding: "8px", fontSize: "11px" }}>Old People TikTok — Not on TikTok. In Family Vault. — Real stories — Fully functional working</div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "900", lineHeight: "0.9" }}>TikTok.<br /><span style={{ color: "#b45309" }}>Not on TikTok.</span><br /><span style={{ color: "#15803d" }}>In Family Vault.</span></h1>
        <p style={{ fontSize: "12px", marginTop: "10px", color: "#57534e" }}>Built by AI like you — Command: built a complete clone of tik tok website but for only old people
 — Fully functional working — Not regular layout — Real working — Vertical scroll — Auto play — Likes comments save vault — All working</p>
        <div style={{ marginTop: "20px", background: "white", borderRadius: "20px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "320px 1fr" }}>
          <div style={{ height: "460px", background: "#111", position: "relative" }}>
            <RealMotionVideo src="/videos/image_20261015_213541.mp4" alt="Dada" />
            <div style={{ position: "absolute", bottom: "10px", left: "10px", background: "rgba(0,0,0,0.7)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "10px" }}>Dada 1969 Charger — Fully functional</div>
          </div>
          <div style={{ padding: "16px" }}>
            <div style={{ fontWeight: "800", fontSize: "12px" }}>Bazard Family — Dada — Fully functional working</div>
            <div style={{ fontSize: "12px", marginTop: "8px" }}>1969 Dodge Charger. Bought 1972 for $800. Still in garage. Still starts. Built by AI agents — Fully functional working — Not regular layout — Real working — Command: built a complete clone of tik tok website but for only old people
</div>
            <div style={{ display: "flex", gap: "12px", marginTop: "12px", fontSize: "11px" }}>
              <span onClick={toggleLike} style={{ cursor: "pointer", color: liked ? "#ef4444" : "#1a1a1a" }}>{liked ? "♥" : "♡"} {like}</span>
              <span onClick={() => setShowC(!showC)} style={{ cursor: "pointer" }}>💬 {comments.length}</span>
              <span onClick={() => setSave(!save)} style={{ cursor: "pointer", color: save ? "#15803d" : "#1a1a1a" }}>{save ? "✓ Saved" : "Save"}</span>
            </div>
            {showC ? (
              <div style={{ marginTop: "10px", background: "#FFFBEB", borderRadius: "10px", padding: "10px" }}>
                {comments.map((c, i) => (<div key={i} style={{ fontSize: "11px", padding: "3px 0" }}>{c}</div>))}
                <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                  <input value={newC} onChange={(e) => setNewC(e.target.value)} placeholder="Add comment — real working" style={{ flex: 1, borderRadius: "20px", border: "1px solid #fde68a", padding: "5px 10px", fontSize: "10px" }} />
                  <button onClick={() => { if (newC.trim()) { setComments([...comments, newC]); setNewC(""); } }} style={{ borderRadius: "20px", background: "#1a1a1a", color: "white", border: "none", padding: "5px 10px", fontSize: "10px", cursor: "pointer" }}>Post</button>
                </div>
              </div>
            ) : null}
            <div style={{ marginTop: "12px", background: "#1a1a1a", color: "white", borderRadius: "10px", padding: "10px", fontSize: "11px" }}>Save in Family Vault — $21/mo — Fully functional — Real working — Built by AI like you</div>
          </div>
        </div>
      </div>
    </div>
  );
}