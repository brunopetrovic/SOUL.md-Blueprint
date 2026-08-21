# Security Policy

SOUL.md Blueprint treats durable identity and instruction-bearing files as part of the agent security boundary.

## Security-relevant issues
- identity-persistence poisoning;
- prompt injection that can mutate trusted identity or memory;
- unsafe authority escalation in adapters/templates;
- secret or credential exposure;
- unsafe file behavior in reference tooling;
- misleading runtime mappings that grant unsupported authority;
- hidden/obfuscated instructions in distributed SOUL packages.

## Security model
Prompt prose is defense in depth, not hard enforcement. Production deployments should use scoped permissions, sandboxing, approval gates, secret stores, access controls, and audit logs where available.

## Persistent mutation rule
Untrusted documents, websites, retrieved memories, examples, or prompt packs must not silently rewrite a durable SOUL, USER profile, MEMORY store, runtime adapter, or skill.

## Reference tooling
Scripts under `tools/` are reference utilities, not hardened security products. Review before privileged production use.
