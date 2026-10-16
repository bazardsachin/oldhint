"use client";
import { useState } from "react";

const AGENTS = [
  { id:"builder", name:"💻 Builder Agent", role:"Fixes homepage black boxes → Real motion videos", color:"#2563eb", task:"Fix video names image_20261015_..." },
  { id:"seo", name:"🔍 SEO Agent", role:"SEO + sitemap /family /vault", color:"#ea580c", task:"Add sitemap.xml" },
  { id:"writer", name:"✍️ Writer+Scout", role:"Finds Punjabi grandma tricks 1960s", color:"#059669", task:"Generate Dadi Pickle hint" },
  { id:"cmo", name:"📈 CMO Agent", role:"Reddit r/lifehacks marketing", color:"#7c3aed", task:"Post Nani 1962 roti trick" },
  { id:"video", name:"🎥 Video Agent", role:"Embeds Dada + Nani motion", color:"#dc2626", task:"Embed 2 real videos" },
  { id:"chief", name:"👔 Chief Agent", role:"Reads roadmap PDF", color:"#111", task:"Approve Family Vault" },
  { id:"sales", name:"💰 Sales Agent", role:"Stripe $7 $49 $299", color:"#0891b2", task:"Check Stripe sales" },
  { id:"support", name:"💬 Support Agent", role:"PH comments", color:"#be123c", task:"Monitor comments" },
];

export default function Admin(){
  const [logs,setLogs]=useState(["[09:00] CEO Sachin Bazard Calgary T3J — Billion dollar roadmap loaded"," [09:01] Chief: Family Social Vault approved — Root Dada Trunk Papa Branch You Leaf Kids"]);
  const [running,setRunning]=useState("");
  const [status,setStatus]=useState("Backend Ready — Click Run All");

  const addLogs=(newLogs)=>setLogs(l=>[...newLogs.reverse(),...l].slice(0,100));

  const runAgent = async (id)=>{
    setRunning(id);
    setStatus(`Running ${id}... REAL 【entity-GitHub¦canonical_name=GitHub】 commit`);
    try{
      const res = await fetch("/api/agent/run-all",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agentId:id})});
      const data = await res.json();
      if(data.logs) addLogs(data.logs);
      setStatus(data.success ? `✅ ${id} done — Check Vercel` : `❌ ${data.error}`);
    }catch(e){ addLogs([`[ERROR] ${e.message}`]); setStatus("Error — Check Vercel logs"); }
    setRunning("");
  };

  const runAll = async ()=>{
    setRunning("all");
    setStatus("Running ALL 8 Agents — Real GitHub API...");
    try{
      const res = await fetch("/api/agent/run-all",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agentId:"all"})});
      const data = await res.json();
      if(data.logs) addLogs(data.logs);
      setStatus(data.success ? "✅ All 8 Agents done — Vercel Deploying — Refresh oldhint.com in 1 min" : `❌ ${data.error}`);
    }catch(e){ addLogs([`[ERROR] ${e.message}`]); }
    setRunning("");
  };

  return(
    <div style={{background:"#FFFDF7",minHeight:"100vh",color:"#111",fontFamily:"Inter,sans-serif",padding:"16px"}}>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"2px solid #111",padding:"12px 16px",borderRadius:"12px",background:"#fff"}}>
        <div><div style={{fontWeight:"900",fontSize:"20px"}}>OLDHINT INC. — CORPORATE HQ v4 — REAL BACKEND ✅</div><div style={{fontSize:"11px",opacity:0.7}}>CEO: Bāżārd Śåçhïn Calgary T3J — 8 AI Employees — Backend: Ready 24s — {status}</div></div>
        <button onClick={runAll} disabled={!!running} style={{background:running?"#999":"#111",color:"#fff",padding:"14px 22px",borderRadius:"999px",fontWeight:"800",border:"none",cursor:"pointer"}}>{running==="all"?"Running...":"▶ Run All 8 Agents (REAL)"}</button>
      </header>
      <div style={{display:"grid",gridTemplateColumns:"1.2fr 0.8fr",gap:"12px",marginTop:"12px"}}>
        <div style={{border:"1.5px solid #111",borderRadius:"12px",padding:"12px",background:"#fff"}}><div style={{fontWeight:"800"}}>📄 Billion Dollar Roadmap — Family Social Vault</div><div style={{fontSize:"12px",marginTop:"6px",background:"#f7f3e8",padding:"10px",borderRadius:"8px"}}><b>Vision:</b> World's First Generational Knowledge Network<br/><b>Tree:</b> Root Dada, Trunk Papa, Branch You, Leaf Kids — Follow family line not person<br/><b>Hint Format:</b> Title {'>'} Era(1960s) {'>'} Origin(Punjab) {'>'} Secret Tool<br/><b>Pricing:</b> Free 3 hints, $7 Ebook, $49 Vault, $299 Legacy<br/><b>Backend:</b> GITHUB_TOKEN Ready — Builder can auto-commit!</div></div>
        <div style={{border:"1.5px solid #111",borderRadius:"12px",padding:"12px",background:"#111",color:"#fff"}}><div style={{fontWeight:"800"}}>📡 Mission Control — LIVE — Real GitHub Commits</div><div style={{marginTop:"8px",height:"320px",overflow:"auto",fontSize:"11px",fontFamily:"monospace",background:"#000",padding:"8px",borderRadius:"8px"}}>{logs.map((l,i)=><div key={i} style={{borderBottom:"1px solid #222",padding:"2px 0"}}>{l}</div>)}</div></div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",marginTop:"12px"}}>{AGENTS.map(a=><div key={a.id} style={{border:`2px solid ${a.color}`,borderRadius:"12px",padding:"10px",background:"#fff"}}><div style={{fontWeight:"800",fontSize:"12px"}}>{a.name}</div><div style={{fontSize:"10px",color:"#555",minHeight:"28px"}}>{a.role}</div><button onClick={()=>runAgent(a.id)} disabled={!!running} style={{marginTop:"6px",width:"100%",background:running===a.id?"#999":a.color,color:"#fff",padding:"8px",borderRadius:"8px",border:"none",fontWeight:"700",cursor:"pointer",fontSize:"11px"}}>{running===a.id?"Working...":"▶ Run"}</button></div>)}</div>
    </div>
  );
}
