import Link from "next/link";

const WORLD = {
  "🍛 Food": ["how to make biryani", "how to boil egg perfectly", "how to keep roti soft", "burnt pan clean", "keep rice fluffy", "how to make dal"],
  "🏠 Home": ["how to fix leaky faucet", "how to stop squeaky door", "wall hole fix", "fix running toilet", "remove wall marks"],
  "🧹 Cleaning": ["remove coffee stain", "remove grease stain", "clean microwave no scrub", "bathroom smell remove", "remove ink stain"],
  "🚗 Car/Bike": ["fix flat tire fast", "dead battery jump", "rebuild 350 engine", "clean car headlights", "remove car scratch"],
  "👕 Clothes": ["fix stuck zipper", "remove deodorant stain", "shoe shine trick", "walnut furniture scratch", "shrink sweater fix"],
  "💄 Beauty": ["remove dark circles", "pimple overnight fix", "hair fall oil", "cracked heels fix", "soft hands grandma"],
  "💰 Money": ["save money old way", "old money rules", "negotiate price trick", "envelope budget", "pay yourself first"],
  "💻 Tech": ["speed up slow laptop", "phone battery drain fix", "wifi slow fix", "laptop overheating", "clean phone storage"]
};

export default function Home() {
  return (
    <main style={{ minHeight:'100vh', background:'#fff', color:'#000', fontFamily:'system-ui' }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'20px' }}>
        
        <div style={{ textAlign:'center', padding:'36px 0 20px' }}>
          <h1 style={{ fontSize:'68px', fontWeight:'900', letterSpacing:'-3px', margin:0 }}>oldhint</h1>
          <p style={{ opacity:0.6, marginTop:'10px', fontSize:'15px' }}>Google for grandma wisdom • 7 Agents • Full guides + videos</p>
          
          <form action="/search" method="GET" style={{ marginTop:'28px', display:'flex', gap:'10px', maxWidth:'680px', margin:'28px auto 0', width:'100%' }}>
            <input name="q" placeholder="Search whole world... biryani, faucet, stain, 350 engine..." style={{ flex:1, padding:'18px 24px', borderRadius:'28px', border:'1px solid #ddd', fontSize:'16px', outline:'none' }} />
            <button style={{ padding:'18px 32px', borderRadius:'28px', background:'#000', color:'#fff', border:'none', fontWeight:'bold', fontSize:'16px', cursor:'pointer' }}>Search</button>
          </form>

          <div style={{ marginTop:'16px' }}>
            <Link href="/ebook" style={{ display:'inline-block', padding:'12px 24px', background:'#ff0000', color:'#fff', borderRadius:'24px', textDecoration:'none', fontSize:'14px', fontWeight:'bold' }}>📕 $7 Ebook - 101 Hints That Still Work</Link>
          </div>
        </div>

        <h2 style={{ fontSize:'22px', margin:'34px 0 6px' }}>🌍 Whole World of Everyday Fixes</h2>
        <p style={{ opacity:0.5, fontSize:'13px', margin:'0 0 18px' }}>Trending searches — click any to see full guide like Meta AI + videos</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'16px' }}>
          {Object.entries(WORLD).map(([cat, queries])=>(
            <div key={cat} style={{ background:'#f9f9f9', border:'1px solid #eee', borderRadius:'16px', padding:'18px' }}>
              <h3 style={{ margin:'0 0 12px', fontSize:'15px', fontWeight:'800' }}>{cat}</h3>
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

        <div style={{ marginTop:'44px', background:'#000', color:'#fff', borderRadius:'20px', padding:'24px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'12px' }}>
          <div>
            <h3 style={{ margin:0, fontSize:'16px' }}>OldHint Search Engine Live ✅</h3>
            <p style={{ margin:'6px 0 0', opacity:0.6, fontSize:'12px' }}>Full guides + videos • SEO sitemap • Built in Calgary</p>
          </div>
          <div style={{ fontSize:'11px', opacity:0.4 }}>oldhint.com • Sachin Bazard • 7 Agents</div>
        </div>

      </div>
    </main>
  );
}
