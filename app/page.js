"use client";
import { useState, useEffect } from "react";

const HINTS = [
  { id: 1, cat: "Life", title: "Fix Stuck Zipper", hint: "Rub pencil lead on zipper teeth.", why: "Graphite is dry lube." },
  { id: 2, cat: "Money", title: "Save on Groceries", hint: "Shop after eating, not before.", why: "Hunger makes you buy 20% more." },
  { id: 3, cat: "Tech", title: "Phone Battery Trick", hint: "Charge to 80%, not 100%.", why: "Extends battery life 2x." },
  { id: 4, cat: "Games", title: "Win Old Chess", hint: "Control center, not edges.", why: "Center gives more moves." },
  { id: 5, cat: "Life", title: "Remove Ink Stain", hint: "Use milk, not water.", why: "Milk proteins lift ink." },
  { id: 6, cat: "Money", title: "Old Money Rule", hint: "Pay yourself first 10%.", why: "What remains you adjust to." },
];

export default function Home() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [liveHint, setLiveHint] = useState("");

  useEffect(() => {
    fetch('/api/hint', { cache: 'no-store' }).then(r=>r.json()).then(d=>setLiveHint(d.hint));
  }, []);

  const filtered = HINTS.filter(h => 
    (cat==="All" || h.cat===cat) && 
    (h.title.toLowerCase().includes(q.toLowerCase()) || h.hint.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <main style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:'20px', fontFamily:'system-ui' }}>
      <div style={{ maxWidth:'900px', margin:'0 auto' }}>
        <h1 style={{ fontSize:'12px', letterSpacing:'6px', opacity:0.5, textAlign:'center', margin:'20px 0' }}>OLDHINT</h1>
        
        {liveHint && (
          <div style={{ background:'#1a1a1a', border:'1px solid #333', borderRadius:'16px', padding:'24px', textAlign:'center', marginBottom:'30px' }}>
            <p style={{ fontSize:'11px', opacity:0.4, letterSpacing:'2px' }}>LIVE AI WISDOM</p>
            <h2 style={{ fontSize:'24px', fontWeight:300, marginTop:'10px' }}>"{liveHint}"</h2>
          </div>
        )}

        <input 
          value={q} onChange={e=>setQ(e.target.value)}
          placeholder="Search old hints for..."
          style={{ width:'100%', padding:'16px', borderRadius:'12px', background:'#1a1a1a', border:'1px solid #333', color:'#fff', fontSize:'16px' }}
        />

        <div style={{ display:'flex', gap:'10px', margin:'20px 0', flexWrap:'wrap' }}>
          {["All","Life","Money","Tech","Games"].map(c=>(
            <button key={c} onClick={()=>setCat(c)} style={{ padding:'8px 16px', borderRadius:'20px', background: cat===c ? '#fff' : '#1a1a1a', color: cat===c ? '#000' : '#fff', border:'1px solid #333', cursor:'pointer' }}>{c}</button>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'16px' }}>
          {filtered.map(h=>(
            <div key={h.id} style={{ background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'20px' }}>
              <span style={{ fontSize:'10px', background:'#222', padding:'4px 8px', borderRadius:'10px' }}>{h.cat}</span>
              <h3 style={{ margin:'12px 0 8px', fontSize:'16px' }}>{h.title}</h3>
              <p style={{ opacity:0.8, fontSize:'14px' }}>{h.hint}</p>
              <p style={{ opacity:0.4, fontSize:'12px', marginTop:'10px' }}>Why: {h.why}</p>
            </div>
          ))}
        </div>

        <p style={{ textAlign:'center', opacity:0.3, marginTop:'40px', fontSize:'12px' }}>Step 4A Live • Next: Detail pages + Submit</p>
      </div>
    </main>
  );
}
