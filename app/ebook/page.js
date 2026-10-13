"use client";
import { useState } from "react";
import Link from "next/link";

export default function Ebook() {
  const [load, setLoad] = useState(false);
  const buy = async () => {
    setLoad(true);
    try {
      const r = await fetch("/api/checkout", { method:"POST" });
      const d = await r.json();
      if(d.url) window.location.href = d.url;
      else { alert("Stripe error - check Vercel env var!"); setLoad(false); }
    } catch(e){ alert("Error: "+e.message); setLoad(false); }
  };
  return (
    <main style={{ minHeight:'100vh', background:'#FFFEF7', color:'#000', fontFamily:'system-ui', padding:'20px' }}>
      <div style={{ maxWidth:'600px', margin:'60px auto', textAlign:'center' }}>
        <h1 style={{ fontSize:'34px', fontWeight:'900', marginBottom:'10px' }}>101 Old Hints That Still Work - $7 Ebook</h1>
        <p style={{ opacity:0.6 }}>Grandma wisdom • Food • Home • Cleaning • Car • Money • Videos</p>
        <button onClick={buy} style={{ width:'100%', marginTop:'30px', background:'#000', color:'#fff', padding:'20px', borderRadius:'14px', border:'none', fontWeight:'bold', fontSize:'18px', cursor:'pointer' }}>
          {load ? "Opening Stripe... Wait" : "Buy $7 - Instant PDF Download"}
        </button>
        <p style={{ fontSize:'11px', opacity:0.4, marginTop:'10px' }}>Secure Stripe • Test card: 4242 4242 4242 4242 • Exp 12/34 • 123</p>
        <Link href="/" style={{ display:'inline-block', marginTop:'20px', color:'#6b46c1', textDecoration:'underline' }}>← Back to Explore</Link>
      </div>
    </main>
  );
}
