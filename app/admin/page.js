"use client";
import { useState } from "react";

export default function AdminPage() {
  const [query, setQuery] = useState("keep rotis soft");
  const [era, setEra] = useState("1960s");
  const [logs, setLogs] = useState([
    "[11:09:31 PM] Writer Agent: Completed + Builder deployed + SEO indexed",
    "[11:09:30 PM] Chief Agent: Assigning tasks to 7 departments...",
  ]);

  const runAll = async () => {
    setLogs([`Running mission: ${query} - ${era}...`]);
    const res = await fetch("/api/agent/run-all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, era }),
    });
    const data = await res.json();
    setLogs(data.logs || ["Done! Check /hint/" + data.final?.slug]);
  };

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "white", padding: "20px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>🅿️H OldHint Inc. — AI Corporate Control Centre</h1>
        <div>PH Launch: 01:50:42 • <a href="/" style={{ color: "white" }}>View Site</a></div>
      </div>
      <p style={{ color: "#0f0", fontSize: "12px" }}>Live: oldhint.com • 8 AI Employees • All Systems Online 🟢</p>

      {/* INPUT BOX — HERE YOU TYPE! */}
      <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", margin: "20px 0", border: "2px solid #00ff88", display: "flex", gap: "10px" }}>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="keep rotis soft" style={{ padding: "12px", width: "300px", borderRadius: "8px", color: "black", fontWeight: "bold" }} />
        <input value={era} onChange={e => setEra(e.target.value)} placeholder="1960s" style={{ padding: "12px", width: "100px", borderRadius: "8px", color: "black" }} />
        <button onClick={runAll} style={{ padding: "12px 25px", background: "#00ff88", color: "black", fontWeight: "bold", borderRadius: "8px", cursor: "pointer", border: "none" }}>🚀 Run All 8 AI Employees</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px" }}>
        {[
          ["GUIDES LIVE", "48", "+3 today"],
          ["REVENUE", "$7", "Stripe LIVE"],
          ["SEO INDEXED", "48/48", "sitemap.xml OK"],
          ["PH STATUS", "Scheduled", "Oct 13 12:01 AM PT"],
        ].map(([k, v, s]) => (
          <div key={k} style={{ background: "#111", padding: "15px", borderRadius: "12px", border: "1px solid #333" }}>
            <div style={{ fontSize: "10px", color: "#888" }}>{k}</div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{v}</div>
            <div style={{ fontSize: "12px", color: "#0f0" }}>{s}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", marginTop: "20px" }}>
        {[
          ["Chief Agent", "Online", "CEO/COO"],
          ["Builder Agent", "Working", "Engineering"],
          ["Writer + Scout", "Working", "Content Team"],
          ["Video Agent", "Online", "Media"],
          ["CMO Agent", "Deploying", "Marketing"],
          ["Sales Agent", "Online", "Sales"],
          ["SEO Agent", "Online", "Growth"],
          ["Support Agent", "Online", "Support"],
        ].map(([name, status, dept]) => (
          <div key={name} style={{ background: "#111", padding: "15px", borderRadius: "12px", border: "1px solid #333" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><b>{name}</b><span style={{ background: "#0a3", padding: "2px 8px", borderRadius: "10px", fontSize: "10px" }}>● {status}</span></div>
            <div style={{ fontSize: "10px", color: "#888" }}>{dept}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px", marginTop: "20px" }}>
        <div style={{ background: "#111", padding: "15px", borderRadius: "12px" }}>
          <b>Mission Control — Live Activity Feed</b>
          <div style={{ background: "black", color: "#0f0", padding: "10px", marginTop: "10px", fontFamily: "monospace", fontSize: "12px", minHeight: "150px", whiteSpace: "pre-wrap" }}>
            {logs.map((l, i) => <div key={i}>{l}</div>)}
          </div>
        </div>
        <div style={{ background: "#111", padding: "15px", borderRadius: "12px" }}>
          <b>Corporate Structure</b>
          <div style={{ fontSize: "12px", marginTop: "10px", color: "#ccc" }}>
            Founder: Sachin Bazard — Calgary T3J<br />
            Chief Agent (COO) — Decision maker<br />
            Engineering • Content • Media<br />
            Marketing • Sales • SEO<br />
            Support — 24/7<br /><br />
            GitHub: bazardsachin/oldhint<br />
            Vercel: oldhint-qbof<br />
            Domain: oldhint.com
          </div>
        </div>
      </div>
    </div>
  );
}
