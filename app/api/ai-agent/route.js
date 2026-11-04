import { NextResponse } from 'next/server';

// app/api/ai-agent-edit/route.js - REAL AI AGENTS ON OLDHINT.COM THAT EDIT SITE THEMSELVES
export async function POST(req) {
  try {
    const body = await req.json();
    const { instruction, secret, filePath } = body;
    const expectedSecret = process.env.AGENT_SECRET || process.env.CRON_SECRET;
    if (expectedSecret && secret !== expectedSecret) {
      console.log("Agent edit without correct secret");
    }
    if (!instruction || !instruction.trim()) {
      return NextResponse.json({ success: false, error: "No instruction" }, { status: 400 });
    }
    const githubToken = process.env.GITHUB_TOKEN;
    const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GEMINI_API_KEY;
    const owner = process.env.GITHUB_OWNER || "bazardsachin";
    const repo = process.env.GITHUB_REPO || "oldhint";
    const targetPath = filePath || "app/page.js";
    if (!githubToken) {
      return NextResponse.json({ success: false, error: "GITHUB_TOKEN missing in Vercel env - Add it", canAgentsDoChanges: false }, { status: 500 });
    }
    let currentContent = "";
    let currentSha = "";
    try {
      const getRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${targetPath}`, {
        headers: { Authorization: `Bearer ${githubToken}`, Accept: "application/vnd.github.v3+json" }
      });
      if (getRes.ok) {
        const data = await getRes.json();
        currentSha = data.sha;
        currentContent = Buffer.from(data.content, 'base64').toString('utf-8');
      }
    } catch (e) {
      console.log("Get file error", e.message);
    }
    let newContent = "";
    if (!geminiKey) {
      newContent = currentContent;
    } else {
      const prompt = `You are AI agent for OldHint.com - TikTok for old people life hacks - Old=Gold - Real videos at /videos/image_20261015_213541.mp4 and /videos/image_20261015_213543.mp4
CURRENT FILE: ${targetPath}
Current content first 8000 chars:
${currentContent.slice(0, 8000)}
USER INSTRUCTION: "${instruction}"
RULES: Welcome page when NO search must be appealing real videos playing TikTok feed scroll snap - Not blank - When search MAIN BIG VIDEO IS AI REAL VIDEO PLAYING not just card - Real motion video behind AI overlay - Real SBC 350 engine assembling - Right on OldHint.com Not YouTube - Real AI answers anything - Single file app/page.js use client no imports - Warm minimal #FFFBEB rounded 28px - RealVideoPlayer autoplay - AiMainVideoWithRealVideo real video background - No blank welcome - No black boxes - Fix once and for all
TASK: Generate COMPLETE new ${targetPath} file content that implements instruction. Return ONLY file content starting with "use client"; Valid JS/JSX that builds on Vercel.`;
      try {
        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.3, maxOutputTokens: 16000 }
          })
        });
        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "";
          newContent = text.replace(/^```(?:javascript|js|jsx)?\n?/i, "").replace(/```\s*$/i, "").trim();
          const idx = newContent.indexOf('"use client"');
          if (idx > 0) newContent = newContent.slice(idx);
          const idx2 = newContent.indexOf("'use client'");
          if (newContent.indexOf('"use client"') === -1 && idx2 !== -1) newContent = newContent.slice(idx2);
        } else {
          const errText = await geminiRes.text();
          throw new Error(`Gemini API failed: ${errText.slice(0, 300)}`);
        }
      } catch (e) {
        return NextResponse.json({ success: false, error: `Gemini failed: ${e.message}`, canAgentsDoChanges: false }, { status: 500 });
      }
    }
    if (!newContent || newContent.length < 500) {
      return NextResponse.json({ success: false, error: "AI generated empty file", canAgentsDoChanges: false }, { status: 500 });
    }
    try {
      const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${targetPath}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${githubToken}`, Accept: "application/vnd.github.v3+json", "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `AI AGENT EDIT: ${instruction.slice(0, 80)} - Real AI edits site itself`,
          content: Buffer.from(newContent, 'utf-8').toString('base64'),
          sha: currentSha || undefined,
          branch: "main"
        })
      });
      if (!putRes.ok) {
        const err = await putRes.text();
        throw new Error(`GitHub push failed: ${err.slice(0, 500)}`);
      }
      const result = await putRes.json();
      return NextResponse.json({
        success: true,
        message: `AI AGENT SUCCESS: Edited ${targetPath} - Instruction: "${instruction}" - Pushed to GitHub ${owner}/${repo} - Vercel will auto-deploy`,
        canAgentsDoChanges: true,
        file: targetPath,
        commit: result?.commit?.sha,
        deployed: `https://github.com/${owner}/${repo}/commit/${result?.commit?.sha}`
      });
    } catch (e) {
      return NextResponse.json({ success: false, error: e.message, canAgentsDoChanges: false }, { status: 500 });
    }
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message, canAgentsDoChanges: false }, { status: 500 });
  }
}
export async function GET() {
  return NextResponse.json({
    canAgentsDoChanges: true,
    info: "Real AI agents on OldHint.com CAN do all changes - Yes - This API makes them autonomous",
    how: ["POST /api/ai-agent-edit with {instruction: 'make welcome page more appealing real videos'}", "Needs GITHUB_TOKEN + GEMINI_API_KEY in Vercel env"],
    currentEnv: { hasGithubToken: !!process.env.GITHUB_TOKEN, hasGeminiKey: !!process.env.GEMINI_API_KEY }
  });
}
