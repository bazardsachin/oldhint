export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  const topics = ["Life hack from 1950s", "Money trick grandma used", "Old tech fix", "Ancient game wisdom", "Kitchen trick from 1920s"];
  const topic = topics[Math.floor(Math.random() * topics.length)];

  if (!apiKey) {
    return Response.json({ error: "No API key", hint: { title: "Fallback Hint", hint: "Patience is wealth", cat: "Life" } });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate 1 old timeless hint about "${topic}". Return ONLY JSON: {"title":"short title max 4 words","hint":"hint max 15 words","cat":"Life or Money or Tech or Games","why":"why it works max 12 words","long":"long explanation 2 sentences"}` }] }]
      })
    });
    const data = await res.json();
    if (!data.candidates) return Response.json({ error: "AI limit", fallback: true });

    let t = data.candidates[0].content.parts[0].text.replace(/```json/g,'').replace(/```/g,'').trim();
    const m = t.match(/\{.*\}/s); if (m) t = m[0];
    const hint = JSON.parse(t);

    // Here agent would save to DB — for now return
    return Response.json({ success: true, hint, message: "Agent generated hint — ready to auto-post" });
  } catch (e) {
    return Response.json({ error: e.message });
  }
}
