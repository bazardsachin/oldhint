"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home(){
  const hints=[
    { id:1, icon:"🔧", title:"1969 Charger Rebuild", who:"Dada - Root • 1972 Calgary", motion:"Wrench turning • Engine roars", color:"#f59e0b", x:10, y:20 },
    { id:2, icon:"🥒", title:"Grandma's Pickles 21-Day", who:"Nani - Root • 1965 Punjab", motion:"Hands mixing • Jars sealing", color:"#10b981", x:70, y:15 },
    { id:3, icon:"🧀", title:"Cheese at Home No Store", who:"Biji - Trunk • 1968", motion:"Milk curdling • Cloth straining", color:"#f5f5f0", x:20, y:60 },
    { id:4, icon:"🏠", title:"Keep Rotis Soft 24h", who:"Mummy - Branch • 1985", motion:"Dough folding • Tawa puff", color:"#e7c9a9", x:75, y:55 },
    { id:5, icon:"🚜", title:"350 Engine At Home", who:"Papa - Trunk • 1980", motion:"350 block • Garage light", color:"#333", x:45, y:75 },
  ];

  return(
    <div style={{background:"#FFFEF9",minHeight:"100vh",overflow:"hidden",fontFamily:"Georgia, serif"}}>
      {/* HEADER - OldHint the lost knowledge - Appealing */}
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 28px",position:"relative",zIndex:10}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <div style={{width:"48px",height:"48px",background:"#111",color:"#FFFEF9",borderRadius:"12px",display:"grid",placeItems:"center",fontWeight:"900",fontSize:"22px",transform:"rotate(-3deg)"}}>OH</div>
          <div><div style={{fontWeight:"900",fontSize:"26px",letterSpacing:"-0.5px"}}>OldHint</div><div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:"#888",fontFamily:"Inter, sans-serif"}}>the lost knowledge</div></div>
        </div>
        <div style={{display:"flex",gap:"12px",fontFamily:"Inter, sans-serif"}}><Link href="/vault" style={{textDecoration:"none",color:"#111",fontSize:"13px",border:"1px solid #111",padding:"8px 14px",borderRadius:"999px"}}>Family Vault • 51 LIVE</Link><Link href="/admin" style={{background:"#111",color:"#fff",padding:"8px 14px",borderRadius:"999px",textDecoration:"none",fontSize:"13px",fontWeight:"700"}}>Corporate HQ</Link></div>
      </header>

      {/* HERO - Old Families In Motion */}
      <div style={{textAlign:"center",padding:"20px 20px 0",position:"relative"}}>
        <div style={{fontFamily:"Inter, sans-serif",display:"inline-block",background:"#111",color:"#FFFEF9",padding:"6px 14px",borderRadius:"999px",fontSize:"11px",letterSpacing:"1px"}}>CALGARY T3J HQ • 8 AI EMPLOYEES • BUILT FOR KIDS</div>
        <h1 style={{fontSize:"72px",fontWeight:"900",lineHeight:"0.9",margin:"18px 0 0",letterSpacing:"-2px"}}>Google forgets.<br/><span style={{fontStyle:"italic",fontWeight:"400"}}>Grandmothers</span> remember.</h1>
        <p style={{fontFamily:"Inter, sans-serif",fontSize:"17px",color:"#555",marginTop:"14px"}}>51 tricks from 1920-1990, preserved for your kids. Watch them move like family tree — Root to Leaf.</p>
      </div>

      {/* MOTION FAMILY TREE - Center Stage */}
      <div style={{position:"relative",width:"100%",height:"560px",marginTop:"20px",maxWidth:"1200px",marginLeft:"auto",marginRight:"auto"}}>
        {/* SVG Tree Trunk and Branches - Animated */[STRIPPED 23 bytes]"0 0 1000 560" style={{position:"absolute",width:"100%",height:"100%",left:0,top:0}}>
          <path d="M500 520 Q500 350 500 180" stroke="#111" strokeWidth="8" fill="none" strokeLinecap="round" style={{strokeDasharray:"800",strokeDashoffset:"0",animation:"draw 3s ease"}}/>
          <path d="M500 380 Q300 320 180 220" stroke="#111" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8"/>
          <path d="M500 380 Q700 320 820 220" stroke="#111" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8"/>
          <path d="M500 260 Q350 200 250 120" stroke="#111" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
          <path d="M500 260 Q650 200 750 120" stroke="#111" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
          {/* Animated flowing dots - knowledge moving */}
          <circle r="6" fill="#f59e0b"><animateMotion path="M500 520 Q500 350 500 180" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/></circle>
          <circle r="5" fill="#10b981"><animateMotion path="M500 380 Q300 320 180 220" dur="3.5s" repeatCount="indefinite" begin="0.5s"/><animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite"/></circle>
          <circle r="5" fill="#111"><animateMotion path="M500 380 Q700 320 820 220" dur="3.2s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite"/></circle>
        </svg>

        {/* Floating Hint Leaves - In Motion */}
        {hints.map(h=>(
          <div key={h.id} style={{position:"absolute",left:`${h.x}%`,top:`${h.y}%`,transform:"translate(-50%,-50%)",animation:`float ${4+h.id*0.5}s ease-in-out infinite`}}>
            <div style={{background:"#fff",border:"1.5px solid #111",borderRadius:"20px",padding:"12px 14px",boxShadow:"6px 6px 0 #111",width:"220px",transform:`rotate(${h.id%2?2:-2}deg)`}}>
              <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
                <div style={{width:"40px",height:"40px",background:h.color,borderRadius:"12px",display:"grid",placeItems:"center",fontSize:"20px",border:"1px solid #111"}}>{h.icon}</div>
                <div><div style={{fontWeight:"800",fontSize:"13px",lineHeight:"1.1"}}>{h.title}</div><div style={{fontSize:"10px",color:"#666",fontFamily:"Inter, sans-serif",marginTop:"2px"}}>{h.who}</div></div>
              </div>
              <div style={{marginTop:"8px",fontSize:"10px",background:"#FFFEF9",border:"1px dashed #ccc",padding:"4px 6px",borderRadius:"8px",fontFamily:"Inter, sans-serif"}}>🎬 {h.motion}</div>
              <div style={{marginTop:"6px",fontSize:"9px",color:"#888",fontFamily:"Inter, sans-serif"}}>Root → Trunk → Branch → Leaf • Knowledge moving</div>
            </div>
          </div>
        ))}

        {/* Center Root Label */}
        <div style={{position:"absolute",left:"50%",top:"88%",transform:"translate(-50%,-50%)",background:"#111",color:"#FFFEF9",padding:"8px 16px",borderRadius:"999px",fontFamily:"Inter, sans-serif",fontSize:"12px",fontWeight:"700"}}>🌳 Bazard Family • Est. 1980 Calgary T3J • Root → Leaf</div>
      </div>

      {/* Welcome Strip */}
      <div style={{maxWidth:"1000px",margin:"10px auto 40px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"14px",padding:"0 20px"}}>
        <div style={{background:"#fff",border:"1.5px solid #111",borderRadius:"16px",padding:"16px",fontFamily:"Inter, sans-serif"}}><b>Someone building 1969 Charger</b><div style={{fontSize:"12px",color:"#555",marginTop:"4px"}}>Dada's garage trick flows to you. Watch it move on tree.</div></div>
        <div style={{background:"#00FF88",border:"1.5px solid #111",borderRadius:"16px",padding:"16px",fontFamily:"Inter, sans-serif"}}><b>Someone making pickles</b><div style={{fontSize:"12px",color:"#111",marginTop:"4px"}}>Nani's 21-day pickle flows to branch. Like leaf in wind.</div></div>
        <div style={{background:"#fff",border:"1.5px solid #111",borderRadius:"16px",padding:"16px",fontFamily:"Inter, sans-serif"}}><b>51 Hidden Knowledge in Motion</b><div style={{fontSize:"12px",color:"#555",marginTop:"4px"}}>Search, follow family, preserve for kids. $7 Heirloom.</div></div>
      </div>

      {/* Search - Kept */}
      <div style={{textAlign:"center",paddingBottom:"50px"}}>
        <div style={{maxWidth:"640px",margin:"0 auto",display:"flex",gap:"10px",padding:"0 20px"}}>
          <input placeholder="Search 51 family secrets - 1969 charger, pickles, rotis, cheese" style={{flex:1,padding:"16px 20px",borderRadius:"999px",border:"2px solid #111",fontFamily:"Inter, sans-serif"}}/>
          <button style={{background:"#111",color:"#fff",padding:"0 28px",borderRadius:"999px",fontWeight:"800",border:"2px solid #111",fontFamily:"Inter, sans-serif"}}>Search</button>
        </div>
      </div>

      <style>{`@keyframes float{0%,100%{transform:translate(-50%,-50%) translateY(0px)}50%{transform:translate(-50%,-50%) translateY(-10px)}} @keyframes draw{from{stroke-dashoffset:800}to{stroke-dashoffset:0}}`}</style>
    </div>
  );
}
