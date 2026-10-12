export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate 1 old wisdom hint max 15 words. Return ONLY JSON: {"hint":"your text"}` }] }]
      })
    });
    const data = await res.json();
    let text = data.candidates[0].content.parts[0].text.replace(/```/g, '').trim();
    const m = text.match(/\{.*\}/s);
    if (m) text = m[0];
    const j = JSON.parse(text);
    return Response.json(j);
  } catch {
    return Response.json({ hint: "Patience is the oldest wealth." });
  }
}
