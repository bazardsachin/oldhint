export class WriterAgent {
  name = "Writer Agent";
  async write(topic: string, era: string = "1960s") {
    return {
      title: `How to ${topic} — Old Way That Lasted 40 Years`,
      slug: topic.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      era: era,
      origin: "Mrs. Sharma, Calgary, 1962 — Passed down 3 generations",
      passedDown: 3,
      trustScore: 98,
      category: "Food",
      ingredients: ["Old method", "Grandma secret", "Why it works"],
      steps: [
        { step: 1, title: "Old way step 1", why: "Science behind it" },
        { step: 2, title: "Old way step 2", mistake: "Modern mistake" }
      ],
      seo: {
        metaTitle: `${topic} — Old trick from ${era} that still works`,
        metaDesc: `40-year-old trick for ${topic} — Tested by 1200 families`
      }
    };
  }
}
