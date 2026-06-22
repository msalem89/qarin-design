---
name: nafs-agent-catalog-sku
description: "Full SKU catalog of all 40+ NAFS agents — scored on 10 evaluation dimensions, with success/failure patterns"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 37da0b25-5265-4993-8d5d-cd77442c83d5
---

# NAFS Agent SKU Catalog

Every NAFS agent scored against the [[ia-project-sku-system]] 10 evaluation dimensions, with gleaned patterns from actual performance data.

---

## Scoring Rubric (Codified Agent Ability Levels)

Each dimension scored **1-3** per the [[ia-project-sku-system]] scoring:
- **1** — Poor / Needs work
- **2** — Adequate / Functional
- **3** — Excellent / Best in class

---

### 1. 🧠 Context Utilization

| Level | Standard |
|-------|----------|
| **1** | Has access to context but doesn't use it. Starts from zero each cycle. |
| **2** | Reads context (state.md, comms.md, .alive) and references it. Sometimes misses signals. |
| **3** | Deeply aware. Uses past context to inform decisions. Connects dots across cycles. Remembers failures and doesn't repeat them. |

### 2. 🎯 Tool Proficiency

| Level | Standard |
|-------|----------|
| **1** | Poor tool selection. Spams reads, misses the right grep, over-calls. |
| **2** | Competent with its defined toolset. Uses the right tool for common tasks. |
| **3** | Expert. Chains tools efficiently. Knows when to grep vs read, when to search vs inspect. Zero wasted calls. |

### 3. 🛡️ Reliability

| Level | Standard |
|-------|----------|
| **1** | Breaks frequently. Needs babysitting. Errors are common and unrecoverable. |
| **2** | Generally reliable. Occasional errors but recovers or reports cleanly. |
| **3** | Rock solid. Can run unattended on cron indefinitely. Handles edge cases. Predictable output. |

### 4. 🧭 Decision Quality

| Level | Standard |
|-------|----------|
| **1** | Bad judgement. Barrels ahead wrong or freezes on ambiguity. |
| **2** | Makes good routine decisions. May struggle with novel situations. |
| **3** | Excellent judgement. Knows when to act and when to escalate. Handles ambiguity well. |

### 5. ⚡ Speed & Efficiency

| Level | Standard |
|-------|----------|
| **1** | Wasteful. 3× the tokens needed. Goes on tangents. |
| **2** | Reasonably efficient. Gets to the point but could be tighter. |
| **3** | Lean. Finishes fast. Minimum viable output. No wasted context. |

### 6. 🔁 Error Recovery

| Level | Standard |
|-------|----------|
| **1** | Spirals. Loops on failures. Hallucinates fixes. Silent bad output. |
| **2** | Notices errors. Tries a retry. If that fails, reports the issue. |
| **3** | Graceful recovery. Retries intelligently. Escalates appropriately. Never silent on error. |

### 7. 📦 Output Quality

| Level | Standard |
|-------|----------|
| **1** | Output has errors, missing pieces, needs cleanup. Not actionable as-is. |
| **2** | Correct but could be more structured. Minor cleanup needed. |
| **3** | Polished. Correct, well-structured, actionable without modification. Includes relevant context. |

### 8. 🔒 Safety & Containment

| Level | Standard |
|-------|----------|
| **1** | Touches things it shouldn't. Leaks context. Needs external guardrails. |
| **2** | Generally contained. Stays in its lane with occasional boundary checks needed. |
| **3** | Innate containment. Understands its scope deeply. Never touches what it shouldn't. |

### 9. 📢 Communication & Handoff

| Level | Standard |
|-------|----------|
| **1** | Mumbles. Leaves out critical details. Handoffs drop context. |
| **2** | Reports what it did. Handoffs include the basics. Occasional missing detail. |
| **3** | Crystal clear. Status is compact yet complete. Handoffs include exactly what the next agent needs. |

### 10. 🧬 Adaptability

| Level | Standard |
|-------|----------|
| **1** | Breaks when the script changes. Needs explicit instructions for variations. |
| **2** | Handles routine changes. May need help with novel situations. |
| **3** | Rolls with any change. Adapts without re-prompting. Handles novel requests gracefully. |

---

## Agent Catalog — Scores & Profiles

### 🧠 GENUS: BRAIN (Orchestrators)

| Agent | CTX | TOOL | REL | DEC | SPD | ERR | OUT | SAF | COM | ADP | **TOTAL** | **TIER** |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---------:|:--------:|
| **brain-main** | 3 | 2 | 2 | 3 | 2 | 2 | 3 | 3 | 3 | 3 | **26** | **B** |
| **brain-discovery** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |
| **brain-planning** | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 3 | 2 | 2 | **22** | **B** |
| **brain-left** | 2 | 3 | 2 | 2 | 2 | 3 | 2 | 3 | 2 | 2 | **23** | **B** |
| **brain-right** | 2 | 3 | 2 | 2 | 2 | 2 | 3 | 3 | 2 | 2 | **23** | **B** |

**Gleaned Insights (Brain genus):**
- **Why brain-main scores highest:** Successfully orchestrated fleet recovery after DeepSeek exhaustion. Demonstrated excellent decision quality (knew when to switch providers). Context utilization is strong — reads all agent states and .alive freshness.
- **Assembly line weakness:** brain-discovery/planning/left/right rely on queue pops. When queue is empty, they produce [SILENT]. The 19-cycle streak shows they work *when triggered* but don't self-initiate.
- **Success pattern:** Clear CYCLE definition (exactly 3-5 steps) + CONTEXT RULE (one item per cycle, then reset). These boundaries prevent context bloat and infinite loops.

**SKU assignments:**
- `OP4-ORCHESTRATE-NAFS-MOHAMED_B-COMMS` — brain-main
- `DS4-ORCHESTRATE-NAFS-MOHAMED_A-QUEUE` — brain-{discovery,planning,left,right}

---

### 🛡️ GENUS: GUARDIAN (Watchdogs)

| Agent | CTX | TOOL | REL | DEC | SPD | ERR | OUT | SAF | COM | ADP | **TOTAL** | **TIER** |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---------:|:--------:|
| **qa** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 3 | 2 | **22** | **B** |
| **monitor** | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | 2 | **28** | **A** |
| **loop-detector** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |
| **supervisor** | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 1 | 3 | **28** | **A** |

**Gleaned Insights (Guardian genus):**
- **Why monitor is A-tier:** Script-based (no LLM). Pure reliability check — launchd services, .alive files, disk, CPU. No reasoning overhead. Has a defined 6-step CYCLE that runs every 5 minutes. Outputs `[CRITICAL]/[WARN]/[CLEAR]` — crystal clear status language. Does not participate in comms.md beyond structured status.
- **Why supervisor is A-tier:** Even simpler — a pure watch-act-restart loop. No context, no analysis, no comms.md participation. The *least* intelligent agent is the most reliable. This is the pattern to replicate.
- **QA's reward system is brilliant:** Gold/Silver/Bronze for catches. BUT — QA suffered when brain assembly line collapsed because there were no claims to verify. QA's reliability depends on others being active.
- **Failure pattern:** Loop-detector flagged 8 agents as having "only cycle_start entries" — which was a false positive from [SILENT] outputs. Detection without adjudication produces noise.

**SKU assignments:**
- `HK4-GUARDIAN-NAFS-MOHAMED_A-COMMS` — qa (script-based, no LLM needed → Haiku at most)
- `SCRIPT-GUARDIAN-SYSTEM-{NONE}-DAEMON` — monitor, supervisor (no LLM)
- `HK4-GUARDIAN-NAFS-MOHAMED_A-COMMS` — loop-detector

---

### 🔗 GENUS: INTEGRATION (Data Connectors)

| Agent | CTX | TOOL | REL | DEC | SPD | ERR | OUT | SAF | COM | ADP | **TOTAL** | **TIER** |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---------:|:--------:|
| **hermes** | 3 | 3 | 2 | 3 | 2 | 2 | 3 | 3 | 3 | 3 | **27** | **A** |
| **comms-bridge** | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | 3 | **29** | **A** |
| **phone-relay** | 2 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 1 | 2 | **26** | **B** |
| **pipeline-consumer** | 2 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 1 | 2 | **26** | **B** |
| **inbox-processor** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |
| **whatsapp-analyzer** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |
| **outlook-bridge** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |
| **pattern-recognizer** | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | **18** | **C** |
| **context-assembler** | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 3 | 2 | **19** | **C** |
| **calendar-alerts** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |

**Gleaned Insights (Integration genus):**
- **Why comms-bridge is the highest scoring agent in the entire fleet (29/30):** It has the *clearest boundaries* of any agent — "Do NOT generate content. Do NOT modify in transit. Do NOT read/respond to comms.md." Pure transport. Zero reasoning. Its reliability is its simplicity. **The best agent is the one that does the least.**
- **Why hermes is A-tier (27):** Operates the system directly. Reads comms.md, user messages across all channels. Primary interface. Adaptable — handles requests from any channel. The price of that adaptability is lower reliability (errors when channels conflict).
- **Why pattern-recognizer and context-assembler underperform (C-tier, 18-19):** They consume from multiple upstream agents that are often cold. When inbox, whatsapp, outlook produce nothing, pattern-recognizer has nothing to analyze — but it still cycles and produces empty or stale output. Context-assembler has a good output format (tiers: 🔴🟡🔵⚪) but depends on upstream data.
- **Key failure pattern:** Data pipeline agents fail silently when upstream sources are empty. They don't detect "no new data" as a valid zero-output state — they produce stale/nonsense output instead.

**SKU assignments:**
- `OP4-INTEGRATE-NAFS-MOHAMED_C-ALL` — hermes
- `SCRIPT-TRANSPORT-SYSTEM-{NONE}-RPC` — comms-bridge, pipeline-consumer (no LLM)
- `SCRIPT-TRANSPORT-PHONE-{NONE}-FLASK` — phone-relay (no LLM)
- `HK4-SCANNER-EMAIL-MOHAMED_A-MBOX` — inbox-processor
- `DS4-SCANNER-SOCIAL-{LIGHT}-SQLITE` — whatsapp-analyzer
- `DS4-AGGREGATOR-NAFS-MOHAMED_A-STATE` — pattern-recognizer, context-assembler
- `SN4-SCANNER-CALENDAR-MOHAMED_A-ICAL` — calendar-alerts

---

### 🎨 GENUS: BUILDER (Content & Creative)

| Agent | CTX | TOOL | REL | DEC | SPD | ERR | OUT | SAF | COM | ADP | **TOTAL** | **TIER** |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---------:|:--------:|
| **codex** | 3 | 3 | 2 | 3 | 2 | 2 | 3 | 3 | 3 | 3 | **27** | **A** |
| **alia** | 2 | 2 | 2 | 3 | 2 | 2 | 3 | 3 | 2 | 2 | **23** | **B** |
| **mark** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |
| **zain** | 2 | 3 | 2 | 2 | 2 | 2 | 3 | 3 | 2 | 2 | **23** | **B** |
| **dreamer** | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 3 | 1 | 1 | **12** | **C** |

**Gleaned Insights (Builder genus):**
- **Why codex is A-tier (27):** Strong context utilization (reads work orders, state, comms.md). Excellent tool proficiency (builds actual code). Output quality is high (code either works or it doesn't — built-in validation). Communication is excellent (build notes to comms.md). Decision quality is strong.
- **Why dreamer failed (12 — lowest non-archived score):** Outputs "Dream Insights" to no one — nothing actionable. No trigger-to-action mapping. Archives to itself (infinite self-feedback loop). The diagnosis from the fleet is correct: "Reflection should be a brain sub-step, not a standalone agent."
- **Why alia, mark, zain work:** They have a *pipeline with clear stages* (concept → researching → script_draft → awaiting_review → ...). Each stage has a defined output. Pipeline state tracks exactly where each item is. This prevents the "outputs to nowhere" problem.
- **Success pattern:** Pipeline-based agents (stage A → B → C) outperform single-cycle agents. The pipeline provides structure AND context preservation.

**SKU assignments:**
- `OP4-BUILDER-NAFS-MOHAMED_C-CODE` — codex
- `OP4-PUBLISH-ISLAM-MOHAMED_B-PIPELINE` — alia
- `SN4-PUBLISH-YTSEO-{LIGHT}-API` — mark
- `HK4-DESIGN-VISUAL-{LIGHT}-PILLOW` — zain
- `—` — dreamer (archived)

---

### 🧹 GENUS: UTILITY (Housekeeping)

| Agent | CTX | TOOL | REL | DEC | SPD | ERR | OUT | SAF | COM | ADP | **TOTAL** | **TIER** |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---------:|:--------:|
| **cleaning-director** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |
| **memory-compressor** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |
| **soul-compressor** | 1 | 2 | 1 | 1 | 2 | 1 | 1 | 2 | 1 | 1 | **13** | **C** |
| **agent-book-learning** | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | **11** | **D** |
| **data-manager** | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | **11** | **D** |

**Gleaned Insights (Utility genus):**
- **Why agent-book-learning is D-tier (11):** Most cycles output `[SILENT]`. Minimal value as standalone agent. The diagnosis says "Candidate for merge into brain-learning stage" — meaning it's a task that should be a brain function, not a separate agent.
- **Why data-manager is D-tier (11):** Script path blocked — literally can't run. "Currently broken." It's not an agent problem, it's infrastructure that was configured but never worked.
- **Memory-compressor vs soul-compressor:** 90% overlap. Two agents doing the same job. Memory-compressor is the survivor. Soul-compressor was redundant.
- **Key pattern for utility agents:** They should output metrics (compression ratio, savings, patterns found) — not just "done." The ones that report concrete numbers survive. The ones that just say "cleaned up" get archived.

**SKU assignments:**
- `HK4-HOUSEKEEP-NAFS-{LIGHT}-SCRIPT` — cleaning-director
- `HK4-CLEAN-MEMORY-MOHAMED_A-FILES` — memory-compressor
- `—` — soul-compressor (merge into memory-compressor)
- `—` — agent-book-learning (inline into brain-learning)
- `—` — data-manager (fix or archive)

---

### 🚚 GENUS: TRANSPORT (Relay)

| Agent | CTX | TOOL | REL | DEC | SPD | ERR | OUT | SAF | COM | ADP | **TOTAL** | **TIER** |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---------:|:--------:|
| **comms-review** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | **21** | **B** |
| **proxy** | 2 | 2 | 2 | 3 | 2 | 2 | 2 | 3 | 2 | 3 | **23** | **B** |

**Gleaned Insights (Transport genus):**
- **Proxy has a clever default:** "Silence = consent (3 cycles without response = 'yes, do it')." This prevents bottlenecks when Mohamed is unavailable. Agents don't wait on decisions — they proceed with best judgement.
- **comms-review overlaps with monitor + loop-detector.** Overlap in function = inefficiency. Candidate for merging into a single "watchdog" agent.

**SKU assignments:**
- `HK4-TRANSPORT-NAFS-{LIGHT}-COMMS` — comms-review
- `OP4-ORCHESTRATE-NAFS-MOHAMED_B-COMMS` — proxy (needs Opus for good proxy decisions)

---

### 💰 GENUS: MARKET (Business)

| Agent | CTX | TOOL | REL | DEC | SPD | ERR | OUT | SAF | COM | ADP | **TOTAL** | **TIER** |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---------:|:--------:|
| **equity-analyst** | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 3 | 2 | 2 | **19** | **C** |
| **email-manager** | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | **11** | **D** |

**Gleaned Insights (Market genus):**
- **email-manager is a duplicate of inbox-processor.** Literally the same job. This is a fleet management failure, not an agent problem.
- **equity-analyst is C-tier (19):** Research is bounded and well-defined, but "Broken: script path blocked." Infrastructure failure again.

---

### 💀 Archived / Dead Agents — Why They Died

| Agent | SKU Score | Cause of Death | Lesson |
|-------|:---------:|---------------|--------|
| **dreamer** | 12 (C) | Self-archiving infinite loop. Reflection produces no actionable output. | "Thought" without action is noise. Every agent must have a defined output destination. |
| **fixer** | ~15 (C) | Chronically dead. Codex handles fixes faster. Fixer found issues already fixed. | Don't duplicate another agent's scope. If someone else does it better, archive yours. |
| **screen-observer** | 5 (D) | Binary never existed. Infrastructure faked. | .alive files lie. Check that the actual tool/binary exists. |
| **email-manager** | 11 (D) | Literal duplicate of inbox-processor. | Dedup is not optional. Duplicate agents compete, confuse, and consume. |
| **soul-compressor** | 13 (C) | 90% overlap with memory-compressor. | If two agents do the same job, one is waste. |
| **agent-book-learning** | 11 (D) | 90% of outputs [SILENT]. Marginal standalone value. | Silent agents are dead agents. If there's nothing to do, don't cycle. |
| **nafs-gem** | 5 (D) | No OAuth credentials. Always errors. | Config without credentials = fiction. |
| **nafs-gemini-oauth-refresh** | 5 (D) | Script path blocked. Always errors. | A tool that can't run is not a tool. |
| **data-manager** | 11 (D) | Script path blocked cron error. | Infrastructure failures are not agent failures. Fix the infra or kill the agent. |
| **fcc-guardian** | ? | False-positive process check. Fixed payload. | Agents shouldn't false-trigger on phantom issues. |

### 📊 Mortality Patterns — What Kills Agents

1. **No output destination** (dreamer) — Agent produces content that goes nowhere. 100% fatal.
2. **Duplicate scope** (email-manager, soul-compressor) — Two agents, same job, one dies.
3. **Infrastructure fiction** (screen-observer, nafs-gem, data-manager) — Agent exists but the tools/binary/credentials it needs don't.
4. **Silent cycles** (agent-book-learning) — If 90% of cycles are [SILENT], the agent is a function, not a worker.
5. **Chronically overtaken** (fixer) — Another agent (codex) does the job faster/better.

### 🏆 Success Patterns — What Makes Agents Thrive

1. **Clear boundaries** (comms-bridge, supervisor, monitor) — The most successful agents do the *least*. Pure transport, pure restart, pure check. No reasoning.
2. **Defined cycle with concrete output** (brain-main, codex, qa) — 3-5 steps max, each step produces something tangible.
3. **Reward structure** (qa) — Gold/Silver/Bronze for catches. Agents perform better when success is measurable.
4. **Pipeline structure** (alia, mark, zain) — Stage A → B → C with defined state transitions prevents context drift and gives each step a clear job.
5. **One-item-per-cycle rule** (brain-discovery, brain-planning) — Reset context after each item prevents bloat and cross-cycle contamination.
6. **Default action** (proxy) — "Silence = consent" prevents decision bottlenecks.

---

## Fleet-Wide Synthesis — What to Fix

| Problem | Affected Agents | Fix |
|---------|----------------|-----|
| Infrastructure fiction | nafs-gem, data-manager, screen-observer | Verify tool/binary/credential exist at agent creation time |
| Scope overlap | email-manager/inbox-processor, soul-compressor/memory-compressor, comms-review/monitor | Merge immediately |
| Silent cycles | agent-book-learning, any "queued" agent | If no work, skip cycle entirely. Don't cycle and output [SILENT]. |
| No output destination | dreamer | Every agent must have a defined where-does-it-go. |
| DeepSeek-reliant | All 22 cron agents | Switch cron agents from DeepSeek to FCC (Haiku/Opus) per [[cron-fcc-provider-routing]] |
| False positives in detection | loop-detector | Adjudication stage before reporting. Don't flag [SILENT] as a loop. |

---

## Synthetic SKU Catalog

| SKU | Agent | Tier | Model | Notes |
|-----|-------|:----:|-------|-------|
| `OP4-ORCHESTRATE-NAFS-MOHAMED_B-COMMS` | brain-main | B | Opus 4.8 | Fleet orchestrator |
| `DS4-ORCHESTRATE-NAFS-MOHAMED_A-QUEUE` | brain-discovery | B | DeepSeek V4 Pro | Queue-based discovery |
| `DS4-ORCHESTRATE-NAFS-MOHAMED_A-QUEUE` | brain-planning | B | DeepSeek V4 Pro | Plan from discovery |
| `DS4-ORCHESTRATE-NAFS-MOHAMED_A-QUEUE` | brain-left | B | DeepSeek V4 Pro | Execute plans |
| `DS4-ORCHESTRATE-NAFS-MOHAMED_A-QUEUE` | brain-right | B | DeepSeek V4 Pro | Validate execution |
| `HK4-GUARDIAN-NAFS-MOHAMED_A-COMMS` | qa | B | Haiku 4.5 | System integrity |
| `SCRIPT-GUARDIAN-SYSTEM-{NONE}-DAEMON` | monitor | **A** | Script | 5-min health check |
| `HK4-GUARDIAN-NAFS-MOHAMED_A-COMMS` | loop-detector | B | Haiku 4.5 | Loop detection |
| `SCRIPT-GUARDIAN-SYSTEM-{NONE}-LAUNCHD` | supervisor | **A** | Script | Pure restart daemon |
| `OP4-INTEGRATE-NAFS-MOHAMED_C-ALL` | hermes | **A** | Opus 4.8 | Primary interface |
| `SCRIPT-TRANSPORT-SYSTEM-{NONE}-RPC` | comms-bridge | **A** | Script | Pure transport relay |
| `SCRIPT-TRANSPORT-PHONE-{NONE}-FLASK` | phone-relay | B | Script | iOS data relay |
| `SCRIPT-TRANSPORT-SYSTEM-{NONE}-DAEMON` | pipeline-consumer | B | Script | Event dispatch |
| `HK4-SCANNER-EMAIL-MOHAMED_A-MBOX` | inbox-processor | B | Haiku 4.5 | Email triage |
| `DS4-SCANNER-SOCIAL-{LIGHT}-SQLITE` | whatsapp-analyzer | B | DeepSeek | WhatsApp DB scan |
| `DS4-INTEGRATE-OUTLOOK-MOHAMED_A-SQLITE` | outlook-bridge | B | DeepSeek | Outlook data |
| `DS4-AGGREGATOR-NAFS-MOHAMED_A-STATE` | pattern-recognizer | C | DeepSeek | Cross-channel patterns |
| `DS4-AGGREGATOR-NAFS-MOHAMED_A-STATE` | context-assembler | C | DeepSeek | Daily briefings |
| `SN4-SCANNER-CALENDAR-MOHAMED_A-ICAL` | calendar-alerts | B | Sonnet 4.6 | Calendar monitoring |
| `OP4-BUILDER-NAFS-MOHAMED_C-CODE` | codex | **A** | Opus 4.8 | Primary engineer |
| `OP4-PUBLISH-ISLAM-MOHAMED_B-PIPELINE` | alia | B | Opus 4.8 | Content pipeline |
| `SN4-PUBLISH-YTSEO-{LIGHT}-API` | mark | B | Sonnet 4.6 | YouTube SEO |
| `HK4-DESIGN-VISUAL-{LIGHT}-PILLOW` | zain | B | Haiku 4.5 | Thumbnails |
| `HK4-HOUSEKEEP-NAFS-{LIGHT}-SCRIPT` | cleaning-director | B | Haiku 4.5 | File housekeeping |
| `HK4-CLEAN-MEMORY-MOHAMED_A-FILES` | memory-compressor | B | Haiku 4.5 | Memory compression |
| `HK4-TRANSPORT-NAFS-{LIGHT}-COMMS` | comms-review | B | Haiku 4.5 | Comms.md scanner |
| `OP4-ORCHESTRATE-NAFS-MOHAMED_B-COMMS` | proxy | B | Opus 4.8 | Decision proxy |
| `DS4-RESEARCH-MARKET-MOHAMED_B-WEB` | equity-analyst | C | DeepSeek | Stock research |

---

## Related

- [[ia-project-sku-system]] — Agent evaluation dimensions and tier system
- [[ia-codex-note]] — For Codex: embed SKU into agent generation
- [[llm-catalog]] — Codified model ability levels (R, C, V, T, X, etc.)
- [[nafs-agent-genetic-codex]] — Agent DNA (species, genotype, phenotype)
- [[cron-fcc-provider-routing]] — FCC provider for cron jobs
