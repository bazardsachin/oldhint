"use client";
import { useState, useEffect } from "react";

export default function Admin() {
  const [today, setToday] = useState(null);
  const [cron, setCron] = useState(null);
  const [pass, setPass] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (unlocked) {
      fetch('/api/agent/generate-hint', { cache: 'no-store' }).then(r=>r.json()).then(setToday);
      fetch('/api/cron/daily', { cache: 'no-store' }).then(r=>r.json()).then(setCron);
    }
  }, [unlocked]);

  if (!unlocked) {
    return (
      <main style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'system-ui' }}>
        <div style={{ background:'#111', padding:'30px', borderRadius:'20px', border:'1px solid #222', width:'320px', textAlign:'center' }}>
          <h2>OLDHINT ADMIN</h2>
          <p style={{ opacity:0.5, fontSize:'13px', margin:'10px 0 20px' }}>For Sachin only • Calgary</p>
          <input type="password" placeholder="Password: goldy123" value={pass} onChange={e=>setPass(e.target.value)} style={{ width:'100%', padding:'12px', borderRadius:'10px', background:'#1a1a1a', border:'1px solid #333', color:'#fff' }} />
          <button onClick={()=>{ if(pass==="goldy123") setUnlocked(true); else alert("Wrong! Hint: goldy123"); }} style={{ width:'100%', marginTop:'12px', padding:'12px', borderRadius:'10px', background:'#fff', color:'#000', border:'none', fontWeight:'bold', cursor:'pointer' }}>Unlock</button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:'20px', fontFamily:'system-ui' }}>
      <div style={{ maxWidth:'700px', margin:'0 auto' }}>
        <a href="/" style={{ color:'#fff', opacity:0.5, textDecoration:'none' }}>← oldhint.com</a>
        <h1 style={{ margin:'20px 0' }}>Admin • Agent Control</h1>

        <div style={{ background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'20px', marginBottom:'20px' }}>
          <h3>🤖 Agent Today</h3>
          {today? <><p style={{ background:'#1a1a1a', padding:'15px', borderRadius:'10px', marginTop:'10px' }}>{today.hint?.title} — {today.hint?.hint}</p><p style={{ fontSize:'12px', opacity:0.4, marginTop:'8px' }}>Source: {today.source} • {today.hint?.cat}</p></> : <p>Loading...</p>}
          <button onClick={()=>location.reload()} style={{ marginTop:'12px', padding:'10px 16px', borderRadius:'8px', background:'#fff', color:'#000', border:'none', cursor:'pointer' }}>🔄 Generate New</button>
        </div>

        <div style={{ background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'20px', marginBottom:'20px' }}>
          <h3>⏰ Cron Daily 9am</h3>
          {cron? <><p style={{ fontSize:'14px', marginTop:'10px' }}>{cron.hint?.title} — {cron.hint?.hint}</p><p style={{ fontSize:'11px', opacity:0.4, marginTop:'8px' }}>{cron.time}</p></> : <p>Loading cron...</p>}
          <p style={{ fontSize:'12px', opacity:0.4, marginTop:'10px' }}>Schedule: vercel.json • 0 15 * * *</p>
        </div>

        <div style={{ background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'20px' }}>
          <h3>🚀 Launch Checklist</h3>
          <p style={{ fontSize:'13px', marginTop:'10px' }}>✅ Site live: oldhint.com</p>
          <p style={{ fontSize:'13px' }}>✅ SEO pages: /hint/[slug]</p>
          <p style={{ fontSize:'13px' }}>✅ Agent: /api/agent/generate-hint</p>
          <p style={{ fontSize:'13px' }}>✅ Cron: /api/cron/daily (9am Calgary)</p>
          <p style={{ fontSize:'13px' }}>✅ Admin: /admin (you are here)</p>
          <div style={{ display:'flex', gap:'10px', marginTop:'15px' }}>
            <a href="https://vercel.com/bazardsachin/oldhint-qbof" target="_blank" style={{ padding:'10px 14px', background:'#222', borderRadius:'8px', color:'#fff', textDecoration:'none', border:'1px solid #333', fontSize:'13px' }}>Vercel Logs</a>
            <a href="https://oldhint.com" target="_blank" style={{ padding:'10px 14px', background:'#fff', borderRadius:'8px', color:'#000', textDecoration:'none', fontWeight:'bold', fontSize:'13px' }}>View Site</a>
          </div>
        </div>

        <p style={{ textAlign:'center', opacity:0.3, marginTop:'30px', fontSize:'12px' }}>Agent built for Sachin • Calgary • oldhint.com</p>
      </div>
    </main>
  );
}
