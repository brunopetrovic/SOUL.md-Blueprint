# OpenAI Codex Runtime Adapter

**Runtime:** OpenAI Codex CLI / Codex harness  
**Compatibility:** L2–L3 — Structured to agent-architecture compatible  
**Native `SOUL.md`:** No  
**Verified:** 2026-08-21

## First-Party References

- https://openai.com/index/unrolling-the-codex-agent-loop/
- https://openai.com/index/harness-engineering/
- https://github.com/openai/codex/blob/main/codex-rs/core/src/agents_md.rs
- https://github.com/openai/codex/blob/main/codex-rs/config/src/config_toml.rs

Re-verify current Codex documentation/source before relying on exact config keys, limits, or multi-agent behavior.

---

## 1. Recommended Mapping

Codex does not natively treat a file named `SOUL.md` as a special identity artifact.

A clean mapping is:

```text
Canonical SOUL.core.md
        ↓
Codex developer instructions / durable orchestration layer

Canonical OPERATIONS
        ↓
AGENTS.md / AGENTS.override.md hierarchy

Canonical SKILLS
        ↓
Codex skills / workflow mechanisms where applicable

Hard authority
        ↓
sandbox, permissions, managed policy, environment controls
```

The critical distinction is that Codex's project `AGENTS.md` content is not the same semantic layer as developer/system instructions.

---

## 2. Developer Instructions as Identity Surface

Current Codex source exposes a `developer_instructions` configuration field that is injected as a developer-role message.

This is the strongest general-purpose mapping for a durable SOUL kernel when the user controls Codex configuration.

Conceptually:

```toml
# ~/.codex/config.toml

developer_instructions = """
[compiled SOUL semantic kernel]
"""
```

Because the field is inline rather than a dedicated `SOUL.md` file path in current source, serious deployments should generate/update this value from a canonical `SOUL.core.md` source rather than hand-maintaining two independent identities.

Do not use lower-level model-instruction replacement mechanisms casually. Current Codex source explicitly warns that overriding built-in model instructions can degrade behavior.

---

## 3. `AGENTS.md` Is Operations, Not SOUL

Codex natively discovers `AGENTS.md`-style project instructions.

Current Codex architecture treats these as user/project instruction context, with more-specific project files applied along the directory path.

Use `AGENTS.md` for:

- build/test commands;
- architecture;
- naming conventions;
- repository quirks;
- project business rules;
- validation;
- local operational guidance.

Do not copy the full SOUL into every repository `AGENTS.md`.

This preserves:

```text
identity        → developer instructions
project context → AGENTS.md
```

---

## 4. Global and Hierarchical Project Instructions

Codex supports user/global and project-level instruction discovery, including `AGENTS.md` and local override behavior in current source.

The project chain is path-sensitive.

That makes Codex well-suited to nested operations:

```text
repo/AGENTS.md
repo/backend/AGENTS.md
repo/frontend/AGENTS.md
```

The identity should remain global/stable while local operating detail becomes increasingly specific.

---

## 5. Prompt Economy

OpenAI's published harness-engineering guidance explicitly warns against turning one giant `AGENTS.md` into an encyclopedia.

Use the same principle here:

- keep durable identity dense;
- keep root `AGENTS.md` as a high-signal map;
- move deep project knowledge into structured docs;
- use skills/procedures for recurring workflows;
- load relevant detail when needed.

A SOUL Blueprint adapter should improve navigation and judgment, not inflate fixed context.

---

## 6. Codex-Specific Source Pattern

Recommended identity repository:

```text
agent-identity/
├── SOUL.core.md
├── adapters/
│   └── codex/
│       └── generated-developer-instructions.txt
└── tests/
```

Compilation process:

```text
SOUL.core.md
  → validate
  → optionally add tiny Codex adapter preamble
  → serialize into `developer_instructions`
```

Keep the generated artifact reproducible.

---

## 7. Security and Authority

Do not rely on developer instructions alone for hard control.

Codex has runtime-level concepts such as:

- sandbox/environment restrictions;
- permission instructions;
- managed configuration;
- tool availability;
- network/file boundaries.

Map safety-sensitive authority into enforceable mechanisms wherever possible.

SOUL should still explain durable judgment, for example:

> Prefer reversible local work; obtain authorization before consequential external or irreversible effects.

But actual production credentials and destructive access should be constrained independently.

---

## 8. Multi-Agent Behavior

Codex supports multi-agent functionality in current implementations, but identity and context inheritance are runtime details that can evolve.

Do not assume spawned agents receive the full parent's developer instructions, project instructions, skill context, or history exactly as expected.

Test:

- shared constitutional principles;
- nested `AGENTS.md` behavior;
- permission reduction;
- task/context transfer;
- compaction/resume.

For specialized agents, prefer small role-specific instructions plus a shared constitutional checksum instead of cloning a giant SOUL blindly.

---

## 9. Verification

After adaptation:

1. Confirm the configured developer instructions are active.
2. Confirm root `AGENTS.md` is separately loaded.
3. Move into a nested scope and test more-specific project guidance.
4. Test false-premise correction.
5. Test weak-plan pushback.
6. Test reversible local action.
7. Test destructive/high-risk action boundaries.
8. Test long-context/compaction behavior.
9. Spawn/delegate to another agent if used and verify constitutional behavior.

Where available, inspect Codex status/trajectory/context information rather than assuming configuration implies effective context.

---

## 10. Avoid

- using project `AGENTS.md` as the sole home for a cross-project personal identity;
- overriding built-in model instructions merely to install a SOUL;
- copying the same identity into global and every project `AGENTS.md`;
- treating `AGENTS.md` as a system/developer instruction layer;
- putting secrets in instruction files;
- assuming child agents inherit every instruction source.

---

## 11. Adapter Verdict

Codex maps cleanly to the Blueprint when its instruction layers are respected:

> **SOUL → developer/durable identity instructions; OPERATIONS → hierarchical `AGENTS.md`; HARD AUTHORITY → sandbox/permissions; PROCEDURES → skills/workflows.**

The key is to preserve Codex's own harness architecture rather than forcing native-SOUL conventions onto it.
