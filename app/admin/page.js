"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Admin(){
  const [cmd,setCmd]=useState("/build-facebook");
  const [logs,setLogs]=useState(["Chief: OldHint the lost knowledge - 9 AI Online","Ready for /build-facebook"]);
  const [running,setRunning]=useState(false);

  const run=async()=>{
    setRunning(true);
    setLogs(p=>[...p,"You: "+cmd]);
    let apiPath="/api/agent/run-all";
    if(cmd.includes("/self-learn")) apiPath="/api/agent/self-learn";
    if(cmd.includes("/build-facebook")) apiPath="/api/agent/build-facebook";
    if(cmd.includes("/build-family-social")) apiPath="/api/agent/build-facebook";
    try{
      const res=await fetch(apiPath,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:cmd})});
      const data=await res.json();
      if(data.logs) setLogs(p=>[...p,...data.logs]);
      else setLogs(p=>[...p,"Done"]);
    }catch(e){ setLogs(p=>[...p,"Error "+e.message]); }
    setRunning(false);
  };

  return(
    <div style={{background:"#0a0a0a",color:"#fff",minHeight:"100vh",padding:"20px"}}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h2>OldHint - the lost knowledge - Admin</h2>
        <Link href="/" style={{color:"#000",background:"#fff",padding:"6px 12px",borderRadius:"20px",textDecoration:"none"}}>View Site</Link>
      </div>
      <div style={{marginTop:"16px",display:"flex",gap:"10px"}}>
        <input value={cmd} onChange={e=>setCmd(e.target.value)} style={{flex:1,padding:"12px",color:"#000"}}/>
        <button onClick={run} disabled={running} style={{background:"#1877f2",color:"#fff",padding:"12px 20px",border:"none",borderRadius:"8px"}}>{running?"Building...":"Run"}</button>
      </div>
      <div style={{marginTop:"16px",display:"grid",gridTemplateColumns:"300px 1fr",gap:"12px"}}>
        <div style={{background:"#141414",padding:"12px",borderRadius:"8px",fontSize:"12px"}}>
          <b>COMMANDS - Facebook Clone</b>
          <div style={{marginTop:"8px"}}>/build-facebook - BUILD WHOLE FB CLONE</div>
          <div>/self-learn - Generic AI improves site</div>
          <div>/build-family-social - FB clone for families</div>
          <div>/create-family bazard</div>
          <div>/post-trick fix 350 engine 1972</div>
          <div>/build-logo</div>
          <div>/build-feed</div>
          <div>/build-stories</div>
          <div>/build-dm</div>
        </div>
        <div style={{background:"#000",color:"#0f0",padding:"12px",height:"300px",overflowY:"auto",fontSize:"11px"}}>
          {logs.map((l,i)=><div key={i}>{l}</div>)}
        </div>
      </div>
    </div>
  );
}
