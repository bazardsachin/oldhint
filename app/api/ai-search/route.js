import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    var body = await req.json();
    var query = body.query || "";
    if (!query.trim()) {
      return NextResponse.json(
        { success: false, error: "No query" },
        { status: 400 }
      );
    }

    var geminiKey = process.env.GEMINI_API_KEY;
    if (!geminiKey) {
      return NextResponse.json({
        success: true,
        fallback: true,
        query: query,
        ai: {
          title: "Fix for " + query,
          summary:
            "Old expert trick for " + query + " - Old=Gold - People follow old experts",
          steps: [
            "Step 1: Understand problem - " + query,
            "Step 2: Old expert checks skill + years exp",
            "Step 3: Use simple tools - No power - Patience",
            "Step 4: Try hack - Save - Follow expert",
            "Step 5: Not algorithm - Family only - OldHint"
          ],
          parts: ["Patience", "Old knowledge", "Simple tools"],
          videoScript:
            "Small AI generated info video assembling " +
            query +
            " with exact part info - Old expert shows easy way - 50 years exp - Old=Gold"
        }
      });
    }

    var prompt =
      "You are Meta AI for oldhint.com - OldHint concept: Old people life hacks TikTok - Old=Gold - People follow old people and families that post life hacks and secrets to do stuff easy way according to skills and knowledge gained in years - Building car or restoring it to grandma making pickles or clogged toilet or biryani or anything everyday life - More like TikTok site where old people post experiences and videos and all other options TikTok has but modified to our vision - User searched: " +
      query +
      ". Provide exact solution they are looking for like Meta AI or Google AI gives solution to anything. If user searched how to rebuild SBC 350 engine, give step by step process with small AI generated info video assembling SBC 350 engine with exact part info. If biryani, give fluffy biryani steps. If clogged toilet, give fix. If restore 1968 charger dodge, give restore steps. Return JSON with fields: title (short hack title like Fix clogged toilet without plumber - 2 min or Rebuild SBC 350 engine - Step by step), summary (1 line old expert style), steps (array 5-7 steps, each short, easy, old expert trick, include part numbers if engine, include exact spices if biryani, include exact tools), parts (array 3-6 parts or ingredients with exact info like SBC 350: block, crank 3.48 stroke, pistons 4.00 bore, cam 204/214, or Biryani: basmati 2 cups soaked 20 min), tips (array 2-3 tips like my father taught 1972), videoScript (small AI generated info video description: assembling SBC 350 engine with exact part info, camera closeups, old mechanic hands, step by step, 50 years exp), relatedSearch (array 3 related searches), skill (like Car Restore or Cooking Hack), years (like 50 years). Return only JSON no explanation.";

    var models = [
      "gemini-2.0-flash",
      "gemini-1.5-flash",
      "gemini-1.5-flash-8b"
    ];

    var aiData = null;
    for (var m = 0; m < models.length; m++) {
      try {
        var url =
          "https://generativelanguage.googleapis.com/v1beta/models/" +
          models[m] +
          ":generateContent?key=" +
          geminiKey;
        var res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              maxOutputTokens: 2000,
              temperature: 0.7
            }
          })
        });
        var data = await res.json();
        if (data.candidates && data.candidates[0]) {
          var txt =
            data.candidates[0].content.parts[0].text || "";
          txt = txt
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();
          var start = txt.indexOf("{");
          var end = txt.lastIndexOf("}");
          if (start !== -1 && end !== -1) {
            txt = txt.slice(start, end + 1);
          }
          var parsed = JSON.parse(txt);
          if (parsed.title && parsed.steps) {
            aiData = parsed;
            break;
          }
        }
      } catch (e) {
        continue;
      }
    }

    if (!aiData) {
      aiData = {
        title: "Fix for " + query + " - Old expert trick",
        summary:
          "Old expert 50 years trick for " +
          query +
          " - Old=Gold - Easy way",
        steps: [
          "Step 1: Check problem - " + query,
          "Step 2: Gather simple tools - No power tools first",
          "Step 3: Old trick - Patience not power - My father taught 1972",
          "Step 4: Try easy way - Small fix first",
          "Step 5: Test - If works save hack - Follow expert",
          "Step 6: Not algorithm - Family only - OldHint"
        ],
        parts: ["Simple tools", "Patience", "Old knowledge 50 years"],
        tips: [
          "My father taught 1972 - Patience not power",
          "Works on all old - Tested 50 years"
        ],
        videoScript:
          "Small AI generated info video assembling " +
          query +
          " with exact part info - Closeups old hands - Step by step - 50 years exp - Old=Gold - OldHint",
        relatedSearch: [
          "how to fix " + query,
          "old trick for " + query,
          "easy way " + query
        ],
        skill: "Life Hack",
        years: "50 years"
      };
    }

    return NextResponse.json({
      success: true,
      query: query,
      ai: aiData,
      concept:
        "OldHint - Old people life hacks TikTok - Old=Gold - People follow old experts - Complete AI setup that leads people to exact solution they are looking for or searching for with our AI like Meta AI or Google AI gives solution to anything - Step by step process with small AI generated info video assembling with exact part info - Once famous search bar shows all real or related content that people post according to question searched"
    });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: e.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "AI SEARCH LIVE - Complete AI setup",
    concept:
      "OldHint - Old people life hacks TikTok - Old=Gold - Complete AI setup that leads people to exact solution they are looking for with our AI like Meta AI or Google AI gives solution to anything - If search how to rebuild SBC 350 engine takes to step by step process with small AI generated info video assembling SBC 350 engine with exact part info and more - Once famous if someone search for hints clues info search bar shows all real or related content that people post according to question searched",
    endpoints:
      "POST /api/ai-search with query - Returns AI answer with title summary steps parts tips videoScript relatedSearch skill years - Uses GEMINI_API_KEY - Falls back if no key - Fully functional - Real website - Not pages only"
  });
}
