"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Admin(){
  const [cmd,setCmd]=useState("/build-facebook");
  const [logs,setLogs]=useState([
    "[Chief] OldHint - the lost knowledge - 9 AI Online",
    "[FacebookBuilder] Ready to build Facebook clone",
    "[Learner] Generic AI Ready",
    "Type /build-facebook to build whole site like Facebook"
  ]);
  const [stats,setStats]=useState({guides:51});
  const [running,setRunning]=useState(false);

  useEffect(()=>{
    fetch("/api/stats").then(r=>r.json()).then(d=>setStats(d)).catch(()=>{});
  },[]);

  const run=async()=>{
    setRunning(true);
    setLogs(prev=>[...prev, "You: " + cmd, "Chief: Running " + cmd]);

    let apiPath = "/api/agent/run-all";
    if (cmd.indexOf("/self-learn") === 0) apiPath = "/api/agent/self-learn";
    if (cmd.indexOf("/build-facebook") === 0) apiPath = "/api/agent/build-facebook";
    if (cmd.indexOf("/build-family-social") === 0) apiPath = "/api/agent/build-facebook";

    try{
      const res=await fetch(apiPath,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:cmd, decade:"family-social"})});
      const data=await res.json();
      if(data.logs) setLogs(prev=>[...prev,...data.logs]);
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
          <div style={{marginLeft:"12px",background:"#1877f2",color:"#fff",padding:"4px 10px",borderRadius:"999px",fontSize:"11px",fontWeight:"800"}}>FB BUILDER ONLINE</div>
          <div style={{background:"#00FF88",color:"#000",padding:"4px 10px",borderRadius:"999px",fontSize:"11px",fontWeight:"800"}}>51 LIVE</div>
        </div>
        <Link href="/" style={{color:"#000",background:"#FFFEF7",padding:"6px 12px",borderRadius:"999px",textDecoration:"none",fontWeight:"700",fontSize:"12px"}}>View Site</Link>
      </div>

      <div style={{border:"2px solid #1877f2",borderRadius:"14px",padding:"14px",display:"flex",gap:"10px",marginTop:"18px",background:"#111"}}>
        <input value={cmd} onChange={e=>setCmd(e.target.value)} onKeyDown={e=>e.key==="Enter"&&run()} placeholder="/build-facebook - Build whole site like Facebook" style={{flex:1,padding:"14px",borderRadius:"10px",color:"#000",fontWeight:"700",border:"none",fontSize:"14px"}}/>
        <button onClick={run} disabled={running} style={{background: running? "#666" : "#1877f2",color:"#fff",fontWeight:"900",padding:"14px 22px",borderRadius:"10px",border:"none",cursor:"pointer"}}>{running? "Building FB..." : "Run Command"}</button>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"360px 1fr",gap:"14px",marginTop:"16px"}}>
        <div style={{background:"#141414",padding:"16px",borderRadius:"14px",border:"1px solid #222"}}>
          <div style={{fontWeight:"900",fontSize:"13px"}}>FACEBOOK CLONE COMMANDS</div>
          <div style={{fontFamily:"monospace",fontSize:"11px",marginTop:"10px",lineHeight:"1.8",color:"#bbb"}}>
            <div style={{color:"#1877f2",fontWeight:"800",fontSize:"12px"}}>/build-facebook - BUILD WHOLE FACEBOOK CLONE - Appealing - OldHint the lost knowledge - Family Tree Root Trunk Branch Leaf - Stories bar - Feed with Follow/Friend/Text/Comment/Save - Suggested Families - 51
