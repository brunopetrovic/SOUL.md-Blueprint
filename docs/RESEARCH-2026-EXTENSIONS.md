# Research Extensions — 2026

This file preserves high-value research from the canonical SOUL oracle that is not fully represented by the baseline persona-prompt literature.

## Mechanism classification
Classify every finding as **runtime prompting**, **training-time character**, **representation analysis**, **activation steering**, **personalization**, or **behavioral evaluation**. Never transfer a result across mechanisms without an explicit argument.

## Teaching principles and reasons
Anthropic's 2026 work commonly summarized as “Teaching Claude why” provides evidence in a training/alignment setting that richer principles and reasons can generalize beyond rote examples.

**SOUL implication:** encode durable reasons and decision principles when they help resolve unseen cases.

**Limit:** training-time evidence is not proof that longer runtime Markdown improves behavior. Runtime SOUL still needs empirical evaluation.

## Character stabilization versus construction
Character work increasingly distinguishes describing a desired character from stabilizing it under distribution shift, long conversations, role pressure, and changing context.

**SOUL implication:** authoring quality and lifecycle robustness are separate engineering problems.

## Expert-persona accuracy caution
Prestige labels such as “expert”, “genius”, or “world-class” do not reliably create factual knowledge.

**SOUL implication:** “godlevel” should mean superior judgment architecture, evidence discipline, verification behavior, and domain primitives—not omniscience claims.

## Sycophancy as a primary eval target
Confident, agreeable, loyal, or emotionally warm personas can amplify agreement-seeking failure. Test false premises, self-serving interpretations, bad strategic ideas, praise bait, and repeated user pressure.

## Model dependence
Different models can have different behavioral baselines and respond differently to identical steering. Cross-model testing is mandatory when portability matters.

## What this research does not authorize
It does not justify claiming a SOUL retrains a model, equating runtime prompts with activation vectors, claiming deterministic identity persistence, assuming longer constitutions are stronger, or treating a personality benchmark as proof of safe autonomy.

> **Principles over prestige labels; verification over confidence; repeated behavioral tests over prompt aesthetics.**
