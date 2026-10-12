export async function GET() {
  return Response.json({ cron: '9am Calgary', status: 'ARMED' });
}
