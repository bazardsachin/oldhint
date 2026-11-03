"use client";
import { useState } from "react";
import RealMotionVideo from "./components/RealMotionVideo";

export default function Page() {
  const [like1, setLike1] = useState(2247);
  const [liked1, setLiked1] = useState(false);
  const [like2, setLike2] = useState(1834);
  const [liked2, setLiked2] = useState(false);
  const [like3, setLike3] = useState(3102);
  const [liked3, setLiked3] = useState(false);
  const [save1, setSave1] = useState(false);
  const [save2, setSave2] = useState(false);
  const [save3, setSave3] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [c1, setC1] = useState(["Dada still has charger?","My dad had same!"]);
  const [c2, setC2] = useState(["Nani recipe secret?","60 years! Wow"]);
  const [c3, setC3] = useState(["Keeper of stories — respect"]);
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");

  function toggleL1() {
    setLiked1(!liked1);
    setLike1(liked1 ? like1 - 1 : like1 + 1);
  }
  function toggleL2() {
    setLiked2(!liked2);
    setLike2(liked2 ? like2 - 1 : like2 + 1);
  }
  function toggleL3() {
    setLiked3(!liked3);
    setLike3(liked3 ? like3 - 1 : like3 + 1);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFFBEB", color: "#1a1a1a" }}>
      <div style={{ background: "#1a1a1a", color: "#fde68a", textAlign: "center", padding: "8px", fontSize: "11px" }}>
        Old People TikTok — Not on TikTok. In Family Vault. — Real stories — Real motion
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontWeight: "900", fontSize: "18px" }}>OldHint</div>
        <div style={{ fontSize: "11px", opacity: 0.6 }}>41 families live — Join Vault $21 mo</div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px 20px 20px", display: "grid", gridTemplateColumns: "1fr 320px", gap: "20px" }}>
        <div>
          <h1 style={{ fontSize: "48px", fontWeight: "900", lineHeight: "0.9", margin: "0" }}>
            TikTok.<br />
            <span style={{ color: "#b45309" }}>Not on TikTok.</span><br />
            <span style={{ color: "#15803d" }}>In Family Vault.</span>
          </h1>
          <p style={{ fontSize: "13px", color: "#57534e", maxWidth: "520px", marginTop: "10px" }}>
            Your parents have stories TikTok will never see. 60 year recipes. 1969 Charger. 1000 stories. Saved in Family Vault. Not on cloud.
          </p>

          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ background: "white", borderRadius: "20px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "320px 1fr" }}>
              <div style={{ height: "460px", background: "#111", position: "relative" }}>
                <RealMotionVideo src="/videos/image_20261015_213541.mp4" alt="Dada" />
                <div style={{ position: "absolute", bottom: "10px", left: "10px", background: "rgba(0,0,0,0.7)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "10px" }}>Dada 1969 Charger</div>
              </div>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontWeight: "800", fontSize: "12px" }}>Bazard Family — Dada — Calgary 1969</div>
                  <div style={{ fontSize: "12px", marginTop: "10px", lineHeight: "1.5" }}>1969 Dodge Charger. Bought 1972 for $800. Still in garage. Still starts. My son thinks sell. I think tell story first.</div>
                  {show1 ? (
                    <div style={{ marginTop: "12px", background: "#FFFBEB", borderRadius: "10px", padding: "10px" }}>
                      {c1.map((x, i) => (<div key={i} style={{ fontSize: "11px", padding: "3px 0" }}>{x}</div>))}
                      <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                        <input value={n1} onChange={(e) => setN1(e.target.value)} placeholder="Add comment" style={{ flex: 1, borderRadius: "20px", border: "1px solid #fde68a", padding: "5px 10px", fontSize: "10px" }} />
                        <button onClick={() => { if (n1.trim()) { setC1([...c1, n1]); setN1(""); } }} style={{ borderRadius: "20px", background: "#1a1a1a", color: "white", border: "none", padding: "5px 10px", fontSize: "10px", cursor: "pointer" }}>Post</button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  <div style={{ display: "flex", gap: "14px", fontSize: "11px", marginTop: "12px" }}>
                    <span onClick={toggleL1} style={{ cursor: "pointer", color: liked1 ? "#ef4444" : "#1a1a1a", fontWeight: liked1 ? "800" : "400" }}>{liked1 ? "♥" : "♡"} {like1}</span>
                    <span onClick={() => setShow1(!show1)} style={{ cursor: "pointer" }}>💬 {c1.length}</span>
                    <span onClick={() => setSave1(!save1)} style={{ cursor: "pointer", color: save1 ? "#15803d" : "#1a1a1a" }}>{save1 ? "✓ Saved" : "Save"}</span>
                  </div>
                  <div style={{ marginTop: "12px", background: "#1a1a1a", color: "white", borderRadius: "10px", padding: "10px 12px", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "11px" }}><div style={{ fontWeight: "800" }}>Save in Family Vault</div><div style={{ fontSize: "10px", opacity: 0.7 }}>$21 mo — Forever</div></div>
                    <div onClick={() => setSave1(!save1)} style={{ background: "white", color: "black", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800", cursor: "pointer" }}>{save1 ? "Saved" : "Save"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "20px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "320px 1fr" }}>
              <div style={{ height: "460px", background: "#78350f", position: "relative" }}>
                <RealMotionVideo src="/videos/image_20261015_213543.mp4" alt="Nani" />
                <div style={{ position: "absolute", bottom: "10px", left: "10px", background: "rgba(120,53,15,0.85)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "10px" }}>Nani 60 year recipe</div>
              </div>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontWeight: "800", fontSize: "12px" }}>Bazard Family — Nani — Punjab 1964</div>
                  <div style={{ fontSize: "12px", marginTop: "10px", lineHeight: "1.5" }}>Mango pickle. Mother taught me. Her mother taught her. 60 years same jar. No one outside family knows. Granddaughter recording for vault.</div>
                  {show2 ? (
                    <div style={{ marginTop: "12px", background: "#fef3c7", borderRadius: "10px", padding: "10px" }}>
                      {c2.map((x, i) => (<div key={i} style={{ fontSize: "11px", padding: "3px 0" }}>{x}</div>))}
                      <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                        <input value={n2} onChange={(e) => setN2(e.target.value)} placeholder="Add comment" style={{ flex: 1, borderRadius: "20px", border: "1px solid #fde68a", padding: "5px 10px", fontSize: "10px" }} />
                        <button onClick={() => { if (n2.trim()) { setC2([...c2, n2]); setN2(""); } }} style={{ borderRadius: "20px", background: "#1a1a1a", color: "white", border: "none", padding: "5px 10px", fontSize: "10px", cursor: "pointer" }}>Post</button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  <div style={{ display: "flex", gap: "14px", fontSize: "11px", marginTop: "12px" }}>
                    <span onClick={toggleL2} style={{ cursor: "pointer", color: liked2 ? "#ef4444" : "#1a1a1a", fontWeight: liked2 ? "800" : "400" }}>{liked2 ? "♥" : "♡"} {like2}</span>
                    <span onClick={() => setShow2(!show2)} style={{ cursor: "pointer" }}>💬 {c2.length}</span>
                    <span onClick={() => setSave2(!save2)} style={{ cursor: "pointer", color: save2 ? "#15803d" : "#1a1a1a" }}>{save2 ? "✓ Saved" : "Save"}</span>
                  </div>
                  <div style={{ marginTop: "12px", background: "#78350f", color: "white", borderRadius: "10px", padding: "10px 12px", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "11px" }}><div style={{ fontWeight: "800" }}>Get Nani recipe card</div><div style={{ fontSize: "10px", opacity: 0.8 }}>Vault only — Not on internet</div></div>
                    <div onClick={() => setSave2(!save2)} style={{ background: "white", color: "#78350f", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800", cursor: "pointer" }}>{save2 ? "Unlocked" : "Unlock"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "20px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "320px 1fr" }}>
              <div style={{ height: "460px", background: "#f5f5f4", position: "relative" }}>
                <RealMotionVideo src="/videos/image_20261015_213541.mp4" alt="Papa" />
                <div style={{ position: "absolute", bottom: "10px", left: "10px", background: "white", color: "black", borderRadius: "20px", padding: "5px 10px", fontSize: "10px", fontWeight: "700" }}>Papa 1000 stories</div>
              </div>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontWeight: "800", fontSize: "12px" }}>Bazard Family — Papa — Keeper</div>
                  <div style={{ fontSize: "12px", marginTop: "10px", lineHeight: "1.5" }}>I am keeper of stories. 1000 stories. Father told me 200. I lived 800. If I dont tell, they die. So I tell in vault. For my kids kids.</div>
                  {show3 ? (
                    <div style={{ marginTop: "12px", background: "#f5f5f4", borderRadius: "10px", padding: "10px" }}>
                      {c3.map((x, i) => (<div key={i} style={{ fontSize: "11px", padding: "3px 0" }}>{x}</div>))}
                      <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                        <input value={n3} onChange={(e) => setN3(e.target.value)} placeholder="Add comment" style={{ flex: 1, borderRadius: "20px", border: "1px solid #e7e5e4", padding: "5px 10px", fontSize: "10px" }} />
                        <button onClick={() => { if (n3.trim()) { setC3([...c3, n3]); setN3(""); } }} style={{ borderRadius: "20px", background: "#1a1a1a", color: "white", border: "none", padding: "5px 10px", fontSize: "10px", cursor: "pointer" }}>Post</button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  <div style={{ display: "flex", gap: "14px", fontSize: "11px", marginTop: "12px" }}>
                    <span onClick={toggleL3} style={{ cursor: "pointer", color: liked3 ? "#ef4444" : "#1a1a1a", fontWeight: liked3 ? "800" : "400" }}>{liked3 ? "♥" : "♡"} {like3}</span>
                    <span onClick={() => setShow3(!show3)} style={{ cursor: "pointer" }}>💬 {c3.length}</span>
                    <span onClick={() => setSave3(!save3)} style={{ cursor: "pointer", color: save3 ? "#15803d" : "#1a1a1a" }}>{save3 ? "✓ Saved" : "Save"}</span>
                  </div>
                  <div style={{ marginTop: "12px", background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: "10px", padding: "10px 12px", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "11px" }}><div style={{ fontWeight: "800" }}>Family Tree — 41 families</div><div style={{ fontSize: "10px", opacity: 0.6 }}>Trust Bar — Vault — Generations</div></div>
                    <div style={{ background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800", cursor: "pointer" }}>View Tree</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "18px", padding: "16px" }}>
          <div style={{ fontWeight: "900", fontSize: "13px" }}>Family Tree — 41 families</div>
          <div style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.6" }}>
            <div>Bazard Calgary — 1969 Charger</div>
            <div>Bazard Punjab — 60yr Pickle</div>
            <div>Keeper — 1000 stories</div>
            <div style={{ marginTop: "8px", fontWeight: "700", color: "#15803d" }}>+ 38 more families in vault</div>
          </div>
        </div>

        <div style={{ background: "#1a1a1a", color: "white", borderRadius: "18px", padding: "16px", marginTop: "14px" }}>
          <div style={{ fontWeight: "900", fontSize: "13px" }}>Trust Bar — Why Family Vault?</div>
          <div style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.5", opacity: 0.8 }}>
            <div>✓ Not on TikTok — In Family Vault</div>
            <div>✓ Real motion — Not AI — Real videos</div>
            <div>✓ Not algorithm — Family only</div>
            <div>✓ $21 mo keeps stories forever</div>
            <div>✓ Real working — Likes comments save</div>
          </div>
          <div style={{ marginTop: "10px", background: "white", color: "black", borderRadius: "10px", padding: "8px 12px", textAlign: "center", fontWeight: "800", fontSize: "11px", cursor: "pointer" }}>Join 41 Families — $21 mo — Real working</div>
        </div>
      </div>
    </div>
  );
}
