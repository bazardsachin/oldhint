export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  if (secret!== 'goldy_oldhint_91_secure' && secret!== process.env.AGENT_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate 1 short timeless wisdom hint for oldhint.com. Return ONLY valid JSON: {"hint":"your wisdom max 15 words","category":"Wisdom","era":"Ancient"}` }] }]
      })
    });

    const data = await res.json();
    let text = data.candidates[0].content.parts[0].text;
    text = text.replace(/```json|```/g, '').trim();
    const hint = JSON.parse(text);

    return Response.json({ success: true, live: true, model_used: 'gemini-3.8-flash',...hint, generated_at: new Date().toISOString() });
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 });
  }
}
