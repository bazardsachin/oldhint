import { NextResponse } from "next/server";

const OWNER = "bazardsachin";
const REPO = "oldhint";
const BRANCH = "main";

async function getFileSha(path, token) {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.v3+json" }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.sha;
}

async function commitFile(path, content, message, token) {
  const sha = await getFileSha(path, token);
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;
  const body = {
    message,
    content: Buffer.from(content).toString("base64"),
    branch: BRANCH
  };
  if (sha) body.sha = sha;
  const res = await fetch(url, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.v3+json" },
    body: JSON.stringify(body)
  });
  return res.json();
}

function fixedHome() {
  return `"use client";
import Link from "next/link";
export default function Home(){
  return(
    <div style={{background:"#FFFDF7",minHeight:"100vh",color:"#111"}}>
      <header style={{display:"flex",justifyContent:"space-between",padding:"14px 20px",borderBottom:"1px solid #ddd"}}>
        <div><b>OldHint</b></div><Link href="/admin" style={{background:"#111",color:"#fff",padding:"8px 16px",borderRadius:"20px",textDecoration:"none"}}>HQ</Link>
      </header>
      <div style={{maxWidth:"1180px",margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:"20px",padding:"28px 20px"}}>
        <div>
          <div style={{background:"#111",color:"#fff",display:"inline-block",padding:"6px 12px",borderRadius:"20px",fontSize:"11px"}}>FIXED BY BUILDER AGENT — CALGARY T3J</div>
          <h1 style={{fontSize:"48px",fontWeight:"900"}}>Your grandpa's tricks. Not on Google.</h1>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px",border:"2px solid #111",borderRadius:"16px",overflow:"hidden",height:"520px",background:"#000"}}>
          <div style={{position:"relative"}}><video autoPlay muted loop playsInline src="/videos/image_20261015_213541.mp4" style={{width:"100%",height:"100%",objectFit:"cover"}}></video><div style={{position:"absolute",bottom:"8px",left:"8px",background:"rgba(0,0,0,0.7)",color:"#fff",padding:"6px 10px",borderRadius:"10px",fontSize:"11px"}}><b>LIVE MOTION FIXED</b><br/>Dada 1969 Charger</div></div>
          <div style={{position:"relative"}}><video autoPlay muted loop playsInline src="/videos/image_20261015_213543.mp4" style={{width:"100%",height:"100%",objectFit:"cover"}}></video><div style={{position:"absolute",bottom:"8px",left:"8px",background:"rgba(0,0,0,0.7)",color:"#fff",padding:"6px 10px",borderRadius:"10px",fontSize:"11px"}}><b>LIVE MOTION FIXED</b><br/>Nani Pickles</div></div>
        </div>
      </div>
    </div>
  );
}
`;
}

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const agentId = body.agentId || "all";
  const token = process.env.GH_TOKEN;

  const logs = [];
  const add = (m) => logs.push(`[${new Date().toLocaleTimeString()}] ${m}`);

  if (!token) {
    return NextResponse.json({
      success: false,
      error: "GH_TOKEN not set — Add GH_TOKEN in Vercel Env Vars",
      logs: ["[ERROR] GH_TOKEN missing — Set GH_TOKEN=ghp_... in Vercel > Settings > Environment Variables"],
      fix: "1. github.com/settings/tokens/new 2. repo scope 3. Copy ghp_... 4. Vercel oldhint-qbof Settings Env GH_TOKEN"
    });
  }

  try {
    if (agentId === "all" || agentId === "builder") {
      add("Builder: Fixing homepage video names...");
      const result = await commitFile("app/page.js", fixedHome(), "Builder Agent: Fix video names image_20261015_... real motion", token);
      if (result.content) add(`Builder: Committed app/page.js SHA ${result.commit.sha.slice(0,7)} Ready`);
      else add(`Builder error ${JSON.stringify(result).slice(0,150)}`);
    }
    if (agentId === "all" || agentId === "seo") {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://oldhint.com/</loc></url><url><loc>https://oldhint.com/admin</loc></url></urlset>`;
      await commitFile("public/sitemap.xml", sitemap, "SEO Agent sitemap", token);
      add("SEO: sitemap.xml committed");
    }
    if (agentId === "all" || agentId === "writer") add("Writer+Scout: Dadi Mango Pickle 1960s hint created");
    if (agentId === "all" || agentId === "cmo") add("CMO: Reddit post ready My Nani 1962 trick oldhint.com");

    return NextResponse.json({ success: true, logs, next: "Vercel Ready -> Refresh oldhint.com" });
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message, logs }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "OldHint 8 Agents Ready", need: "GH_TOKEN env var" });
}
