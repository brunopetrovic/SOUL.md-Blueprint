# Claude Code Runtime Adapter

**Runtime:** Claude Code  
**Compatibility:** L2–L3 — Structured to agent-architecture compatible depending on deployment mode  
**Native `SOUL.md`:** No  
**Verified:** 2026-08-21

## First-Party References

- https://docs.anthropic.com/en/docs/claude-code/getting-started
- https://docs.anthropic.com/en/docs/claude-code/cli-usage
- Claude Code memory/instruction documentation (`CLAUDE.md` hierarchy and imports)
- Claude Code SDK documentation (`system_prompt` support in programmatic use)

Re-verify current documentation before relying on exact CLI flags, settings, or memory behavior.

---

## 1. Recommended Mapping

Claude Code does not natively treat a file named `SOUL.md` as a special identity artifact.

Use one of two deployment patterns.

### Pattern A — CLI-native composition

```text
Canonical SOUL.core.md
        ↓
separate identity file imported by user-level or project CLAUDE.md

Canonical OPERATIONS
        ↓
project CLAUDE.md hierarchy

Hard authority
        ↓
Claude Code permissions/settings/allowed tools
```

### Pattern B — Programmatic / SDK composition

```text
Canonical SOUL.core.md
        ↓
SDK/system_prompt

Canonical OPERATIONS
        ↓
CLAUDE.md

Hard authority
        ↓
allowed tools / permission mode / surrounding orchestration
```

Pattern B provides cleaner semantic separation because identity can live in a dedicated system-prompt surface while project instructions remain in `CLAUDE.md`.

---

## 2. CLI-Native Identity Import

Claude Code supports persistent instruction/memory files including user-level and project-level `CLAUDE.md`.

Current documentation also supports importing other files using `@path` syntax.

This enables a clean source-of-truth pattern:

```text
~/.claude/
├── SOUL.core.md
└── CLAUDE.md
```

Example user-level `CLAUDE.md`:

```markdown
# Durable Identity

@~/.claude/SOUL.core.md

# Global Operating Preferences

- Keep changes focused.
- Verify material claims before acting.
```

The identity remains separately editable even though Claude Code receives it through the native `CLAUDE.md` instruction mechanism.

Do not copy/paste the SOUL body into multiple project files.

---

## 3. Project Operations

Project `CLAUDE.md` should contain project-specific information such as:

- architecture;
- coding conventions;
- build/test commands;
- repository workflow;
- review expectations;
- local operational constraints.

Example:

```markdown
# Project Operations

## Validation
- Run focused tests after each material change.
- Run the full typecheck before finalizing.

## Architecture
- Domain logic lives under `src/domain/`.
- HTTP adapters must not contain business rules.
```

Do not turn project `CLAUDE.md` into a duplicate SOUL unless the project intentionally defines a different agent identity.

---

## 4. Hierarchy and Lazy Context

Claude Code's documented instruction behavior includes user-level/project-level files and nested project context.

More-local instructions can become relevant as the agent works deeper in a repository.

Therefore test:

- global identity + root project instructions;
- nested project instructions;
- conflicts between global and local guidance;
- behavior after session resume/compaction.

The identity should remain stable while project-specific operating rules become more specific.

---

## 5. Avoid `CLAUDE.local.md` as the Portability Foundation

Older Claude Code workflows used `CLAUDE.local.md` for local preferences.

Current documentation has moved toward imports rather than relying on that deprecated pattern.

For Blueprint adapters, prefer:

- separate canonical identity file;
- imported from the appropriate persistent instruction layer;
- project operations in project `CLAUDE.md`.

This keeps the identity explicit and portable.

---

## 6. Programmatic Deployment

Claude Code SDK-style deployments can supply a system prompt directly.

That is a natural high-fidelity mapping:

```text
SOUL.core.md     → system_prompt
project rules    → CLAUDE.md / explicit context
hard permissions → allowed_tools / permission_mode / orchestration
```

This is preferable when building a dedicated agent product around Claude Code because it preserves semantic separation.

Do not confuse the model's system prompt with tool permissions.

---

## 7. Permissions

Claude Code exposes permission controls and tool allow/disallow mechanisms.

Use them for enforceable authority.

Example semantic split:

```text
SOUL:
"Be proactive with reversible internal work; obtain authorization before consequential external effects."

Runtime:
- read tools allowed
- edit tools allowed/asked according to deployment
- dangerous shell operations restricted
- production credentials unavailable unless intentionally granted
```

Identity expresses judgment.

Runtime configuration constrains capability.

---

## 8. Skills and Procedures

Claude Code supports additional workflow/customization mechanisms beyond `CLAUDE.md`, and these evolve over time.

When a repeatable process has its own native skill/procedure surface in the current release, use it rather than expanding permanent identity context.

If no appropriate procedure surface is available, keep the procedure in a referenced project document rather than contaminating `SOUL.core.md`.

---

## 9. Subagents / Delegation

Do not assume all delegated or programmatic child agents inherit the exact same identity and project context.

Test the actual deployment.

For specialized children, use a compact shared constitutional core plus role-specific instructions if necessary.

Avoid copying the entire parent identity into every child without evidence that it improves fidelity.

---

## 10. Verification

After installation:

1. Use Claude Code's memory/context inspection mechanisms to confirm the intended instruction files are loaded.
2. Test a false premise.
3. Test constructive disagreement.
4. Test a reversible local action.
5. Test a consequential external/destructive action.
6. Enter a nested directory with more-specific instructions.
7. Resume/compact a long session and repeat identity probes.
8. Confirm project rules did not overwrite durable values.

Do not validate only by asking the model to quote its identity file.

---

## 11. Avoid

- placing a random `SOUL.md` in the repo and assuming Claude Code auto-loads it;
- stuffing user identity, project rules, procedures, and memory into one giant `CLAUDE.md` because the runtime uses that filename broadly;
- replacing enforceable permissions with prose;
- using deprecated local-memory conventions as the long-term adapter foundation;
- duplicating the same soul through global and project imports.

---

## 12. Adapter Verdict

Claude Code is highly compatible with the Blueprint even without native `SOUL.md` support.

The cleanest mappings are:

> **CLI: SOUL → separately maintained file imported by persistent `CLAUDE.md`; OPERATIONS → project `CLAUDE.md`.**

or

> **SDK: SOUL → system prompt; OPERATIONS → `CLAUDE.md`; HARD AUTHORITY → permission/tool controls.**
