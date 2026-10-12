"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [q, setQ] = useState("");
  return (
    <main style={{ minHeight:'100vh', background:'#fff', color:'#000', fontFamily:'system-ui', padding:'20px' }}>
      <header style={{ display:'flex', justifyContent:'space-between', maxWidth:'1200px', margin:'0 auto 40px', fontSize:'13px' }}>
        <Link href="/" style={{ fontWeight:'bold', textDecoration:'none', color:'#000', fontSize:'18px' }}>oldhint</Link>
        <Link href="/admin" style={{ color:'#000', opacity:0.6, textDecoration:'none' }}>Admin</Link>
      </header>
      <div style={{ maxWidth:'700px', margin:'60px auto 0', textAlign:'center' }}>
        <h1 style={{ fontSize:'56px', fontWeight:'800', letterSpacing:'-3px', margin:0 }}>oldhint</h1>
        <p style={{ opacity:0.5, marginTop:'8px' }}>Google for grandma wisdom • biryani to 350 engine</p>
        <div style={{ marginTop:'30px', display:'flex', gap:'10px' }}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="how to make biryani, remove coffee stain..." style={{ flex:1, padding:'18px 22px', borderRadius:'30px', border:'1px solid #ddd', fontSize:'16px', outline:'none' }} />
          <Link href={`/search?q=${encodeURIComponent(q)}`} style={{ padding:'18px 24px', borderRadius:'30px', background:'#000', color:'#fff', textDecoration:'none', fontWeight:'bold' }}>Search</Link>
        </div>
        <div style={{ display:'flex', gap:'8px', justifyContent:'center', flexWrap:'wrap', marginTop:'18px' }}>
          {["biryani","coffee stain","350 engine","zipper","old money"].map(t=>(
            <Link key={t} href={`/search?q=${encodeURIComponent("how to "+t)}`} style={{ padding:'7px 14px', borderRadius:'20px', background:'#f2f2f2', border:'1px solid #eee', fontSize:'12px', textDecoration:'none', color:'#000' }}>{t}</Link>
          ))}
        </div>
      </div>
      <footer style={{ maxWidth:'700px', margin:'80px auto 20px', textAlign:'center', fontSize:'11px', opacity:0.3 }}>OldHint 7 Agents • Sachin • Calgary</footer>
    </main>
  );
}
