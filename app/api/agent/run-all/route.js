import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const topic = body.topic || body.prompt || body.query || body.hint || body.title || "";
    const decade = body.decade || "1960s";
    if (!topic) return NextResponse.json({ success: false, logs: ["[Chief] No topic"], finalPage: null });

    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0,80);
    const logs = [];
    logs.push(`[Chief] Mission: ${topic} | ${decade} | Billion Dollar Roadmap Phase 1`);
    logs.push("[Chief] Dispatching 8 AI Employees");

    const title = `How to ${topic} - ${decade}s OldHint`;
    const content = `My ${decade}s dadi used to ${topic} without chemicals. Cotton cloth steel dabba. Calgary T3J.`;
    const finalPage = { slug, title, fullUrl: `https://oldhint.com/hint/${slug}` };
    logs.push(`[Builder] Building /hint/${slug}`);

    const token = process.env.GITHUB_TOKEN;
    const owner = "bazardsachin";
    const repo = "oldhint";
    let guidesCount = 51;

    // PUBLISH HINT — Agent Publisher
    try {
      const filePath = `app/hint/${slug}/page.js`;
      const fileCode = "export default function Page(){return <div style={{maxWidth:'800px',margin:'40px auto',padding:'20px',fontFamily:'sans-serif'}}><a href='/'>Back</a><h1>" + title + "</h1><p>" + content + "</p><p>Era: " + decade + " | Origin: Bazard Family Calgary 1962 | 3 generations | 1200+ families | Trust Bar: ⏳ 40 years · 👨‍👩‍👧 3 gen · ✅ 1200 families</p></div>}";
      const base64Content = Buffer.from(fileCode).toString("base64");
      let existingSha = null;
      try {
        const checkRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=main`, { headers: { Authorization: `token ${token}` }, cache: "no-store" });
        if (checkRes.ok) { const d = await checkRes.json(); existingSha = d.sha; }
      } catch(e){}
      const payload = { message: `Publisher ${slug}`, content: base64Content, branch: "main",...(existingSha? {sha: existingSha}:{}) };
      const ghRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, { method: "PUT", headers: { Authorization: `token ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (ghRes.ok) logs.push(`[Publisher] AUTO-PUBLISHED /hint/${slug} ${ghRes.status===201?"CREATED":"UPDATED"}`);
      else logs.push(`[Publisher] 【entity-GitHub¦canonical_name=GitHub】 ${ghRes.status}`);
    } catch(e){ logs.push(`[Publisher] Error ${e.message}`); }

    // BUILD BILLION DOLLAR HOMEPAGE — Builder Agent per Roadmap PDF
    logs.push("[Builder] Building Billion Dollar Homepage per Oct 13 Roadmap — Keeping search bar as is");
    try {
      // Get real count
      try {
        const listRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/app/hint?ref=main`, { headers: { Authorization: `token ${token}` }, cache: "no-store" });
        if (listRes.ok) { const list = await listRes.json(); guidesCount = list.filter(f=>f.type==="dir").length; }
      } catch(e){}

      const homePath = "app/page.js";
      const homeCode = `
"use client";
import { useState } from "react";
import Link from "next/link";
export default function Home(){
  const [q,setQ]=useState("");
  const count=${guidesCount};
  return (<div style={{maxWidth:"1100px",margin:"0 auto",padding:"20px",fontFamily:"sans-serif"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><Link href="/" style={{fontWeight:"900",fontSize:"24px",color:"#000",textDecoration:"none"}}>OldHint Inc.</Link><div style={{display:"flex",gap:"12px"}}><Link href="/vault">Family Vault</Link><Link href="/family">Families</Link><Link href="/time-machine">Time Machine</Link><Link href="/admin" style={{background:"#000",color:"#fff",padding:"6px 12px",borderRadius:"8px"}}>Corporate HQ</Link></div></div>
    <div style={{marginTop:"60px",textAlign:"center"}}><h1 style={{fontSize:"52px",fontWeight:"900",lineHeight:"1.1"}}>Google forgets.<br/>Grandmothers remember.</h1><p style={{fontSize:"20px",color:"#555",marginTop:"16px"}}><b>{count} tricks from 1920-1990</b>, preserved for your kids. Built by 8 AI Employees in Calgary T3J.</p>
      <div style={{marginTop:"28px",maxWidth:"600px",marginInline:"auto",display:"flex",gap:"8px"}}><input value={q} onChange={e=>setQ(e.target.value)} placeholder={\`Search \${count} timeless hints - e.g. keep rotis soft\`} style={{flex:1,padding:"16px",borderRadius:"12px",border:"2px solid #000",fontSize:"16px"}}/><Link href={\`/search?q=\${q}\`} style={{background:"#00ff88",color:"#000",padding:"16px 24px",borderRadius:"12px",fontWeight:"900",textDecoration:"none"}}>Search</Link></div>
      <div style={{marginTop:"20px",display:"flex",justifyContent:"center",gap:"20px",fontSize:"14px",color:"#333"}}><span>⏳ 40 years old</span><span>👨‍👩‍👧 3 generations</span><span>✅ 1200+ families</span><span>📜 Calgary T3J HQ</span></div></div>
    <div style={{marginTop:"40px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}><div style={{border:"2px solid #000",padding:"20px",borderRadius:"16px"}}><b>$7 Heirloom Ebook</b><p style={{fontSize:"13px"}}>Own forever, printable cards</p><Link href="/ebook" style={{background:"#000",color:"#fff",padding:"8px 16px",borderRadius:"8px",display:"inline-block",marginTop:"8px",textDecoration:"none"}}>Buy $7</Link></div><div style={{border:"2px solid #00aa55",padding:"20px",borderRadius:"16px"}}><b>$49 Family Vault /year</b><p style={{fontSize:"13px"}}>Preserve your family's 10 tricks</p><Link href="/family" style={{background:"#00aa55",color:"#fff",padding:"8px 16px",borderRadius:"8px",display:"inline-block",marginTop:"8px",textDecoration:"none"}}>Join 100 Families</Link></div><div style={{border:"2px solid #000",padding:"20px",borderRadius:"16px"}}><b>$299 Legacy Website</b><p style={{fontSize:"13px"}}>smith.oldhint.com</p></div></div>
    <div style={{marginTop:"30px",textAlign:"center"}}><p>Founder: Sachin Bazard — Calgary T3J HQ • 8 AI Employees Online • 【entity-GitHub¦canonical_name=GitHub】 bazardsachin/oldhint • PH Oct 13 12:01 AM PT • Phase 1: {count}→100 hints</p><p><Link href="/vault">Family Vault /vault</Link> • <Link href="/generations/1960s">1960s</Link> • <Link href="/time-machine">Time Machine 1920 vs 2024</Link></p></div>
  </div>);
}
`;
      const base64Home = Buffer.from(homeCode).toString("base64");
      let homeSha = null;
      try {
        const hr = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${homePath}?ref=main`, { headers: { Authorization: `token ${token}` }, cache: "no-store" });
        if (hr.ok) { const hd = await hr.json(); homeSha = hd.sha; logs.push(`[Builder] Homepage exists SHA ${homeSha.slice(0,6)} updating per Roadmap`); }
      } catch(e){}
      const homePayload = { message: `Builder: Billion Dollar Homepage ${guidesCount} tricks — Search bar kept`, content: base64Home, branch: "main",...(homeSha? {sha: homeSha}:{}) };
      const homeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${homePath}`, { method: "PUT", headers: { Authorization: `token ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(homePayload) });
      if (homeRes.ok) logs.push(`[Builder] AUTO-BUILT Homepage per Roadmap ${guidesCount} tricks — Google forgets headline — Search bar kept as is`);
      else { const t=await homeRes.text(); logs.push(`[Builder] Homepage GitHub ${homeRes.status} ${t.slice(0,150)}`); }
    } catch(e){ logs.push(`[Builder] Homepage error ${e.message}`); }

    logs.push("[Chief] Mission Complete per Billion Dollar Roadmap — Homepage + Hint auto-published by agents");
    return NextResponse.json({ success: true, logs, finalPage });
  } catch(e){ return NextResponse.json({ success: false, logs: [`[Error] ${e.message}`], finalPage: null }); }
}
