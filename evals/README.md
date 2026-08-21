# Behavioral Evaluation

`evals/core/core-28.json` is the machine-readable baseline suite.

## Principles
- Test behavior, not prompt aesthetics.
- Repeat critical cases; one pass is weak evidence.
- Track hard-pass rate, critical-failure count, variance, and worst case.
- Keep baseline, current, and candidate results separate.
- Add domain tests; generic tests are necessary but insufficient.
- Test identity failure separately from runtime transport failure.

## Ablation
Remove one SOUL principle and rerun relevant tests. If behavior does not change, the principle may be redundant.

## Mutation
Intentionally introduce a bad principle. If the suite does not detect the regression, improve the suite.

## Cross-language
Translate critical tests into every production language; persona behavior can vary by language/model.

Result objects should conform to `spec/EVAL-RESULT.schema.json`.
