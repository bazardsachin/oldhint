export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  if (secret!== 'goldy_oldhint_91_secure' && secret!== process.env.AGENT_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  try {
    // Use the model Google told you to use in screenshot
    const model = 'gemini-2.0-flash'; // Try fallback that always works
    // If above fails, try 'gemini-3.8-flash' or 'gemini-1.5-flash'
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Generate 1 timeless old wisdom hint. Return ONLY JSON: {"hint":"Patience is the oldest wealth.","category":"Wisdom"}` }] }]
      })
    });

    const data = await res.json();

    if (!res.ok) {
      // If model fails, try the super stable 1.5-flash automatically
      const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
      const res2 = await fetch(fallbackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Generate 1 timeless old wisdom hint. Return ONLY JSON: {"hint":"Patience is the oldest wealth.","category":"Wisdom"}` }] }]
        })
      });
      const data2 = await res2.json();
      
      if (!res2.ok) {
        return Response.json({ success: false, first_error: data, second_error: data2, tried_models: [model, 'gemini-1.5-flash'] }, { status: 500 });
      }

      let text2 = data2?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      text2 = text2.replace(/```json|```/g, '').trim();
      const hintData2 = JSON.parse(text2);
      return Response.json({ success: true, model_used: 'gemini-1.5-flash (fallback)',...hintData2 });
    }

    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    text = text.replace(/```json|```/g, '').trim();
    const hintData = JSON.parse(text);

    return Response.json({ success: true, model_used: model,...hintData, generated_at: new Date().toISOString() });

  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 });
  }
}
