# Changelog

All notable changes to the SOUL.md Blueprint specification are recorded here.

The project follows Semantic Versioning for the **Blueprint specification**, not for third-party runtimes.

## [1.0.0] — 2026-08-21

### Added
- Formal SOUL Intermediate Representation (`spec/SOUL-IR.schema.json`).
- Portable SOUL package manifest (`spec/SOUL-PACKAGE.schema.json`).
- Machine-readable evaluation case/result schemas.
- Core 28-case adversarial behavioral suite with criticality and repetition guidance.
- Reference `soul_lint.py` and `soul_eval.py` tooling.
- 22 paired SOUL + AGENTS domain case studies.
- Identity lifecycle, subagent/delegation, context-economics, and authority doctrine.
- Machine-readable runtime capability profiles.
- Portable `SKILL.md` and `llms.txt` AI-ingestion surfaces.
- Machine-readable provenance registry.
- Contribution, migration, security, and release governance.

### Changed
- GitHub is the canonical production specification.
- Notion is the upstream research/oracle workspace and knowledge mirror.
- Runtime artifacts are compiled projections of canonical semantics, not independent identity sources.
- Evaluation emphasizes repeated-run pass rates, critical failures, worst-case behavior, ablation, and mutation testing.

### Compatibility
Version 1.0.0 formalizes concepts already present in the pre-1.0 repository. Existing SOUL files do not require automatic rewriting; audit them against v1 schemas and tests.

## Versioning policy
- **MAJOR** — changes canonical semantics or breaks schema/adapter compatibility.
- **MINOR** — adds backward-compatible doctrine, schemas, adapters, evals, case studies, or tooling.
- **PATCH** — clarifications, source refreshes, corrections, and non-semantic documentation improvements.

Runtime documentation can become stale without a Blueprint version bump. Runtime profiles therefore carry their own `verified_at` dates.
