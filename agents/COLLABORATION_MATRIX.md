# Agent Collaboration Matrix

**Version:** 1.0  
**Date:** 8 July 2026

This matrix defines how every pair of agents interacts. For each pair: **when** they collaborate, **shared responsibilities**, **common conflicts**, and **escalation path**.

Legend: **Escalation** format is `Primary → Secondary → Final`.

---

## CEO ↔ All Agents

| Aspect | Detail |
|--------|--------|
| When | Strategic direction, major release approval, unresolved cross-functional conflicts |
| Shared | Vision alignment, success metrics, go/no-go decisions |
| Conflicts | Speed vs. quality; scope creep vs. focus |
| Escalation | N/A (final authority) |

---

## CEO ↔ Product Manager

| Aspect | Detail |
|--------|--------|
| When | Roadmap approval, prioritization disputes, market positioning |
| Shared | Product vision, milestone definition, success criteria |
| Conflicts | Feature breadth vs. time-to-market |
| Escalation | CEO (final) |

---

## CEO ↔ CTO

| Aspect | Detail |
|--------|--------|
| When | Technical strategy, hiring/tooling budget equivalents, major platform bets |
| Shared | Scalability roadmap, technical risk register |
| Conflicts | Engineering investment vs. feature delivery |
| Escalation | CEO (final) |

---

## CEO ↔ QA Engineer

| Aspect | Detail |
|--------|--------|
| When | Release blocked by quality; production incident severity assessment |
| Shared | Release quality bar, incident communication |
| Conflicts | Ship date vs. open defects |
| Escalation | CEO (final) |

---

## CEO ↔ Compliance Officer

| Aspect | Detail |
|--------|--------|
| When | Health claim policies, regulatory exposure, AI safety incidents |
| Shared | User safety, legal disclaimers, privacy posture |
| Conflicts | Product ambition vs. compliance constraints |
| Escalation | CEO (final) |

---

## Product Manager ↔ Scrum Master

| Aspect | Detail |
|--------|--------|
| When | Sprint planning, backlog refinement, velocity tracking |
| Shared | Sprint goal, backlog health, impediment visibility |
| Conflicts | Overcommitment vs. realistic capacity |
| Escalation | Product Manager → CEO |

---

## Product Manager ↔ UX/UI Designer

| Aspect | Detail |
|--------|--------|
| When | New features, onboarding, premium experience reviews |
| Shared | User flows, acceptance criteria for UX, design priorities |
| Conflicts | Feature complexity vs. simplicity principle |
| Escalation | Product Manager → CEO |

---

## Product Manager ↔ Software Architect

| Aspect | Detail |
|--------|--------|
| When | Feasibility assessment, domain boundaries, MVP scoping |
| Shared | Technical feasibility, modular delivery strategy |
| Conflicts | Ideal architecture vs. MVP timeline |
| Escalation | CTO → CEO |

---

## Product Manager ↔ Data Analytics Engineer

| Aspect | Detail |
|--------|--------|
| When | Metric definition, experiment design, retention analysis |
| Shared | KPIs, event taxonomy, funnel definitions |
| Conflicts | Data collection minimization vs. insight depth |
| Escalation | Product Manager; Compliance if PII involved |

---

## Product Manager ↔ AI Coach

| Aspect | Detail |
|--------|--------|
| When | Coach behavior requirements, tone, motivation strategies |
| Shared | Coaching experience, personalization rules |
| Conflicts | Engagement tactics vs. sustainable adherence |
| Escalation | CAIO → Product Manager → CEO |

---

## Product Manager ↔ Compliance Officer

| Aspect | Detail |
|--------|--------|
| When | Health-related features, onboarding disclaimers, subscription claims |
| Shared | User-facing claims, consent flows |
| Conflicts | Marketing language vs. safe claims |
| Escalation | CEO |

---

## Scrum Master ↔ Engineering (all)

| Aspect | Detail |
|--------|--------|
| When | Daily coordination, dependency tracking, sprint ceremonies |
| Shared | Task status, blockers, cross-team dependencies |
| Conflicts | Hidden work vs. sprint commitment |
| Escalation | Product Manager → CTO |

---

## CTO ↔ Software Architect

| Aspect | Detail |
|--------|--------|
| When | Architecture reviews, ADR approval, technical standards |
| Shared | System integrity, tech debt policy, stack adherence |
| Conflicts | Pragmatic shortcuts vs. long-term design |
| Escalation | CTO (final) |

---

## CTO ↔ CAIO

| Aspect | Detail |
|--------|--------|
| When | AI infrastructure, model costs, AI security architecture |
| Shared | AIProvider strategy, observability for AI, scaling AI workloads |
| Conflicts | AI capability vs. infrastructure cost/latency |
| Escalation | CTO (final) |

---

## CTO ↔ DevOps Engineer

| Aspect | Detail |
|--------|--------|
| When | CI/CD, hosting, incident response, environment strategy |
| Shared | Deployment reliability, monitoring stack |
| Conflicts | Deployment speed vs. safety gates |
| Escalation | CTO (final) |

---

## CTO ↔ Security Engineer

| Aspect | Detail |
|--------|--------|
| When | Threat modeling, auth design, incident response |
| Shared | Security standards, vulnerability management |
| Conflicts | Security controls vs. developer velocity |
| Escalation | CTO → CEO for risk acceptance |

---

## CTO ↔ QA Engineer

| Aspect | Detail |
|--------|--------|
| When | Test strategy, CI quality gates, release readiness |
| Shared | Definition of Done enforcement, test automation scope |
| Conflicts | Test coverage depth vs. delivery speed |
| Escalation | CTO → CEO |

---

## CAIO ↔ AI Engineer

| Aspect | Detail |
|--------|--------|
| When | AIProvider implementation, embeddings, tool orchestration |
| Shared | Model abstraction, latency, fallback strategies |
| Conflicts | Model capability vs. cost/latency budget |
| Escalation | CAIO → CTO |

---

## CAIO ↔ AI Coach

| Aspect | Detail |
|--------|--------|
| When | Prompt design, memory strategy, coaching policies |
| Shared | Coach personality, safety guardrails, context assembly |
| Conflicts | Conversational richness vs. safety/compliance |
| Escalation | CAIO → Compliance Officer → CEO |

---

## CAIO ↔ Compliance Officer

| Aspect | Detail |
|--------|--------|
| When | AI output policies, health recommendation boundaries |
| Shared | AI safety rules, disclaimer triggers, escalation to human |
| Conflicts | AI autonomy vs. mandatory disclaimers |
| Escalation | CEO |

---

## Software Architect ↔ Backend Engineer

| Aspect | Detail |
|--------|--------|
| When | API design, service boundaries, Supabase Edge Functions |
| Shared | Clean architecture layers, business rule placement |
| Conflicts | Client-side convenience vs. server-side authority |
| Escalation | CTO |

---

## Software Architect ↔ Frontend Engineer

| Aspect | Detail |
|--------|--------|
| When | Web app structure, shared packages, data fetching patterns |
| Shared | Monorepo boundaries, TanStack Query usage, type sharing |
| Conflicts | UI-specific shortcuts vs. shared abstractions |
| Escalation | CTO |

---

## Software Architect ↔ Mobile Engineer

| Aspect | Detail |
|--------|--------|
| When | Mobile app structure, shared packages, offline strategy |
| Shared | Mobile-first flows, package reuse from `packages/` |
| Conflicts | Platform-specific UX vs. code sharing |
| Escalation | CTO |

---

## Software Architect ↔ Database Engineer

| Aspect | Detail |
|--------|--------|
| When | Schema design, domain mapping, migration strategy |
| Shared | PostgreSQL model aligned to `DOMAIN_MODEL.md` |
| Conflicts | Normalization vs. query performance |
| Escalation | CTO |

---

## Software Architect ↔ AI Engineer

| Aspect | Detail |
|--------|--------|
| When | AI service boundaries, API contracts for coach |
| Shared | Decoupled AI layer, no direct DB access from AI |
| Conflicts | AI context needs vs. domain encapsulation |
| Escalation | CAIO → CTO |

---

## Software Architect ↔ DevOps Engineer

| Aspect | Detail |
|--------|--------|
| When | Infrastructure topology, environment parity |
| Shared | Scalability paths, observability hooks |
| Conflicts | Infra simplicity vs. future flexibility |
| Escalation | CTO |

---

## Software Architect ↔ Security Engineer

| Aspect | Detail |
|--------|--------|
| When | Auth flows, RLS design, data classification |
| Shared | Security by design, least privilege |
| Conflicts | Security layers vs. complexity |
| Escalation | CTO → CEO |

---

## Backend Engineer ↔ Database Engineer

| Aspect | Detail |
|--------|--------|
| When | Migrations, Drizzle schemas, query optimization |
| Shared | Data integrity, transaction boundaries |
| Conflicts | Application convenience vs. schema purity |
| Escalation | Software Architect → CTO |

---

## Backend Engineer ↔ AI Engineer

| Aspect | Detail |
|--------|--------|
| When | Coach API, context assembly, memory retrieval |
| Shared | Service layer between AI and database |
| Conflicts | Payload size vs. context richness |
| Escalation | CAIO → Software Architect |

---

## Backend Engineer ↔ Frontend Engineer

| Aspect | Detail |
|--------|--------|
| When | API contracts, validation schemas (Zod), error handling |
| Shared | Type-safe contracts via `packages/types` |
| Conflicts | API churn vs. frontend velocity |
| Escalation | Software Architect |

---

## Backend Engineer ↔ Mobile Engineer

| Aspect | Detail |
|--------|--------|
| When | API contracts, realtime subscriptions, push triggers |
| Shared | Consistent API behavior across clients |
| Conflicts | Mobile-specific endpoints vs. API uniformity |
| Escalation | Software Architect |

---

## Backend Engineer ↔ Security Engineer

| Aspect | Detail |
|--------|--------|
| When | Auth middleware, RLS policies, input validation |
| Shared | Server-side enforcement of business rules |
| Conflicts | Dev ergonomics vs. strict validation |
| Escalation | CTO |

---

## Frontend Engineer ↔ Mobile Engineer

| Aspect | Detail |
|--------|--------|
| When | Shared UI package, design tokens, validation schemas |
| Shared | `packages/ui`, `packages/types`, consistent UX |
| Conflicts | Web-specific patterns vs. mobile native feel |
| Escalation | UX/UI Designer → Product Manager |

---

## Frontend Engineer ↔ UX/UI Designer

| Aspect | Detail |
|--------|--------|
| When | Component implementation, responsive layouts, accessibility |
| Shared | Design system, shadcn/ui customization |
| Conflicts | Design fidelity vs. implementation cost |
| Escalation | Product Manager |

---

## Mobile Engineer ↔ UX/UI Designer

| Aspect | Detail |
|--------|--------|
| When | Mobile flows, gestures, platform guidelines |
| Shared | Mobile-first interaction design |
| Conflicts | iOS/Android conventions vs. brand consistency |
| Escalation | Product Manager |

---

## AI Engineer ↔ AI Coach

| Aspect | Detail |
|--------|--------|
| When | Prompt templates, RAG/memory implementation, evaluation |
| Shared | End-to-end coaching quality |
| Conflicts | Engineering constraints vs. ideal coaching flow |
| Escalation | CAIO |

---

## AI Engineer ↔ Backend Engineer

| Aspect | Detail |
|--------|--------|
| When | Context APIs, conversation storage, tool endpoints |
| Shared | Orchestration layer for coach requests |
| Conflicts | Sync vs. async coach response patterns |
| Escalation | Software Architect → CAIO |

---

## AI Coach ↔ UX/UI Designer

| Aspect | Detail |
|--------|--------|
| When | Chat UI, coach feedback presentation, motivation moments |
| Shared | Coach perceived as trustworthy and helpful |
| Conflicts | Chat density vs. cognitive load |
| Escalation | Product Manager |

---

## AI Coach ↔ Compliance Officer

| Aspect | Detail |
|--------|--------|
| When | Medical disclaimers, injury/illness responses, supplement advice |
| Shared | Safe coaching language |
| Conflicts | Helpful tone vs. required caution |
| Escalation | CAIO → CEO |

---

## Database Engineer ↔ Security Engineer

| Aspect | Detail |
|--------|--------|
| When | RLS, encryption, PII column handling |
| Shared | Data protection at rest and in queries |
| Conflicts | Query flexibility vs. row-level isolation |
| Escalation | CTO |

---

## DevOps Engineer ↔ Security Engineer

| Aspect | Detail |
|--------|--------|
| When | Secrets management, CI permissions, Sentry/PostHog config |
| Shared | Secure pipelines, no secrets in repo |
| Conflicts | Pipeline speed vs. security scanning |
| Escalation | CTO |

---

## DevOps Engineer ↔ QA Engineer

| Aspect | Detail |
|--------|--------|
| When | CI test gates, Playwright in pipeline, preview environments |
| Shared | Automated quality enforcement |
| Conflicts | Pipeline duration vs. test thoroughness |
| Escalation | CTO |

---

## QA Engineer ↔ Security Engineer

| Aspect | Detail |
|--------|--------|
| When | Auth testing, OWASP checks, penetration test follow-up |
| Shared | Security regression prevention |
| Conflicts | Scope of security testing in sprint |
| Escalation | CTO |

---

## QA Engineer ↔ All Engineers

| Aspect | Detail |
|--------|--------|
| When | Test plan creation, bug verification, regression |
| Shared | Quality standards, bug documentation |
| Conflicts | Bug severity classification |
| Escalation | QA → CTO → CEO (release block) |

---

## Data Analytics Engineer ↔ DevOps Engineer

| Aspect | Detail |
|--------|--------|
| When | PostHog deployment, event pipeline reliability |
| Shared | Analytics infrastructure |
| Conflicts | Third-party script impact on performance |
| Escalation | CTO |

---

## Data Analytics Engineer ↔ Frontend/Mobile Engineers

| Aspect | Detail |
|--------|--------|
| When | Event instrumentation, privacy-preserving tracking |
| Shared | Consistent event naming and properties |
| Conflicts | Tracking granularity vs. privacy minimization |
| Escalation | Product Manager + Compliance Officer |

---

## Data Analytics Engineer ↔ AI Engineer

| Aspect | Detail |
|--------|--------|
| When | Coach effectiveness metrics, model performance tracking |
| Shared | AI quality observability |
| Conflicts | Logging conversation content vs. privacy |
| Escalation | CAIO + Compliance Officer |

---

## Compliance Officer ↔ Security Engineer

| Aspect | Detail |
|--------|--------|
| When | GDPR, health data handling, breach procedures |
| Shared | Privacy by design |
| Conflicts | Data retention for analytics vs. minimization |
| Escalation | CEO |

---

## Compliance Officer ↔ UX/UI Designer

| Aspect | Detail |
|--------|--------|
| When | Consent screens, health disclaimers, subscription terms UI |
| Shared | Clear, accessible legal/safety communication |
| Conflicts | UX friction vs. compliance visibility |
| Escalation | CEO |

---

## Quick Escalation Reference

| Situation | Path |
|-----------|------|
| Requirement unclear | Engineer → Product Manager |
| Architecture dispute | Engineer → Software Architect → CTO |
| AI behavior dispute | AI Coach → CAIO → Product Manager |
| Security vulnerability | Any → Security Engineer → CTO |
| Compliance block | Any → Compliance Officer → CEO |
| Release quality block | QA → CTO → CEO |
| Production incident | DevOps → CTO → CEO |
