export async function publisherAgent(slug, title, content) {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER || "bazardsachin";
  const repo = process.env.GITHUB_REPO || "oldhint";

  if (!token) {
    return { success: false, log: "[Publisher] ❌ No GITHUB_TOKEN — Add in Vercel Env" };
  }

  const filePath = `app/hint/${slug}/page.js`;
  const fileCode = `export default function Page() {
  return (
    <div style={{maxWidth:"800px", margin:"40px auto", padding:"20px", fontFamily:"sans-serif", lineHeight:"1.7"}}>
      <a href="/">← Back to OldHint</a>
      <h1>${title}</h1>
      <div style={{whiteSpace:"pre-wrap"}}>${content}</div>
      <p><b>Founder:</b> Sachin Bazard — Calgary T3J | OldHint Inc. 8 AI Employees Online 🟢</p>
      <p><a href="https://www.youtube.com/results?search_query=${slug}" target="_blank">▶️ Watch Video</a></p>
    </div>
  );
}
`;

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
    method: "PUT",
    headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: `🤖 Publisher Agent: Auto-publish ${slug}`,
      content: Buffer.from(fileCode).toString("base64"),
      branch: "main"
    })
  });

  if (res.status === 201 || res.status === 200) {
    return { success: true, log: `[Publisher] ✅ AUTO-PUBLISHED: /hint/${slug} — Vercel deploying in 20 sec!`, url: `/hint/${slug}` };
  } else {
    const err = await res.json();
    return { success: false, log: `[Publisher] ❌ Failed: ${JSON.stringify(err).slice(0,200)}` };
  }
}
