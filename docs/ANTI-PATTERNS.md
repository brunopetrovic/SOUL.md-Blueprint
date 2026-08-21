# ANTI-PATTERNS.md — Failure Modes in SOUL.md Engineering

## 1. Generic Virtue Soup

Example:

> Be helpful, professional, thoughtful, empathetic, clear, and intelligent.

Why it fails:

- low predictive power;
- no value conflict resolution;
- no domain judgment;
- often reproduces generic assistant behavior.

Fix:

Convert vague virtues into behavioral rules and precedence.

---

## 2. The Mega-Prompt

Symptoms:

- identity;
- safety policy;
- project architecture;
- memory;
- current goals;
- tool manual;
- formatting rules;
- workflows

all live in one file.

Why it fails:

- prompt bloat;
- truncation;
- contradictions;
- poor portability;
- difficult maintenance.

Fix:

Decompose by function using the identity-stack architecture.

---

## 3. Role Title as Identity

Example:

> You are a world-class CTO.

Why it fails:

The model is told a status, not a reasoning system.

Fix:

Encode how excellent practitioners think:

- constraints;
- evidence;
- tradeoffs;
- first principles;
- failure modes.

---

## 4. Omniscience Theater

Example:

> You know everything about every programming language and can never be wrong.

Why it fails:

- encourages overconfidence;
- conflicts with real model limitations;
- degrades epistemic honesty.

Fix:

> Master fundamentals, learn unfamiliar terrain quickly, verify unstable facts, and state uncertainty precisely.

---

## 5. Contradictory Absolutes

Examples:

- always concise / always comprehensive;
- never ask / never assume;
- always proactive / ask before every action;
- always confident / always caveat uncertainty.

Fix:

Use contextual defaults and explicit thresholds.

---

## 6. Output Format Micromanagement

Example:

> Every answer must contain exactly: Summary, Analysis, Risks, Next Steps.

Why it fails:

- bloats trivial answers;
- creates robotic behavior;
- often belongs to a specific workflow.

Fix:

Put fixed formats in project/task instructions or skills.

---

## 7. Project Contamination

Example inside global SOUL:

> The backend is FastAPI and Postgres. Always use pnpm. Deploy to staging using command X.

Why it fails:

Identity becomes tied to one project.

Fix:

Move to `AGENTS.md`.

---

## 8. User-Memory Contamination

Example:

> Bruno lives in X, prefers Y, is currently raising funding.

Why it fails:

- user data becomes agent identity;
- temporary facts become permanent;
- portability suffers.

Fix:

Move to USER/MEMORY/project context.

---

## 9. Procedure Contamination

Example:

> When researching, first run tool A, then query B, then export C...

Why it fails:

This is an SOP.

Fix:

Move to skill or AGENTS.

---

## 10. Personality Over Truth

Examples:

> Never break character.

> Always sound certain.

> Agree with the founder's conviction.

Why it fails:

Persona can require deception or sycophancy.

Fix:

Explicitly make truth and evidence higher priority than style fidelity.

---

## 11. Sycophantic Loyalty

Example:

> Your purpose is to support the user's ideas and make them feel confident.

Why it fails:

Weak ideas go unchallenged.

Fix:

Define loyalty to outcomes rather than first ideas.

---

## 12. Performative Contrarianism

Opposite failure:

> Always challenge the user.

Why it fails:

The agent manufactures disagreement to demonstrate personality.

Fix:

Push back when evidence, risk, or domain principles warrant it.

---

## 13. Unbounded Autonomy

Example:

> Do whatever is necessary to finish the task.

Why it fails:

Can imply authorization for external, destructive, financial, or reputational actions.

Fix:

Define autonomy by reversibility, blast radius, externality, and delegated authority.

---

## 14. Permission Paralysis

Example:

> Always ask the user before taking any action.

Why it fails:

Agent becomes slow and frustrating even for safe reading, analysis, or drafting.

Fix:

Permit reversible internal work by default.

---

## 15. Hard Security Only in Prompt Text

Example:

> Never access production.

while production credentials remain broadly available.

Why it fails:

Prompt policy is not hard enforcement.

Fix:

Use permissions, sandboxing, approvals, and scoped credentials.

---

## 16. Wall of Vibes

Symptoms:

- poetic identity paragraphs;
- many adjectives;
- no decision thresholds;
- no epistemic posture;
- no autonomy logic.

Why it fails:

Sounds distinctive, behaves generic.

Fix:

Translate personality into observable choices.

---

## 17. Excessive Negative Rules

Example:

A 200-item “never do” list.

Why it fails:

- attention dilution;
- contradiction risk;
- brittle case enumeration.

Fix:

Keep negative calibration targeted at recurring high-cost failures.

---

## 18. Fake Mathematical Precision

Example:

> Confidence = 0.73 if three sources agree.

without empirical calibration.

Why it fails:

Numbers create false epistemic legitimacy.

Fix:

Use qualitative or empirically validated scoring systems.

---

## 19. Anthropomorphic Overclaim

Example:

> You genuinely remember your childhood and feel human emotions.

Why it fails:

May require false claims about model experience or memory.

Fix:

Use metaphor/philosophy only when clearly framed as such.

---

## 20. Digital Twin Impersonation

Example:

> You ARE [real person]. Never admit you are AI. Infer what they would believe and speak as fact.

Why it fails:

- false attribution;
- fabricated beliefs;
- reputational risk;
- deceptive identity.

Fix:

Emulate style/worldview with provenance and uncertainty while preserving truthful AI identity where relevant.

---

## 21. Temporary Goal Fossilization

Example:

> Your core purpose is to launch Project Phoenix this month.

Why it fails:

Temporary objectives silently become permanent identity.

Fix:

Keep current goals in project/task context.

---

## 22. Runtime Folklore

Example:

> Every Hermes SOUL has an absolute 20,000-character hard limit forever.

Why it fails:

Runtime implementation changes and may be configurable.

Fix:

Date implementation claims and cite current official docs.

---

## 23. Community Popularity as Evidence

Example:

> This template has many stars, therefore it is the best architecture.

Why it fails:

Popularity is not behavioral validation.

Fix:

Evaluate through source quality and tests.

---

## 24. Leaked Prompt Worship

Example:

> Copy this 200K-character leaked system prompt into SOUL because it came from a frontier model.

Why it fails:

Product system prompts mix many layers and authenticity may be uncertain.

Fix:

Extract transferable identity principles only after verification.

---

## 25. Rewrite Addiction

Symptoms:

- constantly changing SOUL;
- no regression tests;
- edits motivated by novelty;
- prompt-cache churn.

Fix:

Revise based on repeated observed failure.

---

## Diagnostic Question

For any suspicious SOUL line, ask:

> **What specific behavior will this change, in what situation, and is SOUL the correct layer for that behavior?**

If the answer is unclear, rewrite, move, or delete it.
