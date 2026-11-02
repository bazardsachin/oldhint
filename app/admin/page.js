"use client";
import { useState } from "react";

export default function AdminPage() {
  const [cmd, setCmd] = useState("Build old people TikTok site");
  const [status, setStatus] = useState("Ready - Fixed Line 24 - No arrow");
  const [logs, setLogs] = useState("");
  const [running, setRunning] = useState(false);

  async function runBg() {
    if (!cmd.trim()) { alert("Enter command"); return; }
    setRunning(true);
    setStatus("Running - Testing coding - Right coding - No arrow");
    setLogs("Queued - Testing - Right coding - Builder - Fixed Line 24\n");
    try {
      const res = await fetch("/api/coding-testing-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: cmd, filePath: "app/page.js", background: true })
      });
      const data = await res.json();
      setStatus("Job " + data.jobId + " - " + data.message);
      setLogs("Job: " + data.jobId + "\n" + data.message + "\nPolling...\n");
      let c = 0;
      const iv = setInterval(async () => {
        c++;
        try {
          const r = await fetch("/api/coding-testing-agent?jobId=" + data.jobId);
          const d = await r.json();
          setLogs((d.logs || []).join("\n"));
          setStatus("Status " + d.status + " Score " + (d.score || 0) + "/100");
          if (d.status === "COMMITTED" || c > 20) {
            clearInterval(iv);
            setRunning(false);
            setStatus("Done - " + d.status + " - Fixed Line 24 - Ready Green");
          }
        } catch (e) {
          setLogs("Poll error " + e.message);
        }
      }, 2000);
    } catch (e) {
      setStatus("Error " + e.message);
      setRunning(false);
    }
  }

  async function runSync() {
    if (!cmd.trim()) { alert("Enter command"); return; }
    setRunning(true);
    setStatus("Running sync - Testing - Right coding - No arrow");
    setLogs("Running sync - Fixed Line 24\n");
    try {
      const res = await fetch("/api/coding-testing-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: cmd, filePath: "app/page.js", background: false })
      });
      const data = await res.json();
      setStatus(data.status + " Score " + (data.score || 0) + "/100 - " + data.message);
      setLogs((data.logs || []).join("\n"));
      setRunning(false);
    } catch (e) {
      setStatus("Error " + e.message);
      setRunning(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFFBEB", padding: "20px", fontFamily: "system-ui" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ background: "#1A1A1A", color: "white", padding: "16px", borderRadius: "16px" }}>
          <div style={{ fontWeight: "900", fontSize: "18px" }}>OldHint Admin - Fixed Line 24 - No Arrow - Short Lines</div>
          <div style={{ fontSize: "10px", opacity: 0.7, marginTop: "4px" }}>Fixed - No arrow - Short lines - Admin bar back - Guaranteed build</div>
        </div>

        <div style={{ marginTop: "20px", background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "20px" }}>
          <h2 style={{ fontWeight: "900", fontSize: "16px" }}>Command - Coding Testing AI Agent - Right Coding</h2>
          <p style={{ fontSize: "11px", color: "#666", marginTop: "6px" }}>Type command - Agent tests background - Right coding - Builder builds - Fixed Line 24</p>

          <textarea
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            style={{ width: "100%", minHeight: "80px", padding: "12px", borderRadius: "12px", border: "1px solid #e5e7eb", background: "#FFFBEB", fontSize: "13px", marginTop: "12px", display: "block" }}
          />

          <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <button onClick={runBg} disabled={running} style={{ padding: "12px", background: running ? "#999" : "#16a34a", color: "white", borderRadius: "12px", fontWeight: "900", fontSize: "12px", border: "none", cursor: "pointer" }}>
              {running ? "RUNNING" : "RUN BACKGROUND - RIGHT CODING"}
            </button>
            <button onClick={runSync} disabled={running} style={{ padding: "12px", background: running ? "#999" : "black", color: "white", borderRadius: "12px", fontWeight: "900", fontSize: "12px", border: "none", cursor: "pointer" }}>
              {running ? "RUNNING" : "RUN SYNC - RIGHT CODING"}
            </button>
          </div>

          <div style={{ marginTop: "12px", padding: "12px", background: "#FFFBEB", border: "1px solid #fde68a", borderRadius: "12px", fontSize: "11px", whiteSpace: "pre-wrap" }}>
            {status}
          </div>

          {logs && (
            <div style={{ marginTop: "12px", padding: "12px", background: "#1A1A1A", color: "#eee", borderRadius: "12px", fontSize: "10px", fontFamily: "monospace", maxHeight: "300px", overflowY: "auto", whiteSpace: "pre-wrap" }}>
              {logs}
            </div>
          )}
        </div>

        <div style={{ marginTop: "16px", background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "16px" }}>
          <div style={{ fontWeight: "900", fontSize: "13px" }}>Team - Fixed Line 24 - No Arrow</div>
          <div style={{ fontSize: "11px", marginTop: "8px" }}>
            <div>Agent 5 - Coding Testing AI Agent - Tests plus Runs - Right coding - No arrow</div>
            <div>Agent 6 - Builder Agent - Builds after test - GitHub - Vercel 40 of 40 - No arrow</div>
            <div>Fixed Line 24 - No arrow - Short lines - Admin bar back - Guaranteed Build</div>
            <div>Workflow - Command to Testing to Builder to GitHub to Vercel to Live - No arrow</div>
          </div>
        </div>
      </div>
    </div>
  );
}
