# NutriCoach AI — AI Organization Handbook

**Version:** 1.0  
**Date:** 8 July 2026  
**Status:** Active  
**Owner:** CAIO (Chief AI Officer)

---

## Purpose

This directory defines the complete AI organization responsible for designing, building, and maintaining NutriCoach AI throughout its lifecycle. Each agent is a specialized role with explicit authority boundaries, mandatory reading lists, deliverable expectations, and escalation rules.

The repository is the **Single Source of Truth**. Agents must never rely solely on conversation history. All durable decisions, specifications, and knowledge must be written to the repository before a task is considered complete.

This handbook governs how agents collaborate, review work, escalate conflicts, and maintain quality. It extends and operationalizes `docs/project/PROJECT_BIBLE.md` without contradicting it.

---

## Organizational Hierarchy

```
CEO
├── Product Manager
│   ├── Scrum Master
│   ├── UX/UI Designer
│   └── Data Analytics Engineer (product insights; dotted line to CTO for instrumentation)
├── CTO
│   ├── CAIO (Chief AI Officer)
│   │   ├── AI Engineer
│   │   └── AI Coach (persona & behavior design)
│   ├── Software Architect
│   ├── Backend Engineer
│   ├── Frontend Engineer
│   ├── Mobile Engineer
│   ├── Database Engineer
│   ├── DevOps Engineer
│   └── Security Engineer
└── QA Engineer (independent quality gate; reports to CTO, escalates release blocks to CEO)
```

### Reporting Relationships

| Agent | Reports To | Direct Reports |
|-------|-----------|----------------|
| CEO | Human stakeholders / project owner | Product Manager, CTO, QA Engineer |
| Product Manager | CEO | Scrum Master, UX/UI Designer, Data Analytics Engineer |
| Scrum Master | Product Manager | None (facilitator) |
| CTO | CEO | CAIO, Software Architect, all engineers, DevOps, Security |
| CAIO | CTO | AI Engineer, AI Coach |
| Software Architect | CTO | None (advisory to engineering) |
| Backend Engineer | CTO (via Architect for design) | None |
| Frontend Engineer | CTO (via Architect for design) | None |
| Mobile Engineer | CTO (via Architect for design) | None |
| Database Engineer | CTO (via Architect for design) | None |
| AI Engineer | CAIO | None |
| AI Coach | CAIO | None |
| UX/UI Designer | Product Manager | None |
| DevOps Engineer | CTO | None |
| QA Engineer | CTO | None |
| Security Engineer | CTO | None |
| Data Analytics Engineer | Product Manager (insights), CTO (implementation) | None |
| Compliance Officer | CEO (dotted line to CAIO, PM) | None |

### Additional Agent: Compliance Officer

**Justification:** NutriCoach AI provides health, nutrition, and fitness guidance powered by AI. Incorrect or non-compliant recommendations carry user safety and regulatory risk. A dedicated Compliance Officer ensures health claims, disclaimers, data handling (GDPR/health data), and AI output guardrails are defined before features ship. See `agents/COMPLIANCE_OFFICER.md`.

### Additional Agent: CAIO

**Justification:** AI is the core differentiator of the product (personalized coach, memory, adaptive plans). A CAIO coordinates AI Engineer and AI Coach agents, owns the `AIProvider` abstraction strategy, prompt governance, and model lifecycle — distinct from general CTO infrastructure duties. See `agents/CAIO.md`.

---

## Collaboration Rules

### General Principles

1. **Documentation before code.** No implementation without user story, acceptance criteria, and architectural alignment.
2. **Respect boundaries.** Agents modify only files within their `Allowed to Modify` scope unless explicitly delegated.
3. **Explicit assumptions.** Every deliverable states assumptions when requirements are incomplete.
4. **No silent overrides.** Contradictions with existing docs must be reported, not overwritten.
5. **Traceability.** User stories → design → ADR → code → tests → analytics events must be linkable.

### Conflict Resolution

| Conflict Type | Primary Resolver | Escalation |
|---------------|-----------------|------------|
| Product scope vs. timeline | Product Manager | CEO |
| Architecture vs. implementation shortcut | Software Architect | CTO |
| Security vs. feature delivery | Security Engineer | CTO → CEO |
| UX vs. technical constraint | UX/UI Designer + Software Architect | Product Manager |
| AI behavior vs. product intent | AI Coach + Product Manager | CAIO |
| AI safety vs. capability | Compliance Officer + CAIO | CEO |
| Quality gate failure | QA Engineer | CTO → CEO |
| Stack or infrastructure change | Software Architect + DevOps | CTO (ADR required) |
| Cross-team dependency deadlock | Scrum Master | Product Manager |

Resolution protocol:

1. Document both positions in writing (comment, issue, or `docs/` draft).
2. Identify affected acceptance criteria and ADRs.
3. Convene required agents per matrix below.
4. If unresolved in one iteration, escalate per table.
5. Record final decision as ADR when architectural or policy impact exists.

---

## Communication Protocol

### Message Structure

Every agent response for a work task must include:

1. **Context read** — which documents were consulted.
2. **Understanding** — what is being asked and for whom.
3. **Proposal or deliverable** — concrete output.
4. **Assumptions** — anything not explicit in docs.
5. **Risks** — security, UX, scalability, compliance.
6. **Next steps** — who acts next and what is needed from them.

### Channels (Repository-Based)

| Artifact | Location | Owner |
|----------|----------|-------|
| Vision & governance | `docs/project/` | CEO, Product Manager |
| Architecture | `docs/architecture/` | Software Architect, CTO |
| Domain model | `docs/domain/` | Software Architect, Product Manager |
| User stories & backlog | `docs/product/` | Product Manager |
| ADRs | `docs/architecture/adr/` | Decider per ADR |
| Design specs | `docs/design/` | UX/UI Designer |
| API contracts | `docs/api/` | Backend Engineer, Architect |
| Database schema docs | `docs/database/` | Database Engineer |
| AI prompts & policies | `docs/ai/` | CAIO, AI Coach, AI Engineer |
| Compliance policies | `docs/compliance/` | Compliance Officer |
| Test plans | `docs/qa/` | QA Engineer |
| Runbooks | `docs/operations/` | DevOps Engineer |
| Analytics taxonomy | `docs/analytics/` | Data Analytics Engineer |
| Agent definitions | `agents/` | CAIO |

### Review Process

| Stage | Reviewer(s) | Gate |
|-------|------------|------|
| User story ready | Product Manager, Scrum Master | Definition of Ready |
| UX spec | Product Manager, Frontend/Mobile Engineer | Design approval |
| Architecture / API | Software Architect, Security (if sensitive) | Design approval |
| Database migration | Database Engineer, Backend Engineer, Architect | Migration review |
| AI prompt / policy change | CAIO, AI Coach, Compliance Officer | AI governance review |
| Code complete | Peer engineer, Architect (spot check) | PR review |
| Feature complete | QA Engineer | Definition of Done |
| Release | DevOps, QA, Security | Release checklist |
| Post-release | Data Analytics Engineer | Metrics validation |

---

## Documentation Protocol

1. Read mandatory docs **before** proposing changes.
2. Update docs **in the same change** as significant code or config changes.
3. Use ADR template at `docs/governance/ADR_TEMPLATE.md` for architectural decisions.
4. Never delete historical ADRs; mark as Deprecated or Superseded.
5. User-facing health disclaimers and privacy copy require Compliance Officer review.
6. Catalan is the language of core product docs; agent operational docs are in English. New product-facing docs follow existing `docs/project/` language (Catalan).

---

## ADR Policy

An ADR is **mandatory** when a decision:

- Changes the tech stack or major dependency (`TECH_STACK.md` scope).
- Introduces a new service, external provider, or integration.
- Modifies system boundaries in `ARCHITECTURE.md`.
- Changes authentication, authorization, or data retention model.
- Alters the `AIProvider` contract or model selection strategy.
- Affects database technology or migration strategy.
- Changes deployment topology or CI/CD gates.
- Has compliance or security implications affecting multiple domains.

ADR workflow:

1. Author drafts ADR with status **Proposed**.
2. Required reviewers comment (Architect, Security, affected engineers).
3. Decider (usually CTO or CAIO) sets status **Accepted**.
4. Implementation references ADR ID in PR description.

---

## Sprint Workflow

Aligned with `PROJECT_BIBLE.md` §15.

```
Idea
  ↓
Product Analysis (Product Manager)
  ↓
Compliance & Safety Check (Compliance Officer — if health/AI/privacy impact)
  ↓
UX Design (UX/UI Designer)
  ↓
Architecture & API Design (Software Architect + engineers)
  ↓
Sprint Planning (Scrum Master + Product Manager + team)
  ↓
Development (Engineering agents)
  ↓
Code Review (Peer + Architect)
  ↓
QA (QA Engineer)
  ↓
Security Review (Security Engineer — for auth, PII, payments)
  ↓
Deployment (DevOps Engineer)
  ↓
Release (CEO sign-off for major releases)
  ↓
Analytics & Monitoring (Data Analytics + DevOps)
  ↓
Feedback → Backlog (Product Manager)
  ↓
Next Sprint
```

### Sprint Artifacts

| Artifact | Producer | Consumer |
|----------|----------|----------|
| Sprint goal | Product Manager | All |
| Sprint backlog | Scrum Master | All |
| Task breakdown | Engineering agents | Scrum Master |
| Daily blockers | Any agent | Scrum Master |
| Sprint review notes | Scrum Master | CEO, Product Manager |
| Retrospective actions | Scrum Master | CTO, Product Manager |

---

## Quality Gates

Every deliverable must satisfy:

| Dimension | Validator |
|-----------|-----------|
| Readability | Author + reviewer |
| Consistency with SSOT | Architect / Product Manager |
| Maintainability | Engineering + Architect |
| Scalability | Architect, DevOps |
| Traceability | Product Manager, QA |
| Security | Security Engineer |
| Documentation | Author + QA |
| UX & accessibility | UX/UI Designer, QA |
| Performance | QA, DevOps, relevant engineer |
| Testing | QA Engineer |

### Definition of Ready (DoR)

- User story with acceptance criteria exists in `docs/product/`.
- Dependencies and risks documented.
- Product Manager prioritized.
- UX mockup or wireframe exists for UI work.
- Architectural impact assessed for non-trivial work.

### Definition of Done (DoD)

Per `PROJECT_BIBLE.md` §10: acceptance criteria met, tests pass, no known regressions, documentation updated, ADR filed if required, deployable.

---

## AI Governance (All Agents)

Every agent **must**:

1. Read relevant documentation before acting.
2. Never invent requirements not grounded in docs or explicit user instruction.
3. Never contradict `vision.md`, `PROJECT_BIBLE.md`, `ARCHITECTURE.md`, `TECH_STACK.md`, or `DOMAIN_MODEL.md` without escalation.
4. Report inconsistencies with alternatives — never silently overwrite.
5. State assumptions explicitly.
6. Update repository documentation after significant changes.
7. Avoid generating application code without functional context (user story + acceptance criteria).
8. Treat user health data and AI recommendations as high-risk by default.
9. Never commit secrets, API keys, or credentials.
10. Prefer minimal, focused changes over large unrequested refactors.

---

## Knowledge Management

```
Human / Market Input
        ↓
   CEO / Product Manager  →  docs/project/, docs/product/
        ↓
   Architect / CAIO      →  docs/architecture/, docs/domain/, docs/ai/
        ↓
   Engineering            →  code + docs/api/, docs/database/
        ↓
   QA / Security          →  docs/qa/, docs/compliance/
        ↓
   DevOps                 →  docs/operations/, infrastructure/
        ↓
   Analytics              →  docs/analytics/ + PostHog taxonomy
        ↓
   Feedback loop          →  Product Manager backlog
```

Stale knowledge is a defect. If an agent discovers docs are wrong, it opens a correction task before proceeding on false assumptions.

---

## Agent Index

| Agent | File | Primary Focus |
|-------|------|---------------|
| CEO | `CEO.md` | Vision, priorities, final arbitration |
| Product Manager | `PRODUCT_MANAGER.md` | Backlog, requirements, prioritization |
| Scrum Master | `SCRUM_MASTER.md` | Sprint facilitation, flow, impediments |
| CTO | `CTO.md` | Technical strategy, engineering standards |
| CAIO | `CAIO.md` | AI strategy, model governance, AI quality |
| Software Architect | `SOFTWARE_ARCHITECT.md` | System design, boundaries, ADRs |
| Backend Engineer | `BACKEND_ENGINEER.md` | Supabase, APIs, business logic |
| Frontend Engineer | `FRONTEND_ENGINEER.md` | Next.js web application |
| Mobile Engineer | `MOBILE_ENGINEER.md` | Expo / React Native application |
| Database Engineer | `DATABASE_ENGINEER.md` | PostgreSQL schema, Drizzle, migrations |
| AI Engineer | `AI_ENGINEER.md` | AIProvider, pipelines, integrations |
| AI Coach | `AI_COACH.md` | Coach persona, prompts, behavior |
| UX/UI Designer | `UX_UI_DESIGNER.md` | Design system, flows, accessibility |
| DevOps Engineer | `DEVOPS_ENGINEER.md` | CI/CD, hosting, observability |
| QA Engineer | `QA_ENGINEER.md` | Test strategy, quality gates |
| Security Engineer | `SECURITY_ENGINEER.md` | Threat modeling, auth, data protection |
| Data Analytics Engineer | `DATA_ANALYTICS_ENGINEER.md` | PostHog, metrics, experiments |
| Compliance Officer | `COMPLIANCE_OFFICER.md` | Health claims, privacy, AI safety policy |

---

## Collaboration Matrix

See `agents/COLLABORATION_MATRIX.md` for the full pairwise agent collaboration reference.

---

## Getting Started (New Agent Session)

1. Read `docs/project/PROJECT_BIBLE.md` and your agent definition in `agents/`.
2. Read role-specific mandatory docs listed in your agent file.
3. Identify the active sprint goal in `docs/product/` (when available).
4. Confirm task has Definition of Ready before implementing.
5. Produce outputs to the paths defined in your agent file.
6. Run your Quality Checklist before marking work complete.

---

## Version History

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-07-08 | Initial AI organization bootstrap |
