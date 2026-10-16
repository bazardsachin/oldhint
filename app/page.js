"use client";
import Link from "next/link";

export default function Home(){
  return(
    <div style={{background:"#FFFDF7",minHeight:"100vh",color:"#111",fontFamily:"Inter, sans-serif"}}>
      <header style={{display:"flex",justifyContent:"space-between",padding:"14px 20px",borderBottom:"1px solid #ddd",position:"sticky",top:0,background:"#FFFDF7",zIndex:10}}>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}><div style={{width:"36px",height:"36px",background:"#111",color:"#fff",display:"grid",placeItems:"center",fontWeight:"900",borderRadius:"8px"}}>OH</div><div><b>OldHint</b><div style={{fontSize:"9px",letterSpacing:"2px",opacity:0.6}}>THE LOST KNOWLEDGE</div></div></div>
        <Link href="/admin" style={{background:"#111",color:"#fff",padding:"8px 16px",borderRadius:"20px",textDecoration:"none",fontSize:"12px",fontWeight:"700"}}>Create Family — Free</Link>
      </header>

      <div style={{maxWidth:"1180px",margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:"20px",padding:"28px 20px",alignItems:"center"}}>
        <div>
          <div style={{background:"#111",color:"#fff",display:"inline-block",padding:"6px 12px",borderRadius:"20px",fontSize:"11px"}}>FOR FAMILIES WHO DON'T WANT TO FORGET • CALGARY T3J</div>
          <h1 style={{fontFamily:"Fraunces, serif",fontSize:"58px",fontWeight:"900",lineHeight:"0.95",marginTop:"14px"}}>Your grandpa's<br/>tricks.<br/><span style={{fontStyle:"italic"}}>Not on Google.</span><br/>In your kids' hands.</h1>
          <p style={{marginTop:"12px",fontSize:"16px",color:"#444",maxWidth:"480px",lineHeight:"1.5"}}>OldHint is private family forest. Record how Dada fixed 350 engine at home in 1972. How Nani made pickles in 21 days. In motion — video, voice, hands. Kids find it 100 years later.</p>
          <div style={{marginTop:"16px",display:"flex",gap:"10px"}}><Link href="/admin" style={{background:"#111",color:"#fff",padding:"14px 20px",borderRadius:"999px",textDecoration:"none",fontWeight:"800"}}>Start Family Tree — Free</Link><div style={{fontSize:"12px"}}><b>1,200 families</b> preserving<br/>51 tricks live</div></div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",border:"2px solid #111",borderRadius:"16px",overflow:"hidden",height:"520px",background:"#000"}}>
          <div style={{position:"relative"}}>
            <video autoPlay muted loop playsInline src="/videos/dada-charger-1969.mp4" style={{width:"100%",height:"100%",objectFit:"cover"}}></video>
            <div style={{position:"absolute",bottom:"8px",left:"8px",background:"rgba(0,0,0,0.7)",color:"#fff",padding:"6px 10px",borderRadius:"10px",fontSize:"11px"}}><b>🔴 LIVE MOTION</b><br/>Dada building 1969 Charger<br/>Wrench turning • Calgary 1972</div>
          </div>
          <div style={{position:"relative"}}>
            <video autoPlay muted loop playsInline src="/videos/nani-pickles-21day.mp4" style={{width:"100%",height:"100%",objectFit:"cover"}}></video>
            <div style={{position:"absolute",bottom:"8px",left:"8px",background:"rgba(0,0,0,0.7)",color:"#fff",padding:"6px 10px",borderRadius:"10px",fontSize:"11px"}}><b>🔴 LIVE MOTION</b><br/>Nani making pickles — 21 days<br/>Hands mixing • Jars in sun</div>
          </div>
          <div style={{background:"#FFF3D6",display:"grid",placeItems:"center",padding:"10px",textAlign:"center"}}><div><div style={{fontSize:"28px"}}>🌳</div><b>Bazard Family — Est. 1980</b><br/><span style={{fontSize:"11px"}}>Root Dada • Trunk Papa • Branch You • Leaf Kids</span></div></div>
          <div style={{background:"#111",color:"#fff",display:"grid",placeItems:"center",padding:"10px"}}><div style={{fontSize:"12px"}}><b>How social works — Unique</b><br/>Follow = Water tree<br/>Save = Pick leaf<br/>Ask = Ask elder<br/>Post = Drop leaf</div></div>
        </div>
      </div>

      <div style={{textAlign:"center",padding:"20px",borderTop:"1px solid #ddd",marginTop:"20px"}}>
        <div style={{fontSize:"20px",fontWeight:"700"}}>OldHint — The lost knowledge — Not on Google. In your family.</div>
        <div style={{fontSize:"11px",opacity:0.6,marginTop:"4px"}}>Calgary T3J HQ • 8 AI employees • For kids who will ask</div>
      </div>
    </div>
  );
}
