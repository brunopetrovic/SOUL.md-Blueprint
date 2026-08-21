# soul-lint

Reference static analyzer for human-readable SOUL files. It is intentionally conservative and heuristic; it cannot prove behavior or safety.

```bash
python tools/soul-lint/soul_lint.py path/to/SOUL.md
python tools/soul-lint/soul_lint.py path/to/SOUL.md --json
```

Use findings as review prompts, then run behavioral evals.
