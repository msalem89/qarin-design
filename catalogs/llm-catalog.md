---
name: llm-catalog
description: "Master catalog of every LLM in the NAFS stack — codified ability levels (1-5), standards per tier, model ratings, and model-to-task mapping"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 37da0b25-5265-4993-8d5d-cd77442c83d5
---

# LLM Catalog — Universal Ability Framework

This is a **provider-agnostic framework** for rating ANY large language model on standardized ability levels (1-5). It is not limited to the models currently in the NAFS stack. Any model from any provider — OpenAI, Anthropic, Google, Meta, Mistral, DeepSeek, etc. — can be rated on these same levels.

The ability levels are the **universal standard**. The specific model entries below are just the initial catalog entries for the NAFS fleet. The catalog grows as new models are onboarded.

This lets you say things like:

> "This agent needs **Reasoning-4** minimum" → any model from any provider that meets R-4
> "This task requires **Vision-3+**" → filter all available models by V-3+
> "This cron job needs **E-4+**" → only budget models qualify

When a new model comes out, you add one entry with its R/C/V/T/X/S/E/U/K/M/W/O scores. Everything else (task mapping, agent requirements, routing logic) works automatically.

---

## Ability Index

| Code | Ability | What it measures |
|------|---------|-----------------|
| R | Reasoning | Depth of logical reasoning, multi-step chains, novel problems |
| C | Coding | Code generation, refactoring, architecture quality |
| V | Vision | Image understanding, OCR, visual reasoning |
| T | Tool Use | Native tool/function-calling capability |
| X | Context | Max input tokens + recall quality at depth |
| S | Speed | Time-to-first-token, throughput |
| E | Cost Efficiency | Dollars per million output tokens |
| U | Computer Use | GUI automation, screen understanding |
| K | Extended Thinking | Chain-of-thought depth, effort controls |
| M | Multimodal | Input modalities supported (text/image/audio/video) |
| W | Web Search | Native web search / browsing capability |
| O | Output Capacity | Max output tokens |

---

## Codified Ability Levels — Standards

Each ability is scored **1-5**, where 1 is minimal/basic and 5 is state-of-the-art. These levels are the *model's raw capability ceiling* — independent of agent design.

---

### R — Reasoning Depth

| Level | Standard | What it can do |
|-------|----------|---------------|
| **R-1** | Pattern matching | Follows basic instructions, simple Q&A, no multi-step logic |
| **R-2** | Single-step logic | Handles straightforward deductions, simple if-then reasoning |
| **R-3** | Multi-step moderate | Chains 3-5 reasoning steps, handles minor ambiguity |
| **R-4** | Complex chains | 5-10 step reasoning, handles abstraction, counterfactuals, trade-offs |
| **R-5** | Extended deep reasoning | Novel problem solving, meta-cognition, self-correction mid-chain, extended thinking modes |

---

### C — Coding

| Level | Standard | What it can do |
|-------|----------|---------------|
| **C-1** | Syntax-level | Writes simple scripts, single-file boilerplate |
| **C-2** | Bounded logic | Small feature additions, moderate refactoring within one file |
| **C-3** | Multi-file changes | Adds features across files, understands project structure, basic tests |
| **C-4** | Production quality | Full-stack code, optimization, error handling, comprehensive tests, code review |
| **C-5** | State-of-the-art | System-level design, novel algorithms, 95% SWE-bench territory |

---

### V — Vision

| Level | Standard | What it can do |
|-------|----------|---------------|
| **V-0** | No vision | Cannot process images at all |
| **V-1** | Basic description | Describes photos, simple OCR on clean text |
| **V-2** | Moderate visual | Reads charts/diagrams, extracts structured info from documents |
| **V-3** | Complex visual reasoning | Understands UI screenshots, multi-panel diagrams, handwritten text |
| **V-4** | Expert-level | Fine detail extraction, visual comparison, spatial reasoning |
| **V-5** | Professional vision | Medical imaging, technical drawings, GUI automation at human level |

---

### T — Tool Use

| Level | Standard | What it can do |
|-------|----------|---------------|
| **T-1** | Single-tool | Calls one tool at a time, basic |
| **T-2** | Sequential | Multiple tool calls in sequence, follows explicit instructions |
| **T-3** | Chaining | Chains tools, handles errors, selects appropriately from a defined set |
| **T-4** | Orchestration | Complex multi-tool workflows, conditional branching, parallel tool calls |
| **T-5** | Autonomous agent | Self-directed tool selection, creative composition, dynamic workflow creation |

---

### X — Context

| Level | Standard | What it can do |
|-------|----------|---------------|
| **X-1** | ≤32K tokens | Small documents, single files |
| **X-2** | 64K-128K | Medium projects, moderate codebases |
| **X-3** | 200K | Large files, moderate codebases, long conversations |
| **X-4** | 500K | Very large codebases, full project context |
| **X-5** | 1M+ tokens | Full codebase + docs, strong recall even deep in context |

---

### S — Speed

| Level | Standard | Time-to-first-token |
|-------|----------|---------------------|
| **S-1** | Molasses | >10s TTFT |
| **S-2** | Slow | 5-10s TTFT |
| **S-3** | Moderate | 2-5s TTFT |
| **S-4** | Fast | 1-2s TTFT |
| **S-5** | Instant | <1s TTFT, high throughput |

---

### E — Cost Efficiency

| Level | Standard | Cost per million output tokens |
|-------|----------|-------------------------------|
| **E-1** | Luxury | >$40/M out |
| **E-2** | Premium | $20-40/M out |
| **E-3** | Standard | $10-20/M out |
| **E-4** | Budget | $1-10/M out |
| **E-5** | Free/Cheap | <$1/M out |

---

### U — Computer Use

| Level | Standard | What it can do |
|-------|----------|---------------|
| **U-0** | Not available | No computer-use capability |
| **U-1** | Experimental | Can move cursor and click, highly unreliable |
| **U-2** | Basic | Simple GUI tasks (open app, click button) with guidance |
| **U-3** | Functional | Multi-step GUI workflows, form filling, navigation |
| **U-4** | Proficient | Complex GUI automation, error recovery, handles layout changes |
| **U-5** | Expert | 85%+ OSWorld, indistinguishable from human operator |

---

### K — Extended Thinking

| Level | Standard | What it can do |
|-------|----------|---------------|
| **K-0** | None | No extended thinking / chain-of-thought capability |
| **K-1** | Basic CoT | Simple "let me think step by step" |
| **K-2** | Structured thinking | Follows reasoning frameworks, visible thought process |
| **K-3** | Deep reasoning chains | Extended thought before response, handles complex trade-offs |
| **K-4** | Full extended thinking | Controllable depth, effort levels (high/xhigh), self-verification |
| **K-5** | Meta-cognitive | Monitors own reasoning, backtracks, explores branches, self-corrects |

---

### M — Multimodal Input

| Level | Standard | Supported input types |
|-------|----------|----------------------|
| **M-1** | Text only | Text |
| **M-2** | Text + Image | Text + Images (basic understanding) |
| **M-3** | Text + Image (high quality) | Text + Images (detailed analysis) |
| **M-4** | Text + Image + Audio | Text + Images + Audio |
| **M-5** | Full multimodal | Text + Images + Audio + Video |

---

### W — Web Search

| Level | Standard | What it can do |
|-------|----------|---------------|
| **W-0** | Not available | No native web search |
| **W-1** | Basic lookup | Simple keyword search, returns top results |
| **W-2** | Structured search | Multi-query, result synthesis, source tracking |
| **W-3** | Research-grade | Complex queries, cross-referencing, fact-checking, citation |
| **W-4** | Expert research | Multi-source adversarial verification, claims extraction, authority ranking |

---

### O — Output Capacity

| Level | Standard | Max output tokens |
|-------|----------|------------------|
| **O-1** | Short | ≤4K tokens |
| **O-2** | Standard | 8K-16K tokens |
| **O-3** | Long | 32K-64K tokens |
| **O-4** | Extra long | 64K-128K tokens |
| **O-5** | Unlimited | 128K+ tokens |

---

## Provider Catalog — All Models Rated

### 🟣 Anthropic

| Model | R | C | V | T | X | S | E | U | K | M | W | O | $In/M | $Out/M | Context |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-----:|:------:|:------:|
| **Claude Fable 5** | **5** | **5** | 3 | **5** | **5** | 3 | 1 | **5** | **5** | 2 | 3 | **4** | $10.00 | $50.00 | 1M |
| **Claude Opus 4.8** | 4 | **5** | 3 | **5** | **5** | 3 | 2 | 4 | 1 | 2 | 3 | **4** | $5.00 | $25.00 | 1M |
| **Claude Sonnet 4.6** | 3 | 4 | **4** | 4 | 3 | 4 | 3 | 4 | 0 | **5** | 3 | 3 | $3.00 | $15.00 | 200K |
| **Claude Haiku 4.5** | 2 | 2 | 2 | 3 | 3 | **5** | 4 | 1 | 0 | 2 | 2 | 3 | $1.00 | $5.00 | 200K |

**SkuCodes:** FB5, OP4, SN4, HK4

---

### 🟢 OpenAI

| Model | R | C | V | T | X | S | E | U | K | M | W | O | $In/M | $Out/M | Context |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-----:|:------:|:------:|
| **GPT-5.5** | **5** | **5** | 3 | **5** | **5** | 3 | 2 | 4 | 4 | 2 | 3 | **4** | $5.00 | $30.00 | 1.05M |
| **GPT-5.4** | 4 | **5** | 3 | 4 | **5** | 3 | 3 | 4 | 3 | 2 | 3 | **4** | $2.50 | $15.00 | 1M |
| **GPT-5.4 mini** | 3 | 3 | 2 | 4 | 4 | 4 | 4 | 2 | 1 | 2 | 2 | 3 | $0.75 | $4.50 | 500K* |
| **GPT-5.4 nano** | 2 | 2 | 0 | 3 | 3 | **5** | 5 | 0 | 0 | 1 | 0 | 2 | $0.20 | $1.25 | 200K* |
| **o3** | **5** | 4 | 0 | 2 | 3 | 1 | 4 | 0 | **5** | 1 | 0 | 3 | $2.00 | $8.00 | 200K |
| **o4-mini** | 4 | 3 | 0 | 2 | 3 | 2 | 4 | 0 | 4 | 1 | 0 | 3 | $1.10 | $4.40 | 200K |
| **GPT-4.1** | 3 | 4 | 3 | 4 | **5** | 4 | 4 | 3 | 0 | 2 | 2 | 3 | $2.00 | $8.00 | 1M |
| **GPT-4.1 mini** | 3 | 3 | 2 | 3 | 4 | 4 | 5 | 1 | 0 | 2 | 2 | 2 | $0.40 | $1.60 | 1M |
| **GPT-4.1 nano** | 2 | 2 | 0 | 2 | 4 | **5** | 5 | 0 | 0 | 1 | 0 | 1 | $0.10 | $0.40 | 1M |
| **GPT-4o** | 3 | 4 | 3 | 4 | 3 | 4 | 3 | 3 | 0 | 3 | 2 | 2 | $2.50 | $10.00 | 128K |
| **GPT-4o mini** | 2 | 3 | 2 | 3 | 3 | **5** | 5 | 1 | 0 | 2 | 2 | 2 | $0.15 | $0.60 | 128K |

**SkuCodes:** OP5.5, OP5.4, OP5.4M, OP5.4N, O3, O4M, GPT41, GPT41M, GPT41N, GPT4O, GPT4OM

*Estimated context.

**Notes:**
- **GPT-5.5** — Flagship with extended thinking. 82.7% Terminal-Bench. Dynamic routing (light vs deep reasoning per query). Input above 272K tokens charged at 2×.
- **GPT-5.4** — Prior flagship. 75% OSWorld (above 72.4% human baseline). Computer use capable.
- **o3/o4-mini** — Reasoning specialists. o3 is very slow (17 tok/s, 2.4× slower than GPT-5.5). o4-mini faster (62 tok/s). o3-pro exists at $20/$80 but not cataloged (insufficient data).

---

### 🔵 Google (Gemini)

| Model | R | C | V | T | X | S | E | U | K | M | W | O | $In/M | $Out/M | Context |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-----:|:------:|:------:|
| **Gemini 3 Pro** | **5** | 4 | **5** | 4 | **5** | 2 | 3 | 3 | 4 | **5** | 3 | 3 | $2.00 | $12.00 | 2M |
| **Gemini 3.1 Pro** | 4 | 4 | **5** | 4 | **5** | 2 | 3 | 3 | 4 | **5** | 3 | 3 | $2.00 | $12.00 | 1M |
| **Gemini 2.5 Pro** | 4 | 4 | **5** | 4 | **5** | 2 | 4 | 2 | 4 | **5** | 2 | 3 | $1.25 | $10.00 | 2M |
| **Gemini 3 Flash** | 3 | 3 | **5** | 4 | **5** | 4 | 4 | 2 | 0 | **5** | 2 | 3 | $0.50 | $3.00 | 1M |
| **Gemini 2.5 Flash** | 3 | 3 | **5** | 4 | **5** | 4 | 4 | 1 | 0 | **5** | 2 | 3 | $0.30 | $2.50 | 1M |
| **Gemini 2.0 Flash** | 2 | 2 | **5** | 3 | **5** | **5** | 5 | 0 | 0 | **5** | 2 | 2 | $0.10 | $0.40 | 1M |
| **Gemini 2.5 Flash-Lite** | 2 | 2 | 3 | 3 | **5** | **5** | 5 | 0 | 0 | 2 | 2 | 2 | $0.10 | $0.40 | 1M |

**SkuCodes:** G3P, G31P, G25P, G3F, G25F, G20F, G25FL

**Notes:**
- **Gemini family strength:** Context windows are uniformly large (1M-2M) and multimodal is class-leading (M-5 on all Pro/Flash models).
- **Gemini 3 Pro** — Absolute flagship. 2M context. Thinking mode. Strong V-5 multimodal.
- **Gemini 2.5 Flash** — Frequently misbudgeted. Output at $2.50/M is notably higher than older Flash pricing still circulating online. Verify costs before scaling.
- **Gemini 2.0 Flash** — Cheapest Gemini text route at $0.10/$0.40. Reliable for simple tasks.
- **⚠️ Tool use:** Gemini tool/function-calling is capable but less mature than Anthropic/OpenAI. T-4 at best on Pro models. Gemini Flash models (3 Flash, 2.5 Flash) may be T-3 in practice.
- **⚠️ Computer use:** Google has limited native CU. U-3 on Gemini 3 Pro, U-2 or lower on others.

---

### 🟠 Meta (Llama)

| Model | R | C | V | T | X | S | E | U | K | M | W | O | $In/M | $Out/M | Context |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-----:|:------:|:------:|
| **Llama 4 Maverick** | 3 | 3 | 3 | 3 | **5** | 3 | **5** | 0 | 0 | 2 | 0 | 3 | $0.27 | $0.85 | 1M |
| **Llama 4 Scout** | 2 | 2 | 3 | 2 | **5** | 3 | **5** | 0 | 0 | 2 | 0 | 2 | $0.08 | $0.30 | **10M** |

**SkuCodes:** LM4M, LM4S

**Notes:**
- **Llama 4 family:** Open-source (via Together AI / AWS Bedrock). MoE architecture (400B total / 17B active for Maverick).
- **Scout's superpower:** 10M context — the longest of any public model. Ideal for massive document/codebase processing. But no extended thinking, no computer use, no native web search.
- **Maverick:** Surpassed 1400 on LMArena. 1M context. Competent generalist at ~5× cheaper than GPT-5.4.
- **Behemoth (2T+ params):** Still in training. Designed as teacher model for distillation.
- **⚠️ Tool use:** Open-source models via API (Together AI, AWS) have variable tool-calling quality. Expect T-3 or lower. No computer use capability.
- **⚠️ Best for:** Cost-sensitive long-context tasks, self-hosted deployments, offline/air-gapped setups.

---

### 🔴 Mistral AI

| Model | R | C | V | T | X | S | E | U | K | M | W | O | $In/M | $Out/M | Context |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-----:|:------:|:------:|
| **Mistral Large 2** | 4 | 4 | 0 | 3 | 2 | 3 | 4 | 0 | 0 | 1 | 0 | 3 | $2.00 | $6.00 | 128K |
| **Devstral 2** (Coding) | 3 | **5** | 0 | 3 | 3 | 3 | 4 | 0 | 0 | 1 | 0 | 3 | $2.00 | $6.00 | 256K |
| **Mistral Small** | 2 | 2 | 0 | 2 | 2 | 4 | **5** | 0 | 0 | 1 | 0 | 2 | $0.10 | $0.30 | 128K |
| **Codestral** (Fill-in-Middle) | 2 | 3 | 0 | 1 | 3 | **5** | **5** | 0 | 0 | 1 | 0 | 1 | $0.30 | $0.90 | 256K |
| **Mistral Nemo** | 1 | 2 | 0 | 1 | 2 | 4 | **5** | 0 | 0 | 1 | 0 | 1 | Free | Free | 128K |

**SkuCodes:** MLL2, DV2, MLS, CD, MLN

**Notes:**
- **Mistral Large 2:** Strong reasoning (MMLU 84%) and coding (HumanEval 92%). 128K context. Excellent multilingual support (dozens of languages). Good for RAG. Self-hostable on 1× H100 or Mac Ultra 192GB.
- **Devstral 2:** Coding specialist (SWE-bench 72.2%). 256K context. Modified MIT license. Best Mistral model for software engineering tasks.
- **Mistral Small:** Budget-friendly ($0.10/$0.30). Lightweight (22B). Runs on 16GB GPU. Good for chat, summarization, classification at scale.
- **Mistral Nemo:** Free (Apache 2.0). 12B params. Runs on Raspberry Pi / edge devices. Minimal capability.
- **⚠️ No vision:** No Mistral model currently supports image understanding (V-0 on all). Text-only family.
- **⚠️ No extended thinking:** No extended thinking/reasoning modes (K-0 on all).
- **⚠️ No web search:** No native web search.
- **⚠️ No computer use.**

---

### 🟡 DeepSeek

| Model | R | C | V | T | X | S | E | U | K | M | W | O | $In/M | $Out/M | Context |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-----:|:------:|:------:|
| **DeepSeek V4 Pro** | **5** | 4 | 0 | 2 | **5** | 2 | **5** | 0 | 4 | 1 | 0 | 3 | $0.44 | $0.87 | 1M |
| **DeepSeek V4 Flash** | 3 | 3 | 0 | 2 | 3 | 4 | **5** | 0 | 0 | 1 | 0 | 2 | ~$0.20 | ~$0.50 | 200K* |

**SkuCodes:** DS4, DS4F

**Notes:**
- **DeepSeek V4 Pro:** 1.6T MoE / 49B activated. Reasoning specialist. Extended thinking with effort control (high/xhigh). Hybrid attention for efficient long-context processing. $0.87/M out is transformative for batch reasoning.
- **⚠️ No Anthropic tools:** Does not support web_search, computer_use, or Anthropic-specific tool schemas. NOT suitable as a general agent runtime.
- **⚠️ No vision:** V-0 across all DeepSeek models.

---

### 🟤 xAI (Grok)

| Model | R | C | V | T | X | S | E | U | K | M | W | O | $In/M | $Out/M | Context |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-----:|:------:|:------:|
| **Grok 4.20** | 4 | 4 | 3 | 3 | 3 | 3 | 4 | 0 | 3 | 2 | 3 | 3 | $2.00 | $6.00 | 256K* |
| **Grok 4.1 Fast** | 2 | 2 | 3 | 2 | 2 | 4 | **5** | 0 | 0 | 2 | 2 | 2 | $0.20 | $0.50 | 128K* |
| **Grok 3** (legacy) | 3 | 3 | 2 | 3 | 2 | 3 | 3 | 0 | 0 | 2 | 2 | 2 | $2.00 | $10.00 | 128K* |

**SkuCodes:** GK4, GK4F, GK3

**Notes:**
- **Grok 4.20:** Current flagship. Undercuts GPT-5.4 by 60% on output. Real-time X search grounding is unique — "no other frontier lab offers live social-graph retrieval."
- **Grok 4.1 Fast:** Budget-friendly at $0.20/$0.50 — "one of the cheapest frontier-tier APIs available."
- **⚠️ Trails Claude on code generation quality** and long-context recall above 128K.
- **⚠️ Trails OpenAI on function-calling reliability** in multi-turn agents.
- **⚠️ Computer use:** No native computer-use capability reported.
- **Pros:** X/Twitter integration is unique. Good multimodal support (native image understanding). Competitive pricing.

---

### ⚪ Cohere

| Model | R | C | V | T | X | S | E | U | K | M | W | O | $In/M | $Out/M | Context |
|-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-----:|:------:|:------:|
| **Command R+** | 3 | 3 | 0 | 3 | 2 | 3 | 3 | 0 | 0 | 1 | 0 | 2 | $2.50 | $10.00 | 128K |
| **Command R** | 2 | 2 | 0 | 2 | 2 | 4 | 4 | 0 | 0 | 1 | 0 | 2 | $0.15 | $0.60 | 128K |

**SkuCodes:** CR+, CR

**Notes:**
- **Command R+:** Enterprise RAG specialist. Best at multi-document reasoning, synthesizing internal reports, generating polished customer-facing responses. Tool/function calling supported.
- **Command R:** Cost-effective RAG and chat. 16.7× cheaper than R+ on both input and output. "One of the cheapest serious models for enterprise chat and support."
- **⚠️ Limited general capability:** Cohere is optimized for RAG/enterprise search, not general agentic work. R-3 at best, C-3 at best. V-0 on all models. No web search, no computer use, no extended thinking.
- **Best for:** Enterprise search, RAG pipelines, internal knowledge assistants — NOT for agentic tool use.

---

## Mega Comparison Table — All Models, All Abilities

| Provider | Model | R | C | V | T | X | S | E | U | K | M | W | O |
|----------|-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Anthropic** | Fable 5 | 5 | 5 | 3 | 5 | 5 | 3 | 1 | 5 | 5 | 2 | 3 | 4 |
| **Anthropic** | Opus 4.8 | 4 | 5 | 3 | 5 | 5 | 3 | 2 | 4 | 1 | 2 | 3 | 4 |
| **Anthropic** | Sonnet 4.6 | 3 | 4 | 4 | 4 | 3 | 4 | 3 | 4 | 0 | 5 | 3 | 3 |
| **Anthropic** | Haiku 4.5 | 2 | 2 | 2 | 3 | 3 | 5 | 4 | 1 | 0 | 2 | 2 | 3 |
| **OpenAI** | GPT-5.5 | 5 | 5 | 3 | 5 | 5 | 3 | 2 | 4 | 4 | 2 | 3 | 4 |
| **OpenAI** | GPT-5.4 | 4 | 5 | 3 | 4 | 5 | 3 | 2 | 4 | 3 | 2 | 3 | 4 |
| **OpenAI** | o3 | 5 | 4 | 0 | 2 | 3 | 1 | 4 | 0 | 5 | 1 | 0 | 3 |
| **OpenAI** | o4-mini | 4 | 3 | 0 | 2 | 3 | 2 | 4 | 0 | 4 | 1 | 0 | 3 |
| **OpenAI** | GPT-5.4 mini | 3 | 3 | 2 | 4 | 4 | 4 | 4 | 2 | 1 | 2 | 2 | 3 |
| **OpenAI** | GPT-4.1 | 3 | 4 | 3 | 4 | 5 | 4 | 4 | 3 | 0 | 2 | 2 | 3 |
| **OpenAI** | GPT-4o | 3 | 4 | 3 | 4 | 3 | 4 | 3 | 3 | 0 | 3 | 2 | 2 |
| **OpenAI** | GPT-4.1 mini | 3 | 3 | 2 | 3 | 4 | 4 | 5 | 1 | 0 | 2 | 2 | 2 |
| **OpenAI** | GPT-4.1 nano | 2 | 2 | 0 | 2 | 4 | 5 | 5 | 0 | 0 | 1 | 0 | 1 |
| **OpenAI** | GPT-4o mini | 2 | 3 | 2 | 3 | 3 | 5 | 5 | 1 | 0 | 2 | 2 | 2 |
| **OpenAI** | GPT-5.4 nano | 2 | 2 | 0 | 3 | 3 | 5 | 5 | 0 | 0 | 1 | 0 | 2 |
| **Google** | Gemini 3 Pro | 5 | 4 | 5 | 4 | 5 | 2 | 3 | 3 | 4 | 5 | 3 | 3 |
| **Google** | Gemini 3.1 Pro | 4 | 4 | 5 | 4 | 5 | 2 | 3 | 3 | 4 | 5 | 3 | 3 |
| **Google** | Gemini 2.5 Pro | 4 | 4 | 5 | 4 | 5 | 2 | 4 | 2 | 4 | 5 | 2 | 3 |
| **Google** | Gemini 3 Flash | 3 | 3 | 5 | 4 | 5 | 4 | 4 | 2 | 0 | 5 | 2 | 3 |
| **Google** | Gemini 2.5 Flash | 3 | 3 | 5 | 4 | 5 | 4 | 4 | 1 | 0 | 5 | 2 | 3 |
| **Google** | Gemini 2.0 Flash | 2 | 2 | 5 | 3 | 5 | 5 | 5 | 0 | 0 | 5 | 2 | 2 |
| **Meta** | Llama 4 Maverick | 3 | 3 | 3 | 3 | 5 | 3 | 5 | 0 | 0 | 2 | 0 | 3 |
| **Meta** | Llama 4 Scout | 2 | 2 | 3 | 2 | 5 | 3 | 5 | 0 | 0 | 2 | 0 | 2 |
| **Mistral** | Mistral Large 2 | 4 | 4 | 0 | 3 | 2 | 3 | 4 | 0 | 0 | 1 | 0 | 3 |
| **Mistral** | Devstral 2 | 3 | 5 | 0 | 3 | 3 | 3 | 4 | 0 | 0 | 1 | 0 | 3 |
| **Mistral** | Codestral | 2 | 3 | 0 | 1 | 3 | 5 | 5 | 0 | 0 | 1 | 0 | 1 |
| **Mistral** | Mistral Small | 2 | 2 | 0 | 2 | 2 | 4 | 5 | 0 | 0 | 1 | 0 | 2 |
| **DeepSeek** | V4 Pro | 5 | 4 | 0 | 2 | 5 | 2 | 5 | 0 | 4 | 1 | 0 | 3 |
| **DeepSeek** | V4 Flash | 3 | 3 | 0 | 2 | 3 | 4 | 5 | 0 | 0 | 1 | 0 | 2 |
| **xAI** | Grok 4.20 | 4 | 4 | 3 | 3 | 3 | 3 | 4 | 0 | 3 | 2 | 3 | 3 |
| **xAI** | Grok 4.1 Fast | 2 | 2 | 3 | 2 | 2 | 4 | 5 | 0 | 0 | 2 | 2 | 2 |
| **Cohere** | Command R+ | 3 | 3 | 0 | 3 | 2 | 3 | 3 | 0 | 0 | 1 | 0 | 2 |
| **Cohere** | Command R | 2 | 2 | 0 | 2 | 2 | 4 | 4 | 0 | 0 | 1 | 0 | 2 |

---

## Ability Extremes — Fastest, Cheapest, Largest Context

| Extreme | Model | Value |
|---------|-------|-------|
| **Cheapest output** | Mistral Nemo | Free (Apache 2.0) |
| **Cheapest API output** | GPT-4.1 nano | $0.40/M out |
| **Largest context** | Llama 4 Scout | 10M tokens |
| **Fastest speed** | Haiku 4.5 / Gemini 2.0 Flash / GPT-4.1 nano | S-5 (TTFT <1s) |
| **Highest reasoning** | Fable 5 / GPT-5.5 / o3 / Gemini 3 Pro / DeepSeek V4 Pro | R-5 |
| **Best computer use** | Fable 5 | U-5 (85% OSWorld) |
| **Best multimodal** | Sonnet 4.6 / Gemini 3 Pro | M-5 (image+audio+video) |
| **Best tool use** | Fable 5 / Opus 4.8 / GPT-5.5 | T-5 |

---

## Filter-by-Ability — Find the Right Model

Need a model that meets certain minimums? Scan the mega table by ability:

### R-4+ (Strong reasoning)
Fable 5 · Opus 4.8 · GPT-5.5 · GPT-5.4 · o3 · Gemini 3 Pro · Gemini 3.1 Pro · Gemini 2.5 Pro · DeepSeek V4 Pro · Mistral Large 2 · Grok 4.20

### C-5 (Top-tier coding)
Fable 5 · Opus 4.8 · GPT-5.5 · GPT-5.4 · Devstral 2

### V-3+ (Visual capability)
Sonnet 4.6 (V-4) · All Gemini Flash+ (V-5) · Llama 4 Maverick/Scout · Opus 4.8 · Fable 5 · GPT-5.5 · GPT-5.4 · GPT-4.1 · GPT-4o · Grok 4.20 · Grok 4.1 Fast

### T-4+ (Complex tool orchestration)
Fable 5 · Opus 4.8 · GPT-5.5 · GPT-5.4 · GPT-5.4 mini · GPT-4.1 · GPT-4o · Sonnet 4.6 · Gemini 3 Pro · Gemini 3.1 Pro · Gemini 2.5 Pro · Gemini 3 Flash · Gemini 2.5 Flash

### X-5 (1M+ context)
Fable 5 · Opus 4.8 · GPT-5.5 · GPT-5.4 · GPT-4.1 family · Llama 4 Maverick/Scout · All Gemini models · DeepSeek V4 Pro

### E-5 (Cheapest — <$1/M out)
DeepSeek V4 Pro ($0.87) · Llama 4 Maverick ($0.85) · Llama 4 Scout ($0.30) · Gemini 2.0 Flash ($0.40) · Gemini 2.5 Flash-Lite ($0.40) · GPT-4.1 nano ($0.40) · GPT-4.1 mini ($1.60) · Command R ($0.60) · Mistral Small ($0.30) · Codestral ($0.90) · Grok 4.1 Fast ($0.50) · GPT-4.1 nano ($0.40)

### U-4+ (Computer use capable)
Fable 5 (U-5) · Opus 4.8 (U-4) · Sonnet 4.6 (U-4) · GPT-5.5 (U-4) · GPT-5.4 (U-4)

### K-4+ (Extended thinking)
Fable 5 (K-5) · o3 (K-5) · DeepSeek V4 Pro (K-4) · Gemini 3 Pro (K-4) · Gemini 3.1 Pro (K-4) · Gemini 2.5 Pro (K-4) · o4-mini (K-4) · GPT-5.5 (K-4)

### M-5 (Full multimodal: text+image+audio+video)
Sonnet 4.6 · Gemini 3 Pro · Gemini 3.1 Pro · Gemini 2.5 Pro · Gemini 3 Flash · Gemini 2.5 Flash · Gemini 2.0 Flash

---

## Model-to-Task Mapping

| Task Requirement | Candidate Models (minimum) |
|-----------------|---------------------------|
| **R-4+ needed** (complex reasoning) | Fable 5 · Opus 4.8 · GPT-5.5 · GPT-5.4 · o3 · Gemini 3 Pro · DeepSeek V4 Pro · Mistral Large 2 · Grok 4.20 |
| **C-5 needed** (top-tier code) | Fable 5 · Opus 4.8 · GPT-5.5 · Devstral 2 |
| **V-3+ needed** (vision tasks) | Sonnet 4.6 · Gemini (any) · GPT-5.5 · GPT-5.4 · GPT-4.1 · GPT-4o · Llama 4 · Grok 4.20 |
| **T-4+ needed** (agent orchestration) | Fable 5 · Opus 4.8 · GPT-5.5 · GPT-5.4 · Sonnet 4.6 · Gemini Pro models |
| **S-5 needed** (instant response) | Haiku 4.5 · Gemini 2.0 Flash · GPT-4.1 nano · GPT-4o mini |
| **E-5 needed** (cost-critical at scale) | DeepSeek V4 Pro · Llama 4 · Gemini 2.0 Flash · GPT-4.1 nano · Mistral Small · Grok 4.1 Fast |
| **U-4+ needed** (GUI automation) | Fable 5 · Opus 4.8 · Sonnet 4.6 · GPT-5.5 · GPT-5.4 |
| **K-4+ needed** (extended thinking) | Fable 5 · o3 · DeepSeek V4 Pro · Gemini 3 Pro · Gemini 2.5 Pro · GPT-5.5 · o4-mini · Grok 4.20 |
| **M-5 needed** (audio+video input) | Sonnet 4.6 · Gemini 3 Pro · Gemini 2.5 Pro · Gemini 3 Flash · Gemini 2.5 Flash |
| **X-5 needed** (1M+ context) | Opus/Fable 4.8/5 · GPT-5.5/5.4 · GPT-4.1 family · Llama 4 · All Gemini · DeepSeek V4 Pro |
| **W-3+ needed** (research search) | Fable 5 · Opus 4.8 · GPT-5.5 · GPT-5.4 · Sonnet 4.6 · Gemini Pro · Grok 4.20 |
| **Self-hosted / air-gapped** | Llama 4 · Mistral (all) · DeepSeek V4 Pro |

---

## NAFS Fleet Models — Detailed Profiles

The following models are currently in active use in the NAFS fleet. Detailed profiles below.

### 1. Claude Opus 4.8 — The Workhorse

| Code | Ability | Level | Evidence / Notes |
|------|---------|-------|------------------|
| R | Reasoning | **R-4** | Flagship reasoning, but no extended thinking mode. Handles complex multi-step chains. |
| C | Coding | **C-5** | Best-in-class codegen for complex refactoring, architecture. |
| V | Vision | **V-3** | Text + Image input, strong visual understanding but no audio/video. |
| T | Tool Use | **T-5** | Excellent tool selection, chaining, orchestration. |
| X | Context | **X-5** | 1M context, strong recall at depth. |
| S | Speed | **S-3** | Moderate TTFT — not the fastest, not the slowest. |
| E | Cost Efficiency | **E-2** | $25/M out native ($0 via FCC, but cataloging raw). |
| U | Computer Use | **U-4** | Strong CU capability, Fable 5 edges it out. |
| K | Extended Thinking | **K-1** | No extended thinking mode. Basic CoT only. |
| M | Multimodal | **M-2** | Text + Image only. |
| W | Web Search | **W-3** | Native Anthropic web_search tool. |
| O | Output | **O-4** | 128K max output. |

**SkuCode:** `OP4`
**Fleet address (FCC):** `open_router/anthropic/claude-opus-4` or `open_router/anthropic/claude-opus-4.8`
**Release:** May 28, 2026

---

### 2. Claude Fable 5 — The Heavy Lifter

| Code | Ability | Level | Evidence / Notes |
|------|---------|-------|------------------|
| R | Reasoning | **R-5** | Extended thinking, meta-cognitive self-correction. Best in class. |
| C | Coding | **C-5** | 95% SWE-bench Verified, 80% SWE-bench Pro. Industry-leading. |
| V | Vision | **V-3** | Text + Image input. Strong visual understanding. |
| T | Tool Use | **T-5** | Top-tier agent orchestration. |
| X | Context | **X-5** | 1M context window. |
| S | Speed | **S-3** | Moderate TTFT (slower than Sonnet, comparable to Opus). |
| E | Cost Efficiency | **E-1** | $50/M out — most expensive. Only use for highest-value tasks. |
| U | Computer Use | **U-5** | 85% OSWorld. Best in class for GUI automation. |
| K | Extended Thinking | **K-5** | Full extended thinking with effort controls (high, xhigh). |
| M | Multimodal | **M-2** | Text + Image only. |
| W | Web Search | **W-3** | Native web_search, but may fallback to Opus on guarded domains. |
| O | Output | **O-4** | 128K max output. |

**SkuCode:** `FB5`
**⚠️ Guarded-domain fallback:** Falls back to Opus 4.8 on cybersecurity, biology/chemistry, and model distillation domains.

---

### 3. Claude Sonnet 4.6 — The Sweet Spot

| Code | Ability | Level | Evidence / Notes |
|------|---------|-------|------------------|
| R | Reasoning | **R-3** | ~90% of Opus for most tasks. Good multi-step but no extended thinking. |
| C | Coding | **C-4** | Strong, users prefer 4.6 over 4.5 ~70% of the time. |
| V | Vision | **V-4** | Text + Image + Audio + Video — best multimodal range in the fleet. |
| T | Tool Use | **T-4** | Solid agent capability, good orchestration. |
| X | Context | **X-3** | 200K context window. Suffices for single-file/module jobs. |
| S | Speed | **S-4** | Faster than Opus, good balance. |
| E | Cost Efficiency | **E-3** | $15/M out — 40% cheaper than Opus 4.8. |
| U | Computer Use | **U-4** | Competent computer use. |
| K | Extended Thinking | **K-0** | No extended thinking mode. |
| M | Multimodal | **M-5** | Text + Image + Audio + Video — most capable multimodal in fleet. |
| W | Web Search | **W-3** | Native Anthropic web_search. |
| O | Output | **O-3** | 64K max output. |

**SkuCode:** `SN4`

---

### 4. Claude Haiku 4.5 — The Fast & Cheap

| Code | Ability | Level | Evidence / Notes |
|------|---------|-------|------------------|
| R | Reasoning | **R-2** | Decent for simple reasoning chains. Not for complex logic. |
| C | Coding | **C-2** | Good for small, bounded coding tasks. |
| V | Vision | **V-2** | Text + Image input. Good for basic image description and OCR. |
| T | Tool Use | **T-3** | Competent for bounded tool workflows. |
| X | Context | **X-3** | 200K context — surprising for its speed tier. |
| S | Speed | **S-5** | TTFT 300ms, 146 chars/sec. Fastest in fleet. |
| E | Cost Efficiency | **E-4** | $5/M out — 5× cheaper than Sonnet, 25× cheaper than Fable. |
| U | Computer Use | **U-1** | Minimal CU capability. Not for GUI tasks. |
| K | Extended Thinking | **K-0** | None. |
| M | Multimodal | **M-2** | Text + Image only. |
| W | Web Search | **W-2** | Web_search available but depth limited vs larger models. |
| O | Output | **O-3** | 64K max output. |

**SkuCode:** `HK4`

---

### 5. DeepSeek V4 Pro — The Reasoning Specialist

| Code | Ability | Level | Evidence / Notes |
|------|---------|-------|------------------|
| R | Reasoning | **R-5** | 1.6T params MoE, extended thinking (high/xhigh). Built for deep reasoning. |
| C | Coding | **C-4** | Strong, especially full-codebase analysis but below Opus/Fable. |
| V | Vision | **V-0** | No vision capability. |
| T | Tool Use | **T-2** | Decent basic tool use but NO Anthropic-specific tool support. |
| X | Context | **X-5** | 1M context with hybrid attention for efficient long-context processing. |
| S | Speed | **S-2** | Large MoE model — slower than Claude models. |
| E | Cost Efficiency | **E-5** | $0.87/M out — 57× cheaper than Opus. Transformative for batch. |
| U | Computer Use | **U-0** | None. |
| K | Extended Thinking | **K-4** | Controlled effort depth (high, xhigh), strong reasoning chains. |
| M | Multimodal | **M-1** | Text only. No vision, no audio, no video. |
| W | Web Search | **W-0** | No native web search (via FCC/OpenRouter). |
| O | Output | **O-3** | 64K max output. |

**SkuCode:** `DS4`

---

## SKU Pattern Integration

When building an agent SKU, pair the model code with the required ability levels:

```
OP4:R4/C5/V3/T5/X5/S3/E2/U4/K1/M2/W3/O4
```

This fully specifies the model's capability profile. When you define an agent requirement, you write:

```
REQUIRED: R-3+ | C-4+ | T-4+
```

Then filter the mega table for all models meeting those minimums — across any provider. The ability levels are universal.

---

## Agent + Model = Final SKU

The final agent SKU combines:
- **Model abilities** (this catalog) — the raw ceiling
- **Agent design qualities** (the [[ia-project-sku-system]] 10 dimensions) — how close the agent gets to that ceiling

```
SKU: OP4-CRON-SAFETY-MOHAMED_B-FS
     ▔▔▔  ▔▔▔▔  ▔▔▔▔▔  ▔▔▔▔▔▔▔▔  ▔▔
     Model Class  Knowledge  Interface
```

---

## Adding a New Model

When a new model drops from any provider:

1. Score it on R/C/V/T/X/S/E/U/K/M/W/O (1-5 per the codified standards above)
2. Add it to the mega comparison table
3. Note any unique capabilities or limitations
4. Update filter-by-ability lists if it sets a new extreme

The framework is **provider-agnostic**. Every model from every provider gets the same 12 scores, same standards, same comparison table. Agent requirements don't care which provider — they care about ability levels.

---

## Related

- [[ia-project-sku-system]] — Agent evaluation dimensions + tier system
- [[ia-codex-note]] — For Codex: embed SKU into agent generation
- [[heavy-work-provider-routing]] — DeepSeek for complex reasoning
- [[cron-fcc-provider-routing]] — FCC provider for cron jobs
- [[nafs-agent-genetic-codex]] — Agent DNA (species, genotype, phenotype)
- [[nafs-agent-catalog-sku]] — All 40+ NAFS agents scored on 10 dimensions
