export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  const fallbacks = [
    "A smooth sea never made a skilled sailor.",
    "Patience is the oldest wealth.",
    "Silence teaches what words cannot.",
    "Time reveals what reason cannot.",
    "The wound is where the light enters."
  ];

  if (!apiKey) {
    return Response.json({ hint: fallbacks[Math.floor(Math.random() * fallbacks.length)] });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

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
      return Response.json({ hint: fallbacks[Math.floor(Math.random() * fallbacks.length)] });
    }
    let t = data.candidates[0].content.parts[0].text.replace(/```json/g,'').replace(/```/g,'').trim();
    const m = t.match(/\{.*\}/s); if (m) t = m[0];
    return Response.json(JSON.parse(t));
  } catch {
    return Response.json({ hint: fallbacks[Math.floor(Math.random() * fallbacks.length)] });
  }
}
