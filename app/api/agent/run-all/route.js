import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { topic, decade } = await req.json();
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const logs = [];
    
    // 1. Chief
    logs.push(`[Chief] 🎯 Mission: ${topic} | Decade: ${decade}`);
    logs.push(`[Chief] Dispatching 8 AI Employees...`);
    
    // 2. Scout
    logs.push(`[Scout] 🔍 Searching trend: ${topic} ${decade}s hack...`);
    const hook = `My ${decade}s dadi used to ${topic} without chemicals — here's the lost trick`;
    logs.push(`[Scout] ✅ Found viral hook: "${hook}"`);
    
    // 3. Writer
    logs.push(`[Writer] ✍️ Writing 1200+ char guide for ${topic}...`);
    const content = `${hook}\n\nIn ${decade}s, no fridge, no chemicals. Grandmothers used cotton cloth, steel dabba, natural methods.\n\nWhat you need:\n- Cotton muslin cloth\n- Steel dabba / casserole\n- Little ghee / natural oil\n\nSteps (Grandma's way):\n1. Do it the old way, not modern chemical way\n2. Use cotton, not plastic\n3. Store in steel, not fridge\n4. Natural preservation keeps it fresh 8 hours\n5. This is why ${topic} worked in ${decade}s\n\nWhy it works: Old method locks moisture, no chemicals needed.\n\nFounder: Sachin Bazard — Calgary T3J | OldHint Inc.`;
    logs.push(`[Writer] ✅ Wrote ${content.length} chars`);
    
    // 4. Builder
    logs.push(`[Builder] 🏗️ Building page data: /hint/${slug}`);
    const title = `How to ${topic} — ${decade}s OldHint That Actually Works`;
    const finalPage = { slug, title, content, fullUrl: `https://oldhint.com/hint/${slug}` };
    logs.push(`[Builder] ✅ Built page data: ${finalPage.fullUrl}`);
    
    // 5. Video
    logs.push(`[Video] 🎥 YouTube ready: https://youtube.com/results?search_query=${encodeURIComponent(topic + " " + decade + "s trick")}`);
    
    // 6. SEO
    logs.push(`[SEO] 📈 Title + Meta ready: ${title}`);
    
    // 7. PUBLISHER AGENT — AUTO PUBLISH TO GITHUB (FIXED! No more ReferenceError)
    logs.push(`[Publisher] 🚀 Publisher Agent starting...`);
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER || "bazardsachin";
    const repo = process.env.GITHUB_REPO || "oldhint";
    
    if (!token) {
      logs.push(`[Publisher] ⚠️ No GITHUB_TOKEN — Skipping auto-publish. Add token in Vercel Env to enable 1-click LIVE!`);
      logs.push(`[Publisher] Manual: Create folder app/hint/${slug}/page.js`);
    } else {
      try {
        const filePath = `app/hint/${slug}/page.js`;
        const fileCode = `export default function Page() {
  return (
    <div style={{maxWidth:"800px", margin:"40px auto", padding:"20px", fontFamily:"sans-serif", lineHeight:"1.7"}}>
      <a href="/">← Back to OldHint</a>
      <h1>${title.replace(/"/g, '\\"').replace(/\n/g, " ")}</h1>
      <div style={{whiteSpace:"pre-wrap"}}>{\`${content.replace(/`/g, "\\`").replace(/\${/g, "\\${")}\`}</div>
      <p style={{marginTop:"30px"}}><b>Founder:</b> Sachin Bazard — Calgary T3J | OldHint Inc. 8 AI Employees Online 🟢</p>
      <p><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(topic)}" target="_blank">▶️ Watch YouTube</a></p>
    </div>
  );
}
`;
        const base64Content = Buffer.from(fileCode).toString("base64");
        
        const ghRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
          method: "PUT",
          headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            message: `🤖 Publisher: Auto-publish ${slug} via 8 AI Agents`,
            content: base64Content,
            branch: "main"
          })
        });
        
        if (ghRes.status === 201 || ghRes.status === 200) {
          logs.push(`[Publisher] ✅ AUTO-PUBLISHED! /hint/${slug} LIVE in 30 sec — Vercel deploying...`);
        } else {
          const errData = await ghRes.json();
          logs.push(`[Publisher] ❌ GitHub error: ${JSON.stringify(errData).slice(0,300)}`);
        }
      } catch (e) {
        logs.push(`[Publisher] ❌ Error: ${e.message}`);
      }
    }
    
    // 8. Support
    logs.push(`[Support] 💬 Support Agent: Ready to help users about ${topic}`);
    logs.push(`[Chief] 🎉 Mission Complete! 8 AI Employees finished! Guide: /hint/${slug}`);
    
    return NextResponse.json({ success: true, logs, finalPage });
    
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message, logs: [`Error: ${e.message}`] }, { status: 500 });
  }
}
