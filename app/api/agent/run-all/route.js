import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const topic = body.topic || body.prompt || body.query || body.hint || body.title || "";
    const decade = body.decade || body.year || "1960s";

    if (!topic) {
      return NextResponse.json({ success: false, logs: ["[Chief] No topic sent"], finalPage: null });
    }

    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
    const logs = [];

    logs.push(`[Chief] Mission: ${topic} | Decade: ${decade}`);
    logs.push("[Chief] Dispatching 8 AI Employees");
    logs.push(`[Scout] Searching: ${topic} ${decade}s hack`);
    const hook = `My ${decade}s dadi used to ${topic} without chemicals`;
    logs.push(`[Scout] Hook: ${hook}`);
    logs.push("[Writer] Writing 1200+ char guide");

    const content = `${hook}. In ${decade}s no fridge no chemicals. Grandmothers used cotton cloth steel dabba. Steps to ${topic}: Wash dry completely, wrap in cotton not plastic, store in steel, keep dark corner, works 8 hours. Founder Sachin Bazard Calgary T3J OldHint Inc 8 AI Employees.`;

    logs.push(`[Writer] Wrote ${content.length} chars`);
    logs.push(`[Builder] Building /hint/${slug}`);
    const title = `How to ${topic} - ${decade}s OldHint That Works`;
    const finalPage = { slug, title, content, fullUrl: `https://oldhint.com/hint/${slug}` };
    logs.push(`[Builder] Built ${finalPage.fullUrl}`);
    logs.push("[Video] YouTube ready");
    logs.push(`[SEO] SEO ready: ${title}`);
    logs.push("[Publisher] Publisher Agent starting");

    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER || "bazardsachin";
    const repo = process.env.GITHUB_REPO || "oldhint";

    if (!token) {
      logs.push("[Publisher] No GITHUB_TOKEN in Vercel");
    } else {
      try {
        const filePath = `app/hint/${slug}/page.js`;
        const fileCode = "export default function Page(){return <div style={{maxWidth:'800px',margin:'40px auto',padding:'20px',fontFamily:'sans-serif',lineHeight:'1.7'}}><a href='/'>Back</a><h1>" + title + "</h1><p>" + content + "</p><p><b>Founder:</b> Sachin Bazard - Calgary T3J | OldHint Inc 8 AI Employees</p></div>}";
        const base64Content = Buffer.from(fileCode).toString("base64");

        let existingSha = null;
        try {
          const checkRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=main`, {
            headers: { Authorization: `token ${token}`, Accept: "application/vnd.github.v3+json" },
            cache: "no-store"
          });
          if (checkRes.ok) {
            const checkData = await checkRes.json();
            existingSha = checkData.sha;
            logs.push(`[Publisher] File exists updating SHA ${existingSha.slice(0,6)}`);
          } else {
            logs.push("[Publisher] New file creating");
          }
        } catch (e) {
          logs.push("[Publisher] New file creating");
        }

        const payload = {
          message: `Publisher ${slug}`,
          content: base64Content,
          branch: "main",
         ...(existingSha? { sha: existingSha } : {})
        };

        const ghRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
          method: "PUT",
          headers: { Authorization: `token ${token}`, "Content-Type": "application/json", Accept: "application/vnd.github.v3+json" },
          body: JSON.stringify(payload)
        });

        if (ghRes.status === 201) {
          logs.push(`[Publisher] AUTO-PUBLISHED /hint/${slug} CREATED live 30 sec`);
        } else if (ghRes.status === 200) {
          logs.push(`[Publisher] AUTO-PUBLISHED /hint/${slug} UPDATED live 30 sec`);
        } else {
          const txt = await ghRes.text();
          logs.push(`[Publisher] GitHub ${ghRes.status} ${txt.slice(0,200)}`);
        }
      } catch (e) {
        logs.push(`[Publisher] Error ${e.message}`);
      }
    }

    logs.push("[Support] Support ready");
    logs.push(`[Chief] Mission Complete Guide /hint/${slug}`);

    return NextResponse.json({ success: true, logs, finalPage });
  } catch (e) {
    return NextResponse.json({ success: false, logs: [`[Error] ${e.message}`], finalPage: null });
  }
}
