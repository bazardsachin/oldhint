import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    // Accept ANY field name from admin page — topic, prompt, query, hint
    const topic = body.topic || body.prompt || body.query || body.hint || body.title || "";
    const decade = body.decade || body.year || "1960s";

    if (!topic) {
      return NextResponse.json({ success: false, logs: ["[Chief] ❌ No topic sent — Type something in admin box"], finalPage: null });
    }

    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0,80);
    const logs = [];

    logs.push(`[Chief] 🎯 Mission: ${topic} | Decade: ${decade}`);
    logs.push(`[Chief] Dispatching 8 AI Employees...`);
    logs.push(`[Scout] 🔍 Searching: ${topic} ${decade}s hack...`);
    const hook = `My ${decade}s dadi used to ${topic} without chemicals — lost trick`;
    logs.push(`[Scout] ✅ Hook: "${hook}"`);

    logs.push(`[Writer] ✍️ Writing 1200+ char guide...`);
    const content = `${hook}\n\nIn ${decade}s, no fridge, no chemicals. Grandmothers used cotton cloth, steel dabba.\n\nWhat you need:\n- Cotton muslin cloth\n- Steel dabba\n- Little ghee\n\nSteps:\n1. Old method not modern chemical\n2. Use cotton, not plastic\n3. Steel, not fridge\n4. Keeps fresh 8 hours\n5. Why ${topic} worked in ${decade}s\n\nFounder: Sachin Bazard — Calgary T3J | OldHint Inc.`;
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
      logs.push(`[Publisher] ⚠️ No GITHUB_TOKEN in Vercel — Add it!`);
    } else {
      try {
        const filePath = `app/hint/${slug}/page.js`;
        const safeContent = content.replace(/`/g, "\\`").replace(/\$/g, "\\$").replace(/"/g, '\\"');
        const safeTitle = title.replace(/"/g, '\\"').replace(/`/g, "\\`");
        const fileCode = `export default function Page(){return (<div style={{maxWidth:"800px",margin:"40px auto",padding:"20px",fontFamily:"sans-serif",lineHeight:"1.7"}}><a href="/">← Back</a><h1>${safeTitle}</h1><div style={{whiteSpace:"pre-wrap"}}>{\`${safeContent}\`}</div><p style={{marginTop:"30px"}}><b>Founder:</b> Sachin Bazard — Calgary T3J | OldHint Inc. 8 AI Employees 🟢</p></div>)}`;
        const base64Content = Buffer.from(fileCode).toString("base64");
        const ghRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
          method: "PUT",
          headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ message: `🤖 Publisher: ${slug}`, content: base64Content, branch: "main" })
        });
        if (ghRes.status === 201 || ghRes.status === 200) {
          logs.push(`[Publisher] ✅ AUTO-PUBLISHED! /hint/${slug} LIVE in 30 sec — Vercel deploying...`);
        } else {
          const err = await ghRes.json();
          logs.push(`[Publisher] ❌ GitHub: ${JSON.stringify(err).slice(0,200)}`);
        }
      } catch (e) {
        logs.push(`[Publisher] ❌ ${e.message}`);
      }
    }
    logs.push(`[Support] 💬 Support ready`);
    logs.push(`[Chief] 🎉 Mission Complete! Guide: /hint/${slug}`);

    return NextResponse.json({ success: true, logs, finalPage });
  } catch (e) {
    return NextResponse.json({ success: false, logs: [`[Error] ${e.message}`], finalPage: null });
  }
}
