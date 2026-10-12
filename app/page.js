"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const search = async (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setResults({ query: q, answers: [{ title: "Fix Zipper Fast", hint: "Rub pencil on stuck zipper.", why: "Graphite lube", agent: "Grandma" }] });
    }
    setLoading(false);
  };

  return (
    <main style={{ minHeight:'100vh', background:'#fff', color:'#000', fontFamily:'system-ui', padding:'20px' }}>
      <header style={{ display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:'1200px', margin:'0 auto 40px', fontSize:'13px' }}>
        <Link href="/" style={{ fontWeight:'bold', textDecoration:'none', color:'#000', fontSize:'18px' }}>oldhint</Link>
        <div style={{ display:'flex', gap:'15px' }}>
          <Link href="/admin" style={{ color:'#000', opacity:0.6, textDecoration:'none' }}>Admin</Link>
          <a href="https://instagram.com/sachin_bazard" target="_blank" style={{ color:'#000', opacity:0.6, textDecoration:'none' }}>@sachin_bazard</a>
        </div>
      </header>

      <div style={{ maxWidth:'700px', margin:'60px auto 0', textAlign:'center' }}>
        <h1 style={{ fontSize:'56px', fontWeight:'800', letterSpacing:'-3px', margin:0 }}>oldhint</h1>
        <p style={{ opacity:0.5, marginTop:'8px', fontSize:'15px' }}>Google for grandma's wisdom • biryani to 350 engine</p>

        <form onSubmit={search} style={{ marginTop:'30px', position:'relative' }}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="how to make biryani, remove coffee stain, rebuild 350 engine..." style={{ width:'100%', padding:'18px 22px', borderRadius:'30px', border:'1px solid #ddd', fontSize:'16px', outline:'none', boxShadow:'0 2px 10px rgba(0,0,0,0.06)' }} />
          <button type="submit" style={{ position:'absolute', right:'6px', top:'6px', padding:'12px 22px', borderRadius:'24px', background:'#000', color:'#fff', border:'none', fontWeight:'bold', cursor:'pointer' }}>{loading? '...' : 'Search'}</button>
        </form>

        <div style={{ display:'flex', gap:'8px', justifyContent:'center', flexWrap:'wrap', marginTop:'18px' }}>
          {["how to make biryani","remove coffee stain","rebuild 350 engine","fix stuck zipper","old money rule"].map(t=>(
            <button key={t} onClick={()=>{ setQ(t); setTimeout(()=>document.querySelector('form').requestSubmit(),100); }} style={{ padding:'7px 14px', borderRadius:'20px', background:'#f2f2f2', border:'1px solid #eee', fontSize:'12px', cursor:'pointer' }}>{t}</button>
          ))}
        </div>
      </div>

      {results && (
        <div style={{ maxWidth:'700px', margin:'40px auto 0' }}>
          <p style={{ fontSize:'12px', opacity:0.4, marginBottom:'16px' }}>{results.answers?.length || 0} timeless answers for "{results.query}" • {results.timed || '0.8s'}</p>
          {results.answers?.map((a,i)=>(
            <div key={i} style={{ borderBottom:'1px solid #eee', padding:'18px 0' }}>
              <div style={{ display:'flex', gap:'8px', alignItems:'center' }}>
                <span style={{ fontSize:'10px', background:'#000', color:'#fff', padding:'3px 8px', borderRadius:'10px' }}>{a.agent}</span>
                <span style={{ fontSize:'11px', opacity:0.4 }}>{a.cat} • Verified {a.verified? '✅' : '⏳'}</span>
              </div>
              <h3 style={{ margin:'8px 0 6px', fontSize:'18px' }}>{a.title}</h3>
              <p style={{ margin:0, fontSize:'14px', lineHeight:'1.5' }}>{a.hint}</p>
              {a.why && <p style={{ margin:'8px 0 0', fontSize:'12px', opacity:0.5 }}>Why: {a.why} • {a.long}</p>}
              <div style={{ marginTop:'10px', display:'flex', gap:'10px' }}>
                <button style={{ fontSize:'11px', padding:'6px 12px', borderRadius:'20px', border:'1px solid #ddd', background:'#fff', cursor:'pointer' }}>👍 {Math.floor(Math.random()*120)+10}</button>
                <button style={{ fontSize:'11px', padding:'6px 12px', borderRadius:'20px', border:'1px solid #ddd', background:'#fff', cursor:'pointer' }}>Save</button>
              </div>
            </div>
          ))}
          <div style={{ marginTop:'24px', padding:'18px', background:'#f9f9f9', borderRadius:'16px', border:'1px solid #eee' }}>
            <p style={{ margin:0, fontSize:'13px', fontWeight:'bold' }}>Want this as daily 9am wisdom?</p>
            <p style={{ margin:'6px 0 0', fontSize:'12px', opacity:0.6 }}>Cron auto-posts at 9am Calgary • oldhint.com/admin</p>
          </div>
        </div>
      )}

      <footer style={{ maxWidth:'700px', margin:'80px auto 20px', textAlign:'center', fontSize:'11px', opacity:0.3 }}>
        OldHint Search • 7 Agents • Built by Sachin Bazard • Calgary • Grandma wisdom > AI
      </footer>
    </main>
  );
}
