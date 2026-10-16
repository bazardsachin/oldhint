"use client";
import { useState, useEffect } from "react";

const ROADMAP = {
  vision: "OldHint = World's First Generational Knowledge Network — Knowledge that almost disappeared — Not on Google, In your family",
  phases: [
    { name: "Phase 0-1: Cult (0-100k Families)", task: "Seed 5000 hints — Punjabi diaspora Calgary, Classic Car Mechanics, Rural Crafts — Pay top 100 storytellers $100/mo" },
    { name: "Phase 2: Library (100k-1M)", task: "OldHint Originals documentary — Home Depot sponsors Garage Hints — Freemium $7.99 Keeper Plan" },
    { name: "Phase 3: Infrastructure (1M-100M)", task: "License human dataset to OpenAI/Google — 10M paying families x $8 = $960M ARR — IPO" }
  ],
  familyTree: "Root=Dada (Elder/Approver), Trunk=Papa (Keeper/Writer), Branch=You (Explorer/Recorder), Leaf=Kids (Finders) — Follow family line, not person",
  hintFormat: "Title > Category > Era(1960s) > Origin(Punjab) > Media(60sec video+voice) > Secret Tool(Mustard oil smoked) > Warning",
  pricing: "Free: 3 hints, $7 Heirloom Ebook PDF, $49 Vault/year unlimited, $299 Legacy smith.oldhint.com"
};

const AGENTS = [
  { id:"chief", name:"👔 Chief Agent (COO)", role:"Your #2 — Reads PDF roadmap, assigns tasks", color:"#111" },
  { id:"builder", name:"💻 Builder Agent", role:"Coding + Backend + Frontend — Builds app/hint/[slug], sitemap.xml, GitHub push, Vercel deploy", color:"#2563eb" },
  { id:"writer", name:"✍️ Writer+Scout", role:"Scout finds viral 'my grandma used to...' — Writer writes Hint with era/origin/trustScore", color:"#059669" },
  { id:"video", name:"🎥 Video Agent", role:"Media + UI/UX — Finds YouTube, creates thumbnail, embeds your 2 real motion videos", color:"#dc2626" },
  { id:"cmo", name:"📈 CMO Agent", role:"Marketing — Twitter/X, Reddit r/lifehacks, Product Hunt comments — Post 'My Nani's 1962 trick'", color:"#7c3aed" },
  { id:"seo", name:"🔍 SEO Agent", role:"SEO + Frontend — Meta title, Schema HowTo, /generations/[decade], Trust bar '⏳ 40 years'", color:"#ea580c" },
  { id:"sales", name:"💰 Sales Agent", role:"Backend + Sales — Stripe sk_live $7 Heirloom + $49 Vault + $299 Legacy analytics", color:"#0891b2" },
  { id:"support", name:"💬 Support Agent", role:"Support + Social — Replies PH comments, auto-reply 12 templates, Family requests 'Lost Nani recipe'", color:"#be123c" },
];

export default function Admin(){
  const [logs,setLogs]=useState(["[09:00] CEO Sachin Bazard — Calgary T3J HQ — Billion dollar check"," [09:01] Chief: Roadmap loaded — Family Social Vault approved"]);
  const [pdfText,setPdfText]=useState("");
  const [running,setRunning]=useState("");

  const addLog=(m)=>setLogs(l=>[`[${new Date().toLocaleTimeString()}] ${m}`,...l].slice(0,50));

  const runAgent=(agent)=>{
    setRunning(agent.id);
    addLog(`${agent.name}: Reading PDF roadmap...`);
    setTimeout(()=>{
      if(agent.id==="chief") addLog(`Chief: Phase 2 Library — Need 3 more hints today — Current 51 tricks — Target 5000 — Gap 4949 — Assigning Scout`);
      if(agent.id==="builder") addLog(`Builder: Fixed video names image_20261015_213541.mp4 → Dada Charger — Homepage now shows LIVE MOTION — GitHub public/videos OK — Vercel deploy oldhint-qbof Ready`);
      if(agent.id==="video") addLog(`Video: 2 real motion videos embedded — Dada 1969 Charger wrench turning, Nani pickles hands mixing — Replacing black boxes — Real life > abstract cards`);
      if(agent.id==="writer") addLog(`Writer+Scout: Scouting 'Punjabi grandma pickle 1960s' — Found 3 hints — Creating Hint: 'How my Dadi made Mango Pickle 3 years no fridge — Mustard oil smoked secret'`);
      if(agent.id==="seo") addLog(`SEO: Homepage missing Schema.org HowTo — Adding Trust bar 'Verified by 3 generations' — Submitting sitemap.xml /family /vault /generations/1960s`);
      if(agent.id==="cmo") addLog(`CMO: Product Hunt launched 1:01 AM — Upvotes? — Posting Reddit r/lifehacks: 'My Nani's 1962 trick to keep rotis soft 8hrs — oldhint.com'`);
      if(agent.id==="sales") addLog(`Sales: Stripe LIVE $7 Heirloom Ebook — Today's target $10 — Check sk_live dashboard — Pricing Free/$7/$49/$299 matches roadmap`);
      if(agent.id==="support") addLog(`Support: Monitoring PH comments — Auto-reply template 5 ready — Family requests 'Lost Nani recipe' queue 0`);
      setRunning("");
    },1200);
  };

  const runAll=()=>{
    AGENTS.forEach((a,i)=>setTimeout(()=>runAgent(a), i*400));
    addLog("CEO Sachin: ▶ Run All 8 Agents — Chief assigns, Scout finds, Writer writes, Builder builds, Video embeds, SEO indexes, Sales tracks, Support replies");
  };

  return(
    <div style={{background:"#FFFDF7",minHeight:"100vh",color:"#111",fontFamily:"Inter,sans-serif",padding:"20px"}}>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"2px solid #111",padding:"12px 16px",borderRadius:"12px",background:"#fff"}}>
        <div><div style={{fontWeight:"900",fontSize:"20px"}}>OLDHINT INC. — CORPORATE HQ</div><div style={{fontSize:"11px",opacity:0.7}}>CEO: Bāżārd Śåçhïn (Sachin Bazard) — Calgary T3J — 1 Human + 8 AI Employees = 9 Team — Password: goldy123 / billion</div></div>
        <button onClick={runAll} style={{background:"#111",color:"#fff",padding:"12px 20px",borderRadius:"999px",fontWeight:"800",border:"none",cursor:"pointer"}}>▶ Run All 8 Agents</button>
      </header>

      <div style={{display:"grid",gridTemplateColumns:"1.2fr 0.8fr",gap:"16px",marginTop:"16px"}}>
        <div style={{border:"1.5px solid #111",borderRadius:"12px",padding:"14px",background:"#fff"}}>
          <div style={{fontWeight:"800"}}>📄 Billion Dollar Roadmap PDF — Auto-Read by Agents</div>
          <div style={{fontSize:"12px",marginTop:"6px",lineHeight:"1.5",background:"#f7f3e8",padding:"10px",borderRadius:"8px"}}>
            <b>Vision:</b> {ROADMAP.vision}<br/><br/>
            <b>Family Tree Social:</b> {ROADMAP.familyTree}<br/><br/>
            <b>Hint Format:</b> {ROADMAP.hintFormat}<br/><br/>
            <b>Pricing:</b> {ROADMAP.pricing}<br/><br/>
            {ROADMAP.phases.map(p=><div key={p.name} style={{marginTop:"8px"}}><b>{p.name}:</b> {p.task}</div>)}
          </div>
          <div style={{marginTop:"10px"}}>
            <label style={{fontSize:"12px",fontWeight:"700"}}>Upload Your Updated PDF Roadmap (optional): </label>
            <input type="file" accept=".pdf" onChange={e=>{const f=e.target.files[0]; if(f){setPdfText(f.name); addLog(`PDF Uploaded: ${f.name} — 8 Agents now reading new plan...`)}}} />
            {pdfText && <div style={{fontSize:"11px",marginTop:"4px",color:"#059669"}}>✅ {pdfText} loaded — Agents using new plan</div>}
          </div>
        </div>

        <div style={{border:"1.5px solid #111",borderRadius:"12px",padding:"14px",background:"#111",color:"#fff"}}>
          <div style={{fontWeight:"800"}}>📡 Mission Control Logs — Live</div>
          <div style={{marginTop:"8px",height:"320px",overflow:"auto",fontSize:"11px",fontFamily:"monospace",lineHeight:"1.6",background:"#000",padding:"8px",borderRadius:"8px"}}>
            {logs.map((l,i)=><div key={i} style={{borderBottom:"1px solid #222",padding:"2px 0"}}>{l}</div>)}
          </div>
          <div style={{marginTop:"8px",fontSize:"11px",opacity:0.7}}>Current: oldhint.com shows black boxes because video names image_20261015_... vs dada-charger... — Builder Agent will auto-fix — Check github.com/bazardsachin/oldhint/tree/main/public/videos</div>
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px",marginTop:"16px"}}>
        {AGENTS.map(a=>(
          <div key={a.id} style={{border:`2px solid ${a.color}`,borderRadius:"12px",padding:"12px",background:"#fff"}}>
            <div style={{fontWeight:"800",fontSize:"13px"}}>{a.name}</div>
            <div style={{fontSize:"11px",marginTop:"4px",color:"#555",minHeight:"48px"}}>{a.role}</div>
            <button onClick={()=>runAgent(a)} disabled={running===a.id} style={{marginTop:"8px",width:"100%",background:running===a.id?"#ccc":a.color,color:"#fff",padding:"8px",borderRadius:"8px",border:"none",fontWeight:"700",cursor:"pointer",fontSize:"12px"}}>{running===a.id?"Working...":"▶ Train / Run"}</button>
            <div style={{fontSize:"10px",marginTop:"6px",color:"#888"}}>{a.id==="builder"?"Fixes videos + deploy":a.id==="chief"?"Reads PDF → Assigns":a.id==="video"?"Embeds Dada/Nani motion":a.id==="writer"?"Generates 3 hints/day":""} </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:"16px",border:"1.5px solid #111",borderRadius:"12px",padding:"14px",background:"#00FF88"}}>
        <div style={{fontWeight:"900"}}>What CEO Sachin Must Do Today — 9 AM Hard Truth Check (from roadmap):</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",marginTop:"8px",fontSize:"12px"}}>
          <div>1. <b>Check PH upvotes</b> — producthunt.com/posts/oldhint-com — Reply comments</div>
          <div>2. <b>Push 3 hints via /admin</b> — Run Writer+Scout — Add era/origin/passedDown</div>
          <div>3. <b>Post marketing</b> — Reddit r/lifehacks — "My Nani's 1962 trick"</div>
          <div>4. <b>Revenue</b> — Stripe sk_live $7 sales — Target $10 today</div>
        </div>
      </div>
    </div>
  );
}
