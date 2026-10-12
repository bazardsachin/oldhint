"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function Content() {
  const params = useSearchParams();
  const q = params.get("q") || "";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newQ, setNewQ] = useState(q);

  useEffect(() => {
    if (!q) { setLoading(false); return; }
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then(r=>r.json())
      .then(d=>{ setData(d); setLoading(false); })
      .catch(()=>setLoading(false));
  }, [q]);

  const g = data?.answers?.[0];

  return (
    <main style={{ minHeight:'100vh', background:'#fff', color:'#000', fontFamily:'system-ui' }}>
      <header style={{ borderBottom:'1px solid #eee', padding:'14px 20px', position:'sticky', top:0, background:'#fff', zIndex:10 }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', display:'flex', alignItems:'center', gap:'20px' }}>
          <Link href="/" style={{ fontWeight:'800', fontSize:'22px', textDecoration:'none', color:'#000' }}>oldhint</Link>
          <form onSubmit={e=>{ e.preventDefault(); location.href=`/search?q=${encodeURIComponent(newQ)}`; }} style={{ flex:1, maxWidth:'600px', display:'flex', gap:'10px' }}>
            <input value={newQ} onChange={e=>setNewQ(e.target.value)} placeholder="Search full guides..." style={{ flex:1, padding:'12px 18px', borderRadius:'24px', border:'1px solid #ddd', outline:'none', fontSize:'14px' }} />
            <button style={{ padding:'12px 20px', borderRadius:'24px', background:'#000', color:'#fff', border:'none', fontWeight:'bold', cursor:'pointer' }}>Search</button>
          </form>
        </div>
      </header>

      <div style={{ maxWidth:'800px', margin:'0 auto', padding:'20px' }}>
        {loading? <p style={{ padding:'40px 0', opacity:0.5 }}>🔍 Building full guide + videos for "{q}"... 7 Agents working...</p> : g && (
          <>
            <p style={{ fontSize:'12px', opacity:0.4 }}>{data.timed} • {data.source} • Full Guide • Steps + Video</p>
            <span style={{ fontSize:'11px', background:'#000', color:'#fff', padding:'5px 12px', borderRadius:'20px', fontWeight:'bold' }}>{g.agent} • {g.cat} • {g.difficulty} • ⏱️ {g.time}</span>
            <h1 style={{ fontSize:'30px', margin:'14px 0 8px', lineHeight:'1.2', letterSpacing:'-0.5px' }}>{g.title}</h1>
            <p style={{ fontSize:'16px', opacity:0.7, lineHeight:'1.6' }}>{g.summary}</p>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginTop:'18px' }}>
              <div style={{ background:'#f9f9f9', padding:'16px', borderRadius:'14px', border:'1px solid #eee' }}>
                <b style={{ fontSize:'12px' }}>📦 Ingredients / You Need:</b>
                <ul style={{ margin:'10px 0 0', paddingLeft:'18px', fontSize:'13px', lineHeight:'1.7' }}>
                  {g.ingredients?.map((x,i)=><li key={i}>{x}</li>)}
                </ul>
              </div>
              <div style={{ background:'#f9f9f9', padding:'16px', borderRadius:'14px', border:'1px solid #eee' }}>
                <b style={{ fontSize:'12px' }}>🔧 Tools:</b>
                <ul style={{ margin:'10px 0 0', paddingLeft:'18px', fontSize:'13px', lineHeight:'1.7' }}>
                  {g.tools?.map((x,i)=><li key={i}>{x}</li>)}
                </ul>
              </div>
            </div>

            <div style={{ marginTop:'32px' }}>
              <h2 style={{ fontSize:'22px', margin:0 }}>Step-by-Step Process</h2>
              {g.steps?.map(s=>(
                <div key={s.step} style={{ borderLeft:'4px solid #000', paddingLeft:'18px', marginTop:'24px' }}>
                  <h3 style={{ margin:0, fontSize:'17px' }}>Step {s.step}: {s.title}</h3>
                  <p style={{ margin:'10px 0 0', fontSize:'15px', lineHeight:'1.7', color:'#222' }}>{s.detail}</p>
                  {s.tip && <p style={{ margin:'12px 0 0', fontSize:'12px', background:'#fff8c5', padding:'10px 14px', borderRadius:'8px', border:'1px solid #f0e6a0' }}>💡 Pro Tip: {s.tip}</p>}
                </div>
              ))}
            </div>

            <div style={{ marginTop:'32px', display:'grid', gap:'14px' }}>
              <div style={{ background:'#eef6ff', padding:'18px', borderRadius:'14px', border:'1px solid #d6e8ff' }}>
                <b style={{ fontSize:'13px' }}>🧪 Why This Works:</b>
                <p style={{ margin:'10px 0 0', fontSize:'14px', lineHeight:'1.6' }}>{g.why}</p>
              </div>
              <div style={{ background:'#eefff0', padding:'18px', borderRadius:'14px', border:'1px solid #c8efc8' }}>
                <b style={{ fontSize:'13px' }}>🏆 Grandma Pro Tips:</b>
                <ul style={{ margin:'10px 0 0', paddingLeft:'18px', fontSize:'14px', lineHeight:'1.8' }}>
                  {g.proTips?.map((t,i)=><li key={i}>{t}</li>)}
                </ul>
              </div>
              <div style={{ background:'#ffefef', padding:'18px', borderRadius:'14px', border:'1px solid #ffcccc' }}>
                <b style={{ fontSize:'13px' }}>❌ Avoid Mistakes:</b>
                <ul style={{ margin:'10px 0 0', paddingLeft:'18px', fontSize:'14px', lineHeight:'1.8' }}>
                  {g.mistakes?.map((t,i)=><li key={i}>{t}</li>)}
                </ul>
              </div>
            </div>

            <div style={{ marginTop:'36px' }}>
              <h2 style={{ fontSize:'20px', margin:0 }}>📺 Video Guides</h2>
              <p style={{ fontSize:'12px', opacity:0.5, marginTop:'6px' }}>Click to watch on YouTube - {g.videoQuery}</p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'12px', marginTop:'14px' }}>
                {[
                  { t:`${g.title}`, d:"Full Process", views:"1.2M views" },
                  { t:`Grandma Secret for ${q}`, d:"Old Way", views:"850K views" },
                  { t:`Easy ${q} at Home`, d:"Quick Fix", views:"2.1M views" }
                ].map((v,i)=>(
                  <a key={i} target="_blank" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(g.videoQuery + " recipe tutorial")}`} style={{ textDecoration:'none', color:'#000', background:'#fff', borderRadius:'14px', overflow:'hidden', display:'block', border:'1px solid #eee', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
                    <div style={{ background:'#111', height:'120px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'#fff', position:'relative' }}>
                      <span style={{ fontSize:'36px' }}>▶️</span>
                      <span style={{ fontSize:'10px', opacity:0.6, marginTop:'8px', background:'rgba(255,255,255,0.15)', padding:'3px 8px', borderRadius:'10px' }}>{v.views}</span>
                      <span style={{ position:'absolute', bottom:'8px', right:'8px', fontSize:'10px', background:'rgba(0,0,0,0.8)', padding:'3px 6px', borderRadius:'4px' }}>YouTube</span>
                    </div>
                    <div style={{ padding:'12px' }}>
                      <p style={{ margin:0, fontSize:'12px', fontWeight:'bold', lineHeight:'1.3' }}>{v.t.slice(0,45)}</p>
                      <p style={{ margin:'6px 0 0', fontSize:'10px', opacity:0.5 }}>{v.d} • {g.videoQuery}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{ display:'flex', gap:'10px', marginTop:'16px', flexWrap:'wrap' }}>
                <a target="_blank" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(g.videoQuery)}`} style={{ padding:'12px 22px', background:'#ff0000', color:'#fff', borderRadius:'24px', textDecoration:'none', fontWeight:'bold', fontSize:'13px' }}>▶️ Watch Full Videos on YouTube</a>
                <a target="_blank" href={`https://www.google.com/search?q=${encodeURIComponent(g.videoQuery + " video")}`} style={{ padding:'12px 22px', background:'#f2f2f2', color:'#000', borderRadius:'24px', textDecoration:'none', fontWeight:'bold', fontSize:'13px', border:'1px solid #ddd' }}>🔍 Google Videos</a>
              </div>
            </div>

            <div style={{ marginTop:'36px', padding:'20px', background:'#000', color:'#fff', borderRadius:'16px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <b style={{ fontSize:'15px' }}>Like this full guide?</b>
                <p style={{ margin:'6px 0 0', opacity:0.6, fontSize:'12px' }}>oldhint.com • Google for grandma wisdom • 7 Agents • Daily 9am post</p>
              </div>
              <button onClick={()=>navigator.clipboard.writeText(window.location.href)} style={{ padding:'12px 18px', borderRadius:'24px', background:'#fff', color:'#000', border:'none', fontWeight:'bold', fontSize:'12px', cursor:'pointer' }}>Copy Link</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default function Page(){
  return <Suspense fallback={<div style={{ padding:'40px', fontFamily:'system-ui' }}>Loading OldHint Search...</div>}><Content /></Suspense>;
}
