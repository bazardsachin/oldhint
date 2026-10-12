import { NextResponse } from "next/server";
export async function GET() {
  const hints = [
    { title: "Fix Zipper Fast", hint: "Rub pencil graphite on stuck zipper", why: "Dry lube trick", cat: "Life", long: "1950s tailor" },
    { title: "Biryani Dum Secret", hint: "Seal pot with dough, low flame 20 min, ghee + kewra", why: "Traps aroma", cat: "Food", long: "Hyderabadi" },
    { title: "Coffee Stain Gone", hint: "Vinegar + dish soap 1:1, dab 5 min", why: "Cuts tannin", cat: "Cleaning", long: "Grandma" },
  ];
  const hint = hints[Math.floor(Math.random()*hints.length)];
  return NextResponse.json({ hint, source: "AI", time: new Date().toISOString() });
}
