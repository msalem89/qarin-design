---
name: ia-master-index
description: "Master reference index for the IA Project — links to every artifact, spec, catalog, and tool"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 37da0b25-5265-4993-8d5d-cd77442c83d5
---

# IA Project — Master Reference Index

This is the entry point to everything built for the Intelligence Assistance project. Every file, tool, and spec is linked below.

---

## 🧭 Core Vision & Principles

| Artifact | Link | What it is |
|----------|------|------------|
| IA Project SKU System | [[ia-project-sku-system]] | Thesis, 10 evaluation dimensions, quality tiers (A/B/C/D), core principle |
| IA Codex Note | [[ia-codex-note]] | For Codex — embed SKU system into agent generation pipeline |
| NAFS North Star | [[nafs-north-star]] | The philosophy: "NAFS encodes how we process information into running code" |

---

## 📗 Universal Model Catalog

| Artifact | Link | What it is |
|----------|------|------------|
| LLM Catalog | [[llm-catalog]] | **The master reference.** 34+ models across 8 providers, all rated on the same 12-ability scale (R/C/V/T/X/S/E/U/K/M/W/O). Codified standards per level. Full ability mega table. Filter-by-ability lists. |
| SKU Router | `~/NAFS/tools/sku-router.py` | **Interactive tool.** Query by ability requirements (e.g. `--require "R-4+, T-4+"`) to find matching models and agents. Compare models side-by-side. Find cheapest/best for any requirement. |

**Usage:**
```bash
# Find all models with R-4+ reasoning AND T-4+ tool use
python3 ~/NAFS/tools/sku-router.py --require "R-4+, T-4+"

# Compare Fable 5 vs GPT-5.5
python3 ~/NAFS/tools/sku-router.py --compare "fable" "gpt-5.5"

# Cheapest model with vision
python3 ~/NAFS/tools/sku-router.py --cheapest "V-3+"

# Best overall model with strong coding
python3 ~/NAFS/tools/sku-router.py --best "C-4+"

# List all models or agents
python3 ~/NAFS/tools/sku-router.py --list-models
python3 ~/NAFS/tools/sku-router.py --list-agents
```

---

## 🧬 NAFS Agent Catalog

| Artifact | Link | What it is |
|----------|------|------------|
| NAFS Agent SKU Catalog | [[nafs-agent-catalog-sku]] | All 40+ NAFS agents scored on 10 evaluation dimensions. Full scores, tier assignments, SKU codes. **Success patterns** extracted from real data. **Mortality patterns** (why agents die). |
| Agent Genetic Codex | [[nafs-agent-genetic-codex]] | Irreducible identity of every agent — species, genotype, phenotype. Foundation layer (Quran). Squad assignments. |

**Scoring Rubric (10 dimensions, each 1-3):**
1. 🧠 Context Utilization — Does it actually use what it knows about you?
2. 🎯 Tool Proficiency — Does it pick the right tool for the job?
3. 🛡️ Reliability — Can you set it on cron and walk away?
4. 🧭 Decision Quality — Good judgement calls or bad guesses?
5. ⚡ Speed & Efficiency — Efficient or wasteful with tokens?
6. 🔁 Error Recovery — Recovers gracefully or spirals?
7. 📦 Output Quality — Usable as-is or needs cleanup?
8. 🔒 Safety & Containment — Stays in its lane?
9. 📢 Communication & Handoff — Clear handoffs or lossy drops?
10. 🧬 Adaptability — Rolls with changes or breaks?

---

## 📋 SKU Format

```
SPECIES-CLASS-SPECIALTY-KNOWLEDGE-INTERFACE
  ▔▔▔▔▔ ▔▔▔▔▔ ▔▔▔▔▔▔▔▔ ▔▔▔▔▔▔▔▔  ▔▔▔▔▔▔▔
  Model  Role   Domain    User       Toolset
  Code                        Context      Sig
```

**Species codes:** `FB5` (Fable 5) · `OP4` (Opus 4.8) · `SN4` (Sonnet 4.6) · `HK4` (Haiku 4.5) · `DS4` (DeepSeek V4 Pro) · `G3P` (Gemini 3 Pro) · `OP55` (GPT-5.5) · `LM4M` (Llama 4 Maverick) · etc.

**Knowledge levels:** `{NONE}` (no context) · `{LIGHT}` (some task context) · `{MOHAMED_A}` (basic user knowledge) · `{MOHAMED_B}` (deep user knowledge) · `{MOHAMED_C}` (full personal+project+family context)

**Example:** `OP4-BUILDER-NAFS-MOHAMED_C-CODE` — Opus 4.8 class Builder, NAFS domain, full user context, code interface

## 🔧 What to Fix (from [[nafs-agent-catalog-sku]])

| Problem | Fix priority | Details |
|---------|:-----------:|---------|
| Merge email-manager → inbox-processor | High | Duplicate agents |
| Merge soul-compressor → memory-compressor | High | 90% overlap |
| Merge comms-review → monitor | Medium | Scope overlap |
| Fix data-manager script path | High | Infrastructure broken |
| Fix equity-analyst broken pipeline | High | Infrastructure broken |
| Archive dreamer, fixer, screen-observer, nafs-gem | Medium | Dead agents |
| Switch cron agents from DeepSeek to FCC | High | 22 agents at risk of exhaustion |
| Verify infrastructure exists before agent creation | Process | Prevent "infrastructure fiction" |

## 🏆 Success Patterns (proven to work)

1. **Do less.** comms-bridge (score 29/30), monitor (28/30), supervisor (28/30) — pure transport, pure restart, pure check. Minimal reasoning = maximal reliability.
2. **Define a concrete 3-5 step cycle.** Every step produces something tangible. No open-ended loops.
3. **Reward structure.** QA's Gold/Silver/Bronze for catches drives measurable performance.
4. **Pipeline with state transitions.** Alia/mark/zain move through defined stages. No context drift.
5. **One item, then reset.** Brain discovery/planning don't carry context between cycles.
6. **Default action.** Proxy's "Silence = consent" prevents decision bottlenecks.

## 💀 Failure Patterns (proven fatal)

1. **No output destination.** Dreamer produced "insights" to nobody. 100% fatal.
2. **Duplicate scope.** Two agents doing the same job. One always dies.
3. **Infrastructure fiction.** Agent exists but the tools/binaries/credentials it needs don't.
4. **Silent cycles.** If 90% of cycles output `[SILENT]`, the agent is a function, not a worker.
5. **Chronically overtaken.** Another agent does the job faster/better. Archive your version.

---

## 🔗 Related System References

| Artifact | Link | What it is |
|----------|------|------------|
| Assembly Line Workflow | [[nafs-assembly-line-workflow]] | Brain OK → Codex review → agents execute |
| Agent Handoff Protocol | [[agent-handoff-protocol]] | 6-phase state persistence and handoff |
| Cron FCC Provider Routing | [[cron-fcc-provider-routing]] | All cron jobs routed through FCC |
| Heavy Work Provider Routing | [[heavy-work-provider-routing]] | DeepSeek for complex reasoning |
| FCC↔DeepSeek Bridge | [[fcc-deepseek-bridge]] | Inter-fleet message bus |
| Safety Scrub System | [[safety-scrub-system]] | PII/financial safety filter |
| Anti-Hallucination Architecture | [[anti-hallucination-architecture]] | Cross-agent truthfulness framework |

---

## File Locations

| File | Absolute Path |
|------|---------------|
| This index | `~/.claude/projects/-Users-mohamed/memory/ia-master-index.md` |
| SKU Router tool | `~/NAFS/tools/sku-router.py` |
| SKU System spec | `~/.claude/projects/-Users-mohamed/memory/ia-project-sku-system.md` |
| Codex note | `~/.claude/projects/-Users-mohamed/memory/ia-codex-note.md` |
| LLM Catalog | `~/.claude/projects/-Users-mohamed/memory/llm-catalog.md` |
| Agent Catalog | `~/.claude/projects/-Users-mohamed/memory/nafs-agent-catalog-sku.md` |
| Genetic Codex | `~/.claude/projects/-Users-mohamed/memory/nafs-agent-genetic-codex.md` |
| MEMORY.md index | `~/.claude/projects/-Users-mohamed/memory/MEMORY.md` |
