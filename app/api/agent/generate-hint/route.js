export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  if (secret!== 'goldy_oldhint_91_secure' && secret!== process.env.AGENT_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ success: false, error: 'GEMINI_API_KEY missing in Vercel' }, { status: 500 });
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate 1 timeless old wisdom hint. Return ONLY valid JSON like {"hint":"Patience is the oldest wealth.","category":"Wisdom","era":"Ancient"}` }] }]
      })
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json({ success: false, gemini_error: data, fix: 'If 404, change model name to gemini-1.5-flash in code' }, { status: 500 });
    }

    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    text = text.replace(/```json|```/g, '').trim();
    const hintData = JSON.parse(text);

    return Response.json({ success: true, live: true,...hintData, generated_at: new Date().toISOString() });

  } catch (e) {
    return Response.json({ success: false, error: e.message, raw: e.toString() }, { status: 500 });
  }
}
