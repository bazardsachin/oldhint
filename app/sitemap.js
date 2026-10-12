export default function sitemap() {
  const base = "https://oldhint.com";
  return [
    { url: base, lastModified: new Date() },
    { url: base + "/explore", lastModified: new Date() },
    { url: base + "/ebook", lastModified: new Date() },
    { url: base + "/search?q=how%20to%20make%20biryani", lastModified: new Date() }
  ];
}
