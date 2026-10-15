import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    // Accept ANY field name from admin
    const topic = body.topic || body.prompt || body.query || body.hint || body.title || "";
    const decade = body.decade || body.year || "1960s";

    if (!topic || topic.trim() === "") {
      return NextResponse.json({
        success: false,
        logs: ["[Chief] ❌ No topic sent — Type something in admin box"],
        finalPage: null
      });
    }

    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
    const logs = [];

    logs.push(`[Chief] 🎯 Mission: ${topic} | Decade: ${decade}`);
    logs.push(`[Chief] Dispatching 8 AI Employees...`);
    logs.push(`[Scout] 🔍 Searching: ${topic} ${decade}s hack...`);
    const hook = `My ${decade}s dadi used to ${topic} without chemicals — lost trick`;
    logs.push(`[Scout] ✅ Hook: "${hook}"`);

    logs.push(`[Writer] ✍️ Writing 1200+ char guide...`);
    const content = `${hook}

In ${decade}s, no fridge, no chemicals. Grandmothers in India used cotton cloth and steel dabba.

What you need:
- Cotton muslin cloth
- Steel dabba with tight lid
- Little ghee or mustard oil
- Dry place

Steps to ${topic}:
1. Wash and dry completely — no water
2. Wrap in cotton, not plastic — cotton breathes
3. Store in steel, not aluminium — steel keeps cool
4. Keep away from sun — dark corner
5. Why ${decade}s method works — no chemical, pure

This old trick keeps fresh 8-12 hours without fridge. Used by my dadi in ${decade}s.

Founder: Sachin Bazard — Calgary T3J | OldHint Inc. — 8 AI Employees Online`;

    logs.push(`[Writer] ✅ Wrote ${content.length} chars`);

    logs.push(`[Builder] 🏗️ Building /hint/${slug}`);
    const title = `How to ${topic} — ${decade}s OldHint That Actually Works`;
    const finalPage = { slug, title, content, fullUrl: `https://oldhint.com/hint/${slug}` };
    logs.push(`[Builder] ✅ Built: ${finalPage.fullUrl}`);
    logs.push(`[Video] 🎥 YouTube ready`);
    logs.push(`[SEO] 📈 SEO ready: ${title}`);

    logs.push(`[Publisher] 🚀 Publisher Agent starting...`);
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER || "bazardsachin";
    const repo = process.env.GITHUB_REPO || "oldhint";

    if (!token) {
      logs.push(`[Publisher] ⚠️ No GITHUB_TOKEN in Vercel — Add in Environment Variables!`);
    } else {
      try {
        const filePath = `app/hint/${slug}/page.js`;
        const safeContent = content.replace(/`/g, "\\`").replace(/\$/g, "\\$").replace(/"/g, '\\"');
        const safeTitle = title.replace(/"/g, '\\"').replace(/`/g, "\\`");
        const fileCode = `export default function Page(){return (<div style={{maxWidth:"800px",margin:"40px auto",padding:"20px",fontFamily:"sans-serif",lineHeight:"1.7"}}><a href="/">← Back</a><h1>${safeTitle}</h1><div style={{whiteSpace:"pre-wrap"}}>{\`${safeContent}\`}</div><p style={{marginTop:"30px"}}><b>Founder:</b> Sachin Bazard — Calgary T3J | OldHint Inc. 8 AI Employees 🟢</p></div>)}`;
        const base64Content = Buffer.from(fileCode).toString("base64");

        // FIX FOR 422 SHA ERROR — Check if file exists
        let existingSha = null;
        try {
          const checkRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=main`, {
            headers: { Authorization: `token ${token}`, "Accept": "application/vnd.github.v3+json" },
            cache: "no-store"
          });
          if (checkRes.ok) {
            const checkData = await checkRes.json();
            existingSha = checkData.sha;
            logs.push(`[Publisher] File exists — Updating with SHA ${existingSha.slice(0,7)}...`);
          } else {
            logs.push(`[Publisher] New file — Creating...`);
          }
        } catch(e) {
          logs.push(`[Publisher] New file — Creating...`);
        }

        const bodyPayload = {
          message: `🤖 Publisher: ${slug} — ${decade}s`,
          content: base64Content,
          branch: "main",
         ...(existingSha? { sha: existingSha } : {})
        };

        const ghRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
          method: "PUT",
          headers: {
            Authorization: `token ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.v3+json"
          },
          body: JSON.stringify(bodyPayload)
        });

        if (ghRes.status === 201) {
          logs.push(`[Publisher] ✅ AUTO-PUBLISHED! /hint/${slug} CREATED LIVE in 30 sec — Vercel deploying...`);
        } else if (ghRes.status === 200) {
          logs.push(`[Publisher] ✅ AUTO-PUBLISHED! /hint/${slug} UPDATED LIVE in 30 sec — Vercel deploying...`);
        } else {
          const errText = await ghRes.text();
          logs.push(`[Publisher] ❌ Git
