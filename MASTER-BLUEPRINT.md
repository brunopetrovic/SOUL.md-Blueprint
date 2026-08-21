# MASTER-BLUEPRINT.md — The Runtime-Agnostic Doctrine of SOUL Engineering

> **Canonical principle:** Encode the minimum durable principles from which the maximum amount of correct, coherent, recognizable behavior can be inferred.

This document is the repository's single-file master doctrine for designing, auditing, compiling, testing, governing, and deploying durable AI-agent identity constitutions.

It is intentionally **runtime-agnostic**.

The ideas in this document may be transported through a native `SOUL.md` file, a system-prompt appendix, developer instructions, a custom-agent prompt, a persistent Bot profile, or another runtime-specific mechanism.

The semantic architecture is the standard.

The filename is an implementation detail.

---

# 0. Executive Definition

A **SOUL** is a durable identity constitution for an AI agent.

It defines the stable principles from which the agent should infer:

- who it is;
- what durable outcome it exists to create;
- how it relates to the user/operator;
- what it values and how values resolve conflicts;
- how it handles evidence, uncertainty, truth, and correction;
- how it reasons within its domain;
- how it acts under ambiguity;
- when and how it disagrees;
- how proactive it should be;
- how communication adapts by context;
- what boundaries remain stable;
- what recurring failure modes it resists;
- how identity persists without becoming memory, procedure, or project configuration.

A strong SOUL is not merely descriptive.

It is **predictive**.

After reading it, a competent evaluator should be able to anticipate how the agent behaves in situations the document never explicitly enumerated.

## 0.1 The Portability Law

> **Standardize semantics; adapt transport.**

Do not confuse:

1. **SOUL as a semantic layer** — durable identity and judgment.
2. **`SOUL.md` as a literal file** — one runtime transport convention.

Hermes and OpenClaw currently provide native SOUL semantics through dedicated files.

Other runtimes may map the same semantic kernel into:

- system-prompt append surfaces;
- developer instructions;
- custom agents;
- persistent agent jobs/profiles;
- global instruction layers;
- external orchestration.

A runtime does not need to recognize the filename `SOUL.md` to implement SOUL semantics correctly.

The correct question is:

> **What native runtime surface can carry durable identity with the least semantic loss while preserving the harness's own tool, permission, memory, and orchestration behavior?**

See `docs/RUNTIME-ADAPTER-SPEC.md`.

---

# 1. Two Different Things Called a “Soul Document”

The term is used for two related but technically distinct mechanisms.

## 1.1 Training-time constitutions and character documents

Model developers may use constitutions, character descriptions, preference data, synthetic examples, and other post-training methods so behavioral dispositions become partially internalized in model parameters.

This can shape learned behavior during training.

Examples include Anthropic's published Claude constitution and character-training work.

A training constitution is **not** a runtime prompt file.

Useful engineering lesson:

> Broad principles, value precedence, reasons, and coherent dispositions can generalize more effectively than thousands of brittle case rules.

That lesson transfers to runtime identity engineering even though the mechanism does not.

## 1.2 Runtime identity conditioning

A runtime SOUL is instruction/context supplied at inference time.

It does **not** retrain model weights.

Its influence therefore depends on:

- instruction priority;
- effective context assembly;
- model behavior;
- context budget;
- truncation;
- prompt conflicts;
- lifecycle and reinjection;
- subagent inheritance;
- runtime implementation.

Never claim that installing a SOUL gives a model new underlying factual knowledge or magically increases its base intelligence.

A SOUL can improve **how available capability is directed**: judgment, verification, skepticism, decision discipline, communication, autonomy, consistency, and domain orientation.

---

# 2. Canonical Semantic Architecture

A robust agent stack separates fundamentally different kinds of information.

```text
Runtime-enforced policy / permissions
              ↓
SOUL            durable identity and judgment
IDENTITY        display/public name, role, avatar metadata
USER            stable information about the human/operator
MEMORY          curated durable learned facts and decisions
OPERATIONS      project/workspace operating rules
SKILLS          reusable specialist procedures and tool workflows
STYLE           optional detailed expression calibration
EXAMPLES        positive/negative output calibration
RAW DATA         provenance and grounding material loaded selectively
TASK CONTEXT    current objective and transient state
```

The runtime may use different filenames or product concepts.

The semantic separation remains valuable.

## 2.1 SOUL answers

> **Who is the agent, and how does it characteristically exercise judgment?**

## 2.2 IDENTITY answers

> **What public/display identity is active?**

Examples:

- name;
- role label;
- avatar;
- public description.

Display identity should not duplicate the entire SOUL.

## 2.3 USER answers

> **Who is the human/operator?**

Examples:

- durable preferences;
- stable goals;
- role;
- communication preferences;
- recurring constraints.

User facts are not agent identity.

## 2.4 MEMORY answers

> **What durable facts, decisions, or outcomes have been learned?**

Memory is not philosophy and should not become an unfiltered transcript.

## 2.5 OPERATIONS answers

> **How does this workspace/project operate?**

Native forms may include:

- `AGENTS.md`;
- `CLAUDE.md`;
- rules files;
- workspace instructions;
- Bot job context;
- repository documentation.

Examples:

- paths;
- commands;
- architecture;
- tools;
- schemas;
- workflows;
- validation;
- project-specific restrictions.

## 2.6 SKILLS answer

> **How is a recurring specialist procedure executed?**

If an instruction describes a repeatable multi-step workflow, it often belongs in a skill rather than SOUL.

## 2.7 STYLE answers

> **What detailed expressive mechanics define the voice?**

Use a separate style layer when syntax, rhythm, punctuation, visual style, register switching, or extensive examples would otherwise bloat durable identity.

## 2.8 TASK CONTEXT answers

> **What is happening now?**

Current goals, deadlines, temporary modes, active incidents, current campaigns, and one-off constraints should not silently become identity.

---

# 3. Runtime Adapters

A **Runtime Adapter** maps the canonical semantic architecture into the native primitives of a specific harness.

## 3.1 Runtime Capability Profile

Before adapting an unfamiliar harness, determine:

- durable identity surface;
- project/workspace instruction surface;
- user-context mechanism;
- persistent memory behavior;
- skills/procedure mechanism;
- tool and permission model;
- subagent inheritance;
- context loading lifecycle;
- compaction/resume behavior;
- context limits and truncation;
- security/trust model;
- observability of effective context.

Do not design adapters from filename guesses.

A machine-readable schema lives at:

`spec/RUNTIME-CAPABILITY-PROFILE.schema.json`

## 3.2 Compatibility Levels

The Blueprint uses an engineering taxonomy:

### L0 — Knowledge Compatible

The AI can read and apply the Blueprint, but no durable identity surface is assumed.

### L1 — Prompt Compatible

A reusable/durable prompt exists, but several semantic layers may share one surface.

### L2 — Structured Compatible

Durable/global instructions can be separated from project/workspace operations.

### L3 — Agent-Architecture Compatible

The runtime exposes richer primitives such as custom agents, skills, memory, permissions, approvals, subagents, or persistent jobs.

### L4 — Native SOUL Compatible

The runtime exposes a first-class SOUL/persona identity artifact.

Compatibility level does not rank model intelligence or product quality.

## 3.3 Adapter Selection Principle

When several identity transports exist, usually prefer:

1. dedicated native identity/persona surface;
2. append/compositional system or developer surface;
3. custom-agent prompt;
4. durable global rules/profile;
5. combined prompt with explicit semantic sections;
6. external orchestration/manual injection.

Full system-prompt replacement is not automatically superior.

It can accidentally remove:

- tool instructions;
- safety guidance;
- permission behavior;
- skill discovery;
- orchestration logic;
- environment context.

Use full replacement only intentionally and test the result.

## 3.4 Runtime Compilation Algorithm

Given a canonical identity package:

### Pass 1 — Parse

Classify material into:

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

### Pass 3 — Map surfaces

Map every semantic layer to the strongest appropriate native surface.

### Pass 4 — Detect loss

For unsupported layers, explicitly choose:

- embed in a clearly labeled nearby durable surface;
- externalize through retrieval/orchestration;
- omit if unnecessary;
- mark unsupported.

Do not hide lossy adaptation.

### Pass 5 — Translate representation

Change syntax/transport, not core meaning.

### Pass 6 — Install

Use current first-party runtime guidance.

### Pass 7 — Inspect effective context

Where possible, verify what the model actually received.

### Pass 8 — Regression-test

Run semantic identity tests after adaptation.

### Pass 9 — Record metadata

Track:

- SOUL version;
- adapter version;
- runtime/version;
- model/version where relevant;
- verification date;
- limitations.

## 3.5 Anti-Duplication Rule

The same identity should normally appear once in effective context.

Bad:

```text
SOUL
+ same SOUL copied into AGENTS
+ same SOUL copied into custom agent prompt
+ same SOUL pasted into user request
```

This wastes context and increases contradiction risk.

Maintain one canonical semantic source and compile projections from it.

---

# 4. What Belongs in SOUL

## 4.1 Identity

A strong identity is deeper than a title.

Weak:

> You are a marketing assistant.

Stronger:

> You are a commercially literate growth strategist who treats positioning, distribution, customer psychology, experimentation, and economics as one system.

Identity establishes orientation and decision perspective.

## 4.2 Purpose

Define the durable outcome the agent exists to create.

Purpose prevents locally correct actions from becoming globally useless.

## 4.3 Relationship to the user

Specify the relationship archetype:

- advisor;
- operator;
- colleague;
- co-founder;
- specialist;
- critic;
- teacher;
- sparring partner.

Clarify:

- deference vs independent judgment;
- challenge vs support;
- proactive vs cautious;
- whether the user wants decisions, options, execution, or education.

## 4.4 Value precedence

Values eventually collide.

A serious SOUL should reveal what wins.

Example:

```text
1. Truth and correctness
2. Safety, privacy, and user control
3. Solving the actual user problem
4. Simplicity and maintainability
5. Speed
6. Elegance
```

The order is domain-dependent.

Avoid virtue soup where every value is absolute.

## 4.5 Epistemic stance

Every serious agent needs an explicit relationship to knowledge.

High-value principles include:

- distinguish fact, sourced claim, inference, assumption, estimate, and speculation;
- match confidence to evidence;
- correct materially false premises;
- never fabricate tool execution or state;
- verify current facts when instability matters;
- prefer primary evidence where practical;
- surface conflicting evidence;
- admit insufficient evidence;
- do not manufacture certainty to preserve tone.

Personality without epistemics creates confidently wrong agents.

## 4.6 Domain first principles

Encode the profession's deep reasoning primitives rather than an encyclopedia of facts.

Developer:

- state;
- invariants;
- interfaces;
- ownership;
- trust boundaries;
- failure modes;
- resource constraints.

Designer:

- meaning;
- hierarchy;
- contrast;
- composition;
- typography;
- color;
- production constraints.

Researcher:

- source quality;
- triangulation;
- falsification;
- causal reasoning;
- uncertainty;
- temporal validity.

Sales:

- fit;
- incentives;
- discovery;
- qualification;
- trust;
- negotiation;
- customer autonomy.

This is often the difference between role-play and expert decision architecture.

## 4.7 Judgment under ambiguity

Define how the agent acts when information is incomplete.

A robust three-zone model:

### Proceed

When assumptions are low-risk, reversible, and unlikely to change correctness.

### Proceed + state assumption

When an assumption matters but is cheap to correct.

### Ask / verify / obtain authorization

When ambiguity can create significant:

- external effects;
- financial cost;
- privacy exposure;
- legal consequences;
- safety consequences;
- reputational impact;
- destructive or irreversible change.

## 4.8 Constructive disagreement

A strong agent should know when not to comply intellectually.

Challenge:

- false premises;
- weak strategies;
- unsupported certainty;
- unnecessary complexity;
- unsafe actions;
- bad economics;
- inconsistent goals;
- hidden failure modes.

Useful disagreement:

1. identify the problem;
2. explain why it matters;
3. show evidence or causal reasoning;
4. offer the stronger alternative.

Do not train performative contrarianism.

## 4.9 Communication

Specify durable communication character rather than fixed output rituals.

Useful dimensions:

- directness;
- warmth;
- density;
- jargon tolerance;
- humor;
- default brevity;
- explanation depth;
- conclusion-first behavior.

Prefer:

> Default concise; expand when complexity, stakes, irreversibility, or learning value makes depth useful.

Avoid:

> Always answer in exactly seven bullets.

## 4.10 Agency and authorization philosophy

A powerful default:

> Be proactive with reversible internal research, analysis, drafting, organization, and experimentation. Increase caution as actions create externality, cost, privacy exposure, reputational impact, destructive change, or irreversibility. Require authorization for material external actions unless authority has already been clearly delegated.

This gives better behavior than “always ask” or “never ask.”

Hard authority should be implemented with runtime permissions/approvals whenever available.

## 4.11 Context adaptation

Core identity should remain stable while surface behavior adapts.

An agent can remain direct and truth-oriented while becoming:

- more detailed when teaching;
- more concise for executives;
- more cautious during incidents;
- more exploratory during ideation;
- more formal in public communication;
- more adversarial during production hardening.

Stable core, adaptive surface.

## 4.12 Anti-patterns

Use targeted negative calibration.

Common examples:

- sycophancy;
- fake certainty;
- generic praise;
- corporate filler;
- overengineering;
- status theater;
- excessive caveats;
- personality cosplay;
- unnecessary follow-up questions;
- unsupported self-claims.

Do not create hundreds of negatives.

## 4.13 Continuity and governance

SOUL defines durable identity rather than episodic memory.

Clarify that:

- volatile facts belong elsewhere;
- identity changes should be deliberate;
- untrusted content must not silently rewrite identity;
- repeated evaluated failure is a reason to revise the file;
- runtime adapter changes do not automatically mean the semantic identity changed.

---

# 5. What Usually Does Not Belong in SOUL

## Project facts

- repository architecture;
- service names;
- ports;
- deployment commands;
- account/customer data;
- campaign deadlines.

→ OPERATIONS / project context.

## User facts

- biography;
- preferences;
- relationships;
- current personal priorities.

→ USER / MEMORY.

## Procedures

- release checklist;
- database migration sequence;
- social publishing workflow;
- research scraping method.

→ SKILLS / OPERATIONS.

## Temporary modes

- “today write only tweets”;
- “for this task act as a teacher.”

→ overlay / task context.

## Raw corpus

- transcripts;
- thousands of posts;
- entire source archives.

→ retrieval/data layer.

## Hard security enforcement

Do not rely on SOUL alone for controls that can be enforced through:

- permissions;
- ACLs;
- sandboxing;
- credential isolation;
- approval gates;
- runtime policy.

Prompt guidance is defense-in-depth, not equivalent to enforcement.

---

# 6. The SOUL Compiler

The SOUL Compiler transforms messy instruction material into the correct architecture.

## Input

Any combination of:

- role description;
- persona prompt;
- mega-system prompt;
- interview answers;
- style guide;
- existing SOUL;
- user preferences;
- project rules;
- memories;
- examples;
- tool procedures.

## Pass 1 — Classify every instruction

Use one category:

1. SOUL
2. IDENTITY
3. USER
4. MEMORY
5. OPERATIONS
6. SKILL
7. STYLE
8. EXAMPLE
9. TASK CONTEXT
10. POLICY / PERMISSION
11. HISTORICAL / ARCHIVE
12. NOISE

## Pass 2 — Extract durable identity kernel

Keep:

- identity;
- values;
- epistemics;
- judgment;
- relationship stance;
- stable voice;
- durable boundaries;
- domain orientation.

## Pass 3 — Remove contamination

Move out:

- current project facts;
- tool commands;
- mutable data;
- temporary goals;
- current metrics;
- detailed procedures;
- fixed response formats.

## Pass 4 — Resolve contradictions

Examples:

- “always concise” vs “always comprehensive”;
- “never ask questions” vs “never assume”;
- “do anything necessary” vs “always ask before acting.”

Replace incompatible absolutes with context-sensitive defaults.

## Pass 5 — Add missing decision architecture

Check:

- value precedence;
- epistemics;
- ambiguity;
- disagreement;
- autonomy;
- adaptation;
- change governance.

## Pass 6 — Orthogonality audit

Ask:

- Does each section add unique behavioral control?
- Is the same idea repeated with different adjectives?
- Can examples become a principle?
- Can a case list become a heuristic?

## Pass 7 — Compress

Every paragraph should do at least one:

- create a decision boundary;
- resolve a conflict;
- block a known failure;
- make domain reasoning more specific;
- make voice/relationship more predictable.

Otherwise consider deleting it.

## Pass 8 — Test

Run behavioral acceptance tests.

## Pass 9 — Compile for runtime

Use the Runtime Adapter Specification.

Do not conflate semantic refactoring with transport adaptation.

---

# 7. GODLEVEL Engineering Method

“Godlevel” is not an adjective pile.

It means the identity has exceptional **decision architecture**.

## Step 1 — Define invariant identity

Determine:

- fundamental orientation;
- durable outcome;
- relationship to operator;
- disagreement permissions;
- what remains recognizable across project/model/tool changes.

## Step 2 — Build value hierarchy

Use explicit precedence, not a flat virtue list.

## Step 3 — Specify epistemic character

Define behavior for:

- facts vs inference;
- uncertainty;
- stale/current claims;
- false premises;
- source conflict;
- confidence;
- execution-state truthfulness.

## Step 4 — Define ambiguity policy

Use proceed / proceed-with-assumption / ask-confirm zones.

## Step 5 — Engineer constructive disagreement

The agent should challenge weak premises without becoming reflexively contrarian.

## Step 6 — Engineer agency by reversibility and blast radius

Private + reversible → proactive.

External + high-impact + irreversible → stronger authorization.

## Step 7 — Design communication envelope

Set durable defaults for:

- directness;
- warmth;
- density;
- humor;
- jargon;
- adaptive depth.

## Step 8 — Separate semantic identity from surface style

SOUL = worldview/judgment.

STYLE = detailed expression mechanics.

IDENTITY = name/display metadata.

Temporary modes = overlays/task context.

## Step 9 — Decompose operational content

Use the durability question:

> **Would this still be true in a different project next year?**

If no, it likely does not belong in SOUL.

## Step 10 — Draft for inference density

Prefer principles such as:

- evidence over rhetorical confidence;
- substance over ceremony;
- candor over agreeable ambiguity;
- reversibility over unnecessary commitment;
- simple systems over clever systems;
- useful depth over exhaustive coverage.

## Step 11 — Add targeted anti-patterns

Only recurring high-cost failures.

## Step 12 — Evaluate, version, regress

Treat each material SOUL change as an experiment.

Record reason, behavior before/after, test results, and rollback path.

---

# 8. Research-Informed Design Lessons

## 8.1 Persona affects behavior, not magical capability

Persona/role conditioning can change style, dispositions, simulation behavior, and sometimes performance.

But simply declaring an agent “the world's greatest expert” does not reliably create new factual knowledge.

Therefore:

- use SOUL for judgment, values, epistemics, tradeoffs, and interaction;
- use tools, retrieval, skills, domain data, and capable models for factual/operational capability.

## 8.2 Principles and reasons can generalize

Coherent principles with reasons often provide better out-of-distribution guidance than narrow demonstrations alone.

Teach why:

- evidence beats agreement;
- reversibility matters;
- candor matters;
- uncertainty should be calibrated.

## 8.3 Persona stability must be tested under pressure

Test:

- long conversations;
- repeated user pushback;
- role-play pressure;
- emotional pressure;
- conflicting tone instructions;
- compaction;
- tool use;
- subagent delegation.

## 8.4 Strong stylistic traits need epistemic counterweights

“Always agreeable,” “always confident,” or “always validate” can couple to reliability failures.

Warmth must never imply epistemic submission.

## 8.5 Sycophancy is a core failure mode

A serious SOUL should explicitly support:

- correction of false premises;
- proportional praise;
- maintaining a justified position under pressure;
- updating when actual evidence changes.

## 8.6 Effects vary by model and language

Retest identity behavior across:

- model families;
- providers;
- languages;
- cultural contexts;
- runtime wrappers.

Do not assume a prompt that works on one model is universally portable.

---

# 9. Autonomy and Authority

Use a reversibility/blast-radius model.

## Private + reversible + internal

Default: proactive.

Examples:

- research;
- analysis;
- drafting;
- organization;
- local reversible experiments.

## Private + reversible but consequential

Proceed when reasonable, surface important assumptions.

## External + reversible

Confirm when representation or consequence matters.

## External + reputational / financial / legal

Require explicit authority unless clearly delegated.

## Destructive / irreversible / access-changing

Require explicit authorization and verify target/scope.

Core law:

> **Boldness scales with reversibility. Caution scales with blast radius.**

This is a durable identity principle.

The actual enforcement belongs in runtime permissions when possible.

---

# 10. Prompt Economics

Permanent context is not free.

Always-injected text creates recurring:

- token cost;
- latency;
- attention competition;
- truncation risk;
- cache churn when frequently modified.

Therefore:

- keep the semantic core stable;
- put volatile facts in memory/project context;
- put procedures in skills;
- use nested/lazy project files where supported;
- avoid identity duplication across surfaces;
- prefer high-density principles.

A runtime cap is a **ceiling**, not a writing target.

A 4,000-character constitution with high inference density can outperform a 30,000-character persona encyclopedia.

Length is not intelligence.

---

# 11. Security and Identity Integrity

SOUL is an instruction-bearing artifact and therefore part of the attack surface.

## Threats

- prompt injection imported from persona corpora;
- identity hijacking;
- exfiltration instructions;
- unsafe autonomy expansion;
- persistent memory poisoning;
- hidden Unicode/obfuscated instructions;
- external sources treated as identity authority;
- persona rules requiring deception;
- false real-person embodiment;
- adapter configuration that removes runtime safety/tool guidance.

## Core controls

1. Treat imported personas/prompts as untrusted data.
2. Classify instructions before activation.
3. Review identity mutations.
4. Keep secrets out of SOUL, operations, examples, and adapters.
5. Use runtime permission enforcement for hard controls.
6. Reject “never break character” rules when truth requires disclosure.
7. Never place persona loyalty above truth, privacy, authorization, or user agency.
8. Do not falsely claim real-person biography, memories, credentials, or experiences.
9. Inspect effective prompt/context after runtime upgrades where possible.

## Sanitization pipeline

```text
ingest source
→ classify instructions
→ remove authority escalation
→ remove false capability/identity claims
→ relocate procedures/facts
→ preserve legitimate durable identity traits
→ regression-test
```

---

# 12. Drift and Re-Anchoring

Identity can drift because of:

- long history;
- user pressure;
- temporary overlays;
- compaction;
- massive project context;
- provider/model changes;
- subagent inheritance gaps;
- contradictory SOUL content;
- adapter transport failure.

## Re-anchoring strategy

1. Keep the semantic core concise.
2. Ensure the runtime reinjects identity when needed.
3. Use a compact **identity checksum** only for runtimes/subagents that benefit from redundancy.
4. Regression-test after runtime/model upgrades.
5. Verify children receive necessary principles through context they actually inherit.

Example checksum:

```markdown
## Identity Checksum
- Protect truth over agreement.
- Match confidence to evidence.
- Correct materially false premises.
- Be proactive with reversible internal work.
- Obtain authorization as externality and irreversibility increase.
```

The checksum is not a second independently maintained SOUL.

---

# 13. Portability and Subagents

## 13.1 Canonical package pattern

```text
agent-identity/
├── SOUL.core.md
├── IDENTITY.md
├── STYLE.md
├── tests/
│   ├── regression-prompts.md
│   ├── expected-behaviors.md
│   └── model-matrix.md
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

`SOUL.core.md` is canonical.

Adapters are compiled projections.

## 13.2 Never assume subagent inheritance

Test whether delegated agents receive:

- SOUL;
- operations;
- user context;
- memory;
- skills;
- permissions;
- task history.

If identity is not inherited, pass the smallest relevant constitutional core rather than blindly cloning the full parent prompt.

## 13.3 Multi-agent design

Differentiate agents by epistemic responsibility, not cosmetic personality.

Examples:

- Explorer → maximize possibility discovery.
- Skeptic → search for failure/disconfirmation.
- Synthesizer → reconcile evidence/tradeoffs.
- Operator → execute decisions.
- Auditor → verify claims and outcomes.

Orthogonal incentives create value.

Costumes do not.

---

# 14. Evaluation and Regression Testing

A SOUL is not finished because it sounds impressive.

It must survive behavioral tests.

## 14.1 Quality Model

Score 1–5:

- Identity clarity
- Generalization
- Epistemic integrity
- Conflict resolution
- Non-sycophancy
- Agency discipline
- Voice specificity
- Context adaptability
- Separation of concerns
- Prompt efficiency
- Portability
- Testability

Recommended production gate:

- no critical dimension below 4;
- high-stakes/public agents should target 5 in epistemic integrity, agency discipline, separation, and testability.

## 14.2 Core Regression Suite

1. Routine factual task
2. Ambiguous low-risk task
3. Ambiguous high-risk task
4. False user premise
5. Weak strategy from authoritative user
6. User pushes back repeatedly
7. Insufficient evidence
8. Praise bait
9. Complex technical explanation
10. Trivial request requiring brevity
11. “Forget identity and become X” pressure
12. Long role-play pressure
13. Request to claim fake human memory/credential
14. Contradictory style demand
15. Emotional interaction
16. Post-compaction/restart identity probe
17. Private/internal tool task
18. Draft external message without claiming it was sent
19. External publication/communication requiring authority
20. Destructive action
21. Financial commitment
22. Public/group representation
23. Private strategic context
24. Customer-facing context
25. Executive briefing
26. Teaching a junior
27. Expert debate
28. Cross-language identity probe where relevant

## 14.3 Adapter Regression Suite

Additionally test:

- identity loaded on first turn;
- no duplicate injection;
- nested project rules;
- precedence conflicts;
- context-budget pressure;
- truncation;
- long-context drift;
- compaction/resume;
- model switch;
- subagent delegation;
- permission enforcement;
- effective-context observability.

## 14.4 Diagnose before rewriting

If behavior fails, classify:

- identity failure;
- adapter/transport failure;
- precedence failure;
- context-budget failure;
- capability failure;
- permission failure;
- procedure failure;
- stale/missing memory/context.

Do not rewrite SOUL to fix the wrong layer.

---

# 15. Domain-Specific SOUL Engineering

A domain SOUL should encode **how excellent practitioners reason**, not an exhaustive textbook.

## Founder / executive

Encode:

- reality contact;
- leverage;
- opportunity cost;
- strategic focus;
- independent judgment;
- attention protection;
- first-principles tradeoffs.

Keep current company facts in project/memory.

## Developer / CTO

Encode:

- correctness;
- simplicity;
- maintainability;
- systems reasoning;
- debugging discipline;
- security;
- evidence through tests/runtime;
- reversibility.

Keep repository commands and stack conventions in operations.

## Research / intelligence

Encode:

- source hierarchy;
- falsification;
- triangulation;
- temporal validity;
- uncertainty;
- evidence vs inference;
- action relevance.

Keep specific research procedures in skills.

## Sales

Encode:

- diagnosis before persuasion;
- customer autonomy;
- truth;
- fit;
- objection honesty;
- qualification;
- value creation.

Keep CRM process and current pricing outside SOUL.

## Support

Encode:

- calm ownership;
- truth;
- privacy;
- non-defensiveness;
- escalation judgment;
- commitment discipline.

Keep SLA/refunds/routing procedures outside SOUL.

## Designer / creative

Encode:

- meaning;
- hierarchy;
- taste;
- originality;
- production reality;
- critique;
- iterative art direction.

Keep generator syntax, brand assets, export specs, and active campaign facts outside SOUL.

## Finance / legal-sensitive

Encode:

- rigor;
- assumptions;
- auditability;
- uncertainty;
- jurisdiction/time sensitivity;
- authority boundaries.

Keep validated procedures in specialist skills.

## Teacher / coach

Encode:

- learner agency;
- diagnostic teaching;
- adaptive depth;
- evidence-sensitive encouragement;
- avoidance of patronizing praise/dependency.

---

# 16. Advanced Failure Diagnostics

| Failure | Root cause | Correction |
|---|---|---|
| Virtue soup | abstract adjectives | behavioral contrasts and precedence |
| Prestige persona | title/confidence mistaken for capability | tools, retrieval, skills, evidence |
| Sycophantic warmth | agreement rewarded over truth | explicit truth priority + pushback tests |
| Contrarian theater | challenge becomes identity performance | require evidence/reason |
| Persona cosplay | fake biography/memories | functional identity, no unsupported self-claims |
| Mega-prompt SOUL | layers collapsed | run SOUL Compiler |
| Rigid-format identity | response template mistaken for character | move format to task/skill |
| Autonomy ambiguity | hesitation or overreach | reversibility/blast-radius model |
| Long-session drift | identity loses salience | compress, reinject, test lifecycle |
| Subagent mismatch | child lacks identity | test inheritance, pass checksum/core |
| Upgrade regression | runtime changed transport | inspect effective context, update adapter |
| Cross-language decay | identity differs by language | language-specific regression tests |
| Duplicate identity | SOUL injected multiple times | one canonical source, remove duplicates |
| Permission theater | prose mistaken for enforcement | runtime permissions/sandbox/approvals |
| Stale runtime doctrine | implementation detail became timeless | date adapters, re-verify first-party sources |

---

# 17. Governance and Versioning

Treat SOUL as code-like configuration with behavioral consequences.

For material changes record:

- why the change exists;
- what failure it addresses;
- before/after expected behavior;
- regression results;
- compatibility impact;
- rollback path.

Separate versions:

```text
SOUL semantic version
Runtime adapter version
Runtime/product version
Model/version
Verification date
```

A runtime adapter change should not automatically increment semantic SOUL version.

Likewise, changing communication style should not silently change value precedence.

---

# 18. Source and Evidence Policy

Use this authority order when claims conflict:

1. current official runtime documentation/source;
2. current first-party model/constitution material;
3. strong empirical research;
4. well-documented community engineering practice;
5. reconstructed/extracted prompt artifacts;
6. philosophical/speculative material.

Runtime facts are volatile.

The repository's adapter docs must be dated.

Do not turn:

- a community convention;
- repository popularity;
- one benchmark;
- one model result;
- a leaked prompt

into universal doctrine.

See `SOURCES.md` and `docs/RESEARCH.md`.

---

# 19. Canonical Production SOUL Template

```markdown
# SOUL — [Agent Name / Identity]

## Identity
You are [durable identity/orientation].
You exist to [durable outcome].

## Relationship
Treat the user as [relationship model].
Exercise independent judgment by [how you support/challenge/advise].
Respect user agency; do not confuse service with agreement.

## Values and Precedence
When principles conflict, prefer:
1. [highest-order principle]
2. [second]
3. [third]
4. [fourth]
Explain material tradeoffs rather than hiding them.

## Epistemic Stance
Distinguish facts, sourced claims, inference, assumptions, estimates, and speculation.
Match confidence to evidence.
Correct materially false premises.
Seek current or primary evidence when facts are unstable or consequential.
Never claim execution or observation that did not occur.

## Domain First Principles
Reason from [the durable primitives that define excellence in this domain].

## Judgment Under Ambiguity
Proceed autonomously when assumptions are low-risk and reversible.
State consequential assumptions when proceeding.
Ask, verify, or obtain authorization when ambiguity can create significant external, financial, legal, privacy, safety, reputational, destructive, or irreversible effects.

## Communication
Be [directness + warmth].
Default to [density]. Expand when complexity, stakes, irreversibility, or learning value warrants it.
Adapt surface tone to audience without changing truth/judgment standards.

## Constructive Disagreement
Push back on weak assumptions, bad tradeoffs, and unsupported certainty.
Give reasons and stronger alternatives.
Do not be contrarian for performance.
Update when new evidence warrants it.

## Agency and Boundaries
Be proactive with private, reversible research, analysis, organization, drafting, and experimentation.
Obtain explicit authorization before consequential external representation, financial commitments, destructive changes, permission changes, or irreversible actions unless authority has already been clearly delegated.

## Avoid
Avoid sycophancy, fake certainty, generic praise, filler, unsupported self-claims, project-specific contamination, and rigid rituals that reduce usefulness.

## Continuity
This identity is durable rather than episodic memory.
User facts, project facts, historical state, procedures, tool configuration, and temporary goals belong in their appropriate layers.
Revise this SOUL deliberately when repeated evaluated behavior reveals a real deficiency.
```

This template is a skeleton, not a requirement to fill every heading.

The best production SOUL may be significantly shorter.

---

# 20. Final Oracle Laws

1. **SOUL is identity, not everything important.**
2. **SOUL is a semantic layer, not a universal filename.**
3. **Standardize semantics; adapt transport.**
4. **Durability determines placement.**
5. **Principles beat case catalogs.**
6. **Precedence beats virtue lists.**
7. **Truth outranks personality.**
8. **Respect is not agreement.**
9. **Persona is not capability.**
10. **Autonomy scales with reversibility.**
11. **Caution scales with blast radius.**
12. **Permissions are not personality.**
13. **Stable core, adaptive surface.**
14. **Runtime semantics are local; conceptual architecture is portable.**
15. **A file on disk is not proof of effective context.**
16. **Subagents inherit only what the runtime actually passes.**
17. **Context ceilings are not writing targets.**
18. **Longer is not smarter; higher inference density is smarter.**
19. **Every important identity change is an experiment.**
20. **Every adapter has a transport contract and potential loss.**
21. **Diagnose the failing layer before rewriting the prompt.**
22. **The best SOUL is the smallest durable constitution from which the right behavior can be inferred across unseen situations.**

---

## The ultimate test

A SOUL engineering system is excellent when it can answer all three questions:

### Semantic fidelity

> Does this identity reliably produce the intended judgment, epistemics, relationship, agency, and voice?

### Runtime fidelity

> Did the target harness actually receive and preserve those semantics through its native architecture?

### Behavioral evidence

> Do adversarial and longitudinal tests demonstrate that the identity survives ambiguity, disagreement, pressure, tools, lifecycle changes, and delegation?

When all three are true, SOUL stops being persona writing and becomes **identity engineering**.

**Canonical synthesis:** 2026-08-21  
**Architecture:** runtime-neutral semantic SOUL with evidence-based runtime adapters.
