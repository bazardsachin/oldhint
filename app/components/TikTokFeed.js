"use client";
import { useState, useEffect, useRef } from "react";

function AiInfoVideo(props) {
  var script = props.script || "";
  var query = (props.query || "").toLowerCase();
  var stepIdx = props.stepIdx || 0;

  var isSBC = query.indexOf("sbc") !== -1 || query.indexOf("350") !== -1 || query.indexOf("engine") !== -1 || query.indexOf("charger") !== -1;
  var isBiryani = query.indexOf("biryani") !== -1 || query.indexOf("rice") !== -1;
  var isToilet = query.indexOf("toilet") !== -1 || query.indexOf("clogged") !== -1;
  var isPickle = query.indexOf("pickle") !== -1;

  var stepsVisual = [];
  if (isSBC) {
    stepsVisual = [
      { icon: "Block", label: "SBC 350 Block 4.00 bore", color: "#444" },
      { icon: "Crank", label: "Crank 3.48 stroke", color: "#666" },
      { icon: "Rods", label: "Rods 5.7 + Pistons flat top", color: "#fde68a" },
      { icon: "Cam", label: "Cam 204/214 lift .420", color: "#fb923c" },
      { icon: "Heads", label: "Heads 64cc torque 65 ft-lb", color: "#1a1a1a" },
      { icon: "Assemble", label: "Assembly lube + Torque sequence", color: "#15803d" }
    ];
  } else if (isBiryani) {
    stepsVisual = [
      { icon: "Rice", label: "Basmati 2 cups soak 20 min drain", color: "#fff" },
      { icon: "Boil", label: "Oil in water boil", color: "#fde68a" },
      { icon: "Layer", label: "Layer fried onions", color: "#78350f" },
      { icon: "Chicken", label: "Chicken masala layer", color: "#ef4444" },
      { icon: "Dum", label: "Dum low 20 min no open", color: "#1a1a1a" },
      { icon: "Fluffy", label: "Fluffy not sticky each grain separate", color: "#15803d" }
    ];
  } else if (isToilet) {
    stepsVisual = [
      { icon: "Soap", label: "Dish soap first", color: "#3b82f6" },
      { icon: "Wait", label: "Wait 5 min", color: "#fde68a" },
      { icon: "Hot Water", label: "Hot water not boiling pour", color: "#fb923c" },
      { icon: "Plunger", label: "Plunger once", color: "#1a1a1a" },
      { icon: "Save $200", label: "Saves 200 dollars no plumber", color: "#15803d" }
    ];
  } else {
    stepsVisual = [
      { icon: "Check", label: "Check problem: " + props.query, color: "#fde68a" },
      { icon: "Tools", label: "Gather simple tools no power", color: "#fff" },
      { icon: "Old Trick", label: "Old trick patience not power 50 years", color: "#1a1a1a" },
      { icon: "Try", label: "Try easy way small fix first", color: "#fb923c" },
      { icon: "Save", label: "Save hack follow expert", color: "#15803d" }
    ];
  }

  var cur = stepsVisual[stepIdx % stepsVisual.length];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg,#0a0a0a,#1a1a1a,#78350f)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        color: "white"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          background: "rgba(0,0,0,0.6)",
          border: "1px solid #fde68a",
          borderRadius: "20px",
          padding: "6px 12px",
          fontSize: "10px",
          fontWeight: "900",
          color: "#fde68a",
          display: "flex",
          gap: "6px",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            background: "#ef4444",
            borderRadius: "50%",
            animation: "blink 1s infinite"
          }}
        />
        AI GENERATED INFO VIDEO
      </div>
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "#fde68a",
          color: "#1a1a1a",
          borderRadius: "20px",
          padding: "6px 12px",
          fontSize: "9px",
          fontWeight: "900"
        }}
      >
        Exact part info - Step {stepIdx + 1}/{stepsVisual.length}
      </div>

      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "28px",
          background: cur.color,
          border: "4px solid white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          transform: "scale(" + (0.9 + Math.sin(stepIdx) * 0.05) + ")",
          transition: "all 0.6s",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "900",
            color: cur.color === "#fff" || cur.color === "#fde68a" ? "#1a1a1a" : "white",
            textAlign: "center"
          }}
        >
          {cur.icon}
        </div>
        <div
          style={{
            fontSize: "10px",
            marginTop: "8px",
            fontWeight: "800",
            color: cur.color === "#fff" || cur.color === "#fde68a" ? "#1a1a1a" : "white",
            textAlign: "center",
            padding: "0 12px"
          }}
        >
          {cur.label}
        </div>
      </div>

      <div
        style={{
          marginTop: "18px",
          background: "rgba(0,0,0,0.7)",
          borderRadius: "16px",
          padding: "12px 16px",
          maxWidth: "300px",
          textAlign: "center",
          border: "1px solid rgba(253,230,138,0.3)"
        }}
      >
        <div
          style={{
            fontSize: "11px",
            fontWeight: "900",
            color: "#fde68a"
          }}
        >
          {props.query ? "AI assembling: " + props.query : "AI assembling"}
        </div>
        <div
          style={{
            fontSize: "10px",
            marginTop: "6px",
            lineHeight: "1.4",
            opacity: 0.9
          }}
        >
          {script.slice(0, 120)}
        </div>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "4px",
            justifyContent: "center"
          }}
        >
          {stepsVisual.map(function (s, i) {
            return (
              <div
                key={i}
                style={{
                  width: i === (stepIdx % stepsVisual.length) ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "10px",
                  background: i === (stepIdx % stepsVisual.length) ? "#fde68a" : "rgba(255,255,255,0.3)",
                  transition: "all 0.4s"
                }}
              />
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "12px",
          right: "12px",
          background: "rgba(253,230,138,0.15)",
          border: "1px solid rgba(253,230,138,0.3)",
          borderRadius: "12px",
          padding: "8px 12px",
          fontSize: "9px",
          lineHeight: "1.4",
          textAlign: "center"
        }}
      >
        Small AI generated info video assembling {props.query} with exact part info and more you suggested - Old expert 50 years exp - Old=Gold - Like Meta AI Google AI gives solution to anything people search for - Daily life bases
      </div>

      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function RealVideo(props) {
  var src = props.src;
  var isActive = props.isActive;
  var vRef = useRef(null);
  var [err, setErr] = useState(false);
  useEffect(
    function () {
      var el = vRef.current;
      if (!el) return;
      if (isActive) {
        var p = el.play();
        if (p) p.catch(function () {});
      } else {
        el.pause();
      }
    },
    [isActive]
  );
  if (err) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg,#0a0a0a,#78350f,#1a1a1a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fde68a",
          padding: "20px",
          textAlign: "center"
        }}
      >
        Real Motion - No black box
      </div>
    );
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#000",
        position: "relative"
      }}
    >
      <video
        ref={vRef}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        onError={function () {
          setErr(true);
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.7) 100%)",
          pointerEvents: "none"
        }}
      />
    </div>
  );
}

var HACKS = [
  {
    id: "dada-charger",
    person: "Dada",
    age: 82,
    role: "Mechanic 50 yrs",
    skill: "Car Restore",
    years: "50 years",
    level: "Expert",
    city: "Calgary",
    tag: "1968 Charger",
    category: "Build Car",
    video: "/videos/image_20261015_213541.mp4",
    title: "Start any old car in -30C in 10 sec",
    hack: "Dont pump gas 5 times. One time. Choke half. Wait 7 sec. Then crank. My father taught 1972. Works on all old carbs. Secret is patience not power.",
    likes: 2247,
    saves: 892,
    tries: 341,
    followers: "12.4k",
    comments: ["Tried -30C worked", "My charger same trick"],
    searchKeys: "car start cold winter mechanic fix engine old car charger 1968 dodge restore rebuild sbc 350 engine assembly"
  },
  {
    id: "nani-pickle",
    person: "Nani",
    age: 78,
    role: "Pickle Master 60 yrs",
    skill: "Kitchen Hack",
    years: "60 years",
    level: "Grandmaster",
    city: "Punjab",
    tag: "Mango Pickle",
    category: "Cooking",
    video: "/videos/image_20261015_213543.mp4",
    title: "Mango pickle never gets fungus - 60 yr trick",
    hack: "Oil must be smoking hot then cool fully. Mustard oil only. Never use wet spoon. Keep in sun 3 days before close. My mother 1940 trick. Jar same 60 years no fungus.",
    likes: 3102,
    saves: 2104,
    tries: 892,
    followers: "18.9k",
    comments: ["60 year jar wow", "No fungus works"],
    searchKeys: "pickle mango cooking kitchen recipe biryani food kitchen hack grandma make biryani fluffy"
  },
  {
    id: "papa-toilet",
    person: "Papa",
    age: 59,
    role: "House Fix 40 yrs",
    skill: "Repair Hack",
    years: "40 years",
    level: "Expert",
    city: "Calgary",
    tag: "Clogged Toilet",
    category: "Everyday Fix",
    video: "/videos/image_20261015_213541.mp4",
    title: "Fix clogged toilet without plumber - 2 min",
    hack: "Hot water not boiling. Pour dish soap first. Wait 5 min. Pour hot water. Plunger once. My dad taught. Saves 200 dollars. Works on all toilets. Secret is soap not power.",
    likes: 4521,
    saves: 3210,
    tries: 1543,
    followers: "9.2k",
    comments: ["Saved 200 dollars", "No plumber needed", "Toilet fix gold"],
    searchKeys: "toilet clogged fix plumber bathroom everyday fix leak repair house how to fix clogged toilet"
  },
  {
    id: "biji-biryani",
    person: "Biji",
    age: 75,
    role: "Biryani Master 55 yrs",
    skill: "Cooking Hack",
    years: "55 years",
    level: "Grandmaster",
    city: "Delhi",
    tag: "Chicken Biryani",
    category: "Cooking",
    video: "/videos/image_20261015_213543.mp4",
    title: "Make biryani fluffy not sticky - 55 yr trick",
    hack: "Soak rice 20 min not more. Water drain fully. Oil in water before boil. Layer with fried onions. Dum on low 20 min no open. My mother 1965 trick. Biryani fluffy each grain separate.",
    likes: 5832,
    saves: 4102,
    tries: 2103,
    followers: "22.1k",
    comments: ["Biryani fluffy works", "55 year trick gold"],
    searchKeys: "biryani cooking rice chicken recipe food kitchen how to make biryani fluffy make biryani"
  },
  {
    id: "sbc350-expert",
    person: "Engine Guru",
    age: 77,
    role: "Engine Builder 50 yrs",
    skill: "Car Restore",
    years: "50 years",
    level: "Grandmaster",
    city: "Detroit",
    tag: "SBC 350",
    category: "Build Car",
    video: "/videos/image_20261015_213541.mp4",
    title: "Rebuild SBC 350 engine - Step by step - Exact parts",
    hack: "SBC 350: Block 4.00 bore, crank 3.48 stroke, rods 5.7, pistons flat top, cam 204/214 lift .420, heads 64cc, torque main 65 ft-lb, rods 45 ft-lb. Assemble with assembly lube. My father taught 1970. Works on all SBC. Secret is patience not power - torque sequence.",
    likes: 4234,
    saves: 3421,
    tries: 1234,
    followers: "16.8k",
    comments: ["SBC 350 exact parts gold", "Rebuilt my 350 works"],
    searchKeys: "sbc 350 engine rebuild assembly restore 1968 charger dodge small block chevy build engine step by step exact part info"
  },
  {
    id: "uncle-garden",
    person: "Uncle Ji",
    age: 80,
    role: "Gardener 65 yrs",
    skill: "Garden Hack",
    years: "65 years",
    level: "Grandmaster",
    city: "Ludhiana",
    tag: "Tomato Grow",
    category: "Gardening",
    video: "/videos/image_20261015_213541.mp4",
    title: "Grow tomatoes 2x bigger with ash",
    hack: "Wood ash from chulha. Mix in soil. One handful per plant. Ash has potassium. My grandfather taught 1955. Tomatoes big like apple. No chemical.",
    likes: 3921,
    saves: 2891,
    tries: 1204,
    followers: "15.6k",
    comments: ["Tomato big", "No chemical best"],
    searchKeys: "tomato garden grow plant gardening farming hack vegetable"
  }
];

export default function TikTokFeed() {
  var [active, setActive] = useState(0);
  var [query, setQuery] = useState("");
  var [filter, setFilter] = useState("All");
  var [aiResult, setAiResult] = useState(null);
  var [aiLoading, setAiLoading] = useState(false);
  var [aiStep, setAiStep] = useState(0);
  var [likes, setLikes] = useState(
    HACKS.map(function (f) {
      return f.likes;
    })
  );
  var [liked, setLiked] = useState(
    HACKS.map(function () {
      return false;
    })
  );
  var [saved, setSaved] = useState(
    HACKS.map(function () {
      return false;
    })
  );
  var [followed, setFollowed] = useState(
    HACKS.map(function () {
      return false;
    })
  );
  var [tried, setTried] = useState(
    HACKS.map(function () {
      return false;
    })
  );
  var [allComments, setAllComments] = useState(
    HACKS.map(function (f) {
      return f.comments;
    })
  );
  var [newText, setNewText] = useState(
    HACKS.map(function () {
      return "";
    })
  );
  var [showC, setShowC] = useState(
    HACKS.map(function () {
      return false;
    })
  );
  var [showShare, setShowShare] = useState(false);
  var [showVault, setShowVault] = useState(false);
  var [showAuth, setShowAuth] = useState(false);
  var [authMode, setAuthMode] = useState("login");
  var [user, setUser] = useState(null);
  var [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    pass: ""
  });
  var containerRef = useRef(null);
  var searchTimeout = useRef(null);

  useEffect(function () {
    try {
      var u = localStorage.getItem("oldhint_user");
      if (u) setUser(JSON.parse(u));
    } catch (e) {}
  }, []);

  useEffect(
    function () {
      var id = setInterval(function () {
        setAiStep(function (s) {
          return s + 1;
        });
      }, 1800);
      return function () {
        clearInterval(id);
      };
    },
    []
  );

  function doAuth() {
    if (!authForm.email || !authForm.pass) {
      alert("Add email and pass");
      return;
    }
    var newUser = {
      name: authForm.name || authForm.email.split("@")[0],
      email: authForm.email,
      joined: new Date().toISOString(),
      following: 41,
      saved: 0
    };
    localStorage.setItem(
      "oldhint_user",
      JSON.stringify(newUser)
    );
    setUser(newUser);
    setShowAuth(false);
    setAuthForm({ name: "", email: "", pass: "" });
  }

  function doLogout() {
    localStorage.removeItem("oldhint_user");
    setUser(null);
  }

  function tokenSearch(h, q) {
    if (!q.trim()) return true;
    var tokens = q
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter(function (t) {
        return t.length > 1;
      });
    if (tokens.length === 0) return true;
    var text = (
      h.title +
      " " +
      h.hack +
      " " +
      h.skill +
      " " +
      h.tag +
      " " +
      h.category +
      " " +
      h.searchKeys +
      " " +
      h.person +
      " " +
      h.role
    ).toLowerCase();
    var matchCount = 0;
    tokens.forEach(function (tok) {
      if (text.indexOf(tok) !== -1) matchCount++;
    });
    return matchCount >= Math.min(2, tokens.length) || (tokens.length === 1 && matchCount >= 1);
  }

  var filtered = HACKS.filter(function (h) {
    var matchCat = filter === "All" || h.category === filter;
    if (!matchCat) return false;
    if (!query.trim()) return true;
    return tokenSearch(h, query);
  });

  useEffect(
    function () {
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
      if (!query.trim()) {
        setAiResult(null);
        setAiLoading(false);
        return;
      }
      setAiLoading(true);
      searchTimeout.current = setTimeout(function () {
        fetch("/api/ai-search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: query })
        })
          .then(function (r) {
            return r.json();
          })
          .then(function (data) {
            if (data.success && data.ai) {
              setAiResult(data.ai);
            }
            setAiLoading(false);
          })
          .catch(function () {
            setAiResult({
              title: "Exact solution for " + query,
              summary: "Old expert 50 years trick for " + query + " - Old=Gold - Like Meta AI Google AI gives solution to anything",
              steps: [
                "Step 1: Understand problem - " + query + " - Check old skill",
                "Step 2: Gather exact parts - Simple tools no power first - Patience",
                "Step 3: Old expert trick - My father taught 1972 - 50 years exp",
                "Step 4: Assemble step by step - Torque sequence - Exact part info",
                "Step 5: Test try - Save hack - Follow expert - Family only"
              ],
              parts: ["Simple tools", "Exact parts info", "Patience 50 years", "Old knowledge"],
              tips: ["My father taught 1972 - Patience not power", "Works on all old - Tested 50 years"],
              videoScript: "Small AI generated info video assembling " + query + " with exact part info - Closeups old hands - Step by step - 50 years exp - Old=Gold - OldHint - Like Meta AI Google AI gives solution to anything",
              relatedSearch: ["clogged toilet", "biryani", "sbc 350", "charger"],
              skill: "Life Hack",
              years: "50 years"
            });
            setAiLoading(false);
          });
      }, 500);
    },
    [query]
  );

  useEffect(
    function () {
      var el = containerRef.current;
      if (!el) return;
      function onScroll() {
        var st = el.scrollTop;
        var h = el.clientHeight;
        var idx = Math.round(st / h);
        setActive(idx);
      }
      el.addEventListener("scroll", onScroll);
      return function () {
        el.removeEventListener("scroll", onScroll);
      };
    },
    [filtered.length, aiResult]
  );

  function toggleLike(real) {
    var nl = liked.slice();
    var nLikes = likes.slice();
    nl[real] = !nl[real];
    if (nl[real]) nLikes[real]++;
    else nLikes[real]--;
    setLiked(nl);
    setLikes(nLikes);
    if (nl[real] && navigator.vibrate) navigator.vibrate(50);
  }

  function toggleSave(real) {
    var ns = saved.slice();
    ns[real] = !ns[real];
    setSaved(ns);
    if (!user) {
      setShowAuth(true);
      setAuthMode("signup");
      return;
    }
    if (ns[real]) setShowVault(true);
  }

  function toggleFollow(real) {
    if (!user) {
      setShowAuth(true);
      setAuthMode("signup");
      return;
    }
    var nf = followed.slice();
    nf[real] = !nf[real];
    setFollowed(nf);
  }

  function toggleTry(real) {
    var nt = tried.slice();
    nt[real] = !nt[real];
    setTried(nt);
  }

  function toggleComments(real) {
    var ns = showC.slice();
    ns[real] = !ns[real];
    setShowC(ns);
  }

  function addComment(real) {
    if (!newText[real].trim()) return;
    if (!user) {
      setShowAuth(true);
      return;
    }
    var na = allComments.slice();
    na[real] = na[real].concat([user.name + ": " + newText[real]]);
    setAllComments(na);
    var nt = newText.slice();
    nt[real] = "";
    setNewText(nt);
  }

  function copyLink() {
    try {
      navigator.clipboard.writeText("https://oldhint.com");
    } catch (e) {}
    setShowShare(true);
    setTimeout(function () {
      setShowShare(false);
    }, 2000);
  }

  var cats = ["All", "Build Car", "Cooking", "Everyday Fix", "Money", "Gardening"];
  var totalSnaps = (aiResult ? 1 : 0) + filtered.length;
  var aiActive = query.trim() && active === 0 && aiResult;

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          background: "#FFFBEB",
          borderBottom: "1px solid #f5e6c8",
          padding: "10px 14px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          zIndex: 50
        }}
      >
        <div style={{ fontWeight: "900", fontSize: "16px", whiteSpace: "nowrap" }}>OldHint</div>
        <div style={{ flex: 1, position: "relative", maxWidth: "700px" }}>
          <input
            value={query}
            onChange={function (e) {
              setQuery(e.target.value);
            }}
            placeholder="Ask AI: how to fix clogged toilet, make biryani, rebuild SBC 350, restore 1968 charger dodge..."
            style={{
              width: "100%",
              background: "white",
              border: aiResult ? "2px solid #1a1a1a" : "1px solid #f5e6c8",
              borderRadius: "24px",
              padding: "10px 18px 10px 48px",
              fontSize: "13px",
              outline: "none"
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              background: aiLoading ? "#fde68a" : "#1a1a1a",
              color: aiLoading ? "#1a1a1a" : "white",
              borderRadius: "12px",
              padding: "4px 8px",
              fontSize: "9px",
              fontWeight: "900"
            }}
          >
            {aiLoading ? "AI..." : "AI"}
          </div>
          {query ? (
            <div
              onClick={function () {
                setQuery("");
                setAiResult(null);
              }}
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "#1a1a1a",
                color: "white",
                borderRadius: "12px",
                padding: "2px 8px",
                fontSize: "11px",
                cursor: "pointer"
              }}
            >
              Clear
            </div>
          ) : null}
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {user ? (
            <>
              <div style={{ fontSize: "11px", fontWeight: "800", background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "8px 12px", whiteSpace: "nowrap" }}>Hi {user.name}</div>
              <div onClick={function () { doLogout(); }} style={{ fontSize: "11px", background: "#f5f5f4", borderRadius: "20px", padding: "8px 12px", cursor: "pointer", whiteSpace: "nowrap" }}>Logout</div>
            </>
          ) : (
            <>
              <div onClick={function () { setShowAuth(true); setAuthMode("login"); }} style={{ fontSize: "11px", fontWeight: "800", background: "white", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap" }}>Login</div>
              <div onClick={function () { setShowAuth(true); setAuthMode("signup"); }} style={{ fontSize: "11px", fontWeight: "900", background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap" }}>Create account</div>
            </>
          )}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <div ref={containerRef} style={{ flex: 1, height: "100%", overflowY: "scroll", scrollSnapType: "y mandatory", background: "#000" }}>
          {aiResult ? (
            <div style={{ height: "100%", scrollSnapAlign: "start", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", background: "#000" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "420px", height: "100%", maxHeight: "820px", margin: "0 auto", background: "#000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "48%", position: "relative" }}>
                  <AiInfoVideo script={aiResult.videoScript} query={query} stepIdx={aiStep} />
                  <div style={{ position: "absolute", top: "50px", left: "10px", background: "#fde68a", color: "#1a1a1a", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "900" }}>{aiResult.skill} - {aiResult.years} exp</div>
                </div>
                <div style={{ flex: 1, background: "#FFFBEB", padding: "14px", overflowY: "auto" }}>
                  <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
                    <div style={{ background: "#1a1a1a", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "900" }}>AI Answer - Like Meta AI Google AI</div>
                    <div style={{ background: "#fde68a", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "800" }}>Exact solution - Step by step</div>
                  </div>
                  <div style={{ fontWeight: "900", fontSize: "16px", lineHeight: "1.2" }}>{aiResult.title}</div>
                  <div style={{ fontSize: "12px", marginTop: "6px", opacity: 0.8, lineHeight: "1.4" }}>{aiResult.summary}</div>
                  <div style={{ marginTop: "12px", background: "white", border: "1px solid #f5e6c8", borderRadius: "12px", padding: "12px" }}>
                    <div style={{ fontWeight: "900", fontSize: "11px", marginBottom: "6px" }}>Step by step - Exact solution - Like you asked:</div>
                    {aiResult.steps.map(function (s, i) {
                      return (
                        <div key={i} style={{ fontSize: "11px", marginTop: "6px", lineHeight: "1.4", display: "flex", gap: "6px" }}>
                          <div style={{ background: i === (aiStep % aiResult.steps.length) ? "#fde68a" : "#1a1a1a", color: i === (aiStep % aiResult.steps.length) ? "#1a1a1a" : "white", borderRadius: "50%", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "900", flexShrink: 0, transition: "all 0.3s" }}>{i + 1}</div>
                          <div style={{ fontWeight: i === (aiStep % aiResult.steps.length) ? "900" : "400" }}>{s}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ marginTop: "10px", background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "12px" }}>
                    <div style={{ fontWeight: "900", fontSize: "11px", color: "#fde68a" }}>Exact parts / ingredients with exact info - Like SBC 350:</div>
                    <div style={{ marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
                      {aiResult.parts.map(function (p, i) {
                        return (
                          <div key={i} style={{ fontSize: "11px", display: "flex", gap: "6px", background: i === (aiStep % aiResult.parts.length) ? "rgba(253,230,138,0.2)" : "transparent", padding: "2px 4px", borderRadius: "6px" }}>
                            <div>•</div><div>{p}</div>
                          </div>
                        );
                      })}
                    </div>
                    {aiResult.tips ? (
                      <div style={{ marginTop: "10px", borderTop: "1px solid #333", paddingTop: "8px" }}>
                        <div style={{ fontWeight: "900", fontSize: "10px", color: "#fde68a" }}>Old expert tips - 50 years exp - Like you asked:</div>
                        {aiResult.tips.map(function (t, i) {
                          return <div key={i} style={{ fontSize: "10px", marginTop: "4px", opacity: 0.8 }}>• {t}</div>;
                        })}
                      </div>
                    ) : null}
                  </div>
                  <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                    <div onClick={function () { setQuery(""); setAiResult(null); }} style={{ flex: 1, background: "white", border: "1px solid #f5e6c8", borderRadius: "10px", padding: "10px", textAlign: "center", fontWeight: "800", fontSize: "11px", cursor: "pointer" }}>Clear search</div>
                    <div onClick={function () { setShowVault(true); }} style={{ flex: 1, background: "#1a1a1a", color: "white", borderRadius: "10px", padding: "10px", textAlign: "center", fontWeight: "800", fontSize: "11px", cursor: "pointer" }}>Save to Vault</div>
                  </div>
                  <div style={{ marginTop: "8px", fontSize: "9px", opacity: 0.5, textAlign: "center" }}>AI generated - Like Meta AI Google AI gives solution to anything people search for - Small AI generated info video assembling {query} with exact part info and more you suggested - Once famous search bar shows all real or related content that people post according to question searched - Daily life bases any issue - Old=Gold - Fully functional - Real website</div>
                </div>
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
                      <div style={{ display: "flex", gap: "6px" }}>
                        <div style={{ background: "#fde68a", color: "#1a1a1a", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "900" }}>{item.skill}</div>
                        <div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "800" }}>{item.years} exp</div>
                      </div>
                      <div style={{ background: "rgba(0,0,0,0.6)", color: "white", borderRadius: "20px", padding: "5px 10px", fontSize: "9px", fontWeight: "700", display: "inline-block" }}>{item.category} - {item.level} - Related to {query || "search"}</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: "56px", padding: "14px", color: "white" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fde68a", color: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "12px", border: "2px solid white" }}>{item.person[0]}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: "900", fontSize: "13px", display: "flex", gap: "6px", alignItems: "center" }}>{item.person} - {item.age} - {item.role}<div style={{ fontSize: "8px", background: "#15803d", padding: "2px 6px", borderRadius: "10px" }}>{item.followers} followers</div></div>
                        <div style={{ fontSize: "10px", opacity: 0.8 }}>{item.city} - {item.tag} - {item.years} knowledge</div>
                      </div>
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
              <div><div style={{ fontWeight: "900", fontSize: "18px" }}>{aiLoading ? "AI searching for " + query + "..." : "No hacks found for " + query}</div><div style={{ fontSize: "12px", opacity: 0.6, marginTop: "8px" }}>{aiLoading ? "AI like Meta AI Google AI generating exact solution with step by step and AI video assembling with exact part info" : "Try clogged toilet, biryani, sbc 350, charger, pickle"}</div><div onClick={function () { setQuery(""); }} style={{ marginTop: "14px", background: "white", color: "black", borderRadius: "20px", padding: "10px 20px", display: "inline-block", fontWeight: "800", cursor: "pointer", fontSize: "12px" }}>Clear search</div></div>
            </div>
          ) : null}
        </div>

        <div style={{ width: "340px", background: "#FFFBEB", borderLeft: "1px solid #f5e6c8", display: "flex", flexDirection: "column", padding: "12px", gap: "10px", overflowY: "auto" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>{cats.map(function (c) { return <div key={c} onClick={function () { setFilter(c); }} style={{ background: filter === c ? "#1a1a1a" : "white", color: filter === c ? "white" : "#1a1a1a", border: "1px solid #f5e6c8", borderRadius: "20px", padding: "6px 12px", fontSize: "10px", fontWeight: "800", cursor: "pointer" }}>{c}</div>; })}</div>
          <div style={{ fontSize: "11px", background: aiResult ? "#1a1a1a" : "white", color: aiResult ? "white" : "#1a1a1a", border: "1px solid #f5e6c8", borderRadius: "10px", padding: "10px" }}>
            <div style={{ fontWeight: "900" }}>{aiLoading ? "AI searching: " + query : aiResult ? "AI Answer + " + filtered.length + " related hacks" : "Search results: " + filtered.length + " hacks"}</div>
            <div style={{ opacity: 0.6, fontSize: "10px", marginTop: "2px" }}>{query ? (aiResult ? "AI like Meta AI Google AI - Exact solution for " + query + " + " + filtered.length + " real related hacks that people post according to question searched" : "Searching for " + query) : "All hacks - Old=Gold - AI search ready - Ask anything daily life bases"}</div>
          </div>
          {aiResult ? (
            <div style={{ background: "white", border: "2px solid #1a1a1a", borderRadius: "14px", padding: "12px" }}>
              <div style={{ fontWeight: "900", fontSize: "12px" }}>AI Video - Exact parts info - Animated</div>
              <div style={{ fontSize: "10px", marginTop: "6px", lineHeight: "1.5" }}>{aiResult.videoScript}</div>
              <div style={{ marginTop: "8px", background: "#fde68a", borderRadius: "8px", padding: "8px", fontSize: "10px", fontWeight: "700" }}>Once famous search bar shows all real or related content that people post according to question searched - Like this AI answer becomes real hack when old experts post - AI answer is FIRST, real hacks below - Daily life bases - Any issue - Perfect AI search like you - Leads to answers and videos</div>
            </div>
          ) : null}
          <div style={{ background: "white", border: "1px solid #f5e6c8", borderRadius: "14px", padding: "12px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>How it works - Old=Gold - AI Search - Perfect</div><div style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.6" }}><div>1. Ask AI anything daily life bases</div><div>2. AI gives exact solution like Meta AI Google AI</div><div>3. AI video assembling exact parts info</div><div>4. Step by step animated</div><div>5. Real hacks related shown below AI</div><div>6. Follow Save Try - Old=Gold</div></div></div>
          <div style={{ background: "#1a1a1a", color: "white", borderRadius: "14px", padding: "12px" }}><div style={{ fontWeight: "900", fontSize: "12px" }}>Live experts now - Related content</div><div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>{filtered.slice(0, 3).map(function (h) { return <div key={h.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}><span>{h.person} - {h.skill}</span><span style={{ opacity: 0.6 }}>{h.followers}</span></div>; })}</div><div onClick={function () { if (!user) { setShowAuth(true); setAuthMode("signup"); } else { setShowVault(true); } }} style={{ marginTop: "12px", background: "white", color: "black", borderRadius: "10px", padding: "10px", textAlign: "center", fontWeight: "900", fontSize: "12px", cursor: "pointer" }}>{user ? "Vault - 41 experts" : "Create account - Follow 41 experts"}</div></div>
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
            <div style={{ marginTop: "12px", fontSize: "12px", lineHeight: "1.5" }}>Follow 41 old experts. Learn life hacks that took 50 years to learn. Save. Try. Not on TikTok. In Family Vault forever. Search any hack - AI gives exact solution like Meta AI Google AI - Step by step with AI video assembling exact part info - Any daily life issue.</div>
            <div onClick={function () { setShowVault(false); }} style={{ marginTop: "16px", background: "#1a1a1a", color: "white", borderRadius: "12px", padding: "12px", textAlign: "center", fontWeight: "900", cursor: "pointer" }}>Join - 21 per month - 41 experts</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
