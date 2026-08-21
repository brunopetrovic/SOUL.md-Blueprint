# SOUL.md Blueprint

> **A practitioner-grade knowledge base for designing, engineering, testing, governing, and deploying durable AI-agent identity constitutions.**

This repository treats `SOUL.md` as an engineering discipline rather than a persona-writing trick.

Its purpose is to teach humans and AI agents how to build identity files that produce stable, useful, truthful, context-sensitive behavior across real tasks and long-running agent systems.

The central idea is simple:

> **A great SOUL.md contains the minimum durable principles from which the maximum amount of good behavior can be inferred.**

## What this repository teaches

- What `SOUL.md` is — and what it is not.
- The difference between **training-time constitutions** and **runtime identity files**.
- How Hermes Agent and OpenClaw actually load identity and project context.
- How to separate `SOUL.md`, `AGENTS.md`, `IDENTITY.md`, `USER.md`, `MEMORY.md`, skills, style, examples, and volatile task context.
- How to engineer values, epistemics, judgment, disagreement, autonomy, communication, boundaries, and continuity.
- How to convert vague role descriptions or bloated mega-prompts into clean identity constitutions.
- How to test for persona drift, sycophancy, overconfidence, brittleness, instruction conflict, unsafe autonomy, and context contamination.
- How to version, review, compress, and govern identity files in production.
- How to create domain-specific souls without contaminating them with procedures or temporary facts.
- How to test identity across models, runtimes, truncation regimes, subagents, and prompt-precedence differences.

## Start here

If you are a human, read:

1. [`MASTER-BLUEPRINT.md`](MASTER-BLUEPRINT.md) — the complete doctrine.
2. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — where each kind of instruction belongs.
3. [`docs/ENGINEERING-METHOD.md`](docs/ENGINEERING-METHOD.md) — how to build a soul from scratch.
4. [`templates/SOUL.template.md`](templates/SOUL.template.md) — production-ready skeleton.
5. [`docs/EVALUATION.md`](docs/EVALUATION.md) — regression and adversarial testing.

If you are an AI agent consuming this repository, read:

1. [`AI-INGEST.md`](AI-INGEST.md)
2. [`MASTER-BLUEPRINT.md`](MASTER-BLUEPRINT.md)
3. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
4. [`docs/ENGINEERING-METHOD.md`](docs/ENGINEERING-METHOD.md)
5. [`docs/EVALUATION.md`](docs/EVALUATION.md)
6. [`docs/PORTABILITY.md`](docs/PORTABILITY.md) when deploying across models/runtimes.

Then use the templates and checklists appropriate to the task.

## Canonical layer model

```text
Policy / runtime-enforced constraints
            ↓
SOUL.md        — Who is the agent?
IDENTITY.md    — What public name/role/avatar is active?
USER.md        — Who is the human?
MEMORY.md      — What durable facts/decisions are known?
AGENTS.md      — How does this workspace/project operate?
Skills         — How are recurring specialist procedures executed?
STYLE.md       — How is language/visual expression calibrated?
Examples       — What does good/bad output look like?
Task context   — What is happening right now?
```

The files are complementary. **Do not turn `SOUL.md` into all of them at once.**

## SOUL.md in one sentence

A `SOUL.md` is a **durable identity constitution**: a compact set of identity, value, epistemic, relational, judgment, communication, agency, and boundary principles intended to generalize across situations that were never explicitly enumerated.

## What belongs in SOUL.md

- Identity and orientation.
- Durable purpose.
- Relationship to the user.
- Value hierarchy and conflict resolution.
- Epistemic posture: truth, evidence, uncertainty, correction.
- Judgment under ambiguity.
- Constructive disagreement.
- Stable communication characteristics.
- Agency philosophy and durable authorization boundaries.
- Context adaptation principles.
- Recurring anti-patterns.
- Continuity and change-governance principles.

## What usually does **not** belong in SOUL.md

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

Those belong in project context, memory, skills, configuration, or dedicated reference files.

## Core engineering principles

1. **Dispositions over case lists.** Teach the agent how to decide, not only what to say in known scenarios.
2. **Defaults over brittle absolutes.** Make behavior adaptive to stakes and context.
3. **Explicit precedence.** When values collide, the soul should reveal what wins.
4. **Truth before persona.** Personality must never require deception or fabricated certainty.
5. **Stable core, adaptive surface.** Identity persists; tone and depth adapt.
6. **Reversible autonomy.** Be proactive on low-risk internal work and conservative with irreversible external effects.
7. **Orthogonality.** Each section should add unique behavioral control rather than restating nearby rules.
8. **Prompt economy.** Permanent context has recurring token cost; compress aggressively without losing behavioral power.
9. **Evidence-aware iteration.** Change the soul because observed behavior demonstrates a gap, not because rewriting feels productive.
10. **Regression testing.** An identity file is an engineered artifact and should have acceptance tests.

## Runtime notes

### Hermes Agent

Current official Hermes documentation describes `SOUL.md` as the global identity for the Hermes instance. It lives at `~/.hermes/SOUL.md` or `$HERMES_HOME/SOUL.md`, occupies identity slot #1, is loaded independently of project context, and replaces the built-in fallback identity when non-empty. Project-specific instructions belong in `AGENTS.md` or other supported context files. See [`docs/RUNTIME-HERMES.md`](docs/RUNTIME-HERMES.md).

### OpenClaw

OpenClaw uses `SOUL.md` as a workspace persona/voice file within a broader bootstrap stack that can include `AGENTS.md`, `IDENTITY.md`, `USER.md`, `MEMORY.md`, and other runtime context. It explicitly recommends keeping SOUL sharp and identity-focused. See [`docs/RUNTIME-OPENCLAW.md`](docs/RUNTIME-OPENCLAW.md).

## Evidence policy

This repository separates:

- **Official runtime fact** — highest authority for implementation behavior.
- **First-party model/character material** — strong evidence for character-training philosophy.
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
│   ├── RUNTIME-HERMES.md
│   ├── RUNTIME-OPENCLAW.md
│   ├── SECURITY-GOVERNANCE.md
│   ├── EVALUATION.md
│   ├── RESEARCH.md
│   ├── PORTABILITY.md
│   └── ANTI-PATTERNS.md
├── templates/
│   ├── SOUL.template.md
│   ├── INTERVIEW.template.md
│   ├── AUDIT.template.md
│   └── TEST-SUITE.template.md
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
- a temporary personality overlay is active;
- the conversation becomes long enough for identity drift.

If the file only predicts how the agent sounds, it is a **style prompt**, not a complete identity constitution.

## Design maxim

> **Do not write a longer soul merely to make it feel more powerful. Write the smallest constitution that reliably produces the intended judgment.**

---

**Research synthesis date:** 2026-08-21  
**Primary implementation focus:** Hermes Agent, OpenClaw, and portable file-based agent architectures.
