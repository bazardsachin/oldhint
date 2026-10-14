export class WriterAgent {
  async write(topic, era, scoutData) {
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const title = `How to ${topic} — ${era} OldHint That Actually Works`;
    
    const content = `
# ${title}

**Hook:** ${scoutData.bestHook}

### Why this ${era} method works (Science)
In the ${era}, there were no chemicals. Grandmothers used natural physics — steam, cloth, timing. That's why rotis stayed soft for 8 hours, not 20 mins.

### What you need
- Cotton cloth / muslin
- Steel dabba / casserole
- A little ghee
- Patience of ${era}

### Steps (Grandma's way)
1.  **Make as usual:** Cook your ${topic} normally.
2.  **The ${era} Trick:** Immediately wrap in slightly damp cotton cloth — not plastic!
3.  **Store in steel:** Put cloth-wrapped ${topic} inside steel dabba, not in fridge.
4.  **Ghee seal:** Light brush of ghee keeps moisture locked — old ${era} science.
5.  **Don't stack hot:** Let 30 sec air, then stack. This prevents sweating.

### Trust Note
This was common in every Indian home in ${era} before plastic wraps. My own grandma in Punjab used this daily.

### Related OldHints
- How to keep rice fresh without fridge
- ${era} kitchen storage hacks

*Keywords: ${scoutData.keywords.join(", ")}*
`;

    return { title, slug, content, metaDescription: `Learn ${era} trick to ${topic}. Grandma tested, no chemicals, works for 8+ hours.`, scoutData };
  }
}
