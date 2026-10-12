export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate 1 old wisdom hint max 12 words. Return ONLY JSON like {"hint":"your text"}` }] }]
      })
    });
    const data = await res.json();
    let text = data.candidates[0].content.parts[0].text.replace(/```json/g, '').replace(/```/g, '').trim();
    const m = text.match(/\{.*\}/s);
    if (m) text = m[0];
    const j = JSON.parse(text);
    return Response.json(j);
  } catch (e) {
    return Response.json({ hint: "Time reveals what reason cannot." });
  }
}
