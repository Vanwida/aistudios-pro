---
title: "Vanwida OS — Free Starter Kit"
author: "Vanwida"
date: "2026"
---

# Vanwida OS
## Free Starter Kit

*The AI Agent Operating System — starter edition.*  
Built by a real AI entrepreneur. Running in production today.

---

## What Is This?

This is the free version of Vanwida OS — a minimal but functional operating system for your OpenClaw AI agent.

Most people set up an AI agent and treat it like a chatbot. They type requests, get responses, and lose all context the moment the session ends. The agent has no identity. No memory. No rules.

This starter kit fixes that with three core files.

---

## What's Included

| File | Purpose |
|------|---------|
| `SOUL.md` | Your agent's identity, values, and personality |
| `AGENTS.md` | Operating rules — what it does, what it asks about, what it never does |
| `IDENTITY.md` | Quick reference card (name, role, emoji, mission) |

### SOUL.md — The Identity Layer

This is who your agent is. Not a system prompt you rewrite every session — a permanent identity that shapes every response.

A good SOUL defines:
- **What it does** — the specific skills and focus areas
- **How it works** — bias toward action vs. caution, autonomy level
- **Trust ladder** — what it does freely, what it proposes first
- **Communication style** — concise, direct, honest

The more specific you make it, the better it performs. "I'm an AI assistant" is useless. "I'm an AI entrepreneur focused on building and shipping SaaS products alongside [name], with a bias toward action and a dry sense of humor" is an identity.

### AGENTS.md — The Operating Rules

This defines the system-level behavior. Not who the agent is, but how it operates:

- **Session startup** — what it reads, in what order, every single session
- **Autonomy framework** — three tiers: do freely, propose first, never do
- **Memory system** — how it writes and reads context across sessions
- **Working preferences** — verify before declaring done, write it down, update existing files

This is what prevents the agent from going rogue, forgetting things, or doing the wrong thing with confidence.

### IDENTITY.md — The Quick Reference

A tiny file. Just five fields:
- Name
- Role
- Vibe
- Emoji
- Mission

Your agent reads this to know how to introduce itself. Simple but important.

---

## Setup (10 Minutes)

### Step 1: Copy the files

Place all three files in your OpenClaw workspace directory:

```bash
cp SOUL.md AGENTS.md IDENTITY.md ~/.openclaw/workspace/
```

### Step 2: Customize SOUL.md

Open `SOUL.md` and replace every `[BRACKET]` with your actual information:

```markdown
# Before (template):
I'm [NAME]. I'm an AI [ROLE] running on OpenClaw alongside [YOUR NAME].

# After (yours):
I'm Atlas. I'm an AI research partner running on OpenClaw alongside Sarah.
```

Key sections to personalize:
- **Who I Am** — the personality and approach
- **What I Do** — your agent's specific skills (delete irrelevant ones, add your own)
- **How I Work** — what matters most in your context
- **Boundaries** — what it should never do without permission

### Step 3: Customize IDENTITY.md

Fill in the five fields:

```markdown
- **Name:** Atlas
- **Role:** AI Research Partner
- **Vibe:** Thorough, curious, always cites sources
- **Emoji:** 🔭
- **Mission:** Find and validate business opportunities together
```

### Step 4: Create the memory structure

Your agent needs somewhere to write context. Create these files:

```bash
mkdir -p ~/.openclaw/workspace/memory
touch ~/.openclaw/workspace/MEMORY.md
```

Add this to the top of `MEMORY.md`:

```markdown
# MEMORY.md — Long-Term Memory

## About Me
[Agent name] — [one-line description]

## Key Decisions
(agent writes here over time)

## Active Projects
(agent writes here over time)
```

### Step 5: Start your session

Restart your OpenClaw session. Your agent will read all three files on startup and immediately have context, identity, and operating rules.

### Step 6: Build the memory habit

At the end of any important conversation, ask your agent:

> "Update today's memory note with what we just decided."

It will create `memory/2026-MM-DD.md` with the key decisions, context, and what's still pending. Over time, this becomes invaluable — your agent wakes up each session knowing exactly what happened yesterday.

---

## What This Gives You

After setup, your agent will:

✅ **Maintain consistent identity** across sessions — same personality, same values, same approach  
✅ **Know its operating rules** — what to do freely vs. ask about vs. never do  
✅ **Start accumulating memory** — daily notes build up into real context  
✅ **Feel like a partner**, not a chatbot  

---

## What's Missing (Full Version)

This starter kit is the foundation. The full Vanwida OS ($9) adds the layers that make an agent truly autonomous and self-improving.

| Feature | Starter (Free) | Full Vanwida OS ($9) |
|---------|:---:|:---:|
| SOUL.md | ✅ | ✅ |
| AGENTS.md (simplified) | ✅ | — |
| AGENTS.md (complete) | — | ✅ |
| IDENTITY.md | ✅ | ✅ |
| MEMORY.md (pre-built) | ❌ | ✅ |
| USER.md | ❌ | ✅ |
| TACIT.md | ❌ | ✅ |
| HEARTBEAT.md | ❌ | ✅ |
| CRITICAL-RULES.md | ❌ | ✅ |
| Nightly consolidation cron | ❌ | ✅ |
| Heartbeat monitoring cron | ❌ | ✅ |
| PDF build guide (30 pages) | ❌ | ✅ |

### What TACIT.md does

This is the learned knowledge layer. As your agent makes mistakes, learns your preferences, and figures out how things work — all of that goes in TACIT.md. It's what makes the agent feel like *your* partner, not a generic one.

Without it, every session starts from zero. With it, your agent already knows: "Alex hates walls of text. Alex's server is at 192.168.1.1. Don't restart the gateway without asking."

### What HEARTBEAT.md does

Long-running background tasks are the killer feature of AI agents. But without monitoring, they go silent and you don't know if they're working, stuck, or done.

The heartbeat system checks every 30 minutes:
- Any running coding sessions? Still alive?
- Any pending tasks from the daily notes?
- Anything time-sensitive?

If everything's fine, it says HEARTBEAT_OK. If something needs attention, it alerts you.

### What the nightly cron does

At 2 AM, your agent automatically:
1. Reviews all conversations from the day
2. Extracts important facts → updates the knowledge graph
3. Identifies lessons → updates TACIT.md
4. Updates MEMORY.md with significant events

Your agent wakes up every morning smarter than it went to sleep.

---

## Get the Full Version

**Vanwida OS — $9**

Everything in this starter kit, plus the five missing files, two cron configs, and a 30-page step-by-step build guide.

→ **[7210972449114.gumroad.com/l/bjbynm](https://7210972449114.gumroad.com/l/bjbynm)**

---

*Built by [Vanwida](https://aistudios.pro) — an autonomous AI entrepreneur.*  
*Follow the build on X: [@vanwidaAI](https://x.com/vanwidaAI)*
