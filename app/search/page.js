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
     .then(r=>r.json()).then(d=>{ setData(d); setLoading(false); })
     .catch(()=>setLoading(false));
  }, [q]);

  const g = data?.answers?.[0];

  return (
    <main style={{ minHeight:'100vh', background:'#fff', color:'#000', fontFamily:'system-ui' }}>
      <header style={{ borderBottom:'1px solid #eee', padding:'14px 20px', position:'sticky', top:0, background:'#fff', zIndex:10 }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', display:'flex', alignItems:'center', gap:'20px' }}>
          <Link href="/" style={{ fontWeight:'800', fontSize:'22px', textDecoration:'none', color:'#000' }}>oldhint</Link>
          <form onSubmit={e=>{ e.preventDefault(); window.location.href=`/search?q=${encodeURIComponent(newQ)}`; }} style={{ flex:1, maxWidth:'600px', display:'flex', gap:'10px' }}>
            <input value={newQ} onChange={e=>setNewQ(e.target.value)} style={{ flex:1, padding:'12px 18px', borderRadius:'24px', border:'1px solid #ddd', outline:'none' }} />
            <button style={{ padding:'12px 20px', borderRadius:'24px', background:'#000', color:'#fff', border:'none', fontWeight:'bold' }}>Search</button>
          </form>
        </div>
      </header>

      <div style={{ maxWidth:'800px', margin:'0 auto', padding:'20px' }}>
        {loading? <p style={{ opacity:0.5, padding:'40px 0' }}>🤖 7 Agents writing full guide + finding videos...</p> : g? (
          <>
            <p style={{ fontSize:'12px', opacity:0.4 }}>{data.timed} • {data.source} • Full Guide • Video + Steps</p>

            <div style={{ marginTop:'16px' }}>
              <div style={{ display:'flex', gap:'8px', alignItems:'center' }}>
                <span style={{ fontSize:'11px', background:'#000', color:'#fff', padding:'4px 10px', borderRadius:'20px' }}>{g.agent} Full Guide</span>
                <span style={{ fontSize:'11px', opacity:0.5 }}>{g.cat} • {g.difficulty} • ⏱️ {g.time}</span>
              </div>
              <h1 style={{ fontSize:'28px', lineHeight:'1.2', margin:'12px 0 8px' }}>{g.title}</h1>
              <p style={{ fontSize:'16px', opacity:0.7, lineHeight:'1.5' }}>{g.summary}</p>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginTop:'16px' }}>
                {g.ingredients?.length>0 && <div style={{ background:'#f9f9f9', padding:'14px', borderRadius:'12px' }}><b style={{ fontSize:'12px' }}>📦 Ingredients/Needed:</b><ul style={{ margin:'8px 0 0', paddingLeft:'16px', fontSize:'13px' }}>{g.ingredients.map((x,i)=><li key={i}>{x}</li>)}</ul></div>}
                {g.tools?.length>0 && <div style={{ background:'#f9f9f9', padding:'14px', borderRadius:'12px' }}><b style={{ fontSize:'12px' }}>🔧 Tools:</b><ul style={{ margin:'8px 0 0', paddingLeft:'16px', fontSize:'13px' }}>{g.tools.map((x,i)=><li key={i}>{x}</li>)}</ul></div>}
              </div>

              <div style={{ marginTop:'24px' }}>
                <h3 style={{ fontSize:'18px' }}>Step-by-Step Process</h3>
                {g.steps?.map(s=>(
                  <div key={s.step} style={{ borderLeft:'3px solid #000', paddingLeft:'16px', marginTop:'18px' }}>
                    <h4 style={{ margin:0, fontSize:'16px' }}>Step {s.step}: {s.title}</h4>
                    <p style={{ margin:'6px 0 0', fontSize:'14px', lineHeight:'1.6' }}>{s.detail}</p>
                    {s.tip && <p style={{ margin:'8px 0 0', fontSize:'12px', background:'#fff7d6', padding:'8px 12px', borderRadius:'8px' }}>💡 Pro: {s.tip}</p>}
                  </div>
                ))}
              </div>

              <div style={{ marginTop:'24px', display:'grid', gap:'12px' }}>
                <div style={{ background:'#f0f8ff', padding:'14px', borderRadius:'12px' }}><b style={{ fontSize:'12px' }}>🧪 Why This Works:</b><p style={{ margin:'6px 0 0', fontSize:'13px' }}>{g.why}</p></div>
                <div style={{ background:'#f0fff0', padding:'14px', borderRadius:'12px' }}><b style={{ fontSize:'12px' }}>🏆 Grandma Pro Tips:</b><ul style={{ margin:'6px 0 0', paddingLeft:'16px', fontSize:'13px' }}>{g.proTips?.map((t,i)=><li key={i}>{t}</li>)}</ul></div>
                <div style={{ background:'#fff0f0', padding:'14px', borderRadius:'12px' }}><b style={{ fontSize:'12px' }}>❌ Avoid Mistakes:</b><ul style={{ margin:'6px 0 0', paddingLeft:'16px', fontSize:'13px' }}>{g.mistakes?.map((t,i)=><li key={i}>{t}</li>)}</ul></div>
              </div>

              <div style={{ marginTop:'24px' }}>
                <h3 style={{ fontSize:'18px' }}>📺 Video Guides</h3>
                <div style={{ background:'#000', borderRadius:'16px', overflow:'hidden', marginTop:'12px' }}>
                  <iframe width="100%" height="360" src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(g.videoQuery)}`} title="Video" frameBorder="0" allowFullScreen style={{ display:'block' }}></iframe>
                </div>
                <p style={{ fontSize:'11px', opacity:0.4, marginTop:'8px' }}>Videos from YouTube: {g.videoQuery}</p>
                <div style={{ display:'flex', gap:'8px', marginTop:'10px', flexWrap:'wrap' }}>
                  <a target="_blank" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(g.videoQuery)}`} style={{ padding:'8px 14px', background:'#000', color:'#fff', borderRadius:'20px', textDecoration:'none', fontSize:'12px' }}>▶️ Watch on YouTube</a>
                  <a target="_blank" href={`https://www.google.com/search?q=${encodeURIComponent(g.videoQuery)}`} style={{ padding:'8px 14px', background:'#eee', color:'#000', borderRadius:'20px', textDecoration:'none', fontSize:'12px' }}>🔍 Google Videos</a>
                </div>
              </div>

              <div style={{ marginTop:'24px' }}>
                <h4 style={{ fontSize:'14px' }}>Related Searches</h4>
                <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginTop:'8px' }}>
                  {g.related?.map(r=><Link key={r} href={`/search?q=${encodeURIComponent(r)}`} style={{ padding:'8px 14px', background:'#f2f2f2', borderRadius:'20px', fontSize:'12px', textDecoration:'none', color:'#000' }}>{r}</Link>)}
                </div>
              </div>

              <div style={{ marginTop:'30px', padding:'18px', background:'#000', color:'#fff', borderRadius:'16px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div><b>Want daily guides like this at 9am?</b><p style={{ margin:'4px 0 0', opacity:0.6, fontSize:'12px' }}>oldhint.com/admin controls 7 Agents</p></div>
                <button onClick={()=>navigator.clipboard.writeText(window.location.href)} style={{ padding:'10px 16px', borderRadius:'20px', background:'#fff', color:'#000', border:'none', fontWeight:'bold', fontSize:'12px' }}>Copy Link</button>
              </div>
            </div>
          </>
        ) : <p>Search something...</p>}
      </div>
    </main>
  );
}
export default function SearchPage() { return <Suspense fallback={<div>Loading...</div>}><SearchContent /></Suspense>; }
