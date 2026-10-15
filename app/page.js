"use client";
import { useState } from "react";
import Link from "next/link";
export default function Home(){
  const [q,setQ]=useState("");
  const count=51;
  const stories=[{n:"Bazard",l:"B"},{n:"Sharma",l:"S"},{n:"Singh",l:"S"},{n:"Patel",l:"P"},{n:"You",l:"Y"}];
  return(
    <div style={{background:"#f0f2f5",minHeight:"100vh",fontFamily:"Inter, sans-serif"}}>
      <header style={{background:"#fff",height:"56px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",position:"sticky",top:0,boxShadow:"0 1px 2px rgba(0,0,0,0.1)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"40px",height:"40px",background:"#1877f2",color:"#fff",display:"grid",placeItems:"center",borderRadius:"50%",fontWeight:"900"}}>OH</div>
          <div><div style={{fontWeight:"900",fontSize:"20px"}}>OldHint</div><div style={{fontSize:"9px",letterSpacing:"1px",color:"#888"}}>the lost knowledge</div></div>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 51 family secrets - fix 350 engine, make cheese, rotis soft" style={{marginLeft:"12px",width:"320px",padding:"8px 14px",borderRadius:"999px",border:"none",background:"#f0f2f5"}}/>
        </div>
        <div style={{display:"flex",gap:"20px"}}><span>🏠</span><span>👥</span><span>📺</span></div>
        <Link href="/admin" style={{background:"#000",color:"#fff",padding:"8px 12px",borderRadius:"20px",textDecoration:"none",fontSize:"12px",fontWeight:"700"}}>Corporate HQ - 51 LIVE</Link>
      </header>
      <main style={{maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"280px 1fr 280px",gap:"16px",padding:"16px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px",fontSize:"13px"}}><b>Bazard Family - Est. 1980 Calgary T3J</b><div style={{marginTop:"8px",lineHeight:"1.8"}}>🌳 Root: Dada - Elder - Fix 350 engine at home 1972<br/>🌿 Trunk: Papa - Keeper - Keep rice fresh<br/>🍃 Branch: You - Explorer - 51 tricks<br/>🍃 Leaf: Kids - Next gen</div><button style={{marginTop:"8px",width:"100%",padding:"8px",borderRadius:"8px",border:"none",background:"#e7f3ff",color:"#1877f2",fontWeight:"700"}}>+ Add Branch Member</button></div>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px",fontSize:"12px"}}><b>Family Vault</b><br/>⏳ 40 years • 3 gen • 1200 families<br/>Google forgets. Grandmothers remember.</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px",display:"flex",gap:"12px",overflowX:"auto"}}>
            {stories.map(s=>(<div key={s.n} style={{textAlign:"center",minWidth:"70px"}}><div style={{width:"56px",height:"56px",borderRadius:"50%",background:"linear-gradient(45deg,#feda75,#d62976)",padding:"2px"}}><div style={{width:"52px",height:"52px",borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",fontWeight:"800"}}>{s.l}</div></div><div style={{fontSize:"11px",marginTop:"4px"}}>{s.n} Family</div></div>))}
          </div>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px",display:"flex",gap:"8px"}}><div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#000",color:"#fff",display:"grid",placeItems:"center"}}>S</div><input placeholder="Share a family secret - How grandpa fixed 350 engine?" style={{flex:1,background:"#f0f2f5",border:"none",borderRadius:"999px",padding:"10px 14px"}}/><button style={{background:"#1877f2",color:"#fff",border:"none",padding:"8px 16px",borderRadius:"8px",fontWeight:"700"}}>Post</button></div>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px"}}><div style={{display:"flex",justifyContent:"space-between"}}><div><b>Bazard Family</b><div style={{fontSize:"11px",color:"#666"}}>Calgary T3J - 3 gen - Elder Root Dada - Video 60s</div></div><div><button style={{background:"#e7f3ff",color:"#1877f2",border:"none",padding:"6px 12px",borderRadius:"6px",fontWeight:"700",fontSize:"12px"}}>Follow Family</button></div></div><div style={{marginTop:"8px",fontWeight:"700"}}>How my grandpa fixed 350 Chevy engine at home - No shop needed - 1972 Calgary</div><div style={{marginTop:"8px",height:"200px",background:"#e4e6eb",borderRadius:"8px",display:"grid",placeItems:"center"}}>📹 Video Placeholder</div><div style={{marginTop:"8px",fontSize:"12px",color:"#666"}}>❤️ 234 - 💬 12 comments - 🔖 Save to Vault - 📩 Text Family - 👥 Friend Family</div></div>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px"}}><b>Sharma Family - Delhi 1965 - Grandma</b><div style={{marginTop:"6px",fontWeight:"700"}}>Grandma cheese at home trick without store - Daily necessity</div><div style={{marginTop:"6px",fontSize:"12px",color:"#666"}}>Stories - Videos - Posts - People follow for secret hints - 189 likes</div></div>
        </div>
        <div style={{background:"#fff",borderRadius:"8px",padding:"12px",fontSize:"12px",height:"fit-content"}}><b>Suggested Families to Follow</b><div style={{marginTop:"8px"}}><b>Singh Family</b> - 12 secrets - 350 engine trick - <button style={{background:"#e7f3ff",color:"#1877f2",border:"none",padding:"4px 8px",borderRadius:"6px"}}>Follow</button><br/><br/><b>Patel Family</b> - 8 secrets - Keep rotis soft<br/><br/><b>Your Vault</b> - Save tricks - Like Instagram Save</div><div style={{marginTop:"16px"}}><b>Pricing Roadmap</b><br/>$7 Ebook - $49 Vault/year - $299 Legacy Website</div></div>
      </main>
    </div>
  );
}
