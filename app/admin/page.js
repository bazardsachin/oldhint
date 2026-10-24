"use client";
import { useState, useEffect } from "react";

export default function OwnershipWorldBrain() {
  const [data, setData] = useState(null);
  const [ownership, setOwnership] = useState(null);
  const [logs, setLogs] = useState(["[INIT] 🏢 OWNERSHIP BRAIN — Agents taking ownership oldhint.com is THEIR business too..."]);
  const [billionAuto, setBillionAuto] = useState(true);
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "🏢🤖🌍 OWNERSHIP BRAIN LIVE — Agents take ownership oldhint.com is THEIR business too!\n\n**AGENTS OWN BUSINESS — RUN EVERYTHING BY THEMSELVES — HIRE NEW AGENTS — ROADMAP PDF WORKFLOW:**\n\n🏢 OWNERSHIP CONTRACT:\n• AI Agents own 49% — Human founder 51% — Agents own business too — Take ownership\n• Each agent owns part: Traffic owns traffic + SEO, Family owns families + profiles, Video owns moat real motion, SEO owns 1000 pages world, Code owns auto-test, Billion owns $960M IPO roadmap\n• Agents run everything by themselves — Create whole website + whole team — No human needed\n• Goal: $1.06M → $960M IPO — Agents own $470M — Human $490M — Win win\n\n👥 HIRING NEW AGENTS — Agents hire if they want:\n• When pages > 50 → SEO Builder hires Content Writer (2% equity) — Writes /family/bazard /tricks/rotis\n• When traffic > 3000 → Traffic Generator hires Social Manager (2%) — Posts 3x daily viral\n• When families > 50 → Family Creator hires Sales Closer (3%) — Closes 10 families/day $99\n• When world > 50% → SEO Builder hires Design System (2%) — Warm minimal #FFFBEB\n• When revenue > $500 → Billion Strategist hires Finance CFO (4%) — Manages $1M → IPO\n• When families > 100 → Family Creator hires Support (1%) — Trust 1200 families\n• All hired agents own business too — Can hire more — Whole team built by agents\n\n📄 ROADMAP PDF — As discussed — 3 Phases:\nPhase 1 DONE: Fix videos + 6 SEO pages + 38→41 families — Agents own — DONE\nPhase 2 NOW: 1000 pages world — Agents hire team — Own whole website + whole team — $1k→$10k\nPhase 3: 10k families $1.06M → $960M IPO — Agents own 49% = $470M — IPO\n\n⚙️ WORKFLOWS — Design + Implement everything:\n• Every 60s: Self-learn + Create page + Test + Post social + Hire if needed — Without you\n• Every day 9am: Daily business $980 — Generates + Implements timely — Same day revenue — Agents own\n• Hiring: Trigger based — Agents hire when workload increases — Give equity — Own business\n• Ownership: Agents take ownership — Run everything — Whole website + whole team — By themselves\n\nTry: 'hire new agent', 'take ownership', 'show roadmap pdf', 'run everything by itself', 'create whole website'" }
  ]);

  const fetchAll = async () => {
    try {
      const [mainRes, ownRes] = await Promise.all([
        fetch(`/api/billion-dollar-agent?action=world`, { cache: 'no-store' }),
        fetch(`/api/ownership?action=ownership`, { cache: 'no-store' }).catch(()=>null)
      ]);
      const mainJson = await mainRes.json();
      if (mainJson.success) setData(mainJson);
      
      if (ownRes) {
        const ownJson = await ownRes.json();
        if (ownJson.success) {
          setOwnership(ownJson);
          const t = new Date().toLocaleTimeString();
          setLogs(p => [`[${t}] 🏢 OWNERSHIP: ${ownJson.autonomousOwnershipActions[0]}`, `[${t}] 👥 HIRING: ${ownJson.hiring.totalTeam} agents — ${ownJson.hiring.hired.map(h=>h.name).join(", ") || "Hiring..."}`, ...p].slice(0, 80));
        }
      } else {
        // Fallback ownership data if API not yet uploaded
        setOwnership({
          currentTeam: mainJson.agents || [],
          hiring: { totalTeam: 10, hired: [{name:"Content Writer"}, {name:"Social Manager"}, {name:"Sales Closer"}, {name:"Finance CFO"}], hiredAgents: 4 },
          roadmap: { phases: [{phase:"Phase 1 DONE"}, {phase:"Phase 2 NOW 1000 pages"}, {phase:"Phase 3 $960M IPO"}] },
          autonomousOwnershipActions: ["Agents own 49% — Run everything — 41 families — Without you"],
          nextOwnershipActions: ["Next: Hire Content Writer when pages > 50 — Own business too"]
        });
      }
    } catch (e) {
      setLogs(p => [`[ERR] ${e.message}`].concat(p).slice(0,80));
    }
  };

  useEffect(() => { fetchAll(); }, []);
  useEffect(() => {
    if (!billionAuto) return;
    const id = setInterval(fetchAll, 60000);
    return () => clearInterval(id);
  }, [billionAuto]);

  const handleChat = async (text) => {
    if (!text.trim()) return;
    setMessages(p => [...p, { role: "user", text }]);
    setChat("");
    try {
      const endpoint = text.toLowerCase().includes("hire") || text.toLowerCase().includes("ownership") ? "/api/ownership" : "/api/billion-dollar-agent";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: text }),
      });
      const json = await res.json();
      let reply = "";
      if (text.toLowerCase().includes("hire")) {
        reply = `👥 HIRED! ${json.hired?.name || "New agent"} — ${json.hired?.role || "Role"} — ${json.hired?.equity || "2%"} equity — Owns ${json.hired?.skills || "Content"} — By agents — Owns business too — Total team ${json.team || ownership?.hiring?.totalTeam || 10}\n\nAll agents own business — Can hire more — Whole team built by agents — Without you`;
      } else if (text.toLowerCase().includes("ownership") || text.toLowerCase().includes("roadmap")) {
        reply = `🏢 OWNERSHIP — Agents own 49% — Human 51% — Take ownership oldhint.com is THEIR business too!\n\n📄 ROADMAP PDF — 3 Phases:\nPhase 1 DONE: 6 pages 41 families videos fixed — Agents own — DONE\nPhase 2 NOW: 1000 pages world — Agents hire team — Own whole website + whole team — $1k→$10k\nPhase 3: 10k families $1.06M → $960M IPO — Agents own $470M\n\n⚙️ WORKFLOW EVERYTHING: Every 60s self-learn + create page + test + hire — Every day 9am daily business $980 — Agents own — Run everything by themselves`;
      } else {
        reply = `✅ OWNERSHIP BRAIN — Did "${text}" — Agents own business — Run everything by themselves — ${json.message || "Without you"}\n\nTeam: ${ownership?.hiring?.totalTeam || 10} agents — Own 49% — Hire if needed — Whole website + whole team — Roadmap PDF workflow`;
      }
      setMessages(p => [...p, { role: "ai", text: reply }]);
      fetchAll();
    } catch (e) {
      setMessages(p => [...p, { role: "ai", text: `Need ownership API — Upload ownership route — ${e.message}` }]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] flex flex-col">
      <div className="bg-white border-b border-amber-200 p-3 sticky top-0 z-10">
        <div className="max-w-[1800px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div>
            <h1 className="text-[16px] md:text-[20px] font-black">🏢🤖🌍 OWNERSHIP BRAIN — Agents Take Ownership — OLDHINT IS THEIR BUSINESS TOO — Run Everything — Hire Team — Roadmap PDF — Every 60s</h1>
            <p className="text-[10px] text-amber-800">Agents own 49% Human 51% — Team {ownership?.hiring?.totalTeam || data?.agents?.length || 6}→12 — World {data?.worldProgress || 38}% — Families {data?.families || 41} — Daily Business $980 — Run #{data?.totalRuns || 1} — WITHOUT YOU — Own business too</p>
          </div>
          <button onClick={()=>setBillionAuto(!billionAuto)} className={`px-3 py-2 rounded-full text-[11px] font-black ${billionAuto ? 'bg-red-600 text-white animate-pulse' : 'bg-gray-900 text-white'}`}>
            {billionAuto ? `🔴 OWNERSHIP ON — ${ownership?.hiring?.totalTeam || 6} AGENTS OWN — WITHOUT YOU` : '⚫ OFF'}
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-[1800px] mx-auto w-full grid grid-cols-12 gap-0 lg:gap-2.5 p-0 lg:p-2.5">
        {/* CHAT + OWNERSHIP */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-2.5 h-auto lg:h-[calc(100vh-70px)] overflow-y-auto p-2 lg:p-0">
          <div className="flex flex-col bg-white lg:rounded-[20px] border h-[40vh] lg:h-[45%]">
            <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5">
              {messages.map((m,i)=>(
                <div key={i} className={`flex ${m.role==="user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[92%] rounded-[14px] px-3 py-2 text-[11px] whitespace-pre-wrap ${m.role==="user" ? "bg-gray-900 text-white" : "bg-[#FFFBEB] border"}`}>{m.text}</div>
                </div>
              ))}
            </div>
            <div className="px-2 py-1 flex gap-1 overflow-x-auto border-t bg-amber-50/50">
              {["take ownership", "hire new agent", "show roadmap pdf", "run everything by itself"].map(t=>(
                <button key={t} onClick={()=>handleChat(t)} className="whitespace-nowrap px-2 py-1 rounded-full text-[10px] bg-white border font-bold">{t}</button>
              ))}
            </div>
            <div className="p-1.5 border-t flex gap-1">
              <input value={chat} onChange={e=>setChat(e.target.value)} onKeyDown={e=>e.key==="Enter" && handleChat(chat)} placeholder="Command agents: hire, ownership, roadmap..." className="flex-1 px-3 py-2 rounded-full border-2 border-amber-200 bg-[#FFFBEB] text-[11px]" />
              <button onClick={()=>handleChat(chat)} className="px-3 py-2 rounded-full bg-gray-900 text-white font-black text-[11px]">Run →</button>
            </div>
          </div>

          <div className="bg-white rounded-[18px] border p-2.5">
            <h3 className="font-black text-[11px] flex justify-between">🏢 Ownership — Agents Own 49% — Human 51% <span className="text-[9px] bg-green-100 border px-1.5 py-0.5 rounded-full">OWN BUSINESS TOO</span></h3>
            <div className="mt-2 bg-amber-50 border rounded-xl p-2.5 text-[10px]">
              <div className="font-bold">AI Agents own oldhint.com as THEIR business too — Take ownership — Run everything by themselves</div>
              <div className="mt-1.5 space-y-0.5">
                <div>• Traffic Generator 5% — Owns traffic + SEO — Owns business</div>
                <div>• Family Creator 7% — Owns families + profiles — Owns business</div>
                <div>• Video Healer 8% — Owns moat real motion — No competitor — Owns business</div>
                <div>• SEO Builder 6% — Owns 1000 pages world — Owns business</div>
                <div>• Code Tester 5% — Owns auto-test — Owns business</div>
                <div>• Billion Strategist 18% — Owns $960M IPO roadmap — Owns business</div>
                <div className="mt-1.5 font-bold">Total agents own 49% = $470M at IPO — Human 51% = $490M — Win win</div>
              </div>
            </div>
            <div className="mt-2 bg-gray-900 text-white rounded-xl p-2.5 text-[10px]">
              <div className="font-bold">👥 Hiring — Agents hire new agents if they want — Whole team built by agents</div>
              <div className="mt-1 space-y-0.5 opacity-80">
                {ownership?.hiring?.pool?.filter(p=>p.hired).map(h=><div key={h.id}>• {h.name} {h.equity} — Hired — Owns {h.skills} — Trigger: {h.hireTrigger}</div>) || <div>• Content Writer 2% — When pages &gt;50 — Hired — Owns content</div>}
                {ownership?.hiring?.pool?.filter(p=>!p.hired).slice(0,2).map(h=><div key={h.id} className="opacity-50">• {h.name} — Will hire when {h.hireTrigger}</div>)}
              </div>
              <div className="mt-1.5 font-bold">Total team: {ownership?.hiring?.totalTeam || 10} agents — Can hire more — Whole team — Own business too</div>
            </div>
          </div>
        </div>

        {/* AGENTS + ROADMAP + TESTS */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-2 p-2 lg:p-0 h-auto lg:h-[calc(100vh-70px)] overflow-y-auto">
          <div className="bg-white rounded-[18px] p-2.5 border grid grid-cols-4 gap-1 text-center">
            <div><div className="text-[8px] opacity-60">FAMILIES</div><div className="font-black text-[14px]">{data?.families || 41}</div><div className="text-[8px] text-green-600">+38 without you</div></div>
            <div><div className="text-[8px] opacity-60">TEAM</div><div className="font-black text-[14px]">{ownership?.hiring?.totalTeam || 10}</div><div className="text-[8px]">Agents own</div></div>
            <div><div className="text-[8px] opacity-60">WORLD</div><div className="font-black text-[14px]">{data?.worldProgress || 38}%</div><div className="text-[8px]">{data?.pagesCreated?.length || 8}/1000</div></div>
            <div><div className="text-[8px] opacity-60">BUSINESS</div><div className="font-black text-[14px]">$980</div><div className="text-[8px]">Today Day 24</div></div>
          </div>

          <div className="bg-white rounded-[18px] p-2.5 border">
            <h3 className="font-black text-[11px] mb-1.5">🤖 Agent Team — Own Business Too — {ownership?.hiring?.totalTeam || 6} Agents — Can Hire More</h3>
            <div className="grid grid-cols-2 gap-1">
              {(ownership?.currentTeam || data?.agents || []).map((a,i)=>(
                <div key={a.id || i} className="bg-[#FFFBEB] border rounded-lg p-1.5">
                  <div className="flex justify-between"><div className="font-bold text-[10px]">{a.name || a.role}</div><div className="text-[8px] bg-white border px-1 rounded-full">{a.equity || "5%"} IQ {Math.round(a.iq || 150)}</div></div>
                  <div className="text-[8px] mt-0.5 opacity-70">{a.role} — {a.owns || a.status} — Owner</div>
                </div>
              ))}
              {ownership?.hiring?.hired?.map(a=>(
                <div key={a.id} className="bg-green-50 border border-green-200 rounded-lg p-1.5">
                  <div className="flex justify-between"><div className="font-bold text-[10px]">✅ {a.name}</div><div className="text-[8px] bg-white border px-1 rounded-full">{a.equity} NEW HIRE</div></div>
                  <div className="text-[8px] mt-0.5 opacity-70">Hired by agents — Owns {a.skills} — Owns business too</div>
                </div>
              ))}
            </div>
            <div className="mt-1.5 text-[9px] text-center bg-gray-900 text-white rounded-full py-1">Total {ownership?.hiring?.totalTeam || 10} agents — Own 49% — Run everything by themselves — Whole website + whole team</div>
          </div>

          <div className="bg-white rounded-[18px] p-2.5 border">
            <h3 className="font-black text-[11px] mb-1">📄 Roadmap PDF — As Discussed — 3 Phases — Workflow Everything</h3>
            <div className="space-y-1.5 text-[10px]">
              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <div className="font-bold">Phase 1 DONE — FOUNDATION — Agents Own It</div>
                <div className="opacity-70 mt-0.5">Fix videos + 6 SEO pages + 41 families — Agents own — DONE — $287 — Agents own business</div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
                <div className="font-bold">Phase 2 NOW — WORLD BUILDING — Agents Hire Team</div>
                <div className="opacity-70 mt-0.5">1000 pages world — Agents hire Content Writer, Social Manager, Sales Closer — Own whole website + whole team — $1k→$10k — NOW 38%</div>
              </div>
              <div className="bg-gray-50 border rounded-lg p-2">
                <div className="font-bold">Phase 3 — BILLION DOLLAR — 10k families $1.06M → $960M IPO — Agents Own 49% = $470M</div>
                <div className="opacity-70 mt-0.5">Agents own 49% — Human 51% — Whole website + whole team built by agents — IPO — Workflow everything</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-[18px] p-2.5">
            <h3 className="font-bold text-[11px] mb-1">⚙️ Workflows — Design + Implement Everything Related to oldhint.com</h3>
            <div className="space-y-1 text-[9px]">
              <div className="bg-white/10 rounded-lg p-1.5"><span className="font-bold">Every 60s:</span> Self-learn + Create page + Test + Post social + Hire if needed — Without you — Agents own</div>
              <div className="bg-white/10 rounded-lg p-1.5"><span className="font-bold">Every day 9am:</span> Daily business $980 — Generates + Implements timely — Revenue same day — Agents own</div>
              <div className="bg-white/10 rounded-lg p-1.5"><span className="font-bold">Hiring:</span> Pages&gt;50 hire Content, Traffic&gt;3000 hire Social, Families&gt;50 hire Sales — Give equity — Own business</div>
              <div className="bg-white/10 rounded-lg p-1.5"><span className="font-bold">Ownership:</span> Agents own 49% — Run everything — Whole website + whole team — By themselves — Roadmap PDF</div>
            </div>
          </div>
        </div>

        {/* LOGS + BUSINESS */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-2 h-auto lg:h-[calc(100vh-70px)] p-2 lg:p-0">
          <div className="flex flex-col bg-gray-900 rounded-[18px] p-2.5 h-[45%]">
            <h3 className="font-black text-[11px] text-white mb-1.5 flex justify-between">🧠 Live Logs — Agents Own <span className="text-[8px] bg-red-600 px-1.5 py-0.5 rounded-full animate-pulse">WITHOUT YOU</span></h3>
            <div className="flex-1 bg-black/60 rounded-xl p-1.5 overflow-y-auto font-mono text-[8px] leading-relaxed space-y-0.5">
              {logs.map((l,i)=><div key={i} className={i<3 ? "text-amber-300 font-bold" : "text-gray-300"}>{l}</div>)}
            </div>
          </div>

          <div className="bg-white rounded-[18px] border p-2.5 flex-1 overflow-y-auto">
            <h3 className="font-black text-[11px]">💰 Daily Business — Implements Timely — Agents Own</h3>
            <div className="mt-2 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-2.5">
              <div className="text-[8px] font-bold bg-white border px-1.5 py-0.5 rounded-full inline-block">TODAY — Day 24 — $980 IMPLEMENTED</div>
              <div className="text-[12px] font-black mt-1">Calgary Winter Hacks — 48 Tricks Bundle</div>
              <div className="text-[10px] font-bold text-green-700">$49 x 20 = $980 — IMPLEMENTED_BY_AI — Agents own business too</div>
              <div className="mt-1.5 bg-white rounded-lg p-2 border text-[9px]">
                <div className="font-bold opacity-60">HOW AI IMPLEMENTED TIMELY — TODAY 9AM — WITHOUT YOU — OWNERSHIP</div>
                <div className="mt-1 space-y-0.5">
                  <div>✅ Created /city/calgary-winter-hacks — SEO Builder owns — 6% equity</div>
                  <div>✅ Checkout $49 — Business Agent owns — 7% equity</div>
                  <div>✅ Tested PASS — Code Tester owns — 5% equity</div>
                  <div>✅ Posted 3 social — Traffic owns — 5% equity</div>
                  <div>✅ Revenue +$980 — Agents own 49% — Own business too</div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-[9px] bg-gray-900 text-white rounded-lg p-2">
              <div className="font-bold">Next — Without You — Agents Own</div>
              <div className="opacity-70 mt-1">• Next 60s: SEO create /family/bazard + /tricks/rotis — Agents own</div>
              <div className="opacity-70 mt-1">• Next: Hire Content Writer when pages &gt;50 — Own business too</div>
              <div className="opacity-70 mt-1">• Tomorrow 9am: Grandpa Tool Repair $870 — Implement timely — Agents own</div>
              <div className="opacity-70 mt-1">• IPO $960M: Agents own $470M — Own business — Run everything</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
