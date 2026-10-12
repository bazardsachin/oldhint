import Link from "next/link";

const WORLD = {
  "🍛 Food": ["how to make biryani", "how to boil egg perfectly", "how to keep roti soft", "burnt pan clean", "keep rice fluffy", "how to make dal"],
  "🏠 Home": ["how to fix leaky faucet", "how to stop squeaky door", "wall hole fix", "fix running toilet", "remove wall marks"],
  "🧹 Cleaning": ["remove coffee stain", "remove grease stain", "clean microwave no scrub", "bathroom smell remove", "remove ink stain"],
  "🚗 Car/Bike": ["fix flat tire fast", "dead battery jump", "rebuild 350 engine", "clean car headlights", "remove car scratch"],
  "👕 Clothes": ["fix stuck zipper", "remove deodorant stain", "shoe shine trick", "walnut furniture scratch"],
  "💄 Beauty": ["remove dark circles", "pimple overnight fix", "hair fall oil", "cracked heels fix"],
  "💰 Money": ["save money old way", "old money rules", "negotiate price trick", "envelope budget"],
  "💻 Tech": ["speed up slow laptop", "phone battery drain fix", "wifi slow fix", "laptop overheating"]
};

export default function Home() {
  return (
    <main style={{ minHeight:'100vh', background:'#fff', color:'#000', fontFamily:'system-ui' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'20px' }}>
        
        <div style={{ textAlign:'center', padding:'30px 0 20px' }}>
          <h1 style={{ fontSize:'64px', fontWeight:'900', letterSpacing:'-3px', margin:0 }}>oldhint</h1>
          <p style={{ opacity:0.6, marginTop:'8px', fontSize:'15px' }}>Google for grandma wisdom • 7 Agents • Full guides + videos</p>
          
          <form action="/search" method="GET" style={{ marginTop:'24px', display:'flex', gap:'10px', maxWidth:'650px', margin:'24px auto 0', width:'100%' }}>
            <input name="q" placeholder="Search whole world... biryani, faucet, stain, 350 engine..." style={{ flex:1, padding:'18px 22px', borderRadius:'28px', border:'1px solid #ddd', fontSize:'16px', outline:'none' }} />
            <button style={{ padding:'18px 32px', borderRadius:'28px', background:'#000', color:'#fff', border:'none', fontWeight:'bold', fontSize:'16px', cursor:'pointer' }}>Search</button>
          </form>

          <div style={{ display:'flex', gap:'10px', justifyContent:'center', marginTop:'16px' }}>
            <Link href="/ebook" style={{ padding:'10px 20px', background:'#ff0000', color:'#fff', borderRadius:'24px', textDecoration:'none', fontSize:'13px', fontWeight:'bold' }}>📕 $7 Ebook - 101 Hints</Link>
            <Link href="/admin" style={{ padding:'10px 20px', background:'#f2f2f2', borderRadius:'24px', textDecoration:'none', color:'#000', fontSize:'13px', border:'1px solid #ddd' }}>CEO Panel</Link>
          </div>
        </div>

        <h2 style={{ fontSize:'22px', margin:'30px 0 6px' }}>🌍 Whole World of Everyday Fixes</h2>
        <p style={{ opacity:0.5, fontSize:'13px', margin:'0 0 18px' }}>Trending searches — click any to see full guide like Meta AI + videos</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'16px' }}>
          {Object.entries(WORLD).map(([cat, queries])=>(
            <div key={cat} style={{ background:'#f9f9f9', border:'1px solid #eee', borderRadius:'16px', padding:'18px' }}>
              <h3 style={{ margin:'0 0 12px', fontSize:'15px' }}>{cat}</h3>
              <div style={{ display:'grid', gap:'8px' }}>
                {queries.map(q=>(
                  <Link key={q} href={`/search?q=${encodeURIComponent(q)}`} style={{ fontSize:'13px', textDecoration:'none', color:'#111', background:'#fff', padding:'11px 12px', borderRadius:'10px', border:'1px solid #eee', display:'block' }}>
                    🔍 {q}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:'40px', background:'#000', color:'#fff', borderRadius:'20px', padding:'24px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'12px' }}>
          <div><h3 style={{ margin:0, fontSize:'18px' }}>OldHint Search Engine Live ✅</h3><p style={{ margin:'6px 0 0', opacity:0.6, fontSize:'13px' }}>Full guides + videos • Sitemap SEO • 9am cron • Built in Calgary</p></div>
          <div style={{ fontSize:'12px', opacity:0.5 }}>oldhint.com • Sachin Bazard</div>
        </div>

      </div>
    </main>
  );
}
