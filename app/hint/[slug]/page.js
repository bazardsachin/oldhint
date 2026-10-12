const HINTS = {
  "fix-stuck-zipper": { cat: "Life", title: "Fix Stuck Zipper", hint: "Rub pencil lead on zipper teeth.", why: "Graphite is dry lube from old tailors. Works since 1920s.", long: "Old tailors never used oil — oil stains cloth. Pencil graphite is clean, dry, and lasts months. Just rub lightly and zip up/down 3 times." },
  "save-on-groceries": { cat: "Money", title: "Save on Groceries", hint: "Shop after eating, not before.", why: "Hunger makes you buy 20% more.", long: "Studies from 1950s show hungry shoppers buy more junk. Old moms always said: Eat first, then shop." },
  "phone-battery-trick": { cat: "Tech", title: "Phone Battery Trick", hint: "Charge to 80%, not 100%.", why: "Extends battery life 2x.", long: "Old battery engineers know — full charge stresses lithium. 80% rule doubles lifespan from 2 to 4 years." },
  "win-old-chess": { cat: "Games", title: "Win Old Chess", hint: "Control center, not edges.", why: "Center gives more moves.", long: "Grandmasters from 1800s: A knight in center attacks 8 squares, on edge only 3. Same for life — own the center." },
  "remove-ink-stain": { cat: "Life", title: "Remove Ink Stain", hint: "Use milk, not water.", why: "Milk proteins lift ink.", long: "Grandma trick — soak ink cloth in milk overnight. Casein pulls ink out without bleach." },
  "old-money-rule": { cat: "Money", title: "Old Money Rule", hint: "Pay yourself first 10%.", why: "What remains you adjust to.", long: "Rockefeller rule from 1901. Take 10% before bills. You will never miss it, but in 10 years it makes you rich." },
};

export default function HintPage({ params }) {
  const h = HINTS[params.slug] || { title: "Hint Not Found", hint: "This old wisdom is lost.", cat: "Life", why: "", long: "" };
  return (
    <main style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:'20px', fontFamily:'system-ui' }}>
      <div style={{ maxWidth:'600px', margin:'0 auto' }}>
        <a href="/" style={{ opacity:0.5, textDecoration:'none', color:'#fff', fontSize:'14px' }}>← Back to OldHint</a>
        <div style={{ marginTop:'30px', background:'#111', border:'1px solid #222', borderRadius:'20px', padding:'30px' }}>
          <span style={{ fontSize:'10px', background:'#222', padding:'6px 10px', borderRadius:'10px' }}>{h.cat}</span>
          <h1 style={{ fontSize:'28px', margin:'15px 0' }}>{h.title}</h1>
          <p style={{ fontSize:'20px', background:'#1a1a1a', padding:'16px', borderRadius:'12px' }}>{h.hint}</p>
          <p style={{ marginTop:'20px', opacity:0.7 }}><b>Why it works:</b> {h.why}</p>
          <p style={{ marginTop:'15px', opacity:0.5, lineHeight:'1.6' }}>{h.long}</p>
          <button style={{ marginTop:'25px', width:'100%', padding:'14px', borderRadius:'12px', background:'#fff', color:'#000', border:'none', fontWeight:'bold', cursor:'pointer' }} onClick={()=>navigator.clipboard.writeText(h.hint)}>Copy Hint</button>
        </div>
      </div>
    </main>
  );
}
