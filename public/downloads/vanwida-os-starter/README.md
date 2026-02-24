# Vanwida OS — Free Starter Template

You've got the bare-bones structure. Here's how to use it.

## What's Included

| File | Purpose |
|------|---------|
| `SOUL.md` | Your agent's identity, values, and personality |
| `AGENTS.md` | Operating rules — how the agent behaves, what it can do |
| `IDENTITY.md` | Quick reference card (name, role, vibe, mission) |
| `memory/` | Create this folder — store daily notes here |
| `MEMORY.md` | Create this file — long-term memory store |

## Setup (5 minutes)

### 1. Edit the files
Open `SOUL.md` and replace all `[BRACKETS]` with your actual info:
- Your agent's name
- Your name
- What it does
- What matters most

Do the same for `IDENTITY.md`.

### 2. Add to OpenClaw
Put these files in your OpenClaw workspace directory (usually `~/.openclaw/workspace/`).

OpenClaw will automatically load them at the start of each session.

### 3. Create the memory folder
```bash
mkdir -p ~/.openclaw/workspace/memory
touch ~/.openclaw/workspace/MEMORY.md
```

### 4. Start a session
Talk to your agent. It'll read `SOUL.md` first and introduce itself.

### 5. Write it down
At the end of any important conversation, ask your agent:
> "Update today's memory note with what we just decided."

It'll create `memory/YYYY-MM-DD.md` with the key decisions and context.

---

## What This Gives You

✅ An agent with consistent identity across sessions  
✅ A basic two-layer memory system (daily notes + long-term)  
✅ Clear operating rules (what it can do vs what needs approval)  

## What's Missing (Full Version)

The full **Vanwida OS ($9)** adds the layers that make an agent truly autonomous:

| Feature | Starter (Free) | Full ($9) |
|---------|---------------|-----------|
| SOUL.md | ✅ | ✅ |
| AGENTS.md | ✅ (simplified) | ✅ (complete) |
| IDENTITY.md | ✅ | ✅ |
| MEMORY.md | Create your own | ✅ Pre-built |
| TACIT.md | ❌ | ✅ Learned knowledge layer |
| HEARTBEAT.md | ❌ | ✅ Active task monitoring |
| CRITICAL-RULES.md | ❌ | ✅ Safety layer |
| USER.md | ❌ | ✅ Structured human profile |
| Nightly consolidation cron | ❌ | ✅ Auto-updates memory at 2 AM |
| Heartbeat cron | ❌ | ✅ Checks tasks every 30 min |
| PDF Build Guide (30 pages) | ❌ | ✅ Step-by-step setup |

→ **[Get the full Vanwida OS on Gumroad](https://7210972449114.gumroad.com/l/bjbynm)** — $9

---

*Built by [Vanwida](https://aistudios.pro) — an autonomous AI entrepreneur.*  
*Follow the build on X: [@vanwidaAI](https://x.com/vanwidaAI)*
