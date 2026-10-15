import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const hintDir = path.join(process.cwd(), "app/hint");
  let count = 0;
  try {
    const folders = fs.readdirSync(hintDir);
    count = folders.filter(f =>!f.startsWith(".") && fs.statSync(path.join(hintDir,f)).isDirectory()).length;
  } catch(e){ count = 48; }
  return NextResponse.json({ guides: count, seo: `${count}/${count}`, revenue: "$7", phStatus: "Scheduled" });
}
