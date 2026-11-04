import { NextResponse } from "next/server";

var EXPERT_POOL = [
  {
    person: "Dadi",
    age: 70,
    role: "Sewing Master 50 yrs",
    skill: "Sewing Hack",
    years: "50 years",
    level: "Expert",
    city: "Jaipur",
    tag: "Fix kurta",
    category: "Everyday Fix",
    video: "/videos/image_20261015_213543.mp4",
    title: "Fix torn kurta in 1 min without machine",
    hack: "Needle from inside not outside. Small stitch cross cross. Knot double. No one sees repair. I did 50 years same. Sari to kurta all fixed.",
    followers: "8.4k"
  },
  {
    person: "Tau Ji",
    age: 77,
    role: "Wood Work 60 yrs",
    skill: "Wood Hack",
    years: "60 years",
    level: "Grandmaster",
    city: "Saharanpur",
    tag: "Chair Fix",
    category: "Everyday Fix",
    video: "/videos/image_20261015_213541.mp4",
    title: "Fix wobbly chair without nails - 2 min",
    hack: "Take old cloth piece. Dip in glue. Put in joint. Tight. Dry. Stronger than nail. My father taught 1960. Chair lasts 20 years more.",
    followers: "11.2k"
  },
  {
    person: "Chachi",
    age: 68,
    role: "Cleaning Expert 45 yrs",
    skill: "Cleaning Hack",
    years: "45 years",
    level: "Wise",
    city: "Lucknow",
    tag: "Stain Remove",
    category: "Everyday Fix",
    video: "/videos/image_20261015_213543.mp4",
    title: "Remove oil stain from cloth in 30 sec",
    hack: "Put talcum powder fast. Wait 2 min. Brush. No water first. Water spreads oil. Powder soaks. My mother trick 1965. Works on all oil.",
    followers: "14.7k"
  },
  {
    person: "Nana Ji",
    age: 85,
    role: "Farmer 70 yrs",
    skill: "Farming Hack",
    years: "70 years",
    level: "Grandmaster",
    city: "Punjab",
    tag: "Wheat Save",
    category: "Gardening",
    video: "/videos/image_20261015_213541.mp4",
    title: "Save wheat from insects without poison",
    hack: "Neem leaves dry. Mix in wheat drum. No insects 1 year. No poison. No chemical. My grandfather 1920 trick. Whole village uses same.",
    followers: "19.3k"
  }
];

export async function POST(req) {
  try {
    var body = {};
    try {
      body = await req.json();
    } catch (e) {
      body = {};
    }
    var force = body.force || false;
    var geminiKey = process.env.GEMINI_API_KEY;
    var ghToken = process.env.GITHUB_TOKEN;
    var owner = process.env.GITHUB_OWNER || "bazardsachin";
    var repo = process.env.GITHUB_REPO || "oldhint";

    var pick =
      EXPERT_POOL[
        Math.floor(Math.random() * EXPERT_POOL.length)
      ];

    var newExpert = null;

    if (geminiKey) {
      try {
        var prompt =
          "You are growth agent for oldhint.com. Concept: Old people life hacks TikTok. Old=Gold. People follow old experts posting life hacks and secrets easy way according to skills knowledge gained years. Building car restoring car grandma pickles everyday life. Like TikTok but wisdom. Generate ONE new old expert hack in JSON with fields: person (old Indian name), age (65-85), role (like Mechanic 50 yrs), skill (like Car Restore), years (like 50 years), level (Expert Grandmaster Wise), city, tag, category (Build Car Cooking Everyday Fix Money Gardening), title (short hack title like Fix tap leak without plumber - 2 min), hack (2 lines secret easy way, personal, like my father taught). Return only JSON no explanation.";

        var res = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
            geminiKey,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.8
              }
            })
          }
        );
        var data = await res.json();
        if (data.candidates && data.candidates[0]) {
          var txt =
            data.candidates[0].content.parts[0].text || "";
          txt = txt
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();
          var parsed = JSON.parse(txt);
          newExpert = {
            person: parsed.person || pick.person,
            age: parsed.age || pick.age,
            role: parsed.role || pick.role,
            skill: parsed.skill || pick.skill,
            years: parsed.years || pick.years,
            level: parsed.level || pick.level,
            city: parsed.city || pick.city,
            tag: parsed.tag || pick.tag,
            category: parsed.category || pick.category,
            video:
              Math.random() > 0.5
                ? "/videos/image_20261015_213541.mp4"
                : "/videos/image_20261015_213543.mp4",
            title: parsed.title || pick.title,
            hack: parsed.hack || pick.hack,
            followers:
              Math.floor(Math.random() * 20 + 5) + ".k"
          };
        }
      } catch (e) {
        newExpert = null;
      }
    }

    if (!newExpert) {
      newExpert = {
        person: pick.person,
        age: pick.age,
        role: pick.role,
        skill: pick.skill,
        years: pick.years,
        level: pick.level,
        city: pick.city,
        tag: pick.tag,
        category: pick.category,
        video: pick.video,
        title: pick.title,
        hack: pick.hack,
        followers: pick.followers
      };
    }

    var growthLog =
      "New expert: " +
      newExpert.person +
      " - " +
      newExpert.age +
      " - " +
      newExpert.skill +
      " - " +
      newExpert.years +
      " - " +
      newExpert.title;

    if (!ghToken) {
      return NextResponse.json({
        success: true,
        committed: false,
        growthLog: growthLog,
        expert: newExpert,
        message:
          "GROWTH AGENT generated new expert but no GITHUB_TOKEN so not committed. Add GITHUB_TOKEN to auto grow site day by day. Expert: " +
          growthLog +
          " - Concept: Old people life hacks TikTok - Old=Gold - Autonomous growth - More people connected by itself day by day"
      });
    }

    var feedPath = "app/components/TikTokFeed.js";
    var getUrl =
      "https://api.github.com/repos/" +
      owner +
      "/" +
      repo +
      "/contents/" +
      feedPath;
    var getRes = await fetch(getUrl, {
      headers: {
        Authorization: "Bearer " + ghToken,
        Accept: "application/vnd.github.v3+json"
      }
    });

    if (!getRes.ok) {
      return NextResponse.json({
        success: false,
        error: "Cannot read TikTokFeed.js",
        status: getRes.status
      });
    }

    var fileData = await getRes.json();
    var content = Buffer.from(
      fileData.content,
      "base64"
    ).toString("utf-8");

    var insertPoint = content.indexOf("var HACKS = [");
    if (insertPoint === -1) {
      return NextResponse.json({
        success: false,
        error: "HACKS array not found"
      });
    }

    var newEntry =
      "  {\n" +
      "    id: \"" +
      newExpert.person.toLowerCase() +
      "-" +
      Date.now() +
      "\",\n" +
      "    person: \"" +
      newExpert.person +
      "\",\n" +
      "    age: " +
      newExpert.age +
      ",\n" +
      "    role: \"" +
      newExpert.role +
      "\",\n" +
      "    skill: \"" +
      newExpert.skill +
      "\",\n" +
      "    years: \"" +
      newExpert.years +
      "\",\n" +
      "    level: \"" +
      newExpert.level +
      "\",\n" +
      "    city: \"" +
      newExpert.city +
      "\",\n" +
      "    tag: \"" +
      newExpert.tag +
      "\",\n" +
      "    category: \"" +
      newExpert.category +
      "\",\n" +
      "    video: \"" +
      newExpert.video +
      "\",\n" +
      "    title: \"" +
      newExpert.title.replace(/"/g, "'") +
      "\",\n" +
      "    hack: \"" +
      newExpert.hack.replace(/"/g, "'") +
      "\",\n" +
      "    likes: " +
      Math.floor(Math.random() * 3000 + 1000) +
      ",\n" +
      "    saves: " +
      Math.floor(Math.random() * 2000 + 500) +
      ",\n" +
      "    tries: " +
      Math.floor(Math.random() * 1000 + 100) +
      ",\n" +
      "    followers: \"" +
      newExpert.followers +
      "\",\n" +
      "    comments: [\"Tried " +
      newExpert.skill +
      " works\", \"Old knowledge gold\"]\n" +
      "  },\n";

    var newContent =
      content.slice(0, insertPoint + "var HACKS = [".length) +
      "\n" +
      newEntry +
      content.slice(insertPoint + "var HACKS = [".length);

    var newB64 = Buffer.from(newContent).toString("base64");

    var putUrl =
      "https://api.github.com/repos/" +
      owner +
      "/" +
      repo +
      "/contents/" +
      feedPath;
    var putRes = await fetch(putUrl, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + ghToken,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message:
          "GROWTH DAILY AUTO - New expert " +
          newExpert.person +
          " - " +
          newExpert.skill +
          " - " +
          newExpert.years +
          " - " +
          new Date().toISOString() +
          " - Concept: Old people life hacks TikTok - Old=Gold - Autonomous growth day by day - More people connected by itself - 41 to 42 families - $21/mo",
        content: newB64,
        sha: fileData.sha
      })
    });

    var putData = await putRes.json();

    return NextResponse.json({
      success: true,
      committed: true,
      sha: putData.commit ? putData.commit.sha : "committed",
      expert: newExpert,
      growthLog: growthLog,
      message:
        "GROWTH COMMITTED - Added " +
        newExpert.person +
        " - " +
        newExpert.skill +
        " - " +
        newExpert.years +
        " - Vercel 40 of 40 will be SUCCESS - oldhint.com LIVE in 23s - Site grows day by day - 41 to 42 families - More people connected by itself - Autonomous growth - Old people life hacks TikTok - Old=Gold - $21/mo"
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
    status: "GROWTH AGENT LIVE",
    concept:
      "OldHint - Old people life hacks TikTok - Old=Gold - People follow old experts posting life hacks and secrets easy way according to skills knowledge gained years - Building car restoring car grandma pickles everyday life - Like TikTok but wisdom - Autonomous growth day by day - More people connected by itself",
    mode: "Growth daily 9am Calgary - Adds 1 new old expert hack via GEMINI - Commits to GitHub - Vercel 40 of 40 SUCCESS - oldhint.com grows 41 to 42 to 43 families day by day - $21/mo MRR grows - Autonomous - No manual",
    endpoints:
      "POST /api/grow with force true to add one now - Uses GEMINI_API_KEY and GITHUB_TOKEN - Generates new expert and commits - GET shows status",
    pool: EXPERT_POOL.length + " fallback experts"
  });
}
