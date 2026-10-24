// app/vault/page.js — Grandma's Kitchen + Dad's Garage Vault
// CEO: Bāzārd Śåçhïn Calgary T3J — OldHint Inc. — Phase 2 LIBRARY
// Built by Builder Agent from Billion Dollar Roadmap PDF

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#2D1B0E]">
      <div className="border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-xl">OLDHINT — THE VAULT</div>
          <div className="text-xs bg-yellow-300 border-2 border-black px-3 py-1 font-bold">48 TRICKS • 1920-1990</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4">Grandma&apos;s Vault</h1>
          <p className="text-xl max-w-2xl mx-auto">Google forgets. Grandmothers remember. 48 tricks preserved for your kids — Era, Origin, Passed Down, Trust Score.</p>
        </div>

        {/* Vault Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-4xl mb-4">🍳</div>
            <h2 className="font-black text-2xl mb-2">Grandma&apos;s Kitchen</h2>
            <p className="text-sm mb-4 font-bold">Nani&apos;s 21-day sun-dried mango pickle — 1960s Punjab</p>
            <div className="space-y-2 text-sm">
              <div className="border-2 border-black p-3"><b>Keep Rotis Soft 8hrs</b> — 1960s Punjab — Steel Dabba Trick — Trust: 1200 families — 3 generations</div>
              <div className="border-2 border-black p-3"><b>Mango Pickle 3 Years</b> — 1962 — Mrs Sharma Calgary — Mustard Oil Sun Trick</div>
              <div className="border-2 border-black p-3"><b>Halwa Without Ghee Burn</b> — 1970s — Low Flame 45 min Stir</div>
            </div>
            <button className="mt-4 w-full bg-black text-white font-black py-2">Enter Kitchen Vault — $7 Ebook</button>
          </div>

          <div className="bg-black text-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_white]">
            <div className="text-4xl mb-4">🔧</div>
            <h2 className="font-black text-2xl mb-2">Dad&apos;s Garage</h2>
            <p className="text-sm mb-4 font-bold">Dada 1969 Charger — Built with 2 tools — Calgary T3J</p>
            <div className="space-y-2 text-sm">
              <div className="border-2 border-white p-3"><b>Start Charger in -30°C</b> — 1969 — Calgary — Hot Water Battery Trick — Trust: 800 families</div>
              <div className="border-2 border-white p-3"><b>Fix Rust with Vinegar</b> — 1970s — Punjab to Calgary — 24hr Soak</div>
              <div className="border-2 border-white p-3"><b>Tool Wall from Scrap</b> — 1980 — Bazard Garage Est.</div>
            </div>
            <button className="mt-4 w-full bg-white text-black font-black py-2 border-2 border-white">Enter Garage Vault — $7 Ebook</button>
          </div>
        </div>

        {/* Time Machine */}
        <div className="bg-yellow-300 border-4 border-black p-8 text-center">
          <h2 className="font-black text-3xl mb-2">⏳ Time Machine — 1920 vs 2024</h2>
          <p className="mb-6">How same trick changed — Punjab 1960 → Calgary 1980 → Delhi 1975 — Fork history like GitHub</p>
          <div className="grid md:grid-cols-3 gap-4 text-sm font-bold">
            <div className="bg-white border-2 border-black p-4">1920: Dada&apos;s Origin — Clay pot pickle</div>
            <div className="bg-white border-2 border-black p-4">1960: Nani&apos;s Keeper — Steel dabba</div>
            <div className="bg-white border-2 border-black p-4">2020: You Explorer — Fridge 3 years</div>
          </div>
        </div>

        <div className="text-center mt-8 text-xs font-mono">
          Trust Bar: 40 years old • 3 generations • 1200+ families • Era • Origin • PassedDown • TrustScore<br/>
          SEO Moat: /generations/1960s /generations/1970s /vault — Ready 34s Production
        </div>
      </div>
    </div>
  );
}
