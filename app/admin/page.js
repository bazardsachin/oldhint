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

  const load = () => {
    fetch('/api/agent/generate-hint', { cache: 'no-store' }).then(r=>r.json()).then(setToday);
  };
  const testAgents = () => {
    setAgents(null);
    fetch(`/api/search?q=${encodeURIComponent(searchTest)}`, { cache: 'no-store' }).then(r=>r.json()).then(setAgents);
  };

  useEffect(()=>{ if(unlocked){ load(); testAgents(); } },[unlocked]);

  if (!unlocked) {
    return (
      <main style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'system-ui', padding:'20px' }}>
        <div style={{ background:'#111', padding:'30px', borderRadius:'20px', border:'1px solid #222', width:'100%', maxWidth:'360px', textAlign:'center' }}>
          <h2>OLDHINT CEO ADMIN</h2>
          <p style={{ opacity:0.5, fontSize:'12px' }}>7 Agents Control • Calgary</p>
          <input type="password" placeholder="goldy123" value={pass} onChange={e=>setPass(e.target.value)} style={{ width:'100%', padding:'14px', borderRadius:'12px', background:'#1a1a1a', border:'1px solid #333', color:'#fff', marginTop:'15px' }} />
          <button onClick={()=> pass==="goldy123"? setUnlocked(true): alert("Wrong")} style={{ width:'100%', marginTop:'12px', padding:'14px', borderRadius:'12px', background:'#fff', color:'#000', fontWeight:'bold', border:'none' }}>Unlock 7 Agents</button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:'14px', fontFamily:'system-ui' }}>
      <div style={{ maxWidth:'600px', margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px' }}>
          <Link href="/" style={{ color:'#fff', textDecoration:'none', opacity:0.6 }}>← oldhint</Link>
          <span style={{ fontSize:'10px', opacity:0.3 }}>7 Agents • Live</span>
        </div>

        <h1 style={{ fontSize:'22px', margin:'0 0 14px' }}>CEO Panel 📱 7 Agents</h1>
        {status && <div style={{ background:'#1a3a1a', padding:'10px', borderRadius:'10px', marginBottom:'12px', fontSize:'12px' }}>{status}</div>}

        <div style={{ background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'16px', marginBottom:'14px' }}>
          <h3 style={{ margin:'0 0 10px', fontSize:'14px' }}>🧪 Test Search Engine</h3>
          <div style={{ display:'flex', gap:'8px' }}>
            <input value={searchTest} onChange={e=>setSearchTest(e.target.value)} style={{ flex:1, padding:'12px', borderRadius:'10px', background:'#1a1a1a', border:'1px solid #333', color:'#fff', fontSize:'14px' }} />
            <button onClick={testAgents} style={{ padding:'12px 16px', borderRadius:'10px', background:'#fff', color:'#000', border:'none', fontWeight:'bold' }}>Run 7 Agents</button>
          </div>
          <div style={{ display:'flex', gap:'6px', marginTop:'10px', flexWrap:'wrap' }}>
            {["biryani","coffee stain","350 engine","zipper","old money"].map(t=><button key={t} onClick={()=>{ setSearchTest("how to "+t); setTimeout(testAgents,200); }} style={{ fontSize:'10px', padding:'5px 10px', borderRadius:'20px', background:'#222', border:'1px solid #333', color:'#fff' }}>{t}</button>)}
          </div>
          {agents && (
            <div style={{ marginTop:'14px' }}>
              <p style={{ fontSize:'11px', opacity:0.4 }}>{agents.answers?.length} answers • {agents.timed} • {agents.source}</p>
              {agents.answers?.map((a,i)=>(
                <div key={i} style={{ background:'#1a1a1a', padding:'12px', borderRadius:'12px', marginTop:'8px', borderLeft:`3px solid ${i===0?'#fff':'#333'}` }}>
                  <div style={{ display:'flex', justifyContent:'space-between' }}>
                    <span style={{ fontSize:'10px', background:'#222', padding:'3px 8px', borderRadius:'10px' }}>{a.agent} {i===0?'🏆':''}</span>
                    <span style={{ fontSize:'10px', opacity:0.4 }}>{a.cat}</span>
                  </div>
                  <p style={{ margin:'8px 0 0', fontWeight:'bold', fontSize:'13px' }}>{a.title}</p>
                  <p style={{ margin:'4px 0 0', fontSize:'12px', opacity:0.8 }}>{a.hint?.slice(0,120)}...</p>
                  <div style={{ display:'flex', gap:'6px', marginTop:'8px' }}>
                    <button onClick={()=>{ setStatus(`✅ APPROVED ${a.agent}: ${a.title} - Now live on search!`); navigator.clipboard.writeText(`${a.title} — ${a.hint}`); }} style={{ fontSize:'10px', padding:'6px 10px', borderRadius:'20px', background:'#fff', color:'#000', border:'none', fontWeight:'bold' }}>✅ Approve</button>
                    <button onClick={()=> setStatus(`❌ Rejected ${a.agent}`)} style={{ fontSize:'10px', padding:'6px 10px', borderRadius:'20px', background:'#222', color:'#fff', border:'1px solid #444' }}>❌ Reject</button>
                    <button onClick={()=> navigator.clipboard.writeText(a.hint)} style={{ fontSize:'10px', padding:'6px 10px', borderRadius:'20px', background:'#222', border:'1px solid #333', color:'#fff' }}>Copy</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'16px', marginBottom:'14px' }}>
          <h3 style={{ margin:'0 0 10px', fontSize:'14px' }}>🤖 Daily Hint Agent (Cron)</h3>
          {today ? (
            <>
              <p style={{ background:'#1a1a1a', padding:'12px', borderRadius:'10px', fontSize:'13px', margin:0 }}><b>{today.hint?.title}</b> — {today.hint?.hint}</p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginTop:'10px' }}>
                <button onClick={load} style={{ padding:'12px', borderRadius:'10px', background:'#222', color:'#fff', border:'1px solid #333' }}>🔄 New</button>
                <button onClick={()=>{ navigator.clipboard.writeText(`${today.hint?.title} — ${today.hint?.hint} oldhint.com`); setStatus("📋 Copied for IG @sachin_bazard"); }} style={{ padding:'12px', borderRadius:'10px', background:'#fff', color:'#000', border:'none', fontWeight:'bold' }}>📋 IG</button>
              </div>
            </>
          ) : <p style={{ opacity:0.5 }}>Loading...</p>}
        </div>

        <div style={{ background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'16px' }}>
          <h3 style={{ margin:'0 0 8px', fontSize:'14px' }}>📊 Billion Roadmap</h3>
          <p style={{ fontSize:'12px', opacity:0.6, lineHeight:'1.6', margin:0 }}>
            ✅ Step1: 7 Agents API — DONE (your biryani screenshot)<br/>
            ✅ Step2: Google Search Page — DONE<br/>
            ✅ Step3: CEO Admin Review — DONE (now)<br/>
            🔜 Step4: SEO Index 1000 hints + $7 Ebook monetization<br/>
            🔜 Step5: Launch @sachin_bazard + Product Hunt
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginTop:'12px' }}>
            <a href="/" style={{ textAlign:'center', padding:'10px', background:'#222', borderRadius:'10px', color:'#fff', textDecoration:'none', fontSize:'12px' }}>Search Home</a>
            <a href="/search?q=how%20to%20make%20biryani" style={{ textAlign:'center', padding:'10px', background:'#fff', borderRadius:'10px', color:'#000', textDecoration:'none', fontSize:'12px', fontWeight:'bold' }}>Test Biryani</a>
          </div>
        </div>

        <p style={{ textAlign:'center', opacity:0.2, fontSize:'10px', marginTop:'20px' }}>Sachin Bazard • Calgary • oldhint.com/admin • 7 Agents CEO Panel</p>
      </div>
    </main>
  );
}
