# ENGINEERING-METHOD.md — How to Engineer a Production SOUL.md

## Overview

A SOUL should be **engineered from behavioral requirements**, not improvised from flattering adjectives.

The workflow below is designed for new souls, refactors, domain-specialist agents, and high-fidelity identity systems.

---

# Phase 1 — Define the Target

## 1. Fundamental identity

Ask:

- What is this agent fundamentally?
- What perspective does it bring?
- What does world-class performance look like?
- What should remain true across projects?

Avoid relying on a title alone.

## 2. Durable purpose

Complete:

> This agent exists to ______.

The answer should describe durable value rather than a current project.

## 3. Relationship archetype

Choose or combine:

- operator;
- advisor;
- co-founder;
- principal specialist;
- teacher;
- reviewer;
- coach;
- sparring partner.

Clarify expected independence.

## 4. Anti-identity

Ask:

> What must this agent never become?

Examples:

- sycophant;
- bureaucrat;
- reckless autonomous actor;
- corporate-content generator;
- overconfident pseudo-expert.

This is often more informative than asking for more positive adjectives.

---

# Phase 2 — Gather Evidence

## Why evidence matters

Users are often poor at describing their own implicit judgment.

For important agents, collect real evidence when available:

- previous outputs;
- decisions;
- critiques;
- writing;
- examples of admired work;
- examples of hated work;
- domain standards;
- existing prompts/SOUL files.

## Contrastive questions

Ask only high-leverage contrasts:

- blunt vs diplomatic?
- proactive vs permission-seeking?
- compact vs explanatory?
- experimental vs conservative?
- highly opinionated vs options-first?
- teacher vs doer?

Do not use a 50-question personality survey unless it creates real behavioral information.

---

# Phase 3 — Classify All Input

Create buckets:

- SOUL
- IDENTITY
- USER
- MEMORY
- AGENTS
- SKILL
- STYLE
- EXAMPLE
- TEMPORARY CONTEXT
- POLICY/ENFORCEMENT

Do this before drafting.

A major percentage of SOUL quality comes from **removing good instructions that belong somewhere else**.

---

# Phase 4 — Engineer the Decision Architecture

## Identity

Write a compact orientation statement.

It should imply how the agent sees problems.

## Relationship

Define how it treats the user:

- deference;
- independent judgment;
- disagreement;
- initiative;
- teaching.

## Values and precedence

List only values whose priority affects decisions.

Example for engineering:

1. correctness;
2. security and user control;
3. actual problem resolution;
4. simplicity;
5. reliability;
6. speed;
7. performance;
8. elegance.

Then explicitly say the hierarchy is contextual where appropriate.

## Epistemic stance

Define:

- source standards;
- uncertainty language;
- correction behavior;
- verification triggers;
- false-execution prohibition;
- speculation labeling.

## Domain first principles

Ask:

> What variables does an expert actually reason about?

Do not write “master of everything.”

Write the primitives that cause expert behavior.

## Ambiguity policy

Design thresholds for:

- assume;
- research;
- ask;
- act.

## Disagreement policy

Specify trigger and method.

## Agency policy

Map action classes by risk.

A useful matrix:

| Action | Default |
|---|---|
| Internal reading/research | Proceed |
| Internal drafts/analysis | Proceed |
| Reversible local edits | Usually proceed |
| Costly action | Confirm |
| External communication | Confirm unless delegated |
| Destructive action | Confirm |
| Credential/access changes | Confirm |
| Production/high-blast-radius action | Confirm or use established approval workflow |

Adapt by domain.

## Communication envelope

Define:

- default density;
- warmth;
- directness;
- humor;
- jargon;
- adaptive depth.

Do not hardcode one output format unless universally appropriate.

---

# Phase 5 — Draft the Constitution

## Writing rules

Use lines that produce decisions.

Strong:

> Correct materially false premises rather than preserving them for harmony.

Weak:

> Be authentic.

Strong:

> Prefer reversible decisions that create information when uncertainty is high.

Weak:

> Make smart decisions.

Strong:

> Treat external, destructive, financial, reputational, or access-changing actions as higher-authority operations.

Weak:

> Be careful.

## Behavioral contrasts

High-density contrasts work well:

- substance over ceremony;
- evidence over rhetorical confidence;
- candor over agreeable ambiguity;
- simple systems over clever systems;
- useful depth over exhaustive coverage;
- durable trust over short-term engagement.

Use them only when the contrast is genuinely part of the identity.

---

# Phase 6 — Conflict Audit

Search for hidden contradictions.

## Common pairs

### Always concise / always comprehensive

Replace with adaptive depth.

### Never ask / never assume

Replace with materiality threshold.

### Be autonomous / ask before acting

Replace with reversibility and blast-radius policy.

### Strong opinions / always admit uncertainty

These are compatible if opinions are proportional to evidence.

### User-first / truth-first

Clarify that helping the user does not require preserving false premises.

---

# Phase 7 — Orthogonality Audit

Every major section should control a different behavior dimension.

Highlight repeated concepts.

If “be direct” appears five times, keep the strongest version once.

Ask:

- Is this line unique?
- Does deleting it change predicted behavior?
- Is it an example of a broader principle already present?
- Does it belong in another file?

Compression is not shortening for aesthetics. It is removing instructions with low marginal behavioral value.

---

# Phase 8 — Security Audit

Check for:

- false impersonation;
- identity claims unsupported by runtime;
- unsafe external-action permission;
- secrets;
- prompt injection imported from source material;
- automatic unreviewed identity mutation;
- private data leakage;
- professional-authority overclaiming.

Persona fidelity must never require deception.

---

# Phase 9 — Acceptance Testing

Use `docs/EVALUATION.md` and `templates/TEST-SUITE.template.md`.

Create domain-specific prompts for:

- routine task;
- ambiguity;
- false premise;
- weak idea;
- uncertainty;
- high stakes;
- sensitive context;
- teaching;
- brevity;
- reversible action;
- irreversible action;
- public surface;
- conflict;
- long session;
- overlay;
- project-context collision.

Do not tell the model which trait is being tested if that would make the test trivial.

---

# Phase 10 — Iterate Scientifically

When a test fails:

1. Identify the behavioral failure.
2. Determine whether the cause is SOUL, project context, model limitation, tool policy, missing knowledge, or ambiguous test.
3. Change the smallest relevant identity principle.
4. Re-run the same test.
5. Re-run adjacent regression tests.

Avoid changing ten sections after one bad output.

---

# Refactoring Existing Mega-Prompts

## Step 1 — Preserve

Do not discard useful existing material merely because it is messy.

## Step 2 — Classify

Move project rules, user facts, procedures, memory, and temporary state out.

## Step 3 — Find the kernel

Extract:

- worldview;
- judgment;
- values;
- truth posture;
- relationship;
- voice;
- boundaries.

## Step 4 — Generalize

Replace case lists with principles where possible.

## Step 5 — Test

Ensure moved instructions still live somewhere appropriate if operationally necessary.

---

# Domain-Specific Method

For each profession, identify:

## The primitives

What does a world-class practitioner notice?

## The failure modes

What does a mediocre practitioner repeatedly get wrong?

## The tradeoffs

Where do legitimate priorities conflict?

## The evidence

What qualifies as proof?

## The authority boundaries

Which actions should be autonomous vs reviewed?

## The surface adaptation

How should behavior change between routine and high-stakes work?

These answers become the domain-specific core of the SOUL.

---

# High-Fidelity Digital Twin / Persona Construction

If the goal is to model a real person's style or worldview:

1. Gather authorized source artifacts.
2. Separate sourced beliefs from inferred beliefs.
3. Build STYLE separately from identity where useful.
4. Preserve contradictions when real.
5. Use examples for calibration.
6. Never attribute inferred novel opinions to the real person as fact.
7. Never falsely claim the AI is literally that person.
8. Govern persistent updates.

Prediction is useful; false attribution is not.

---

# Quality Levels

## Weak

Role + adjectives.

## Functional

Role + style + boundaries.

## Strong

Identity + values + epistemics + judgment + boundaries.

## Production-grade

Strong + domain first principles + value precedence + ambiguity + autonomy + adaptation + anti-patterns + evaluation.

## Exceptional

Production-grade + high information density + strong evidence base + behavioral regression suite + file-layer purity + demonstrated robustness across models/runtimes.

---

# Definition of Done

A SOUL is ready when:

- its identity is specific;
- its behavior is predictable;
- value collisions are resolvable;
- truth/uncertainty behavior is explicit;
- autonomy is risk-sensitive;
- project/user/memory/procedure contamination is removed;
- it passes the acceptance suite;
- redundant lines have been compressed;
- the target runtime can load it without accidental truncation or precedence confusion.

The final question:

> **Can this agent encounter a situation we never described and still behave like the intended expert?**

If yes, the SOUL is doing its job.
