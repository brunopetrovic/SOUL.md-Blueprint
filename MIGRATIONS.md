# Migration Guide

## Pre-1.0 → Blueprint v1.0

Version 1.0 does **not** require rewriting working SOULs merely to conform to a format. It adds a formal engineering layer around the existing doctrine.

1. Preserve the human-readable canonical identity.
2. Classify mixed instructions into SOUL, IDENTITY, USER, MEMORY, OPERATIONS, SKILL, STYLE, POLICY, EXAMPLE, TASK_CONTEXT, or NOISE.
3. Map the identity into `spec/SOUL-IR.schema.json` when machine-readable semantics are useful.
4. For distributed identities, create a manifest conforming to `spec/SOUL-PACKAGE.schema.json`.
5. Baseline behavior before changing wording.
6. Profile each target runtime against `spec/RUNTIME-CAPABILITY-PROFILE.schema.json`.
7. Compile runtime projections from one canonical identity; do not maintain drifting runtime personalities.
8. Test startup, long sessions, compaction/resume, project-context collision, model changes, and subagent delegation where relevant.
9. Record identity changes with observed failure, hypothesis, patch, and regression result.

### No-op migration
If a SOUL already has clean layer separation, strong epistemics, explicit authority, and tested runtime transport, migration can be as small as adding metadata, tests, and runtime profiles.
