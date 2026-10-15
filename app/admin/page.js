"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Admin(){
  const [cmd,setCmd]=useState("/build-family-social");
  const [logs,setLogs]=useState([
    "[Chief] OldHint — the lost knowledge — 8 AI Employees Online",
    "[Learner] Generic Interactive AI Agent — Ready to copy FB/Insta",
    "Type command: /help to see all commands, /self-learn to auto-improve site"
  ]);
  const [stats,setStats]=useState({guides:51, seo:"51/51", revenue:"$7"});
  const [running,setRunning]=useState(false);

  useEffect(()=>{
    fetch("/api/stats").then(r=>r.json()).then(d=>setStats(d)).catch(()=>{});
  },[]);

  const commands = {
    "/help": "All commands: /build-family-social, /create-family, /post-trick, /build-feed, /build-stories, /build-dm, /build-logo, /self-learn, /deploy-all, /help",
    "/build-family-social": "Builder Agent: Building /family, /family/[name], family tree visual Root→Trunk→Branch→Leaf, Follow/Friend, Stories, Videos, Posts, Feed, DM, Comments — FB/Insta clone for families",
    "/create-family bazard": "Chief: Creating family account The Bazard Family Est. 1980 Calgary T3J + members as branches (Elder/Keeper/Explorer)",
    "/build-logo": "Design Agent: Logo OldHint 'the lost knowledge' — timeless serif + lost book icon — appealing layout",
    "/build-feed": "Builder: Instagram-like feed but family wisdom only — Follow Family, Save to Vault",
    "/build-stories": "Video Agent: Insta Stories bar — 24h family circles — tap to view grandma cheese trick",
    "/build-dm": "Support Agent: Text Family DM + Comments + Nested likes — like Messenger",
    "/self-learn": "Learner Agent: Generic interactive AI that copies FB/Insta social work to improve site by itself — Self-learning loop every 6 hours",
    "/deploy-all": "All 9 Agents: Deploy homepage + vault + family + feed + stories + DM + logo + self-learn — Billion Dollar Roadmap",
    "/post-trick": "Writer+Scout: Post trick like 'fix 350 engine at home 1972' as Bazard Family Root Dada",
  };

  const run=async()=>{
    setRunning(true);
    setLogs(prev=>[...prev, `[You] ${cmd}`, `[Chief] Dispatching agents for: ${cmd}`]);

    // Decide which API to call
    let apiPath = "/api/agent/run-all";
    let body = { topic: cmd, decade: "family-social" };

    if (cmd.startsWith("/self-learn")) {
      apiPath = "/api/agent/self-learn";
      setLogs(prev=>[...prev, "[Learner] Generic Interactive AI Agent — Starting", "[Learner] Learning FB/Insta patterns: Stories, Re
