"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home(){
  const [active,setActive]=useState(null);
  const canopy=[
    { id:1, leaf:"🔧", family:"Bazard", title:"1969 Charger Rebuild", motion:"Wrench turning • Garage light • 1972", who:"Dada - Root", age:"52 yrs", save:234 },
    { id:2, leaf:"🥒", family:"Sharma", title:"Pickles 21-Day No Store", motion:"Hands mixing • Jars sealing • Sun roof", who:"Nani - Root", age:"59 yrs", save:189 },
    { id:3, leaf:"🛞", family:"Singh", title:"350 Engine At Home Trick", motion:"350 block lifting • Chai steam", who:"Papa - Trunk", age:"44 yrs", save:120 },
    { id:4, leaf:"🧀", family:"Bazard", title:"Cheese At Home No Store", motion:"Milk curdling • Cloth straining", who:"Biji - Trunk", age:"40 yrs", save:98 },
  ];
  const families=[
    { name:"Bazard", est:"Est. 1980 Calgary T3J", trunk:"Root Dada - Fix 350 engine 1972", leaves:51 },
    { name:"Sharma", est:"Est. 1965 Delhi", trunk:"Root Nani - Pickles 21-day", leaves:23 },
    { name:"Singh", est:"Est. 1972 Punjab", trunk:"Root Baba - 1969 Charger", leaves:12 },
  ];

  return(
    <div style={{background:"#FBF6EF",minHeight:"100vh",color:"#111"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
      @keyframes drift{0%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-10px) rotate(1deg)}100%{transform:translateY(0) rotate(-1deg)}}
      body{font-family:Inter, sans-serif;}`}</style>

      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px",borderBottom:"2px solid #111",position:"sticky",top:0,background:"#FBF6EF",zIndex:10}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"40px",height:"40px",background:"#111",color:"#FBF6EF",display:"grid",placeItems:"center",fontWeight:"900",borderRadius:"8px"}}>OH</div>
          <div><div style={{fontWeight:"900",fontSize:"20px"}}>OldHint</div><div style={{fontSize:"9px",letterSpacing:"2px",textTransform:"uppercase",opacity:0.6}}>the lost knowledge</div></div>
        </div>
        <Link href="/admin" style={{background:"#111",color:"#fff",padding:"8px 14px",borderRadius:"20px",textDecoration:"none",fontSize:"12px",fontWeight:"700"}}>Corporate HQ - 51 LIVE</Link>
      </header>

      <div style={{textAlign:"center",padding:"24px 20px 10px"}}>
        <div style={{display:"inline-block",background:"#111",color:"#fff",padding:"6px 12px",borderRadius:"20px",fontSize:"11px"}}>CALGARY T3J HQ • 8 AI EMPLOYEES • FOREST SOCIAL</div>
        <h1 style={{fontSize:"56px",fontWeight:"900",lineHeight:"0.95",marginTop:"16px",letterSpacing:"-1px"}}>Google forgets.<br/>Grandmothers remember.</h1>
        <p style={{marginTop:"10px",color:"#555"}}>51 tricks from 1920-1990, preserved. Watch them move like family tree — Root to Leaf.</p>
      </div>

      <div style={{maxWidth:"1300px",margin:"20px auto",display:"grid",gridTemplateColumns:"280px 1fr 300px",gap:"16px",padding:"0 16px"}}>

        <div style={{border:"2px solid #111",borderRadius:"16px",padding:"14px",background:"#fff",height:"fit-content"}}>
          <div style={{fontSize:"10px",letterSpacing:"2px",opacity:0.5}}>YOUR FOREST • 3 TREES</div>
          {families.map(f=>(
            <div key={f.name} style={{marginTop:"12px",border:"1.5px solid #111",borderRadius:"12px",padding:"10px"}}>
              <div style={{fontWeight:"800",fontSize:"13px"}}>{f.name} Family - {f.est}</div>
              <div style={{fontSize:"11px",marginTop:"4px"}}>{f.trunk}</div>
              <div style={{marginTop:"8px",display:"flex",gap:"4px"}}><div style={{flex:1,height:"6px",background:"#111",borderRadius:"999px"}}></div><div style={{flex:1,height:"6px",background:"#ddd",borderRadius:"999px"}}></div><div style={{flex:1,height:"6px",background:"#ddd",borderRadius:"999px"}}></div></div>
              <div style={{marginTop:"8px",display:"flex",gap:"6px"}}><button style={{flex:1,background:"#111",color:"#fff",border:"none",padding:"6px",borderRadius:"8px",fontSize:"11px"}}>Water Tree • Follow</button><button style={{background:"#fff",border:"1px solid #111",padding:"6px",borderRadius:"8px",fontSize:"11px"}}>Ask Elder</button></div>
            </div>
          ))}
        </div>

        <div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:"12px"}}>
            <div style={{fontWeight:"800"}}>CANOPY • KNOWLEDGE IN MOTION</div>
            <div style={{fontSize:"11px",border:"1px dashed #111",padding:"4px 8px",borderRadius:"20px"}}>Wind Slow • 51 leaves drifting</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            {canopy.map(c=>(
              <div key={c.id} onClick={()=>setActive(c.id)} style={{background:"#fff",border:"2px solid #111",borderRadius:"16px",padding:"12px",transform:"rotate("+(c.id%2?1:-1)+"deg)",animation:"drift "+(4+c.id)+"s ease-in-out infinite",boxShadow:active===c.id?"8px 8px 0 #111":"4px 4px 0 #111",cursor:"pointer"}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:"10px"}}><span style={{background:"#111",color:"#fff",padding:"2px 8px",borderRadius:"20px"}}>{c.family} {c.leaf}</span><span>{c.age}</span></div>
                <div style={{marginTop:"8px",fontWeight:"800",fontSize:"16px",lineHeight:"1.1"}}>{c.title}</div>
                <div style={{marginTop:"6px",fontSize:"11px",background:"#FBF6EF",border:"1px dashed #111",padding:"6px",borderRadius:"8px"}}>Motion: {c.motion}</div>
                <div style={{marginTop:"8px",fontSize:"10px",opacity:0.6}}>{c.who} • Root to Leaf • Knowledge traveling</div>
                <div style={{marginTop:"8px",display:"flex",gap:"6px"}}><button style={{background:"#111",color:"#fff",border:"none",padding:"6px 10px",borderRadius:"20px",fontSize:"11px"}}>Pick leaf {c.save}</button><button style={{background:"#fff",border:"1px solid #111",padding:"6px 10px",borderRadius:"20px",fontSize:"11px"}}>Ask Elder</button></div>
              </div>
            ))}
          </div>
          <div style={{marginTop:"16px",background:"#111",color:"#fff",borderRadius:"12px",padding:"12px",display:"flex",gap:"10px",alignItems:"center"}}>
            <div style={{fontSize:"24px"}}>📽️</div>
            <div style={{fontSize:"12px"}}><b>Someone building 1969 Charger, someone making pickles, someone fixing 350 engine — All in motion</b><br/>Not Facebook feed. Forest walk. Leaves drift, you catch one. Follow = Water tree. Save = Pick leaf.</div>
          </div>
        </div>

        <div style={{border:"2px solid #111",borderRadius:"16px",padding:"14px",background:"#fff",height:"fit-content"}}>
          <div style={{fontSize:"10px",letterSpacing:"2px",opacity:0.5}}>ELDERS TENDING • LIVE</div>
          <div style={{marginTop:"10px",fontSize:"12px"}}><b>Dada Bazard</b> - Building 1969 Charger • Live 🟢<br/><b>Nani Sharma</b> - Sealing pickle jars • Live 🟢<br/><b>You</b> - Tending 51 leaves</div>
          <div style={{marginTop:"12px",border:"1px dashed #111",borderRadius:"10px",padding:"10px",fontSize:"11px"}}>
            How social works - Unique:<br/>Follow = Water tree<br/>Save = Pick leaf<br/>Comment = Ask elder<br/>Post = Drop leaf
          </div>
          <div style={{marginTop:"12px",background:"#00FF88",border:"1px solid #111",borderRadius:"10px",padding:"10px",textAlign:"center",fontWeight:"800",fontSize:"12px"}}>Get $7 Heirloom Basket - 51 leaves</div>
        </div>

      </div>
    </div>
  );
}
