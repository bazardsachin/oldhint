"use client";
import Link from "next/link";

export default function Home(){
  return(
    <div style={{background:"#FFFDF7",minHeight:"100vh",color:"#111",fontFamily:"Inter, sans-serif"}}>
      <header style={{display:"flex",justifyContent:"space-between",padding:"14px 20px",borderBottom:"1px solid #ddd",position:"sticky",top:0,background:"#FFFDF7",zIndex:10}}>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}><div style={{width:"36px",height:"36px",background:"#111",color:"#fff",display:"grid",placeItems:"center",fontWeight:"900",borderRadius:"8px"}}>OH</div><div><b>OldHint</b><div style={{fontSize:"9px",letterSpacing:"2px",opacity:0.6}}>THE LOST KNOWLEDGE</div></div></div>
        <Link href="/admin" style={{background:"#111",color:"#fff",padding:"8px 16px",borderRadius:"20px",textDecoration:"none",fontSize:"12px",fontWeight:"700"}}>Create Family — Free</Link>
      </header>

      <div style={{maxWidth:"1180px",margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:"20px",padding:"28px 20px"}}>
        <div>
          <div style={{background:"#111",color:"#fff",display:"inline-block",padding:"6px 12px",borderRadius:"20px",fontSize:"11px"}}>FOR FAMILIES WHO DON'T WANT TO FORGET • CALGARY T3J HQ</div>
          <h1 style={{fontFamily:"Fraunces, serif",fontSize:"58px",fontWeight:"900",lineHeight:"0.95",marginTop:"14px"}}>Your grandpa's<br/>tricks.<br/><span style={{fontStyle:"italic",fontWeight:"700"}}>Not on Google.</span><br/>In your kids' hands.</h1>
          <p style={{marginTop:"12px",fontSize:"16px",color:"#444",maxWidth:"480px",lineHeight:"1.5"}}>OldHint is private family forest. Record how Dada fixed 350 engine at home in 1972. How Nani made pickles in 21 days. In motion — video, voice, hands. Kids find it 100 years later.</p>
          <div style={{marginTop:"16px",display:"flex",gap:"10px"}}><Link href="/admin" style={{background:"#111",color:"#fff",padding:"14px 20px",borderRadius:"999px",textDecoration:"none",fontWeight:"800"}}>Start Family Tree — Free</Link><div style={{fontSize:"12px"}}><b>1,200 families</b> preserving<br/>51 tricks live</div></div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",border:"2px solid #111",borderRadius:"16px",overflow:"hidden",height:"520px"}}>
          <div style={{position:"relative",background:"#000"}}>
            <video autoPlay muted loop playsInline src="/videos/dada-charger-1969.mp4" style={{width:"100%",height:"100%",objectFit:"cover"}}></video>
            <div style={{position:"absolute",bottom:"8px",left:"8px",background:"rgba(0,0,0,0.7)",color:"#fff",padding:"6px 10px",borderRadius:"10px",fontSize:"11px"}}><b>🔴 LIVE MOTION</b><br/>Dada building 1969 Charger<br/>Calgary garage — 1972 • Wrench turning</div>
          </div>
          <div style={{position:"relative",background:"#000"}}>
            <video autoPlay muted loop playsInline src="/videos/nani-pickles-21day.mp4" style={{width:"100%",height:"100%",objectFit:"cover"}}></video>
            <div style={{position:"absolute",bottom:"8px",left:"8px",background:"rgba(0,0,0,0.7)",color:"#fff",padding:"6px 10px",borderRadius:"10px",fontSize:"11px"}}><b>🔴 LIVE MOTION</b><br/>Nani making pickles — 21 days<br/>Hands mixing • Jars in sun</div>
          </div>
          <div style={{background:"#FFF3D6",display:"grid",placeItems:"center",padding:"10px",textAlign:"center"}}><div><div style={{fontSize:"28px"}}>🌳</div><b>Bazard Family — Est. 1980</b><br/><span style={{fontSize:"11px"}}>Root Dada • Trunk Papa • Branch You • Leaf Kids<br/>3 gen • 51 tricks • Water tree = Follow</span></div></div>
          <div style={{background:"#111",color:"#fff",display:"grid",placeItems:"center",padding:"10px",textAlign:"center"}}><div><div style={{fontSize:"20px"}}>📽️ How social works — Unique</div><div style={{fontSize:"11px",marginTop:"6px",textAlign:"left"}}>Follow = Water tree<br/>Save = Pick leaf<br/>Ask = Ask elder<br/>Post = Drop leaf</div></div></div>
        </div>
      </div>

      <div style={{maxWidth:"1180px",margin:"20px auto",padding:"0 20px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
        <div style={{border:"1.5px solid #111",borderRadius:"14px",padding:"14px",background:"#fff"}}><b>1. Create Family Tree</b><div style={{fontSize:"13px",color:"#555"}}>Bazard Family — Add Dada, Papa, You, Kids. Each branch.</div><div style={{marginTop:"8px",fontWeight:"800"}}>2. Record in Motion</div><div style={{fontSize:"13px",color:"#555"}}>Not text. Video of hands. Voice. Motion matters.</div><div style={{marginTop:"8px",fontWeight:"800"}}>3. Kids Find Forever</div><div style={{fontSize:"13px",color:"#555"}}>Private vault. Google can't find. 100 years later answer is there.</div></div>
        <div style={{border:"1.5px solid #111",borderRadius:"14px",padding:"14px",background:"#00FF88"}}><b>Why families love it</b><div style={{fontSize:"13px",marginTop:"6px"}}>"Dad's 1969 Charger trick would have died. Now my son fixed his own." — Singh<br/><br/>"12 cheese tricks from Biji. Store cheese tastes fake." — Sharma</div></div>
        <div style={{border:"1.5px solid #111",borderRadius:"14px",padding:"14px",background:"#fff"}}><b>Pricing Roadmap Oct 13</b><div style={{fontSize:"13px",lineHeight:"1.6"}}><b>Free:</b> 3 tricks, follow 5 families<br/><b>$7 Heirloom:</b> 51 tricks PDF<br/><b>$49 Vault:</b> Unlimited videos, 100 yrs<br/><b>$299 Legacy:</b> smith.oldhint.com</div></div>
      </div>
    </div>
  );
}
