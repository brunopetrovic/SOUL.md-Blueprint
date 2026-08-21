# SOUL Blueprint Machine-Readable Specification

This directory contains machine-readable artifacts for runtime portability and adapter tooling.

## Runtime Capability Profile

`RUNTIME-CAPABILITY-PROFILE.schema.json` defines the canonical JSON Schema for describing how an AI runtime can transport the Blueprint's semantic layers.

The schema exists to make runtime adapters:

- comparable;
- auditable;
- automatable;
- source-aware;
- explicit about lossy mappings;
- independent from product-specific prose conventions.

## What the profile describes

A Runtime Capability Profile records:

- runtime identity and verification date;
- compatibility level;
- whether a literal/native SOUL convention exists;
- durable identity surfaces;
- project/workspace instruction surfaces;
- user context and memory;
- skills/procedures;
- enforceable permissions and approvals;
- subagent inheritance;
- context loading, compaction, and resume behavior;
- context budgets and truncation;
- trust/security behavior;
- observability;
- canonical-layer mapping;
- lossy mappings and limitations;
- verification tests;
- first-party sources.

## Why this matters

The Blueprint deliberately separates **semantic identity** from **runtime transport**.

Without a structured profile, adapter authors tend to make hidden assumptions such as:

- every runtime has a `SOUL.md` file;
- project rules are equivalent to system identity;
- subagents inherit everything;
- a file present on disk is definitely present in effective model context;
- prose boundaries are equivalent to enforceable permissions;
- context limits are universal.

Those assumptions are often false.

The capability profile forces the adapter to state what is actually known.

## Recommended workflow

1. Research the target runtime using current first-party documentation/source.
2. Fill a Runtime Capability Profile.
3. Validate it against the JSON Schema.
4. Use `../templates/RUNTIME-ADAPTER.template.md` to write the human-readable adapter.
5. Compile the canonical SOUL package into the selected native surfaces.
6. Run the adapter regression suite.
7. Record known limitations.
8. Re-verify after major runtime updates.

## Minimal illustrative profile

```json
{
  "schema_version": "1.0.0",
  "runtime": {
    "name": "Example Harness",
    "vendor": "Example Vendor",
    "version": null,
    "status": "stable",
    "verified_at": "2026-08-21"
  },
  "compatibility_level": "L2",
  "native_soul": {
    "supported": false,
    "filename_or_convention": null,
    "notes": "Uses a durable custom-agent prompt instead."
  },
  "identity": {
    "supported": true,
    "type": "custom-agent",
    "path_or_config": "agents/developer.md",
    "scope": ["agent"],
    "precedence": "higher than project rules",
    "replace_or_append": "compose",
    "load_timing": "session startup",
    "version_control_friendly": true,
    "notes": null
  },
  "operations": {
    "supported": true,
    "surfaces": [],
    "hierarchical": true,
    "nested_discovery": true,
    "precedence_notes": "More-local project rules are more specific."
  },
  "authority": {
    "enforceable_controls": true,
    "permission_model": "allow/ask/deny",
    "sandbox": null,
    "approval_model": "ask for consequential actions",
    "network_controls": null,
    "filesystem_controls": null,
    "managed_policy": null
  },
  "lifecycle": {
    "loading_model": "identity at startup; project rules discovered by scope",
    "startup": "yes",
    "per_turn": null,
    "lazy_loading": "project-specific",
    "compaction": "unknown",
    "resume": "unknown",
    "reinjection": "unknown",
    "cache_behavior": null
  },
  "sources": [
    {
      "url": "https://example.com/official-docs",
      "authority": "official-docs",
      "checked_at": "2026-08-21",
      "notes": null
    }
  ]
}
```

The example is illustrative only and does not describe a real product.

## Stability policy

The schema itself should evolve conservatively.

Runtime-specific facts change quickly; the semantic categories should change only when a genuinely new portability dimension is discovered.

When breaking the schema, increment `schema_version` and document migration guidance.
