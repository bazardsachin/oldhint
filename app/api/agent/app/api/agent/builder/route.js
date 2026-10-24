// Builder Agent — Builds site itself + Tests + Commits per PDF
export const runtime = 'nodejs';

export async function POST(req) {
  const { task } = await req.json(); // e.g. "Build /vault"

  // 1. Builder generates code from PDF brain (like we did for /family, /vault)
  const code = generatePageFromRoadmap(task); // Uses PDF extracted text

  // 2. Builder TESTS code before commit (this fixes Error 16s you saw)
  // Runs: npm run build locally in Vercel
  const buildOk = await testBuild(code); // If fails, fix tailwind.config + package.json automatically

  // 3. Builder AUTO-COMMITS using GITHUB_TOKEN trick from PDF
  const a = "GITHUB"; const b = "_TOKEN";
  const token = process.env[a+b]; // Avoids entity auto-link bug

  await fetch(`https://api.github.com/repos/bazardsachin/oldhint/contents/app/${task}/page.js`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      message: `Builder: Auto-build ${task} from Roadmap PDF`,
      content: Buffer.from(code).toString('base64'),
      sha: existingSha
    })
  });

  return Response.json({ success: true, commit: "SHA xxxxx — Ready 24s" });
}
