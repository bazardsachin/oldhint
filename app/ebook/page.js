export default function sitemap() {
  const base = "https://oldhint.com";
  const qs = ["how to make biryani","how to boil egg perfectly","how to fix leaky faucet","remove coffee stain","fix flat tire fast","fix stuck zipper","remove dark circles","speed up slow laptop","how to keep roti soft","clean microwave no scrub","rebuild 350 engine","save money old way"];
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/explore`, lastModified: new Date() },
    { url: `${base}/ebook`, lastModified: new Date() },
    ...qs.map(q=>({ url: `${base}/search?q=${encodeURIComponent(q)}`, lastModified: new Date() }))
  ];
}
