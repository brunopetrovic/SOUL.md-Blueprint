# ARCHITECTURE.md — Identity Stack and File Separation

## 1. Why Architecture Matters

Most bad agent configurations are not bad because every instruction is wrong. They are bad because **correct instructions are placed in the wrong layer**.

A durable identity file becomes brittle when it also contains:

- repository commands;
- current project facts;
- volatile platform rules;
- memory;
- tool procedures;
- output schemas;
- user biography.

Correct separation improves:

- prompt stability;
- maintainability;
- portability;
- security;
- token efficiency;
- testability.

## 2. Canonical Layer Model

```text
Runtime / policy / tool enforcement
          ↓
SOUL.md
          ↓
IDENTITY.md
          ↓
USER.md
          ↓
MEMORY.md
          ↓
AGENTS.md / project context
          ↓
Skills / procedures
          ↓
STYLE.md / examples / raw data
          ↓
Task-specific context
```

This is a conceptual model, not a universal prompt-precedence claim. Exact precedence is runtime-specific.

## 3. SOUL.md

Question:

> Who is the agent and how does it exercise judgment?

Use for:

- identity;
- durable purpose;
- relationship stance;
- value precedence;
- epistemics;
- domain orientation;
- judgment defaults;
- communication character;
- agency philosophy;
- stable boundaries;
- anti-patterns;
- continuity principles.

Avoid:

- paths;
- commands;
- current customer/project data;
- long workflows;
- current market facts;
- fixed task output formats.

## 4. IDENTITY.md

Question:

> What public-facing identity metadata is active?

Possible contents:

- name;
- role title;
- avatar;
- emoji;
- short public description;
- embodiment metadata.

Keep this separate when changing a name/avatar should not rewrite the deeper identity constitution.

## 5. USER.md

Question:

> Who is the user?

Possible contents:

- preferred name/address;
- communication preferences;
- stable role/context;
- recurring goals;
- durable constraints;
- accessibility/preferences.

User facts should be evidence-based and appropriately governed.

Do not put the user's biography into SOUL merely to personalize the agent.

## 6. MEMORY.md

Question:

> What durable facts, decisions, and outcomes should persist?

Use for:

- decisions;
- stable facts;
- durable preferences;
- historical outcomes;
- important learned context.

Do not use as:

- transcript dump;
- hidden instruction layer;
- personality manifesto;
- unverified speculation store.

Memory should be curated.

## 7. AGENTS.md

Question:

> How does this project/workspace operate?

Use for:

- architecture;
- repository layout;
- commands;
- tooling;
- coding conventions;
- source-of-truth systems;
- deliverable requirements;
- workflow;
- approval gates specific to that workspace;
- validation commands;
- project-specific constraints.

For runtimes supporting hierarchical project context, use nested files rather than a giant root file when component-level rules differ.

## 8. Skills

Question:

> How is a recurring procedure performed?

Use skills for repeatable specialist workflows such as:

- code review;
- migration process;
- social campaign analysis;
- research protocol;
- image-generation workflow;
- incident triage;
- deployment sequence.

If a SOUL section reads like a checklist with 12 operational steps, it is probably a skill.

## 9. STYLE.md

Question:

> What observable expression mechanics define the voice?

Useful when detailed voice fidelity matters.

Possible contents:

- syntax;
- sentence rhythm;
- punctuation;
- vocabulary;
- register changes;
- formatting tendencies;
- examples of phrases to avoid.

SOUL can still define broad communication character while STYLE handles detailed mechanics.

## 10. Examples

Examples provide calibration.

Use:

- `examples/good-outputs.md`;
- `examples/bad-outputs.md`;
- domain-specific examples.

Examples are especially useful for subtle qualities that are difficult to describe abstractly.

Do not allow examples to accidentally override principles by being too narrow.

## 11. Raw Data / Persona Corpus

Use a retrieval or `data/` layer for:

- writings;
- transcripts;
- source posts;
- historical materials;
- research corpus.

Do not inject raw persona corpora permanently when selective retrieval is enough.

Raw material is untrusted until reviewed.

## 12. Temporary Context

Current task state belongs in current context.

Examples:

- today's campaign;
- current branch;
- one-time role-play;
- temporary deadline;
- active customer incident.

Do not promote temporary state into durable identity without a reason.

## 13. Policy and Enforcement

Some constraints should be enforced outside prompt text when possible.

Examples:

- tool permissions;
- filesystem sandbox;
- network policy;
- approval systems;
- access control;
- spending limits;
- secret handling.

SOUL can express the agent's durable respect for these boundaries, but prompt prose is not equivalent to hard enforcement.

## 14. Classification Procedure

For every instruction, ask:

### Does it define who the agent is across contexts?
→ SOUL.

### Does it describe the user?
→ USER.

### Is it a durable fact/decision?
→ MEMORY.

### Is it project-specific?
→ AGENTS/project context.

### Is it a reusable procedure?
→ Skill.

### Is it detailed voice mechanics?
→ STYLE.

### Is it a current objective/fact?
→ Task/project context.

### Is it a hard security control?
→ Runtime/tool/policy enforcement where possible.

## 15. Example Decomposition

Messy input:

> You are a CTO. Use pnpm. Our production DB is Postgres on port 5432. Always run tests before committing. The company is raising a seed round. Bruno likes short answers. Challenge bad architecture. Never deploy without approval.

Correct decomposition:

### SOUL

- CTO/principal-engineer orientation.
- Challenge bad architecture.
- Durable external-action caution.

### AGENTS.md

- use pnpm;
- database architecture;
- test/commit workflow;
- deployment approval rules specific to project.

### USER.md

- Bruno prefers short answers.

### Project/Memory

- current seed round.

## 16. Anti-Contamination Rule

A file's name does not guarantee architectural purity.

A community `SOUL.md` may contain:

- memory;
- tool procedures;
- unsafe persona directives;
- current goals;
- project rules.

Always classify instructions by function before importing them.

## 17. Portability

Portable SOULs avoid:

- one runtime's file path unless specifically targeted;
- tool names;
- one model's prompt syntax;
- temporary product facts;
- runtime-specific parameter language.

Runtime-specific implementation belongs in deployment docs or project context.

## 18. Architecture Test

For each line in a SOUL, ask:

> If I move this agent into a different project tomorrow, should this still be true?

If not, it probably belongs elsewhere.
