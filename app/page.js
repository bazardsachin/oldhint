
export default function Home() {
  const hints = [
    {cat:'Home & Kitchen', title:'Put a wooden spoon over boiling pot to stop it overflowing', desc:'Grandmothers did this for decades - the wood breaks the surface tension.'},
    {cat:'Money Wisdom', title:'The 24-hour rule for purchases', desc:'If you still want it after 24 hours, you actually need it. Old traders lived by this.'},
    {cat:'Health Remedies', title:'Warm salt water gargle before bed', desc:'An old hint that reduces morning throat infections better than most syrups.'},
    {cat:'Work & Focus', title:'Work with a 15-minute hourglass', desc:'Before timers, craftsmen used sand glasses. It forces deep focus without anxiety.'},
    {cat:'Life Hack', title:'Rub walnut on scratched wood', desc:'The oils fill and darken scratches - furniture makers trick from 1920s.'},
    {cat:'Relationships', title:'Write it by hand, then decide to send', desc:'Old letter writers knew - handwriting slows anger.'},
  ]
  return (
    <main>
      <header style={{padding:'20px 40px', display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:1200, margin:'0 auto'}}>
        <div style={{fontWeight:800, fontSize:22}}>oldhint<span style={{color:'#C9A227'}}>.com</span></div>
        <div style={{display:'flex', gap:20, fontSize:14}}><span>Categories</span><span>About</span><span style={{background:'#1A1A1A', color:'white', padding:'8px 16px', borderRadius:20}}>Newsletter</span></div>
      </header>

      <section style={{textAlign:'center', padding:'80px 20px 60px', maxWidth:800, margin:'0 auto'}}>
        <div style={{background:'#1A1A1A', color:'#FFFBF0', display:'inline-block', padding:'6px 14px', borderRadius:20, fontSize:12, letterSpacing:1}}>EST. FROM FORGOTTEN WISDOM</div>
        <h1 style={{fontSize:64, lineHeight:1.05, margin:'24px 0', fontWeight:800}}>Old Hints.<br/>New Wisdom.</h1>
        <p style={{fontSize:18, color:'#666', lineHeight:1.6}}>We collect timeless tricks, grandma's remedies, and old-school wisdom that actually still works — tested for today.</p>
        <div style={{marginTop:30, display:'flex', justifyContent:'center', gap:12}}>
          <input placeholder="Search a hint e.g. 'remove stains'" style={{padding:'14px 20px', borderRadius:30, border:'1px solid #ddd', width:320}}/>
          <button style={{padding:'14px 28px', borderRadius:30, background:'#1A1A1A', color:'white', border:'none', fontWeight:600}}>Search</button>
        </div>
      </section>

      <section style={{maxWidth:1200, margin:'0 auto', padding:'20px 20px 80px', display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:20}}>
        {hints.map((h,i)=>(
          <div key={i} style={{background:'white', borderRadius:20, padding:24, border:'1px solid #eee', boxShadow:'0 4px 20px rgba(0,0,0,0.03)'}}>
            <div style={{fontSize:11, letterSpacing:1, color:'#C9A227', fontWeight:700, marginBottom:10}}>{h.cat.toUpperCase()}</div>
            <h3 style={{fontSize:18, lineHeight:1.3, margin:'0 0 10px'}}>{h.title}</h3>
            <p style={{color:'#666', fontSize:14, lineHeight:1.5}}>{h.desc}</p>
            <div style={{marginTop:16, fontSize:12, color:'#999'}}>From 1940s • Verified</div>
          </div>
        ))}
      </section>

      <section style={{background:'#1A1A1A', color:'white', padding:'60px 20px', textAlign:'center'}}>
        <h2 style={{fontSize:32}}>Get a hint from the past every week</h2>
        <p style={{color:'#aaa'}}>No spam. Just one timeless trick that saves time or money.</p>
        <div style={{marginTop:20, display:'flex', justifyContent:'center', gap:10}}>
          <input placeholder="your@email.com" style={{padding:'12px 20px', borderRadius:30, border:'none', width:260}}/>
          <button style={{padding:'12px 24px', borderRadius:30, background:'#C9A227', color:'black', border:'none', fontWeight:700}}>Subscribe</button>
        </div>
        <div style={{marginTop:60, color:'#555', fontSize:12}}>© 2026 oldhint.com — Built with old wisdom in Calgary, Canada</div>
      </section>
    </main>
  )
}
