"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home(){
  const [q,setQ]=useState("");
  const count=51;
  return (
    <div style={{background:"#FFFEF7",minHeight:"100vh",fontFamily:"Georgia, serif"}}>
      {/* HEADER — APPEALING LOGO OldHint "the lost knowledge" */}
      <header style={{maxWidth:"1200px",margin:"0 auto",padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #eee"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <div style={{width:"44px",height:"44px",background:"#0a0a0a",color:"#FFFEF7",display:"grid",placeItems:"center",borderRadius:"10px",fontWeight:"900",fontSize:"22px"}}>OH</div>
          <div>
            <div style={{fontWeight:"900",fontSize:"26px",letterSpacing:"-0.5px",fontFamily:"Inter, sans-serif",lineHeight:"1"}}>OldHint</div>
            <div style={{fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:"#888",fontFamily:"Inter, sans-serif"}}>the lost knowledge</div>
          </div>
        </div>
        <nav style={{display:"flex",gap:"18px",fontFamily:"Inter, sans-serif",fontSize:"14px",alignItems:"center"}}>
          <Link href="/vault" style={{textDecoration:"none",color:"#111",fontWeight:"600"}}>Family Vault</Link>
          <Link href="/family" style={{textDecoration:"none",color:"#111",fontWeight:"600"}}>Families</Link>
          <Link href="/feed" style={{textDecoration:"none",color:"#111",fontWeight:"600"}}>Feed</Link>
          <Link href="/time-machine" style={{textDecoration:"none",color:"#111"}}>Time Machine</Link>
          <Link href="/admin" style={{background:"#111",color:"#fff",padding:"8px 14px",borderRadius:"999px",textDecoration:"none",fontWeight:"700"}}>Corporate HQ • {count} LIVE</Link>
        </nav>
      </header>

      <main style={{maxWidth:"1200px",margin:"0 auto",padding:"40px 24px"}}>
        {/* HERO — ROADMAP HEADLINE */}
        <div style={{textAlign:"center",marginTop:"20px"}}>
          <div style={{display:"inline-block",background:"#111",color:"#FFFEF7",padding:"6px 12px",borderRadius:"999px",fontSize:"11px",letterSpacing:"1px",fontFamily:"Inter, sans-serif"}}>CALGARY T3J HQ • 8 AI EMPLOYEES • PRODUCT HUNT OCT 13 12:01 AM PT</div>
          <h1 style={{fontSize:"64px",fontWeight:"900",lineHeight:"0.95",margin:"18px 0 0",letterSpacing:"-1.5px"}}>Google forgets.<br/>Grandmothers<br/>remember.</h1>
          <p style={{fontFamily:"Inter, sans-serif",fontSize:"18px",color:"#555",marginTop:"16px"}}><b style={{color:"#111"}}>{count} tricks from 1920-1990</b>, preserved for your kids. Your family tree of secrets — like grandpa fixing 350 engine at home.</p>

          {/* SEARCH BAR KEPT AS IS — YOUR REQUEST */}
          <div style={{maxWidth:"640px",margin:"28px auto 0",display:"flex",gap:"10px"}}>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder={`Search ${count} timeless hints — e.g. keep rotis soft, fix 350 engine, make cheese at home`} style={{flex:1,padding:"18px 20px",borderRadius:"999px",border:"2px solid #111",fontSize:"15px",fontFamily:"Inter, sans-serif",background:"#fff"}}/>
            <Link href={`/search?q=${q}`} style={{background:"#00FF88",color:"#111",padding:"0 28px",borderRadius:"999px",fontWeight:"900",textDecoration:"none",display:"grid",placeItems:"center",fontFamily:"Inter, sans-serif"}}>Search</Link>
          </div>

          <div style={{marginTop:"18px",display:"flex",justifyContent:"center",gap:"18px",fontFamily:"Inter, sans-serif",fontSize:"13px",color:"#666"}}>
            <span>⏳ 40 years old</span><span>👨‍👩‍👧 3 generations</span><span>✅ 1200+ families</span><span>📜 Calgary T3J HQ • Founder Sachin Bazard</span>
          </div>
        </div>

        {/* FAMILY TREE VISUAL — YOUR CONCEPT */}
        <div style={{marginTop:"48px",display:"grid",gridTemplateColumns:"320px 1fr 300px",gap:"18px"}}>
          {/* LEFT TREE */}
          <div style={{background:"#fff",border:"1.5px solid #111",borderRadius:"20px",padding:"18px",fontFamily:"Inter, sans-serif"}}>
            <div style={{fontWeight:"800",fontSize:"14px"}}>Bazard Family Tree — Est. 1980</div>
            <div style={{marginTop:"14px",fontSize:"13px",lineHeight:"1.8"}}>
              <div>🌳 <b>Root: Dada</b> — Elder • Approver — 1920s<br/><span style={{color:"#0a5cff"}}>└ How to fix 350 engine at home 1972</span></div>
              <div style={{marginLeft:"18px",marginTop:"8px"}}>🌿 <b>Trunk: Papa</b> — Keeper • Writer — 1960s<br/><span style={{color:"#0a5cff"}}>└ Keep rice fresh without fridge</span></div>
              <div style={{marginLeft:"36px",marginTop:"8px"}}>🍃 <b>Branch: You</b> — Explorer • Calgary T3J<br/><span style={{color:"#0a5cff"}}>└ Keep cilantro fresh 7 days — 51st LIVE</span></div>
              <div style={{marginLeft:"36px",marginTop:"8px"}}>🍃 Leaf: Kids — Next gen</div>
              <button style={{marginTop:"12px",width:"100%",padding:"10px",borderRadius:"999px",border:"1px solid #111",background:"#fff",fontWeight:"700",cursor:"pointer"}}>+ Add Member Branch</button>
            </div>
          </div>

          {/* CENTER FEED — FB/INSTA STYLE BUT FOR FAMILY SECRETS */}
          <div style={{display:"flex",flexDirection:"column",gap:"14px",fontFamily:"Inter, sans-serif"}}>
            <div style={{background:"#fff",border:"1.5px solid #111",borderRadius:"20px",padding:"16px"}}>
              <div style={{display:"flex",justifyContent:"space-between"}}><b>Bazard Family • 1960s • 3 gen</b><button style={{background:"#111",color:"#fff",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",border:"none"}}>Follow Family</button></div>
              <div style={{marginTop:"8px",fontWeight:"800",fontSize:"18px",fontFamily:"Georgia, serif"}}>📹 How my grandpa fixed 350 Chevy engine at home — No shop needed — 1972 Calgary</div>
              <div style={{marginTop:"6px",fontSize:"12px",background:"#FFFEF7",border:"1px solid #eee",display:"inline-block",padding:"4px 8px",borderRadius:"8px"}}>⏳ 52 yrs • 👨‍👩‍👧 3 gen • ✅ 1200 families • Era: 1970s • Origin: Punjab→Calgary</div>
              <div style={{marginTop:"10px",display:"flex",gap:"12px",fontSize:"13px"}}><span>❤️ 234</span><span>💬 12 comments</span><span>📩 Text Family</span><span>🔖 Save to my Vault</span><span>👥 Friend Family</span></div>
            </div>

            <div style={{background:"#fff",border:"1.5px solid #111",borderRadius:"20px",padding:"16px"}}>
              <div style={{display:"flex",justifyContent:"space-between"}}><b>Sharma Family • Delhi 1965 • 4 gen</b><button style={{background:"#fff",color:"#111",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",border:"1px solid #111"}}>Follow</button></div>
              <div style={{marginTop:"8px",fontWeight:"800",fontSize:"18px",fontFamily:"Georgia, serif"}}>🧀 Grandma's cheese at home trick without store — Daily necessity</div>
              <div style={{marginTop:"6px",fontSize:"13px",color:"#555"}}>Stories • Videos • Posts — People follow for secret family hints. Limitless day to day necessities.</div>
            </div>

            <div style={{background:"#00FF88",border:"1.5px solid #111",borderRadius:"20px",padding:"16px"}}>
              <b>51st LIVE — Your Agent Published Today:</b> keep-cilantro-fresh-7-days — 1960s — Auto-published by Publisher Agent in 30 sec — View at /hint/keep-cilantro-fresh-7-days
            </div>
          </div>

          {/* RIGHT SUGGESTED FAMILIES */}
          <div style={{background:"#fff",border:"1.5px solid #111",borderRadius:"20px",padding:"18px",fontFamily:"Inter, sans-serif",height:"fit-content"}}>
            <div style={{fontWeight:"800"}}>Suggested Families</div>
            <div style={{marginTop:"12px",display:"flex",flexDirection:"column",gap:"12px",fontSize:"13px"}}>
              <div><b>Singh Family</b> • 12 secrets • 3 gen • 350 engine trick <br/><button style={{marginTop:"4px",padding:"4px 10px",borderRadius:"999px",border:"1px solid #111",background:"#fff"}}>Follow Family</button></div>
              <div><b>Patel Family</b> • 8 secrets • Keep rotis soft<br/><button style={{marginTop:"4px",padding:"4px 10px",borderRadius:"999px",border:"1px solid #111",background:"#fff"}}>Follow</button></div>
              <div><b>Your Vault</b> • Save tricks from families you follow — Like Instagram Save but for wisdom</div>
            </div>
            <div style={{marginTop:"16px",borderTop:"1px solid #eee",paddingTop:"12px"}}>
              <div style={{fontWeight:"800"}}>Pricing — Roadmap</div>
              <div style={{fontSize:"12px",marginTop:"6px"}}><b>$7 Heirloom Ebook</b> — Own forever<br/><b>$49 Family Vault/year</b> — Preserve 10 tricks<br/><b>$299 Legacy Website</b> — smith.oldhint.com</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{marginTop:"40px",textAlign:"center",fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#888"}}>
          OldHint — the lost knowledge • Founder Sachin Bazard — Calgary T3J HQ • 8 AI Employees Online • GitHub bazardsachin/oldhint • Phase 1: 51→100 hints, $7 ebook • Phase 2: 1000 hints $19 pro + $99 API
        </div>
      </main>
    </div>
  );
}
