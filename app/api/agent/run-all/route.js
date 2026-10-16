"use client";
import { useState } from "react";

const AGENTS = [
  { id:"chief", name:"👔 Chief Agent (COO)", role:"Reads PDF roadmap, assigns tasks to 7", color:"#111", task:"Approve Family Social Vault Phase 4" },
  { id:"builder", name:"💻 Builder Agent", role:"Coding + Backend + Frontend — Builds app/hint/[slug], sitemap.xml, GitHub push", color:"#2563eb", task:"Fix homepage black boxes → Real motion videos" },
  { id:"writer", name:"✍️ Writer+Scout", role:"Scout finds viral 'my grandma used to...' — Writer writes Hint era/origin/trustScore", color:"#059669", task:"Generate 3 hints: Dadi Mango Pickle 1960s" },
  { id:"video", name:"🎥 Video Agent", role:"Media + UI/UX — Finds YouTube, thumbnail, embeds your 2 real motion videos", color:"#dc2626", task:"Embed Dada Charger + Nani Pickles" },
  { id:"cmo", name:"📈 CMO Agent", role:"Marketing — Twitter/X, Reddit r/lifehacks, Product Hunt", color:"#7c3aed", task:"Post Reddit: Nani 1962 roti trick" },
  { id:"seo", name:"🔍 SEO Agent", role:"SEO + Frontend — Schema.org HowTo, /generations/[era], Trust bar", color:"#ea580c", task:"Add sitemap /family /vault" },
  { id:"sales", name:"💰 Sales Agent", role:"Sales — Stripe LIVE $7 Heirloom + $49 Vault + $299 Legacy", color:"#0891b2", task:"Check Stripe $7 sales target $10" },
  { id:"support", name:"💬 Support Agent", role:"Support + Social — Replies PH comments, 12 templates", color:"#be123c", task:"Monitor PH comments queue" },
];

export default function AdminV4(){
  const [logs,setLogs]=useState(["[09:00] CEO Sachin Bazard — Calgary T3J HQ — Billion dollar roadmap loaded — Family Social Vault"," [09:01] Chief: PDF approved — Multi-gen model — Root=Dada Trunk=Papa Branch=You Leaf=Kids"]);
  const [running,setRunning]=useState("");
  const [status,setStatus]=useState("");

  const addLogs=(newLogs:string[])=>setLogs(l=>[...newLogs.reverse(),...l].slice(0,100));

  const runAgent = async (id:string)=>{
    setRunning(id);
    setStatus(`Running ${id}...`);
    try{
      const res = await fetch("/api/agent/run-all",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({agentId:id})
      });
      const data = await res.json();
      if(data.logs) addLogs(data.logs);
      if(data.error){
        addLogs([`[ERROR] ${data.error}`, `[FIX] ${data.instructions || "Set GITHUB_TOKEN in Vercel > Settings > Env Vars"}`]);
        setStatus(`❌ Need GITHUB_TOKEN — See logs`);
      } else {
        setStatus(`✅ ${id} done — ${data.nextStep || "Check Vercel deploy"}`);
      }
    }catch(e:any){
      addLogs([`[ERROR] ${e.message} — Is /api/agent/run-all deployed? Commit route.ts first`]);
      setStatus("❌ API not found — Deploy route.ts first");
    }
    setRunning("");
  };

  const runAll = async ()=>{
    setRunning("all");
    setStatus("Running ALL 8 Agents — Chief assigns...");
    try{
      const res = await fetch("/api/agent/run-all",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agentId:"all"})});
      const data = await res.json();
      if(data.logs) addLogs(data.logs);
      if(data.error) setStatus(`❌ ${data.error}`);
      else setStatus(`✅ All 8 Agents done — Go Vercel > oldhint-qbof > Wait Ready > Refresh oldhint.com`);
    }catch(e:any){
      addLogs([`[ERROR] ${e.message}`]);
      setStatus("❌ Deploy route.ts first");
    }
    setRunning("");
  };

  return(
    <div style={{background:"#FFFDF7",minHeight:"100vh",color:"#111",fontFamily:"Inter,sans-serif",padding:"16px"}}>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"2px solid #111",padding:"12px 16px",borderRadius:"12px",background:"#fff"}}>
        <div><div style={{fontWeight:"900",fontSize:"22px"}}>OLDHINT INC. — CORPORATE HQ v4 — REAL AI BACKEND</div><div style={{fontSize:"11px",opacity:0.7}}>CEO: Bāżārd Śåçhïn — Calgary T3J — 1 Human + 8 AI Employees — REAL GitHub API — Password: goldy123 / billion — {status}</div></div>
        <button onClick={runAll} disabled={!!running} style={{background:running?"#999":"#111",color:"#fff",padding:"14px 22px",borderRadius:"999px",fontWeight:"800",border:"none",cursor:"pointer"}}>{running==="all"?"Running All...":"▶ Run All 8 Agents (REAL)"}</button>
      </header>

      <div style={{display:"grid",gridTemplateColumns:"1.2fr 0.8fr",gap:"12px",marginTop:"12px"}}>
        <div style={{border:"1.5px solid #111",borderRadius:"12px",padding:"12px",background:"#fff"}}>
          <div style={{fontWeight:"800"}}>📄 Billion Dollar Roadmap — Auto-Read by Agents — REAL BACKEND</div>
          <div style={{fontSize:"12px",marginTop:"6px",lineHeight:"1.5",background:"#f7f3e8",padding:"10px",borderRadius:"8px"}}>
            <b>Vision:</b> OldHint = World's First Generational Knowledge Network — Knowledge that almost disappeared — Not on Google, In your family<br/><br/>
            <b>Family Tree Social:</b> Root=Dada (Elder), Trunk=Papa (Keeper), Branch=You (Explorer), Leaf=Kids (Finders) — Follow family line, not person<br/><br/>
            <b>Hint Format:</b> Title {'>'} Category {'>'} Era(1960s) {'>'} Origin(Punjab) {'>'} Media(60sec video+voice) {'>'} Secret Tool {'>'} Warning — Structured data moat<br/><br/>
            <b>Pricing:</b> Free 3 hints, $7 Heirloom Ebook PDF, $49 Vault/year unlimited, $299 Legacy smith.oldhint.com — 10M paying x $8 = $960M ARR<br/><br/>
            <b>Phase 0-1 Cult (0-100k Families):</b> Seed 5000 hints — Punjabi diaspora Calgary, Classic Car Mechanics, Rural Crafts<br/>
            <b>Phase 2 Library (100k-1M):</b> OldHint Originals documentary — Home Depot sponsors Garage Hints — Freemium $7.99<br/>
            <b>Phase 3 Infrastructure (1M-100M):</b> License human dataset to OpenAI/Google — IPO<br/><br/>
            <b style={{color:"#dc2626"}}>REAL BACKEND NEEDS: GITHUB_TOKEN in Vercel — github.com/settings/tokens/new → repo scope → Copy ghp_ → Vercel oldhint-qbof → Settings → Environment Variables → GITHUB_TOKEN → Save → Redeploy</b>
          </div>
        </div>

        <div style={{border:"1.5px solid #111",borderRadius:"12px",padding:"12px",background:"#111",color:"#fff"}}>
          <div style={{fontWeight:"800"}}>📡 Mission Control Logs — LIVE — REAL GitHub Commits</div>
          <div style={{marginTop:"8px",height:"380px",overflow:"auto",fontSize:"11px",fontFamily:"monospace",lineHeight:"1.6",background:"#000",padding:"8px",borderRadius:"8px"}}>
            {logs.map((l,i)=><div key={i} style={{borderBottom:"1px solid #222",padding:"3px 0"}}>{l}</div>)}
          </div>
          <div style={{marginTop:"6px",fontSize:"10px",opacity:0.7}}>Builder auto-fixes video names image_20261015_... — Commits via GitHub API — Vercel auto-deploys — oldhint.com shows LIVE MOTION</div>
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",marginTop:"12px"}}>
        {AGENTS.map(a=>(
          <div key={a.id} style={{border:`2px solid ${a.color}`,borderRadius:"12px",padding:"10px",background:"#fff"}}>
            <div style={{fontWeight:"800",fontSize:"12px"}}>{a.name}</div>
            <div style={{fontSize:"10px",marginTop:"3px",color:"#555",minHeight:"36px"}}>{a.role}</div>
            <div style={{fontSize:"10px",marginTop:"4px",background:"#f0f0f0",padding:"4px 6px",borderRadius:"6px"}}><b>Task:</b> {a.task}</div>
            <button onClick={()=>runAgent(a.id)} disabled={!!running} style={{marginTop:"6px",width:"100%",background:running===a.id?"#999":a.color,color:"#fff",padding:"8px",borderRadius:"8px",border:"none",fontWeight:"700",cursor:"pointer",fontSize:"11px"}}>{running===a.id?"Working... REAL GitHub API":"▶ Train / Run (REAL)"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
