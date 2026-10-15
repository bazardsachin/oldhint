"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Admin(){
  const [cmd,setCmd]=useState("/self-learn");
  const [logs,setLogs]=useState([
    "[Chief] OldHint - the lost knowledge - 8 AI Online",
    "[Learner] Generic Interactive AI Agent - Ready",
    "Type /help for commands, /self-learn to auto-improve"
  ]);
  const [stats,setStats]=useState({guides:51, seo:"51/51"});
  const [running,setRunning]=useState(false);

  useEffect(()=>{
    fetch("/api/stats").then(r=>r.json()).then(d=>setStats(d)).catch(()=>{});
  },[]);

  const run=async()=>{
    setRunning(true);
    setLogs(prev=>[...prev, "You: " + cmd, "Chief: Dispatching agents for " + cmd]);

    let apiPath = "/api/agent/run-all";
    let body = { topic: cmd, decade: "family-social" };

    if (cmd.indexOf("/self-learn") === 0) {
      apiPath = "/api/agent/self-learn";
      setLogs(prev=>[...prev, "Learner: Generic Interactive AI Agent Starting", "Learner: Learning FB/Insta patterns Stories Reels Feed Ranking"]);
    }

    try{
      const res=await fetch(apiPath,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      const data=await res.json();
      if(data.logs) setLogs(prev=>[...prev,...data.logs]);
      fetch("/api/stats").then(r=>r.json()).then(d=>setStats(d)).catch(()=>{});
    }catch(e){
      setLogs(prev=>[...prev, "Error: " + e.message]);
    }
    setRunning(false);
  };

  return (
    <div style={{background:"#0a0a0a",color:"#fff",minHeight:"100vh",padding:"20px",fontFamily:"Inter, sans-serif"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #222",paddingBottom:"14px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <div style={{width:"44px",height:"44px",background:"#FFFEF7",color:"#0a0a0a",display:"grid",placeItems:"center",borderRadius:"10px",fontWeight:"900",fontSize:"20px"}}>OH</div>
          <div>
            <div style={{fontWeight:"900",fontSize:"24px",lineHeight:"1"}}>OldHint</div>
            <div style={{fontSize:"10px",letterSpacing:"2px",textTransform:"uppercase",color:"#888"}}>the lost knowledge</div>
          </div>
          <div style={{marginLeft:"16px",background:"#00FF88",color:"#000",padding:"4px 10px",borderRadius:"999px",fontSize:"11px",fontWeight:"800"}}>8 AI ONLINE</div>
          <div style={{background:"#0a5cff",color:"#fff",padding:"4px 10px",borderRadius:"999px",fontSize:"11px",fontWeight:"800"}}>LEARNER ONLINE</div>
        </div>
        <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
          <span style={{fontSize:"12px"}}>{stats.guides||51} LIVE</span>
          <Link href="/" style={{color:"#000",background:"#FFFEF7",padding:"6px 12px",borderRadius:"999px",textDecoration:"none",fontWeight:"700",fontSize:"12px"}}>View Site</Link>
        </div>
      </div>

      <div style={{border:"2px solid #00FF88",borderRadius:"14px",padding:"14px",display:"flex",gap:"10px",marginTop:"18px",background:"#111"}}>
        <input value={cmd} onChange={e=>setCmd(e.target.value)} onKeyDown={e=>e.key==="Enter"&&run()} placeholder="/self-learn - Generic AI improves site" style={{flex:1,padding:"14px",borderRadius:"10px",color:"#000",fontWeight:"700",border:"none",fontSize:"14px"}}/>
        <button onClick={run} disabled={running} style={{background: running? "#666" : "#00FF88",color:"#000",fontWeight:"900",padding:"14px 22px",borderRadius:"10px",border:"none",cursor:"pointer",fontSize:"14px"}}>{running? "Agents Working..." : "Run Agent Command"}</button>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"360px 1fr",gap:"14px",marginTop:"16px"}}>
        <div style={{background:"#141414",padding:"16px",borderRadius:"14px",border:"1px solid #222"}}>
          <div style={{fontWeight:"900",fontSize:"13px"}}>AGENT COMMANDS</div>
          <div style={{fontFamily:"monospace",fontSize:"11px",marginTop:"10px",lineHeight:"1.7",color:"#bbb"}}>
            <div style={{color:"#00FF88",fontWeight:"700"}}>/self-learn - GENERIC SELF-LEARNING - Copies FB/Insta, improves site itself</div>
            <div style={{marginTop:"8px"}}><b style={{color:"#fff"}}>/build-family-social</b> - Build FB/Insta clone for families</div>
            <div><b style={{color:"#fff"}}>/build-logo</b> - Build logo OldHint the lost knowledge</div>
            <div><b style={{color:"#fff"}}>/create-family bazard</b> - Create Bazard Family Est 1980</div>
            <div><b style={{color:"#fff"}}>/post-trick fix 350 engine 1972</b> - Post trick as Root Dada</div>
            <div><b style={{color:"#fff"}}>/build-feed</b> - Build social feed /feed</div>
            <div><b style={{color:"#fff"}}>/build-stories</b> - Build Stories bar</div>
            <div><b style={{color:"#fff"}}>/build-dm</b> - Build DM + Comments</div>
            <div><b style={{color:"#fff"}}>/deploy-all</b> - Deploy all pages</div>
          </div>
        </div>
        <div style={{background:"#000",color:"#00FF88",fontFamily:"monospace",fontSize:"11px",padding:"12px",borderRadius:"14px",height:"420px",overflowY:"auto",border:"1px solid #222"}}>
          {logs.map((l,i)=><div key={i} style={{marginBottom:"4px"}}>{l}</div>)}
        </div>
      </div>
    </div>
  );
}
