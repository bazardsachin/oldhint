export const dynamic = 'force-dynamic';

const FALLBACKS = [
  { title: "Patience Wins", hint: "Wait 24 hours before big decisions.", cat: "Life", why: "Emotions fade, wisdom stays.", long: "Old traders waited a day before big trades." },
  { title: "Old Money Rule", hint: "Pay yourself first 10% always.", cat: "Money", why: "You adapt to what's left.", long: "Rockefeller rule." },
  { title: "Fix Zipper Fast", hint: "Rub pencil on stuck zipper.", cat: "Life", why: "Graphite is clean lube.", long: "Tailors trick 1920s." },
];

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  let hint = FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
  let source = "fallback";

  try {
    if (apiKey) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Generate 1 old timeless hint. Return ONLY JSON: {"title":"short","hint":"max 15 words","cat":"Life or Money or Tech or Games","why":"why max 12 words","long":"2 sentences"}` }] }]
        })
      });
      const data = await res.json();
      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        let t = data.candidates[0].content.parts[0].text.replace(/```json/g,'').replace(/```/g,'').trim();
        const m = t.match(/\{.*\}/s); if (m) t = m[0];
        hint = JSON.parse(t);
        source = "AI";
      }
    }
  } catch (e) {}

  return Response.json({
    success: true,
    time: new Date().toISOString(),
    source,
    hint,
    message: "Cron ran at 9am Calgary — Agent posted"
  });
}
