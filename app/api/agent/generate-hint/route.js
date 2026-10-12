export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  if (secret!== 'goldy_oldhint_91_secure' && secret!== process.env.AGENT_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return Response.json({ success: false, error: 'No API key' }, { status: 500 });

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate 1 timeless wisdom hint for oldhint.com. Return ONLY JSON like {"hint":"Patience is the oldest wealth","category":"Wisdom","era":"Ancient"} Max 15 words.` }] }],
        generationConfig: { temperature: 0.9 }
      })
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json({ success: false, google_error: data }, { status: 500 });
    }

    const candidate = data?.candidates?.[0];
    let text = candidate?.content?.parts?.[0]?.text || '';

    if (!text) {
      return Response.json({ success: false, error: 'Empty text from Gemini', full_data: data }, { status: 500 });
    }

    // Clean markdown
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) text = jsonMatch[0];

    const hintData = JSON.parse(text);

    return Response.json({
      success: true,
      live: true,
      model_used: 'gemini-3.8-flash',
      generated_at: new Date().toISOString(),
     ...hintData
    });

  } catch (e) {
    return Response.json({
      success: false,
      error: 'Cannot read properties',
      details: e.message,
      fix: 'Check Vercel logs, but fallback below keeps site alive',
      hint: "Patience is the oldest wealth.",
      category: "Wisdom"
    }, { status: 500 });
  }
}
