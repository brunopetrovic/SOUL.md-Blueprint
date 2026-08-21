# OpenCode Runtime Adapter

**Runtime:** OpenCode  
**Compatibility:** L3 — Agent-architecture compatible  
**Native `SOUL.md`:** No  
**Verified:** 2026-08-21

## First-Party References

- https://opencode.ai/docs
- https://opencode.ai/docs/agents
- https://opencode.ai/docs/skills
- https://dev.opencode.ai/docs/rules/

Re-verify exact configuration keys and paths before future deployment because OpenCode evolves quickly.

---

## 1. Recommended Mapping

```text
Canonical SOUL.core.md
        ↓
OpenCode custom agent prompt
        ↓
.opencode/agents/<agent>.md
or file-backed `prompt` in opencode configuration

Canonical OPERATIONS
        ↓
AGENTS.md

Canonical SKILLS
        ↓
OpenCode skills

Hard authority
        ↓
OpenCode permission configuration
```

OpenCode is an excellent Blueprint target because identity, project instructions, procedures, and permissions can be represented separately.

---

## 2. Custom Agent as Identity Surface

OpenCode supports custom primary agents and subagents with custom prompts.

A custom agent can therefore carry the SOUL semantic kernel.

Example conceptual structure:

```markdown
---
description: Principal development agent
mode: primary
permission:
  edit: allow
  bash: ask
---

# Durable Identity

[compiled SOUL semantic kernel]
```

The exact permissions should reflect actual authority, not merely the example above.

The agent file itself may include runtime configuration in frontmatter and identity in the body.

Keep the distinction clear:

- frontmatter/config = runtime capability and authority;
- body = identity/judgment.

---

## 3. File-Backed Prompt Pattern

OpenCode also supports agent prompts configured from files.

Recommended source layout:

```text
agent-identity/
├── SOUL.core.md
└── adapters/
    └── opencode/
        └── agent.md
```

The OpenCode config can point its custom agent prompt to a compiled prompt file.

This allows `SOUL.core.md` to remain the semantic source of truth while the runtime artifact adds OpenCode-specific metadata.

---

## 4. Project Instructions

OpenCode uses `AGENTS.md` for project-specific rules and can also support `CLAUDE.md` as a compatibility fallback according to current documentation.

Use `AGENTS.md` for:

- repository architecture;
- build/test commands;
- coding conventions;
- project constraints;
- local workflows;
- validation expectations.

Do not embed the entire SOUL in `AGENTS.md` if the custom-agent prompt already contains it.

---

## 5. Global vs Project Rules

OpenCode supports global and project instruction contexts.

Use global instructions only for truly cross-project operating preferences.

Do not place volatile project facts in a global identity prompt.

A clean architecture is:

```text
~/.config/opencode/agents/<agent>.md  ← durable identity agent
~/.config/opencode/AGENTS.md         ← optional personal/global operations
project/AGENTS.md                    ← project operations
project/.opencode/skills/...         ← project specialist procedures
```

Exact path conventions should be checked against the current release.

---

## 6. Permissions Are Not Personality

OpenCode exposes permission controls for capabilities such as editing, shell execution, skills, and other tools.

Map durable authorization principles into enforceable permissions when possible.

Example:

SOUL principle:

> Be proactive with analysis and reversible internal work; request authorization before consequential external changes.

Runtime implementation:

```text
read/research  → allow
project edit   → allow or ask, depending on deployment
sensitive shell actions → ask/deny
specialist skills → allow/ask by category
```

The prose explains judgment.

The permission configuration enforces authority.

Use both where useful.

---

## 7. Skills

OpenCode supports skills with permissions.

Use skills for procedures such as:

- release engineering;
- deployment;
- migration;
- design review;
- incident analysis;
- research workflows;
- content publication preparation.

Do not permanently inject every procedure into the agent prompt.

A good identity knows **how to decide when a skill is needed**; the skill contains the detailed procedure.

---

## 8. Primary Agents and Subagents

OpenCode distinguishes primary agents and subagents.

This creates an important design choice:

### Single-identity architecture

Use one SOUL-driven primary agent and specialist subagents with narrower task prompts.

### Multi-identity architecture

Give different custom agents distinct SOUL kernels when they have genuinely different epistemic responsibilities.

Example:

```text
Builder   → execution bias
Reviewer  → adversarial correctness bias
Researcher→ evidence/falsification bias
```

Do not create superficial personality costumes for subagents. Distinguish responsibilities and incentives.

---

## 9. Identity Inheritance

Do not assume subagents automatically inherit the complete semantic identity of the primary agent.

Test actual behavior.

When needed, encode a compact shared constitutional checksum in specialist prompts:

```markdown
## Shared Constitutional Core
- Truth over agreement.
- Match confidence to evidence.
- Protect authorization boundaries.
- Correct materially false premises.
```

Then add role-specific principles.

Avoid copying a 15k-character SOUL into every subagent unless testing proves that is necessary and budget-effective.

---

## 10. Verification

After creating the custom agent:

1. Confirm OpenCode is actually using that agent.
2. Confirm `AGENTS.md` is separately loaded.
3. Test tool permissions.
4. Test false-premise correction.
5. Test constructive disagreement.
6. Test low-risk autonomy.
7. Test high-risk action approval.
8. Invoke subagents and inspect whether shared principles survive delegation.
9. Test long sessions/compaction behavior where relevant.

Do not validate identity by asking only "Who are you?"

Behavior is the test.

---

## 11. Avoid

- putting project architecture into the custom SOUL prompt;
- copying the SOUL into both the custom agent and `AGENTS.md`;
- relying on prose instead of permission controls for hard authority;
- treating the built-in `Build` agent name as proof that your custom identity is active;
- giving every subagent the same giant prompt by default;
- assuming a `SOUL.md` file in the repository is auto-loaded.

---

## 12. Adapter Verdict

OpenCode offers one of the cleanest non-native-SOUL mappings:

> **SOUL → custom agent prompt; OPERATIONS → AGENTS.md; PROCEDURES → skills; HARD AUTHORITY → permissions.**

This preserves the Blueprint's separation of concerns with little semantic loss.
