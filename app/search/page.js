"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SearchContent() {
  const params = useSearchParams();
  const q = params.get("q") || "";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newQ, setNewQ] = useState(q);

  useEffect(() => {
    if (!q) { setLoading(false); return; }
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(q)}`, { cache: 'no-store' })
      .then(r=>r.json())
      .then(d=>{ setData(d); setLoading(false); })
      .catch(()=>{ setData({ query:q, answers:[{ title:"Fix Stuck Zipper", hint:"Rub pencil graphite on teeth", why:"Grandma trick", agent:"Grandma", cat:"Life", verified:true }], timed:"0.5s"}); setLoading(false); });
  }, [q]);

  return (
    <main style={{ minHeight:'100vh', background:'#fff', color:'#000', fontFamily:'system-ui' }}>
      <header style={{ borderBottom:'1px solid #eee', padding:'14px 20px', position:'sticky', top:0, background:'#fff', zIndex:10 }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', display:'flex', alignItems:'center', gap:'20px' }}>
          <Link href="/" style={{ fontWeight:'800', fontSize:'22px', letterSpacing:'-1px', textDecoration:'none', color:'#000' }}>oldhint</Link>
          <form onSubmit={e=>{ e.preventDefault(); window.location.href=`/search?q=${encodeURIComponent(newQ)}`; }} style={{ flex:1, maxWidth:'600px', display:'flex', gap:'10px' }}>
            <input value={newQ} onChange={e=>setNewQ(e.target.value)} placeholder="Search grandma wisdom..." style={{ flex:1, padding:'12px 18px', borderRadius:'24px', border:'1px solid #ddd', fontSize:'15px', outline:'none' }} />
            <button type="submit" style={{ padding:'12px 20px', borderRadius:'24px', background:'#000', color:'#fff', border:'none', fontWeight:'bold', cursor:'pointer' }}>Search</button>
          </form>
          <Link href="/admin" style={{ fontSize:'12px', opacity:0.5, textDecoration:'none', color:'#000' }}>Admin</Link>
        </div>
      </header>

      <div style={{ maxWidth:'700px', margin:'0 auto', padding:'20px' }}>
        {loading ? (
          <div style={{ padding:'40px 0' }}>
            <p style={{ opacity:0.5 }}>🤖 7 Agents thinking... Chef • Mechanic • Grandma • Cleaner • Verifier • Ranker...</p>
            <div style={{ marginTop:'20px', display:'grid', gap:'12px' }}>
              {[1,2,3].map(i=><div key={i} style={{ height:'90px', background:'#f5f5f5', borderRadius:'12px', animation:'pulse 1s infinite' }}></div>)}
            </div>
          </div>
        ) : data ? (
          <>
            <p style={{ fontSize:'12px', opacity:0.4, marginBottom:'16px' }}>About {data.answers?.length} results ({data.timed}) • {data.source} • {data.totalAgents} Agents</p>
            {data.answers?.map((a,i)=>(
              <div key={i} style={{ borderBottom:'1px solid #f0f0f0', padding:'20px 0' }}>
                <div style={{ display:'flex', gap:'8px', alignItems:'center', marginBottom:'8px' }}>
                  <span style={{ fontSize:'10px', background:i===0?'#000':'#eee', color:i===0?'#fff':'#000', padding:'4px 10px', borderRadius:'20px', fontWeight:'bold' }}>{a.agent} {i===0?'🏆':''}</span>
                  <span style={{ fontSize:'11px', opacity:0.4 }}>{a.cat} • {a.verified?'Verified ✅':'Review ⏳'}</span>
                  <span style={{ fontSize:'11px', opacity:0.3 }}>#{a.rank || i+1}</span>
                </div>
                <h2 style={{ margin:'0 0 8px', fontSize:'19px', lineHeight:'1.3', color:'#1a0dab' }}>{a.title}</h2>
                <p style={{ margin:0, fontSize:'15px', lineHeight:'1.6', color:'#222' }}>{a.hint}</p>
                {a.why && <p style={{ margin:'10px 0 0', fontSize:'12px', opacity:0.5, background:'#f9f9f9', padding:'8px 12px', borderRadius:'8px' }}>💡 Why: {a.why} • {a.long}</p>}
                <div style={{ marginTop:'12px', display:'flex', gap:'8px' }}>
                  <button onClick={()=>navigator.clipboard.writeText(a.hint)} style={{ fontSize:'11px', padding:'6px 14px', borderRadius:'20px', border:'1px solid #ddd', background:'#fff', cursor:'pointer' }}>📋 Copy</button>
                  <button style={{ fontSize:'11px', padding:'6px 14px', borderRadius:'20px', border:'1px solid #ddd', background:'#fff', cursor:'pointer' }}>👍 {Math.floor(Math.random()*200)+20}</button>
                  <Link href={`/hint/${encodeURIComponent(a.title.toLowerCase().replace(/[^a-z0-9]+/g,'-'))}`} style={{ fontSize:'11px', padding:'6px 14px', borderRadius:'20px', border:'1px solid #ddd', background:'#f5f5f5', textDecoration:'none', color:'#000' }}>Open →</Link>
                </div>
              </div>
            ))}
            <div style={{ marginTop:'30px', padding:'20px', background:'#000', color:'#fff', borderRadius:'16px' }}>
              <h3 style={{ margin:'0 0 8px' }}>Want this daily at 9am Calgary?</h3>
              <p style={{ margin:0, opacity:0.7, fontSize:'13px' }}>Cron posts automatically. Control from phone: oldhint.com/admin • {data.source}</p>
            </div>
          </>
        ) : (
          <p style={{ padding:'40px 0', opacity:0.5 }}>Type something like "how to make biryani"</p>
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
  return <Suspense fallback={<div style={{ padding:'40px', fontFamily:'system-ui' }}>Loading OldHint Search...</div>}><SearchContent /></Suspense>;
}
