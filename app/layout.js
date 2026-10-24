import './globals.css';
export const metadata = {
  title: 'oldhint.com - Timeless Hints From The Past',
  description: 'Rediscover forgotten wisdom, old-school tricks, and timeless life hints that still work today.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:'Inter, system-ui, sans-serif', background:'#FFFBF0', color:'#1A1A1A'}}>
        {children}
      </body>
    </html>
  )
}
