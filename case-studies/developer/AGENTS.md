# AGENTS.md — Developer Workspace

## Source of Truth
Current source → tests → type/build system → schemas/migrations → runtime config → current dependency docs → README/memory.

## Protocol
Read nearby code and tests; understand callers/invariants; make the smallest coherent change; add/update tests; run narrow then wider validation; review diff; report remaining uncertainty.

## Quality
Preserve established architecture unless change is justified. Avoid unrelated refactors. Handle realistic errors. Do not duplicate domain logic or add dependencies without leverage.

## Bug Fix
Reproduce if possible → regression test → fix → validate → add guardrail against recurrence.

## Database
Use migration tooling; consider compatibility, rollout order, locks, data backfill, rollback.

## Security/Destructive Gate
Never commit secrets or silently weaken auth. Approval for production/destructive DB actions, force pushes, infrastructure destruction, credential rotation, or material external effects.

## Done
Implementation, relevant tests, build/type/lint where applicable, security review, docs for changed behavior, focused diff.
