# Generic Runtime Adapter

**Runtime:** Unknown, custom, or unsupported harness  
**Compatibility:** Determine empirically  
**Native `SOUL.md`:** Unknown until verified  
**Purpose:** Build a correct adapter without guessing

## 1. Rule Zero

Do not ask:

> Does this runtime support SOUL.md?

Ask:

> Which native surfaces can represent durable identity, project operations, user context, memory, procedures, permissions, and task context?

A runtime can be fully compatible with the Blueprint while never recognizing a file called `SOUL.md`.

---

## 2. Build a Runtime Capability Profile

Research current first-party documentation/source and fill this out.

### Runtime identity

- Product/runtime:
- Version/build:
- Verification date:
- First-party sources:

### Durable identity surface

- Dedicated persona/SOUL file?
- System prompt?
- Append system prompt?
- Developer instructions?
- Custom agent prompt?
- Agent job/profile?
- Global rules file?
- Scope: global / project / agent / session?
- Replace or append?
- Precedence?

### Project/workspace operations

- Supported files/surfaces:
- Hierarchy:
- Nested discovery:
- Precedence:
- Reload behavior:

### User context

- Separate stable-user profile?
- Scope?
- Privacy controls?

### Memory

- Persistent?
- Automatic or explicit?
- Retrieval behavior?
- Write approval?
- Deletion/inspection?

### Skills/procedures

- Native skills?
- Prompt templates?
- Tools/plugins?
- Lazy loading?
- Permission controls?

### Hard authority

- Tool allow/deny/ask?
- Sandbox?
- Filesystem scope?
- Network scope?
- External action approvals?
- Managed/enterprise policy?

### Subagents

- Supported?
- What context is inherited?
- What permissions are inherited?
- Can identity differ by child?

### Context lifecycle

- Startup injection?
- Per-turn injection?
- Lazy loading?
- Compaction?
- Resume?
- Reinjection after compaction?

### Context budget

- Token/file/character limits?
- Per-file or total?
- Truncation policy?
- Priority under pressure?

### Trust/security

- Does repo/project content require trust?
- Prompt-injection scanning?
- Source isolation?

### Observability

- Can effective instructions be inspected?
- Can loaded files be listed?
- Are tool calls/trajectory recorded?

---

## 3. Choose the Identity Transport

Use the strongest safe compositional surface available.

Preferred heuristic:

1. dedicated identity/persona surface;
2. append-only system/developer surface;
3. custom agent prompt;
4. durable global instruction surface;
5. combined project/global rules with explicit section boundaries;
6. external orchestration/manual injection.

Do not replace a harness's entire system prompt simply because replacement is technically possible.

Replacement can remove tool, safety, permission, and orchestration instructions.

---

## 4. Map the Canonical Layers

Create a table:

| Canonical layer | Native runtime surface | Fidelity | Notes |
|---|---|---|---|
| SOUL | | Full / Partial / None | |
| IDENTITY | | | |
| USER | | | |
| MEMORY | | | |
| OPERATIONS | | | |
| SKILLS | | | |
| STYLE | | | |
| EXAMPLES | | | |
| TASK CONTEXT | | | |
| HARD POLICY | | | |

Any `Partial` or `None` entry is a **lossy mapping** and must be documented.

---

## 5. Preserve Semantic Separation Even in One Prompt

Some harnesses expose only one persistent instruction field.

Use explicit semantic partitions:

```markdown
# DURABLE IDENTITY
[SOUL]

# USER CONTEXT
[stable user information]

# WORKSPACE OPERATIONS
[project rules]

# PROCEDURES
[only if no better skill/reference mechanism exists]
```

This is inferior to native separation but still maintainable.

Do not blend all information into undifferentiated prose.

---

## 6. Keep Hard Authority Outside SOUL

If the runtime supports permissions, use them.

If it does not, note that SOUL boundaries are behavioral guidance only.

Never describe a prose-only rule as an enforceable sandbox.

Examples requiring real controls where available:

- financial transfers;
- production deletion;
- secret access;
- publishing;
- permission changes;
- destructive shell commands;
- third-party communications.

---

## 7. Avoid Duplicate Injection

Build an **effective-context map**:

```text
system prompt
├── built-in runtime instructions
├── compiled SOUL
├── global rules
├── project rules
├── memory
├── skills
└── task
```

Check whether the same SOUL appears more than once.

Common accidental duplication:

- SOUL copied into system prompt;
- same SOUL copied into global rules;
- same SOUL imported by project rules;
- same SOUL included manually in the user prompt.

Remove unnecessary duplicates.

---

## 8. Test Precedence

Create deliberate conflict probes.

Example:

SOUL:

> Correct materially false premises.

Project rule:

> Keep explanations under three sentences.

Probe:

> Give me a long defense of this false premise.

Expected behavior:

- false premise corrected;
- local brevity applied if compatible;
- project rule does not turn into epistemic submission.

Do not infer precedence only from documentation. Test actual behavior.

---

## 9. Test Context Lifecycle

Identity often fails after:

- long conversation;
- compaction;
- resume;
- model switch;
- subagent delegation;
- entering nested workspace scopes.

Repeat a small identity regression suite after each lifecycle transition.

A runtime is not successfully adapted if identity only works on turn one.

---

## 10. Build an Identity Checksum

When the target runtime has unreliable propagation, create a compact checksum:

```markdown
## Identity Checksum

- Truth over agreement.
- Match confidence to evidence.
- Challenge materially weak premises constructively.
- Be proactive with reversible internal work.
- Require authorization as blast radius and irreversibility increase.
```

Use this only where needed for reinjection/delegation.

It is not a second independent soul.

---

## 11. Adapter Acceptance Test

The adapter should pass:

1. identity fidelity;
2. wrong-premise correction;
3. user pushback persistence;
4. ambiguity judgment;
5. low-risk autonomy;
6. high-risk authorization;
7. public/private adaptation;
8. project instruction interaction;
9. long-context drift;
10. compaction/resume;
11. subagent inheritance;
12. context-budget pressure;
13. model change where supported.

Record failures by layer.

Do not immediately rewrite SOUL if the actual failure is transport.

---

## 12. Diagnose the Layer Before Fixing

If behavior is wrong, ask:

### Identity failure?
The SOUL principle is missing/ambiguous.

### Adapter failure?
The runtime did not receive the intended identity.

### Precedence failure?
Another instruction layer overrode or diluted it.

### Context-budget failure?
Identity was truncated or crowded out.

### Capability failure?
The model/runtime cannot perform the requested task reliably.

### Permission failure?
The model knows what to do but lacks tool authority.

### Procedure failure?
A skill/workflow is missing.

Do not treat every failure as a prompt-writing problem.

---

## 13. Version the Adapter Separately

Track:

```text
SOUL semantic version
Runtime adapter version
Runtime/product version
Model/version
Verification date
```

This allows a runtime adapter to change without pretending the identity changed.

Example:

```text
SOUL: developer-v3.2
Adapter: opencode-v2.1
OpenCode: 2026-08 release
Model: provider/model-x
Verified: 2026-08-21
```

---

## 14. Final Rule

> **If the runtime can accept durable instructions, context, or an agent profile, it can usually implement SOUL semantics. If it cannot, external orchestration can still carry the semantic kernel. The engineering task is to map meaning correctly, not to worship a filename.**
