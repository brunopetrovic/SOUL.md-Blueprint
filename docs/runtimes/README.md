# Runtime Adapters

This directory contains **transport mappings** from the Blueprint's canonical semantic layers into specific agent harnesses.

The adapters are not separate identity philosophies.

They answer:

> Given a canonical SOUL architecture, where should each layer live in this runtime, what does it inherit, what are the limits, and how do we verify the mapping?

## Canonical rule

> **Standardize semantics; adapt transport.**

A runtime does not need native `SOUL.md` support to use the Blueprint.

## Read first

1. `../RUNTIME-ADAPTER-SPEC.md`
2. `../RUNTIME-COMPATIBILITY.md`
3. the adapter for your runtime
4. `../EVALUATION.md`

## Adapters

- Hermes — `../RUNTIME-HERMES.md`
- OpenClaw — `../RUNTIME-OPENCLAW.md`
- Pi — `PI.md`
- OpenCode — `OPENCODE.md`
- Claude Code — `CLAUDE-CODE.md`
- OpenAI Codex — `CODEX.md`
- DeepSeek Harness — `DEEPSEEK-HARNESS.md`
- Grok Bot — `GROK-BOT.md`
- Unknown/custom harness — `GENERIC.md`

## Adapter quality requirements

Every adapter should document:

- verification date;
- first-party sources;
- native identity surface;
- workspace/project instruction surface;
- skill/procedure mechanism;
- memory/persistence mechanism where applicable;
- tool/permission/approval model;
- subagent inheritance;
- context lifecycle and compaction;
- context limits where documented;
- recommended mapping;
- dangerous mappings to avoid;
- installation example;
- verification procedure;
- known limitations.

## Runtime change policy

Runtime documentation is volatile.

When current product behavior conflicts with an adapter:

1. current first-party documentation/source wins;
2. update the adapter;
3. record the verification date;
4. do not rewrite timeless SOUL doctrine unless the semantic principle itself changed.

## A note on filenames

The source identity may be maintained as:

```text
SOUL.core.md
```

and compiled into runtime-native artifacts.

Examples:

```text
SOUL.core.md → ~/.hermes/SOUL.md
SOUL.core.md → ~/.pi/agent/APPEND_SYSTEM.md
SOUL.core.md → OpenCode custom-agent prompt
SOUL.core.md → Claude Code imported instruction file / SDK system prompt
SOUL.core.md → Codex durable user/developer instruction layer
SOUL.core.md → DeepSeek Harness preset/plugin system prompt
SOUL.core.md → Grok Bot job/profile context
```

The compiled runtime artifact should not become an independently edited fork unless there is a deliberate runtime-specific semantic reason.

Keep one canonical source of truth.
