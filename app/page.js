async function getHint() {
  try {
    const res = await fetch('https://oldhint.com/api/hint', { next: { revalidate: 3600 } });
    const data = await res.json();
    return data.hint || "Wisdom begins in wonder.";
  } catch {
    return "Patience is the oldest wealth.";
  }
}

export default async function Home() {
  const hint = await getHint();

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '12px', letterSpacing: '4px', opacity: 0.5, marginBottom: '30px' }}>OLDHINT</h1>
        <h2 style={{ fontSize: '32px', maxWidth: '600px', lineHeight: '1.4', fontWeight: '300' }}>"{hint}"</h2>
        <p style={{ marginTop: '40px', opacity: 0.3, fontSize: '12px' }}>New hint every hour • Ancient wisdom, modern AI</p>
      </div>
    </main>
  );
}
