---
name: ia-project-sku-system
description: Intelligence Assistance vision — SKU catalog for NAFS agents with context-knowledge rating and evaluation criteria
metadata: 
  node_type: memory
  type: project
  originSessionId: 37da0b25-5265-4993-8d5d-cd77442c83d5
---

# Intelligence Assistance (IA) Project

The thesis: *A well-built agent that works perfectly is infinitely less useful than the same tool that instantly knows you.*

The work: Build a **SKU system** on top of the [[nafs-agent-genetic-codex]] to standardize, compare, and rate agents.

---

## Agent Greatness — What Makes One Agent Great and Another Subpar Beyond the LLM

The model (Opus/Sonnet/Haiku/Fable) sets a *ceiling*, but the gap between a great agent and a mediocre one running the same model is enormous. Here are the real evaluation dimensions:

### 1. 🧠 Context Utilization
Does the agent *actually use* the context it's given? Or does it have memory, instruction files, personality docs — and ignore them?

**Great:** Pulls from memory, references past conversations, applies what it knows about you. Feels like it *remembers*.
**Subpar:** Has access to the same data but acts like it's starting from zero every time.

### 2. 🎯 Tool Proficiency
Does it pick the right tool for the job? Does it chain tools effectively?

**Great:** Knows which tool to reach for, in what order, and when to stop. Doesn't over-call or under-call.
**Subpar:** Spams reads when it should grep, or jumps into edits without understanding the landscape.

### 3. 🛡️ Reliability / Consistency
Can you set it on a cron and walk away?

**Great:** Runs autonomously. Handles edge cases. Errors are rare, and when they happen, they're recoverable. Predictable output.
**Subpar:** Needs babysitting. Breaks on minor changes. Output varies wildly between runs. "Works on my machine" energy.

### 4. 🧭 Decision Quality / Autonomy
When something ambiguous happens, what does it do?

**Great:** Makes good judgement calls. Knows when to proceed and when to escalate. Operates at the right autonomy level for its role.
**Subpar:** Freezes on edge cases, guesses badly, or barrels ahead with the wrong approach.

### 5. ⚡ Speed & Efficiency
Token cost per task. Wall-clock time. Wastefulness.

**Great:** Gets to the point. Doesn't burn context on tangents. Finishes fast, costs less.
**Subpar:** Overthinks, over-writes, loops on itself. 3× the tokens for the same result.

### 6. 🔁 Error Recovery
What happens when something goes wrong?

**Great:** Notices the error, retries intelligently, or reports it cleanly. Doesn't spiral.
**Subpar:** Gets stuck in loops, hallucinates fixes, or silently produces bad output.

### 7. 📦 Output Quality
Is the output clean, correct, and *actionable*?

**Great:** Output is correct, well-structured, and usable as-is. Includes relevant context.
**Subpar:** Has errors, missing pieces, or requires human cleanup before it's useful.

### 8. 🔒 Safety & Containment
Does it stay in its lane?

**Great:** Handles sensitive data properly. Doesn't touch what it shouldn't. Containment is innate, not enforced.
**Subpar:** Leaks context, accesses systems it shouldn't, or needs guardrails to function safely.

### 9. 📢 Communication & Handoff
How well does it report status and pass work to other agents?

**Great:** Clear, concise status. Handoff includes exactly what the next agent needs. No dropped context.
**Subpar:** Mumbles about what it did. Leaves out critical details. Handoffs are lossy.

### 10. 🧬 Adaptability
Does it adjust to new situations or break when the script changes?

**Great:** Handles novel requests gracefully. Adapts to changing context without re-prompting.
**Subpar:** Needs explicit instructions for every variation. Breaks on unexpected input.

---

## SKU Format

`SPECIES-CLASS-SPECIALTY-KNOWLEDGE-INTERFACE`

Example: `OPUS-FILEOPS-DEVOPS-{MOHAMED_A}-{FS_API}`

## Quality Tiers

Each dimension above scored 1-3. Combined score determines tier:

| Tier | Score | Meaning |
|------|-------|---------|
| **A** | 27-30 | Elite. Can run autonomously. Makes excellent decisions. Knows you deeply. |
| **B** | 20-26 | Solid. Reliable with occasional check-ins. Good context. Minor issues. |
| **C** | 10-19 | Functional. Needs handholding. Weak context. Error-prone on edge cases. |
| **D** | <10 | Needs redesign. Not production-ready for unsupervised use. |

## Core Principle

The "Knowledge" field captures the Intelligence Assistance dimension — how deeply an agent knows *you* (Mohamed — family, projects, priorities, patterns). This is what differentiates a generic tool from one that delivers *Intelligence Assistance*.

An agent with A-tier knowledge of Mohamed and C-tier general intelligence may be more useful than an S-tier general agent with zero user context.

## Next Steps

1. ✅ Establish evaluation criteria for each SKU field
2. ⬜ **Catalog existing NAFS agents — score each on the 10 dimensions**
3. ⬜ **Build a SKU catalog/lookup table**
4. ⬜ Codex retrofit — new agents carry SKU from birth
5. ⬜ Use SKU for routing — dispatch tasks based on agent profile match

**Why:** Without a catalog, every agent is approached fresh. With SKUs, you know instantly what any agent is, what it knows, how reliable it is, and how much to trust it.

**How to apply:** Every new agent spec includes its SKU. Every existing agent is retrofitted. The Codex generates agents with SKU markers built in.
