import { NextResponse } from "next/server";
export async function GET() {
  try {
    const owner = "bazardsachin";
    const repo = "oldhint";
    const token = process.env.GITHUB_TOKEN;
    let count = 50;
    if (token) {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/app/hint?ref=main`, {
        headers: { Authorization: `token ${token}` },
        cache: "no-store"
      });
      if (res.ok) {
        const data = await res.json();
        count = data.filter(f => f.type === "dir").length;
      }
    }
    return NextResponse.json({ guides: count });
  } catch { return NextResponse.json({ guides: 50 }); }
}
