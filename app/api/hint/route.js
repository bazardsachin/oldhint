export const dynamic = 'force-dynamic';
export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "NO_KEY", hint: "Add GEMINI_API_KEY in Vercel" });
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate 1 old wisdom hint max 12 words. Return ONLY JSON {"hint":"text"}` }] }]
      })
    });
    const data = await res.json();
    if (!data.candidates) {
      return Response.json({ gemini_error: data, hint: "Gemini blocked key" });
    }
    let t = data.candidates[0].content.parts[0].text.replace(/```json/g,'').replace(/```/g,'').trim();
    const m = t.match(/\{.*\}/s); if (m) t = m[0];
    return Response.json(JSON.parse(t));
  } catch (e) {
    return Response.json({ catch_error: e.message, hint: "Catch failed" });
  }
}
