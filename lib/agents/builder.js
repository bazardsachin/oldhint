export class BuilderAgent {
  async build(guide) {
    // This creates the data needed for a real page
    // Vercel will return it, admin will show Preview
    const pageData = {
      slug: guide.slug,
      url: `/hint/${guide.slug}`,
      fullUrl: `https://oldhint.com/hint/${guide.slug}`,
      title: guide.title,
      content: guide.content,
      seo: {
        title: guide.title,
        description: guide.metaDescription,
        keywords: guide.scoutData.keywords.join(", "),
      },
      youtubeSearch: `https://www.youtube.com/results?search_query=${encodeURIComponent(guide.scoutData.topic + " " + guide.scoutData.era + " trick")}`,
      readyToPublish: true
    };
    return pageData;
  }
}
