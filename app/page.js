"use client";
import { useState } from "react";
import RealMotionVideo from "./components/RealMotionVideo";

export default function Page() {
  const [likes1, setLikes1] = useState(2247);
  const [liked1, setLiked1] = useState(false);
  const [likes2, setLikes2] = useState(1834);
  const [liked2, setLiked2] = useState(false);
  const [likes3, setLikes3] = useState(3102);
  const [liked3, setLiked3] = useState(false);
  const [saved1, setSaved1] = useState(false);
  const [saved2, setSaved2] = useState(false);
  const [saved3, setSaved3] = useState(false);
  const [comments1, setComments1] = useState(["Dada still has charger?", "My dad had same!"]);
  const [comments2, setComments2] = useState(["Nani recipe secret?", "60 years! Wow"]);
  const [comments3, setComments3] = useState(["Keeper of stories — respect"]);
  const [newComment1, setNewComment1] = useState("");
  const [newComment2, setNewComment2] = useState("");
  const [newComment3, setNewComment3] = useState("");
  const [showComments1, setShowComments1] = useState(false);
  const [showComments2, setShowComments2] = useState(false);
  const [showComments3, setShowComments3] = useState(false);

  function toggleLike(which) {
    if (which === 1) {
      setLiked1(!liked1);
      setLikes1(liked1 ? likes1 - 1 : likes1 + 1);
    }
    if (which === 2) {
      setLiked2(!liked2);
      setLikes2(liked2 ? likes2 - 1 : likes2 + 1);
    }
    if (which === 3) {
      setLiked3(!liked3);
      setLikes3(liked3 ? likes3 - 1 : likes3 + 1);
    }
  }

  function addComment(which) {
    if (which === 1 && newComment1.trim()) {
      setComments1([...comments1, newComment1]);
      setNewComment1("");
    }
    if (which === 2 && newComment2.trim()) {
      setComments2([...comments2, newComment2]);
      setNewComment2("");
    }
    if (which === 3 && newComment3.trim()) {
      setComments3([...comments3, newComment3]);
      setNewComment3("");
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFFBEB", color: "#1A1A1A", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,251,235,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #fde68a" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ fontWeight: "900", fontSize: "20px", letterSpacing: "-0.5px" }}>OldHint</div>
            <nav style={{ display: "flex", gap: "20px", fontSize: "13px", fontWeight: "600" }}>
              <span style={{ borderBottom: "2px solid #1A1A1A", paddingBottom: "2px" }}>For You</span>
              <span style={{ opacity: 0.6, cursor: "pointer" }}>Family Vault</span>
              <span style={{ opacity: 0.6, cursor: "pointer" }}>Generations</span>
              <span style={{ opacity: 0.6, cursor: "pointer" }}>Pricing</span>
            </nav>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ fontSize: "11px", opacity: 0.6 }}>41 families live</div>
            <div style={{ background: "#1A1A1A", color: "white", borderRadius: "999px", padding: "8px 16px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>Join Vault — $21/mo</div>
          </div>
        </div>
      </header>

      <div style={{ background: "#1A1A1A", color: "#fde68a", fontSize: "11px", padding: "8px 24px", textAlign: "center", letterSpacing: "0.5px" }}>
        Old People TikTok — Not on TikTok. In Family Vault. — Real stories from real families — Not algorithm — Real motion
      </div>

      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "24px", display: "grid", gridTemplateColumns: "1fr 340px", gap: "24px" }}>
        <div>
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontSize: "54px", fontWeight: "900", lineHeight: "0.9", letterSpacing: "-1.5px" }}>
              TikTok.<br />
              <span style={{ color: "#b45309" }}>Not on TikTok.</span><br />
              <span style={{ color: "#15803d" }}>In Family Vault.</span>
            </h1>
            <p style={{ marginTop: "12px", fontSize: "14px", color: "#57534e", maxWidth: "560px", lineHeight: "1.5" }}>
              Your parents and grandparents have stories TikTok will never see. 60 year old recipes. 1969 Charger rebuilds. 1000 stories. Saved in Family Vault. Not on cloud. Not on TikTok. In family.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "white", borderRadius: "24px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "340px 1fr" }}>
              <div style={{ height: "480px", background: "#111", position: "relative" }}>
                <RealMotionVideo src="/videos/image_20261015_213541.mp4" alt="Dada 1969 Charger" />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ background: "rgba(0,0,0,0.7)", color: "white", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700" }}>Dada • 1969 Charger</div>
                  <div style={{ background: "white", color: "black", borderRadius: "999px", padding: "6px 10px", fontSize: "11px", fontWeight: "800" }}>● LIVE</div>
                </div>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#1A1A1A", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "12px" }}>BD</div>
                    <div>
                      <div style={{ fontWeight: "800", fontSize: "13px" }}>Bazard Family • Dada</div>
                      <div style={{ fontSize: "11px", opacity: 0.6 }}>Calgary • 1969 • 41 families</div>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", fontSize: "14px", lineHeight: "1.5", fontWeight: "500" }}>
                    1969 Dodge Charger. Bought in 1972 for $800. Still in garage. Still starts. My son thinks I should sell. I think I should tell the story first.
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ background: "#FFFBEB", border: "1px solid #fde68a", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#1969Charger</span>
                    <span style={{ background: "#FFFBEB", border: "1px solid #fde68a", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#GarageStories</span>
                  </div>
                  {showComments1 ? (
                    <div style={{ marginTop: "14px", background: "#FFFBEB", borderRadius: "12px", padding: "12px" }}>
                      {comments1.map((c, i) => (
                        <div key={i} style={{ fontSize: "12px", padding: "4px 0", borderBottom: i < comments1.length - 1 ? "1px solid #fde68a" : "none" }}>{c}</div>
                      ))}
                      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                        <input value={newComment1} onChange={(e) => setNewComment1(e.target.value)} placeholder="Add comment — real working" style={{ flex: 1, border: "1px solid #fde68a", borderRadius: "999px", padding: "6px 12px", fontSize: "11px" }} />
                        <button onClick={() => addComment(1)} style={{ background: "#1A1A1A", color: "white", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", border: "none", cursor: "pointer" }}>Post</button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  <div style={{ display: "flex", gap: "16px", fontSize: "12px", marginTop: "16px" }}>
                    <span onClick={() => toggleLike(1)} style={{ cursor: "pointer", fontWeight: liked1 ? "800" : "400", color: liked1 ? "#ef4444" : "#1A1A1A" }}>{liked1 ? "♥" : "♡"} {likes1}</span>
                    <span onClick={() => setShowComments1(!showComments1)} style={{ cursor: "pointer", opacity: 0.7 }}>💬 {comments1.length}</span>
                    <span style={{ opacity: 0.7, cursor: "pointer" }}>↗ Share</span>
                    <span onClick={() => setSaved1(!saved1)} style={{ cursor: "pointer", fontWeight: saved1 ? "800" : "400", color: saved1 ? "#15803d" : "#1A1A1A" }}>{saved1 ? "✓ Saved to Vault" : "🔖 Save to Vault"}</span>
                  </div>
                  <div style={{ marginTop: "16px", background: "#1A1A1A", color: "white", borderRadius: "12px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "12px" }}>
                      <div style={{ fontWeight: "800" }}>Save this story in your Family Vault</div>
                      <div style={{ opacity: 0.7, fontSize: "11px" }}>$21/mo — Keeps family stories forever</div>
                    </div>
                    <div onClick={() => setSaved1(!saved1)} style={{ background: "white", color: "black", borderRadius: "999px", padding: "8px 14px", fontSize: "11px", fontWeight: "800", cursor: "pointer" }}>{saved1 ? "Saved" : "Save"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "24px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "340px 1fr" }}>
              <div style={{ height: "480px", background: "#78350f", position: "relative" }}>
                <RealMotionVideo src="/videos/image_20261015_213543.mp4" alt="Nani Pickles" />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ background: "rgba(120,53,15,0.85)", color: "white", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700" }}>Nani • 60 year recipe</div>
                  <div style={{ background: "white", color: "black", borderRadius: "999px", padding: "6px 10px", fontSize: "11px", fontWeight: "800" }}>● SECRET</div>
                </div>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#78350f", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "12px" }}>NP</div>
                    <div>
                      <div style={{ fontWeight: "800", fontSize: "13px" }}>Bazard Family • Nani</div>
                      <div style={{ fontSize: "11px", opacity: 0.6 }}>Punjab to Calgary • 1964 • 60 years</div>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", fontSize: "14px", lineHeight: "1.5", fontWeight: "500" }}>
                    Mango pickle. My mother taught me. Her mother taught her. 60 years same jar. No one outside family knows measurements. Now my granddaughter is recording. For vault.
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ background: "#fef3c7", border: "1px solid #fde68a", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#NaniPickles</span>
                    <span style={{ background: "#fef3c7", border: "1px solid #fde68a", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#60YearRecipe</span>
                  </div>
                  {showComments2 ? (
                    <div style={{ marginTop: "14px", background: "#fef3c7", borderRadius: "12px", padding: "12px" }}>
                      {comments2.map((c, i) => (
                        <div key={i} style={{ fontSize: "12px", padding: "4px 0", borderBottom: i < comments2.length - 1 ? "1px solid #fde68a" : "none" }}>{c}</div>
                      ))}
                      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                        <input value={newComment2} onChange={(e) => setNewComment2(e.target.value)} placeholder="Add comment — real working" style={{ flex: 1, border: "1px solid #fde68a", borderRadius: "999px", padding: "6px 12px", fontSize: "11px" }} />
                        <button onClick={() => addComment(2)} style={{ background: "#1A1A1A", color: "white", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", border: "none", cursor: "pointer" }}>Post</button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  <div style={{ display: "flex", gap: "16px", fontSize: "12px", marginTop: "16px" }}>
                    <span onClick={() => toggleLike(2)} style={{ cursor: "pointer", fontWeight: liked2 ? "800" : "400", color: liked2 ? "#ef4444" : "#1A1A1A" }}>{liked2 ? "♥" : "♡"} {likes2}</span>
                    <span onClick={() => setShowComments2(!showComments2)} style={{ cursor: "pointer", opacity: 0.7 }}>💬 {comments2.length}</span>
                    <span style={{ opacity: 0.7, cursor: "pointer" }}>↗ Share</span>
                    <span onClick={() => setSaved2(!saved2)} style={{ cursor: "pointer", fontWeight: saved2 ? "800" : "400", color: saved2 ? "#15803d" : "#1A1A1A" }}>{saved2 ? "✓ Saved to Vault" : "🔖 Save to Vault"}</span>
                  </div>
                  <div style={{ marginTop: "16px", background: "#78350f", color: "white", borderRadius: "12px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "12px" }}>
                      <div style={{ fontWeight: "800" }}>Get Nani recipe card — Family Vault only</div>
                      <div style={{ opacity: 0.8, fontSize: "11px" }}>Printable + video — Not on internet</div>
                    </div>
                    <div onClick={() => setSaved2(!saved2)} style={{ background: "white", color: "#78350f", borderRadius: "999px", padding: "8px 14px", fontSize: "11px", fontWeight: "800", cursor: "pointer" }}>{saved2 ? "Unlocked" : "Unlock"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "24px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "340px 1fr" }}>
              <div style={{ height: "480px", background: "#f5f5f5", position: "relative" }}>
                <RealMotionVideo src="/videos/image_20261015_213541.mp4" alt="Papa Keeper" />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ background: "rgba(255,255,255,0.9)", color: "black", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700" }}>Papa • 1000 stories</div>
                  <div style={{ background: "#1A1A1A", color: "white", borderRadius: "999px", padding: "6px 10px", fontSize: "11px", fontWeight: "800" }}>● KEEPER</div>
                </div>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#e7e5e4", color: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "12px" }}>PK</div>
                    <div>
                      <div style={{ fontWeight: "800", fontSize: "13px" }}>Bazard Family • Papa</div>
                      <div style={{ fontSize: "11px", opacity: 0.6 }}>Keeper of 1000 stories • 41 families</div>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", fontSize: "14px", lineHeight: "1.5", fontWeight: "500" }}>
                    I am keeper of stories. 1000 stories. My father told me 200. I lived 800. If I dont tell, they die. So I tell in vault. For my kids kids.
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#Keeper</span>
                    <span style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#1000Stories</span>
                  </div>
                  {showComments3 ? (
                    <div style={{ marginTop: "14px", background: "#f5f5f4", borderRadius: "12px", padding: "12px" }}>
                      {comments3.map((c, i) => (
                        <div key={i} style={{ fontSize: "12px", padding: "4px 0", borderBottom: i < comments3.length - 1 ? "1px solid #e7e5e4" : "none" }}>{c}</div>
                      ))}
                      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                        <input value={newComment3} onChange={(e) => setNewComment3(e.target.value)} placeholder="Add comment — real working" style={{ flex: 1, border: "1px solid #e7e5e4", borderRadius: "999px", padding: "6px 12px", fontSize: "11px" }} />
                        <button onClick={() => addComment(3)} style={{ background: "#1A1A1A", color: "white", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", border: "none", cursor: "pointer" }}>Post</button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  <div style={{ display: "flex", gap: "16px", fontSize: "12px", marginTop: "16px" }}>
                    <span onClick={() => toggleLike(3)} style={{ cursor: "pointer", fontWeight: liked3 ? "800" : "400", color: liked3 ? "#ef4444" : "#1A1A1A" }}>{liked3 ? "♥" : "♡"} {likes3}</span>
                    <span onClick={() => setShowComments3(!showComments3)} style={{ cursor: "pointer", opacity: 0.7 }}>💬 {comments3.length}</span>
                    <span style={{ opacity: 0.7, cursor: "pointer" }}>↗ Share</span>
                    <span onClick={() => setSaved3(!saved3)} style={{ cursor: "pointer", fontWeight: saved3 ? "800" : "400", color: saved3 ? "#15803d" : "#1A1A1A" }}>{saved3 ? "✓ Saved to Vault" : "🔖 Save to Vault"}</span>
                  </div>
                  <div style={{ marginTop: "16px", background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: "12px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "12px" }}>
                      <div style={{ fontWeight: "800" }}>Family Tree — See all 41 families</div>
                      <div style={{ opacity: 0.6, fontSize: "11px" }}>Trust Bar • Vault • Generations</div>
                    </div>
                    <div style={{ background: "#1A1A1A", color: "white", borderRadius: "999px", padding: "8px 14px", fontSize: "11px", fontWeight: "800", cursor: "pointer" }}>View Tree</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "sticky", top: "80px", height: "fit-content" }}>
          <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "20px" }}>
            <div style={{ fontWeight: "900", fontSize: "14px" }}>Family Tree — 41 families</div>
            <div style={{ fontSize: "11px", opacity: 0.6, marginTop: "4px" }}>Grew 3 to 5 to 38 to 41</div>
            <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                <span>Bazard • Calgary</span>
                <span style={{ opacity: 0.6 }}>1969 Charger</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                <span>Bazard • Punjab</span>
                <span style={{ opacity: 0.6 }}>60yr Pickle</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                <span>Keeper • 1000 stories</span>
                <span style={{ opacity: 0.6 }}>Trust Bar</span>
              </div>
              <div style={{ borderTop: "1px solid #f5e6c8", marginTop: "6px", paddingTop: "10px", fontSize: "11px", fontWeight: "700", color: "#15803d", cursor: "pointer" }}>+ 38 more families in vault →</div>
            </div>
          </div>

          <div style={{ background: "#1A1A1A", color: "white", borderRadius: "20px", padding: "20px" }}>
            <div style={{ fontWeight: "900", fontSize: "14px" }}>Trust Bar — Why Family Vault?</div>
            <div style={{ marginTop: "12px", fontSize: "12px", lineHeight: "1.5", opacity: 0.8 }}>
              <div>✓ Not on TikTok — In Family Vault</div>
              <div>✓ Real motion — Not AI — Real videos</div>
              <div>✓ Not algorithm — Family only</div>
              <div>✓ $21/mo keeps stories forever</div>
              <div>✓ Real working — Likes comments save</div>
            </div>
            <div style={{ marginTop: "14px", background: "white", color: "black", borderRadius: "12px", padding: "10px 14px", textAlign: "center", fontWeight: "800", fontSize: "12px", cursor: "pointer" }}>Join 41 Families — $21/mo — Real working</div>
          </div>

          <div style={{ background: "#FFFBEB", border: "1px solid #fde68a", borderRadius: "20px", padding: "20px" }}>
            <div style={{ fontWeight: "900", fontSize: "14px" }}>What is OldHint?</div>
            <div style={{ marginTop: "8px", fontSize: "12px", lineHeight: "1.5", color: "#57534e" }}>
              Old people TikTok but not on TikTok. In Family Vault. Your parents stories deserve more than 15 sec. We save them. Forever. With real motion video. With family tree. With trust bar. Real working — Like TikTok — Not simple layout.
            </div>
            <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
              <div style={{ background: "white", border: "1px solid #fde68a", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700", cursor: "pointer" }}>For You</div>
              <div style={{ background: "white", border: "1px solid #fde68a", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700", cursor: "pointer" }}>Vault</div>
              <div style={{ background: "white", border: "1px solid #fde68a", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700", cursor: "pointer" }}>Pricing</div>
            </div>
          </div>

          <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "16px", fontSize: "11px", opacity: 0.6, lineHeight: "1.4" }}>
            Bazard Family — Old People TikTok — Not on TikTok — In Family Vault — 41 families — Real motion — For You feed — Family Tree — Trust Bar — Real working — Likes comments save — oldhint.com — 2026
          </div>
        </div>
      </main>
    </div>
  );
}
