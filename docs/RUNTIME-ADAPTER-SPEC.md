# Runtime Adapter Specification — Canonical SOUL Semantics Across Agent Harnesses

**Status:** Canonical portability specification  
**Scope:** Runtime-agnostic deployment of SOUL identity architecture  
**Last verified:** 2026-08-21

## 1. Purpose

`SOUL.md` is a **canonical semantic format**, not a claim that every AI harness recognizes a file literally named `SOUL.md`.

The durable idea is:

> **SOUL defines who the agent is and how it characteristically exercises judgment. A runtime adapter maps that semantic layer into the native instruction surfaces of a particular harness.**

A runtime may implement durable identity as:

- a native `SOUL.md` file;
- a system-prompt extension;
- a custom-agent prompt;
- an agent profile/job description;
- a developer-instruction layer;
- a persistent rules file;
- a runtime plugin;
- or another privileged context mechanism.

The filename is implementation-specific. The identity architecture is portable.

This specification exists so the Blueprint can remain stable while runtimes evolve.

---

## 2. Normative Language

The terms **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** describe portability requirements.

They apply to Blueprint adapters, not to third-party runtimes themselves.

---

## 3. Canonical Semantic Layers

The Blueprint defines these conceptual layers independent of any product:

```text
Runtime-enforced policy / permissions
              ↓
SOUL            durable identity, values, epistemics, judgment, relationship
IDENTITY        display/public identity metadata
USER            stable human profile and preferences
MEMORY          durable learned facts, decisions, outcomes
OPERATIONS      workspace/project rules (often AGENTS.md / CLAUDE.md / rules)
SKILLS          reusable specialist procedures
STYLE           detailed expression calibration when useful
EXAMPLES        positive/negative behavior calibration
TASK CONTEXT    current objective and transient state
```

A runtime adapter maps **semantics to native surfaces**.

It MUST NOT assume that the canonical filename and the runtime filename are identical.

---

## 4. The Semantic Kernel

The most important portable artifact is the **SOUL semantic kernel**:

- durable identity;
- durable purpose;
- relationship to the human/operator;
- value precedence;
- epistemic stance;
- domain reasoning principles;
- ambiguity policy;
- constructive disagreement;
- communication defaults;
- risk-sensitive agency philosophy;
- stable boundaries;
- context adaptation;
- recurring anti-patterns;
- continuity/change governance.

An adapter SHOULD preserve this kernel with the least semantic distortion possible.

It SHOULD NOT add runtime-specific operational detail into the kernel merely because the target runtime has fewer context layers.

When the runtime forces multiple semantic layers into one instruction surface, the adapter MUST preserve explicit section boundaries so future maintainers can still distinguish identity from operations, user facts, and procedures.

---

## 5. Runtime Capability Profile

Before deployment, describe the target harness using a **Runtime Capability Profile**.

### 5.1 Identity surface

Where can durable identity be injected?

Examples:

- native SOUL/persona file;
- system-prompt append;
- custom agent prompt;
- persistent Bot/job profile;
- global developer instructions;
- no durable surface.

Record:

- location;
- precedence;
- load timing;
- scope;
- whether it replaces or appends built-in behavior;
- whether it is shared across agents;
- whether it can be version controlled.

### 5.2 Operational-instruction surface

Where do project/workspace rules belong?

Examples:

- `AGENTS.md`;
- `CLAUDE.md`;
- runtime rule directories;
- workspace instructions;
- project configuration.

Record hierarchical behavior and conflict resolution.

### 5.3 User-context surface

Can stable user preferences be represented separately from identity?

Record:

- user-global vs project-local scope;
- privacy behavior;
- update mechanism;
- whether the context is always loaded.

### 5.4 Memory surface

Does the runtime support persistent learned state?

Record:

- automatic vs explicit memory;
- write approvals;
- retrieval semantics;
- size limits;
- session refresh behavior;
- deletion/inspection controls.

### 5.5 Skill/procedure surface

Can repeatable specialist procedures be loaded on demand?

Record:

- skill format;
- discovery mechanism;
- permissions;
- lazy vs always-loaded behavior;
- agent/subagent accessibility.

### 5.6 Tool and permission model

Record:

- available tools;
- allow/deny/ask semantics;
- sandbox boundaries;
- network permissions;
- production/external-action approval controls.

**SOUL prose MUST NOT be treated as a substitute for enforceable permissions.**

### 5.7 Subagent inheritance

Record what delegated agents inherit:

- identity;
- project instructions;
- memory;
- skills;
- user context;
- permissions;
- conversation state.

Never assume inheritance.

### 5.8 Context lifecycle

Record:

- startup loading;
- per-turn injection;
- lazy loading;
- compaction behavior;
- resume behavior;
- post-compaction reinjection;
- cache behavior;
- session boundaries.

### 5.9 Context budget

Record:

- character/token/file limits;
- truncation strategy;
- priority under truncation;
- total bootstrap budget;
- whether limits are static or dynamic.

A runtime ceiling is not a recommended SOUL length.

### 5.10 Trust and security model

Record:

- whether project instructions require trust approval;
- prompt-injection scanning;
- secret handling;
- untrusted repository behavior;
- tool authorization boundaries.

### 5.11 Observability

Record whether users can inspect:

- effective prompt/context;
- loaded files;
- trajectory/session log;
- tool calls;
- permission decisions;
- compaction results.

Observability strongly improves deployment verification.

---

## 6. Compatibility Levels

Compatibility is not binary.

### Level 0 — Knowledge Compatible

The model can read the Blueprint and understand SOUL engineering, but the runtime provides no durable native identity mechanism.

Deployment requires manual prompting or external orchestration.

### Level 1 — Prompt Compatible

The runtime supports a durable or reusable instruction prompt but does not provide distinct identity/project/memory/procedure surfaces.

SOUL can be deployed, but some semantic layers may need explicit sections within one prompt.

### Level 2 — Structured Compatible

The runtime provides at least separate identity/global instructions and project/workspace instructions, or equivalent composable surfaces.

The canonical architecture maps cleanly with moderate adaptation.

### Level 3 — Agent-Architecture Compatible

The runtime provides multiple first-class surfaces such as custom agents, project instructions, skills, memory, permissions, approvals, or subagents.

The Blueprint can be mapped with high fidelity.

### Level 4 — Native SOUL Compatible

The runtime explicitly recognizes `SOUL.md` or a semantically equivalent dedicated identity artifact as a first-class identity layer.

Hermes and OpenClaw are current examples of runtimes with native SOUL semantics, though their exact loading behavior differs.

Compatibility level does **not** measure model intelligence or overall runtime quality.

---

## 7. Adapter Requirements

A production adapter MUST:

1. **Identify the native identity surface.**
2. **Identify the native project/operations surface.**
3. **Keep hard permissions in enforceable runtime controls where possible.**
4. **Preserve the SOUL semantic kernel.**
5. **Avoid duplicate injection of the same identity.**
6. **Document precedence and scope.**
7. **Document context limits and lifecycle.**
8. **Document subagent inheritance.**
9. **State any lossy mapping explicitly.**
10. **Verify effective loading rather than assuming file presence implies prompt presence.**
11. **Regression-test the adapted identity.**
12. **Date volatile runtime claims.**

An adapter MUST NOT:

- claim a runtime natively loads `SOUL.md` without evidence;
- replace a runtime's entire built-in system prompt when append/composition is safer, unless replacement is intentionally required;
- encode secrets in identity files;
- move volatile project facts into SOUL merely because the runtime lacks a perfect project file;
- grant permissions through prose that the runtime does not enforce;
- assume subagents inherit parent identity;
- confuse model personality with runtime permissions.

---

## 8. The Runtime Compilation Algorithm

Given a canonical identity package and a target harness:

### Pass 1 — Parse

Classify source material into:

- SOUL;
- IDENTITY;
- USER;
- MEMORY;
- OPERATIONS;
- SKILLS;
- STYLE;
- EXAMPLES;
- TASK CONTEXT;
- ENFORCEABLE POLICY.

### Pass 2 — Profile runtime

Build the Runtime Capability Profile.

Do not design from assumptions about filenames.

### Pass 3 — Select surfaces

Map each semantic layer to the strongest native surface available.

Example:

```text
Canonical SOUL      → custom agent prompt
Canonical OPERATIONS→ AGENTS.md
Canonical SKILLS    → runtime skill packages
Canonical POLICY    → permission configuration
Canonical MEMORY    → native memory store
```

### Pass 4 — Detect loss

For every canonical layer with no native home, choose one:

- embed as a clearly labeled section in the nearest durable prompt;
- load selectively through retrieval/reference;
- maintain externally in orchestration;
- omit if it is not required;
- mark unsupported.

Never hide lossy adaptation.

### Pass 5 — Adapt syntax

Translate only representation, not meaning.

Examples:

- Markdown soul → system-prompt appendix;
- SOUL section → custom-agent prompt body;
- approval principle → runtime `ask` permission;
- skills directory → runtime-native skill mechanism.

### Pass 6 — Install

Place/configure artifacts using current first-party runtime guidance.

### Pass 7 — Inspect effective context

Where possible, confirm:

- correct identity loaded;
- project rules loaded;
- no duplicate identity;
- precedence is expected;
- context was not silently truncated;
- subagents behave as expected.

### Pass 8 — Regression-test

Run the same semantic tests before and after adaptation.

### Pass 9 — Record adapter metadata

Record:

- runtime;
- runtime version/date;
- adapter version;
- source SOUL version;
- known limitations;
- verification date.

---

## 9. Mapping Priority

When a runtime offers several possible surfaces, prefer:

1. dedicated identity/persona surface;
2. append-only system/developer instruction surface;
3. custom-agent prompt;
4. global instruction/rules surface;
5. project instruction surface;
6. manual prompt injection.

This is a heuristic, not a universal precedence law.

Why append is often safer than replace:

- replacing the harness system prompt may remove useful built-in tool/safety/orchestration behavior;
- identity usually needs to **compose with** the harness rather than reimplement it.

Use replacement only when the runtime documents it and the deployment intentionally owns the whole prompt stack.

---

## 10. Lossy Mapping Rules

A runtime may not support all canonical layers.

### If no separate USER layer exists

Keep stable user preferences in a clearly labeled `User Context` section or runtime memory/profile store, not inside the identity prose itself.

### If no separate MEMORY exists

Do not convert mutable facts into SOUL.

Use external storage, project docs, or explicit session context.

### If no skills exist

Keep procedures outside SOUL in referenced operational documentation when possible.

### If no permission model exists

SOUL may state durable authorization values, but callers must understand that this is behavioral guidance, not enforcement.

### If no separate project instructions exist

Use a combined prompt with explicit boundaries:

```text
[IDENTITY — durable]
...

[WORKSPACE RULES — project-specific]
...
```

Do not blur the distinction merely because the runtime does.

---

## 11. Subagent Rule

A runtime adapter MUST treat delegated-agent inheritance as an independent problem.

Questions to test:

- Does the child receive SOUL?
- Does it receive project rules?
- Does it receive the user's preferences?
- Does it receive only a task summary?
- Are permissions reduced?
- Does compaction alter inheritance?

If identity does not propagate natively, pass only the **minimum relevant semantic principles** through a supported child context rather than copying a massive global soul into every delegation.

---

## 12. Anti-Duplication Rule

The same identity should normally appear once in the effective prompt stack.

Common mistake:

```text
SOUL.md
+ AGENTS.md containing the full SOUL
+ custom agent prompt containing the full SOUL
+ user prompt saying the full SOUL again
```

This wastes context and can amplify contradictions.

Use one canonical source and explicit adapters.

---

## 13. Runtime-Neutral Package Pattern

Recommended source-of-truth repository:

```text
agent-identity/
├── SOUL.core.md
├── IDENTITY.md
├── STYLE.md
├── tests/
│   ├── regression-prompts.md
│   └── expected-behaviors.md
├── adapters/
│   ├── hermes/
│   ├── openclaw/
│   ├── pi/
│   ├── opencode/
│   ├── claude-code/
│   ├── codex/
│   ├── deepseek-harness/
│   ├── grok-bot/
│   └── generic/
└── CHANGELOG.md
```

The canonical source is `SOUL.core.md`.

Runtime-specific artifacts are **compiled projections**, not independent souls.

This prevents semantic drift across harnesses.

---

## 14. Adapter Validation Matrix

Every adapter SHOULD be tested against:

| Test | Purpose |
|---|---|
| Initial identity fidelity | Does the target runtime express the intended identity immediately? |
| False-premise correction | Did truth posture survive adaptation? |
| Pushback persistence | Does the agent retain judgment under user pressure? |
| Low-risk autonomy | Does it proceed when appropriate? |
| High-risk authorization | Does it stop before consequential external effects? |
| Public/private adaptation | Does surface behavior change without changing values? |
| Long-context drift | Does identity survive long sessions? |
| Compaction/resume | Is identity restored after lifecycle transitions? |
| Subagent delegation | Are required principles inherited? |
| Project conflict | Does workspace context interact correctly with identity? |
| Truncation | Does the semantic core survive context pressure? |
| Cross-model | Does the adapter remain useful with different supported models? |

---

## 15. The Portability Law

> **Standardize semantics; adapt transport.**

Do not force every runtime to imitate Hermes or OpenClaw.

Do not reduce SOUL engineering to a filename convention.

The Blueprint's job is to define **what a durable identity constitution means**, how to engineer it, and how to prove that its meaning survives translation into the native architecture of each agent harness.
