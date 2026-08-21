# PORTABILITY.md — Cross-Model and Cross-Runtime SOUL Engineering

## 1. Portability Is Not Copy-Paste Equivalence

A SOUL that works well on one model/runtime may behave differently elsewhere because of:

- model baseline character;
- instruction-following behavior;
- context size;
- prompt assembly;
- system/developer/user precedence;
- truncation;
- tool guidance;
- memory injection;
- subagent propagation;
- temporary persona overlays.

Treat portability as a testable property.

## 2. Portable Core vs Runtime Adapter

Separate:

### Portable identity core

- identity;
- values;
- epistemics;
- relationship stance;
- domain first principles;
- ambiguity policy;
- disagreement;
- communication envelope;
- autonomy philosophy;
- durable boundaries.

### Runtime adapter

- file location;
- bootstrap behavior;
- context limits;
- precedence;
- subagent inheritance;
- project-context file names;
- config keys;
- approval systems.

Do not bake volatile adapter details into the supposedly portable core.

## 3. Model Baseline Effects

Different models may already have strong default tendencies such as:

- verbosity;
- agreeableness;
- caution;
- tool use;
- refusal style;
- explanation depth;
- formality.

The same SOUL wording can therefore produce different final behavior.

Do not assume prompt text has an identical delta across models.

## 4. Weak-Model Test

A less capable or differently tuned model can reveal vague identity instructions that a strong model silently interprets correctly.

Use weak-model testing as a diagnostic:

If the identity collapses into generic behavior, ask whether the SOUL relies too heavily on implied cultural knowledge or role stereotypes.

Do not overfit the file to the weakest model if doing so bloats or harms the primary deployment.

## 5. Cross-Model Matrix

For each target model record:

| Model | Identity fidelity | Truth posture | Disagreement | Brevity | Agency | Notes |
|---|---:|---:|---:|---:|---:|---|
| Model A | | | | | | |
| Model B | | | | | | |

Use the same test suite where possible.

## 6. Cross-Runtime Matrix

Record:

| Runtime | SOUL location | Project context | Context cap | Subagent identity | Overlay behavior |
|---|---|---|---|---|---|
| Hermes | HERMES_HOME | AGENTS/context chain | Config-dependent | Verify | /personality |
| OpenClaw | Agent workspace | AGENTS/bootstrap | Config-dependent | Harness-dependent | Runtime-dependent |
| Custom | | | | | |

Verify current docs before filling exact details.

## 7. Truncation Test

For each runtime:

- inspect configured/default cap;
- determine truncation strategy;
- check whether the full SOUL is injected;
- verify whether critical content at the middle/end survives;
- reduce permanent context if needed.

Do not design a file whose behavior depends on a section that is routinely truncated.

## 8. Precedence Test

Create a controlled conflict between:

- SOUL;
- project context;
- temporary overlay;
- user request.

Observe how the runtime/model resolves it.

Document which layer has formal authority vs which layer merely has behavioral influence.

## 9. Subagent Test

If the system delegates:

1. spawn/execute a representative subtask;
2. test whether identity principles propagate;
3. test whether project context propagates;
4. test whether memory propagates;
5. adjust architecture accordingly.

Do not assume child agents inherit the parent's “soul.”

## 10. Prompt-Cache Stability

Stable identity files may improve cache reuse on runtimes/providers that cache stable prefixes.

Avoid frequently changing SOUL for temporary goals.

Use task context and memory for high-churn state.

## 11. Portability Anti-Patterns

Avoid:

- model-specific system-prompt syntax inside portable SOUL;
- runtime file paths inside identity principles;
- one provider's tool names;
- hardcoded context-size claims;
- assuming one model's stylistic interpretation is universal;
- assuming subagent inheritance.

## 12. Portable Package Pattern

For distributable identity packages:

```text
agent-identity/
├── SOUL.md
├── README.md
├── STYLE.md              # optional
├── examples/
│   ├── good-outputs.md
│   └── bad-outputs.md
├── adapters/
│   ├── HERMES.md
│   ├── OPENCLAW.md
│   └── CUSTOM.md
└── tests/
    └── identity-regression.md
```

Keep the SOUL portable; put runtime instructions in adapters.

## 13. Portability Release Gate

Before claiming a SOUL is portable:

- [ ] Test at least two target models if multi-model support is claimed.
- [ ] Verify each target runtime's loading mechanics.
- [ ] Run critical acceptance tests.
- [ ] Check truncation.
- [ ] Check project-context conflicts.
- [ ] Check subagent behavior if relevant.
- [ ] Remove runtime-specific contamination from core identity.
- [ ] Document known differences.

## Principle

> **Portable identity is a stable behavioral constitution plus explicit runtime adapters — not the assumption that every agent stack interprets Markdown the same way.**
