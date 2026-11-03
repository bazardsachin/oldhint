import RealMotionVideo from "./components/RealMotionVideo";

export default function Page() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFBEB", color: "#1A1A1A", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,251,235,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid #fde68a" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ fontWeight: "900", fontSize: "20px", letterSpacing: "-0.5px" }}>OldHint</div>
            <nav style={{ display: "flex", gap: "20px", fontSize: "13px", fontWeight: "600" }}>
              <span style={{ borderBottom: "2px solid #1A1A1A", paddingBottom: "2px" }}>For You</span>
              <span style={{ opacity: 0.6 }}>Family Vault</span>
              <span style={{ opacity: 0.6 }}>Generations</span>
              <span style={{ opacity: 0.6 }}>Pricing</span>
            </nav>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ fontSize: "11px", opacity: 0.6 }}>41 families live</div>
            <div style={{ background: "#1A1A1A", color: "white", borderRadius: "999px", padding: "8px 16px", fontSize: "12px", fontWeight: "700" }}>Join Vault</div>
          </div>
        </div>
      </header>

      <div style={{ background: "#1A1A1A", color: "#fde68a", fontSize: "11px", padding: "8px 24px", textAlign: "center", letterSpacing: "0.5px" }}>
        Old People TikTok — Not on TikTok. In Family Vault. — Real stories from real families — Not algorithm — Real motion
      </div>

      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "24px", display: "grid", gridTemplateColumns: "1fr 340px", gap: "24px" }}>
        <div>
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{ fontSize: "54px", fontWeight: "900", lineHeight: "0.9", letterSpacing: "-1.5px" }}>
              TikTok.<br />
              <span style={{ color: "#b45309" }}>Not on TikTok.</span><br />
              <span style={{ color: "#15803d" }}>In Family Vault.</span>
            </h1>
            <p style={{ marginTop: "12px", fontSize: "14px", color: "#57534e", maxWidth: "560px", lineHeight: "1.5" }}>
              Your parents and grandparents have stories TikTok will never see. 60 year old recipes. 1969 Charger rebuilds. 1000 stories. Saved in Family Vault. Not on cloud. Not on TikTok. In family.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "white", borderRadius: "24px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "340px 1fr" }}>
              <div style={{ height: "480px", background: "#111", position: "relative" }}>
                <RealMotionVideo src="/videos/image_20261015_213541.mp4" alt="Dada 1969 Charger" />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ background: "rgba(0,0,0,0.7)", color: "white", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700" }}>Dada • 1969 Charger</div>
                  <div style={{ background: "white", color: "black", borderRadius: "999px", padding: "6px 10px", fontSize: "11px", fontWeight: "800" }}>● LIVE</div>
                </div>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#1A1A1A", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "12px" }}>BD</div>
                    <div>
                      <div style={{ fontWeight: "800", fontSize: "13px" }}>Bazard Family • Dada</div>
                      <div style={{ fontSize: "11px", opacity: 0.6 }}>Calgary • 1969 • 41 families</div>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", fontSize: "14px", lineHeight: "1.5", fontWeight: "500" }}>
                    1969 Dodge Charger. Bought in 1972 for $800. Still in garage. Still starts. My son thinks I should sell. I think I should tell the story first.
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ background: "#FFFBEB", border: "1px solid #fde68a", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#1969Charger</span>
                    <span style={{ background: "#FFFBEB", border: "1px solid #fde68a", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#GarageStories</span>
                    <span style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>SEO 98</span>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", gap: "16px", fontSize: "12px", marginTop: "16px", opacity: 0.7 }}>
                    <span>❤ 2.2k</span>
                    <span>💬 127</span>
                    <span>↗ Share</span>
                    <span>🔖 Save to Vault</span>
                  </div>
                  <div style={{ marginTop: "16px", background: "#1A1A1A", color: "white", borderRadius: "12px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "12px" }}>
                      <div style={{ fontWeight: "800" }}>Save this story in your Family Vault</div>
                      <div style={{ opacity: 0.7, fontSize: "11px" }}>$21/mo — Keeps family stories forever</div>
                    </div>
                    <div style={{ background: "white", color: "black", borderRadius: "999px", padding: "8px 14px", fontSize: "11px", fontWeight: "800" }}>Save</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "24px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "340px 1fr" }}>
              <div style={{ height: "480px", background: "#78350f", position: "relative" }}>
                <RealMotionVideo src="/videos/image_20261015_213543.mp4" alt="Nani Pickles" />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ background: "rgba(120,53,15,0.85)", color: "white", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700" }}>Nani • 60 year recipe</div>
                  <div style={{ background: "white", color: "black", borderRadius: "999px", padding: "6px 10px", fontSize: "11px", fontWeight: "800" }}>● SECRET</div>
                </div>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#78350f", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "12px" }}>NP</div>
                    <div>
                      <div style={{ fontWeight: "800", fontSize: "13px" }}>Bazard Family • Nani</div>
                      <div style={{ fontSize: "11px", opacity: 0.6 }}>Punjab to Calgary • 1964 • 60 years</div>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", fontSize: "14px", lineHeight: "1.5", fontWeight: "500" }}>
                    Mango pickle. My mother taught me. Her mother taught her. 60 years same jar. No one outside family knows measurements. Now my granddaughter is recording. For vault.
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ background: "#fef3c7", border: "1px solid #fde68a", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#NaniPickles</span>
                    <span style={{ background: "#fef3c7", border: "1px solid #fde68a", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#60YearRecipe</span>
                    <span style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>SEO 96</span>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", gap: "16px", fontSize: "12px", marginTop: "16px", opacity: 0.7 }}>
                    <span>❤ 1.8k</span>
                    <span>💬 203</span>
                    <span>↗ Share</span>
                    <span>🔖 Save to Vault</span>
                  </div>
                  <div style={{ marginTop: "16px", background: "#78350f", color: "white", borderRadius: "12px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "12px" }}>
                      <div style={{ fontWeight: "800" }}>Get Nani recipe card — Family Vault only</div>
                      <div style={{ opacity: 0.8, fontSize: "11px" }}>Printable + video — Not on internet</div>
                    </div>
                    <div style={{ background: "white", color: "#78350f", borderRadius: "999px", padding: "8px 14px", fontSize: "11px", fontWeight: "800" }}>Unlock</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "24px", border: "1px solid #f5e6c8", overflow: "hidden", display: "grid", gridTemplateColumns: "340px 1fr" }}>
              <div style={{ height: "480px", background: "#f5f5f5", position: "relative" }}>
                <RealMotionVideo src="/videos/image_20261015_213541.mp4" alt="Papa Keeper" />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ background: "rgba(255,255,255,0.9)", color: "black", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700" }}>Papa • 1000 stories</div>
                  <div style={{ background: "#1A1A1A", color: "white", borderRadius: "999px", padding: "6px 10px", fontSize: "11px", fontWeight: "800" }}>● KEEPER</div>
                </div>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#e7e5e4", color: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "12px" }}>PK</div>
                    <div>
                      <div style={{ fontWeight: "800", fontSize: "13px" }}>Bazard Family • Papa</div>
                      <div style={{ fontSize: "11px", opacity: 0.6 }}>Keeper of 1000 stories • 41 families</div>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", fontSize: "14px", lineHeight: "1.5", fontWeight: "500" }}>
                    I am keeper of stories. 1000 stories. My father told me 200. I lived 800. If I dont tell, they die. So I tell in vault. For my kids kids.
                  </div>
                  <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#Keeper</span>
                    <span style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>#1000Stories</span>
                    <span style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "999px", padding: "4px 10px", fontSize: "11px" }}>SEO 97</span>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", gap: "16px", fontSize: "12px", marginTop: "16px", opacity: 0.7 }}>
                    <span>❤ 3.1k</span>
                    <span>💬 89</span>
                    <span>↗ Share</span>
                    <span>🔖 Save to Vault</span>
                  </div>
                  <div style={{ marginTop: "16px", background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: "12px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "12px" }}>
                      <div style={{ fontWeight: "800" }}>Family Tree — See all 41 families</div>
                      <div style={{ opacity: 0.6, fontSize: "11px" }}>Trust Bar • Vault • Generations</div>
                    </div>
                    <div style={{ background: "#1A1A1A", color: "white", borderRadius: "999px", padding: "8px 14px", fontSize: "11px", fontWeight: "800" }}>View Tree</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "sticky", top: "80px", height: "fit-content" }}>
          <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "20px" }}>
            <div style={{ fontWeight: "900", fontSize: "14px" }}>Family Tree — 41 families</div>
            <div style={{ fontSize: "11px", opacity: 0.6, marginTop: "4px" }}>Grew 3 to 5 to 38 to 41</div>
            <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                <span>Bazard • Calgary</span>
                <span style={{ opacity: 0.6 }}>1969 Charger</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                <span>Bazard • Punjab</span>
                <span style={{ opacity: 0.6 }}>60yr Pickle</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                <span>Keeper • 1000 stories</span>
                <span style={{ opacity: 0.6 }}>Trust Bar</span>
              </div>
              <div style={{ borderTop: "1px solid #f5e6c8", marginTop: "6px", paddingTop: "10px", fontSize: "11px", fontWeight: "700", color: "#15803d" }}>+ 38 more families in vault →</div>
            </div>
          </div>

          <div style={{ background: "#1A1A1A", color: "white", borderRadius: "20px", padding: "20px" }}>
            <div style={{ fontWeight: "900", fontSize: "14px" }}>Trust Bar — Why Family Vault?</div>
            <div style={{ marginTop: "12px", fontSize: "12px", lineHeight: "1.5", opacity: 0.8 }}>
              <div>✓ Not on TikTok — In Family Vault</div>
              <div>✓ Real motion — Not AI — Real videos</div>
              <div>✓ Not algorithm — Family only</div>
              <div>✓ SEO 96 — Real traffic — Real stories</div>
              <div>✓ $21/mo keeps stories forever</div>
            </div>
            <div style={{ marginTop: "14px", background: "white", color: "black", borderRadius: "12px", padding: "10px 14px", textAlign: "center", fontWeight: "800", fontSize: "12px" }}>Join 41 Families — $21/mo</div>
          </div>

          <div style={{ background: "#FFFBEB", border: "1px solid #fde68a", borderRadius: "20px", padding: "20px" }}>
            <div style={{ fontWeight: "900", fontSize: "14px" }}>What is OldHint?</div>
            <div style={{ marginTop: "8px", fontSize: "12px", lineHeight: "1.5", color: "#57534e" }}>
              Old people TikTok but not on TikTok. In Family Vault. Your parents stories deserve more than 15 sec. We save them. Forever. With real motion video. With family tree. With trust bar.
            </div>
            <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
              <div style={{ background: "white", border: "1px solid #fde68a", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700" }}>For You</div>
              <div style={{ background: "white", border: "1px solid #fde68a", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700" }}>Vault</div>
              <div style={{ background: "white", border: "1px solid #fde68a", borderRadius: "999px", padding: "6px 12px", fontSize: "11px", fontWeight: "700" }}>Pricing</div>
            </div>
          </div>

          <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "16px", fontSize: "11px", opacity: 0.6, lineHeight: "1.4" }}>
            Bazard Family — Old People TikTok — Not on TikTok — In Family Vault — 41 families — Real motion Moat LIVE — For You feed — Family Tree — Trust Bar — SEO 96 — Marketing LIVE — Real videos — oldhint.com — © 2026
          </div>
        </div>
      </main>
    </div>
  );
}
