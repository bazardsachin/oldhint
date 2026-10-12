export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({
    hint: "Patience is the oldest wealth.",
    category: "Wisdom",
    era: "Ancient",
    source: "test - routing works!"
  });
}
