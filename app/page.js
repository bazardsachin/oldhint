import Link from "next/link";
export default function Home() {
  return (
    <main style={{ minHeight:'100vh', background:'#fff', color:'#000', fontFamily:'system-ui', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'20px' }}>
      <h1 style={{ fontSize:'64px', fontWeight:'900', letterSpacing:'-3px', margin:0 }}>oldhint</h1>
      <p style={{ opacity:0.6, marginTop:'8px' }}>Google for grandma wisdom • 7 Agents • Full guides + videos</p>
      <form action="/search" method="GET" style={{ marginTop:'28px', display:'flex', gap:'10px', width:'100%', maxWidth:'600px' }}>
        <input name="q" placeholder="Search biryani, faucet, stain, 350 engine..." style={{ flex:1, padding:'16px 20px', borderRadius:'28px', border:'1px solid #ddd', fontSize:'16px' }} />
        <button style={{ padding:'16px 28px', borderRadius:'28px', background:'#000', color:'#fff', border:'none', fontWeight:'bold' }}>Search</button>
      </form>
      <div style={{ display:'flex', gap:'10px', marginTop:'18px', flexWrap:'wrap', justifyContent:'center' }}>
        <Link href="/explore" style={{ padding:'12px 20px', background:'#000', color:'#fff', borderRadius:'24px', textDecoration:'none', fontWeight:'bold', fontSize:'13px' }}>🌍 Explore 48 Guides</Link>
        <Link href="/ebook" style={{ padding:'12px 20px', background:'#f2f2f2', borderRadius:'24px', textDecoration:'none', color:'#000', fontSize:'13px', border:'1px solid #ddd' }}>📕 $7 Ebook</Link>
      </div>
      <p style={{ marginTop:'40px', fontSize:'11px', opacity:0.3 }}>Calgary • Sachin Bazard • 7 Agents • oldhint.com</p>
    </main>
  );
}
