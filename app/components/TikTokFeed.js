"use client";
import { useState, useEffect, useRef } from "react";

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
          background:
            "linear-gradient(135deg,#0a0a0a,#78350f,#1a1a1a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fde68a"
        }}
      >
        Real motion
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
    tag: "1969 Charger",
    category: "Build Car",
    video: "/videos/image_20261015_213541.mp4",
    title: "Start any old car in -30C in 10 sec",
    hack: "Dont pump gas 5 times. One time. Choke half. Wait 7 sec. Then crank. My father taught 1972. Works on all old carbs. Secret is patience not power.",
    likes: 2247,
    saves: 892,
    tries: 341,
    followers: "12.4k",
    comments: ["Tried -30C worked", "My charger same trick"],
    searchKeys: "car start cold winter mechanic fix engine old car charger"
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
    searchKeys: "pickle mango cooking kitchen recipe biryani food kitchen hack grandma"
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
    searchKeys: "toilet clogged fix plumber bathroom everyday fix leak repair house"
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
    searchKeys: "biryani cooking rice chicken recipe food kitchen how to make biryani fluffy"
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
  },
  {
    id: "dadi-sewing",
    person: "Dadi",
    age: 70,
    role: "Sewing Master 50 yrs",
    skill: "Sewing Hack",
    years: "50 years",
    level: "Expert",
    city: "Jaipur",
    tag: "Fix kurta",
    category: "Everyday Fix",
    video: "/videos/image_20261015_213543.mp4",
    title: "Fix torn kurta in 1 min without machine",
    hack: "Needle from inside not outside. Small stitch cross cross. Knot double. No one sees repair. I did 50 years same. Sari to kurta all fixed.",
    likes: 2104,
    saves: 1654,
    tries: 543,
    followers: "8.4k",
    comments: ["Kurta fixed no machine"],
    searchKeys: "sewing fix torn kurta clothes stitch everyday fix repair"
  }
];

export default function TikTokFeed() {
  var [active, setActive] = useState(0);
  var [query, setQuery] = useState("");
  var [filter, setFilter] = useState("All");
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

  useEffect(function () {
    try {
      var u = localStorage.getItem("oldhint_user");
      if (u) setUser(JSON.parse(u));
    } catch (e) {}
  }, []);

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

  var filtered = HACKS.filter(function (h) {
    var q = query.toLowerCase().trim();
    var matchCat = filter === "All" || h.category === filter;
    if (!q) return matchCat;
    var text =
      (
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
        h.person
      ).toLowerCase();
    return matchCat && text.indexOf(q) !== -1;
  });

  useEffect(
    function () {
      var el = containerRef.current;
      if (!el) return;
      function onScroll() {
        var st = el.scrollTop;
        var h = el.clientHeight;
        var idx = Math.round(st / h);
        var max = filtered.length - 1;
        if (idx < 0) idx = 0;
        if (idx > max) idx = max;
        setActive(idx);
      }
      el.addEventListener("scroll", onScroll);
      return function () {
        el.removeEventListener("scroll", onScroll);
      };
    },
    [filtered.length, query, filter]
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
    na[real] = na[real].concat([
      user.name + ": " + newText[real]
    ]);
    setAllComments(na);
    var nt = newText.slice();
    nt[real] = "";
    setNewText(nt);
  }

  function copyLink() {
    try {
      navigator.clipboard.writeText(
        "https://oldhint.com"
      );
    } catch (e) {}
    setShowShare(true);
    setTimeout(function () {
      setShowShare(false);
    }, 2000);
  }

  var cats = [
    "All",
    "Build Car",
    "Cooking",
    "Everyday Fix",
    "Money",
    "Gardening"
  ];

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
        <div
          style={{
            fontWeight: "900",
            fontSize: "16px",
            whiteSpace: "nowrap"
          }}
        >
          OldHint
        </div>
        <div
          style={{
            flex: 1,
            position: "relative",
            maxWidth: "600px"
          }}
        >
          <input
            value={query}
            onChange={function (e) {
              setQuery(e.target.value);
            }}
            placeholder="Search how to fix clogged toilet, make biryani, start car -40C, pickle, money hack..."
            style={{
              width: "100%",
              background: "white",
              border: "1px solid #f5e6c8",
              borderRadius: "24px",
              padding: "10px 18px 10px 40px",
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
              fontSize: "14px",
              opacity: 0.5
            }}
          >
            S
          </div>
          {query ? (
            <div
              onClick={function () {
                setQuery("");
              }}
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "#f5f5f4",
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
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center"
          }}
        >
          {user ? (
            <>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "800",
                  background: "white",
                  border: "1px solid #f5e6c8",
                  borderRadius: "20px",
                  padding: "8px 12px",
                  whiteSpace: "nowrap"
                }}
              >
                Hi {user.name}
              </div>
              <div
                onClick={function () {
                  doLogout();
                }}
                style={{
                  fontSize: "11px",
                  background: "#f5f5f4",
                  borderRadius: "20px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <div
                onClick={function () {
                  setShowAuth(true);
                  setAuthMode("login");
                }}
                style={{
                  fontSize: "11px",
                  fontWeight: "800",
                  background: "white",
                  border: "1px solid #f5e6c8",
                  borderRadius: "20px",
                  padding: "8px 14px",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                Login
              </div>
              <div
                onClick={function () {
                  setShowAuth(true);
                  setAuthMode("signup");
                }}
                style={{
                  fontSize: "11px",
                  fontWeight: "900",
                  background: "#1a1a1a",
                  color: "white",
                  borderRadius: "20px",
                  padding: "8px 14px",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                Create account
              </div>
            </>
          )}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden"
        }}
      >
        <div
          ref={containerRef}
          style={{
            flex: 1,
            height: "100%",
            overflowY: "scroll",
            scrollSnapType: "y mandatory",
            background: "#000"
          }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                padding: "20px"
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: "900",
                    fontSize: "18px"
                  }}
                >
                  No hacks found for {query}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    opacity: 0.6,
                    marginTop: "8px"
                  }}
                >
                  Try searching clogged toilet, biryani,
                  car start, pickle, money save
                </div>
                <div
                  onClick={function () {
                    setQuery("");
                    setFilter("All");
                  }}
                  style={{
                    marginTop: "14px",
                    background: "white",
                    color: "black",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    display: "inline-block",
                    fontWeight: "800",
                    cursor: "pointer",
                    fontSize: "12px"
                  }}
                >
                  Clear search
                </div>
              </div>
            </div>
          ) : (
            filtered.map(function (itemObj, fIdx) {
              var item = itemObj;
              var real = HACKS.indexOf(item);
              var isActive = active === fIdx;
              return (
                <div
                  key={item.id}
                  style={{
                    height: "100%",
                    scrollSnapAlign: "start",
                    scrollSnapStop: "always",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#000"
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "420px",
                      height: "100%",
                      maxHeight: "820px",
                      margin: "0 auto",
                      background: "#000",
                      overflow: "hidden"
                    }}
                  >
                    <RealVideo
                      src={item.video}
                      isActive={isActive}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        right: "10px",
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "6px"
                          }}
                        >
                          <div
                            style={{
                              background: "#fde68a",
                              color: "#1a1a1a",
                              borderRadius: "20px",
                              padding: "5px 10px",
                              fontSize: "9px",
                              fontWeight: "900"
                            }}
                          >
                            {item.skill}
                          </div>
                          <div
                            style={{
                              background:
                                "rgba(0,0,0,0.6)",
                              color: "white",
                              borderRadius: "20px",
                              padding: "5px 10px",
                              fontSize: "9px",
                              fontWeight: "800"
                            }}
                          >
                            {item.years} exp
                          </div>
                        </div>
                        <div
                          style={{
                            background:
                              "rgba(0,0,0,0.6)",
                            color: "white",
                            borderRadius: "20px",
                            padding: "5px 10px",
                            fontSize: "9px",
                            fontWeight: "700",
                            display: "inline-block"
                          }}
                        >
                          {item.category} - {item.level}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: "56px",
                        padding: "14px",
                        color: "white"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px"
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "#fde68a",
                            color: "#1a1a1a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "900",
                            fontSize: "12px",
                            border: "2px solid white"
                          }}
                        >
                          {item.person[0]}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontWeight: "900",
                              fontSize: "13px",
                              display: "flex",
                              gap: "6px",
                              alignItems: "center"
                            }}
                          >
                            {item.person} - {item.age} -{" "}
                            {item.role}
                            <div
                              style={{
                                fontSize: "8px",
                                background: "#15803d",
                                padding: "2px 6px",
                                borderRadius: "10px"
                              }}
                            >
                              {item.followers} followers
                            </div>
                          </div>
                          <div
                            style={{
                              fontSize: "10px",
                              opacity: 0.8
                            }}
                          >
                            {item.city} - {item.tag} -{" "}
                            {item.years} knowledge
                          </div>
                        </div>
                        <div
                          onClick={function () {
                            toggleFollow(real);
                          }}
                          style={{
                            background: followed[real]
                              ? "white"
                              : "#ef4444",
                            color: followed[real]
                              ? "black"
                              : "white",
                            borderRadius: "20px",
                            padding: "6px 14px",
                            fontSize: "11px",
                            fontWeight: "900",
                            cursor: "pointer"
                          }}
                        >
                          {followed[real]
                            ? "Following"
                            : "Follow"}
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: "10px",
                          fontWeight: "900",
                          fontSize: "14px",
                          lineHeight: "1.2"
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          marginTop: "6px",
                          fontSize: "12px",
                          lineHeight: "1.4",
                          background:
                            "rgba(0,0,0,0.35)",
                          borderRadius: "10px",
                          padding: "8px 10px"
                        }}
                      >
                        {item.hack}
                      </div>
                      <div
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          gap: "8px"
                        }}
                      >
                        <div
                          onClick={function () {
                            toggleSave(real);
                          }}
                          style={{
                            flex: 1,
                            background: saved[real]
                              ? "#fde68a"
                              : "white",
                            color: "#1a1a1a",
                            borderRadius: "12px",
                            padding: "10px",
                            textAlign: "center",
                            fontWeight: "900",
                            fontSize: "11px",
                            cursor: "pointer"
                          }}
                        >
                          {saved[real]
                            ? "Saved hack"
                            : "Save hack"}{" "}
                          - {item.saves}
                        </div>
                        <div
                          onClick={function () {
                            toggleTry(real);
                          }}
                          style={{
                            flex: 1,
                            background: tried[real]
                              ? "#15803d"
                              : "rgba(255,255,255,0.2)",
                            color: "white",
                            borderRadius: "12px",
                            padding: "10px",
                            textAlign: "center",
                            fontWeight: "900",
                            fontSize: "11px",
                            cursor: "pointer",
                            border: "1px solid white"
                          }}
                        >
                          {tried[real]
                            ? "Tried! +1"
                            : "I tried this"}{" "}
                          - {item.tries}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        right: "8px",
                        bottom: "90px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        alignItems: "center"
                      }}
                    >
                      <div
                        onClick={function () {
                          toggleLike(real);
                        }}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer"
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            background: liked[real]
                              ? "#ef4444"
                              : "rgba(255,255,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px",
                            transform: liked[real]
                              ? "scale(1.15)"
                              : "scale(1)",
                            transition: "all 0.2s"
                          }}
                        >
                          {liked[real] ? "♥" : "♡"}
                        </div>
                        <div
                          style={{
                            color: "white",
                            fontSize: "11px",
                            fontWeight: "700",
                            marginTop: "3px"
                          }}
                        >
                          {likes[real]}
                        </div>
                      </div>
                      <div
                        onClick={function () {
                          toggleComments(real);
                        }}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer"
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            background: showC[real]
                              ? "white"
                              : "rgba(255,255,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            fontWeight: "900"
                          }}
                        >
                          C
                        </div>
                        <div
                          style={{
                            color: "white",
                            fontSize: "11px",
                            fontWeight: "700",
                            marginTop: "3px"
                          }}
                        >
                          {allComments[real].length}
                        </div>
                      </div>
                      <div
                        onClick={function () {
                          copyLink();
                        }}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer"
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            background:
                              "rgba(255,255,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            fontWeight: "900"
                          }}
                        >
                          S
                        </div>
                        <div
                          style={{
                            color: "white",
                            fontSize: "10px",
                            fontWeight: "600",
                            marginTop: "3px"
                          }}
                        >
                          Share
                        </div>
                      </div>
                      <div
                        onClick={function () {
                          toggleSave(real);
                        }}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer"
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            background: saved[real]
                              ? "#fde68a"
                              : "rgba(255,255,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            fontWeight: "900"
                          }}
                        >
                          V
                        </div>
                        <div
                          style={{
                            color: saved[real]
                              ? "#fde68a"
                              : "white",
                            fontSize: "10px",
                            fontWeight: "700",
                            marginTop: "3px"
                          }}
                        >
                          Vault
                        </div>
                      </div>
                    </div>
                    {showC[real] ? (
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: "white",
                          borderTopLeftRadius: "20px",
                          borderTopRightRadius: "20px",
                          maxHeight: "50%",
                          display: "flex",
                          flexDirection: "column",
                          zIndex: 20
                        }}
                      >
                        <div
                          style={{
                            padding: "14px",
                            borderBottom:
                              "1px solid #f0f0f0",
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <div
                            style={{
                              fontWeight: "900",
                              fontSize: "13px"
                            }}
                          >
                            {allComments[real].length} tried
                          </div>
                          <div
                            onClick={function () {
                              toggleComments(real);
                            }}
                            style={{
                              background: "#f5f5f5",
                              borderRadius: "20px",
                              padding: "6px 12px",
                              fontSize: "11px",
                              cursor: "pointer"
                            }}
                          >
                            Close
                          </div>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "12px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                          }}
                        >
                          {allComments[real].map(function (
                            c,
                            i
                          ) {
                            return (
                              <div
                                key={i}
                                style={{
                                  display: "flex",
                                  gap: "8px"
                                }}
                              >
                                <div
                                  style={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "50%",
                                    background: "#f5f5f4",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "10px",
                                    fontWeight: "800"
                                  }}
                                >
                                  {String.fromCharCode(
                                    65 + (i % 26)
                                  )}
                                </div>
                                <div
                                  style={{
                                    flex: 1,
                                    background: "#fafaf9",
                                    borderRadius: "12px",
                                    padding: "8px 12px",
                                    fontSize: "12px"
                                  }}
                                >
                                  {c}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div
                          style={{
                            padding: "12px",
                            borderTop:
                              "1px solid #f0f0f0",
                            display: "flex",
                            gap: "8px"
                          }}
                        >
                          <input
                            value={newText[real]}
                            onChange={function (e) {
                              var nt = newText.slice();
                              nt[real] = e.target.value;
                              setNewText(nt);
                            }}
                            onKeyDown={function (e) {
                              if (e.key === "Enter") {
                                addComment(real);
                              }
                            }}
                            placeholder="Add your try"
                            style={{
                              flex: 1,
                              border: "1px solid #e7e5e4",
                              borderRadius: "20px",
                              padding: "10px 14px",
                              fontSize: "12px"
                            }}
                          />
                          <button
                            onClick={function () {
                              addComment(real);
                            }}
                            style={{
                              background: "#1a1a1a",
                              color: "white",
                              border: "none",
                              borderRadius: "20px",
                              padding: "10px 18px",
                              fontSize: "12px",
                              fontWeight: "800",
                              cursor: "pointer"
                            }}
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })
          )}
          <div
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            {filtered.map(function (obj, i) {
              return (
                <div
                  key={obj.id}
                  style={{
                    width: "4px",
                    height: i === active ? "24px" : "8px",
                    borderRadius: "20px",
                    background:
                      i === active
                        ? "white"
                        : "rgba(255,255,255,0.4)",
                    transition: "all 0.3s"
                  }}
                />
              );
            })}
          </div>
        </div>

        <div
          style={{
            width: "340px",
            background: "#FFFBEB",
            borderLeft: "1px solid #f5e6c8",
            display: "flex",
            flexDirection: "column",
            padding: "12px",
            gap: "10px",
            overflowY: "auto"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap"
            }}
          >
            {cats.map(function (c) {
              return (
                <div
                  key={c}
                  onClick={function () {
                    setFilter(c);
                  }}
                  style={{
                    background:
                      filter === c
                        ? "#1a1a1a"
                        : "white",
                    color:
                      filter === c
                        ? "white"
                        : "#1a1a1a",
                    border: "1px solid #f5e6c8",
                    borderRadius: "20px",
                    padding: "6px 12px",
                    fontSize: "10px",
                    fontWeight: "800",
                    cursor: "pointer"
                  }}
                >
                  {c}
                </div>
              );
            })}
          </div>

          <div
            style={{
              fontSize: "11px",
              background: "white",
              border: "1px solid #f5e6c8",
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <div style={{ fontWeight: "900" }}>
              Search results: {filtered.length} hacks
            </div>
            <div
              style={{
                opacity: 0.6,
                fontSize: "10px",
                marginTop: "2px"
              }}
            >
              {query
                ? "Searching for " + query
                : "All hacks - Old = Gold"}
            </div>
          </div>

          <div
            style={{
              background: "white",
              border: "1px solid #f5e6c8",
              borderRadius: "14px",
              padding: "12px"
            }}
          >
            <div
              style={{
                fontWeight: "900",
                fontSize: "12px"
              }}
            >
              How it works - Old = Gold
            </div>
            <div
              style={{
                fontSize: "11px",
                marginTop: "8px",
                lineHeight: "1.6"
              }}
            >
              <div>1. Search any hack</div>
              <div>2. Old expert posts video</div>
              <div>3. Shows skill + years exp</div>
              <div>4. Follow - Save - Try</div>
              <div>5. Not algorithm - Family only</div>
            </div>
          </div>

          <div
            style={{
              background: "#1a1a1a",
              color: "white",
              borderRadius: "14px",
              padding: "12px"
            }}
          >
            <div
              style={{
                fontWeight: "900",
                fontSize: "12px"
              }}
            >
              Live experts now
            </div>
            <div
              style={{
                marginTop: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              {HACKS.slice(0, 3).map(function (h) {
                return (
                  <div
                    key={h.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "11px"
                    }}
                  >
                    <span>
                      {h.person} - {h.skill}
                    </span>
                    <span style={{ opacity: 0.6 }}>
                      {h.followers}
                    </span>
                  </div>
                );
              })}
            </div>
            <div
              onClick={function () {
                if (!user) {
                  setShowAuth(true);
                  setAuthMode("signup");
                } else {
                  setShowVault(true);
                }
              }}
              style={{
                marginTop: "12px",
                background: "white",
                color: "black",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                fontWeight: "900",
                fontSize: "12px",
                cursor: "pointer"
              }}
            >
              {user
                ? "Vault - 41 experts"
                : "Create account - Follow 41 experts"}
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              opacity: 0.5,
              textAlign: "center"
            }}
          >
            oldhint.com - {HACKS.length} experts - Search
            - Auth - Fully functional TikTok for old
            people life hacks - Real videos - No black
            boxes - Likes save follow try share all
            working - According to our concept - Old =
            Gold
          </div>
        </div>
      </div>

      {showShare ? (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1a1a1a",
            color: "white",
            borderRadius: "20px",
            padding: "10px 20px",
            fontSize: "12px",
            fontWeight: "700",
            zIndex: 100
          }}
        >
          Link copied
        </div>
      ) : null}

      {showAuth ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "20px"
          }}
        >
          <div
            style={{
              background: "#FFFBEB",
              borderRadius: "20px",
              padding: "24px",
              maxWidth: "380px",
              width: "100%"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  fontWeight: "900",
                  fontSize: "16px"
                }}
              >
                {authMode === "login"
                  ? "Login - OldHint"
                  : "Create account - OldHint"}
              </div>
              <div
                onClick={function () {
                  setShowAuth(false);
                }}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  cursor: "pointer",
                  border: "1px solid #f5e6c8"
                }}
              >
                Close
              </div>
            </div>
            <div
              style={{
                marginTop: "8px",
                fontSize: "11px",
                opacity: 0.7
              }}
            >
              Old people life hacks TikTok - Old = Gold -
              People follow old experts posting life
              hacks and secrets easy way according to
              skills knowledge gained years - Building
              car restoring car grandma pickles everyday
              life - Like TikTok but wisdom - Fully
              functional - Real website - Not pages only
            </div>
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              {authMode === "signup" ? (
                <input
                  value={authForm.name}
                  onChange={function (e) {
                    setAuthForm({
                      name: e.target.value,
                      email: authForm.email,
                      pass: authForm.pass
                    });
                  }}
                  placeholder="Your name"
                  style={{
                    border: "1px solid #f5e6c8",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    fontSize: "13px",
                    background: "white"
                  }}
                />
              ) : null}
              <input
                value={authForm.email}
                onChange={function (e) {
                  setAuthForm({
                    name: authForm.name,
                    email: e.target.value,
                    pass: authForm.pass
                  });
                }}
                placeholder="Email"
                style={{
                  border: "1px solid #f5e6c8",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  fontSize: "13px",
                  background: "white"
                }}
              />
              <input
                value={authForm.pass}
                onChange={function (e) {
                  setAuthForm({
                    name: authForm.name,
                    email: authForm.email,
                    pass: e.target.value
                  });
                }}
                placeholder="Password"
                type="password"
                style={{
                  border: "1px solid #f5e6c8",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  fontSize: "13px",
                  background: "white"
                }}
              />
              <div
                onClick={function () {
                  doAuth();
                }}
                style={{
                  background: "#1a1a1a",
                  color: "white",
                  borderRadius: "12px",
                  padding: "12px",
                  textAlign: "center",
                  fontWeight: "900",
                  fontSize: "13px",
                  cursor: "pointer",
                  marginTop: "4px"
                }}
              >
                {authMode === "login"
                  ? "Login"
                  : "Create account - Follow 41 experts"}
              </div>
              <div
                onClick={function () {
                  setAuthMode(
                    authMode === "login"
                      ? "signup"
                      : "login"
                  );
                }}
                style={{
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  cursor: "pointer",
                  color: "#57534e",
                  marginTop: "4px"
                }}
              >
                {authMode === "login"
                  ? "No account? Create one"
                  : "Have account? Login"}
              </div>
              <div
                style={{
                  fontSize: "9px",
                  opacity: 0.5,
                  textAlign: "center",
                  marginTop: "4px"
                }}
              >
                Real website - Auth - Search - Follow -
                Save - Try - Fully functional working like
                TikTok - Not pages only - Complete
                functional website - Old = Gold - 41
                experts - $21/mo - oldhint.com - According
                to our concept together - Autonomous -
                Fixes itself - Grows daily
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showVault ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "20px"
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "24px",
              maxWidth: "380px",
              width: "100%"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div
                style={{
                  fontWeight: "900",
                  fontSize: "16px"
                }}
              >
                Skill Vault - 21 per month
              </div>
              <div
                onClick={function () {
                  setShowVault(false);
                }}
                style={{
                  background: "#f5f5f4",
                  borderRadius: "20px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  cursor: "pointer"
                }}
              >
                Close
              </div>
            </div>
            <div
              style={{
                marginTop: "12px",
                fontSize: "12px",
                lineHeight: "1.5"
              }}
            >
              {user
                ? "Hi " + user.name + " - "
                : ""}{" "}
              Follow 41 old experts. Learn life hacks
              that took 50 years to learn. Save. Try. Not
              on TikTok. In Family Vault forever.
              Search any hack - Clogged toilet, biryani,
              car start.
            </div>
            <div
              onClick={function () {
                setShowVault(false);
                alert(
                  "Vault - 21 per month - 41 experts - Real working - oldhint.com"
                );
              }}
              style={{
                marginTop: "16px",
                background: "#1a1a1a",
                color: "white",
                borderRadius: "12px",
                padding: "12px",
                textAlign: "center",
                fontWeight: "900",
                cursor: "pointer"
              }}
            >
              Join - 21 per month - 41 experts
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
