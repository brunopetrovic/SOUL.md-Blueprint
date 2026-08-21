# soul-eval

Model-agnostic reference aggregator for SOUL behavioral evaluations. A harness or reviewer produces result JSON; this utility computes pass rates, critical failures, and dimension summaries.

```bash
python tools/soul-eval/soul_eval.py evals/core/core-28.json results.json
```

`results.json` may be a JSON array or `{ "results": [...] }`.
