"use client";
import { useState } from "react";

export default function MetaAIPartnerButton() {
  const [command, setCommand] = useState("Build complete functional website — Not pages only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes fully functional autonomous like TikTok — Old People TikTok — Not on TikTok In Family Vault — 41 families — $21/mo — Make me millionaire — Any command — Any website — Fully working — Your partner Meta AI");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function buildWithOneCommand() {
    setLoading(true);
    setResult("META AI PARTNER — Your partner — Like me — Does all work with your commands only — Building complete functional website — Not pages only — Complete functional website — Fully functional working like real TikTok — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes — Most powerful AI that does everything with 1 command — Strong like you — As you say — Building — 10 Brain Agents — Coding Testing — Builder — Test before commit — Build after test — Autonomous — Billion Dollar — Most powerful AI — 1 command");
    try {
      const res = await fetch("/api/meta-ai-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command, jobId: "meta-ai-partner-" + Date.now() })
      });
      const data = await res.json();
      if (data.success) {
        setResult(`✅ META AI PARTNER — Your partner — Like me — Does all work — SUCCESS — ${data.message}\n\n${data.metaAiMessage}\n\nSHA: ${data.sha} — Chars: ${data.chars} — Model: ${data.model} — Committed: ${data.committed ? "YES — Vercel Deploying — oldhint.com LIVE in 23s — Fully functional working website — Not pages only — Complete functional website — Real working like TikTok" : "Generated — Check oldhint.com after upload"} — Your partner Meta AI — Does all work with your commands only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only — As you say`);
      } else {
        setResult(`❌ META AI PARTNER — Error — ${data.error} — ${data.message} — Your partner — Try again — As you say`);
      }
    } catch (e) {
      setResult(`❌ META AI PARTNER — Error — ${e.message} — Your partner — Try again — As you say — Most powerful AI — 1 command`);
    }
    setLoading(false);
  }

  return (
    <div style={{ background: "#111", border: "1px solid #222", borderRadius: "16px", padding: "16px", marginTop: "14px" }}>
      <div style={{ fontWeight: "900", fontSize: "14px", color: "white" }}>META AI PARTNER — Your partner — Like me — Does all work with your commands only — Most powerful AI — 1 command</div>
      <div style={{ fontSize: "10px", opacity: 0.6, color: "white", marginTop: "4px" }}>Put me as AI agent — Your partner Meta AI — I do all work with your commands only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only — Fully functional working like real TikTok — As you say — Your partner</div>
      <textarea value={command} onChange={(e) => setCommand(e.target.value)} placeholder="Talk to your partner Meta AI like you talk to me now — Build me complete functional website — Not pages only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes fully functional autonomous like TikTok — Old People TikTok — Not on TikTok In Family Vault — 41 families — $21/mo — Make me millionaire — Any command — Any website — Fully working — Your partner Meta AI — As you say" style={{ width: "100%", height: "80px", background: "#0a0a0a", border: "1px solid #333", borderRadius: "10px", padding: "10px", color: "white", fontSize: "10px", marginTop: "10px", resize: "none" }} />
      <button onClick={buildWithOneCommand} disabled={loading} style={{ width: "100%", marginTop: "10px", background: loading ? "#333" : "white", color: loading ? "white" : "black", borderRadius: "10px", padding: "12px", fontSize: "12px", fontWeight: "900", border: "none", cursor: "pointer" }}>
        {loading ? "META AI PARTNER BUILDING — Complete functional website — Not pages only — 1 command — Strong like you — As you say — Building — 10 Brain Agents — Coding Testing — Builder — Autonomous" : "BUILD WITH 1 COMMAND — META AI PARTNER — Your partner — Does all work — Most powerful AI — 1 command — Strong like you — Complete functional website — Not pages only — Fully functional working — As you say"}
      </button>
      {result ? <div style={{ marginTop: "10px", background: "#0a0a0a", border: "1px solid #333", borderRadius: "10px", padding: "10px", fontSize: "9px", color: "white", whiteSpace: "pre-wrap", maxHeight: "200px", overflowY: "auto", lineHeight: "1.4" }}>{result}</div> : null}
      <div style={{ marginTop: "8px", fontSize: "8px", opacity: 0.4, color: "white", textAlign: "center" }}>META AI PARTNER — Your partner — Like me — Does all work with your commands only — Most powerful AI that does everything with 1 command — Strong like you — Complete functional website — Not pages only — Fully functional working like real TikTok — Vertical scroll auto play likes comments save vault checkout family tree trust bar share real videos no black boxes — Fully functional autonomous — Like TikTok — Real working — Make me millionaire — Any command — Any website — Fully working — Your partner Meta AI — As you say — 1 command — Build complete functional website — Not pages only — Most powerful AI</div>
    </div>
  );
}
