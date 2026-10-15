"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [topic, setTopic] = useState("keep rotis soft");
  const [decade, setDecade] = useState("1960s");
  const [logs, setLogs] = useState([
    "[11:09:30 PM] Chief Agent: Assigning tasks to 7 departments...",
    "[11:09:31 PM] Writer Agent: Completed + Builder deployed + SEO indexed"
  ]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ guides: 48, seo: "48/48", revenue: "$7", today: "+3 today" });

  // REAL-TIME STATS FETCH
  useEffect(() => {
    fetch("/api/stats").then(r=>r.json()).then(d=>setStats(d)).catch(()=>{});
  }, []);

  const runAgents = async () => {
    if (!topic) return;
    setLoading(true);
    setLogs([`[Chief] 🎯 Mission: ${topic} | Decade: ${decade}`, "[Chief] Dispatching 8 AI Employees..."]);

    try {
      const res = await fetch("/api/agent/run-all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, decade })
      });
      const data = await res.json();
      if (data.logs) {
        setLogs(data.logs);
        // Auto-refresh count after publish
        setTimeout(() => {
          fetch("/api/stats").then(r=>r.json()).then(d=>setStats(d));
        }, 2000);
      }
    } catch (e) {
      setLogs(prev => [...prev, `[Error] ${e.message}`]);
    }
    setLoading(false);
  };

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", padding: "20px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "900" }}><span style={{ background: "#0a5cff", padding: "4px 10px", marginRight: "8px" }}>P</span>H OldHint Inc. — AI Corporate Control Centre</h1>
        <div style={{ fontSize: "14px" }}>PH Launch: 01:50:42 • <a href="/" style={{ color: "#fff", textDecoration: "underline" }}>View Site</a></div>
      </div>

      <div style={{ color: "#00ff88", fontSize: "12px", marginBottom: "15px" }}>Live: oldhint.com • 8 AI Employees • All Systems Online 🟢</div>

      <div style={{ border: "2px solid #00ff88", borderRadius: "12px", padding: "16px", display: "flex", gap: "12px", marginBottom: "20px" }}>
        <input value={topic} onChange={e=>setTopic(e.target.value)} placeholder="keep rotis soft" style={{ flex: 2, padding: "12px", borderRadius: "8px", color: "#000", fontWeight: "700" }} />
        <input value={decade} onChange={e=>setDecade(e.target.value)} style={{ flex: 0.5, padding: "12px", borderRadius: "8px", color: "#000", fontWeight: "700" }} />
        <button onClick={runAgents} disabled={loading} style={{ flex: 1, background: loading?"#555":"#00ff88", color: "#000", fontWeight: "900", borderRadius: "8px", border: "none", cursor: "pointer" }}>
          {loading? "⏳ Running 8 Agents..." : "🚀 Run All 8 AI Employees"}
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "16px" }}>
        <div style={{ background: "#1a1a1a", padding: "16px", borderRadius: "12px", border: "1px solid #333" }}><div style={{ fontSize: "11px", color: "#888" }}>GUIDES LIVE</div><div style={{ fontSize: "26px", fontWeight: "900" }}>{stats.guides}</div><div style={{ color: "#00ff88", fontSize: "12px" }}>{stats.today}</div></div>
        <div style={{ background: "#1a1a1a", padding: "16px", borderRadius: "12px", border: "1px solid #333" }}><div style={{ fontSize: "11px", color: "#888" }}>REVENUE</div><div style={{ fontSize: "26px", fontWeight: "900" }}>{stats.revenue}</div><div style={{ color: "#00ff88", fontSize: "12px" }}>Stripe LIVE</div></div>
        <div style={{ background: "#1a1a1a", padding: "16px", borderRadius: "12px", border: "1px solid #333" }}><div style={{ fontSize: "11px", color: "#888" }}>SEO INDEXED</div><div style={{ fontSize: "26px", fontWeight: "900" }}>{stats.seo}</div><div style={{ color: "#00ff88", fontSize: "12px" }}>sitemap.xml OK</div></div>
        <div style={{ background: "#1a1a1a", padding: "16px", borderRadius: "12px", border: "1px solid #333" }}><div style={{ fontSize: "11px", color: "#888" }}>PH STATUS</div><div style={{ fontSize: "26px", fontWeight: "900" }}>Scheduled</div><div style={{ color: "#00ff88", fontSize: "12px" }}>Oct 13 12:01 AM PT</div></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "16px" }}>
        {[
          ["Chief Agent","CEO/COO","Online"],
          ["Builder Agent","Engineering","Working"],
          ["Writer + Scout","Content Team","Working"],
          ["Video Agent","Media","Online"],
          ["CMO Agent","Marketing","Deploying"],
          ["Sales Agent","Sales","Online"],
          ["SEO Agent","Growth","Online"],
          ["Support Agent","Support","Online"],
        ].map(([name, role, status])=>(
          <div key={name} style={{ background: "#1a1a1a", padding: "12px 16px", borderRadius: "12px", border: "1px solid #333", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div><div style={{ fontWeight: "800" }}>{name}</div><div style={{ fontSize: "11px", color: "#888" }}>{role}</div></div>
            <div style={{ background: status==="Online"?"#00aa55":status==="Working"?"#00bb66":"#00aa55", padding: "2px 8px", borderRadius: "10px", fontSize: "11px" }}>● {status}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px" }}>
        <div style={{ background: "#141414", borderRadius: "12px", padding: "16px" }}>
          <div style={{ fontWeight: "800", marginBottom: "10px" }}>Mission Control — Live Activity Feed</div>
          <div style={{ background: "#000", color: "#00ff88", fontFamily: "monospace", fontSize: "12px", padding: "12px", borderRadius: "8px", height: "220px", overflowY: "auto", whiteSpace: "pre-wrap" }}>
            {logs.map((l,i)=><div key={i}>{l}</div>)}
          </div>
        </div>
        <div style={{ background: "#141414", borderRadius: "12px", padding: "16px" }}>
          <div style={{ fontWeight: "800", marginBottom: "10px" }}>Corporate Structure</div>
          <div style={{ fontSize: "12px", color: "#ccc", lineHeight: "1.5" }}>
            Founder: Sachin Bazard — Calgary T3J<br/>
            Chief Agent (COO) — Decision maker<br/>
            Engineering • Content • Media<br/>
            Marketing • Sales • SEO<br/>
            Support — 24/7<br/><br/>
            GitHub: bazardsachin/oldhint<br/>
            Vercel: oldhint-qbof<br/>
            Domain: oldhint.com
          </div>
        </div>
      </div>
    </div>
  );
}
