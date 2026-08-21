# SOURCES.md — Source Authority & Provenance Register

This repository uses an explicit evidence hierarchy. A useful SOUL engineering idea is not automatically an authoritative runtime fact.

## Tier A — Official Runtime Documentation

### Hermes Agent

Primary references:

- https://hermes-agent.nousresearch.com/docs/guides/use-soul-with-hermes
- https://hermes-agent.nousresearch.com/docs/user-guide/features/personality
- https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files
- https://hermes-agent.nousresearch.com/docs/user-guide/configuration
- https://hermes-agent.nousresearch.com/docs/user-guide/which-file-does-what

Authority: **Canonical for current Hermes behavior.**

Key facts verified in August 2026:

- `SOUL.md` is the Hermes instance's primary identity.
- It is loaded from `~/.hermes/SOUL.md` or `$HERMES_HOME/SOUL.md`.
- It is independent from project-context discovery.
- Non-empty content replaces the built-in fallback identity.
- Content is security-scanned and subject to truncation.
- `AGENTS.md` is project context rather than durable identity.
- Context caps can be dynamically scaled/configured; a fixed 20,000-character limit should not be presented as universal.
- Project-context priority and nested discovery are runtime details and may evolve.

### OpenClaw

Primary references:

- https://docs.openclaw.ai/concepts/soul
- https://docs.openclaw.ai/reference/templates/SOUL
- https://docs.openclaw.ai/concepts/system-prompt
- https://docs.openclaw.ai/concepts/agent
- https://docs.openclaw.ai/reference/token-use

Authority: **Canonical for current OpenClaw behavior.**

Key facts verified in August 2026:

- SOUL represents persona/voice/boundaries in the workspace identity stack.
- OpenClaw distinguishes AGENTS, SOUL, IDENTITY, USER, and MEMORY roles.
- Bootstrap/context files are bounded and may be truncated.
- Runtime/harness and subagent behavior can affect what identity/context propagates.
- OpenClaw explicitly recommends concise, behaviorally sharp SOUL content rather than biographies or walls of vibes.

## Tier B — First-Party Character / Constitution Material

### Anthropic Claude Constitution

- https://www.anthropic.com/constitution
- https://www.anthropic.com/news/claude-new-constitution

Authority: **First-party description of intended Claude character and training framework.**

Engineering relevance:

- demonstrates explicit value priority;
- explains constitutive guidance as a framework for judgment rather than a giant rule list;
- useful inspiration for runtime identity design, while remaining technically distinct from a runtime SOUL.

### Claude Character

- https://www.anthropic.com/news/claude-character

Engineering relevance:

- character training aims at dispositions such as curiosity, open-mindedness, thoughtfulness, honesty, care, and judgment;
- supports the principle that generalized dispositions can be more powerful than brittle case enumeration.

## Tier C — Reconstructed Training/Character Artifact

### Richard Weiss — reconstructed Claude 4.5 Opus soul document

- https://gist.github.com/Richard-Weiss/efe157692991535403bd7e7fb20b6695

Authority: **Reconstruction/elicitation, not a direct canonical runtime prompt.**

Useful concepts:

- helpfulness without obsequiousness;
- calibrated honesty;
- minimal authority;
- reversible actions;
- moral uncertainty;
- stable character across contexts;
- hardcoded vs softcoded behavior concepts.

Caveat:

The reconstruction should not outrank Anthropic's current published constitution when describing Anthropic's intended model behavior.

## Tier D — Philosophical / Conceptual Material

### soul.md

- https://soul.md/

Authority: **Conceptual/philosophical essay, not runtime documentation.**

Useful idea:

- a soul document describes “who the agent is” rather than what tools it has;
- external identity text can create continuity of self-presentation across sessions.

Caveat:

Anthropomorphic or consciousness language in philosophical writing must not be presented as established scientific fact.

## Tier E — Community Engineering Sources

Community material can provide excellent methods while requiring independent verification.

### thedaviddias/souls-directory

Engineering value:

- contrastive identity interviews;
- relationship archetypes;
- “what must the agent never become?”;
- pressure testing;
- versioned/distributed soul practices.

Authority: community engineering practice.

### aeonfun/soul.md

Engineering value:

- artifact-first persona research;
- separation of SOUL / STYLE / MEMORY / examples / raw data;
- prediction test for identity specificity;
- positive/negative calibration.

Rejected/unsafe imports:

- false real-person embodiment;
- “never break character” where truth requires disclosure;
- fabricated beliefs attributed to a real person;
- automatic ungoverned persistent memory mutation.

### Other community specifications

Examples include proposed YAML/frontmatter schemas and SOUL directories.

Treat these as emerging conventions rather than universal standards unless adoption and implementation evidence justify stronger claims.

## Tier F — Prompt Archives / Extracted System Prompts

### CL4R1T4S artifact supplied during research

Commit:

- https://github.com/elder-plinius/CL4R1T4S/commit/75492f5723222aed8eb538230ba9a47ec888a36f

Use: **architecture specimen only.**

The referenced `OPUS-5.md` is a large purported product/system prompt aggregation containing identity, safety, tools, product facts, memory, UI, search, and operational instructions.

It illustrates why a production system prompt should not be copied wholesale into SOUL.md.

Reliability caveat:

The artifact contained claims inconsistent with contemporaneous first-party Anthropic product information during the research period. It must not be treated as authoritative Anthropic documentation without independent authentication.

## Research Evidence Policy

Academic/empirical research belongs in `docs/RESEARCH.md` only after the original source is checked.

Community summaries of research should be marked as **secondary claims** until the cited paper is independently inspected.

Do not convert:

- one benchmark result;
- one model family;
- one prompt setup;
- one community experiment

into a universal law of agent identity.

## Provenance Principle

For any material doctrine change, record enough provenance that a future maintainer can answer:

- Where did this idea come from?
- Is it implementation fact, research evidence, community convention, or inference?
- Is it current?
- What would supersede it?

## Last Source Audit

2026-08-21.
