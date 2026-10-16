"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home(){
  return(
    <div style={{background:"#FFFDF7",minHeight:"100vh",color:"#111",fontFamily:"Inter, sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap');
      @keyframes slowZoom{0%{transform:scale(1)}100%{transform:scale(1.08)}}`}</style>

      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 24px",borderBottom:"1px solid #e5e1d8",position:"sticky",top:0,background:"#FFFDF7",zIndex:20}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"36px",height:"36px",background:"#111",color:"#FFFDF7",display:"grid",placeItems:"center",fontWeight:"900",borderRadius:"8px"}}>OH</div>
          <div><div style={{fontWeight:"900",fontSize:"18px",lineHeight:"1"}}>OldHint</div><div style={{fontSize:"9px",letterSpacing:"2px",opacity:0.6}}>THE LOST KNOWLEDGE</div></div>
        </div>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
          <span style={{fontSize:"12px",opacity:0.7}}>51 tricks live • 3 families • Calgary T3J</span>
          <Link href="/vault" style={{border:"1px solid #111",padding:"8px 14px",borderRadius:"999px",textDecoration:"none",color:"#111",fontSize:"12px"}}>Explore Vault</Link>
          <Link href="/admin" style={{background:"#111",color:"#fff",padding:"8px 16px",borderRadius:"999px",textDecoration:"none",fontSize:"12px",fontWeight:"700"}}>Create Your Family</Link>
        </div>
      </header>

      <div style={{maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:"24px",padding:"28px 24px",alignItems:"center"}}>
        <div>
          <div style={{display:"inline-block",background:"#111",color:"#fff",padding:"6px 12px",borderRadius:"999px",fontSize:"11px",letterSpacing:"1px"}}>FOR FAMILIES WHO DON'T WANT TO FORGET</div>
          <h1 style={{fontFamily:"Fraunces, serif",fontSize:"62px",fontWeight:"900",lineHeight:"0.95",marginTop:"14px",letterSpacing:"-1.5px"}}>Your grandpa's<br/>tricks.<br/><span style={{fontStyle:"italic",fontWeight:"700"}}>Not on Google.</span><br/>In your kids' hands.</h1>
          <p style={{marginTop:"14px",fontSize:"17px",lineHeight:"1.5",color:"#444",maxWidth:"480px"}}>OldHint is a private family forest. Record how Dada fixed 350 engine at home in 1972. How Nani made pickles in 21 days. In motion — video, voice, hands. Your kids find it when they need it. 100 years from now.</p>
          <div style={{marginTop:"18px",display:"flex",gap:"10px"}}>
            <Link href="/admin" style={{background:"#111",color:"#fff",padding:"14px 22px",borderRadius:"999px",textDecoration:"none",fontWeight:"800",fontSize:"14px"}}>Start Your Family Tree — Free</Link>
            <div style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",color:"#555"}}><div style={{width:"32px",height:"32px",borderRadius:"50%",background:"#ddd"}}></div><div><b>1,200 families</b><br/>already preserving</div></div>
          </div>
          <div style={{marginTop:"18px",display:"flex",gap:"18px",fontSize:"12px",color:"#666"}}>
            <div><b style={{color:"#111"}}>Root</b> Dada — Elder, approver</div>
            <div><b style={{color:"#111"}}>Trunk</b> Papa — Keeper, writer</div>
            <div><b style={{color:"#111"}}>Branch</b> You — Explorer, recorder</div>
            <div><b style={{color:"#111"}}>Leaf</b> Kids — Finders</div>
          </div>
        </div>

        <div style={{position:"relative",borderRadius:"20px",overflow:"hidden",border:"2px solid #111",height:"520px",background:"#000"}}>
          <div style={{position:"absolute",inset:0,display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1.2fr 0.8fr",gap:"2px"}}>
            <div style={{background:"#f5d6a0",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(0,0,0,0.6), transparent)",zIndex:1}}></div>
              <div style={{width:"100%",height:"100%",display:"grid",placeItems:"center",fontSize:"48px",animation:"slowZoom 8s ease-in-out infinite alternate"}}>🔧</div>
              <div style={{position:"absolute",bottom:"10px",left:"10px",zIndex:2,color:"#fff"}}><div style={{fontSize:"11px",background:"rgba(0,0,0,0.6)",padding:"4px 8px",borderRadius:"20px"}}>🔴 LIVE MOTION</div><div style={{fontWeight:"800",fontSize:"13px",marginTop:"4px"}}>Dada building 1969 Charger — Calgary garage — 1972</div><div style={{fontSize:"11px",opacity:0.8}}>Wrench turning • Hands moving • No shop</div></div>
            </div>
            <div style={{background:"#cfe9c8",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(0,0,0,0.6), transparent)",zIndex:1}}></div>
              <div style={{width:"100%",height:"100%",display:"grid",placeItems:"center",fontSize:"48px"}}>🥒</div>
              <div style={{position:"absolute",bottom:"10px",left:"10px",zIndex:2,color:"#fff"}}><div style={{fontSize:"11px",background:"rgba(0,0,0,0.6)",padding:"4px 8px",borderRadius:"20px"}}>🔴 LIVE MOTION</div><div style={{fontWeight:"800",fontSize:"13px",marginTop:"4px"}}>Nani making pickles — 21 days — Punjab to Delhi</div><div style={{fontSize:"11px",opacity:0.8}}>Hands mixing • Jars in sun</div></div>
            </div>
            <div style={{background:"#e8ddd0",position:"relative"}}>
              <div style={{width:"100%",height:"100%",display:"grid",placeItems:"center",fontSize:"36px"}}>🧀</div>
              <div style={{position:"absolute",bottom:"8px",left:"8px",fontSize:"11px",fontWeight:"700"}}>Biji — Cheese at home — No store — 1968</div>
            </div>
            <div style={{background:"#111",color:"#fff",display:"grid",placeItems:"center",padding:"12px",textAlign:"center"}}>
              <div><div style={{fontSize:"32px"}}>🌳</div><div style={{fontWeight:"800",fontSize:"13px",marginTop:"6px"}}>Bazard Family — Est. 1980 Calgary T3J</div><div style={{fontSize:"11px",opacity:0.7,marginTop:"4px"}}>3 gen • 51 tricks • 1,200 families follow</div><div style={{marginTop:"8px",display:"flex",gap:"6px",justifyContent:"center"}}><span style={{background:"#fff",color:"#111",padding:"4px 8px",borderRadius:"20px",fontSize:"10px",fontWeight:"700"}}>Follow Family</span><span style={{border:"1px solid #fff",padding:"4px 8px",borderRadius:"20px",fontSize:"10px"}}>Ask Elder</span></div></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth:"1200px",margin:"10px auto",padding:"0 24px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
        <div style={{border:"1.5px solid #111",borderRadius:"14px",padding:"14px",background:"#fff"}}>
          <div style={{fontSize:"11px",letterSpacing:"1px",opacity:0.6}}>HOW IT WORKS • 60 SECONDS</div>
          <div style={{marginTop:"8px",fontWeight:"800"}}>1. Create Family Tree</div><div style={{fontSize:"13px",color:"#555",marginTop:"2px"}}>Bazard Family — Est. 1980 — Add Dada, Papa, You, Kids. Each is a branch.</div>
          <div style={{marginTop:"10px",fontWeight:"800"}}>2. Record in Motion</div><div style={{fontSize:"13px",color:"#555",marginTop:"2px"}}>Not text. Video of hands fixing 350 engine. Voice of Nani. Motion matters.</div>
          <div style={{marginTop:"10px",fontWeight:"800"}}>3. Kids Find Forever</div><div style={{fontSize:"13px",color:"#555",marginTop:"2px"}}>Private vault. Google can't find. Grandkids ask: "How did Dada fix it?" — Answer is there.</div>
        </div>
        <div style={{border:"1.5px solid #111",borderRadius:"14px",padding:"14px",background:"#00FF88"}}>
          <div style={{fontWeight:"900",fontSize:"16px"}}>Why families love it</div>
          <div style={{marginTop:"8px",fontSize:"13px",lineHeight:"1.5"}}>"My dad's 1969 Charger trick would have died with him. Now my son in Calgary watched it and fixed his own." — Singh Family, Punjab<br/><br/>"We saved 12 cheese tricks from Biji. Grocery store cheese tastes fake now." — Sharma Family</div>
        </div>
        <div style={{border:"1.5px solid #111",borderRadius:"14px",padding:"14px",background:"#fff"}}>
          <div style={{fontWeight:"800"}}>What you get</div>
          <div style={{marginTop:"8px",fontSize:"13px",lineHeight:"1.6"}}>
            <b>Free:</b> Create tree, add 3 tricks, follow 5 families<br/>
            <b>$7 Heirloom:</b> PDF of 51 tricks, like grandma's diary<br/>
            <b>$49 Vault/year:</b> Unlimited videos, private, 10 tricks preserved for 100 yrs<br/>
            <b>$299 Legacy:</b> Your own smith.oldhint.com — Your family name website
          </div>
          <Link href="/admin" style={{display:"block",marginTop:"10px",background:"#111",color:"#fff",textAlign:"center",padding:"10px",borderRadius:"999px",textDecoration:"none",fontWeight:"800",fontSize:"13px"}}>Start Free — Add Your First Trick</Link>
        </div>
      </div>

      <div style={{textAlign:"center",padding:"30px 20px",borderTop:"1px solid #e5e1d8",marginTop:"20px"}}>
        <div style={{fontFamily:"Fraunces, serif",fontSize:"22px",fontWeight:"700"}}>OldHint — The lost knowledge — Not on Google. In your family.</div>
        <div style={{fontSize:"12px",color:"#888",marginTop:"6px"}}>Calgary T3J HQ • Built by 8 AI employees • For kids who will ask</div>
      </div>
    </div>
  );
}
