export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  if (secret!== 'goldy_oldhint_91_secure' && secret!== process.env.AGENT_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const model = 'gemini-3.8-flash';

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Generate 1 timeless wisdom hint for oldhint.com. Return ONLY JSON: {"hint":"Patience is the oldest wealth","category":"Wisdom","era":"Ancient"}` }] }],
          generationConfig: { temperature: 0.9 }
        })
      });

      const data = await res.json();

      if (res.status=== 503 && attempt < 3) {
        await new Promise(r => setTimeout(r, 2000 * attempt)); // wait 2s, 4s
        continue;
      }

      if (!res.ok) {
        return Response.json({ success: false, google_error: data, attempt }, { status: 500 });
      }

      let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      text = text.replace(/```json|```/g, '').trim();
      const match = text.match(/\{[\s\S]*\}/);
      if (match) text = match[0];
      const hintData = JSON.parse(text);

      return Response.json({
        success: true,
        live: true,
        model_used: model,
        attempt,
        generated_at: new Date().toISOString(),
      ...hintData
      });

    } catch (e) {
      if (attempt=== 3) {
        return Response.json({ success: true, model_used: 'fallback (503 busy)', hint: "Even the busiest sky finds time for stars.", category: "Wisdom", era: "Ancient", note: "Gemini 3.8 busy, will auto-retry next time" });
      }
    }
  }
}
