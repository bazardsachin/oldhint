import Link from "next/link";

export default function Success() {
  const pdfLink = "https://drive.google.com/file/d/11TMUbA6MQ4_dopRubknuzCNNY7Vi4sCS/view?usp=sharing";
  const directDownload = "https://drive.google.com/uc?export=download&id=11TMUbA6MQ4_dopRubknuzCNNY7Vi4sCS";

  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'system-ui', padding:'20px', background:'#fff', color:'#000' }}>
      <div style={{ maxWidth:'520px', width:'100%', textAlign:'center', border:'1px solid #eee', borderRadius:'20px', padding:'36px', background:'#fff' }}>
        <h1 style={{ fontSize:'42px', margin:0, lineHeight:'1.1' }}>✅ Payment Success!</h1>
        <p style={{ marginTop:'12px', opacity:0.6, fontSize:'15px' }}>Thank you! Your 101 Old Hints PDF is ready. Stripe receipt sent to email.</p>
        
        <div style={{ marginTop:'24px', background:'#f9f9f9', border:'1px solid #eee', borderRadius:'16px', padding:'18px', textAlign:'left' }}>
          <b style={{ fontSize:'14px' }}>📕 101 Old Hints That Still Work</b>
          <p style={{ fontSize:'12px', opacity:0.6, margin:'6px 0 0' }}>Grandma + Mechanic + Chef secrets • 30 pages • Videos inside</p>
        </div>

        <a href={pdfLink} target="_blank" style={{ display:'block', marginTop:'22px', background:'#000', color:'#fff', padding:'18px', borderRadius:'14px', textDecoration:'none', fontWeight:'bold', fontSize:'16px' }}>
          📕 Open & Download PDF Now
        </a>

        <a href={directDownload} style={{ display:'block', marginTop:'12px', background:'#fff', color:'#000', padding:'14px', borderRadius:'14px', textDecoration:'none', fontWeight:'bold', fontSize:'14px', border:'1px solid #ddd' }}>
          ⬇️ Direct Download (if first fails)
        </a>

        <p style={{ fontSize:'11px', opacity:0.4, marginTop:'14px' }}>If download asks permission, click "Request access" — I will approve instantly, or use direct link.<br/>Test card used: 4242 4242 4242 4242</p>

        <div style={{ marginTop:'22px', display:'flex', gap:'10px', justifyContent:'center' }}>
          <Link href="/" style={{ padding:'10px 18px', background:'#f2f2f2', borderRadius:'20px', textDecoration:'none', color:'#000', fontSize:'13px' }}>← Back to oldhint.com</Link>
          <Link href="/search?q=how to make biryani" style={{ padding:'10px 18px', background:'#fff', border:'1px solid #eee', borderRadius:'20px', textDecoration:'none', color:'#000', fontSize:'13px' }}>Try Biryani Guide</Link>
        </div>
      </div>
    </div>
  );
}
