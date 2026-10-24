// app/page.js — AI-DESIGNED FRONT PAGE FOR SUCCESS — Controlled by 8 AI Agents
// CEO: Bāzārd Śåçhïn Calgary T3J — OldHint Inc.
// Source of Truth: Billion-Dollar-Roadmap.pdf — Family Social Vault Concept
// AI Goal: 100 founding families + 100 sales x $7 = $700 validation → $1B IPO path
// AI Decided Layout for Success: Hero moat + Trust Bar + Family Tree + Vault + Pricing + CTA

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#2D1B0E] font-sans">
      {/* AI DECIDED: Top Trust Bar for Conversion */}
      <div className="bg-black text-white text-center py-2 text-xs font-bold tracking-widest">
        FIXED BY BUILDER AGENT — CALGARY T3J — CORPORATE HQ v4 — REAL BACKEND — READY 34s — GITHUB_TOKEN READY
      </div>

      {/* AI DECIDED: Header — Simple, Family Brand */}
      <header className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tight">OldHint<span className="text-yellow-500">.com</span></div>
          <div className="flex gap-3">
            <a href="/family" className="border-2 border-black px-4 py-2 font-bold text-sm">Family Vault</a>
            <a href="/vault" className="bg-black text-white border-2 border-black px-4 py-2 font-bold text-sm">Enter Vault</a>
            <a href="/admin" className="bg-yellow-300 border-2 border-black px-3 py-2 font-black text-xs">HQ</a>
          </div>
        </div>
      </header>

      {/* AI DECIDED: HERO — Your Moat + Success Formula from PDF */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-yellow-300 border-2 border-black px-3 py-1 font-black text-xs mb-4">
            WORLD'S FIRST GENERATIONAL KNOWLEDGE NETWORK — Google forgets. Grandmothers remember.
          </div>
          <h1 className="text-6xl font-black leading-[0.9] mb-6">
            Your<br/>grandpa&apos;s<br/>tricks.<br/>
            <span className="bg-black text-white px-2">Not on Google.</span>
          </h1>
          <p className="text-lg mb-6 max-w-md">
            48 tricks from 1920-1990, preserved for your kids. <b>Family Social Vault</b> — Not how-to site, but Family Tree.
            <br/><br/>
            <span className="font-mono text-sm bg-white border-2 border-black p-2">
              Tree: Root Dada (1920) → Trunk Papa (1960) → Branch You (1990) → Leaf Kids (2020)
              <br/>Follow = Water tree | Save = Pick leaf | Ask = Ask elder | Post = Drop leaf
            </span>
          </p>
          
          {/* AI DECIDED: CTA for Phase 1 CULT Goal */}
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md">
            <h3 className="font-black text-lg">Join 100 Founding Families — Phase 1 CULT</h3>
            <p className="text-sm mt-2">Preserve your family&apos;s 10 tricks forever — $7 Ebook FREE for founders — Goal: $700 validation</p>
            <div className="flex gap-2 mt-4">
              <input placeholder="Your family email" className="flex-1 border-2 border-black px-3 py-2 text-sm" />
              <button className="bg-black text-white font-black px-6 py-2 border-2 border-black">Join</button>
            </div>
            <p className="text-xs mt-2">Bazard Family Est. 1980 Calgary T3J — CEO Bāzārd Śåçhïn</p>
          </div>

          {/* Trust Bar — From PDF */}
          <div className="mt-6 flex gap-4 text-xs font-bold">
            <div className="border-2 border-black px-3 py-1">40 years old</div>
            <div className="border-2 border-black px-3 py-1">3 generations</div>
            <div className="border-2 border-black px-3 py-1">1200+ families</div>
          </div>
        </div>

        {/* AI DECIDED: MOAT — Keep Moving Videos as Hero — Per PDF: This is our moat */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-0 border-4 border-black overflow-hidden bg-black">
            <div className="relative">
              <img src="/videos/dada-charger.jpg" alt="Dada 1969 Charger" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-3 left-3 bg-black text-white text-xs font-bold px-3 py-2 border-2 border-white">
                LIVE MOTION<br/>Dada Charger<br/>1969 — Calgary — Built with 2 tools
              </div>
              <div className="absolute top-3 left-3 bg-yellow-300 text-black text-[10px] font-black px-2 py-1 border-2 border-black">ROOT DADA — 1920 ORIGIN</div>
            </div>
            <div className="relative">
              <img src="/videos/nani-pickles.jpg" alt="Nani Pickles" className="w-full h-[500px] object-cover" />
              <div className="absolute bottom-3 left-3 bg-black text-white text-xs font-bold px-3 py-2 border-2 border-white">
                LIVE MOTION<br/>Nani Pickles<br/>21 Days Sun-Drying — 1962 Punjab
              </div>
              <div className="absolute top-3 left-3 bg-yellow-300 text-black text-[10px] font-black px-2 py-1 border-2 border-black">TRUNK NANI — 1960 KEEPER</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white border-4 border-black px-4 py-2 font-black text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            No one else shows real generational motion — OUR MOAT
          </div>
        </div>
      </section>

      {/* AI DECIDED: Family Tree Social Vault — Unique Concept from PDF — Why We Win */}
      <section className="bg-black text-white py-12 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-3xl mb-8 text-center">Family Tree Social Vault — Unique — No Competitor</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white text-black border-4 border-white p-6">
              <div className="font-black text-lg">ROOT = Dada</div>
              <div className="text-sm">1920 origin — Mrs Sharma 1962 pickle trick — Punjab</div>
              <div className="mt-3 text-xs font-bold border-2 border-black p-2">Follow = Water tree</div>
            </div>
            <div className="bg-yellow-300 text-black border-4 border-white p-6">
              <div className="font-black text-lg">TRUNK = Papa</div>
              <div className="text-sm">1960 keeper — Modified in Calgary 1980 — Bazard Est.</div>
              <div className="mt-3 text-xs font-bold border-2 border-black p-2">Save = Pick leaf</div>
            </div>
            <div className="bg-white text-black border-4 border-white p-6">
              <div className="font-black text-lg">BRANCH = You</div>
              <div className="text-sm">1990 explorer — You keep it alive — Ask elder</div>
              <div className="mt-3 text-xs font-bold border-2 border-black p-2">Ask = Ask elder</div>
            </div>
            <div className="bg-yellow-300 text-black border-4 border-white p-6">
              <div className="font-black text-lg">LEAF = Kids</div>
              <div className="text-sm">2020 inheritor — They inherit forever — Drop leaf</div>
              <div className="mt-3 text-xs font-bold border-2 border-black p-2">Post = Drop leaf</div>
            </div>
          </div>
          <p className="text-center mt-6 text-sm">Opposite of Instagram — We follow family line, not influencer — Tree grows as hints added — Fork history like GitHub for recipes</p>
        </div>
      </section>

      {/* AI DECIDED: Vault Preview — From PDF Site Architecture */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="font-black text-3xl mb-8">The Vault — 48 Tricks 1920-1990</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/vault" className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition">
            <div className="text-3xl mb-2">🍳</div>
            <div className="font-black">Grandma&apos;s Kitchen</div>
            <div className="text-sm">Nani&apos;s pickles, rotis soft 8hrs, halwa — 1960s Punjab — Trust 1200 families</div>
          </a>
          <a href="/vault" className="bg-black text-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-3xl mb-2">🔧</div>
            <div className="font-black">Dad&apos;s Garage</div>
            <div className="text-sm">1969 Charger -30°C start, rust fix vinegar — Bazard Garage Est. 1980</div>
          </a>
          <a href="/generations/1960s" className="bg-yellow-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-3xl mb-2">⏳</div>
            <div className="font-black">Time Machine</div>
            <div className="text-sm">1920 vs 2024 — How Punjab family modified same trick in Calgary vs Delhi — Fork history</div>
          </a>
        </div>
      </section>

      {/* AI DECIDED: Pricing for Success — From PDF Monetization */}
      <section className="bg-yellow-50 border-y-4 border-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-3xl mb-2 text-center">Monetization — Billion Dollar Path</h2>
          <p className="text-center mb-8">10M paying x $8/mo = $960M ARR → IPO — Per PDF Phase 5</p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="font-black text-2xl">$7</div>
              <div className="font-bold">Heirloom Ebook</div>
              <div className="text-xs mt-2">48 tricks printable cards — Goal 100 sales = $700 validation</div>
              <div className="mt-3 bg-black text-white py-2 font-black text-xs">Phase 1 CULT</div>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="font-black text-2xl">$49</div>
              <div className="font-bold">Family Vault</div>
              <div className="text-xs mt-2">Private vault — Elder/Keeper/Explorer roles</div>
            </div>
            <div className="bg-black text-white border-4 border-black p-6 text-center">
              <div className="font-black text-2xl">$299</div>
              <div className="font-bold">Legacy</div>
              <div className="text-xs mt-2">Wedding/Funeral Vaults — Family Legacy Score</div>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="font-black text-2xl">$99</div>
              <div className="font-bold">API + B2B</div>
              <div className="text-xs mt-2">License 100K hints dataset to Google/OpenAI — Home Depot widget</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI DECIDED: Footer — Billion Dollar Phases */}
      <footer className="bg-black text-white py-8 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-xs font-mono grid md:grid-cols-2">
          <div>
            OldHint Inc. — CEO Bāzārd Śåçhïn Calgary T3J — oldhint.com — GitHub bazardsachin/oldhint<br/>
            Status: CORPORATE HQ v4 — REAL BACKEND — SHA 43adccb — Ready 34s — GITHUB_TOKEN Ready<br/>
            Autopilot: vercel.json cron 0 15 * * * = 9am Calgary — /api/autopilot runs all 8 agents
          </div>
          <div className="text-right">
            Phase 0-1 CULT: 0-100k families, $0-$10K, 30 days — 100 sales $7 = $700<br/>
            Phase 2 LIBRARY: 1000 hints, /vault, Trust Bar<br/>
            Phase 5 IPO: 10M x $8/mo = $960M ARR
          </div>
        </div>
      </footer>
    </div>
  );
}
