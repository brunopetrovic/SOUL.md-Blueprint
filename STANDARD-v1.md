# SOUL Blueprint Standard v1

Version: **1.0.0**

## Normative semantic artifacts
- `MASTER-BLUEPRINT.md`
- `spec/SOUL-IR.schema.json`
- `spec/SOUL-PACKAGE.schema.json`
- `docs/AUTHORITY-MODEL.md`

## Normative evaluation artifacts
- `spec/EVAL-CASE.schema.json`
- `spec/EVAL-RESULT.schema.json`
- `evals/core/core-28.json`
- `evals/rubrics/default.json`

## Runtime transport
- `spec/RUNTIME-CAPABILITY-PROFILE.schema.json`
- `docs/RUNTIME-ADAPTER-SPEC.md`
- `runtime-profiles/`

## Reference tooling
- `tools/soul-lint/`
- `tools/soul-eval/`

## Reference corpus
- `case-studies/` — 22 paired SOUL + AGENTS examples.

## Canon
GitHub is the canonical **production specification**. The Notion SOUL.md page is the research/oracle workspace and synthesis mirror. New research may originate in Notion, but production doctrine, schemas, tests, adapters, and releases are canonical only after landing here.

## Release gate
A production SOUL package should have clean layer separation, no unexplained critical lint finding, a runtime capability profile, zero critical failures in critical core evals, domain tests, lifecycle/subagent tests where applicable, and documented lossy mappings/limitations.
