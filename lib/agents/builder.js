export class BuilderAgent {
  async build(guide) {
    return { page: "/hint/" + guide.slug };
  }
}
