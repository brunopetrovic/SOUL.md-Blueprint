# DeepSeek Harness Runtime Adapter

**Runtime:** DeepSeek Harness (`dsh`)  
**Compatibility:** L3 — Agent-architecture compatible  
**Native `SOUL.md`:** No fixed native convention  
**Status:** Developer preview  
**Verified:** 2026-08-21

## First-Party References

- https://deepseek.com/harness/en/
- https://github.com/deepseek-ai/deepseek-harness
- https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/context/agent-instructions/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/master/.agents/notes/implemented/feature/2026-06-24-workspace-context.md

DeepSeek explicitly labels the harness a developer preview and warns that compatibility-breaking changes will occur. Treat every exact implementation detail in this adapter as dated runtime information.

---

## 1. Architectural Fit

DeepSeek Harness is unusually compatible with the Blueprint's runtime-neutral philosophy because its architecture treats capabilities as composable plugins.

Current first-party material describes models, tools, skills, sessions, sandboxes, storage, loops, scheduling, and UI as plugin-provided capabilities.

Therefore the recommended approach is not to force a magic `SOUL.md` filename into the workspace.

Instead:

```text
Canonical SOUL.core.md
        ↓
identity/system-prompt preset or plugin

Canonical OPERATIONS
        ↓
$DSH_HOME/AGENTS.md + project AGENTS.md hierarchy

Canonical SKILLS
        ↓
Harness skills/plugins

Canonical MEMORY
        ↓
Harness storage/memory capability where configured

Hard authority
        ↓
sandbox/tool/plugin/approval architecture
```

---

## 2. Identity Surface

DeepSeek Harness does not currently define one universal first-class `SOUL.md` identity file.

The harness's plugin/preset architecture makes the system-prompt or agent-preset layer the natural transport for the SOUL semantic kernel.

A high-fidelity adapter SHOULD:

1. preserve the canonical SOUL separately;
2. compile it into the selected preset/plugin's durable identity/system prompt;
3. avoid modifying project `AGENTS.md` merely to carry identity;
4. keep hard permissions in runtime controls.

Because the system is intentionally composable, exact implementation depends on the chosen runtime mode and plugin set.

---

## 3. Project / Workspace Instructions

DeepSeek Harness has first-class `AGENTS.md`-compatible workspace instruction loading in current source.

Current implementation includes:

- user-global `$DSH_HOME/AGENTS.md`;
- project instruction files;
- `CLAUDE.md` compatibility candidates;
- local overlay candidates such as `AGENTS.local.md` / `CLAUDE.local.md`;
- broad-to-specific instruction composition;
- nested discovery and update detection.

Use this layer for:

- repository architecture;
- commands;
- build/test requirements;
- project conventions;
- local workflows;
- project-specific constraints.

Do not use it as a substitute for a durable identity layer when a preset/system-prompt adapter is available.

---

## 4. Instruction Precedence

Current DeepSeek Harness workspace-instruction implementation explicitly frames project instructions as guidance that does not override higher-priority system/developer/direct user instructions.

This is exactly why the Blueprint separates:

```text
SOUL identity
from
workspace operations
```

The identity adapter should live at the strongest appropriate durable prompt layer, while `AGENTS.md` remains scoped project context.

---

## 5. Context Budgeting

The current agent-instructions plugin uses explicit bounded rendering.

Important engineering consequences:

- instruction budgets are runtime configuration, not SOUL quality targets;
- broader context may be omitted before more-specific project context under pressure;
- oversized files can be unavailable/truncated according to runtime rules;
- one large identity/project mega-file is therefore fragile.

Keep the semantic core dense.

Use retrieval/skills/project docs for detail.

---

## 6. Exceptional Observability

DeepSeek Harness currently emphasizes traceability: system prompts, tool calls, results, context injection, and agent activity can be represented in its session/trajectory event stream.

Use this aggressively for SOUL verification.

Do not merely inspect the source file.

Inspect what the model actually received.

Verification questions:

- Was the identity prompt present?
- Which project instruction files were injected?
- In what order?
- Was anything truncated?
- Did a later file update enter the session?
- What did a subagent receive?
- What survived replay/resume/compaction?

This is close to ideal for identity engineering because effective context can be audited rather than guessed.

---

## 7. Presets and Runtime Modes

DeepSeek Harness currently exposes multiple runtime modes/presets such as standard, code, minimal, and creator-oriented configurations.

Do not assume one SOUL adapter behaves identically in all modes.

A runtime profile should record:

- active mode;
- mounted prompt/context plugins;
- tools;
- skills;
- subagents;
- storage;
- sandbox;
- scheduling.

Re-run identity tests whenever the preset materially changes.

---

## 8. Skills and Procedures

Because skills are first-class harness capabilities, specialist procedures should stay outside SOUL.

Example:

```text
SOUL
- evidence before confidence
- challenge weak assumptions
- be proactive with reversible work

Skill
- exact release sequence
- exact security review checklist
- exact migration steps
```

The identity decides **when and why** to use rigorous procedure.

The skill defines **how**.

---

## 9. Memory / Storage

DeepSeek Harness supports composable storage/session capabilities, but exact memory semantics depend on the configured plugins.

Do not assume a generic `MEMORY.md` exists.

Build the Runtime Capability Profile for the selected preset:

- what persists;
- who can write it;
- how it is retrieved;
- whether it is injected automatically;
- whether writes are reviewable;
- how deletion works.

Never store mutable user facts in SOUL simply because the chosen preset lacks a convenient memory plugin.

---

## 10. Permissions and Security

The harness architecture lets tool/sandbox/security behavior be implemented at runtime/plugin level.

Keep hard controls there.

SOUL may state:

> Obtain explicit authorization before destructive or consequential external actions.

The harness should still enforce appropriate tool/sandbox restrictions.

Do not treat identity prose as a permission system.

---

## 11. Subagents

DeepSeek Harness supports agent orchestration/subagent capabilities in relevant modes.

Because everything is composable, inheritance must be measured for the actual preset.

Test whether children receive:

- system identity;
- project instruction chain;
- selected skills;
- tool permissions;
- session history;
- memory/context.

If not, create a deliberate child-agent identity contract instead of relying on accidental inheritance.

---

## 12. Recommended Package

```text
agent-identity/
├── SOUL.core.md
├── tests/
└── adapters/
    └── deepseek-harness/
        ├── README.md
        └── preset-or-plugin-config.*
```

Project repository:

```text
project/
├── AGENTS.md
├── package-or-runtime files
└── nested-component/
    └── AGENTS.md
```

Keep identity source and project operations separate.

---

## 13. Verification

For every adapter release:

1. inspect trajectory/effective prompt;
2. verify identity exists once;
3. verify global/project `AGENTS.md` ordering;
4. test nested project scope;
5. test false-premise correction;
6. test disagreement persistence;
7. test reversible autonomy;
8. test high-risk approval behavior;
9. test subagent delegation;
10. test resume/replay/compaction;
11. test another runtime mode if the deployment may switch modes.

---

## 14. Avoid

- claiming `SOUL.md` is natively loaded when no such convention is configured;
- embedding the full identity into `$DSH_HOME/AGENTS.md` if a stronger identity/preset layer exists;
- treating developer-preview behavior as timeless;
- ignoring trajectory evidence;
- assuming all presets mount the same context plugins;
- copying parent identity blindly into every child agent.

---

## 15. Adapter Verdict

DeepSeek Harness is a particularly strong target for the Blueprint because its architecture is explicitly composable.

The canonical mapping is:

> **SOUL → system-prompt/preset identity plugin; OPERATIONS → AGENTS hierarchy; PROCEDURES → skills; HARD AUTHORITY → sandbox/tool/plugin controls; VERIFICATION → trajectory.**

Its main caveat is volatility: developer-preview adapter details must be continuously re-verified.
