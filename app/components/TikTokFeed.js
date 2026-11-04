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
          color: "#fde68a",
          textAlign: "center"
        }}
      >
        Real motion - No black box
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
    comments: [
      "Tried -30C worked! Dada thanks",
      "My charger same trick works",
      "Old knowledge gold"
    ]
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
    hack: "Oil must be smoking hot then cool fully. Mustard oil only. Never use spoon wet. Keep in sun 3 days before close. My mother 1940 trick. Jar same 60 years no fungus.",
    likes: 3102,
    saves: 2104,
    tries: 892,
    followers: "18.9k",
    comments: [
      "Nani 60 year jar wow",
      "Tried no fungus works",
      "Secret mustard oil"
    ]
  },
  {
    id: "papa-house",
    person: "Papa",
    age: 59,
    role: "House Fix 40 yrs",
    skill: "Repair Hack",
    years: "40 years",
    level: "Expert",
    city: "Calgary",
    tag: "Leak Fix",
    category: "Everyday Fix",
    video: "/videos/image_20261015_213541.mp4",
    title: "Fix tap leak without plumber - 2 min",
    hack: "Turn off water. Open tap. Small rubber inside cut from old tube. Put new. Tight. Done. Plumber charges 200. I learned from my dad. 40 years no plumber called.",
    likes: 4521,
    saves: 3210,
    tries: 1543,
    followers: "9.2k",
    comments: [
      "Saved 200 dollars",
      "Papa hack real gold",
      "No plumber needed"
    ]
  },
  {
    id: "biji-money",
    person: "Biji",
    age: 75,
    role: "Money Saver 55 yrs",
    skill: "Money Hack",
    years: "55 years",
    level: "Wise",
    city: "Delhi",
    tag: "Save Money",
    category: "Money",
    video: "/videos/image_20261015_213543.mp4",
    title: "Save 30% groceries with one list trick",
    hack: "Write list after eating not before. Hungry makes buy extra. Also buy only Tuesday. Tuesday cheapest. I did 55 years same. Family of 10 saved enough to buy house.",
    likes: 5832,
    saves: 4102,
    tries: 2103,
    followers: "22.1k",
    comments: [
      "Tuesday trick real",
      "After eating list wow",
      "Biji wise"
    ]
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
    hack: "Wood ash from chulha. Mix in soil. Not too much. One handful per plant. Ash has potassium. My grandfather taught 1955. Tomatoes big like apple. No chemical.",
    likes: 3921,
    saves: 2891,
    tries: 1204,
    followers: "15.6k",
    comments: [
      "Ash trick tomato big",
      "No chemical best",
      "65 years knowledge"
    ]
  }
];

export default function TikTokFeed() {
  var [active, setActive] = useState(0);
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
  var [showSkill, setShowSkill] = useState(false);
  var [filter, setFilter] = useState("All");
  var containerRef = useRef(null);
  var filtered = HACKS.map(function (h, i) {
    return { h: h, i: i };
  }).filter(function (x) {
    return filter === "All" || x.h.category === filter;
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
    [filtered.length]
  );

  function toggleLike(idx) {
    var real = filtered[idx].i;
    var nl = liked.slice();
    var nLikes = likes.slice();
    nl[real] = !nl[real];
    if (nl[real]) nLikes[real]++;
    else nLikes[real]--;
    setLiked(nl);
    setLikes(nLikes);
    if (nl[real] && navigator.vibrate) navigator.vibrate(50);
  }

  function toggleSave(idx) {
    var real = filtered[idx].i;
    var ns = saved.slice();
    ns[real] = !ns[real];
    setSaved(ns);
    if (ns[real]) setShowVault(true);
  }

  function toggleFollow(idx) {
    var real = filtered[idx].i;
    var nf = followed.slice();
    nf[real] = !nf[real];
    setFollowed(nf);
  }

  function toggleTry(idx) {
    var real = filtered[idx].i;
    var nt = tried.slice();
    nt[real] = !nt[real];
    setTried(nt);
  }

  function toggleComments(idx) {
    var ns = showC.slice();
    var real = filtered[idx].i;
    ns[real] = !ns[real];
    setShowC(ns);
  }

  function addComment(idx) {
    var real = filtered[idx].i;
    if (!newText[real].trim()) return;
    var na = allComments.slice();
    na[real] = na[real].concat([newText[real]]);
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
        display: "flex"
      }}
    >
      <div
        ref={containerRef}
        style={{
          flex: 1,
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          background: "#000"
        }}
      >
        {filtered.map(function (itemObj, fIdx) {
          var item = itemObj.h;
          var real = itemObj.i;
          var isActive = active === fIdx;
          return (
            <div
              key={item.id}
              style={{
                height: "100vh",
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
                  height: "100vh",
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
                    justifyContent: "space-between",
                    alignItems: "flex-start"
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
                          background: "rgba(0,0,0,0.6)",
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
                        background: "rgba(0,0,0,0.6)",
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
                  <div
                    onClick={function () {
                      setShowSkill(true);
                    }}
                    style={{
                      background: "white",
                      color: "black",
                      borderRadius: "20px",
                      padding: "6px 12px",
                      fontSize: "10px",
                      fontWeight: "900",
                      cursor: "pointer"
                    }}
                  >
                    Skill Vault
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
                        toggleFollow(fIdx);
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
                      background: "rgba(0,0,0,0.35)",
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
                        toggleSave(fIdx);
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
                        toggleTry(fIdx);
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
                      toggleLike(fIdx);
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
                      toggleSave(fIdx);
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
                        borderBottom: "1px solid #f0f0f0",
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
                        {allComments[real].length} people tried
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
                      {allComments[real].map(function (c, i) {
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
                        borderTop: "1px solid #f0f0f0",
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
                            addComment(fIdx);
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
                          addComment(fIdx);
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
        })}

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
                key={obj.h.id}
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
          width: "360px",
          background: "#FFFBEB",
          borderLeft: "1px solid #f5e6c8",
          display: "flex",
          flexDirection: "column",
          padding: "14px",
          gap: "12px",
          overflowY: "auto"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div style={{ fontWeight: "900", fontSize: "18px" }}>
            OldHint
          </div>
          <div
            style={{
              fontSize: "10px",
              background: "#1a1a1a",
              color: "white",
              borderRadius: "20px",
              padding: "6px 12px"
            }}
          >
            41 experts live
          </div>
        </div>

        <div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "900",
              lineHeight: "0.95",
              margin: 0
            }}
          >
            TikTok.
            <br />
            <span style={{ color: "#b45309" }}>
              Not dance.
            </span>
            <br />
            <span style={{ color: "#15803d" }}>
              Wisdom.
            </span>
          </h1>
          <p
            style={{
              fontSize: "11px",
              color: "#57534e",
              marginTop: "8px",
              lineHeight: "1.4"
            }}
          >
            Old people are experts. 50 years fixing
            cars. 60 years making pickles. They post
            life hacks. You follow. You learn easy
            way. Not on TikTok. In Skill Vault.
          </p>
        </div>

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
                    filter === c ? "#1a1a1a" : "white",
                  color: filter === c ? "white" : "#1a1a1a",
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
            <div>1. Old expert posts hack video</div>
            <div>2. Shows skill + years exp</div>
            <div>3. You follow - Learn easy way</div>
            <div>4. Save hack - Try hack - Comment</div>
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
            {HACKS.slice(0, 3).map(function (h, i) {
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
                    {h.followers} - {h.years}
                  </span>
                </div>
              );
            })}
          </div>
          <div
            onClick={function () {
              setShowVault(true);
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
            Follow 41 experts - 21 per month
          </div>
        </div>

        <div
          style={{
            fontSize: "9px",
            opacity: 0.5,
            textAlign: "center"
          }}
        >
          oldhint.com - 41 experts - 5 categories -
          Fully functional TikTok for old people life
          hacks - Real videos - No black boxes - Likes
          save follow try share all working
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
              Follow 41 old experts. Learn life hacks
              that took 50 years to learn. Save. Try.
              Not on TikTok. In Family Vault forever.
            </div>
            <div
              onClick={function () {
                setShowVault(false);
                alert(
                  "Join 41 experts - 21 per month - Fully functional - oldhint.com"
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

      {showSkill ? (
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
              maxWidth: "400px",
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto"
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
                Skill Vault
              </div>
              <div
                onClick={function () {
                  setShowSkill(false);
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
                marginTop: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              {HACKS.map(function (h) {
                return (
                  <div
                    key={h.id}
                    style={{
                      background: "white",
                      border: "1px solid #f5e6c8",
                      borderRadius: "12px",
                      padding: "12px"
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "800",
                        fontSize: "12px"
                      }}
                    >
                      {h.skill} - {h.person} - {h.years}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        opacity: 0.6,
                        marginTop: "2px"
                      }}
                    >
                      {h.title}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        marginTop: "6px"
                      }}
                    >
                      {h.followers} followers -{" "}
                      {h.likes} likes - {h.saves} saved
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
