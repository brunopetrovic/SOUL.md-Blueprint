# Runtime Compatibility — SOUL Blueprint Across Agent Harnesses

**Verified:** 2026-08-21  
**Rule:** compatibility describes how well the Blueprint's semantic layers map into a runtime. It does not rank model intelligence or product quality.

## 1. The Important Distinction

`SOUL.md` has two meanings that must not be conflated:

1. **SOUL as a semantic architecture** — durable identity, values, epistemics, judgment, relationship, communication, agency, and boundaries.
2. **`SOUL.md` as a literal runtime filename** — supported natively by some harnesses, ignored by others.

The first is portable.

The second is implementation-specific.

A user can therefore use the Blueprint with a runtime that has never heard of `SOUL.md` by compiling the semantic layers into that runtime's native instruction surfaces.

See `RUNTIME-ADAPTER-SPEC.md`.

---

## 2. Compatibility Levels

- **L0 — Knowledge compatible:** can read/use the Blueprint, no durable identity mechanism assumed.
- **L1 — Prompt compatible:** reusable or durable prompt exists, but semantic layers largely share one surface.
- **L2 — Structured compatible:** identity/global instructions can be separated from project/workspace rules.
- **L3 — Agent-architecture compatible:** custom agents, skills, permissions, memory, subagents, or similar first-class composition exists.
- **L4 — Native SOUL compatible:** a dedicated SOUL/persona artifact exists as a first-class runtime identity layer.

Levels are approximate engineering categories, not official product labels.

---

## 3. Current Matrix

| Runtime | Level | Native `SOUL.md` | Recommended SOUL mapping | Project/operations mapping | Notes |
|---|---:|---:|---|---|---|
| Hermes Agent | L4 | Yes | `$HERMES_HOME/SOUL.md` | `AGENTS.md` / supported context files | Dedicated global identity semantics; current official docs are canonical for exact loading behavior. |
| OpenClaw | L4 | Yes | Workspace `SOUL.md` | Workspace `AGENTS.md` and related bootstrap files | Native identity stack with distinct workspace files; subagent/harness propagation must be tested. |
| Pi | L3 | No | `APPEND_SYSTEM.md` is the preferred general adapter; `SYSTEM.md` only when intentionally replacing the built-in prompt | `AGENTS.md` / `CLAUDE.md` context | Pi supports global/project system-prompt files, context files, skills, and tool configuration. |
| OpenCode | L3 | No | Custom agent prompt or file-backed `prompt` | `AGENTS.md` (with `CLAUDE.md` compatibility fallback) | First-class custom agents, permissions, subagents, and skills make semantic mapping clean. |
| Claude Code | L2–L3 | No | User/project instruction import or programmatic system prompt/custom workflow; keep identity distinct where possible | `CLAUDE.md` hierarchy | `CLAUDE.md` is native persistent project/user instruction context; exact identity transport depends on CLI vs SDK/custom setup. |
| OpenAI Codex | L2–L3 | No | User/developer instruction layer or orchestration-specific durable prompt | Hierarchical `AGENTS.md` / `AGENTS.override.md` | `AGENTS.md` is a first-class repo context mechanism; do not stuff a global SOUL into every project file. |
| DeepSeek Harness | L3 | No fixed native SOUL convention | System-prompt/preset/plugin identity layer | `$DSH_HOME/AGENTS.md` + project `AGENTS.md` / local overlays | Everything-is-a-plugin architecture makes identity transport highly customizable; developer preview means adapter details may break. |
| Grok Bot | L3 | No documented native file convention | Bot job/profile/working context | Bot job + skills + sources + approval boundaries | Persistent named Bots are closer to durable agent profiles than repo-file harnesses; use the semantic model, not a filename assumption. |
| Generic LLM/API agent | L0–L3 | Depends | Highest durable system/developer/agent-profile surface available | Project rules/retrieval/orchestration | Build a Runtime Capability Profile before choosing transport. |

---

## 4. Runtime-Specific Guides

- Hermes: `RUNTIME-HERMES.md`
- OpenClaw: `RUNTIME-OPENCLAW.md`
- Pi: `runtimes/PI.md`
- OpenCode: `runtimes/OPENCODE.md`
- Claude Code: `runtimes/CLAUDE-CODE.md`
- Codex: `runtimes/CODEX.md`
- DeepSeek Harness: `runtimes/DEEPSEEK-HARNESS.md`
- Grok Bot: `runtimes/GROK-BOT.md`
- Unknown/custom harness: `runtimes/GENERIC.md`

---

## 5. Canonical Mapping Pattern

The portable transformation is:

```text
Canonical identity package
        │
        ├── SOUL.core.md ───────────────┐
        ├── OPERATIONS / AGENTS ────────┤
        ├── USER / preferences ─────────┤
        ├── MEMORY ─────────────────────┤
        ├── SKILLS ─────────────────────┤
        └── permission policy ──────────┤
                                        ▼
                              Runtime Capability Profile
                                        │
                                        ▼
                                Runtime Adapter
                                        │
               ┌────────────────────────┼────────────────────────┐
               ▼                        ▼                        ▼
       native identity          workspace/rules           permissions/skills
          surface                   surface                   surfaces
```

Do not duplicate the full SOUL across every output surface.

---

## 6. The Best Mapping Is Not Always the Most Privileged Mapping

A runtime may expose a full system-prompt replacement. That does **not** mean replacement is automatically the best adapter.

Replacing the entire harness prompt can remove:

- tool instructions;
- permission behavior;
- runtime safety guidance;
- skills discovery;
- orchestration logic;
- environment context.

Prefer compositional/append/custom-agent mechanisms where they preserve useful harness behavior.

Use full replacement only when:

1. the runtime documents the behavior;
2. the deployment intentionally owns the complete prompt;
3. required harness behavior is recreated or unnecessary;
4. regression tests pass.

---

## 7. Coding Harnesses vs Persistent Work Bots

Not all agent systems should be mapped identically.

### Coding harnesses

Examples: Pi, OpenCode, Claude Code, Codex, DeepSeek Harness.

They often have:

- project-root instruction files;
- directory inheritance;
- tool permissions;
- skills/subagents;
- source-control workflows.

The natural split is usually:

```text
SOUL semantic kernel → agent/system/global instruction surface
project operations   → AGENTS.md / CLAUDE.md / rules
procedures            → skills
hard authority        → permission configuration
```

### Persistent work Bots

Example: Grok Bot.

The natural split may instead be:

```text
SOUL semantic kernel → Bot job/working identity
operations           → job definition + source/tool context
procedures            → saved skills
recurrence            → routines
hard authority        → approval boundaries
memory                → Bot working context/native persistence
```

Do not force repo-file conventions onto a non-repo agent architecture.

---

## 8. Identity Fidelity vs Runtime Fidelity

A successful adapter preserves **identity fidelity** while respecting **runtime fidelity**.

Identity fidelity means the agent still:

- resolves values correctly;
- maintains epistemic discipline;
- disagrees appropriately;
- uses the intended risk model;
- preserves communication character.

Runtime fidelity means the adapter:

- uses native mechanisms correctly;
- preserves built-in safety/tool behavior where intended;
- respects precedence;
- respects context budgets;
- handles lifecycle and subagents accurately.

You need both.

---

## 9. Unknown Runtime Procedure

When a user names a harness not documented here:

1. Find current first-party docs/source.
2. Identify its instruction hierarchy.
3. Identify durable identity/global prompt surfaces.
4. Identify project rule surfaces.
5. Identify skills/procedures.
6. Identify memory.
7. Identify permissions/approvals.
8. Identify subagent inheritance.
9. Identify context limits and compaction.
10. Produce a Runtime Capability Profile.
11. Map the canonical layers.
12. Document unsupported/lossy elements.
13. Test.

Never answer "unsupported" merely because a runtime does not recognize the filename `SOUL.md`.

---

## 10. Universal Claim

The Blueprint is runtime-agnostic at the **semantic and engineering level**.

It is not runtime-magical.

A file named `SOUL.md` only affects a harness when that harness or an adapter actually loads it.

> **Portable semantics require explicit transport.**
