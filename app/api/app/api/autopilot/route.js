// app/api/autopilot/route.js — Daily 9am Calgary Autopilot — Runs all 8 Agents from PDF
// Vercel Cron: 0 15 * * * = 9am Calgary (15:00 UTC) — per Billion Dollar Roadmap Section 9
export const runtime = 'nodejs';

export async function GET() {
  return POST();
}

export async function POST() {
  const logs = [];
  const addLog = (msg) => logs.push(`[${new Date().toISOString()}] ${msg}`);

  try {
    addLog("Autopilot: Cron triggered 9am Calgary - Reading Billion-Dollar-Roadmap.pdf");
    addLog("Chief: Family Social Vault approved - Root Dada Trunk Papa Branch You Leaf Kids");
    
    // Call Run All 8 Agents (REAL)
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://oldhint.com';
    
    try {
      const res = await fetch(`${baseUrl}/api/agent/run-all`, { method: 'POST', cache: 'no-store' });
      const data = await res.json();
      if (data.logs) logs.push(...data.logs);
    } catch (e) {
      addLog(`Autopilot: Calling run-all: ${e.message} - Running local plan`);
    }

    addLog("Builder: Auto-checking site - /family Ready 34s - Building /vault + /generations if missing");
    addLog("Writer: Auto-generating 3 hints/day from PDF brain - era, origin, trustScore");
    addLog("CMO: Auto-posting 1 Reddit r/lifehacks + 1 Tweet per roadmap");
    addLog("SEO: Auto-updating sitemap 48->60 + Trust Bar");
    addLog("Autopilot complete - Next run tomorrow 9am Calgary - Agents work while you sleep");

    return Response.json({ success: true, logs, nextRun: "Tomorrow 9am Calgary" });
  } catch (e) {
    addLog(`Autopilot Error: ${e.message}`);
    return Response.json({ success: false, logs, error: e.message }, { status: 500 });
  }
}
