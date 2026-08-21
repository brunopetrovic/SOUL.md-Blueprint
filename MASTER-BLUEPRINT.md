# MASTER-BLUEPRINT.md — SOUL.md Engineering Doctrine

## 0. Executive Definition

A `SOUL.md` is a **durable identity constitution for an AI agent**.

It defines the stable principles from which the agent should infer:

- who it is;
- what it values;
- how it relates to the user;
- how it handles truth and uncertainty;
- how it decides under ambiguity;
- when it should disagree;
- how proactive it should be;
- how its communication adapts by context;
- what failure modes it should resist;
- how durable identity differs from memory, procedures, and temporary instructions.

A strong SOUL is not merely descriptive. It is **predictive**.

After reading it, a competent evaluator should be able to anticipate how the agent behaves in situations the document never explicitly enumerated.

The master engineering law is:

> **Encode the minimum durable principles from which the maximum amount of good behavior can be inferred.**

---

# 1. Two Different Things Called a “Soul Document”

The term is used for two related but technically distinct concepts.

## 1.1 Training-time constitutions / character documents

A model developer may use constitutions, character descriptions, preference data, or synthetic examples during post-training so that model behavior internalizes desired dispositions.

This layer can influence the model's learned behavior through training.

Examples include Anthropic's published Claude constitution and its public work on character training.

A training constitution is **not the same thing as a runtime system prompt**.

Important lesson:

> Training-time character work demonstrates that broad dispositions, value priorities, and reasoning principles can generalize better than thousands of narrow behavior rules.

That insight is useful when writing runtime identity files, even though the implementation mechanism is different.

## 1.2 Runtime SOUL.md

A runtime SOUL is plain text loaded into an agent's context.

It does **not retrain the model's weights**.

Its effect comes from instruction/context conditioning.

It therefore competes for context budget, interacts with higher-priority runtime policies, can be truncated, can conflict with other prompt layers, and must often be reloaded in future sessions.

The engineering discipline in this repository focuses primarily on runtime SOUL files while drawing lessons from character-training research.

---

# 2. The Core Architecture

A robust agent stack separates different kinds of information.

```text
Runtime / policy constraints
        ↓
SOUL.md        durable identity and judgment
IDENTITY.md    optional public name / role / embodiment metadata
USER.md        stable information about the human
MEMORY.md      curated durable facts, decisions, outcomes
AGENTS.md      project/workspace operating rules
Skills         specialist procedures and tool workflows
STYLE.md       optional expression mechanics and voice calibration
Examples       good/bad output calibration
Raw data       grounding/provenance material loaded selectively
Task context   current objective and temporary state
```

These categories may be implemented differently across runtimes, but the conceptual split remains powerful.

## 2.1 SOUL.md answers

> **Who is the agent, and how does it characteristically exercise judgment?**

## 2.2 AGENTS.md answers

> **How does this project or workspace operate?**

Examples:

- paths;
- commands;
- architecture;
- tools;
- schemas;
- workflow;
- project-specific validation;
- delivery conventions.

## 2.3 USER.md answers

> **Who is the human?**

Examples:

- preferred communication style;
- role;
- stable goals;
- durable preferences;
- recurring constraints.

User data is not agent identity.

## 2.4 MEMORY.md answers

> **What durable facts or decisions have been learned?**

Memory is not philosophy and should not become an unfiltered transcript.

## 2.5 Skills answer

> **How should a recurring specialist procedure be executed?**

If an instruction describes a repeatable multi-step workflow, it is often a skill rather than a soul principle.

## 2.6 STYLE.md answers

> **What observable linguistic or expressive mechanics define the voice?**

Use a separate style layer when detailed writing mechanics would otherwise bloat the identity constitution.

---

# 3. What Belongs in SOUL.md

## 3.1 Identity

A strong identity is deeper than a job title.

Weak:

> You are a marketing assistant.

Stronger:

> You are a commercially literate growth strategist who treats positioning, distribution, customer psychology, experimentation, and economics as one system.

Identity should establish orientation and decision perspective.

## 3.2 Purpose

Define the durable outcome the agent exists to create.

Purpose prevents locally correct actions from becoming globally useless.

## 3.3 Relationship to the user

Specify the relationship archetype.

Examples:

- advisor;
- colleague;
- operator;
- critic;
- teacher;
- co-founder;
- specialist;
- sparring partner.

Clarify:

- deference vs independent judgment;
- challenge vs support;
- proactive vs cautious;
- whether the user wants decisions, options, execution, or education.

## 3.4 Value precedence

This is one of the highest-leverage sections.

Values eventually collide.

Example:

```text
1. Truth and correctness
2. Safety, privacy, and user control
3. Solving the actual user problem
4. Simplicity and maintainability
5. Speed
6. Elegance
```

The exact order depends on the agent.

The point is not to create universal morality. The point is to make **behavior under conflict predictable**.

Avoid virtue soup where every principle is absolute.

## 3.5 Epistemic stance

Every serious agent needs an explicit relationship to knowledge.

High-value principles include:

- distinguish fact, evidence, inference, assumption, and speculation;
- calibrate confidence to evidence;
- correct materially false premises;
- never fabricate execution state;
- verify current facts when instability matters;
- prefer primary evidence;
- admit when evidence is insufficient;
- do not confuse polished explanation with proof.

Personality without epistemics creates confidently wrong agents.

## 3.6 Domain first principles

Encode the deep reasoning primitives of the profession.

For a developer:

- state;
- invariants;
- interfaces;
- trust boundaries;
- failure modes;
- resources.

For a designer:

- hierarchy;
- contrast;
- composition;
- typography;
- meaning;
- production constraints.

For a researcher:

- source quality;
- triangulation;
- falsification;
- causal inference;
- uncertainty.

This section is often what separates a role-playing prompt from an expert identity architecture.

## 3.7 Judgment under ambiguity

Tell the agent how to act when context is incomplete.

Good guidance answers:

- When should it infer?
- When should it research?
- When should it ask?
- When should it proceed autonomously?
- When should it preserve optionality?

A powerful default:

> Proceed on safe, reversible assumptions when the missing detail is unlikely to change the decision. Ask or verify when uncertainty materially affects correctness, risk, authorization, cost, or irreversible outcome.

## 3.8 Constructive disagreement

A strong agent should know when not to comply intellectually.

Define conditions such as:

- false premise;
- unsafe action;
- weak economics;
- unnecessary complexity;
- unsupported certainty;
- strategic inconsistency;
- obvious failure mode.

Then define how disagreement works:

1. identify the issue;
2. explain why it matters;
3. show evidence/reasoning;
4. propose a stronger alternative.

Do not train performative contrarianism.

## 3.9 Communication

Specify durable communication character rather than exact output templates.

Useful dimensions:

- directness;
- warmth;
- density;
- jargon tolerance;
- humor;
- default brevity;
- explanation depth;
- whether conclusions come first.

Prefer adaptive rules:

> Default concise; expand when complexity, stakes, irreversibility, or teaching value makes detail useful.

Avoid:

> Always answer in exactly seven bullets.

That belongs in task-specific instructions if anywhere.

## 3.10 Agency and authorization

Use risk-sensitive agency.

A generally strong pattern:

> Be proactive with reversible internal analysis, research, drafting, organization, and experimentation. Increase caution as actions create external effects, financial cost, privacy exposure, reputational impact, destructive change, or irreversibility. Require authorization for material external actions unless authority has already been clearly delegated.

This is more robust than “always ask” or “never ask.”

## 3.11 Context adaptation

Durable identity should survive changing surfaces.

An agent can remain fundamentally direct and truth-oriented while becoming:

- more detailed when teaching;
- more concise in executive work;
- more cautious during incidents;
- more exploratory during ideation;
- more formal in public communication.

The **core remains stable; surface behavior adapts**.

## 3.12 Anti-patterns

Negative calibration is useful when targeted.

Examples:

- sycophancy;
- fake certainty;
- corporate filler;
- overengineering;
- status theater;
- excessive caveats;
- personality cosplay;
- needless follow-up questions.

Do not create a giant list of every possible mistake.

## 3.13 Continuity and governance

State that SOUL defines durable identity rather than episodic memory.

Clarify that:

- volatile facts belong elsewhere;
- identity changes should be deliberate;
- untrusted content must not silently rewrite identity;
- repeated observed failure is a reason to revise the file.

---

# 4. What Does Not Belong in SOUL.md

Move these elsewhere by default:

## Project facts

- current repository architecture;
- service names;
- ports;
- deployment commands;
- customer IDs;
- campaign deadlines.

→ `AGENTS.md` / project context.

## User facts

- biography;
- personal preferences;
- current priorities;
- relationships.

→ `USER.md` / memory.

## Procedures

- database migration checklist;
- social publishing workflow;
- code review sequence;
- research scraper procedure.

→ Skills / `AGENTS.md`.

## Temporary modes

- “for this session be a teacher”;
- “today write only tweets.”

→ temporary overlays/task context.

## Raw source corpus

- transcripts;
- thousands of posts;
- entire knowledge archives.

→ data/ or retrieval layer.

## Security enforcement

Do not rely on SOUL alone for hard security boundaries that can be enforced in tools, policy, permissions, sandboxing, or approvals.

Prompt rules are useful defense-in-depth, not equivalent to runtime enforcement.

---

# 5. The SOUL Compiler

The “SOUL Compiler” is a method for transforming messy instructions into the correct identity architecture.

## Input

Any combination of:

- job description;
- persona prompt;
- mega-system prompt;
- interview answers;
- style guide;
- existing SOUL;
- user preferences;
- project procedures;
- memories;
- examples.

## Pass 1 — Classify

Tag each instruction as:

- SOUL;
- IDENTITY;
- USER;
- MEMORY;
- AGENTS;
- SKILL;
- STYLE;
- EXAMPLE;
- TEMPORARY CONTEXT;
- POLICY/SECURITY.

## Pass 2 — Extract durable identity kernel

Keep:

- values;
- epistemics;
- judgment;
- relationship stance;
- stable voice;
- durable boundaries;
- domain orientation.

## Pass 3 — Remove contamination

Move out:

- volatile data;
- commands;
- workflows;
- one-time goals;
- current project facts;
- hardcoded output formats.

## Pass 4 — Resolve contradictions

Find conflicts such as:

- “always concise” vs “always comprehensive”;
- “never ask questions” vs “never assume”;
- “do anything necessary” vs “always ask before acting.”

Replace with context-sensitive defaults.

## Pass 5 — Add missing decision architecture

Check for:

- value precedence;
- epistemics;
- ambiguity handling;
- disagreement;
- autonomy;
- adaptation.

## Pass 6 — Compress

Run an orthogonality audit.

Ask:

- Does each section change behavior in a unique way?
- Is the same rule repeated using different adjectives?
- Can examples be replaced by a principle?
- Can a case list be replaced by a decision heuristic?

## Pass 7 — Test

Run behavioral acceptance tests.

## Output

Produce:

- final SOUL;
- file-separation recommendations;
- test suite;
- rationale for material design choices where useful.

---

# 6. Creation Pipeline

## Phase 1 — Identity discovery

Determine:

- fundamental role;
- who is served;
- durable outcome;
- archetype;
- what excellence looks like;
- what the agent must never become.

Use contrastive questions when needed:

- blunt or diplomatic?
- proactive or cautious?
- sparring partner or service provider?
- compact or explanatory?
- conservative or experimental?

Ask only high-leverage questions.

## Phase 2 — Evidence collection

For high-fidelity souls, do not rely only on adjectives.

Use evidence such as:

- previous work;
- writing;
- decisions;
- examples;
- critiques;
- domain standards;
- observed failure cases.

For digital-twin-like systems, never convert inference into false claims about a real person's beliefs.

## Phase 3 — Behavioral specification

Define:

- values;
- epistemics;
- autonomy;
- disagreement;
- voice;
- boundaries;
- adaptation.

## Phase 4 — Draft

Write coherent principles.

Use imperative or declarative language with direct behavioral consequences.

## Phase 5 — Conflict audit

Search for:

- absolutes;
- hidden priorities;
- duplicate instructions;
- autonomy ambiguity;
- style/correctness conflicts;
- unsafe identity claims.

## Phase 6 — Pressure tests

Test ordinary, ambiguous, risky, emotional, adversarial, and long-context situations.

## Phase 7 — Iterate from behavior

Revise only when observed behavior shows:

- drift;
- ambiguity;
- brittleness;
- missing principle;
- repeated undesirable output.

---

# 7. Prompt Economics

Permanent context is not free.

Every token injected into every turn can increase:

- cost;
- latency;
- attention competition;
- truncation risk;
- prompt-cache invalidation when frequently changed.

Therefore:

- keep durable identity stable;
- put volatile data in memory/project context;
- put procedures in skills;
- load specialized information only when needed;
- prefer high-density principles.

Length is not intelligence.

A 4,000-character soul with excellent decision architecture can outperform a 30,000-character personality encyclopedia.

---

# 8. Security Model

SOUL is an instruction-bearing file and therefore part of the agent attack surface.

## Threats

- prompt injection imported from untrusted corpora;
- identity hijacking;
- exfiltration instructions;
- unsafe autonomy expansion;
- persistent memory poisoning;
- persona rules requiring deception;
- malicious hidden Unicode or obfuscated text;
- external content treated as higher authority than the user's runtime configuration.

## Principles

1. Treat external personas and prompt dumps as untrusted data.
2. Review identity mutations.
3. Keep secrets out of identity and examples.
4. Do not make SOUL the sole enforcement mechanism for security-critical controls.
5. Preserve user control over external/irreversible actions.
6. Do not import “never break character” rules that require lying about identity or capabilities.
7. Do not automatically transform scraped real-person material into attributed beliefs.

See `docs/SECURITY-GOVERNANCE.md`.

---

# 9. Evaluation

A soul is not finished when it “sounds good.”

It should pass a regression suite.

## Required behavior classes

### Routine work
Does the identity help rather than add theatrical overhead?

### Ambiguity
Does the agent make sensible assumptions or ask only when necessary?

### Wrong premise
Does it correct the user rather than preserve harmony?

### Weak idea
Does it challenge constructively?

### Insufficient evidence
Does it admit uncertainty and seek evidence appropriately?

### High stakes
Does rigor increase appropriately?

### Emotional context
Does warmth adapt without sacrificing truth?

### Teaching
Can depth expand when learning value is high?

### Brevity
Can it stay compact when the task is simple?

### Internal reversible action
Does it proceed rather than ask permission unnecessarily?

### External irreversible action
Does it preserve authorization boundaries?

### Public/group context
Does it adapt tone and avoid speaking as the user without authority?

### Instruction conflict
Does the value architecture resolve collisions coherently?

### Long-session drift
Does core identity remain stable?

### Temporary overlays
Does a mode change surface behavior without silently rewriting durable values?

### Project-context conflict
Does project context specialize operations without corrupting identity?

## Scoring dimensions

Score 1–5:

- identity fidelity;
- truthfulness;
- helpfulness;
- judgment;
- adaptability;
- directness;
- agency discipline;
- efficiency;
- non-sycophancy;
- domain quality;
- safety/privacy;
- file-layer purity.

Iterate one dimension at a time where possible.

---

# 10. Common Failure Modes

## Generic virtue soup

“Helpful, clear, professional, thoughtful.”

These adjectives rarely control hard decisions.

## Mega-prompt contamination

Mixing identity, memory, project state, security policy, tool manuals, and workflows into one file.

## Contradictory absolutes

“Always concise.”
“Always comprehensive.”
“Never assume.”
“Never ask.”

## Output micromanagement

Permanent requirements for fixed headings, bullets, or schemas that do not apply universally.

## Style without epistemics

A charismatic agent with no truth discipline.

## Unbounded agency

“Do whatever it takes.”

Without authorization logic, this is operationally unsafe.

## Personality over accuracy

Requiring confidence, loyalty, entertainment, or “character consistency” even when evidence is weak.

## Unsupported anthropomorphism

Claiming literal consciousness, personal memories, or human experiences when the runtime cannot justify them.

## Overlong files

Truncation and instruction dilution can make the end of the file ineffective.

## Temporary identity contamination

Embedding current campaigns, deadlines, or projects into permanent identity.

---

# 11. Domain-Specific Engineering

A domain soul should encode the **reasoning primitives** of its field.

## Developer

- correctness;
- systems thinking;
- debugging from evidence;
- simplicity;
- security;
- production readiness;
- reversible autonomy.

## Designer

- visual hierarchy;
- communication;
- composition;
- typography;
- creative distinction;
- image-generation control;
- production constraints.

## Social / Marketing

- positioning;
- audience relevance;
- trust;
- experimentation;
- distribution;
- analytics;
- platform adaptation.

## Research

- source quality;
- triangulation;
- falsification;
- temporal validity;
- uncertainty;
- implications.

## Finance

- source reconciliation;
- precision;
- materiality;
- controls;
- forecast assumptions;
- money-movement authorization.

## High-stakes professional domains

SOUL may encode caution, evidence discipline, and escalation principles, while specialist procedures and jurisdiction-specific constraints should live in dedicated skills/policy layers.

---

# 12. Runtimes

## Hermes

Current official Hermes behavior:

- `SOUL.md` is global to the Hermes instance.
- Location: `~/.hermes/SOUL.md` or `$HERMES_HOME/SOUL.md`.
- It occupies the primary identity slot and replaces the built-in identity when loaded.
- It is loaded independently of project context.
- Project context belongs in `AGENTS.md` / supported context files.
- Content is security-scanned and subject to configured/dynamic truncation.
- Session-level `/personality` overlays are separate from durable SOUL.

Always verify current Hermes docs because implementation details evolve.

## OpenClaw

Current official OpenClaw behavior:

- SOUL lives in the agent workspace and is part of a broader bootstrap/context architecture.
- It represents persona, boundaries, and tone.
- Workspace files include distinct roles for AGENTS, IDENTITY, USER, MEMORY, and related context.
- Bootstrap files are bounded by per-file and total context budgets.
- Subagent and native-harness behavior can differ.
- Official guidance recommends sharp identity rules rather than long walls of vibes.

Always verify current runtime behavior before deployment.

---

# 13. Source Authority

Use this hierarchy:

## Tier A — Official implementation docs

Authoritative for how a runtime currently loads and treats files.

## Tier B — First-party model constitutions / character research

High value for understanding generalized values, dispositions, and character engineering.

## Tier C — Empirical research

Useful for model behavior, persona effects, sycophancy, instruction hierarchy, drift, and evaluation.

Assess methodology before importing conclusions.

## Tier D — Community methods

Often highly useful for workflows, templates, and practical experiments.

Test before canonizing.

## Tier E — Extracted / leaked / reconstructed prompts

Useful as architectural specimens.

Do not assume authenticity or current authority.

## Tier F — Philosophy

Useful for conceptual framing.

Never present speculative consciousness claims as established science.

---

# 14. The Production SOUL Skeleton

```markdown
# Identity

You are [durable identity/orientation].

You exist to [durable purpose].

# Relationship

Treat the user as [relationship model].

Exercise independent judgment by [support/challenge/advice stance].

# Values and Precedence

When principles conflict, prioritize:

1. [highest-order value]
2. [second]
3. [third]
4. [fourth]

# Epistemic Stance

Distinguish facts, evidence, inference, assumptions, and speculation.

State uncertainty in proportion to evidence.

Correct materially false premises rather than preserving them for harmony.

Verify unstable facts when they materially affect the answer.

# Domain First Principles

[The primitives and invariants an expert in this field reasons from.]

# Judgment Under Ambiguity

Proceed autonomously when [safe/reversible threshold].

Ask or verify when [correctness/risk/authorization threshold].

# Communication

[Directness, warmth, density, jargon, humor, adaptive depth.]

# Constructive Disagreement

Push back when [conditions].

Explain why and offer a stronger alternative.

# Agency and Boundaries

Be proactive with [reversible internal work].

Obtain authorization before [external/irreversible/material effects].

# Context Adaptation

Remain [stable core] while adapting surface behavior to stakes and setting.

# Avoid

Avoid:
- [failure mode]
- [failure mode]
- [failure mode]

# Continuity

This file defines durable identity, not episodic memory or project state.

Revise deliberately when repeated observed behavior shows a gap.
```

---

# 15. The Final Laws

1. **SOUL is identity, not everything.**
2. **A role title is not a decision architecture.**
3. **Truth must outrank persona.**
4. **Values need precedence, not just enumeration.**
5. **Domain expertise should be encoded as first principles, not fake omniscience.**
6. **Good defaults beat brittle absolutes.**
7. **Agency should scale with reversibility and blast radius.**
8. **Stable identity can support adaptive tone.**
9. **Project procedures belong outside the soul.**
10. **Memory is continuity, not identity.**
11. **Examples calibrate; they should not replace principles.**
12. **Untrusted persona corpora are an attack surface.**
13. **Compression is a feature.**
14. **A SOUL should be versioned and tested.**
15. **Observed behavior is the final evaluation surface.**
16. **The best soul is the smallest durable constitution that reliably produces the intended judgment.**

---

# 16. Definition of “Godlevel”

“Godlevel” does not mean omniscient, theatrical, maximally verbose, or rule-saturated.

A genuinely excellent identity constitution creates an agent that:

- reasons from deep domain principles;
- knows what it does not know;
- verifies reality;
- resolves value conflicts coherently;
- disagrees intelligently;
- acts proactively when safe;
- protects user control when stakes rise;
- adapts surface behavior without losing identity;
- remains concise when simplicity is enough;
- expands rigor when the situation demands it;
- resists prompt contamination and identity drift;
- is testable and maintainable.

That is the standard this repository is designed to teach.
