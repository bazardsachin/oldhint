export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json({ hint: "Wisdom waits for those who seek." });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Generate 1 old wisdom hint max 12 words about life. Return ONLY valid JSON like {"hint":"your text here"}`
          }]
        }]
      })
    });

    const data = await res.json();

    if (!data.candidates) {
      return Response.json({ full_error: data, hint: "API error" });
    }

    let text = data.candidates[0].content.parts[0].text;
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const m = text.match(/\{.*\}/s);
    if (m) text = m[0];

    const j = JSON.parse(text);
    return Response.json(j);

  } catch (e) {
    return Response.json({ error: e.message, hint: "Stillness holds answers." });
  }
}
