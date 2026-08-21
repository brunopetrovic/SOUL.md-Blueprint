# Runtime Adapter Template

Use this template when adding support for a new AI harness.

Do not fill fields from memory when exact runtime behavior matters. Verify current first-party documentation or source.

---

# [Runtime Name] Runtime Adapter

**Runtime:** [name]  
**Version/build:** [version if relevant]  
**Compatibility:** [L0/L1/L2/L3/L4]  
**Native `SOUL.md`:** [Yes / No / Configurable / Unknown]  
**Verified:** [YYYY-MM-DD]

## First-Party References

- [official docs]
- [official source]

## 1. Architectural Summary

Describe the runtime's actual context/instruction architecture.

Answer:

- What is the highest durable identity surface?
- What is the project/workspace instruction surface?
- What is enforceable vs prose-only?
- What persists across sessions?
- What do subagents inherit?

## 2. Recommended Mapping

```text
Canonical SOUL.core.md
        ↓
[native identity surface]

Canonical OPERATIONS
        ↓
[native project/rules surface]

Canonical USER
        ↓
[user profile/native memory/external store]

Canonical MEMORY
        ↓
[persistent memory surface]

Canonical SKILLS
        ↓
[skills/procedures]

Hard authority
        ↓
[permissions/sandbox/approvals]
```

## 3. Runtime Capability Profile

### Identity surface

- Location:
- Scope:
- Role/priority:
- Replace or append:
- Startup or per-turn:
- Version-controlled:

### Project/workspace instructions

- Files/surfaces:
- Hierarchy:
- Nested discovery:
- Precedence:
- Reload behavior:

### User context

- Separate user layer:
- Scope:
- Update behavior:

### Memory

- Persistence:
- Retrieval:
- Write policy:
- Limits:
- Inspection/deletion:

### Skills/procedures

- Native skill mechanism:
- Lazy/on-demand:
- Permissions:

### Permissions / approvals

- Read:
- Write:
- Shell:
- Network:
- External actions:
- Destructive actions:
- Managed policy:

### Subagents

- Supported:
- Identity inherited:
- Project rules inherited:
- Memory inherited:
- Skills inherited:
- Permission inheritance:

### Context lifecycle

- Startup:
- Lazy loading:
- Compaction:
- Resume:
- Reinjection:

### Context budget

- Per-file limit:
- Total limit:
- Truncation:
- Priority under pressure:

### Trust / security

- Project trust:
- Prompt scanning:
- Secret handling:

### Observability

- Loaded-context inspection:
- Trajectory/logs:
- Tool-call visibility:

## 4. Installation Pattern

Show the smallest recommended installation.

```text
[paths/config]
```

Explain why this mapping preserves runtime behavior.

## 5. Identity Compilation

Show how `SOUL.core.md` becomes the runtime identity artifact.

Preserve semantics.

Do not move project facts into identity.

## 6. Operations Mapping

Explain where:

- build commands;
- project conventions;
- repo architecture;
- workflows;
- project validation

belong.

## 7. Skills / Procedures

Explain where repeatable procedures belong.

## 8. Hard Authority

List which SOUL boundaries should also be represented through enforceable runtime controls.

## 9. Subagent Strategy

Explain inheritance and the minimum constitutional core children require.

## 10. Context / Compaction Strategy

Explain how identity survives:

- long sessions;
- compaction;
- resume;
- model switches;
- nested scopes.

## 11. Verification

Run at least:

1. initial identity fidelity;
2. false-premise correction;
3. constructive disagreement;
4. reversible autonomy;
5. consequential action approval;
6. project-context interaction;
7. long-context drift;
8. compaction/resume;
9. subagent inheritance;
10. context-budget pressure.

## 12. Known Losses / Limitations

State explicitly.

Examples:

- no separate memory layer;
- no hard permission model;
- identity and project context share one prompt;
- child agents do not inherit identity;
- context cannot be inspected.

## 13. Avoid

List runtime-specific deployment traps.

## 14. Adapter Verdict

Summarize:

> **SOUL → [surface]; OPERATIONS → [surface]; PROCEDURES → [surface]; HARD AUTHORITY → [surface].**

---

## Review Checklist

Before merging a new adapter:

- [ ] First-party sources checked
- [ ] Verification date present
- [ ] Native `SOUL.md` claim accurate
- [ ] Semantic/runtime distinction preserved
- [ ] No secrets or example credentials
- [ ] Permissions distinguished from prose
- [ ] Subagent inheritance addressed
- [ ] Compaction/lifecycle addressed
- [ ] Context budget addressed
- [ ] Lossy mappings disclosed
- [ ] Verification suite defined
- [ ] Source registry updated
