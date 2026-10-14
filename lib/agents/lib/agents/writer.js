export class WriterAgent { async write(t){return {title:"How to "+t, slug:t.replaceAll(" ","-")}} }
