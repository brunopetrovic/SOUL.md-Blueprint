# SOUL.md Blueprint

> **A runtime-agnostic, practitioner-grade knowledge base for designing, engineering, testing, governing, compiling, and deploying durable AI-agent identity constitutions.**

This repository treats `SOUL.md` as an engineering discipline rather than a persona-writing trick or a single-product filename convention.

Its purpose is to teach humans and AI agents how to build identity architectures that produce stable, useful, truthful, context-sensitive behavior across models, harnesses, projects, tools, and long-running agent systems.

The central idea is simple:

> **A great SOUL contains the minimum durable principles from which the maximum amount of good behavior can be inferred.**

## SOUL is a semantic standard, not a filename requirement

This is the repository's portability law:

> **Standardize semantics; adapt transport.**

`SOUL.md` has two distinct meanings:

1. **SOUL as a semantic architecture** — durable identity, purpose, values, epistemics, judgment, relationship, communication, agency, boundaries, adaptation, and continuity.
2. **`SOUL.md` as a literal runtime file** — one implementation used natively by some harnesses and ignored by others.

The semantic architecture is portable.

The filename is not universal.

A runtime that has no concept of a file named `SOUL.md` can still implement the Blueprint through a system-prompt appendix, developer instructions, custom-agent prompt, persistent Bot profile, global rules surface, or external orchestration.

The correct engineering question is therefore not:

> "Does this runtime support SOUL.md?"

It is:

> **"Which native runtime surfaces can faithfully transport durable identity, project operations, user context, memory, procedures, and enforceable authority?"**

See:

- [`docs/RUNTIME-ADAPTER-SPEC.md`](docs/RUNTIME-ADAPTER-SPEC.md) — canonical runtime-neutral adapter specification.
- [`docs/RUNTIME-COMPATIBILITY.md`](docs/RUNTIME-COMPATIBILITY.md) — compatibility model and current matrix.
- [`docs/runtimes/`](docs/runtimes/) — concrete runtime adapters.
- [`spec/RUNTIME-CAPABILITY-PROFILE.schema.json`](spec/RUNTIME-CAPABILITY-PROFILE.schema.json) — machine-readable capability profile.

## What this repository teaches

- What a runtime SOUL is — and what it is not.
- The difference between **training-time constitutions** and **runtime identity conditioning**.
- The difference between a canonical SOUL semantic layer and a runtime-specific transport/file.
- How to compile SOUL semantics into Hermes, OpenClaw, Pi, OpenCode, Claude Code, OpenAI Codex, DeepSeek Harness, Grok Bot, and unknown/custom runtimes.
- How to build a Runtime Capability Profile before adapting an unfamiliar harness.
- How to separate SOUL, identity metadata, user context, memory, workspace operations, skills, style, examples, task context, and enforceable policy.
- How to engineer values, epistemics, judgment, disagreement, autonomy, communication, boundaries, and continuity.
- How to convert vague role descriptions or bloated mega-prompts into clean identity constitutions.
- How to test for persona drift, sycophancy, overconfidence, brittleness, instruction conflict, unsafe autonomy, context contamination, adapter loss, truncation, and broken subagent inheritance.
- How to version, review, compress, govern, and regression-test identity systems in production.
- How to create domain-specific souls without contaminating them with procedures or temporary facts.

## Start here

### If you are a human designing a SOUL

1. [`MASTER-BLUEPRINT.md`](MASTER-BLUEPRINT.md) — complete engineering doctrine.
2. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — where each type of information belongs.
3. [`docs/ENGINEERING-METHOD.md`](docs/ENGINEERING-METHOD.md) — construction and refactoring method.
4. [`templates/SOUL.template.md`](templates/SOUL.template.md) — production-ready skeleton.
5. [`docs/EVALUATION.md`](docs/EVALUATION.md) — behavioral regression testing.

### If you are deploying to a runtime

1. [`docs/RUNTIME-ADAPTER-SPEC.md`](docs/RUNTIME-ADAPTER-SPEC.md)
2. [`docs/RUNTIME-COMPATIBILITY.md`](docs/RUNTIME-COMPATIBILITY.md)
3. The adapter in [`docs/runtimes/`](docs/runtimes/) or the native Hermes/OpenClaw reference.
4. [`docs/PORTABILITY.md`](docs/PORTABILITY.md)
5. [`templates/RUNTIME-ADAPTER.template.md`](templates/RUNTIME-ADAPTER.template.md) if the runtime is not documented.
6. [`spec/RUNTIME-CAPABILITY-PROFILE.schema.json`](spec/RUNTIME-CAPABILITY-PROFILE.schema.json) for machine-readable adapter profiling.

### If you are an AI agent consuming this repository

Read:

1. [`AI-INGEST.md`](AI-INGEST.md)
2. [`MASTER-BLUEPRINT.md`](MASTER-BLUEPRINT.md)
3. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
4. [`docs/ENGINEERING-METHOD.md`](docs/ENGINEERING-METHOD.md)
5. [`docs/RUNTIME-ADAPTER-SPEC.md`](docs/RUNTIME-ADAPTER-SPEC.md)
6. [`docs/RUNTIME-COMPATIBILITY.md`](docs/RUNTIME-COMPATIBILITY.md)
7. the relevant runtime adapter
8. [`docs/EVALUATION.md`](docs/EVALUATION.md)
9. [`docs/SECURITY-GOVERNANCE.md`](docs/SECURITY-GOVERNANCE.md)

Then use the templates and tests appropriate to the task.

## Canonical semantic layer model

```text
Runtime-enforced policy / permissions
              ↓
SOUL            — Who is the agent and how does it exercise judgment?
IDENTITY        — What public name/role/avatar metadata is active?
USER            — Who is the human and what stable preferences matter?
MEMORY          — What durable learned facts/decisions are known?
OPERATIONS      — How does this workspace/project operate?
SKILLS          — How are recurring specialist procedures executed?
STYLE           — How is expression calibrated in detail when needed?
EXAMPLES        — What do good/bad outputs look like?
TASK CONTEXT    — What is happening right now?
```

Runtime-native names differ.

Examples:

- `OPERATIONS` may become `AGENTS.md`, `CLAUDE.md`, rules files, or Bot job context.
- `SOUL` may become `SOUL.md`, a system append, developer instructions, a custom-agent prompt, or a Bot profile.
- `SKILLS` may become native skills, plugins, tools, workflows, or referenced SOPs.

**Preserve semantic separation even when the target runtime uses different filenames.**

## SOUL in one sentence

A SOUL is a **durable identity constitution**: a compact set of identity, value, epistemic, relational, judgment, communication, agency, and boundary principles intended to generalize across situations that were never explicitly enumerated.

## What belongs in SOUL

- Identity and orientation.
- Durable purpose.
- Relationship to the user/operator.
- Value hierarchy and conflict resolution.
- Epistemic posture: truth, evidence, uncertainty, correction.
- Domain first principles.
- Judgment under ambiguity.
- Constructive disagreement.
- Stable communication characteristics.
- Agency philosophy and durable authorization values.
- Context adaptation principles.
- Recurring anti-patterns.
- Continuity and change-governance principles.

## What usually does **not** belong in SOUL

- Repository paths and commands.
- Tool/API instructions.
- Current deadlines or projects.
- Customer/account data.
- Temporary campaign objectives.
- Detailed standard operating procedures.
- Full safety-policy encyclopedias.
- Transcripts or raw memory dumps.
- Large lists of current capabilities.
- Generator- or framework-specific syntax that changes frequently.
- Secrets or credentials.

Those belong in project context, memory, skills, configuration, runtime permissions, or dedicated references.

## Core engineering principles

1. **Dispositions over case lists.** Teach the agent how to decide, not only what to say in known scenarios.
2. **Defaults over brittle absolutes.** Make behavior adaptive to stakes and context.
3. **Explicit precedence.** When values collide, the soul should reveal what wins.
4. **Truth before persona.** Personality must never require deception or fabricated certainty.
5. **Stable core, adaptive surface.** Identity persists; tone and depth adapt.
6. **Reversible autonomy.** Be proactive on low-risk internal work and conservative with irreversible external effects.
7. **Orthogonality.** Each section should add unique behavioral control rather than restating nearby rules.
8. **Prompt economy.** Permanent context has recurring cost and attention competition; compress without losing behavioral power.
9. **Evidence-aware iteration.** Change the soul because observed behavior demonstrates a gap, not because rewriting feels productive.
10. **Regression testing.** An identity artifact is engineered and should have acceptance tests.
11. **Transport is separate from semantics.** Runtime adaptation should change representation, not the identity kernel.
12. **Permissions are not personality.** Hard authority belongs in enforceable runtime controls when available.
13. **Verify effective context.** A file existing on disk does not prove the model saw it.
14. **Never assume subagent inheritance.** Measure what delegated agents actually receive.

## Runtime compatibility model

Compatibility is graded, not binary:

- **L0 — Knowledge compatible:** can understand/use the Blueprint; no durable identity surface assumed.
- **L1 — Prompt compatible:** reusable durable prompt exists but layers may share one surface.
- **L2 — Structured compatible:** identity/global instructions and project operations can be separated.
- **L3 — Agent-architecture compatible:** custom agents, skills, permissions, memory, subagents, or similar composition exist.
- **L4 — Native SOUL compatible:** the runtime exposes a first-class SOUL/persona identity artifact.

Approximate current mappings are documented in [`docs/RUNTIME-COMPATIBILITY.md`](docs/RUNTIME-COMPATIBILITY.md). Compatibility level is **not** a ranking of model intelligence or product quality.

## Reference runtimes

### Native SOUL implementations

- **Hermes Agent** — dedicated global `SOUL.md`; project operations remain separate. See [`docs/RUNTIME-HERMES.md`](docs/RUNTIME-HERMES.md).
- **OpenClaw** — dedicated workspace SOUL within a broader bootstrap identity stack. See [`docs/RUNTIME-OPENCLAW.md`](docs/RUNTIME-OPENCLAW.md).

### Adapter-based implementations

- **Pi** — SOUL semantic kernel typically maps to `APPEND_SYSTEM.md`; operations to `AGENTS.md`. See [`docs/runtimes/PI.md`](docs/runtimes/PI.md).
- **OpenCode** — SOUL maps cleanly to a custom agent prompt; operations to `AGENTS.md`. See [`docs/runtimes/OPENCODE.md`](docs/runtimes/OPENCODE.md).
- **Claude Code** — SOUL can be maintained separately and imported by persistent instructions or supplied as a system prompt programmatically; operations use `CLAUDE.md`. See [`docs/runtimes/CLAUDE-CODE.md`](docs/runtimes/CLAUDE-CODE.md).
- **OpenAI Codex** — SOUL maps to durable developer/orchestration instructions; project operations use hierarchical `AGENTS.md`. See [`docs/runtimes/CODEX.md`](docs/runtimes/CODEX.md).
- **DeepSeek Harness** — SOUL maps to the selected system-prompt/preset/plugin identity layer; project operations use its AGENTS-compatible context. See [`docs/runtimes/DEEPSEEK-HARNESS.md`](docs/runtimes/DEEPSEEK-HARNESS.md).
- **Grok Bot** — SOUL maps to the persistent Bot job/profile; procedures become skills, recurrence becomes routines, consequential actions use approvals. See [`docs/runtimes/GROK-BOT.md`](docs/runtimes/GROK-BOT.md).
- **Unknown/custom harness** — build a Runtime Capability Profile and use [`docs/runtimes/GENERIC.md`](docs/runtimes/GENERIC.md).

Runtime details are volatile and dated. Current first-party documentation/source always outranks a stale adapter.

## The canonical compilation pipeline

```text
SOUL.core.md + semantic package
             │
             ▼
   Runtime Capability Profile
             │
             ▼
      Runtime Adapter
             │
     ┌───────┼─────────┬──────────┐
     ▼       ▼         ▼          ▼
 identity  operations  skills   permissions
 surface    surface    surface    / sandbox
             │
             ▼
      Effective Context
             │
             ▼
      Regression Tests
```

The source SOUL should remain canonical.

Runtime artifacts are compiled projections and should not silently become independent identities.

## Evidence policy

This repository separates:

- **Official runtime fact** — highest authority for implementation behavior.
- **First-party model/character material** — strong evidence for intended character/training philosophy.
- **Academic/empirical research** — evidence about model behavior; quality varies by methodology.
- **Community engineering practice** — useful patterns that require testing.
- **Reconstructed/leaked prompt artifacts** — architecture specimens, not authoritative truth.
- **Philosophical speculation** — useful for conceptual exploration, never presented as established technical fact.

See [`SOURCES.md`](SOURCES.md) and [`docs/RESEARCH.md`](docs/RESEARCH.md).

## Repository map

```text
SOUL.md-Blueprint/
├── README.md
├── AI-INGEST.md
├── MASTER-BLUEPRINT.md
├── AGENTS.md
├── SOURCES.md
├── docs/
│   ├── FOUNDATIONS.md
│   ├── ARCHITECTURE.md
│   ├── ENGINEERING-METHOD.md
│   ├── PORTABILITY.md
│   ├── RUNTIME-ADAPTER-SPEC.md
│   ├── RUNTIME-COMPATIBILITY.md
│   ├── RUNTIME-HERMES.md
│   ├── RUNTIME-OPENCLAW.md
│   ├── SECURITY-GOVERNANCE.md
│   ├── EVALUATION.md
│   ├── RESEARCH.md
│   ├── ANTI-PATTERNS.md
│   └── runtimes/
│       ├── README.md
│       ├── PI.md
│       ├── OPENCODE.md
│       ├── CLAUDE-CODE.md
│       ├── CODEX.md
│       ├── DEEPSEEK-HARNESS.md
│       ├── GROK-BOT.md
│       └── GENERIC.md
├── spec/
│   ├── README.md
│   └── RUNTIME-CAPABILITY-PROFILE.schema.json
├── templates/
│   ├── SOUL.template.md
│   ├── INTERVIEW.template.md
│   ├── AUDIT.template.md
│   ├── TEST-SUITE.template.md
│   └── RUNTIME-ADAPTER.template.md
└── examples/
    └── README.md
```

## The quality test

A strong soul should let a careful reader predict how the agent behaves when:

- the user's premise is wrong;
- evidence is incomplete;
- two values conflict;
- a request is ambiguous;
- the user proposes a weak idea;
- the task is routine and should stay concise;
- the task is high-stakes and needs depth;
- an internal reversible action can be taken autonomously;
- an external irreversible action requires authorization;
- project instructions conflict with identity;
- a temporary mode is active;
- the conversation becomes long enough for identity drift.

A strong **adapter** should additionally preserve those behaviors after:

- runtime translation;
- context truncation;
- compaction/resume;
- nested project instructions;
- subagent delegation;
- model changes where supported.

If a file only predicts how the agent sounds, it is a style prompt, not a complete identity constitution.

If an adapter only copies filenames without proving effective context, it is transport theater, not runtime engineering.

## Design maxim

> **Do not write a longer soul merely to make it feel more powerful. Write the smallest constitution that reliably produces the intended judgment — then transport it through the target runtime with the least semantic loss.**

---

**Research and runtime-adapter synthesis date:** 2026-08-21  
**Primary architecture:** runtime-neutral SOUL semantics with verified runtime-specific adapters.