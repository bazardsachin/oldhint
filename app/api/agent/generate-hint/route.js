export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');

  // Allow your secret
  if (secret!== 'goldy_oldhint_91_secure' && secret!== process.env.AGENT_SECRET) {
    return Response.json({ error: 'Unauthorized - wrong secret' }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ success: false, error: 'GEMINI_API_KEY missing in Vercel env vars' }, { status: 500 });
  }

  // This will try models in order until one works
  const modelsToTry = ['gemini-1.5-flash', 'gemini-3.8-flash', 'gemini-2.0-flash'];
  const prompt = `Generate 1 timeless old wisdom hint (max 15 words). Return ONLY valid JSON like {"hint":"Patience is the oldest wealth.","category":"Wisdom","era":"Ancient"}`;

  for (const model of modelsToTry) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await res.json();

      if (!res.ok) continue; // try next model

      let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      if (!text) continue;

      text = text.replace(/```json|```/g, '').replace(/```/g, '').trim();
      const hintData = JSON.parse(text);

      return Response.json({
        success: true,
        live: true,
        model_used: model,
        generated_at: new Date().toISOString(),
       ...hintData
      });

    } catch (e) {
      // try next model
      continue;
    }
  }

  // If all models fail, return fallback so site never breaks
  return Response.json({
    success: true,
    model_used: 'fallback',
    hint: "Patience is the oldest wealth.",
    category: "Wisdom",
    era: "Ancient",
    source: "Old Proverb",
    note: "All Gemini models failed - check your API key at aistudio.google.com/app/apikey"
  });
}
