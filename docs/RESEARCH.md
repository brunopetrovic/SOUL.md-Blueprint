# RESEARCH.md — Empirical Evidence Relevant to SOUL.md Engineering

## Purpose

SOUL.md is a runtime prompt/context mechanism, not a research field with one canonical benchmark.

This document collects empirical findings from adjacent research on:

- persona prompting;
- personality expression;
- truthfulness/persona representations;
- steering;
- bias;
- role prompting;
- behavioral control.

Research findings should inform engineering, not be converted into universal laws without regard to methodology.

---

# 1. Persona Prompts Do Not Automatically Improve Factual Performance

## Zheng et al. — EMNLP 2024 Findings

**When “A Helpful Assistant” Is Not Really Helpful: Personas in System Prompts Do Not Improve Performances of Large Language Models**

Source:
https://aclanthology.org/2024.findings-emnlp.888/

The study evaluated 162 roles across multiple relationship and expertise categories, multiple model families, and thousands of factual questions.

Reported finding:

Adding personas did not generally improve factual-question performance compared with a no-persona control. Persona effects varied and could be largely unpredictable.

### Engineering implication

Do not assume:

> “You are a world-class expert”

creates expert factual knowledge.

SOUL should improve **behavioral orientation, judgment, verification, and interaction style**, not pretend to manufacture knowledge that the underlying model lacks.

A strong expert soul therefore says things such as:

- verify unstable technical facts;
- reason from domain first principles;
- inspect source code or primary evidence;
- admit uncertainty.

It should not rely on prestige labels alone.

---

# 2. LLMs Can Express Prompted Personality Traits

## Jiang et al. — NAACL Findings 2024

**PersonaLLM: Investigating the Ability of Large Language Models to Express Personality Traits**

Source:
https://aclanthology.org/2024.findings-naacl.229/

The study examined whether GPT-3.5/GPT-4-based personas could express designated Big Five personality traits in self-report and writing tasks.

The authors reported measurable alignment between designated traits and generated behavior, with some traits perceptible by human evaluators.

### Engineering implication

Runtime persona instructions can meaningfully influence observable expression.

This supports engineering:

- directness;
- warmth;
- communication style;
- personality traits;
- linguistic patterns.

But expression is not equivalent to improved domain correctness.

**Style control and factual competence are distinct dimensions.**

---

# 3. Persona Variables Have Limited but Contextual Effects in Human Simulation

## Hu & Collier — ACL 2024

**Quantifying the Persona Effect in LLM Simulations**

Source:
https://aclanthology.org/2024.acl-long.554/

The paper studied persona variables in subjective annotation simulation.

Reported findings include modest statistically significant gains in some settings, with benefits depending on how strongly persona variables actually explained human variation.

### Engineering implication

Persona information is useful when it is **causally or behaviorally relevant to the target task**.

Adding irrelevant demographic or character detail can consume context without improving performance.

SOUL should therefore favor **decision-relevant identity information** over decorative biography.

---

# 4. Persona Steering Can Reproduce Stereotypes and Fail on Incongruous Traits

## Liu, Diab & Fried — ACL Findings 2024

**Evaluating Large Language Model Biases in Persona-Steered Generation**

Source:
https://aclanthology.org/2024.findings-acl.586/

The authors found that models could be less steerable toward “incongruous” personas and could sometimes produce stereotypical positions associated with demographic traits rather than the requested stance.

### Engineering implication

Avoid building identity from demographic shorthand.

Do not assume:

> “As a person from group X, you believe Y.”

High-quality identity design should specify actual values, viewpoints, and decision principles rather than relying on stereotypes.

This is especially important for digital twins and role simulations.

---

# 5. Persona-Like Representations May Exist Internally

## Joshi et al. — EMNLP 2024

**Personas as a Way to Model Truthfulness in Language Models**

Source:
https://aclanthology.org/2024.emnlp-main.364/

The authors investigate a “persona hypothesis” for truthfulness, presenting evidence that model representations can encode patterns related to truthful/untruthful generating agents.

### Engineering implication

This is evidence that model behavior can exhibit abstract trait-like structure beyond simple surface tokens.

However, this paper is about model representations and training data structure — not proof that a Markdown SOUL directly controls a fixed internal “truthfulness persona.”

Use it as conceptual support for trait/disposition thinking, not as a runtime guarantee.

---

# 6. Persona Vectors and Behavioral Directions

## Chen et al. — 2025

**Persona Vectors: Monitoring and Controlling Character Traits in Language Models**

Source:
https://arxiv.org/abs/2507.21509

The work identifies activation-space directions associated with traits including sycophancy and hallucination propensity, and studies monitoring/control of behavioral shifts.

### Engineering implication

The paper provides evidence that some behavioral traits may have measurable representation-level correlates.

For SOUL engineering, the cautious implication is:

- character is not purely cosmetic;
- repeated behavioral traits may be coherent enough to monitor and evaluate;
- persona drift and unintended character shifts are valid engineering concerns.

Do not claim that prompt-level SOUL text directly sets these activation vectors in a deterministic way.

---

# 7. Dynamic Personality Control Research

## Feng et al. — 2026 preprint

**PERSONA: Dynamic and Compositional Inference-Time Personality Control via Activation Vector Algebra**

Source:
https://arxiv.org/abs/2602.15669

The paper proposes activation-level personality control and reports strong benchmark performance in its experimental setup.

### Engineering implication

Personality control is an active research area extending beyond natural-language prompting.

SOUL.md should therefore be understood as **one control surface** among others:

- training;
- fine-tuning;
- activation steering;
- runtime prompts;
- examples;
- memory/context;
- policy/tool constraints.

Do not attribute activation-steering results to Markdown prompting.

---

# 8. Large-Scale Persona-Vector Auditing

## Zeng, Emami & Choi — 2026 preprint

**What Models Express, Suppress, and Resist: Auditing Open-Weight LLMs with Persona Vectors**

Source:
https://arxiv.org/abs/2607.13162

This work applies persona-vector methods across a broader trait inventory and explores which traits appear natural, steerable, or resistant in tested open-weight models.

### Engineering implication

Different model baselines may respond differently to the same persona specification.

Therefore:

> **A portable SOUL must be tested on the actual target model/runtime rather than assumed to transfer perfectly.**

---

# 9. Persona Research Is Broader Than Role-Playing

## Tseng et al. — EMNLP Findings 2024

**Two Tales of Persona in LLMs: A Survey of Role-Playing and Personalization**

Source:
https://aclanthology.org/2024.findings-emnlp.969/

The survey separates two broad areas:

1. role-playing — persona assigned to the model;
2. personalization — modeling the user's persona/preferences.

### Engineering implication

This supports architectural separation between:

- **SOUL.md** — model/agent identity;
- **USER.md** — user profile/personalization.

Blending them can create conceptual and operational confusion.

---

# 10. Factuality Remains a Separate Problem

## Wang et al. — EMNLP 2024

**Factuality of Large Language Models: A Survey**

Source:
https://aclanthology.org/2024.emnlp-main.1088/

The factuality literature documents persistent challenges in open-ended generation.

### Engineering implication

A truth-oriented SOUL should include behaviors that reduce factual failure:

- source verification;
- uncertainty calibration;
- current-fact lookup;
- explicit distinction between inference and evidence.

But SOUL cannot guarantee factuality by itself.

---

# 11. What Research Does NOT Justify

Current evidence does not justify universal claims such as:

- “A persona always improves task accuracy.”
- “Longer persona prompts are more intelligent.”
- “Persona drift is mathematically guaranteed after exactly N turns.”
- “A SOUL makes the agent internally become that person.”
- “One personality benchmark proves real-world identity stability.”
- “Prompt persona and activation-level persona vectors are the same mechanism.”

Treat dramatic claims skeptically unless the original study actually supports them.

---

# 12. Practical Research-Derived Principles

The evidence base supports or is consistent with several cautious engineering conclusions:

## A. Role labels are weak substitutes for actual decision architecture

“Expert X” does not reliably create factual expertise.

## B. Personality instructions can affect observable behavior

Therefore identity wording matters.

## C. Persona details should be task-relevant

Irrelevant biography can add noise.

## D. Explicit values are safer than demographic inference

Avoid stereotypes.

## E. Model baselines differ

Test across target models/runtimes.

## F. Truthfulness requires epistemic engineering

Persona should not replace retrieval, verification, or factual evaluation.

## G. Behavioral traits deserve regression testing

If a trait matters, test it rather than assuming the prompt worked.

---

# 13. Research Intake Standard

Before adding a new empirical claim to this repository:

1. Read the original paper or authoritative source.
2. Record the tested models.
3. Record the task and benchmark.
4. Distinguish correlation from causal evidence.
5. Record whether the claim is about prompting, training, representations, activation steering, or user personalization.
6. State limitations that materially affect SOUL engineering.
7. Avoid universalizing beyond the experiment.

---

# 14. Research Bottom Line

The science does **not** say that writing a grand persona prompt makes an AI magically smarter.

It does show that:

- persona and character can influence observable behavior;
- role labels alone are unreliable for factual improvement;
- models can encode and express trait-like behavioral structure;
- different models may respond differently to steering;
- identity and personalization require careful evaluation.

Therefore the strongest SOUL methodology focuses on:

> **decision architecture, epistemic discipline, relevant identity information, runtime-aware deployment, and behavioral testing.**
