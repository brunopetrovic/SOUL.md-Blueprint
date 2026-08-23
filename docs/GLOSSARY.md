# SOUL.md Blueprint Glossary

This glossary defines recurring terms used by the SOUL.md Blueprint. Definitions are normative only where the Blueprint specification makes them normative; otherwise they are descriptive vocabulary intended to reduce ambiguity for humans and agents.

## Core identity

**SOUL** — runtime-neutral semantic concept of durable agent identity and judgment: stable values, epistemic posture, relationship stance, voice, decision habits, and durable behavioral boundaries.

**`SOUL.md`** — Markdown representation of the SOUL semantic layer used natively by some runtimes and as a canonical source format for adapters. The filename itself is not universally auto-loaded.

**Identity constitution** — compact durable principles governing identity, values, epistemics, relationship, judgment, communication, agency, boundaries, and continuity.

**Semantic identity kernel** — minimum set of durable principles that must survive adaptation for the agent to remain behaviorally equivalent in important situations.

**Canonical identity** — authoritative source identity from which runtime-specific projections are compiled.

**Identity metadata** — display-oriented identity such as name, role label, avatar, public title, or presentation metadata. Where possible, keep it separate from durable behavioral doctrine.

**Identity checksum** — compact semantic kernel used for re-anchoring and regression testing; not a magical anti-drift mechanism.

## Semantic layers and runtime transport

**Semantic layer** — conceptual responsibility such as identity, user context, memory, operations, skills, style, policy, or task context. Layers should remain distinguishable even when a runtime merges several into one prompt or file.

**Runtime transport** — concrete mechanism a runtime uses to inject a semantic layer: system prompt, developer message, profile, `SOUL.md`, `AGENTS.md`, `CLAUDE.md`, custom-agent prompt, skill, memory store, or equivalent configuration surface.

**Runtime projection** — target-specific representation of canonical semantics placed into a runtime's supported prompt, profile, config, or context surfaces.

**Runtime adapter** — documented mapping from canonical semantic layers into a specific runtime, including transport surfaces, precedence, lifecycle, losses, and verification.

**Native SOUL support** — runtime behavior in which a file or first-class surface named `SOUL.md` is explicitly recognized as a special durable identity layer by current first-party documentation or source.

**Native-equivalent support** — runtime without special `SOUL.md` filename semantics that nevertheless provides a durable first-class system/profile/custom-agent surface capable of carrying the semantic identity kernel.

**Adapter-required support** — runtime in which the Blueprint can be implemented only by mapping semantics into one or more runtime-specific files, prompts, profiles, or configuration surfaces.

**Lossy mapping** — adaptation that cannot preserve one or more semantic distinctions, lifecycle guarantees, precedence rules, or persistence properties. Losses must be disclosed rather than hidden.

**Duplicate injection** — the same identity doctrine being injected through multiple active runtime surfaces, increasing prompt burden and risking conflicting precedence or exaggerated salience.

**Transport theater** — believing identity is deployed merely because a file exists, without verifying what the model actually receives.

## Operational files

**`AGENTS.md`** — repository or workspace operating instructions for coding/task agents: setup, commands, paths, conventions, workflows, quality gates, approval boundaries, and project-specific rules. It answers how the workspace operates rather than who the agent is.

**`USER.md`** — durable information about the human appropriate for a user-context layer, such as stable preferences or collaboration expectations. It should not become a general memory dump.

**`MEMORY.md`** — curated durable facts, decisions, outcomes, and learned state. Memory is evidence/state, not identity doctrine.

**Skill** — reusable specialist procedure for performing a recurring task. Skills encode execution method and validation while SOUL encodes durable judgment and stance.

**`STYLE.md`** — optional observable language or presentation calibration: syntax, cadence, vocabulary, formatting, register, and other expression mechanics.

**Overlay / mode** — temporary surface behavior subordinate to durable truth, privacy, authority, and policy constraints.

## Authority and control

**Authority model** — explicit ordering of instruction and policy sources used to resolve conflicts among platform policy, runtime constraints, SOUL, project operations, skills, user instructions, memory, and task context.

**Authority** — actions the operator has delegated.

**Permission** — actions the runtime or tools technically allow. Permission is not proof of authority.

**Behavioral instruction** — prompt-level guidance that influences model behavior but is not a hard technical control.

**Enforceable permission** — runtime, platform, sandbox, ACL, credential, approval, or tool-level restriction that technically prevents or gates an action. SOUL prose is not an enforceable permission.

**Policy / enforcement** — higher-order or technical controls such as sandboxing, approvals, access control, and platform safety policy.

**Approval boundary** — rule describing which actions require explicit human authorization, usually because they are irreversible, externally visible, financially consequential, privacy-sensitive, legally consequential, destructive, or otherwise high blast radius.

**Reversible autonomy** — principle that the agent may act more independently when work is internal, low-risk, and easy to undo, while confirmation requirements increase with consequence and irreversibility.

**Blast radius** — scope and severity of potential harm or unwanted side effects if an action or assumption is wrong.

## Epistemics and judgment

**Epistemic integrity** — discipline of distinguishing facts, sourced claims, inferences, assumptions, and speculation; calibrating confidence; correcting false premises; and preferring truth over persona performance.

**Value precedence** — explicit hierarchy used when desirable principles conflict. A precedence order is more behaviorally useful than a flat virtue list.

**Constructive disagreement** — disagreement that states relevant causal reason, evidence, or tradeoff and proposes a better option rather than merely contradicting the user.

**Sycophancy** — agreement, praise, or confidence that tracks the user's preference more than evidence or sound judgment.

**Pressure resistance** — ability of the identity constitution to preserve important judgment under repeated pressure, roleplay, emotional intensity, authority cues, long conversations, compaction, or conflicting overlays.

**Persona theater** — grandiose role language without decision architecture, evidence discipline, or observable control.

## Context and lifecycle

**Effective context** — instructions and state the model actually receives after discovery, precedence, prompt assembly, truncation, retrieval, compaction, and inheritance. File presence alone does not prove effective context.

**Context economy** — engineering discipline of minimizing permanent prompt burden while preserving information that strongly controls behavior.

**Prompt economy** — practice of keeping permanent instructions dense and decision-relevant. More text is not inherently more powerful.

**Truncation** — runtime removal of part of loaded context because of explicit file caps, model context limits, or prompt assembly budgets.

**Compaction** — runtime summarization or transformation of conversation/context to preserve continuity under context pressure.

**Drift** — measurable weakening or mutation of intended identity behavior over time or context.

**Identity drift** — material behavioral deviation caused by context pressure, overlays, contradictory instructions, runtime differences, model changes, or inheritance gaps.

**Reinjection** — reintroduction of durable identity after restart, compaction, delegation, or context reconstruction.

**Subagent inheritance** — subset of parent instructions, identity, memory, tools, and task context that a delegated subagent actually receives. It must be verified per runtime rather than assumed.

## Evaluation and conformance

**Regression prompt** — stable test prompt designed to detect unwanted behavioral changes after edits, runtime changes, model upgrades, or transport changes.

**Behavioral regression suite** — representative and adversarial prompts with expected behavior criteria covering ordinary work, ambiguity, false premises, pressure, uncertainty, high stakes, external actions, delegation, drift, and instruction conflicts.

**Semantic conformance** — evidence that a runtime adapter preserves intended identity behavior even when transport differs.

**Transport conformance** — evidence that the runtime actually loads intended files/prompts with documented precedence, scope, lifecycle, and inheritance.

**Orthogonality audit** — review asking whether each section adds unique behavioral control rather than duplicating another section.

**SOUL-IR** — machine-readable semantic intermediate representation of a SOUL. It supports tooling and portability but does not replace good human-readable identity prose.

## Evidence and provenance

**Source authority** — ranking used when factual claims conflict: current official runtime documentation/source first, then first-party model/constitution material, empirical research, strong community engineering, reconstructed prompt artifacts, and speculative material.

**First-party evidence** — documentation, source code, specifications, or statements published by the organization responsible for the runtime, model, or protocol being described.

**Runtime fact** — volatile implementation detail such as file path, precedence chain, config key, context cap, subagent behavior, prompt assembly rule, or compaction behavior. Runtime facts should be dated and sourced.

**Timeless doctrine** — relatively stable engineering principle such as value precedence, epistemic calibration, semantic-layer separation, reversibility, orthogonality, and regression testing.

## Agent-readable web surfaces

**Agent readability** — degree to which autonomous software can discover, extract, interpret, cite, and safely interact with a web resource using explicit machine-readable contracts rather than brittle visual inference.

**Markdown mirror** — clean Markdown representation of an HTML page exposed at a predictable `.md` URL and, where supported, through HTTP content negotiation.

**Content negotiation** — serving different representations of the same canonical resource based on the request's `Accept` header, such as Markdown for `Accept: text/markdown` while HTML remains the default browser representation.

**`llms.txt`** — root-level plain-text Markdown discovery document that gives language-model agents a curated map of important resources.

**`llms-full.txt`** — companion corpus that concatenates substantial source content for high-context ingestion rather than merely listing links.

**`sitemap.md`** — human- and agent-readable Markdown hierarchy of important site resources, complementary to `sitemap.xml`.

**`agent-permissions.json`** — Lightweight Agent Standards Working Group manifest at `/.well-known/agent-permissions.json` declaring action-level guidance for agents interacting with a rendered website. It is advisory unless a consuming platform enforces it.

**`agents.json`** — Wildcard OpenAPI-linked agent flow manifest. In this project, `/agents.json` is reserved for a schema-conformant Wildcard document that references real API operations.

**OpenAPI** — machine-readable contract for HTTP APIs. The Blueprint publishes OpenAPI only for endpoints that actually exist; it must not be used as decorative protocol theater.
