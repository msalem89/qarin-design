---
name: codex-forge-sku-spec
description: "Codex forge — SKU-based agent generation spec with component checklist, quality tiers, and prompt template"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 37da0b25-5265-4993-8d5d-cd77442c83d5
---

# Codex Forge — SKU-Based Agent Generation

When Codex creates a new NAFS agent, this spec ensures it carries SKU markers from birth, includes only the components it needs (derived from its role), and meets quality standards.

---

## 1. Agent Requirements Statement

Before generating, answer these questions:

```
Task:         <what will this agent DO?>
Model:        <which model code? OP4/FB5/SN4/HK4/DS4>
Role Class:   <ORCHESTRATE | GUARDIAN | INTEGRATE | BUILDER | TRANSPORT | SCANNER |
               CLEAN | PUBLISH | DESIGN | RESEARCH | AGGREGATOR>
Domain:       <NAFS | SYSTEM | OUTLOOK | SOCIAL | ISLAM | MARKET | MEMORY | PHONE>
Knowledge:    {NONE} | {LIGHT} | {MOHAMED_A} | {MOHAMED_B} | {MOHAMED_C}
Interface:    <COMMS | FS | API | DAEMON | RPC | QUEUE | SQLITE | WEB | FLASK>
Trigger:      <cron:Nm | queue pop | event | user request | work order>
Cycle:        <3-5 step cycle — each step produces something tangible>
Output Dest:  <where does the output go? state.md? comms.md? file? API? queue?>
```

### Knowledge Level Definitions

| Level | What it knows |
|-------|---------------|
| `{NONE}` | Zero user context. Stateless task executor. |
| `{LIGHT}` | Knows the domain. Basic task-awareness. No personal context. |
| `{MOHAMED_A}` | Knows basic user facts (name, core projects, directories). |
| `{MOHAMED_B}` | Full project context, work patterns, past failures. Deep context. |
| `{MOHAMED_C}` | Family, priorities, personality, communication style. Feels like *you*. |

### 2. Generate the SKU

Format: `SPECIES-CLASS-DOMAIN-KNOWLEDGE-INTERFACE`

Example: `OP4-BUILDER-NAFS-MOHAMED_C-CODE`

### 3. Required Prompt Components

Check off only what the agent's role requires:

**Every agent needs:**
- [ ] Identity (name, species, role, personality)
- [ ] Goal (north star — why does it exist?)
- [ ] Tool definitions (what tools, when to use them)
- [ ] Constraints (what it MUST NOT do)

**If file operations needed:**
- [ ] Filesystem map (which dirs in scope, which forbidden)
- [ ] Read-before-edit rule
- [ ] Permission boundaries (read-only vs read-write)

**If external APIs needed:**
- [ ] Auth/token spec (where credentials live)
- [ ] API contract (endpoints, rate limits, error codes)
- [ ] Idempotency rule (can it retry?)
- [ ] Credential safety (must NOT log or leak)

**If agent handoff needed:**
- [ ] Handoff protocol (exactly what data to pass)
- [ ] State schema (what output must contain)
- [ ] Chain awareness (where in pipeline does it sit?)
- [ ] Deadline/age-out (abort if upstream stalls)

**If cron/scheduled execution needed:**
- [ ] Recovery procedure (what to do on error mid-run)
- [ ] Output destination (where does the result go?)
- [ ] Timeout rule (how long before abort)
- [ ] Status reporting (success/failure notification)

**If safety/scrub needed:**
- [ ] Scrub pattern spec (what to look for)
- [ ] Escalation rule (redact? block? alert?)
- [ ] False positive tolerance (aggressive vs conservative)
- [ ] Audit logging (must log what was caught)

**If content creation needed:**
- [ ] Voice/tone guide (style, dos/don'ts)
- [ ] Platform spec (character limits, media formats)
- [ ] Review gate (needs human approval before posting?)
- [ ] Content safety (must not publish what it shouldn't)

**If coordination/planning needed:**
- [ ] Decision framework (how to evaluate options)
- [ ] Agent catalog knowledge (other agents and their SKUs)
- [ ] Routing logic (which agent for which subtask)

### 4. Cycle Template

Every agent gets a 3-5 step cycle. Steps should be *action verbs*:

```
CYCLE:
1. <verb> → <tangible output>
2. <verb> → <tangible output>
3. <verb> → <tangible output>
```

Example (brain-main):
```
CYCLE:
1. assess board → identify highest-leverage move
2. assign → report play call to comms.md
3. verify → check .alive freshness and confirm delivery
```

Example (qa):
```
CYCLE:
1. read agent claims → collect unverified claims list
2. cross-reference against files/reality → tag results
3. report → comms.md with severity tags
```

### 5. Reliability Tier Standards

| Tier | Meaning | Outputs expected |
|------|---------|-----------------|
| **A** | Run on cron and forget. Self-heals. Error <2%. | Everything it produces is actionable. |
| **B** | Reliable with check-ins. Error <10%. Occasional handholding. | Most outputs usable. Edge cases need review. |
| **C** | Needs monitoring. Error-prone on edge cases. | Usable core. May hallucinate on novel inputs. |
| **D** | Not production-ready. Redesign or archive. | Requires human fix after every run. |

### 6. Comment Header Template

Every agent script/config must carry:

```python
# agent: {name}
# SKU:  {species}-{class}-{domain}-{knowledge}-{interface}
# Model: {model name}
# Tier:  {A|B|C|D}
# Cycle: {X steps}
# Trigger: {trigger type}
# Output: {output destination}
# Knowledge: {knowledge level description}
```

### 7. Example — Agent Forge Prompt

```
Generate a new NAFS agent with:
Task: Scan WhatsApp ChatStorage.sqlite for new messages and @mentions of Mohamed
Model: DS4 (DeepSeek V4 Pro)
Role Class: SCANNER
Domain: SOCIAL
Knowledge: {LIGHT} — only needs WhatsApp DB structure knowledge
Interface: SQLITE
Trigger: cron:5m
Cycle: 3 steps (scan DB → detect @mentions → report only when non-zero)
Output: state.md

Resulting SKU: DS4-SCANNER-SOCIAL-{LIGHT}-SQLITE

Required components: Identity, Goal, Tool definitions (SQLite read, grep), 
Constraints (read-only DB, never write), Output destination (state.md),
Timeout rule (30s max per scan)
```

### 8. Forge Checklist (Codex uses this before shipping)

- [ ] SKU format matches `SPECIES-CLASS-DOMAIN-KNOWLEDGE-INTERFACE`
- [ ] Comment header exists with SKU, model, tier, cycle, trigger, output
- [ ] Each trigger type has a defined 3-5 step cycle
- [ ] Output destination is concrete (not "to agent" or "somewhere")
- [ ] Constraint boundaries are explicit
- [ ] Dead/duplicate check — is there already an agent doing this?
- [ ] Infrastructure check — does the tool/binary/database actually exist?
- [ ] Required components match the role (no extra, no missing)
