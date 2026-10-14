export class WriterAgent {
  async write(topic) {
    return { title: "How to " + topic };
  }
}
