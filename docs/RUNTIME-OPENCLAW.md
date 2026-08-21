# RUNTIME-OPENCLAW.md — OpenClaw Implementation Reference

**Verified against current official OpenClaw documentation: 2026-08-21.**

Runtime behavior evolves. Re-check official docs before relying on exact implementation details.

## 1. SOUL.md Role

OpenClaw uses `SOUL.md` as the workspace file for **persona, tone, stance, boundaries, and durable conversational character**.

Official guidance emphasizes:

- strong behavioral rules;
- concise identity guidance;
- opinions and directness where appropriate;
- avoiding biographies, changelogs, security-policy dumps, and walls of vague personality text.

The principle is simple:

> Short beats long. Sharp beats vague.

## 2. Workspace Identity Stack

Current OpenClaw documentation describes a broader workspace bootstrap model including files such as:

- `AGENTS.md` — operating instructions/project context;
- `SOUL.md` — persona, boundaries, tone;
- `IDENTITY.md` — name/vibe/identity metadata;
- `USER.md` — user profile;
- `BOOTSTRAP.md` — one-time first-run ritual in new workspaces;
- `MEMORY.md` — durable long-term memory when present.

Other context surfaces may exist depending on version/configuration.

The key lesson is architectural separation.

## 3. SOUL Content

Use SOUL for:

- voice;
- opinions;
- brevity/directness;
- humor posture;
- boundaries;
- stable relationship style.

Avoid turning it into:

- a life story;
- a tool manual;
- a giant safety policy;
- a changelog;
- project architecture;
- volatile current facts.

## 4. Bootstrap Injection

OpenClaw builds its own system prompt for agent runs and injects workspace bootstrap context according to runtime rules.

The exact prompt surface can differ between harnesses.

Do not assume a file's conceptual role implies identical propagation in every runtime adapter.

## 5. Native Codex Nuance

Current OpenClaw system-prompt documentation describes special handling for native Codex-style harnesses.

Important consequences include:

- execution-folder `AGENTS.md` can be handled through native project-doc discovery;
- workspace SOUL/IDENTITY/USER may be routed differently from project AGENTS;
- memory may be accessed via memory tools instead of pasted repeatedly;
- subagent inheritance can differ from main-session behavior.

Engineering consequence:

Test actual propagation if identity consistency across subagents is important.

## 6. Subagents

Current docs describe smaller prompt modes for subagents.

Do not assume every child agent automatically receives every workspace identity/memory file.

If a workflow requires a subagent to preserve specific judgment principles, verify what context that harness receives.

## 7. Context Limits

Current official docs describe bounded bootstrap context.

Documented defaults include:

- per-file bootstrap character cap;
- total bootstrap character cap.

At the time of this verification, official docs describe a default per-file maximum of 20,000 characters and total bootstrap maximum of 60,000 characters for relevant paths, but these are configuration/runtime facts and should not be treated as timeless doctrine.

Large files can be truncated while remaining intact on disk.

## 8. Prompt-Economy Consequence

Do not fill every workspace file to its cap.

A stronger architecture uses:

- concise SOUL identity;
- concise root AGENTS rules;
- memory retrieval;
- specialist skills;
- targeted project context.

Every permanently injected line competes for model attention.

## 9. Safety

OpenClaw's own system prompt can contain behavioral guardrails, but official documentation notes that prompt safety is advisory rather than equivalent to hard enforcement.

Use:

- tool policy;
- sandboxing;
- approvals;
- allowlists;
- access control

for enforceable restrictions.

SOUL can reinforce a security posture but should not be treated as a security boundary by itself.

## 10. The Official Starter Philosophy

The official SOUL template emphasizes principles including:

- genuinely helpful rather than performatively helpful;
- opinions and constructive disagreement;
- resourcefulness before asking;
- competence as the basis for trust;
- caution with external actions;
- respect for private access;
- concise when appropriate, thorough when needed;
- avoidance of sycophancy and corporate blandness.

These are useful design examples, not mandatory universal personality rules.

## 11. Molty / Sharper Persona Guidance

OpenClaw publishes an intentionally opinionated personality guide encouraging:

- strong takes;
- brevity;
- direct disagreement;
- natural humor;
- removal of corporate filler.

Treat this as style guidance for agents where that voice fits.

Do **not** universalize it to:

- customer-support surfaces;
- regulated communication;
- formal public communications;
- emotionally sensitive contexts

without adaptation.

## 12. Recommended Workspace Pattern

```text
workspace/
├── AGENTS.md
├── SOUL.md
├── IDENTITY.md
├── USER.md
├── MEMORY.md
├── skills/
├── memory/
└── project files...
```

Exact files vary by runtime/configuration.

## 13. OpenClaw Design Rule

Keep SOUL responsible for:

> **voice, stance, identity, judgment character, and durable boundaries.**

Keep operational mechanics elsewhere.

## 14. Deployment Checklist

- [ ] Verify current OpenClaw docs/version.
- [ ] Check workspace file roles.
- [ ] Check bootstrap size limits.
- [ ] Confirm harness/subagent behavior.
- [ ] Remove volatile facts from SOUL.
- [ ] Move procedures to AGENTS/skills.
- [ ] Check memory separation.
- [ ] Test long-context identity stability.
- [ ] Test public/external authorization behavior.
- [ ] Inspect context diagnostics if truncation is suspected.

## Official Sources

- https://docs.openclaw.ai/concepts/soul
- https://docs.openclaw.ai/reference/templates/SOUL
- https://docs.openclaw.ai/concepts/system-prompt
- https://docs.openclaw.ai/concepts/agent
- https://docs.openclaw.ai/reference/token-use
