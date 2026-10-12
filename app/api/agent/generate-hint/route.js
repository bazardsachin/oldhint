export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  if (secret!== 'goldy_oldhint_91_secure' && secret!== process.env.AGENT_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  try {
    const model = 'gemini-3.8-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are an ancient wisdom generator for oldhint.com. Generate 1 timeless wisdom hint. Return ONLY valid JSON without markdown: {"hint":"Your wisdom here (max 15 words)","category":"Wisdom","era":"Ancient","source":"Old Proverb"} Make it short, powerful, viral.`
          }]
        }]
      })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(data));

    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    text = text.replace(/```json|```/g, '').trim();

    const hintData = JSON.parse(text);

    return Response.json({
      success: true,
      live: true,
      model_used: model,
      generated_at: new Date().toISOString(),
    ...hintData
    });

  } catch (e) {
    return Response.json({
      success: true,
      model_used: 'fallback',
      hint: "Patience is the oldest wealth.",
      category: "Wisdom",
      era: "Ancient",
      error_detail: e.message
    });
  }
}
