export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  const expected = process.env.AGENT_SECRET || 'goldy_oldhint_91_secure';

  if (secret!== expected) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Missing GEMINI_API_KEY - add in Vercel Settings > Environment Variables' }, { status: 500 });
  }

  const prompt = `You are OldHint.com. Generate 1 timeless old wisdom hint (max 20 words). Return ONLY valid JSON: {"hint":"your hint here","category":"Wisdom","era":"Ancient","source":"Old Proverb"}`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      cache: 'no-store'
    });

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const jsonStr = text.replace(/```json|```/g, '').trim();
    const hintData = JSON.parse(jsonStr);

    return Response.json({
      success: true,
      live: true,
      generated_at: new Date().toISOString(),
     ...hintData
    });

  } catch (e) {
    return Response.json({ success: false, error: e.message, hint: { hint: "Patience is the oldest wealth.", category: "Wisdom" } }, { status: 500 });
  }
}
