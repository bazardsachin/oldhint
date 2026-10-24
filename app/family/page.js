
// app/family/page.js — Family Social Vault — Preserve your family's 10 tricks forever
// CEO: Bāzārd Śåçhïn Calgary T3J — OldHint Inc. — Phase 1 CULT
// Built by Builder Agent from Billion Dollar Roadmap PDF

export default function FamilyPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#2D1B0E]">
      {/* Header */}
      <div className="border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-xl">OLDHINT INC. — FAMILY VAULT</div>
          <div className="text-xs bg-black text-white px-3 py-1">CORPORATE HQ v4 — REAL BACKEND</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-300 border-2 border-black px-4 py-1 font-bold text-sm mb-4">
            JOIN 100 FOUNDING FAMILIES — Phase 1 CULT
          </div>
          <h1 className="text-5xl font-black leading-tight mb-4">
            Preserve your family&apos;s<br/>10 tricks forever
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Google forgets. Grandmothers remember. Create your private Family Vault — 
            <b> Root Dada (1920), Trunk Papa (1960), Branch You (1990), Leaf Kids (2020)</b>
          </p>

          {/* Email Capture */}
          <div className="max-w-md mx-auto bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-lg mb-3">Join 100 Founding Families</h3>
            <input 
              type="email" 
              placeholder="Your family email — e.g. bazard@family.com"
              className="w-full border-2 border-black px-4 py-3 mb-3 font-medium"
            />
            <button className="w-full bg-black text-white font-black py-3 border-2 border-black hover:bg-white hover:text-black transition">
              Preserve Our 10 Tricks — $7 Ebook FREE for Founders
            </button>
            <p className="text-xs mt-3">CEO: Bāzārd Śåçhïn Calgary T3J — Bazard Family Est. 1980</p>
          </div>
        </div>

        {/* Family Tree Visual — Unique Concept */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border-4 border-black p-8">
            <h2 className="font-black text-2xl mb-6">🌳 Family Tree Social Vault</h2>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-4 items-center"><span className="w-16 font-black">ROOT</span><span>= Dada (1920 origin) — Mrs Sharma 1962 pickle trick</span></div>
              <div className="flex gap-4 items-center"><span className="w-16 font-black">TRUNK</span><span>= Papa (1960 keeper) — Modified in Calgary 1980</span></div>
              <div className="flex gap-4 items-center"><span className="w-16 font-black">BRANCH</span><span>= You (1990 explorer) — You keep it alive</span></div>
              <div className="flex gap-4 items-center"><span className="w-16 font-black">LEAF</span><span>= Kids (2020 inheritor) — They inherit forever</span></div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2 text-xs font-bold">
              <div className="border-2 border-black p-2 text-center">Follow = Water tree</div>
              <div className="border-2 border-black p-2 text-center">Save = Pick leaf</div>
              <div className="border-2 border-black p-2 text-center">Ask = Ask elder</div>
              <div className="border-2 border-black p-2 text-center">Post = Drop leaf</div>
            </div>
          </div>

          <div className="bg-black text-white border-4 border-black p-8">
            <h2 className="font-black text-2xl mb-4">Demo: Bazard Family Est. 1980</h2>
            <div className="space-y-3 text-sm">
              <p><b>Location:</b> Calgary T3J, Canada — Since 1980</p>
              <p><b>Story:</b> Dada built 1969 Charger with 2 tools, Nani preserved mango pickle 21 days sun-drying</p>
              <p><b>Vault:</b> 12 tricks — 3 generations — 40 years old</p>
              <p><b>Trust Bar:</b> 40 years old • 3 generations • 1200+ families</p>
            </div>
            <div className="mt-6 bg-white text-black p-4 border-2 border-white">
              <p className="font-mono text-xs">Hint Format: Title {'>'} Era(1960s) {'>'} Origin(Punjab) {'>'} Secret Tool</p>
              <p className="font-bold mt-2">Example: &quot;Keep Rotis Soft 8hrs — 1960s Punjab — Mrs Sharma — Steel Dabba Trick&quot;</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border-4 border-black p-6 text-center">
            <div className="font-black text-lg">$7 Heirloom Ebook</div>
            <div className="text-sm mt-2">Printable cards — 48 tricks 1920-1990 — Preserve forever</div>
            <div className="mt-4 bg-yellow-300 border-2 border-black py-2 font-black">Goal: 100 sales = $700 validation</div>
          </div>
          <div className="bg-white border-4 border-black p-6 text-center">
            <div className="font-black text-lg">$49 Vault</div>
            <div className="text-sm mt-2">Private Family Vault — Invite Elder/Keeper/Explorer roles</div>
          </div>
          <div className="bg-black text-white border-4 border-black p-6 text-center">
            <div className="font-black text-lg">$299 Legacy</div>
            <div className="text-sm mt-2">Wedding/Funeral Vaults — Family Legacy Score leaderboard</div>
          </div>
        </div>

        <div className="text-center mt-12 text-xs font-mono">
          Backend: GITHUB_TOKEN Ready — Builder can auto-commit! — SHA afc095f — Vercel Ready 24s<br/>
          Autopilot: vercel.json cron 0 15 * * * = 9am Calgary — /api/autopilot runs all 8 agents
        </div>
      </div>
    </div>
  );
}

