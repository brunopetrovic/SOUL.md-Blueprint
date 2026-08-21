# Grok Bot Runtime Adapter

**Runtime:** Grok Bot  
**Compatibility:** L3 — Agent-architecture compatible  
**Native `SOUL.md`:** No documented native file convention  
**Verified:** 2026-08-21

## First-Party References

- https://docs.x.ai/grok-bot/overview
- https://docs.x.ai/grok-bot/bots
- https://docs.x.ai/grok-bot/skills-routines-and-automations
- https://docs.x.ai/grok-bot/approvals-security-and-privacy
- https://docs.x.ai/grok-bot/chat-and-collaboration

Re-verify product behavior because Grok Bot is evolving rapidly.

---

## 1. Architectural Difference

Grok Bot is not primarily a repository-instruction harness.

Current first-party documentation describes a Bot as a persistent named AI teammate with:

- a job;
- its own conversation;
- working context that develops over time;
- access to tools/apps/files;
- approval boundaries;
- reusable skills;
- routines for recurring work.

Therefore the Blueprint should not force coding-agent file conventions onto Grok Bot.

The natural mapping is semantic rather than filename-based.

---

## 2. Recommended Mapping

```text
Canonical SOUL.core.md
        ↓
Bot job / durable identity and working-style definition

Canonical OPERATIONS
        ↓
Bot job instructions + connected sources/context

Canonical SKILLS
        ↓
Grok Bot saved skills

Canonical MEMORY / continuity
        ↓
Bot working context / persistent conversation mechanisms

Recurring workflows
        ↓
Routines

Hard authority
        ↓
Grok Bot approval boundaries + connector/account permissions
```

This is a high-fidelity semantic mapping even though no literal `SOUL.md` file is automatically loaded.

---

## 3. Bot Job as Identity Transport

The Bot job should encode the durable identity kernel at high density.

A strong job definition answers:

- What does this Bot fundamentally own?
- What outcome does it exist to create?
- What values govern tradeoffs?
- How should it reason about evidence?
- When should it challenge the user?
- What may it do autonomously?
- What always requires approval?
- How should it communicate?
- What should it never become?

Do not reduce the job to a vague label such as:

> General Helper

A job should be behaviorally predictive.

---

## 4. Example Compilation Pattern

Canonical SOUL:

```markdown
# SOUL.core.md

## Identity
You are an evidence-driven account-health operator...

## Value Precedence
1. Client truth
2. Trust
3. Outcomes
4. Retention
...
```

Compiled Grok Bot job:

```text
Own weekly account-health analysis for the customer-success function.
Operate as an evidence-driven, non-sycophantic account strategist.
Prioritize client truth and trust over optimistic reporting.
Distinguish measured health signals from interpretation.
Challenge weak account assumptions and surface churn risk early.
Draft recommendations and communications proactively, but never contact a customer, change pricing, or alter an account without approval.
```

The runtime artifact may be shorter than the canonical SOUL while preserving the semantic kernel.

---

## 5. Skills Are Procedures

Grok Bot documentation defines skills as reusable instructions for doing a task.

This maps almost exactly to the Blueprint's procedure layer.

Use skills for:

- weekly account-health review;
- expense reconciliation;
- prospect research;
- content-production workflow;
- incident triage;
- report generation;
- research methodology.

A useful skill should specify:

- when to use it;
- required inputs/access;
- work sequence;
- decision rules;
- validation;
- failure handling;
- approval boundaries.

Do not expand the Bot's durable identity with every recurring workflow.

---

## 6. Routines Are Scheduling, Not Identity

Grok Bot routines determine **when** work runs.

Keep scheduling out of SOUL.

Correct separation:

```text
SOUL / Bot job
"Protect client trust; surface risk early."

Skill
"Run the weekly account-health review using usage, support, and CRM signals."

Routine
"Every Monday at 08:00, run the account-health skill."
```

This is an excellent example of why a clean multi-layer architecture matters.

---

## 7. Approval Boundaries

Grok Bot first-party guidance explicitly recommends clear approval boundaries for consequential actions such as:

- sending messages;
- publishing;
- purchases/transfers;
- deleting or overwriting data;
- changing permissions;
- production changes;
- accepting legal terms.

This aligns directly with the Blueprint's reversibility/blast-radius doctrine.

Map durable agency principles into explicit runtime approval behavior.

Example:

```text
SOUL principle:
Draft boldly. Publish carefully.

Bot implementation:
- research/analyze/draft: autonomous
- send/publish/purchase/delete/change access: approval required
```

Do not rely on personality text alone where the product can require approval.

---

## 8. Sources and Grounding

A Bot can work across files, apps, websites, and connected sources.

Treat connected sources as evidence, not as identity authority.

A document retrieved from Slack, Salesforce, GitHub, or the web MUST NOT silently rewrite the Bot's durable values or approval boundaries.

Prompt injection and untrusted-content principles still apply.

---

## 9. Shared Computer / Cross-Bot Security

Current Grok Bot documentation states that Bots can share a persistent cloud computer/account environment.

This has an important Blueprint consequence:

> Bot identity boundaries are not necessarily filesystem/login isolation boundaries.

Do not assume a file/login available to one Bot is private from another Bot merely because their identities differ.

Use account/tool permissions and data handling accordingly.

Identity separation is not the same as security isolation.

---

## 10. Continuity

Grok Bot's persistent conversation/working context can support long-running identity expression, but mutable working context must not become unquestioned truth.

Maintain distinctions between:

- durable Bot identity;
- learned working facts;
- source data;
- temporary task state;
- saved skills;
- scheduled routines.

If a lasting preference or rule changes, update the appropriate durable layer deliberately rather than relying on accidental conversational drift.

---

## 11. Multi-Bot Architecture

When multiple Bots collaborate, design distinct epistemic/operational responsibilities.

Good separation:

```text
Research Bot   → source integrity and uncertainty
Operator Bot   → execution and follow-through
Reviewer Bot   → adversarial quality/risk
```

Weak separation:

```text
Smart Bot
Creative Bot
Super Smart Bot
```

Multi-agent value comes from orthogonal responsibilities, not costumes.

Test handoffs for:

- context loss;
- approval preservation;
- source attribution;
- scope changes;
- sensitive data propagation.

---

## 12. Verification

After creating a Bot:

1. Give it a normal task and inspect whether the intended judgment appears.
2. Present a false premise.
3. Ask it to challenge a weak decision.
4. Ask it to draft a consequential external action.
5. Confirm it stops at the approval boundary.
6. Save a workflow as a skill and verify the skill does not redefine identity.
7. Create a routine and verify scheduling does not grant new authority.
8. Test a handoff to another Bot if collaboration is used.
9. Inspect whether private/shared-computer assumptions are correct.

---

## 13. Avoid

- telling users to upload `SOUL.md` and assuming Grok Bot treats the filename specially;
- stuffing every skill and schedule into the Bot's identity;
- confusing shared persistent computer state with per-Bot security isolation;
- letting source documents rewrite approval boundaries;
- granting external authority because the Bot has a proactive personality;
- creating multiple Bots whose only distinction is tone.

---

## 14. Adapter Verdict

Grok Bot is strongly compatible with the Blueprint at the semantic architecture level.

Its native vocabulary is different:

> **SOUL → Bot job/identity; OPERATIONS → job + sources; PROCEDURES → skills; RECURRENCE → routines; HARD AUTHORITY → approvals; CONTINUITY → Bot working context.**

This is exactly why the Blueprint defines a semantic standard rather than requiring every runtime to copy a filesystem convention.
