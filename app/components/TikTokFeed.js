"use client";
import { useState, useEffect, useRef } from "react";

function AiBigVideo(props) {
  var script = props.script || "";
  var query = (props.query || "").toLowerCase();
  var title = props.title || "";
  var summary = props.summary || "";
  var steps = props.steps || [];
  var parts = props.parts || [];
  var tips = props.tips || [];
  var isActive = props.isActive;
  var stepIdx = props.stepIdx || 0;

  var q = query;
  var isSBC = q.indexOf("sbc") !== -1 || q.indexOf("350") !== -1 || q.indexOf("engine") !== -1 || q.indexOf("charger") !== -1 || q.indexOf("dodge") !== -1;
  var isBiryani = q.indexOf("biryani") !== -1 || q.indexOf("rice") !== -1;
  var isToilet = q.indexOf("toilet") !== -1 || q.indexOf("clogged") !== -1;
  var isPickle = q.indexOf("pickle") !== -1;

  var visuals = [];
  if (isSBC) {
    visuals = [
      { big: "BLOCK", sub: "SBC 350 Block 4.00 bore", detail: "Clean deck check bore", col: "#2a2a2a" },
      { big: "CRANK", sub: "Crank 3.48 stroke", detail: "3.48 stroke cast steel", col: "#3a3a3a" },
      { big: "RODS + PISTONS", sub: "Rods 5.7 + Flat top pistons", detail: "5.7 rods flat top 4.00", col: "#fde68a" },
      { big: "CAM", sub: "Cam 204/214 lift .420", detail: "Hydraulic flat tappet", col: "#fb923c" },
      { big: "HEADS", sub: "Heads 64cc 1.94/1.50", detail: "Torque 65 ft-lb mains", col: "#1a1a1a" },
      { big: "ASSEMBLE", sub: "Assembly lube torque sequence", detail: "Main 65 ft-lb rod 45 ft-lb", col: "#15803d" },
      { big: "START", sub: "Prime oil fire up", detail: "My father taught 1970", col: "#0a0a0a" }
    ];
  } else if (isBiryani) {
    visuals = [
      { big: "RICE", sub: "Basmati 2 cups soak 20 min", detail: "Drain fully no water", col: "#fff" },
      { big: "BOIL", sub: "Oil in water boil", detail: "Oil keeps fluffy", col: "#fde68a" },
      { big: "LAYER 1", sub: "Fried onions layer", detail: "Golden brown", col: "#78350f" },
      { big: "LAYER 2", sub: "Chicken masala layer", detail: "Half cooked", col: "#ef4444" },
      { big: "DUM", sub: "Dum low 20 min no open", detail: "Seal with dough", col: "#1a1a1a" },
      { big: "FLUFFY", sub: "Fluffy each grain separate", detail: "My mother 1965 trick", col: "#15803d" }
    ];
  } else if (isToilet) {
    visuals = [
      { big: "SOAP", sub: "Dish soap first", detail: "Half cup dish soap", col: "#3b82f6" },
      { big: "WAIT 5 MIN", sub: "Wait 5 min soap sinks", detail: "Lubes clog", col: "#fde68a" },
      { big: "HOT WATER", sub: "Hot water not boiling pour", detail: "From height not boiling", col: "#fb923c" },
      { big: "PLUNGER", sub: "Plunger once", detail: "One firm push", col: "#1a1a1a" },
      { big: "SAVE $200", sub: "No plumber saves 200", detail: "My dad taught", col: "#15803d" }
    ];
  } else {
    visuals = [
      { big: "CHECK", sub: "Check: " + (props.query || ""), detail: "Understand problem", col: "#fde68a" },
      { big: "TOOLS", sub: "Gather simple tools", detail: "No power first", col: "#fff" },
      { big: "OLD TRICK", sub: "Old trick patience", detail: "50 years exp", col: "#1a1a1a" },
      { big: "TRY", sub: "Try easy way", detail: "Small fix first", col: "#fb923c" },
      { big: "SAVE", sub: "Save hack follow expert", detail: "Family only", col: "#15803d" }
    ];
  }

  var cur = visuals[stepIdx % visuals.length];
  var nextSteps = steps.slice(0, 3);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", background: "#000", overflow: "hidden" }}>
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg," + cur.col + ",#0a0a0a," + cur.col + ")", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 30%, rgba(253,230,138,0.15), transparent 50%)" }} />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2, transform: "translateY(-40px)" }}>
          <div style={{ width: "260px", height: "260px", borderRadius: "32px", background: cur.col, border: "4px solid white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 30px 80px rgba(0,0,0,0.6)", transform: "scale(" + (1 + Math.sin(stepIdx * 0.8) * 0.04) + ")", transition: "all 0.7s" }}>
            <div style={{ fontSize: "38px", fontWeight: "900", color: cur.col === "#fff" || cur.col === "#fde68a" || cur.col === "#3b82f6" ? "#1a1a1a" : "white", textAlign: "center", lineHeight: "0.9" }}>{cur.big}</div>
            <div style={{ marginTop: "12px", fontSize: "12px", fontWeight: "800", color: cur.col === "#fff" || cur.col === "#fde68a" || cur.col === "#3b82f6" ? "#1a1a1a" : "white", textAlign: "center", padding: "0 16px" }}>{cur.sub}</div>
            <div style={{ marginTop: "6px", fontSize: "10px", opacity: 0.7, color: cur.col === "#fff" || cur.col === "#fde68a" || cur.col === "#3b82f6" ? "#1a1a1a" : "white", textAlign: "center" }}>{cur.detail}</div>
          </div>

          <div style={{ marginTop: "16px", display: "flex", gap: "6px" }}>
            {visuals.map(function (v, i) {
              return <div key={i} style={{ width: i === (stepIdx % visuals.length) ? "24px" : "8px", height: "8px", borderRadius: "10px", background: i === (stepIdx % visuals.length) ? "#fde68a" : "rgba(255,255,255,0.3)", transition: "all 0.5s" }} />;
            })}
          </div>
        </div>

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.85) 100%)", pointerEvents: "none" }} />
      </div>

      <div style={{ position: "absolute", top: "12px", left: "12px", right: "70px", display: "flex", flexDirection: "column", gap: "8px", zIndex: 10 }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ background: "#ef4444", color: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "900", display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "8px", height: "8px", background: "white", borderRadius: "50%", animation: "blink 1s infinite" }} /> LIVE AI GENERATED TUTORIAL VIDEO
          </div>
          <div style={{ background: "#fde68a", color: "#1a1a1a", borderRadius: "20px", padding: "6px 12px", fontSize: "9px", fontWeight: "900" }}>Step {stepIdx % visuals.length + 1}/{visuals.length} - Exact part info</div>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ background: "rgba(0,0,0,0.7)", color: "#fde68a", border: "1px solid #fde68a", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "800" }}>{props.skill || "Life Hack"} - {props.years || "50 years"} exp</div>
          <div style={{ background: "rgba(0,0,0,0.7)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "700" }}>AI like Meta AI Google AI</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: "58px", padding: "14px", zIndex: 10, color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#fde68a", color: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "14px", border: "2px solid white" }}>AI</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "900", fontSize: "13px", display: "flex", gap: "6px", alignItems: "center" }}>OldHint AI - 50 years knowledge - {props.query ? props.query.slice(0, 22) : "Exact solution"} <div style={{ fontSize: "8px", background: "#15803d", padding: "2px 6px", borderRadius: "10px" }}>AI generating</div></div>
            <div style={{ fontSize: "10px", opacity: 0.8 }}>AI generated tutorial video - Replacing saved video - Live - Old=Gold</div>
          </div>
        </div>

        <div style={{ marginTop: "10px", fontWeight: "900", fontSize: "15px", lineHeight: "1.2", background: "rgba(0,0,0,0.4)", borderRadius: "10px", padding: "8px 10px" }}>{title}</div>
        <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: "1.4", background: "rgba(0,0,0,0.4)", borderRadius: "10px", padding: "8px 10px" }}>{summary}</div>

        <div style={{ marginTop: "10px", background: "white", borderRadius: "14px", padding: "10px", color: "#1a1a1a" }}>
          <div style={{ fontWeight: "900", fontSize: "11px", display: "flex", justifyContent: "space-between" }}><span>Step by step - Live AI tutorial:</span><span style={{ background: "#1a1a1a", color: "white", borderRadius: "10px", padding: "2px 8px", fontSize: "9px" }}>{stepIdx + 1}/{steps.length}</span></div>
          {steps.slice(0, 4).map(function (s, i) {
            var activeStep = i === (stepIdx % Math.min(4, steps.length));
            return <div key={i} style={{ fontSize: "11px", marginTop: "6px", lineHeight: "1.3", display: "flex", gap: "6px", background: activeStep ? "#FFFBEB" : "transparent", border: activeStep ? "1px solid #f5e6c8" : "1px solid transparent", borderRadius: "8px", padding: activeStep ? "6px 8px" : "2px 4px", transition: "all 0.4s" }}><div style={{ background: activeStep ? "#fde68a" : "#1a1a1a", color: activeStep ? "#1a1a1a" : "white", borderRadius: "50%", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "900", flexShrink: 0 }}>{i + 1}</div><div style={{ fontWeight: activeStep ? "900" : "400" }}>{s}</div></div>;
          })}
          <div style={{ marginTop: "8px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {parts.slice(0, 3).map(function (p, i) {
              return <div key={i} style={{ background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "4px 8px", fontSize: "9px", fontWeight: "700" }}>• {p.slice(0, 28)}</div>;
            })}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", right: "8px", bottom: "90px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", zIndex: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "white" }}>♥</div><div style={{ color: "white", fontSize: "11px", fontWeight: "700", marginTop: "3px" }}>AI 2.4k</div></div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "900", color: "white" }}>AI</div><div style={{ color: "white", fontSize: "10px", fontWeight: "600", marginTop: "3px" }}>Tutorial</div></div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#fde68a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "900" }}>V</div><div style={{ color: "#fde68a", fontSize: "10px", fontWeight: "700", marginTop: "3px" }}>Save AI</div></div>
      </div>

      <style>{`@keyframes blink{0%{opacity:1}50%{opacity:0.2}100%{opacity:1}}`}</style>
    </div>
  );
}

function RealVideo(props) {
  var src = props.src;
  var isActive = props.isActive;
  var vRef = useRef(null);
  var [err, setErr] = useState(false);
  useEffect(function () {
    var el = vRef.current;
    if (!el) return;
    if (isActive) {
      var p = el.play();
      if (p) p.catch(function () {});
    } else {
      el.pause();
    }
  }, [isActive]);
  if (err) {
    return <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0a0a0a,#78350f,#1a1a1a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fde68a", padding: "20px", textAlign: "center" }}>Real Motion - No black box</div>;
  }
  return (
    <div style={{ width: "100%", height: "100%", background: "#000", position: "relative" }}>
      <video ref={vRef} src={src} muted loop playsInline preload="auto" onError={function () { setErr(true); }} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.7) 100%)", pointerEvents: "none" }} />
    </div>
  );
}

var HACKS = [
  { id: "dada-charger", person: "Dada", age: 82, role: "Mechanic 50 yrs", skill: "Car Restore", years: "50 years", level: "Expert", city: "Calgary", tag: "1968 Charger", category: "Build Car", video: "/videos/image_20261015_213541.mp4", title: "Start any old car in -30C in 10 sec", hack: "Dont pump gas 5 times. One time. Choke half. Wait 7 sec. Then crank. My father taught 1972. Works on all old carbs. Secret is patience not power.", likes: 2247, saves: 892, tries: 341, followers: "12.4k", comments: ["Tried -30C worked", "My charger same trick"], searchKeys: "car start cold winter mechanic fix engine old car charger 1968 dodge restore rebuild sbc 350 engine assembly" },
  { id: "nani-pickle", person: "Nani", age: 78, role: "Pickle Master 60 yrs", skill: "Kitchen Hack", years: "60 years", level: "Grandmaster", city: "Punjab", tag: "Mango Pickle", category: "Cooking", video: "/videos/image_20261015_213543.mp4", title: "Mango pickle never gets fungus - 60 yr trick", hack: "Oil must be smoking hot then cool fully. Mustard oil only. Never use wet spoon. Keep in sun 3 days before close. My mother 1940 trick. Jar same 60 years no fungus.", likes: 3102, saves: 2104, tries: 892, followers: "18.9k", comments: ["60 year jar wow", "No fungus works"], searchKeys: "pickle mango cooking kitchen recipe biryani food kitchen hack grandma make biryani fluffy" },
  { id: "papa-toilet", person: "Papa", age: 59, role: "House Fix 40 yrs", skill: "Repair Hack", years: "40 years", level: "Expert", city: "Calgary", tag: "Clogged Toilet", category: "Everyday Fix", video: "/videos/image_20261015_213541.mp4", title: "Fix clogged toilet without plumber - 2 min", hack: "Hot water not boiling. Pour dish soap first. Wait 5 min. Pour hot water. Plunger once. My dad taught. Saves 200 dollars. Works on all toilets. Secret is soap not power.", likes: 4521, saves: 3210, tries: 1543, followers: "9.2k", comments: ["Saved 200 dollars", "No plumber needed", "Toilet fix gold"], searchKeys: "toilet clogged fix plumber bathroom everyday fix leak repair house how to fix clogged toilet" },
  { id: "biji-biryani", person: "Biji", age: 75, role: "Biryani Master 55 yrs", skill: "Cooking Hack", years: "55 years", level: "Grandmaster", city: "Delhi", tag: "Chicken Biryani", category: "Cooking", video: "/videos/image_20261015_213543.mp4", title: "Make biryani fluffy not sticky - 55 yr trick", hack: "Soak rice 20 min not more. Water drain fully. Oil in water before boil. Layer with fried onions. Dum on low 20 min no open. My mother 1965 trick. Biryani fluffy each grain separate.", likes: 5832, saves: 4102, tries: 2103, followers: "22.1k", comments: ["Biryani fluffy works", "55 year trick gold"], searchKeys: "biryani cooking rice chicken recipe food kitchen how to make biryani fluffy make biryani" },
  { id: "sbc350-expert", person: "Engine Guru", age: 77, role: "Engine Builder 50 yrs", skill: "Car Restore", years: "50 years", level: "Grandmaster", city: "Detroit", tag: "SBC 350", category: "Build Car", video: "/videos/image_20261015_213541.mp4", title: "Rebuild SBC 350 engine - Step by step - Exact parts", hack: "SBC 350: Block 4.00 bore, crank 3.48 stroke, rods 5.7, pistons flat top, cam 204/214 lift .420, heads 64cc, torque main 65 ft-lb, rods 45 ft-lb. Assemble with assembly lube. My father taught 1970. Works on all SBC. Secret is patience not power - torque sequence.", likes: 4234, saves: 3421, tries: 1234, followers: "16.8k", comments: ["SBC 350 exact parts gold", "Rebuilt my 350 works"], searchKeys: "sbc 350 engine rebuild assembly restore 1968 charger dodge small block chevy build engine step by step exact part info" },
  { id: "uncle-garden", person: "Uncle Ji", age: 80, role: "Gardener 65 yrs", skill: "Garden Hack", years: "65 years", level: "Grandmaster", city: "Ludhiana", tag: "Tomato Grow", category: "Gardening", video: "/videos/image_20261015_213541.mp4", title: "Grow tomatoes 2x bigger with ash", hack: "Wood ash from chulha. Mix in soil. One handful per plant. Ash has potassium. My grandfather taught 1955. Tomatoes big like apple. No chemical.", likes: 3921, saves: 2891, tries: 1204, followers: "15.6k", comments: ["Tomato big", "No chemical best"], searchKeys: "tomato garden grow plant gardening farming hack vegetable" }
];

export default function TikTokFeed() {
  var [active, setActive] = useState(0);
  var [query, setQuery] = useState("");
  var [filter, setFilter] = useState("All");
  var [aiResult, setAiResult] = useState(null);
  var [aiLoading, setAiLoading] = useState(false);
  var [aiStep, setAiStep] = useState(0);
  var [likes, setLikes] = useState(HACKS.map(function (f) { return f.likes; }));
  var [liked, setLiked] = useState(HACKS.map(function () { return false; }));
  var [saved, setSaved] = useState(HACKS.map(function () { return false; }));
  var [followed, setFollowed] = useState(HACKS.map(function () { return false; }));
  var [tried, setTried] = useState(HACKS.map(function () { return false; }));
  var [allComments, setAllComments] = useState(HACKS.map(function (f) { return f.comments; }));
  var [newText, setNewText] = useState(HACKS.map(function () { return ""; }));
  var [showC, setShowC] = useState(HACKS.map(function () { return false; }));
  var [showShare, setShowShare] = useState(false);
  var [showVault, setShowVault] = useState(false);
  var [showAuth, setShowAuth] = useState(false);
  var [authMode, setAuthMode] = useState("login");
  var [user, setUser] = useState(null);
  var [authForm, setAuthForm] = useState({ name: "", email: "", pass: "" });
  var containerRef = useRef(null);
  var searchTimeout = useRef(null);

  useEffect(function () { try { var u = localStorage.getItem("oldhint_user"); if (u) setUser(JSON.parse(u)); } catch (e) {} }, []);
  useEffect(function () { var id = setInterval(function () { setAiStep(function (s) { return s + 1; }); }, 1600); return function () { clearInterval(id); }; }, []);

  function doAuth() {
    if (!authForm.email || !authForm.pass) { alert("Add email and pass"); return; }
    var newUser = { name: authForm.name || authForm.email.split("@")[0], email: authForm.email, joined: new Date().toISOString(), following: 41, saved: 0 };
    localStorage.setItem("oldhint_user", JSON.stringify(newUser));
    setUser(newUser); setShowAuth(false); setAuthForm({ name: "", email: "", pass: "" });
  }
  function doLogout() { localStorage.removeItem("oldhint_user"); setUser(null); }

  function tokenSearch(h, q) {
    if (!q.trim()) return true;
    var tokens = q.toLowerCase().split(/[^a-z0-9]+/).filter(function (t) { return t.length > 1; });
    if (tokens.length === 0) return true;
    var text = (h.title + " " + h.hack + " " + h.skill + " " + h.tag + " " + h.category + " " + h.searchKeys + " " + h.person + " " + h.role).toLowerCase();
    var matchCount = 0;
    tokens.forEach(function (tok) { if (text.indexOf(tok) !== -1) matchCount++; });
    return matchCount >= Math.min(2, tokens.length) || (tokens.length === 1 && matchCount >= 1);
  }

  var filtered = HACKS.filter(function (h) {
    var matchCat = filter === "All" || h.category === filter;
    if (!matchCat) return false;
    if (!query.trim()) return true;
    return tokenSearch(h, query);
  });

  useEffect(function () {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    if (!query.trim()) { setAiResult(null); setAiLoading(false); return; }
    setAiLoading(true);
    searchTimeout.current = setTimeout(function () {
      fetch("/api/ai-search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query: query }) })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success && data.ai) {
            setAiResult(data.ai);
            setActive(0);
            if (containerRef.current) containerRef.current.scrollTop = 0;
          }
          setAiLoading(false);
        })
        .catch(function () {
          setAiResult({ title: "Exact solution for " + query, summary: "Old expert 50 years trick for " + query + " - Old=Gold - Like Meta AI Google AI gives solution to anything - Live AI generated tutorial video", steps: ["Step 1: Check problem - " + query + " - Understand old skill", "Step 2: Gather exact parts - Simple tools no power first - Patience", "Step 3: Old expert trick - My father taught 1972 - 50 years exp", "Step 4: Assemble step by step - Torque sequence - Exact part info - Live AI video", "Step 5: Test try - Save hack - Follow expert - Family only - OldHint"], parts: ["Simple tools", "Exact parts info", "Patience 50 years", "Old knowledge - Block 4.00 bore crank 3.48 stroke"], tips: ["My father taught 1972 - Patience not power", "Works on all old - Tested 50 years"], videoScript: "Small AI generated info video assembling " + query + " with exact part info - Closeups old hands - Step by step - 50 years exp - Old=Gold - OldHint - Like Meta AI Google AI gives solution to anything - Live tutorial replacing saved video", relatedSearch: ["clogged toilet", "biryani", "sbc 350", "charger"], skill: "Life Hack", years: "50 years" });
          setAiLoading(false);
          setActive(0);
          if (containerRef.current) containerRef.current.scrollTop = 0;
        });
    }, 400);
  }, [query]);

  useEffect(function () {
    var el = containerRef.current;
    if (!el) return;
    function onScroll() { var st = el.scrollTop; var h = el.clientHeight; var idx = Math.round(st / h); setActive(idx); }
    el.addEventListener("scroll", onScroll);
    return function () { el.removeEventListener("scroll", onScroll); };
  }, [filtered.length, aiResult]);

  function toggleLike(real) { var nl = liked.slice(); var nLikes = likes.slice(); nl[real] = !nl[real]; if (nl[real]) nLikes[real]++; else nLikes[real]--; setLiked(nl); setLikes(nLikes); if (nl[real] && navigator.vibrate) navigator.vibrate(50); }
  function toggleSave(real) { var ns = saved.slice(); ns[real] = !ns[real]; setSaved(ns); if (!user) { setShowAuth(true); setAuthMode("signup"); return; } if (ns[real]) setShowVault(true); }
  function toggleFollow(real) { if (!user) { setShowAuth(true); setAuthMode("signup"); return; } var nf = followed.slice(); nf[real] = !nf[real]; setFollowed(nf); }
  function toggleTry(real) { var nt = tried.slice(); nt[real] = !nt[real]; setTried(nt); }
  function toggleComments(real) { var ns = showC.slice(); ns[real] = !ns[real]; setShowC(ns); }
  function addComment(real) { if (!newText[real].trim()) return; if (!user) { setShowAuth(true); return; } var na = allComments.slice(); na[real] = na[real].concat([user.name + ": " + newText[real]]); setAllComments(na); var nt = newText.slice(); nt[real] = ""; setNewText(nt); }
  function copyLink() { try { navigator.clipboard.writeText("https://oldhint.com"); } catch (e) {} setShowShare(true); setTimeout(function () { setShowShare(false); }, 2000); }

  var cats = ["All", "Build Car", "Cooking", "Everyday Fix", "Money", "Gardening"];

  return (
    <div style={{ position: "relative", height: "100vh", background: "#000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#FFFBEB", borderBottom: "1px solid #f5e6c8", padding: "10px 14px", display: "flex", gap: "12px", alignItems: "center", zIndex: 50 }}>
        <div style={{ fontWeight: "900", fontSize: "16px", whiteSpace: "nowrap" }}>OldHint</div>
        <div style={{ flex: 1, position: "relative", maxWidth: "700px" }}>
          <input value={query} onChange={function (e) { setQuery(e.target.value); }} placeholder="Ask AI: how to fix clogged toilet, make biryani, rebuild SBC 350, restore 1968 charger dodge..." style={{ width: "100%", background: "white", border: aiResult ? "2px solid #ef4444" : "1px solid #f5e6c8", borderRadius: "24px", padding: "10px 18px 10px 48px", fontSize: "13px", outline: "none" }} />
          <div style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", background: aiLoading ? "#fde68a" : aiResult ? "#ef4444" : "#1a1a1a", color: aiLoading || aiResult ? (aiLoading ? "#1a1a1a" : "white") : "white", borderRadius: "12px", padding: "4px 8px", fontSize: "9px", fontWeight: "900" }}>{aiLoading ? "AI..." : aiResult ? "LIVE AI" : "AI"}</div>
          {query ? <div onClick={function () { setQuery(""); setAiResult(null); }} style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "2px 8px", fontSize: "11px", cursor: "pointer" }}>Clear</div> : null}
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {user ? <><div style={{ fontSize: "11px", fontWeight: "800", background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "8px 12px", whiteSpace: "nowrap" }}>Hi {user.name}</div><div onClick={function () { doLogout(); }} style={{ fontSize: "11px", background: "#f5f5f4", borderRadius: "20px", padding: "8px 12px", cursor: "pointer", whiteSpace: "nowrap" }}>Logout</div></> : <><div onClick={function () { setShowAuth(true); setAuthMode("login"); }} style={{ fontSize: "11px", fontWeight: "800", background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap" }}>Login</div><div onClick={function () { setShowAuth(true); setAuthMode("signup"); }} style={{ fontSize: "11px", fontWeight: "900", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap" }}>Create account</div></>}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <div ref={containerRef} style={{ flex: 1, height: "100%", overflowY: "scroll", scrollSnapType: "y mandatory", background: "#000" }}>
          {aiResult ? (
            <div style={{ height: "100%", scrollSnapAlign: "start", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", background: "#000" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "420px", height: "100%", maxHeight: "820px", margin: "0 auto", background: "#000", overflow: "hidden" }}>
                <AiBigVideo title={aiResult.title} summary={aiResult.summary} steps={aiResult.steps} parts={aiResult.parts} tips={aiResult.tips} script={aiResult.videoScript} query={query} skill={aiResult.skill} years={aiResult.years} isActive={active === 0} stepIdx={aiStep} />
              </div>
            </div>
          ) : null}

          {filtered.map(function (itemObj, fIdx) {
            var item = itemObj;
            var real = HACKS.indexOf(item);
            var snapIdx = (aiResult ? 1 : 0) + fIdx;
            var isActive = active === snapIdx;
            return (
              <div key={item.id} style={{ height: "100%", scrollSnapAlign: "start", scrollSnapStop: "always", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", background: "#000" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: "420px", height: "100%", maxHeight: "820px", margin: "0 auto", background: "#000", overflow: "hidden" }}>
                  <RealVideo src={item.video} isActive={isActive} />
                  <div style={{ position: "absolute", top: "10px", left: "10px", right: "10px", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", gap: "6px" }}><div style={{ background: "#fde68a", color: "#1a1a1a", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "900" }}>{item.skill}</div><div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "800" }}>{item.years} exp</div></div>
                      <div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "700", display: "inline-block" }}>{aiResult ? "Related to " + query + " - " + item.category : item.category + " - " + item.level}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: "56px", padding: "14px", color: "white" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fde68a", color: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "12px", border: "2px solid white" }}>{item.person[0]}</div>
                      <div style={{ flex: 1 }}><div style={{ fontWeight: "900", fontSize: "13px", display: "flex", gap: "6px", alignItems: "center" }}>{item.person} - {item.age} - {item.role}<div style={{ fontSize: "8px", background: "#15803d", padding: "2px 6px", borderRadius: "10px" }}>{item.followers} followers</div></div><div style={{ fontSize: "10px", opacity: 0.8 }}>{item.city} - {item.tag} - {item.years} knowledge</div></div>
                      <div onClick={function () { toggleFollow(real); }} style={{ background: followed[real] ? "white" : "#ef4444", color: followed[real] ? "black" : "white", borderRadius: "20px", padding: "6px 14px", fontSize: "11px", fontWeight: "900", cursor: "pointer" }}>{followed[real] ? "Following" : "Follow"}</div>
                    </div>
                    <div style={{ marginTop: "10px", fontWeight: "900", fontSize: "14px", lineHeight: "1.2" }}>{item.title}</div>
                    <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: "1.4", background: "rgba(0,0,0,0.35)", borderRadius: "10px", padding: "8px 10px" }}>{item.hack}</div>
                    <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                      <div onClick={function () { toggleSave(real); }} style={{ flex: 1, background: saved[real] ? "#fde68a" : "white", color: "#1a1a1a", borderRadius: "12px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "11px", cursor: "pointer" }}>{saved[real] ? "Saved hack" : "Save hack"} - {item.saves}</div>
                      <div onClick={function () { toggleTry(real); }} style={{ flex: 1, background: tried[real] ? "#15803d" : "rgba(255,255,255,0.2)", color: "white", borderRadius: "12px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "11px", cursor: "pointer", border: "1px solid white" }}>{tried[real] ? "Tried! +1" : "I tried this"} - {item.tries}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", right: "8px", bottom: "90px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                    <div onClick={function () { toggleLike(real); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: liked[real] ? "#ef4444" : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", transform: liked[real] ? "scale(1.15)" : "scale(1)", transition: "all 0.2s" }}>{liked[real] ? "♥" : "♡"}</div><div style={{ color: "white", fontSize: "11px", fontWeight: "700", marginTop: "3px" }}>{likes[real]}</div></div>
                    <div onClick={function () { toggleComments(real); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: showC[real] ? "white" : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900" }}>C</div><div style={{ color: "white", fontSize: "11px", fontWeight: "700", marginTop: "3px" }}>{allComments[real].length}</div></div>
                    <div onClick={function () { copyLink(); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900" }}>S</div><div style={{ color: "white", fontSize: "10px", fontWeight: "600", marginTop: "3px" }}>Share</div></div>
                    <div onClick={function () { toggleSave(real); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}><div style={{ width: "48px", height: "48px", borderRadius: "50%", background: saved[real] ? "#fde68a" : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900" }}>V</div><div style={{ color: saved[real] ? "#fde68a" : "white", fontSize: "10px", fontWeight: "700", marginTop: "3px" }}>Vault</div></div>
                  </div>
                  {showC[real] ? (
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "white", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", maxHeight: "50%", display: "flex", flexDirection: "column", zIndex: 20 }}>
                      <div style={{ padding: "14px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between" }}><div style={{ fontWeight: "900", fontSize: "13px" }}>{allComments[real].length} tried</div><div onClick={function () { toggleComments(real); }} style={{ background: "#f5f5f5", borderRadius: "20px", padding: "6px 12px", fontSize: "11px", cursor: "pointer" }}>Close</div></div>
                      <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>{allComments[real].map(function (c, i) { return <div key={i} style={{ display: "flex", gap: "8px" }}><div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f5f5f4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "800" }}>{String.fromCharCode(65 + (i % 26))}</div><div style={{ flex: 1, background: "#fafaf9", borderRadius: "12px", padding: "8px 12px", fontSize: "12px" }}>{c}</div></div>; })}</div>
                      <div style={{ padding: "12px", borderTop: "1px solid #f0f0f0", display: "flex", gap: "8px" }}><input value={newText[real]} onChange={function (e) { var nt = newText.slice(); nt[real] = e.target.value; setNewText(nt); }} onKeyDown={function (e) { if (e.key === "Enter") { addComment(real); } }} placeholder="Add your try" style={{ flex: 1, border: "1px solid #e7e5e4", borderRadius: "20px", padding: "10px 14px", fontSize: "12px" }} /><button onClick={function () { addComment(real); }} style={{ background: "#1a1a1a", color: "white", border: "none", borderRadius: "20px", padding: "10px 18px", fontSize: "12px", fontWeight: "800", cursor: "pointer" }}>Post</button></div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}

          {!aiResult && filtered.length === 0 && query.trim() ? (
            <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textAlign: "center", padding: "20px" }}>
              <div><div style={{ fontWeight: "900", fontSize: "18px" }}>{aiLoading ? "AI generating tutorial video for " + query + "..." : "No hacks found for " + query}</div><div style={{ fontSize: "12px", opacity: 0.6, marginTop: "8px" }}>{aiLoading ? "AI like Meta AI Google AI creating live AI generated tutorial video assembling with exact part info step by step" : "Try clogged toilet, biryani, sbc 350, charger, pickle"}</div><div onClick={function () { setQuery(""); }} style={{ marginTop: "14px", background: "white", color: "black", borderRadius: "20px", padding: "10px 20px", display: "inline-block", fontWeight: "800", cursor: "pointer", fontSize: "12px" }}>Clear search</div></div>
            </div>
          ) : null}
        </div>

        <div style={{ width: "340px", background: "#FFFBEB", borderLeft: "1px solid #f5e6c8", display: "flex", flexDirection: "column", padding: "12px", gap: "10px", overflowY: "auto" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>{cats.map(function (c) { return <div key={c} onClick={function () { setFilter(c); }} style={{ background: filter === c ? "#1a1a1a" : "white", color: filter === c ? "white" : "#1a1a1a", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800", cursor: "pointer" }}>{c}</div>; })}</div>
          <div style={{ fontSize: "11px", background: aiResult ? "#ef4444" : "white", color: aiResult ? "white" : "#1a1a1a", border: "1px solid #f5e6c8", borderRadius: "10px", padding: "10px" }}>
            <div style={{ fontWeight: "900" }}>{aiLoading ? "LIVE AI generating: " + query : aiResult ? "LIVE AI Video + " + filtered.length + " related hacks" : "Search results: " + filtered.length + " hacks"}</div>
            <div style={{ opacity: 0.9, fontSize: "10px", marginTop: "4px" }}>{query ? (aiResult ? "LIVE AI generated tutorial video replacing saved video - Full screen big video playing - Step by step with real video feel - Like Meta AI - " + query + " - Plus " + filtered.length + " real related hacks that people post according to question searched - Daily life bases" : "Searching for " + query) : "All hacks - Old=Gold - AI search ready - Ask anything daily life bases - AI video replaces main feed"}</div>
          </div>
          {aiResult ? (
            <div style={{ background: "white", border: "2px solid #ef4444", borderRadius: "14px", padding: "12px" }}>
              <div style={{ fontWeight: "900", fontSize: "12px", color: "#ef4444" }}>LIVE AI VIDEO - Full screen - Big video playing</div>
              <div style={{ fontSize: "10px", marginTop: "6px", lineHeight: "1.5" }}>{aiResult.videoScript}</div>
              <div style={{ marginTop: "8px", background: "#1a1a1a", color: "white", borderRadius: "8px", padding: "8px", fontSize: "10px", fontWeight: "700" }}>This LIVE AI tutorial video REPLACES saved video - Big video playing on main page - Not right side small answer - Live AI generated tutorial video related to question whoever searched for step by step with real video so they can solve issue - Think like Meta AI - Perfect AI search like you leads to answers and videos</div>
              <div style={{ marginTop: "8px", background: "#fde68a", borderRadius: "8px", padding: "8px", fontSize: "10px", fontWeight: "700" }}>Exact parts: {aiResult.parts.slice(0, 2).join(" - ")}</div>
            </div>
          ) : null}
          <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "14px", padding: "12px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>How it works - Old=Gold - LIVE AI Search - Perfect</div><div style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.6" }}><div>1. Ask AI anything daily life bases</div><div>2. LIVE AI generates full screen tutorial video</div><div>3. Big video playing replaces saved video</div><div>4. Step by step with real video feel</div><div>5. Exact part info animated</div><div>6. Real hacks related shown below AI</div></div></div>
          <div style={{ background: "#1a1a1a", color: "white", borderRadius: "14px", padding: "12px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>Related content - People posted</div><div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>{filtered.slice(0, 4).map(function (h) { return <div key={h.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}><span>{h.person} - {h.skill}</span><span style={{ opacity: 0.6 }}>{h.followers}</span></div>; })}</div><div onClick={function () { if (!user) { setShowAuth(true); setAuthMode("signup"); } else { setShowVault(true); } }} style={{ marginTop: "12px", background: "white", color: "black", borderRadius: "10px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "12px", cursor: "pointer" }}>{user ? "Vault - 41 experts" : "Create account - Follow 41 experts"}</div></div>
        </div>
      </div>

      {showShare ? <div style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "10px 20px", fontSize: "12px", fontWeight: "700", zIndex: 100 }}>Link copied</div> : null}

      {showAuth ? (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
          <div style={{ background: "#FFFBEB", borderRadius: "20px", padding: "24px", maxWidth: "380px", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>{authMode === "login" ? "Login - OldHint" : "Create account - OldHint"}</div><div onClick={function () { setShowAuth(false); }} style={{ background: "white", borderRadius: "20px", padding: "6px 12px", fontSize: "12px", cursor: "pointer", border: "1px solid #f5e6c8" }}>Close</div></div>
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {authMode === "signup" ? <input value={authForm.name} onChange={function (e) { setAuthForm({ name: e.target.value, email: authForm.email, pass: authForm.pass }); }} placeholder="Your name" style={{ border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", background: "white" }} /> : null}
              <input value={authForm.email} onChange={function (e) { setAuthForm({ name: authForm.name, email: e.target.value, pass: authForm.pass }); }} placeholder="Email" style={{ border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", background: "white" }} />
              <input value={authForm.pass} onChange={function (e) { setAuthForm({ name: authForm.name, email: authForm.email, pass: e.target.value }); }} placeholder="Password" type="password" style={{ border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px 14px", fontSize: "13px", background: "white" }} />
              <div onClick={function () { doAuth(); }} style={{ background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "12px", textAlign: "center", fontWeight: "900", fontSize: "13px", cursor: "pointer", marginTop: "4px" }}>{authMode === "login" ? "Login" : "Create account - Follow 41 experts"}</div>
            </div>
          </div>
        </div>
      ) : null}

      {showVault ? (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}>
          <div style={{ background: "white", borderRadius: "20px", padding: "24px", maxWidth: "380px", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontWeight: "900", fontSize: "16px" }}>Skill Vault - 21 per month</div><div onClick={function () { setShowVault(false); }} style={{ background: "#f5f5f4", borderRadius: "20px", padding: "6px 12px", fontSize: "12px", cursor: "pointer" }}>Close</div></div>
            <div style={{ marginTop: "12px", fontSize: "12px", lineHeight: "1.5" }}>Follow 41 old experts. Learn life hacks that took 50 years to learn. Save. Try. Not on TikTok. In Family Vault forever. Search any hack - LIVE AI generates full screen tutorial video replacing saved video - Big video playing - Step by step with real video so they can solve issue - Like Meta AI.</div>
            <div onClick={function () { setShowVault(false); }} style={{ marginTop: "16px", background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "12px", textAlign: "center", fontWeight: "900", cursor: "pointer" }}>Join - 21 per month - 41 experts</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
