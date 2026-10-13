import Link from "next/link";
export default function Success() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'system-ui', padding:'20px', background:'#fff' }}>
      <div style={{ maxWidth:'500px', textAlign:'center', border:'1px solid #eee', borderRadius:'20px', padding:'36px' }}>
        <h1 style={{ fontSize:'40px', margin:0 }}>✅ Payment Done!</h1>
        <p style={{ marginTop:'12px' }}>Thank you! Your 101 Old Hints PDF is ready.</p>
        <a href="YOUR_GOOGLE_DRIVE_LINK_HERE" style={{ display:'block', marginTop:'20px', background:'#000', color:'#fff', padding:'16px', borderRadius:'12px', textDecoration:'none', fontWeight:'bold' }}>📕 Download PDF Now</a>
        <p style={{ fontSize:'12px', opacity:0.5, marginTop:'12px' }}>Check email for Stripe receipt. Test card: 4242 4242 4242 4242</p>
        <Link href="/" style={{ display:'block', marginTop:'20px', fontSize:'13px' }}>← Back to oldhint.com</Link>
      </div>
    </div>
  );
}
