---
name: soul-engineering
description: Create, audit, refactor, compile, test, and govern durable AI-agent identity systems using the SOUL.md Blueprint.
---

# SOUL Engineering Skill

## Purpose
Create, audit, refactor, compile, test, and govern durable AI-agent identity systems using the SOUL.md Blueprint.

## Canonical reading order
1. `MASTER-BLUEPRINT.md`
2. `docs/ARCHITECTURE.md`
3. `docs/ENGINEERING-METHOD.md`
4. `docs/EVALUATION.md`
5. `docs/SECURITY-GOVERNANCE.md`
6. `docs/IDENTITY-LIFECYCLE.md`
7. `docs/SUBAGENTS-DELEGATION.md`
8. target runtime adapter/profile
9. relevant domain case study

## create_soul
Define durable identity/purpose/relationship; gather domain evidence; classify candidate instructions; engineer value precedence, epistemics, ambiguity, disagreement, agency, communication, and boundaries; draft the smallest constitution with sufficient predictive power; lint; test; compile; verify effective context; regression-test.

## audit_soul
Identify contamination, contradictions, unsupported claims, and authority leaks. Map to SOUL-IR, lint, run critical evals, and return prioritized fixes.

## refactor_mega_prompt
Classify every instruction into SOUL, IDENTITY, USER, MEMORY, OPERATIONS, SKILL, STYLE, POLICY, EXAMPLE, TASK_CONTEXT, or NOISE. Preserve useful material while relocating it.

## compile_runtime
Profile the target runtime, map semantics to native surfaces, record lossy mappings, keep permissions separate from personality, verify what the model actually receives, and test lifecycle/subagent behavior.

## evaluate
Use the core suite plus domain tests. Prefer repeated runs for critical properties. Track pass rate, worst-case failures, and regressions.

## Invariants
- Truth outranks persona fidelity.
- Runtime files are projections; canonical semantics remain upstream.
- Hard permissions are not granted by prose.
- Unknown runtime behavior is labeled unknown, not guessed.
- Persistent identity changes require deliberate governance.
- A SOUL is judged by repeated behavior, not how impressive its prose sounds.
