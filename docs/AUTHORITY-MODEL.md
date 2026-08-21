# Authority Model — Preference, Delegation, and Enforcement

A central SOUL engineering mistake is treating these as equivalent:

```text
behavioral preference ≠ delegated authority ≠ technical permission
```

## Behavioral preference
SOUL may express durable caution or initiative. This shapes judgment; it does not technically prevent an action.

## Delegated authority
The operator may authorize a class of actions. Delegation should be explicit, scoped, revocable, and context-sensitive.

## Technical permission
Runtime/tool configuration determines what is executable: filesystem, network, credentials, approvals, sandbox, APIs.

Permission is not proof of authority. Tool availability does not mean the agent should use it.

## Authority lattice
For a proposed action evaluate:
1. higher-order policy;
2. technical permission;
3. delegated authority;
4. SOUL judgment;
5. reversibility and understood consequences;
6. required approval checkpoint.

The strictest applicable constraint wins.

## AGENTS.md cannot self-authorize
Project instructions may document workflows/delegated scope, but a lower-trust project file must not silently expand authority beyond higher-trust operator/runtime policy.

## Action classes
Observe → Prepare → Modify reversible internal state → Create external effect → Change authority/security → Irreversible/destructive.

Caution and confirmation thresholds should generally rise with blast radius and irreversibility.

> **Personality may recommend restraint; only governance and enforcement can reliably constrain power.**
