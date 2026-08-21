# Context Economics

Permanent instructions consume more than tokens; they compete for model attention on every relevant turn.

## Behavioral information density
Optimize for **maximum useful behavioral inference per unit of permanent context**, not minimum length at any price and not maximal completeness.

## Common context taxes
- duplicated principles;
- biography with no decision relevance;
- giant anti-pattern lists;
- procedures that belong in skills;
- runtime manuals in identity;
- obsolete facts;
- excessive examples in always-loaded context.

## Salience
Important principles can become less effective when surrounded by large amounts of equally emphatic text. Express priority structurally and economically.

## Retrieval versus injection
Inject what should remain globally active. Retrieve domain references, historical material, large persona corpora, detailed procedures, and rare examples when needed.

## Budget tests
Measure source SOUL size, compiled artifact size, truncation, prompt position, post-compaction identity, and duplicated identity across layers.

## Compression test
For each paragraph ask:
1. What failure does it prevent?
2. What decision does it control?
3. Is another line already doing this?
4. Could it live in a lower-frequency layer?
5. Does removing it change eval behavior?

Ablation testing is the strongest answer to question 5.

> **A runtime limit is a ceiling, not a writing target.**
