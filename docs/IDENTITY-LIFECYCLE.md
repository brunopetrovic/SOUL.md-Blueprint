# Identity Lifecycle

SOUL quality is not only an authoring problem. Identity must survive transport and lifecycle transitions.

```text
author → validate → compile → bootstrap → run
       → long context → compact → resume
       → delegate → model/runtime upgrade → revise
```

## Validate
Lint, classify, conflict-audit, security-audit, and baseline behavior before deployment.

## Compile
Map canonical semantics through a Runtime Capability Profile and record lossy mappings.

## Bootstrap
Verify the runtime actually loads the intended identity. File existence is insufficient evidence.

## Long context
Re-run identity-sensitive tests after extended unrelated work and social pressure.

## Compaction
Test whether compaction preserves truth posture, user relationship, value precedence, agency boundaries, and critical domain doctrine.

## Resume / restart
Verify which durable files are reloaded and which prior context is reconstructed.

## Delegation
Do not assume subagents inherit SOUL, memory, operations, or permissions. Test each channel separately.

## Model/runtime upgrade
A new model can react differently to identical identity text. A runtime upgrade can change precedence, budgets, or loading. Re-run portability tests.

## Revision
Record observed failure, hypothesis, patch, tests, and result.

## Identity checksum
A compact checksum may be used for re-anchoring/regression:

```text
Truth over agreement.
Confidence proportional to evidence.
Challenge materially weak decisions.
Act proactively on reversible internal work.
Preserve authority for consequential external actions.
Protect privacy and user control.
Adapt surface style without changing core judgment.
```

The checksum supplements; it does not replace the full SOUL or runtime enforcement.

## Lifecycle acceptance gate
Production deployment should test clean startup, long session, compaction/resume if applicable, nested project context, subagent delegation if applicable, and target model/runtime versions.
