# SOURCES.md — Source Authority & Provenance Register

This repository uses an explicit evidence hierarchy. A useful SOUL engineering idea is not automatically an authoritative runtime fact.

## Source Authority Rule

When runtime behavior matters, current first-party documentation or source wins.

Runtime adapters are **dated engineering references**, not eternal specifications. Paths, precedence, limits, context assembly, subagent inheritance, permissions, and product features can change.

If a current first-party source conflicts with a dated adapter in this repository:

1. trust the current first-party source;
2. treat the adapter as stale;
3. update the adapter and verification date;
4. do not rewrite timeless SOUL doctrine unless the semantic principle itself changed.

---

# Tier A — Official Runtime Documentation and Source

## Hermes Agent

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
- Content is security-scanned and subject to runtime context limits/truncation.
- `AGENTS.md` is project context rather than durable identity.
- Context caps can be dynamically scaled/configured; a fixed 20,000-character limit should not be presented as universal.
- Project-context priority and nested discovery are runtime details and may evolve.

Adapter/reference: `docs/RUNTIME-HERMES.md`.

## OpenClaw

Primary references:

- https://docs.openclaw.ai/concepts/soul
- https://docs.openclaw.ai/reference/templates/SOUL
- https://docs.openclaw.ai/concepts/system-prompt
- https://docs.openclaw.ai/concepts/agent-workspace
- https://docs.openclaw.ai/reference/token-use

Authority: **Canonical for current OpenClaw behavior.**

Key facts verified in August 2026:

- SOUL represents persona/voice/boundaries in the workspace identity stack.
- OpenClaw distinguishes AGENTS, SOUL, IDENTITY, USER, and MEMORY roles.
- Bootstrap/context files are bounded and may be truncated.
- Runtime/harness and subagent behavior can affect what identity/context propagates.
- OpenClaw recommends concise, behaviorally sharp SOUL content rather than biographies or walls of vibes.

Adapter/reference: `docs/RUNTIME-OPENCLAW.md`.

## Pi / pi-mono

Primary references:

- https://github.com/badlogic/pi-mono
- https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/usage.md
- https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/src/core/system-prompt.ts

Authority: **Canonical source/docs for current Pi implementation.**

Key adapter-relevant facts verified in August 2026:

- Pi supports durable system-prompt replacement and append surfaces such as `SYSTEM.md` and `APPEND_SYSTEM.md` in documented global/project locations.
- Pi loads project instruction context including `AGENTS.md`/`CLAUDE.md` conventions.
- Append-style identity transport is generally safer than replacing the whole built-in system prompt when the deployment wants to preserve Pi's normal harness behavior.

Adapter: `docs/runtimes/PI.md`.

## OpenCode

Primary references:

- https://opencode.ai/docs
- https://opencode.ai/docs/agents
- https://opencode.ai/docs/skills
- https://dev.opencode.ai/docs/rules/

Authority: **Canonical for current OpenCode behavior.**

Key adapter-relevant facts verified in August 2026:

- OpenCode supports custom primary agents/subagents with configurable prompts.
- `AGENTS.md` is a project/global instruction mechanism, with compatibility behavior for other rule formats documented by OpenCode.
- Skills and permission controls provide separate procedure/authority surfaces.

Adapter: `docs/runtimes/OPENCODE.md`.

## Claude Code

Primary references:

- https://docs.anthropic.com/en/docs/claude-code/getting-started
- https://docs.anthropic.com/en/docs/claude-code/memory
- https://docs.anthropic.com/en/docs/claude-code/cli-usage
- Claude Code SDK documentation for programmatic system-prompt configuration

Authority: **Canonical for current Claude Code behavior.**

Key adapter-relevant facts verified in August 2026:

- Claude Code uses persistent `CLAUDE.md` instruction/memory files at user/project scopes.
- Current documentation supports importing separate files with `@path`, enabling a canonical SOUL file to remain separate while being loaded through native persistent instructions.
- Programmatic/SDK deployments can provide a system prompt directly.
- Tool/permission controls should remain separate from personality prose.
- Older `CLAUDE.local.md` workflows should not be treated as the portability foundation when current docs prefer imports.

Adapter: `docs/runtimes/CLAUDE-CODE.md`.

## OpenAI Codex

Primary references:

- https://openai.com/index/unrolling-the-codex-agent-loop/
- https://openai.com/index/harness-engineering/
- https://github.com/openai/codex/blob/main/codex-rs/core/src/agents_md.rs
- https://github.com/openai/codex/blob/main/codex-rs/config/src/config_toml.rs

Authority: **Canonical first-party product/source material for the referenced Codex behavior.**

Key adapter-relevant facts verified in August 2026:

- Codex aggregates project `AGENTS.md`-style instructions separately from stronger developer/system instruction layers.
- Current source exposes durable developer-instruction configuration suitable for identity transport when the deployment controls configuration.
- OpenAI's harness-engineering guidance explicitly favors a high-signal map over one giant instruction encyclopedia.
- Lower-level full model-instruction replacement is not the default recommended path for simply adding identity.

Adapter: `docs/runtimes/CODEX.md`.

## DeepSeek Harness

Primary references:

- https://deepseek.com/harness/en/
- https://github.com/deepseek-ai/deepseek-harness
- https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/context/agent-instructions/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/master/.agents/notes/implemented/feature/2026-06-24-workspace-context.md

Authority: **Canonical first-party documentation/source for the current developer-preview harness.**

Key adapter-relevant facts verified in August 2026:

- The harness uses a composable/plugin architecture.
- Current workspace-context implementation supports AGENTS-compatible instruction loading, including global/project/local forms.
- Context rendering is bounded.
- The trajectory/event architecture provides unusually strong observability into prompt/context/tool behavior.
- DeepSeek explicitly labels the harness developer preview; breaking changes are expected.

Adapter: `docs/runtimes/DEEPSEEK-HARNESS.md`.

## Grok Bot

Primary references:

- https://docs.x.ai/grok-bot/overview
- https://docs.x.ai/grok-bot/bots
- https://docs.x.ai/grok-bot/skills-routines-and-automations
- https://docs.x.ai/grok-bot/approvals-security-and-privacy
- https://docs.x.ai/grok-bot/chat-and-collaboration

Authority: **Canonical for current Grok Bot behavior.**

Key adapter-relevant facts verified in August 2026:

- A Bot is a durable named teammate defined by a job and persistent working context.
- Skills represent reusable procedures.
- Routines represent recurring/scheduled workflows.
- Approval boundaries exist for consequential actions.
- Current documentation describes shared persistent computer/account state across Bots, so identity separation must not be confused with security isolation.

Adapter: `docs/runtimes/GROK-BOT.md`.

## Unknown / Custom Runtimes

No runtime claim should be invented merely because the product resembles another harness.

Use:

- `docs/RUNTIME-ADAPTER-SPEC.md`
- `docs/runtimes/GENERIC.md`
- `templates/RUNTIME-ADAPTER.template.md`
- `spec/RUNTIME-CAPABILITY-PROFILE.schema.json`

Research current first-party behavior, profile capabilities, disclose losses, then test.

---

# Tier B — First-Party Character / Constitution Material

## Anthropic Claude Constitution

- https://www.anthropic.com/constitution
- https://www.anthropic.com/news/claude-new-constitution

Authority: **First-party description of intended Claude character and training framework.**

Engineering relevance:

- demonstrates explicit value priority;
- explains constitutive guidance as a framework for judgment rather than a giant rule list;
- useful inspiration for runtime identity design while remaining technically distinct from a runtime SOUL.

## Claude Character

- https://www.anthropic.com/news/claude-character

Engineering relevance:

- character training aims at dispositions such as curiosity, open-mindedness, thoughtfulness, honesty, care, and judgment;
- supports the principle that generalized dispositions can be more powerful than brittle case enumeration.

---

# Tier C — Reconstructed Training/Character Artifact

## Richard Weiss — reconstructed Claude 4.5 Opus soul document

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

---

# Tier D — Philosophical / Conceptual Material

## soul.md

- https://soul.md/

Authority: **Conceptual/philosophical essay, not runtime documentation.**

Useful idea:

- a soul document describes “who the agent is” rather than what tools it has;
- external identity text can create continuity of self-presentation across sessions.

Caveat:

Anthropomorphic or consciousness language in philosophical writing must not be presented as established scientific fact.

---

# Tier E — Community Engineering Sources

Community material can provide excellent methods while requiring independent verification.

## thedaviddias/souls-directory

Engineering value:

- contrastive identity interviews;
- relationship archetypes;
- “what must the agent never become?”;
- pressure testing;
- versioned/distributed soul practices.

Authority: community engineering practice.

## aeonfun/soul.md

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

## Other community specifications

Examples include proposed YAML/frontmatter schemas and SOUL directories.

Treat these as emerging conventions rather than universal standards unless adoption and implementation evidence justify stronger claims.

---

# Tier F — Prompt Archives / Extracted System Prompts

## CL4R1T4S artifact supplied during research

Commit:

- https://github.com/elder-plinius/CL4R1T4S/commit/75492f5723222aed8eb538230ba9a47ec888a36f

Use: **architecture specimen only.**

The referenced `OPUS-5.md` is a large purported product/system prompt aggregation containing identity, safety, tools, product facts, memory, UI, search, and operational instructions.

It illustrates why a production system prompt should not be copied wholesale into SOUL.

Reliability caveat:

The artifact contained claims inconsistent with contemporaneous first-party Anthropic product information during the research period. It must not be treated as authoritative Anthropic documentation without independent authentication.

---

# Research Evidence Policy

Academic/empirical research belongs in `docs/RESEARCH.md` only after the original source is checked.

Community summaries of research should be marked as **secondary claims** until the cited paper is independently inspected.

Do not convert:

- one benchmark result;
- one model family;
- one prompt setup;
- one community experiment

into a universal law of agent identity.

---

# Runtime Adapter Evidence Policy

Every adapter should preserve enough provenance to answer:

- Which exact first-party source established the transport mechanism?
- When was it checked?
- Is the behavior stable, beta, preview, or inferred from source?
- Does the runtime natively support SOUL semantics or is this an adapter mapping?
- What would invalidate the mapping?
- What remains unknown?

Never use repository stars, popularity, marketing claims, or superficial similarity to another harness as evidence of runtime semantics.

---

# Provenance Principle

For any material doctrine or adapter change, record enough provenance that a future maintainer can answer:

- Where did this idea come from?
- Is it implementation fact, research evidence, community convention, or inference?
- Is it current?
- What would supersede it?

## Last Source Audit

2026-08-21.
