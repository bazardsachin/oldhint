export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  if (secret!== 'goldy_oldhint_91_secure' && secret!== process.env.AGENT_SECRET) {
    return Response.json({ error: 'Unauthorized - add AGENT_SECRET=goldy_oldhint_91_secure in Vercel' }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ success: false, error: 'GEMINI_API_KEY missing in Vercel Environment Variables' }, { status: 500 });
  }

  try {
    // Use latest free model
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate 1 timeless wisdom hint. Return ONLY JSON like {"hint":"Never share your plans, show your results.","category":"Wisdom"}` }] }]
      })
    });

    const data = await res.json();

    // SHOW REAL GEMINI ERROR
    if (!res.ok) {
      return Response.json({ success: false, step: 'Gemini API error', gemini_raw: data, fix: 'Go to https://aistudio.google.com/app/apikey and create NEW key, then enable Generative Language API' }, { status: 500 });
    }

    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    text = text.replace(/```json|```/g, '').trim();

    if (!text) {
      return Response.json({ success: false, step: 'Empty text from Gemini', raw_response: data }, { status: 500 });
    }

    const hintData = JSON.parse(text);
    return Response.json({ success: true, live: true,...hintData, generated_at: new Date().toISOString() });

  } catch (e) {
    return Response.json({ success: false, error: e.message, stack: e.toString(), fallback_hint: { hint: "Patience is the oldest wealth.", category: "Wisdom" } }, { status: 500 });
  }
}
