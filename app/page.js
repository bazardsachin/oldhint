
"use client";
import { useState } from "react";
import Link from "next/link";
export default function Home(){
  const [q,setQ]=useState("");
  const count=6;
  return (<div style={{maxWidth:"1100px",margin:"0 auto",padding:"20px",fontFamily:"sans-serif"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><Link href="/" style={{fontWeight:"900",fontSize:"24px",color:"#000",textDecoration:"none"}}>OldHint Inc.</Link><div style={{display:"flex",gap:"12px"}}><Link href="/vault">Family Vault</Link><Link href="/family">Families</Link><Link href="/time-machine">Time Machine</Link><Link href="/admin" style={{background:"#000",color:"#fff",padding:"6px 12px",borderRadius:"8px"}}>Corporate HQ</Link></div></div>
    <div style={{marginTop:"60px",textAlign:"center"}}><h1 style={{fontSize:"52px",fontWeight:"900",lineHeight:"1.1"}}>Google forgets.<br/>Grandmothers remember.</h1><p style={{fontSize:"20px",color:"#555",marginTop:"16px"}}><b>{count} tricks from 1920-1990</b>, preserved for your kids. Built by 8 AI Employees in Calgary T3J.</p>
      <div style={{marginTop:"28px",maxWidth:"600px",marginInline:"auto",display:"flex",gap:"8px"}}><input value={q} onChange={e=>setQ(e.target.value)} placeholder={`Search ${count} timeless hints - e.g. keep rotis soft`} style={{flex:1,padding:"16px",borderRadius:"12px",border:"2px solid #000",fontSize:"16px"}}/><Link href={`/search?q=${q}`} style={{background:"#00ff88",color:"#000",padding:"16px 24px",borderRadius:"12px",fontWeight:"900",textDecoration:"none"}}>Search</Link></div>
      <div style={{marginTop:"20px",display:"flex",justifyContent:"center",gap:"20px",fontSize:"14px",color:"#333"}}><span>⏳ 40 years old</span><span>👨‍👩‍👧 3 generations</span><span>✅ 1200+ families</span><span>📜 Calgary T3J HQ</span></div></div>
    <div style={{marginTop:"40px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}><div style={{border:"2px solid #000",padding:"20px",borderRadius:"16px"}}><b>$7 Heirloom Ebook</b><p style={{fontSize:"13px"}}>Own forever, printable cards</p><Link href="/ebook" style={{background:"#000",color:"#fff",padding:"8px 16px",borderRadius:"8px",display:"inline-block",marginTop:"8px",textDecoration:"none"}}>Buy $7</Link></div><div style={{border:"2px solid #00aa55",padding:"20px",borderRadius:"16px"}}><b>$49 Family Vault /year</b><p style={{fontSize:"13px"}}>Preserve your family's 10 tricks</p><Link href="/family" style={{background:"#00aa55",color:"#fff",padding:"8px 16px",borderRadius:"8px",display:"inline-block",marginTop:"8px",textDecoration:"none"}}>Join 100 Families</Link></div><div style={{border:"2px solid #000",padding:"20px",borderRadius:"16px"}}><b>$299 Legacy Website</b><p style={{fontSize:"13px"}}>smith.oldhint.com</p></div></div>
    <div style={{marginTop:"30px",textAlign:"center"}}><p>Founder: Sachin Bazard — Calgary T3J HQ • 8 AI Employees Online • 【entity-GitHub¦canonical_name=GitHub】 bazardsachin/oldhint • PH Oct 13 12:01 AM PT • Phase 1: {count}→100 hints</p><p><Link href="/vault">Family Vault /vault</Link> • <Link href="/generations/1960s">1960s</Link> • <Link href="/time-machine">Time Machine 1920 vs 2024</Link></p></div>
  </div>);
}
