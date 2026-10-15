"use client";
import { useState, useEffect } from "react";
export default function Admin(){
  const [cmd,setCmd]=useState("/build-family-social");
  const [logs,setLogs]=useState(["[Chief] OldHint 'the lost knowledge' — 8 AI Employees Online","Type command: /help to see all commands"]);
  const [stats,setStats]=useState({guides:51});
  useEffect(()=>{fetch("/api/stats").then(r=>r.json()).then(d=>setStats(d)).catch(()=>{});},[]);

  const commands={
    "/help": "Commands: /build-family-social, /create-family bazard, /post-trick keep rotis soft 1960s, /add-member dad elder, /build-feed, /build-stories, /build-dm, /build-logo, /deploy-all",
    "/build-family-social": "Builder Agent: Building /family, /family/[name], family tree visual, Follow/Friend, Stories, Videos, Posts",
    "/create-family": "Chief: Creating family account The Bazard Family Est. 1980 Calgary T3J",
    "/build-logo": "Design Agent: Logo OldHint 'the lost knowledge' — timeless serif + lost book icon",
    "/build-feed": "Builder: Instagram-like feed but family wisdom only",
  };

  const run=async()=>{
    setLogs(prev=>[...prev, `[You] ${cmd}`, `[Chief] Dispatching agents for: ${cmd}`]);
    try{
      const res=await fetch("/api/agent/run-all",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:cmd, decade:"family-social"})});
      const data=await res.json();
      if(data.logs) setLogs(data.logs);
    }catch(e){ setLogs(prev=>[...prev, `[Error] ${e.message}`]); }
  };

  return (
    <div style={{background:"#0a0a0a",color:"#fff",minHeight:"100vh",padding:"20px",fontFamily:"sans-serif"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1><span style={{background:"#0a5cff",padding:"4px 10px"}}>P</span> OldHint — the lost knowledge — AI Command Centre</h1><div>{stats.guides} guides • <a href="/" style={{color:"#fff"}}>View Site</a></div></div>
      <div style={{border:"2px solid #00ff88",borderRadius:"12px",padding:"16px",display:"flex",gap:"12px",marginTop:"16px"}}>
        <input value={cmd} onChange={e=>setCmd(e.target.value)} placeholder="/build-family-social" style={{flex:1,padding:"12px",borderRadius:"8px",color:"#000",fontWeight:"700"}}/>
        <button onClick={run} style={{background:"#00ff88",color:"#000",fontWeight:"900",padding:"12px 24px",borderRadius:"8px",border:"none",cursor:"pointer"}}>🚀 Run Agent Command</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"16px"}}>
        <div style={{background:"#141414",padding:"16px",borderRadius:"12px"}}>
          <div style={{fontWeight:"800"}}>Agent Commands — Type these in box:</div>
          <div style={{fontFamily:"monospace",fontSize:"12px",marginTop:"8px",lineHeight:"1.8"}}>
            <div><b>/build-family-social</b> — Build FB/Insta clone for families, tree visual, Follow/Friend, Stories, Videos, Posts, DM, Comments</div>
            <div><b>/build-logo</b> — Build logo OldHint "the lost knowledge" — appealing layout</div>
            <div><b>/create-family bazard</b> — Create The Bazard Family Est. 1980 Calgary T3J + members as branches</div>
            <div><b>/post-trick fix 350 engine 1972</b> — Post video trick as Bazard Family root Dada</div>
            <div><b>/build-feed</b> — Build social feed page /feed</div>
            <div><b>/build-stories</b> — Build stories bar like Instagram</div>
            <div><b>/build-dm</b> — Build Text/DM + Comments system</div>
            <div><b>/deploy-all</b> — Deploy homepage + vault + family + feed + logo</div>
          </div>
        </div>
        <div style={{background:"#000",color:"#00ff88",fontFamily:"monospace",fontSize:"12px",padding:"12px",borderRadius:"8px",height:"300px",overflowY:"auto"}}>
          {logs.map((l,i)=><div key={i}>{l}</div>)}
        </div>
      </div>
      <div style={{marginTop:"16px",background:"#1a1a1a",padding:"16px",borderRadius:"12px"}}>
        <b>Database Schema for Family Social (Supabase — Agent will create):</b>
        <pre style={{fontSize:"11px",color:"#aaa"}}>{`
families: id, name (Bazard Family), slug (bazard), est_year 1980, city Calgary T3J, origin Punjab, story, logo, members_count, tricks_count, followers_count
family_members: id, family_id, name, role (Elder/Keeper/Explorer), generation (Root/Trunk/Branch/Leaf), photo, bio (fix 350 engine)
family_hints: id, family_id, member_id, type (post/story/video), title (fix 350 engine at home), content, era 1960s, media_url, trust (1200 families), is_public
follows: follower_family_id, following_family_id, type (follow/friend)
comments: hint_id, family_id, text
messages: from_family_id, to_family_id, text
`}</pre>
      </div>
    </div>
  );
}
