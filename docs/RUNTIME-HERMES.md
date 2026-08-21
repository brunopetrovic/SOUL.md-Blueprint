# RUNTIME-HERMES.md — Hermes Agent Implementation Reference

**Verified against current official Hermes documentation: 2026-08-21.**

Runtime behavior can change. Re-check official docs before relying on exact implementation details.

## 1. SOUL.md Role

Hermes currently treats `SOUL.md` as the **primary identity for the Hermes instance**.

It is the first identity layer in the system prompt and replaces the built-in fallback identity when successfully loaded with content.

Use SOUL for:

- identity;
- tone;
- communication style;
- directness/warmth;
- uncertainty posture;
- disagreement posture;
- stable behavioral character.

Do not use it for project-specific:

- paths;
- commands;
- ports;
- architecture;
- coding conventions;
- deployment procedures.

Those belong in project context such as `AGENTS.md`.

## 2. Location

Default:

```text
~/.hermes/SOUL.md
```

Custom Hermes home:

```text
$HERMES_HOME/SOUL.md
```

Hermes does **not** use the current working directory as an alternate SOUL location.

This makes identity instance-level rather than project-local.

## 3. First Run

Hermes seeds a starter `SOUL.md` when one does not exist.

Existing user SOUL files are not overwritten by the seeding behavior.

If the file is empty/unavailable, Hermes falls back to the built-in identity.

## 4. Injection

Current official docs describe SOUL content as:

- loaded from HERMES_HOME;
- scanned for prompt-injection/security patterns;
- truncated if necessary;
- inserted directly as identity content.

It is not duplicated inside the project-context section.

## 5. Prompt Stack Mental Model

At a high level:

1. SOUL identity / fallback identity
2. tool-aware behavior guidance
3. memory and user context
4. skills guidance
5. project context files
6. time/environment context
7. platform formatting
8. optional overlays such as `/personality`

Treat this as a high-level model, not a promise that every internal prompt implementation will remain identical forever.

## 6. SOUL vs /personality

`SOUL.md` = durable default identity.

`/personality` = temporary/session-level overlay.

Use overlays for temporary mode shifts such as:

- teacher;
- technical;
- creative;
- concise.

Do not use temporary personality modes as a replacement for durable identity design.

## 7. Project Context

Hermes supports project context separate from SOUL.

Current documented priority includes project context types such as:

1. `.hermes.md` / `HERMES.md`
2. `AGENTS.override.md`
3. `AGENTS.md`
4. `CLAUDE.md`
5. `.cursorrules`

Only the first matching project-context type is selected according to current rules; SOUL remains independent.

Because this behavior is runtime-specific, verify the current context-files documentation when deploying.

## 8. AGENTS.md Hierarchy

Hermes currently supports hierarchical `AGENTS.md` context from git root toward the working directory.

More-specific/deeper guidance appears later and can specialize broader instructions.

Hermes also supports progressive discovery of context files in subdirectories while tools navigate.

This enables a strong architecture:

```text
repo/AGENTS.md              general repository rules
repo/frontend/AGENTS.md     frontend-specific rules
repo/backend/AGENTS.md      backend-specific rules
repo/infra/AGENTS.md        infrastructure-specific rules
```

Keep global identity in SOUL instead of repeating it across these files.

## 9. Truncation

Do **not** treat 20,000 characters as a universal Hermes SOUL limit.

Current official configuration documentation describes `context_file_max_chars` as configurable. With the documented default dynamic behavior, the cap may scale with model context size, with a documented floor and ceiling.

Engineering consequence:

- still prefer compact/high-density SOUL files;
- inspect actual config;
- do not rely on unlimited context;
- ensure the most important identity principles are not buried in enormous files.

## 10. Security Scan

Context-bearing files are scanned for suspicious prompt-injection patterns.

Do not attempt to “outsmart” scanning with hidden instructions.

Treat persona corpora and imported context as untrusted data.

## 11. Prompt Economics

Stable permanent context has recurring cost.

Hermes guidance recommends:

- durable voice in SOUL;
- project instructions in project context;
- facts in memory;
- procedures in skills.

This improves prompt stability and cache efficiency.

## 12. Memory Interaction

Hermes memory/user context is distinct from SOUL.

Memory is for learned facts and user context, not durable agent identity.

Current Hermes behavior may snapshot memory at session construction, so persisted mid-session updates need not immediately rewrite the already-built system prompt.

## 13. Recommended Hermes Layout

```text
~/.hermes/
├── SOUL.md
├── config.yaml
├── memories/
├── skills/
└── ...

project/
├── AGENTS.md
├── src/
│   └── ...
└── specialized-subdir/
    └── AGENTS.md
```

## 14. Deployment Checklist

Before deploying a SOUL to Hermes:

- [ ] Verify current Hermes version/docs.
- [ ] Confirm HERMES_HOME.
- [ ] Confirm actual context-file cap/config.
- [ ] Remove project-specific instructions from SOUL.
- [ ] Move repeat procedures into skills.
- [ ] Check for contradictions with project context.
- [ ] Run behavioral regression tests.
- [ ] Start a fresh session after identity changes where appropriate.
- [ ] Inspect prompt/context diagnostics if behavior suggests truncation or precedence problems.

## Official Sources

- https://hermes-agent.nousresearch.com/docs/guides/use-soul-with-hermes
- https://hermes-agent.nousresearch.com/docs/user-guide/features/personality
- https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files
- https://hermes-agent.nousresearch.com/docs/user-guide/configuration
- https://hermes-agent.nousresearch.com/docs/user-guide/which-file-does-what
