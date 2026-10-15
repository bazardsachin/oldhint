import { NextResponse } from "next/server";
export async function POST(){
  const token=process.env.GITHUB_TOKEN;
  const owner="bazardsachin";
  const repo="oldhint";
  const logs=["[FacebookBuilder] Building Facebook-like site"];
  const homeCode=`"use client";
import { useState } from "react";
import Link from "next/link";
export default function Home(){
  const [q,setQ]=useState("");
  return(
    <div style={{background:"#f0f2f5",minHeight:"100vh"}}>
      <header style={{background:"#fff",height:"56px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",boxShadow:"0 1px 2px rgba(0,0,0,0.1)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"40px",height:"40px",background:"#1877f2",color:"#fff",display:"grid",placeItems:"center",borderRadius:"50%",fontWeight:"900"}}>OH</div>
          <div><div style={{fontWeight:"900"}}>OldHint</div><div style={{fontSize:"9px",color:"#888"}}>the lost knowledge</div></div>
        </div>
        <Link href="/admin" style={{background:"#e4e6eb",padding:"8px 12px",borderRadius:"20px",textDecoration:"none",color:"#000",fontSize:"12px"}}>Corporate HQ - 51 LIVE</Link>
      </header>
      <main style={{maxWidth:"1100px",margin:"0 auto",display:"grid",gridTemplateColumns:"260px 1fr 260px",gap:"16px",padding:"16px"}}>
        <div style={{background:"#fff",borderRadius:"8px",padding:"12px",fontSize:"13px"}}>
          <b>Bazard Family - Est 1980 Calgary T3J</b><br/><br/>Root: Dada - Fix 350 engine 1972<br/>Trunk: Papa - Keep rice fresh<br/>Branch: You - 51 tricks<br/>Leaf: Kids
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px",display:"flex",gap:"10px"}}>
            <div>Bazard Family Story</div><div>Sharma Family Story</div><div>Singh Family Story</div>
          </div>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px"}}>
            <b>Bazard Family - 3 gen - Elder Root</b>
            <div style={{marginTop:"8px",fontWeight:"700"}}>How grandpa fixed 350 Chevy engine at home - No shop - 1972</div>
            <div style={{marginTop:"8px",fontSize:"12px",color:"#666"}}>Follow Family - Friend - Text Family - Comment - Save to Vault - 234 likes</div>
          </div>
          <div style={{background:"#fff",borderRadius:"8px",padding:"12px"}}>
            <b>Sharma Family - Delhi 1965</b>
            <div style={{marginTop:"8px",fontWeight:"700"}}>Grandma cheese at home trick without store</div>
          </div>
        </div>
        <div style={{background:"#fff",borderRadius:"8px",padding:"12px",fontSize:"12px"}}>
          <b>Suggested Families</b><br/>Singh Family - 12 secrets - 350 engine<br/>Patel Family - Keep rotis soft<br/>Sharma Family - Cheese
        </div>
      </main>
    </div>
  );
}
`;
  try{
    let sha=null;
    try{
      const r=await fetch("https://api.github.com/repos/"+owner+"/"+repo+"/contents/app/page.js?ref=main",{headers:{Authorization:"token "+token},cache:"no-store"});
      if(r.ok){ const d=await r.json(); sha=d.sha; }
    }catch(e){}
    const b64=Buffer.from(homeCode).toString("base64");
    const res=await fetch("https://api.github.com/repos/"+owner+"/"+repo+"/contents/app/page.js",{method:"PUT",headers:{Authorization:"token "+token,"Content-Type":"application/json"},body:JSON.stringify({message:"Build Facebook-like OldHint 51 tricks",content:b64,branch:"main",...(sha?{sha}:{})})});
    logs.push(res.ok?"Built app/page.js like Facebook OK":"Failed "+res.status);
  }catch(e){ logs.push("Error "+e.message); }
  return NextResponse.json({success:true,logs});
}
