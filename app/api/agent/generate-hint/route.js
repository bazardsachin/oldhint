export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  if (secret!== 'goldy_oldhint_91_secure' && secret!== process.env.AGENT_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const modelsToTry = ['gemini-1.5-flash', 'gemini-1.5-flash-latest', 'gemini-2.0-flash', 'gemini-2.5-flash', 'gemini-3.8-flash'];

  const results = [];

  for (const model of modelsToTry) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Return JSON: {"hint":"test"}` }] }]
        })
      });
      const data = await res.json();
      results.push({ model, status: res.status, ok: res.ok, response: data });
      if (res.ok) {
        return Response.json({ success: true, model_used: model, full_response: data, all_attempts: results });
      }
    } catch (e) {
      results.push({ model, error: e.message });
    }
  }

  // Also try to list available models for this key
  try {
    const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const listRes = await fetch(listUrl);
    const listData = await listRes.json();
    results.push({ list_models_attempt: listData, list_status: listRes.status });
  } catch (e) {
    results.push({ list_error: e.message });
  }

  return Response.json({ success: false, model_used: 'fallback', all_errors: results, hint: "Patience is the oldest wealth.", note: "See all_errors above" });
}
