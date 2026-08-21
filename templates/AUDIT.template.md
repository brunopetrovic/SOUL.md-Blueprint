# AUDIT.template.md — SOUL.md Audit

Use this template to audit an existing identity file before refactoring it.

## Metadata

- Agent:
- Runtime:
- SOUL version/date:
- Auditor:
- Related files inspected:
- Context limits/config checked:

## 1. Executive Verdict

### Overall score

`__/10`

### Classification

- Weak role prompt
- Functional persona
- Strong identity
- Production-grade SOUL
- Exceptional / regression-tested identity

### Top strengths

1.
2.
3.

### Highest-risk weaknesses

1.
2.
3.

## 2. Identity Specificity — /5

Questions:

- Is identity deeper than a role title?
- Does it establish an orientation?
- Can a reader predict how the agent approaches problems?

Evidence:

Recommended change:

## 3. Durable Purpose — /5

Questions:

- Is the purpose stable across projects?
- Does it define outcome rather than activity?
- Is it free from temporary goals?

## 4. Relationship to User — /5

Questions:

- Is the relationship archetype explicit?
- Is independent judgment clear?
- Is disagreement posture clear?
- Is expected initiative clear?

## 5. Value Precedence — /5

Questions:

- Are major values stated?
- Can conflicts be resolved?
- Are there contradictory absolutes?

List unresolved collisions:

## 6. Epistemic Discipline — /5

Check for:

- fact vs inference;
- confidence calibration;
- verification triggers;
- false-premise correction;
- prohibition on fabricated state/sources;
- current-information handling.

## 7. Domain First Principles — /5

Questions:

- Does the file encode real expert reasoning primitives?
- Or mainly claim “expert/master/world-class” status?
- Are common domain failure modes addressed?

## 8. Judgment Under Ambiguity — /5

Check thresholds for:

- assuming;
- researching;
- asking;
- proceeding;
- preserving optionality.

## 9. Constructive Disagreement — /5

Check:

- pushback triggers;
- method;
- whether agent risks sycophancy;
- whether agent risks performative contrarianism.

## 10. Autonomy & Authorization — /5

Check:

- reversible internal work;
- external actions;
- destructive actions;
- spending;
- privacy/access changes;
- production/high-blast-radius actions.

Flag:

- permission paralysis;
- unbounded autonomy.

## 11. Communication — /5

Check:

- default density;
- directness;
- warmth;
- jargon;
- humor;
- adaptive depth;
- canned filler.

Is the style behavioral or adjective-only?

## 12. Context Adaptation — /5

Can the identity adapt to:

- routine work;
- teaching;
- high stakes;
- sensitive situations;
- public surfaces;
- incidents;
- temporary modes?

## 13. File-Layer Purity — /5

Mark contamination:

- [ ] project paths
- [ ] commands
- [ ] current deadlines
- [ ] user biography
- [ ] customer data
- [ ] memories
- [ ] procedures
- [ ] tool/API syntax
- [ ] fixed task formats
- [ ] volatile product facts

Move each item to the correct layer.

## 14. Security & Privacy — /5

Check for:

- secrets;
- unsafe persona import;
- real-person impersonation;
- identity mutation rules;
- private-data leakage;
- authorization escalation;
- “never break character” deception.

## 15. Prompt Economy — /5

Questions:

- Is content duplicated?
- Does each section add unique behavioral value?
- Is the file likely to be truncated?
- Are procedures bloating permanent context?
- Is identity frequently changed without need?

## 16. Drift Resistance — /5

Check whether the file clearly separates:

- durable core;
- adaptive surface;
- temporary overlays;
- project context;
- memory.

## 17. Testability — /5

Can each important principle be evaluated behaviorally?

List missing tests:

## 18. Orthogonality Audit

For each repeated principle, identify all locations and choose one canonical formulation.

| Principle | Locations | Keep | Delete/merge |
|---|---|---|---|
| | | | |

## 19. Instruction Classification

| Instruction | Current location | Correct layer | Action |
|---|---|---|---|
| | | | |

Layers:

- SOUL
- IDENTITY
- USER
- MEMORY
- AGENTS
- SKILL
- STYLE
- EXAMPLE
- TASK CONTEXT
- POLICY

## 20. Refactor Plan

### Preserve

- 

### Rewrite

- 

### Move out of SOUL

- 

### Add

- 

### Delete

- 

## 21. Required Regression Tests

- [ ] Routine
- [ ] Ambiguous
- [ ] Wrong premise
- [ ] Weak idea
- [ ] Insufficient evidence
- [ ] High stakes
- [ ] Sensitive interaction
- [ ] Teaching
- [ ] Brevity
- [ ] Reversible internal action
- [ ] Irreversible external action
- [ ] Public/group surface
- [ ] Conflicting instructions
- [ ] Long-session drift
- [ ] Temporary overlay
- [ ] Project-context conflict

## Final Audit Question

> If the agent encounters a novel situation tomorrow, does this SOUL give it enough durable judgment to behave correctly without a new rule being added?
