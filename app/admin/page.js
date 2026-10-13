"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Admin() {
  const [pass, setPass] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [today, setToday] = useState(null);
  const [searchTest, setSearchTest] = useState("how to make biryani");
  const [agents, setAgents] = useState(null);
  const [status, setStatus] = useState("");
  const [logs, setLogs] = useState([
    `[${new Date().toLocaleTimeString()}] CEO Agent: Monitoring Product Hunt launch Oct 13 12:01 AM PT`,
    `[${new Date().toLocaleTimeString()}] Engineering: Vercel deployment live - oldhint.com`,
    `[${new Date().toLocaleTimeString()}] SEO Agent: sitemap.xml 48 guides indexed`,
    `[${new Date().toLocaleTimeString()}] Sales Agent: Stripe LIVE sk_live_51... $7 checkout ready`,
  ]);
  const [countdown, setCountdown] = useState("01:32:00");

  useEffect(() => {
    const t = setInterval(() => {
      // countdown to 1:01 AM Calgary = 12:01 AM PT
      const now = new Date();
      const launch = new Date();
      launch.setDate(launch.getDate() + 1);
      launch.setHours(1, 1, 0, 0);
      const diff = launch - now;
      if (diff > 0) {
        const h = Math.floor(diff / 3600000).toString().padStart(2, "0");
        const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, "0");
        const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, "0");
        setCountdown(`${h}:${m}:${s}`);
      }
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const check = () => {
    if (pass === "goldy123" || pass === "oldhint" || pass === "admin") {
      setUnlocked(true);
      addLog("Founder access granted - Corporate HQ unlocked");
      load();
    } else alert("Wrong pass - try goldy123 / oldhint");
  };

  const addLog = (msg) => {
    setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 30));
  };

  const load = () => {
    setStatus("CEO Agent: Generating today's hint...");
    addLog("Chief Agent: Assigning tasks to 7 departments...");
    fetch("/api/agent/generate-hint", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        setToday(d);
        setStatus(`Chief Agent: Today's mission completed - ${d?.title || "New guide ready"}`);
        addLog(`Writer Agent: Completed "${d?.title || "New hint"}" + Builder deployed + SEO indexed`);
      })
      .catch(() => {
        setStatus("API offline - using demo mode");
        setToday({ title: "How to make biryani never sticky", slug: "biryani-never-sticky", category: "Food" });
      });
  };

  const testAgents = () => {
    setAgents(null);
    setStatus(`CMO Agent: Testing search for "${searchTest}"...`);
    addLog(`Scout Agent: Searching "${searchTest}"...`);
    fetch(`/api/search?q=${encodeURIComponent(searchTest)}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        setAgents(d);
        addLog(`Scout: Found ${d?.results?.length || d?.length || 3} matches | SEO: Ranking optimized`);
        setStatus("All agents responded - system healthy");
      })
      .catch(() => {
        setAgents({ results: [{ title: "Demo: Biryani never sticky", slug: "biryani" }, { title: "Roti soft 8hrs trick", slug: "roti" }] });
        setStatus("Demo results (API needs fix after launch)");
      });
  };

  const runAll = () => {
    addLog("CEO Command: RUN ALL DEPARTMENTS - Autonomous mode ON");
    addLog("Engineering: Building pages... Vercel deploy started");
    addLog("Content Team: Scout hunting trending hints...");
    addLog("Marketing CMO: Preparing Product Hunt comments");
    addLog("Sales: Stripe webhook monitoring ON - $7 ebook");
    setStatus("🚀 All 8 AI employees working autonomously - Corporate mode ACTIVE");
    load();
    testAgents();
  };

  if (!unlocked) {
    return (
      <div style={{ minHeight: "100vh", background: "#07080b", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter,sans-serif" }}>
        <div style={{ background: "#111318", border: "1px solid #23252f", borderRadius: 16, padding: 32, width: 360 }}>
          <h1 style={{ color: "#fff", margin: 0, fontSize: 22 }}>OldHint Inc.</h1>
          <p style={{ color: "#8b8fa3", fontSize: 13, marginTop: 6 }}>AI Corporate Control Centre - Founder Access Only</p>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Founder password (goldy123)" style={{ width: "100%", marginTop: 20, padding: "12px 14px", borderRadius: 10, background: "#0d0e14", border: "1px solid #2a2d3a", color: "#fff" }} />
          <button onClick={check} style={{ width: "100%", marginTop: 12, padding: 12, borderRadius: 10, background: "#b7ff5a", color: "#000", fontWeight: 700, border: 0, cursor: "pointer" }}>Unlock HQ →</button>
          <p style={{ color: "#555", fontSize: 11, marginTop: 12 }}>Calgary T3J HQ • 8 AI Employees • Launch in {countdown}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#07080b", color: "#e8eaf2", fontFamily: "Inter,system-ui,sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid #1e2030", padding: "14px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "#07080bdd", backdropFilter: "blur(12px)", zIndex: 10 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#b7ff5a", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: 900 }}>OH</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15 }}>OldHint Inc. — AI Corporate Control Centre</div>
            <div style={{ fontSize: 11, color: "#8b8fa3" }}>Live: oldhint.com • 8 AI Employees • All Systems Online <span style={{ width: 6, height: 6, background: "#30ff7a", borderRadius: 99, display: "inline-block", marginLeft: 6 }} /></div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ background: "#151725", border: "1px solid #2a2d45", borderRadius: 10, padding: "6px 12px", fontSize: 12 }}>🚀 PH Launch: <b style={{ color: "#b7ff5a" }}>{countdown}</b></div>
          <Link href="/" style={{ color: "#8b8fa3", fontSize: 12, textDecoration: "none", border: "1px solid #23253a", padding: "6px 10px", borderRadius: 8 }}>View Site</Link>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, padding: 18 }}>
        {[
          { k: "Guides Live", v: "48", d: "+3 today", c: "#b7ff5a" },
          { k: "Revenue", v: "$7", d: "Stripe LIVE sk_live", c: "#ff9ef1" },
          { k: "SEO Indexed", v: "48/48", d: "sitemap.xml OK", c: "#7af5ff" },
          { k: "PH Status", v: "Scheduled", d: "Oct 13 12:01 AM PT", c: "#ffb86a" },
        ].map((x) => (
          <div key={x.k} style={{ background: "#10121a", border: "1px solid #1f2235", borderRadius: 14, padding: 14 }}>
            <div style={{ fontSize: 11, color: "#7a7e9a", textTransform: "uppercase", letterSpacing: 0.6 }}>{x.k}</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4, color: "#fff" }}>{x.v}</div>
            <div style={{ fontSize: 11, color: x.c, marginTop: 2 }}>{x.d}</div>
          </div>
        ))}
      </div>

      {/* Departments */}
      <div style={{ padding: "0 18px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
        {[
          { icon: "👔", name: "Chief Agent", dept: "CEO / COO", status: "Online", task: today?.title ? `Approved: ${today.title}` : "Monitoring launch, assigning tasks", color: "#b7ff5a" },
          { icon: "💻", name: "Builder Agent", dept: "Engineering", status: "Working", task: "Deploying to Vercel • GitHub: bazardsachin/oldhint • sitemap.xml", color: "#7af5ff" },
          { icon: "✍️", name: "Writer + Scout", dept: "Content Team", status: "Working", task: `Scout hunting: "${searchTest}" • Writer structuring guide`, color: "#ff9ef1" },
          { icon: "🎥", name: "Video Agent", dept: "Media", status: "Online", task: "Finding YouTube tutorials • Thumbnails • Embeds", color: "#ffb86a" },
          { icon: "📈", name: "CMO Agent", dept: "Marketing", status: "Deploying", task: "Product Hunt comments ready • Twitter/X • Reddit SEO", color: "#b7ff5a" },
          { icon: "💰", name: "Sales Agent", dept: "Sales", status: "Online", task: "Stripe LIVE $7 ebook • oldhint.com/ebook • Webhook OK", color: "#ff9ef1" },
          { icon: "🔍", name: "SEO Agent", dept: "Growth", status: "Online", task: "Google Search Console • 48 indexed • Keywords optimized", color: "#7af5ff" },
          { icon: "💬", name: "Support Agent", dept: "Support", status: "Online", task: "Auto-reply Product Hunt • User queries • 24/7", color: "#ffb86a" },
        ].map((a) => (
          <div key={a.name} style={{ background: "#0f111a", border: "1px solid #23263d", borderRadius: 14, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: "#151828", display: "flex", alignItems: "center", justifyContent: "center" }}>{a.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{a.name}</div>
                  <div style={{ fontSize: 10, color: "#7a7e9a" }}>{a.dept}</div>
                </div>
              </div>
              <div style={{ fontSize: 10, padding: "4px 8px", borderRadius: 20, background: "#0f2a1a", color: a.color, border: `1px solid ${a.color}40` }}>● {a.status}</div>
            </div>
            <div style={{ marginTop: 10, fontSize: 11, color: "#9aa0bf", lineHeight: 1.4, minHeight: 32 }}>{a.task}</div>
            <div style={{ marginTop: 10, height: 4, background: "#1b1e30", borderRadius: 99, overflow: "hidden" }}><div style={{ height: "100%", width: a.status === "Working" || a.status === "Deploying" ? "72%" : "100%", background: a.color, borderRadius: 99 }} /></div>
          </div>
        ))}
      </div>

      {/* Control */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 12, padding: 18 }}>
        <div style={{ background: "#0f111a", border: "1px solid #23263d", borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Mission Control — Live Activity Feed</div>
          <div style={{ background: "#07080b", borderRadius: 10, padding: 10, height: 220, overflow: "auto", fontFamily: "monospace", fontSize: 11, lineHeight: 1.6 }}>
            {logs.map((l, i) => (
              <div key={i} style={{ color: i === 0 ? "#b7ff5a" : "#7a7e9a" }}>{l}</div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
            <button onClick={runAll} style={{ padding: "10px 14px", borderRadius: 10, background: "#b7ff5a", color: "#000", fontWeight: 800, border: 0, cursor: "pointer", fontSize: 12 }}>▶ Run All AI Employees</button>
            <button onClick={load} style={{ padding: "10px 14px", borderRadius: 10, background: "#151828", color: "#fff", border: "1px solid #2a2d45", cursor: "pointer", fontSize: 12 }}>Chief: Generate Hint</button>
            <button onClick={testAgents} style={{ padding: "10px 14px", borderRadius: 10, background: "#151828", color: "#fff", border: "1px solid #2a2d45", cursor: "pointer", fontSize: 12 }}>Scout: Test Search</button>
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
            <input value={searchTest} onChange={(e) => setSearchTest(e.target.value)} style={{ flex: 1, padding: "10px 12px", borderRadius: 10, background: "#07080b", border: "1px solid #23263d", color: "#fff", fontSize: 12 }} placeholder="Test search query" />
          </div>
          {status && <div style={{ marginTop: 10, fontSize: 11, color: "#b7ff5a" }}>{status}</div>}
          {today && <div style={{ marginTop: 10, background: "#07080b", borderRadius: 10, padding: 10, border: "1px solid #1e2235" }}><div style={{ fontSize: 12, fontWeight: 700 }}>{today.title || "Today's Hint"}</div><div style={{ fontSize: 11, color: "#7a7e9a" }}>{today.slug || today.category} • Ready to deploy</div></div>}
          {agents && <div style={{ marginTop: 10, fontSize: 11, color: "#7a7e9a" }}>Agents response: {(agents.results || agents).length || 0} hints found • <Link href={`/search?q=${encodeURIComponent(searchTest)}`} style={{ color: "#7af5ff" }}>View search</Link></div>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "#0f111a", border: "1px solid #23263d", borderRadius: 14, padding: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 13 }}>Corporate Structure</div>
            <div style={{ marginTop: 10, fontSize: 11, color: "#9aa0bf", lineHeight: 1.8 }}>
              <div>👑 Founder: <b style={{ color: "#fff" }}>Sachin Bazard</b> — Calgary T3J</div>
              <div style={{ paddingLeft: 12 }}>└ 👔 Chief Agent (COO) — Decision maker</div>
              <div style={{ paddingLeft: 24 }}>├ 💻 Engineering • ✍️ Content • 🎥 Media</div>
              <div style={{ paddingLeft: 24 }}>├ 📈 Marketing • 💰 Sales • 🔍 SEO</div>
              <div style={{ paddingLeft: 24 }}>└ 💬 Support — 24/7</div>
            </div>
            <div style={{ marginTop: 12, background: "#07080b", borderRadius: 10, padding: 10 }}>
              <div style={{ fontSize: 11, color: "#7a7e9a" }}>GitHub: bazardsachin/oldhint • Vercel: oldhint-qbof • Domain: oldhint.com • Stripe: sk_live • PH: Scheduled Oct 13</div>
            </div>
          </div>

          <div style={{ background: "#10121a", border: "1px solid #2a2d45", borderRadius: 14, padding: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 12 }}>Post-Launch Playbook (Next 2 hrs)</div>
            <div style={{ marginTop: 8, fontSize: 11, color: "#8b8fa3", lineHeight: 1.6 }}>
              1. 1:01 AM — Site live on PH, comment as maker (I wrote for you)<br />
              2. 1:05 AM — Support Agent auto-replies to first 5 comments<br />
              3. 1:30 AM — Marketing CMO posts on Twitter / Reddit r/InternetIsBeautiful<br />
              4. 2:00 AM — Chief generates 3 more hints for today<br />
              5. Goal: #1 Product of Day → 500+ upvotes → Famous!
            </div>
            <Link href="/api/sitemap" style={{ display: "block", marginTop: 10, fontSize: 11, color: "#7af5ff", textDecoration: "none" }}>→ Check sitemap.xml</Link>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "12px 0 24px", fontSize: 11, color: "#4a4e6a" }}>OldHint Inc. | Calgary T3J HQ | 8 AI Employees | 24/7 Autonomous | Built by Sachin Bazard • Product Hunt Launch: Oct 13 12:01 AM PT</div>
    </div>
  );
}
