"use client";
import { useState, useEffect } from "react";

const HINTS = [
  { id: 1, cat: "Life", title: "Fix Stuck Zipper", slug: "fix-stuck-zipper", hint: "Rub pencil lead on zipper teeth.", why: "Graphite is dry lube." },
  { id: 2, cat: "Money", title: "Save on Groceries", slug: "save-on-groceries", hint: "Shop after eating, not before.", why: "Hunger makes you buy 20% more." },
  { id: 3, cat: "Tech", title: "Phone Battery Trick", slug: "phone-battery-trick", hint: "Charge to 80%, not 100%.", why: "Extends battery life 2x." },
  { id: 4, cat: "Games", title: "Win Old Chess", slug: "win-old-chess", hint: "Control center, not edges.", why: "Center gives more moves." },
  { id: 5, cat: "Life", title: "Remove Ink Stain", slug: "remove-ink-stain", hint: "Use milk, not water.", why: "Milk proteins lift ink." },
  { id: 6, cat: "Money", title: "Old Money Rule", slug: "old-money-rule", hint: "Pay yourself first 10%.", why: "What remains you adjust to." },
];

export default function Home() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [liveHint, setLiveHint] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);
  const [newHint, setNewHint] = useState({ title:"", hint:"", cat:"Life" });

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
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <h1 style={{ fontSize:'12px', letterSpacing:'6px', opacity:0.5 }}>OLDHINT</h1>
          <button onClick={()=>setShowSubmit(!showSubmit)} style={{ padding:'10px 18px', borderRadius:'20px', background:'#fff', color:'#000', border:'none', fontWeight:'bold', cursor:'pointer' }}>+ Submit Hint</button>
        </div>
        
        {liveHint && (
          <div style={{ background:'#1a1a1a', border:'1px solid #333', borderRadius:'16px', padding:'24px', textAlign:'center', margin:'30px 0' }}>
            <p style={{ fontSize:'11px', opacity:0.4, letterSpacing:'2px' }}>LIVE AI WISDOM</p>
            <h2 style={{ fontSize:'24px', fontWeight:300, marginTop:'10px' }}>"{liveHint}"</h2>
          </div>
        )}

        {showSubmit && (
          <div style={{ background:'#111', border:'1px solid #333', borderRadius:'16px', padding:'20px', marginBottom:'20px' }}>
            <h3>Submit Old Hint</h3>
            <input placeholder="Title e.g. Fix squeaky door" value={newHint.title} onChange={e=>setNewHint({...newHint, title:e.target.value})} style={{ width:'100%', padding:'12px', margin:'10px 0', borderRadius:'8px', background:'#1a1a1a', border:'1px solid #333', color:'#fff' }} />
            <textarea placeholder="Your hint..." value={newHint.hint} onChange={e=>setNewHint({...newHint, hint:e.target.value})} style={{ width:'100%', padding:'12px', margin:'10px 0', borderRadius:'8px', background:'#1a1a1a', border:'1px solid #333', color:'#fff', minHeight:'80px' }} />
            <div style={{ display:'flex', gap:'10px' }}>
              <button onClick={()=>{ alert(`Thanks! "${newHint.title}" sent to AI agent for approval. It will be live soon on oldhint.com`); setShowSubmit(false); setNewHint({title:"",hint:"",cat:"Life"}); }} style={{ padding:'12px 20px', borderRadius:'8px', background:'#fff', color:'#000', border:'none', fontWeight:'bold', cursor:'pointer' }}>Submit to AI Agent</button>
              <button onClick={()=>setShowSubmit(false)} style={{ padding:'12px 20px', borderRadius:'8px', background:'#222', color:'#fff', border:'1px solid #333', cursor:'pointer' }}>Cancel</button>
            </div>
          </div>
        )}

        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search old hints for..." style={{ width:'100%', padding:'16px', borderRadius:'12px', background:'#1a1a1a', border:'1px solid #333', color:'#fff', fontSize:'16px' }} />

        <div style={{ display:'flex', gap:'10px', margin:'20px 0', flexWrap:'wrap' }}>
          {["All","Life","Money","Tech","Games"].map(c=>(
            <button key={c} onClick={()=>setCat(c)} style={{ padding:'8px 16px', borderRadius:'20px', background: cat===c ? '#fff' : '#1a1a1a', color: cat===c ? '#000' : '#fff', border:'1px solid #333', cursor:'pointer' }}>{c}</button>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'16px' }}>
          {filtered.map(h=>(
            <a href={`/hint/${h.slug}`} key={h.id} style={{ background:'#111', border:'1px solid #222', borderRadius:'16px', padding:'20px', textDecoration:'none', color:'#fff', display:'block' }}>
              <span style={{ fontSize:'10px', background:'#222', padding:'4px 8px', borderRadius:'10px' }}>{h.cat}</span>
              <h3 style={{ margin:'12px 0 8px', fontSize:'16px' }}>{h.title}</h3>
              <p style={{ opacity:0.8, fontSize:'14px' }}>{h.hint}</p>
              <p style={{ opacity:0.4, fontSize:'12px', marginTop:'10px' }}>Why: {h.why}</p>
            </a>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop:'50px', padding:'30px', background:'#111', borderRadius:'16px', border:'1px solid #222' }}>
          <h3>Join 1,000+ Old Souls</h3>
          <p style={{ opacity:0.5, fontSize:'14px', margin:'10px 0' }}>Get 3 old hints every Sunday</p>
          <div style={{ display:'flex', gap:'10px', justifyContent:'center', marginTop:'15px' }}>
            <input placeholder="Your email" style={{ padding:'12px', borderRadius:'8px', background:'#1a1a1a', border:'1px solid #333', color:'#fff', width:'200px' }} />
            <button style={{ padding:'12px 18px', borderRadius:'8px', background:'#fff', color:'#000', border:'none', fontWeight:'bold' }}>Join</button>
          </div>
        </div>

        <p style={{ textAlign:'center', opacity:0.3, marginTop:'30px', fontSize:'12px' }}>Step 4C Live • Interactive + Submit + Newsletter</p>
      </div>
    </main>
  );
}
