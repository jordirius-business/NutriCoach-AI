# Architecture Decision Record

**ADR ID:** ADR-001  
**Title:** Monorepo Foundation and Repository Topology  
**Status:** Proposed  
**Date:** 2026-07-08  
**Deciders:** Software Architect, CTO  
**Supersedes:** N/A  
**Superseded by:** N/A

---

## Context

NutriCoach AI is building:

- Web application
- iOS application
- Android application

with a product strategy that is:

- Mobile-first
- AI-first
- Modular
- Documentation-first
- Security-by-design

The approved technical direction (from SSOT) includes:

- Next.js, Expo, React Native
- Supabase, PostgreSQL, Drizzle ORM
- Shared architecture principles (API-first, modular boundaries, observability)
- Long-term evolution toward social features, B2B capabilities, and advanced AI operations

The organization requires a formal repository decision before implementation starts, so engineering can execute with consistent boundaries and long-term maintainability.

This ADR defines:

- Repository model (Monorepo vs Polyrepo)
- Build orchestration tooling
- Package manager
- Repository layout and dependency direction
- Ownership and governance boundaries
- Scalability behavior over user growth phases
- Risks and migration path if this decision changes in future

---

## Decision

NutriCoach AI adopts a **Monorepo** model, orchestrated with **Turborepo**, using **pnpm** as the package manager.

The official repository topology is:

- `apps/` for deployable applications
- `packages/` for reusable internal libraries
- `supabase/` for backend platform artifacts
- `tooling/` for repository-level development and build tooling
- `docs/` for all durable project knowledge
- `agents/` for AI organization and role governance
- `.github/` for CI/CD and repository automation

This structure is mandatory for MVP and intended to remain stable through V1, V1.1, and V2 unless superseded by a future ADR.

---

## Alternatives Considered

## 1) Repository Model

| Alternative             | Pros                                                                                                                                                                                                   | Cons                                                                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Monorepo (Selected)** | Shared types/contracts across web/mobile/backend; single-source versioning; simpler cross-platform refactors; easier architectural consistency; better alignment with MVP speed + long-term modularity | Requires strict dependency governance; build graph complexity; can increase CI cost if unmanaged                                                                             |
| Polyrepo                | Strong isolation per service/app; smaller local repos; independent release cadence                                                                                                                     | High duplication of types/contracts; integration drift risk; cross-repo coordination overhead; slower architectural convergence; harder AI/platform shared package evolution |

### Why Monorepo is selected

Monorepo best matches project constraints:

1. **Cross-platform shared logic is a core requirement** (web + mobile + AI + backend).
2. **Domain and architecture consistency** is critical for health-oriented product reliability.
3. **MVP speed with future scalability** requires reducing integration friction.
4. **AI-first architecture** needs shared interfaces (`AIProvider`, domain contracts, memory schema contracts) across multiple runtime surfaces.

Polyrepo is rejected for MVP because it introduces unnecessary coordination overhead and increases risk of contract drift during rapid product iteration.

---

## 2) Monorepo Build Tooling

| Alternative              | Pros                                                                                                                                                                    | Cons                                                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Turborepo (Selected)** | Strong performance with task caching; straightforward task pipeline model; widely used with Next.js ecosystem; low conceptual overhead for mixed app/library workspaces | Fewer built-in architectural enforcement features than Nx; governance relies more on conventions and lint rules |
| Nx                       | Rich graph intelligence and policy controls; advanced plugin ecosystem; strong enterprise governance options                                                            | Higher configuration/learning complexity; steeper onboarding for small-to-mid teams in MVP phase                |
| Moonrepo                 | Fast and modern task runner; strong caching and workspace ergonomics                                                                                                    | Smaller ecosystem/adoption footprint in this stack context; lower team familiarity assumptions                  |

### Why Turborepo is selected

Turborepo provides the best balance for current phase:

- Fast enough for MVP throughput
- Simple mental model for cross-team adoption
- Native compatibility with Next.js and React ecosystem workflows
- Lower setup complexity than Nx for initial delivery phase

Nx remains a valid future option if stricter graph policy enforcement becomes necessary at later scale.

---

## 3) Package Manager

| Alternative         | Pros                                                                                                                                                              | Cons                                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **pnpm (Selected)** | Efficient disk usage via content-addressable store; strong workspace support; strict dependency resolution reduces hidden coupling; performant in large monorepos | Some ecosystem tools assume npm defaults; requires team familiarity with workspace behavior                                   |
| npm                 | Default ecosystem familiarity; minimal additional tooling assumptions                                                                                             | Less optimized monorepo workspace ergonomics and store efficiency for large graph                                             |
| yarn                | Mature workspaces; broad ecosystem familiarity                                                                                                                    | Multiple Yarn generations/modes can increase repo policy ambiguity; lockfile and tooling consistency risk across contributors |

### Why pnpm is selected

pnpm is selected for:

- Monorepo performance and consistency
- Deterministic workspace dependency behavior
- Better long-term scaling characteristics for many internal packages

---

## Repository Layout

## Canonical Tree (Decision-Level)

```text
/
├── apps/
│   ├── web/
│   ├── mobile/
│   ├── admin/
│   └── marketing/
├── packages/
│   ├── ui/
│   ├── database/
│   ├── shared/
│   ├── config/
│   ├── types/
│   ├── ai/
│   └── utils/
├── supabase/
├── tooling/
├── docs/
├── agents/
└── .github/
```

### Directory Rationale

| Directory   | Why it exists                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------- |
| `apps/`     | Deployable product surfaces and user-facing runtime boundaries                                 |
| `packages/` | Reusable internal modules that reduce duplication and enforce consistency                      |
| `supabase/` | Backend platform artifacts (schema/migrations/functions/config) under controlled source        |
| `tooling/`  | Repository-level scripts, task helpers, quality tooling wrappers, developer workflow utilities |
| `docs/`     | Single Source of Truth for product, architecture, governance, and engineering artifacts        |
| `agents/`   | AI role definitions, escalation model, and collaboration governance                            |
| `.github/`  | CI/CD workflows, repository automation, policy checks                                          |

---

## Applications Scope

| App              | Responsibility                                                                        | MVP relevance                                     |
| ---------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `apps/mobile`    | Primary user product surface for daily interactions, tracking, coach usage            | **Primary MVP client**                            |
| `apps/web`       | Web experience for broader access, administrative and parity flows as roadmap evolves | MVP-limited; expands post-MVP                     |
| `apps/admin`     | Operational/admin interfaces (content, moderation, support, configuration)            | Future-facing; may begin as minimal internal tool |
| `apps/marketing` | Public product website, acquisition pages, messaging, conversion flows                | Optional early; strategic for growth phases       |

Note: `apps/admin` and `apps/marketing` are defined now for architectural continuity, even if implemented incrementally.

---

## Shared Packages Scope

| Package             | Responsibility                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `packages/ui`       | Cross-platform design system primitives, component contracts, interaction consistency     |
| `packages/database` | Drizzle schema definitions, query helpers, migration utilities abstractions               |
| `packages/shared`   | Cross-domain shared business primitives that are not UI/data-access specific              |
| `packages/config`   | Centralized project configuration contracts (lint/test/build/runtime config abstractions) |
| `packages/types`    | Domain and API type contracts shared across app and service boundaries                    |
| `packages/ai`       | AI provider abstraction, orchestration interfaces, memory/context contract utilities      |
| `packages/utils`    | Generic reusable utilities with strict domain-neutral boundaries                          |

Non-negotiable: package responsibilities must remain narrow and explicit; catch-all package growth is not allowed.

---

## Dependency Rules

## Allowed Direction

```text
apps/*  ---> packages/*
apps/*  ---> supabase (via APIs/contracts, not direct DB internals in client apps)

packages/ui       ---> packages/types, packages/config, packages/utils
packages/ai       ---> packages/types, packages/config, packages/utils
packages/database ---> packages/types, packages/config, packages/utils
packages/shared   ---> packages/types, packages/utils
packages/utils    ---> (no domain package dependencies)
packages/types    ---> (leaf contract package; no app dependencies)
```

## Prohibited Imports

1. No `packages/*` importing from any `apps/*`.
2. No circular dependencies between packages.
3. `packages/ui` must not import from `packages/database`.
4. `packages/database` must not import UI or app-level modules.
5. `packages/ai` must not directly couple to app runtime modules.
6. Client applications must not contain critical business rules that bypass backend validation.

## Dependency Governance Rules

- Dependency direction is domain-downward, never app-upward.
- Shared contracts live in `packages/types`, not duplicated in apps.
- Architectural violations are escalation events to Software Architect and CTO.

---

## Ownership Model

| Top-level area      | Primary owner                                           | Secondary stakeholders                  |
| ------------------- | ------------------------------------------------------- | --------------------------------------- |
| `apps/web`          | Frontend Engineer                                       | UX/UI Designer, Backend Engineer, QA    |
| `apps/mobile`       | Mobile Engineer                                         | UX/UI Designer, Backend Engineer, QA    |
| `apps/admin`        | Frontend Engineer (initial)                             | Product Manager, DevOps, QA             |
| `apps/marketing`    | Frontend Engineer (initial)                             | Product Manager, Data Analytics         |
| `packages/ui`       | Frontend + Mobile Engineers                             | UX/UI Designer                          |
| `packages/database` | Database Engineer                                       | Backend Engineer, Security Engineer     |
| `packages/types`    | Software Architect                                      | Backend, Frontend, Mobile, AI Engineers |
| `packages/ai`       | AI Engineer                                             | CAIO, Backend Engineer                  |
| `packages/config`   | CTO / DevOps Engineer                                   | All engineering roles                   |
| `packages/shared`   | Software Architect                                      | Backend Engineer                        |
| `packages/utils`    | Engineering shared ownership under Architect governance | All engineering roles                   |
| `supabase/`         | Backend + Database Engineers                            | Security Engineer, DevOps               |
| `tooling/`          | DevOps Engineer                                         | CTO, QA Engineer                        |
| `docs/`             | Role-based per artifact ownership map                   | CTO + PM for consistency                |
| `agents/`           | CAIO                                                    | CTO, Product Manager                    |
| `.github/`          | DevOps Engineer                                         | QA, Security, CTO                       |

Ownership changes require explicit governance update in relevant role documentation.

---

## Scalability Model (No Structural Redesign Required)

The selected structure scales by increasing implementation depth, not changing repository topology.

| Scale            | Expected behavior                                                                               | Structural impact                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ~100 users       | Single deployment path, basic observability, rapid iteration                                    | No structural change                                                           |
| ~10,000 users    | Stronger CI optimization, stricter package boundaries, expanded monitoring                      | No structural change                                                           |
| ~100,000 users   | Service decomposition pressure appears; more robust caching/queueing patterns likely            | No structural change; add modules within existing directories                  |
| ~1,000,000 users | Increased operational complexity, multi-region concerns, advanced data and AI cost optimization | No structural change; evolve internals and deployment topology via future ADRs |

Why this works:

- Monorepo keeps contracts synchronized across growth phases.
- Package boundaries allow progressive extraction/refinement.
- App and domain concerns remain separated.
- AI and database abstractions prevent hard coupling to single implementation path.

---

## Risks, Trade-offs, and Limitations

## Key Risks

1. **Monorepo governance drift**  
   Risk: loose boundaries create coupling and hidden dependencies.

2. **CI performance degradation**  
   Risk: larger graph can slow pipelines if caching and task scoping are weak.

3. **Shared package sprawl**  
   Risk: overly generic packages become dumping grounds.

4. **Ownership ambiguity**  
   Risk: cross-team package areas can become under-maintained.

5. **Tooling lock-in pressure**  
   Risk: build tooling assumptions can harden over time.

## Trade-offs Accepted

- Accepting monorepo operational complexity in exchange for consistency and cross-platform velocity.
- Accepting Turborepo’s lighter governance feature set in exchange for lower onboarding complexity.
- Accepting stricter package manager behavior (pnpm) in exchange for deterministic dependency management.

## Known Limitations

- Additional policy tooling may be needed later for strict graph enforcement.
- Build/task strategy must be actively maintained as package count grows.
- Cross-platform UI abstraction may still require platform-specific divergence management.

---

## Migration Strategy if This ADR Changes

If a future ADR supersedes this decision:

1. **Stabilize contracts first** (`packages/types`, API boundaries).
2. **Isolate migration blast radius** by domain/app, not all at once.
3. **Execute phased extraction** (if moving toward polyrepo) beginning with least-coupled surfaces.
4. **Maintain compatibility windows** for contract consumers.
5. **Run parallel CI validation** during migration.
6. **Document rollback criteria** before each migration phase.

No future migration is authorized without a superseding ADR.

---

## Compliance

- [x] Aligns with `docs/project/vision.md`
- [x] Aligns with `docs/project/PROJECT_BIBLE.md`
- [x] Aligns with `docs/architecture/ARCHITECTURE.md`
- [x] Aligns with `docs/architecture/TECH_STACK.md`
- [x] Aligns with `docs/domain/DOMAIN_MODEL.md`
- [ ] Security Engineer reviewed (if applicable)
- [ ] QA impact assessed (if applicable)

---

## Implementation Notes

This ADR is documentation-only and establishes architecture policy.

Implementation artifacts (scaffolding, folder creation, build configuration) are intentionally out of scope for this ADR and must follow subsequent execution tasks under this decision.

This ADR should be referenced by:

- Engineering standards document(s)
- CI/CD policy configuration
- Package import rule enforcement
- Sprint 0 platform setup tasks

---

## Documented Contradictions

1. **Mandatory path mismatch**  
   Requested: `docs/tech/TECH_STACK.md`  
   Existing SSOT path: `docs/architecture/TECH_STACK.md`

2. **Roadmap governance status**  
   `docs/product/ROADMAP.md` is marked as draft pending founder approval.  
   Architectural planning can proceed, but sprint commitments dependent on roadmap sequencing remain governance-dependent.

No existing documents were modified to resolve these contradictions.

---

## Final Decision

### Repository model

- **Monorepo** is the official repository model.

### Tooling

- **Turborepo** is the official monorepo orchestration tool.
- **pnpm** is the official package manager.

### Folder structure

- Official top-level directories: `apps/`, `packages/`, `supabase/`, `tooling/`, `docs/`, `agents/`, `.github/`.
- Application scope includes `apps/web`, `apps/mobile`, `apps/admin`, `apps/marketing` (incremental implementation allowed).
- Shared package responsibilities are fixed as defined in this ADR.

### Governance

- Dependency direction and ownership rules in this ADR are mandatory.
- Circular dependencies and cross-boundary violations are architectural defects.
- Any structural exception requires explicit architectural escalation.

### Non-negotiable rules

1. No app-to-package reverse imports.
2. No critical business rules exclusively on clients.
3. No direct AI-to-database coupling bypassing service layer.
4. No undocumented structural additions at top level.
5. No deviation from selected tooling without superseding ADR.

### Future evolution

- This topology is intended to scale from MVP to million-user operation without structural redesign.
- Future architectural evolution occurs by adding/refining internals under this topology.
- Any repository model change requires a superseding ADR with phased migration strategy.

---

## Consequences

### Positive

- Strong cross-platform consistency and shared contract integrity.
- Faster coordinated iteration across mobile, web, backend, and AI.
- Clear long-term structural baseline for engineering governance.
- Better alignment with architecture-first and documentation-first policy.

### Negative

- Requires strict governance to avoid dependency drift.
- Can increase CI complexity without disciplined task graph management.
- Shared package ownership requires explicit stewardship.

### Neutral

- Does not force immediate implementation of all planned apps.
- Does not define coding standards or runtime service decomposition details.

---

## Architecture Review

### Strengths

- Provides a complete and enforceable structural foundation before implementation.
- Aligns with approved stack and architecture principles.
- Addresses long-term scale, AI-first needs, and multi-platform delivery.
- Makes dependency direction explicit, reducing future architectural ambiguity.
- Includes ownership and migration strategy, not only directory naming.

### Weaknesses

- Turborepo governance controls are lighter than Nx; requires additional policy discipline.
- `apps/admin` and `apps/marketing` inclusion is architectural foresight that may feel early for MVP scope.
- Some operational constraints (CI partitioning, cache policy) are deferred to future documents.

### Technical Debt Introduced

- Deferred enforcement tooling for import boundary validation.
- Deferred repository-level policy automation details.
- Deferred app-level release boundary specifics for admin/marketing surfaces.

### Future ADR Dependencies

1. ADR-002: Build/CI task graph strategy and cache policy.
2. ADR-003: Package boundary enforcement and architectural linting policy.
3. ADR-004: Supabase project structure and migration governance model.
4. ADR-005: AI package/runtime boundary and observability model.
5. ADR-006: Multi-environment release topology and deployment promotion model.

### Open Questions

1. Should `apps/admin` and `apps/marketing` be mandatory now or optional placeholders until V1.1?
2. What is the formal threshold for splitting shared packages when package size/ownership grows?
3. What CI runtime budget should trigger pipeline architecture optimization?
4. When should stronger graph-policy tooling be introduced (if Turborepo-only governance becomes insufficient)?

### Recommendations for the CTO

1. Ratify this ADR as baseline for Sprint 0 platform setup.
2. Prioritize follow-up ADRs for CI strategy and boundary enforcement early.
3. Require ownership accountability updates in role docs when package scope changes.
4. Ensure security and QA complete formal review on this ADR before status promotion.

### Recommendations for the Founder

1. Confirm tolerance for initial structural investment to reduce long-term rearchitecture risk.
2. Confirm whether future-facing app surfaces (`admin`, `marketing`) should remain in baseline topology.
3. Confirm that roadmap draft status does not block architecture policy approval.
4. Approve this ADR only with explicit commitment to follow-up governance ADRs.

---

**Status: Proposed — Not Approved. Founder approval required before promotion to Accepted.**
