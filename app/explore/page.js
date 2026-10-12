import Link from "next/link";

const WORLD = {
  "🍛 Food": ["how to make biryani", "how to boil egg perfectly", "how to keep roti soft", "how to make dal", "burnt pan clean", "keep rice fluffy"],
  "🏠 Home": ["how to fix leaky faucet", "how to stop squeaky door", "wall hole fix", "how to fix running toilet", "remove wall marks"],
  "🧹 Cleaning": ["remove coffee stain", "remove grease stain", "clean microwave no scrub", "bathroom smell remove", "remove ink stain"],
  "🚗 Car/Bike": ["fix flat tire fast", "dead battery jump", "rebuild 350 engine", "clean car headlights", "remove car scratch"],
  "👕 Clothes": ["fix stuck zipper", "remove deodorant stain", "shoe shine trick", "shrink sweater fix", "walnut furniture scratch"],
  "💄 Beauty": ["remove dark circles", "pimple overnight fix", "hair fall oil", "cracked heels fix", "soft hands grandma"],
  "💰 Money": ["save money old way", "old money rules", "negotiate price trick", "pay yourself first", "envelope budget"],
  "💻 Tech": ["speed up slow laptop", "phone battery drain fix", "clean phone storage", "wifi slow fix", "laptop overheating"]
};

export default function Explore() {
  return (
    <main style={{ minHeight:'100vh', background:'#fff', color:'#000', fontFamily:'system-ui', padding:'20px' }}>
      <div style={{ maxWidth:'1000px', margin:'0 auto' }}>
        <Link href="/" style={{ fontWeight:'800', fontSize:'22px', textDecoration:'none', color:'#000' }}>oldhint</Link>
        <span style={{ marginLeft:'12px', opacity:0.5, fontSize:'13px' }}>Explore Whole World of Hints</span>

        <h1 style={{ fontSize:'36px', margin:'24px 0 8px', letterSpacing:'-1px' }}>Whole World of Everyday Fixes</h1>
        <p style={{ opacity:0.6, fontSize:'15px' }}>Trending searches people do daily — Google for grandma wisdom • 7 Agents</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'18px', marginTop:'30px' }}>
          {Object.entries(WORLD).map(([cat, queries])=>(
            <div key={cat} style={{ background:'#f9f9f9', border:'1px solid #eee', borderRadius:'16px', padding:'18px' }}>
              <h3 style={{ margin:'0 0 12px', fontSize:'16px' }}>{cat}</h3>
              <div style={{ display:'grid', gap:'8px' }}>
                {queries.map(q=>(
                  <Link key={q} href={`/search?q=${encodeURIComponent(q)}`} style={{ fontSize:'13px', textDecoration:'none', color:'#111', background:'#fff', padding:'10px 12px', borderRadius:'10px', border:'1px solid #eee', display:'block' }}>
                    🔍 {q}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:'40px', background:'#000', color:'#fff', borderRadius:'20px', padding:'24px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'12px' }}>
          <div><h3 style={{ margin:0 }}>Want these daily at 9am Calgary?</h3><p style={{ margin:'6px 0 0', opacity:0.6, fontSize:'13px' }}>Cron auto-posts • Control on phone</p></div>
          <Link href="/admin" style={{ background:'#fff', color:'#000', padding:'12px 20px', borderRadius:'24px', textDecoration:'none', fontWeight:'bold', fontSize:'13px' }}>Open CEO Panel</Link>
        </div>
      </div>
    </main>
  );
}
