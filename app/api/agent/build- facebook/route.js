import { NextResponse } from "next/server";
export async function POST(req){
  const token = process.env.GITHUB_TOKEN;
  const owner = "bazardsachin"; const repo = "oldhint";
  const logs = ["[FacebookBuilder] Building OldHint like Facebook — Appealing + Family Tree Concept"];

  const pages = {
    "app/page.js": `"use client";
import { useState } from "react"; import Link from "next/link";
export default function Home(){
  const [q,setQ]=useState(""); const count=51;
  const stories=[{name:"Bazard",letter:"B"},{name:"Sharma",letter:"S"},{name:"Singh",letter:"S"},{name:"Patel",letter:"P"},{name:"You",letter:"Y"}];
  const feed=[
    {family:"Bazard Family", city:"Calgary T3J • 3 gen • Elder Root Dada", title:"How my grandpa fixed 350 Chevy engine at home — No shop needed — 1972", type:"Video • 60s", likes:234, comments:12, trust:"⏳ 52 yrs • 1200 families • 1960s • Punjab→Calgary"},
    {family:"Sharma Family", city:"Delhi 1965 • 4 gen • Grandma", title:"Grandma's cheese at home trick without store — Daily necessity", type:"Post • Photo", likes:189, comments:23, trust:"⏳ 59 yrs • 2100 families"},
    {family:"Bazard Family", city:"Calgary • You • Leaf Explorer", title:"Keep cilantro fresh 7 days — Auto-published by AI — 51st LIVE", type:"Post", likes:51, comments:5, trust:"1960s • Auto-published"}
  ];
  return (
    <div style={{background:"#f0f2f5",minHeight:"100vh",fontFamily:"Inter, sans-serif"}}>
      <header style={{background:"#fff",height:"56px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",position:"sticky",top:0,zIndex:10,boxShadow:"0 1px 2px rgba(0,0,0,0.1)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}><div style={{width:"40px",height:"40px",background:"#1877f2",color:"#fff",display:"grid",placeItems:"center",borderRadius:"50%",fontWeight:"900"}}>OH</div><div><div style={{fontWeight:"900",fontSize:"20px"}}>OldHint</div><div style={{fontSize:"9px",letterSpacing:"1px",color:"#888"}}>the lost knowledge</div></div><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 51 family secrets — fix 350 engine, make cheese, keep rotis soft" style={{marginLeft:"12px",width:"300px",padding:"8px 14px",borderRadius:"999px",border:"none",background:"#f0f2f5"}}/></div>
        <div style={{display:"flex",gap:"20px",fontSize:"20px"}}><span>🏠</span><span>👥</span><span>📺</span><span>🏪</span><span>🎮</span></div>
        <div style={{display:"flex",gap:"8px",alignItems:"center"}}><Link href="/admin" style={{background:"#e4e6eb",padding:"8px 12px",borderRadius:"999px",textDecoration:"none",color:"#000",fontWeight:"700",fontSize:"12px"}}>Corporate HQ • {count} LIVE</Link><div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#000",color:"#fff",display:"grid",placeItems:"center"}}>S</div></div>
      </header>
      <main style={{maxWidth:"1920px",margin:"0 auto",display:"grid",gridTemplateColumns:"280px 1fr 280px",gap:"16px",padding:"16px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px"}}><b>Bazard Family — Est. 1980 Calgary T3J</b><div style={{fontSize:"12px",marginTop:"8px",lineHeight:"1.8"}}>🌳 Root: Dada — Elder — Fix 350 engine<br/>🌿 Trunk: Papa — Keeper — Keep rice fresh<br/>🍃 Branch: You — Explorer — 51st cilantro<br/>🍃 Leaf: Kids — Next gen<br/><button style={{marginTop:"8px",width:"100%",padding:"8px",borderRadius:"8px",border:"none",background:"#e7f3ff",color:"#1877f2",fontWeight:"700"}}>+ Add Branch Member</button></div></div>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px"}}><b>Family Vault</b><div style={{fontSize:"13px",marginTop:"6px"}}>⏳ 40 years • 👨‍👩‍👧 3 gen • ✅ 1200+ families<br/><Link href="/vault">View Vault /vault →</Link></div></div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px",display:"flex",gap:"12px",overflowX:"auto"}}>{stories.map(s=>(<div key={s.name} style={{textAlign:"center",minWidth:"80px"}}><div style={{width:"60px",height:"60px",borderRadius:"50%",background:"linear-gradient(45deg,#feda75,#fa7e1e,#d62976)",padding:"2px"}}><div style={{width:"56px",height:"56px",borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",fontWeight:"800"}}>{s.letter}</div></div><div style={{fontSize:"11px",marginTop:"4px"}}>{s.name}<br/>Family</div></div>))}<div style={{minWidth:"80px",textAlign:"center"}}><div style={{width:"60px",height:"60px",borderRadius:"50%",background:"#f0f2f5",display:"grid",placeItems:"center"}}>+</div><div style={{fontSize:"11px"}}>Create<br/>Family</div></div></div>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px",display:"flex",gap:"8px"}}><div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#000",color:"#fff",display:"grid",placeItems:"center"}}>S</div><input placeholder="Share a family secret — How grandpa fixed 350 engine at home?" style={{flex:1,background:"#f0f2f5",border:"none",borderRadius:"999px",padding:"10px 14px"}}/><button style={{background:"#1877f2",color:"#fff",border:"none",padding:"8px 16px",borderRadius:"8px",fontWeight:"700"}}>Post</button></div>
          {feed.map((p,i)=>(<div key={i} style={{background:"#fff",borderRadius:"8px",padding:"12px"}}><div style={{display:"flex",justifyContent:"space-between"}}><div style={{display:"flex",gap:"8px"}}><div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#e4e6eb",display:"grid",placeItems:"center",fontWeight:"800"}}>{p.family[0]}</div><div><div style={{fontWeight:"700",fontSize:"14px"}}>{p.family}</div><div style={{fontSize:"11px",color:"#666"}}>{p.city} • {p.type} • {p.trust}</div></div></div><div style={{display:"flex",gap:"6px"}}><button style={{background:"#e7f3ff",color:"#1877f2",border:"none",padding:"6px 12px",borderRadius:"6px",fontWeight:"700",fontSize:"12px"}}>Follow Family</button><button style={{background:"#1877f2",color:"#fff",border:"none",padding:"6px 12px",borderRadius:"6px",fontWeight:"700",fontSize:"12px"}}>Friend</button></div></div><div style={{marginTop:"10px",fontWeight:"700",fontSize:"16px"}}>{p.title}</div><div style={{marginTop:"8px",height:"240px",background:"linear-gradient(135deg,#f0f2f5,#e4e6eb)",borderRadius:"8px",display:"grid",placeItems:"center"}}>📹 Video / Photo: {p.title.slice(0,40)}</div><div style={{marginTop:"8px",display:"flex",justifyContent:"space-between",borderTop:"1px solid #eee",paddingTop:"8px",fontSize:"13px",color:"#666"}}><span>❤️ {p.likes} • 💬 {p.comments} comments • 🔖 Save to Vault • 📩 Text Family</span><span>Share</span></div></div>))}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px"}}><b>Suggested Families — Follow for secrets</b>{[{n:"Singh Family",d:"12 secrets • 350 engine trick"},{n:"Patel Family",d:"8 secrets • Keep rotis soft"},{n:"Sharma Family",d:"Cheese at home"}].map(f=>(<div key={f.n} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}><div><div style={{fontWeight:"700",fontSize:"13px"}}>{f.n}</div><div style={{fontSize:"11px",color:"#666"}}>{f.d}</div></div><button style={{background:"#e7f3ff",color:"#1877f2",border:"none",padding:"4px 10px",borderRadius:"6px",fontWeight:"700",fontSize:"11px"}}>Follow</button></div>))}</div>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px"}}><b>Pricing — Roadmap Oct 13</b><div style={{fontSize:"12px",marginTop:"6px"}}>$7 Heirloom Ebook • $49 Family Vault/year (preserve 10 tricks) • $299 Legacy Website smith.oldhint.com</div><div style={{marginTop:"8px"}}><Link href="/ebook" style={{background:"#000",color:"#fff",padding:"6px 12px",borderRadius:"6px",textDecoration:"none",fontSize:"12px"}}>Buy $7</Link></div></div>
        </div>
      </main>
    </div>
  );
}
`,
    "app/feed/page.js": `export default function Feed(){ return <div style={{padding:"40px"}}><h1>Feed — Family Secrets Feed</h1><p>Like Facebook Feed but only family wisdom</p><a href="/">Back Home</a></div> }`,
    "app/family/page.js": `export default function Family(){ return <div style={{padding:"40px",textAlign:"center"}}><h1>The Bazard Family — Est. 1980 Calgary T3J</h1><p>Family Tree: Root Dada (fix 350 engine), Trunk Papa (keep rice fresh), Branch You (51 tricks), Leaf Kids</p><p>Create your family vault — Join 100 founding families $49/year</p></div> }`,
    "app/vault/page.js": `export default function Vault(){ return <div style={{padding:"40px"}}><h1>Family Vault — Grandma's Kitchen + Dad's Garage</h1><p>51 tricks 1920-1990 preserved</p></div> }`
  };

  for (const [path, code] of Object.entries(pages)) {
    try {
      let sha = null;
      try { const r = await fetch("https://api.github.com/repos/"+owner+"/"+repo+"/contents/"+path+"?ref=main",{headers:{Authorization:"token "+token},cache:"no-store"}); if(r.ok){ const d=await r.json(); sha=d.sha; } } catch(e){}
      const b64 = Buffer.from(code).toString("base64");
      const payload = { message: "FacebookBuilder: Build "+path+" like Facebook — Family Tree Concept — OldHint the lost knowledge", content: b64, branch:"main",...(sha?{sha}:{}) };
      const res = await fetch("https://api.github.com/repos/"+owner+"/"+repo+"/contents/"+path,{method:"PUT",headers:{Authorization:"token "+token,"Content-Type":"application/json"},body:JSON.stringify(payload)});
      logs.push(res.ok? "[FacebookBuilder] Built "+path+" OK" : "[FacebookBuilder] "+path+" failed "+res.status);
    } catch(e){ logs.push("[FacebookBuilder] Error "+path+" "+e.message); }
  }
  logs.push("[Chief] Facebook-like Family Social built — Appealing + Family Tree + Stories + Feed + Follow/Friend + Text + Comments + Save to Vault");
  return NextResponse.json({ success:true, logs });
}
`,
  };

  // Now we need to create this file via GitHub — But we give user the file to paste
  return NextResponse.json({ success: true, logs: ["[Chief] Paste the build-facebook agent file to GitHub"] });
}
