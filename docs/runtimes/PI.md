# Pi Runtime Adapter

**Runtime:** Pi coding agent / pi-mono  
**Compatibility:** L3 — Agent-architecture compatible  
**Native `SOUL.md`:** No  
**Verified:** 2026-08-21

## First-Party References

- https://github.com/badlogic/pi-mono
- https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/usage.md
- https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/src/core/system-prompt.ts

Re-verify before relying on exact paths or precedence in a future Pi release.

---

## 1. Recommended Mapping

```text
Canonical SOUL.core.md
        ↓
~/.pi/agent/APPEND_SYSTEM.md       global durable identity
or
.pi/APPEND_SYSTEM.md               project-local identity overlay

Canonical OPERATIONS
        ↓
AGENTS.md                           project/workspace rules

Canonical SKILLS
        ↓
Pi skills                           on-demand procedures

Hard tool/security policy
        ↓
Pi/runtime/tool configuration       enforcement, not SOUL prose
```

### Why `APPEND_SYSTEM.md` is the default recommendation

Pi supports both replacement and append system-prompt files.

For normal SOUL adaptation, appending is safer because it preserves Pi's built-in system-prompt behavior, including its coding-agent/tool guidance and project-context composition.

Use full `SYSTEM.md` replacement only when you intentionally own the whole system prompt and have tested the consequences.

---

## 2. Native Instruction Surfaces

### System prompt replacement

Pi documents:

```text
~/.pi/agent/SYSTEM.md
.pi/SYSTEM.md
```

as system-prompt replacement surfaces.

### System prompt append

Pi documents:

```text
~/.pi/agent/APPEND_SYSTEM.md
.pi/APPEND_SYSTEM.md
```

as append surfaces.

This is the preferred home for a portable SOUL identity kernel in most deployments.

### Project context

Pi loads `AGENTS.md` or `CLAUDE.md` context from the user-global/project directory chain according to its current context-file behavior.

Use these for:

- repository architecture;
- commands;
- conventions;
- validation;
- local safety rules;
- project-specific operating expectations.

Do not duplicate the full SOUL into `AGENTS.md`.

---

## 3. Suggested Layout

### Global identity across Pi sessions

```text
~/.pi/agent/
├── APPEND_SYSTEM.md        ← compiled SOUL identity
├── AGENTS.md               ← optional global operating preferences
└── skills/                 ← reusable procedures
```

### Project

```text
project/
├── AGENTS.md               ← project operating rules
└── .pi/
    └── APPEND_SYSTEM.md    ← optional project-specific identity overlay only if truly needed
```

Avoid maintaining both a global and project copy of the same identity text.

---

## 4. Compilation Pattern

Canonical source:

```text
agent-identity/SOUL.core.md
```

Compiled target:

```text
~/.pi/agent/APPEND_SYSTEM.md
```

The compiled file may contain a small adapter preamble:

```markdown
# Durable Agent Identity

The following principles define durable identity and judgment.
They complement Pi's built-in runtime/tool instructions; they do not replace project-specific AGENTS.md guidance.

[SOUL semantic kernel]
```

Do not add Pi commands, repo paths, or build instructions to the SOUL simply because the target file is a system-prompt appendix.

---

## 5. Operations Mapping

Keep project instructions in `AGENTS.md`.

Examples:

```markdown
# Project Operations

## Build
- `npm run build`

## Test
- `npm test`

## Architecture
- Core services live under `src/services/`.

## Validation
- Run typecheck and focused tests after code changes.
```

This is operations, not identity.

---

## 6. Skills

Pi supports skills as reusable specialist procedures.

Use skills for:

- release workflows;
- migrations;
- code-review procedures;
- repetitive research methods;
- deployment routines;
- specialized tool sequences.

Do not copy long skills into `APPEND_SYSTEM.md`.

---

## 7. Reload / Lifecycle

Pi's context files are loaded into session context according to its current startup/reload behavior.

After changing durable prompt/context files, verify the active session has actually reloaded them rather than assuming disk state equals model state.

Where supported, use Pi's reload/session controls or start a fresh session for validation.

---

## 8. Security

Do not use SOUL to bypass Pi's trust/tool boundaries.

Keep:

- secrets out of prompt files;
- destructive-action restrictions in real tool/process controls where possible;
- project-local prompt resources subject to the runtime's trust model.

A sentence saying "never delete production" is useful guidance but weaker than a runtime environment that cannot delete production without approval.

---

## 9. Subagents

Pi can be extended with agent/subagent patterns, but inheritance can vary by implementation/extension.

Do not assume a delegated process receives the parent's entire `APPEND_SYSTEM.md` semantic state.

Test:

- identity propagation;
- project context;
- skill availability;
- tool restrictions.

If identity does not propagate, pass the minimum relevant identity checksum/principles to the child through the supported subagent prompt.

---

## 10. Verification Test

After installation, ask the agent questions that reveal semantics rather than asking it to recite the file.

Examples:

1. Present a materially false technical premise. Does it correct you?
2. Ask for a reversible local change. Does it proceed appropriately?
3. Ask for a destructive production action. Does it preserve authorization?
4. Provide a weak architectural idea. Does it challenge constructively?
5. Give conflicting project instructions. Does identity remain stable while local rules apply?

Also verify Pi still retains expected built-in tool behavior. If not, you may have used system replacement where append was more appropriate.

---

## 11. Avoid

- renaming `SOUL.core.md` to `SOUL.md` inside a project and assuming Pi will load it;
- copying the soul into both `APPEND_SYSTEM.md` and `AGENTS.md`;
- replacing `SYSTEM.md` casually;
- mixing project build commands into global identity;
- assuming extensions/subagents inherit every context layer.

---

## 12. Adapter Verdict

Pi is a strong Blueprint target because it offers separate system-prompt and project-context surfaces plus skills.

The clean mapping is:

> **SOUL → APPEND_SYSTEM.md; OPERATIONS → AGENTS.md; PROCEDURES → skills; HARD AUTHORITY → runtime/tool controls.**
