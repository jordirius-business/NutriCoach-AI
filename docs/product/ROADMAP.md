# NutriCoach AI — Product Roadmap

**Version:** 1.0  
**Status:** Draft — Pending Founder (CEO) Approval  
**Owner:** Product Manager  
**Last Updated:** 8 July 2026  
**References:** `docs/product/MVP_DEFINITION.md`, `docs/project/vision.md`, `docs/project/PROJECT_BIBLE.md`, `docs/architecture/ARCHITECTURE.md`, `docs/domain/DOMAIN_MODEL.md`, `docs/architecture/TECH_STACK.md`

---

## Document Control

| Field | Value |
|-------|-------|
| Intended audience | Engineering, Design, AI, QA, Leadership |
| Approval authority | Founder (CEO) |
| Sprint duration assumption | 2 weeks (not defined in SSOT — see Open Questions) |
| Mobile-first delivery | Primary client is `apps/mobile/` per `TECH_STACK.md` and `ARCHITECTURE.md` |

---

## 1. Vision

NutriCoach AI is an AI-powered personal coach that centralizes everything a user needs to reach their physical goals — not a calorie counter or workout log alone.

The product must always answer one question for the user:

> **"What is the next step I should take today to move closer to my goal?"**

This roadmap translates the approved MVP scope in `MVP_DEFINITION.md` into a sequenced execution plan. Every sprint delivers a testable increment toward **V1 MVP**. Features explicitly excluded from MVP remain documented but are not scheduled until post-V1 phases.

**North Star Metric (MVP):** Percentage of Completed Daily Plans — the percentage of days a user completes the daily plan proposed by the coach (`MVP_DEFINITION.md` §11).

---

## 2. Product Strategy

### 2.1 Why This Order

The roadmap follows a **dependency-first, value-second** sequencing aligned with MVP modules and domain relationships in `DOMAIN_MODEL.md`:

```
User → Profile → Goals → (Nutrition + Workout) → Calendar → Progress → AI Coach
```

| Priority | Rationale | Source |
|----------|-----------|--------|
| **Foundation before features** | No coach, planner, or tracking without auth, profile, and goals | `MVP_DEFINITION.md` §7–8, `PROJECT_BIBLE.md` §8 |
| **Onboarding before plans** | Coach must understand the user before generating plans | `vision.md`, `MVP_DEFINITION.md` §6.3 |
| **Business rules before pure AI** | Sensitive nutrition/training decisions require server-side validation, not model-only output | `MVP_DEFINITION.md` §10 |
| **Calendar before full daily loop** | Calendar is the navigation hub; dashboard aggregates calendar + progress | `ARCHITECTURE.md`, `MVP_DEFINITION.md` §8.6, §8.8 |
| **Tracking closes the loop** | Adaptation requires adherence and progress data | `MVP_DEFINITION.md` §6.4, §8.7 |
| **AI adaptation last in MVP build** | Adaptation depends on plans, tracking, and memory infrastructure | `MVP_DEFINITION.md` §7 |
| **Mobile-first** | Daily interactions happen on mobile | `ARCHITECTURE.md`, `TECH_STACK.md` |
| **Excluded scope deferred** | Social, gamification, wearables, B2B, advanced monetization are post-MVP | `MVP_DEFINITION.md` §12 |

### 2.2 Product Pillars Alignment

Every sprint goal maps to at least one Product Pillar from `PROJECT_BIBLE.md` §5:

| Pillar | Roadmap emphasis |
|--------|------------------|
| Personalization | Onboarding, profile, AI coach context, plan generation |
| Coaching | Coach chat, daily dashboard message, motivation, adaptation |
| Adherence | Daily plan, tracking, calendar, low-friction logging |
| Premium Experience | Design system, performance, polished daily loop |
| Continuous Evolution | AI memory, plan adaptation, analytics instrumentation |

### 2.3 Documentation Conflicts (Not Resolved — Flagged)

The following inconsistencies exist in SSOT. This roadmap **does not override** any document; it sequences work using `MVP_DEFINITION.md` as the scope authority for V1.

| # | Conflict | Documents | Roadmap handling |
|---|----------|-----------|------------------|
| C1 | **Gamification** listed as differentiator in `vision.md` and module in `ARCHITECTURE.md` / `DOMAIN_MODEL.md`, but **explicitly out of MVP scope** | `vision.md` §Differentiation; `MVP_DEFINITION.md` §12 | Gamification deferred to **V2**. MVP uses coach motivation only. |
| C2 | **Notifications** required for mobile in `ARCHITECTURE.md` but not listed as an MVP module | `ARCHITECTURE.md` Mobile; `MVP_DEFINITION.md` §8 | Minimal push notifications scheduled **Sprint 10** to support daily experience. CEO confirmation recommended. |
| C3 | **Web application** scope for MVP undefined — `ARCHITECTURE.md` describes full web admin; `MVP_DEFINITION.md` does not mention web | `ARCHITECTURE.md` Web; `MVP_DEFINITION.md` | MVP delivers **mobile-first**. Web limited to **internal/staging admin shell** in Sprint 1; full web parity deferred to **V1.1**. |
| C4 | **Habits** appear in Calendar module (`MVP_DEFINITION.md` §8.6) and `DOMAIN_MODEL.md`, but no standalone Habits module in MVP | Both | MVP delivers habits as **calendar items only**; dedicated Habits domain depth in **V1.1**. |
| C5 | **Exercise Library** exists in `DOMAIN_MODEL.md` but not named in `MVP_DEFINITION.md` §8 | Both | Included as **dependency of Workout Planner** in Sprint 4 — required to generate routines. |
| C6 | **Subscription** domain in `DOMAIN_MODEL.md`; MVP excludes advanced monetization | `MVP_DEFINITION.md` §12 | No subscription billing in V1; all users free during MVP/beta. |
| C7 | File path references: prompt lists `docs/project/VISION.md` and `docs/tech/TECH_STACK.md`; repository uses `docs/project/vision.md` and `docs/architecture/TECH_STACK.md` | Repository layout | No product impact; documentation hygiene task for CTO. |

---

## 3. Release Strategy

### 3.1 Overview Timeline

| Phase | Sprints | Duration (est.) | Milestone |
|-------|---------|-----------------|------------|
| Foundation | Sprint 0 | 2 weeks | Ready to build |
| Platform + Identity | Sprint 1–2 | 4 weeks | User can authenticate and have profile/goals |
| Coach + Plans | Sprint 3–5 | 6 weeks | Onboarding, coach, workout + nutrition plans |
| Daily Loop | Sprint 6–8 | 6 weeks | Calendar, tracking, dashboard |
| Intelligence + Ship | Sprint 9–11 | 6 weeks | Adaptation, notifications, analytics, hardening |
| Beta + V1 | Sprint 12–13 | 4 weeks | Public beta → V1 release |
| **Total to V1** | **Sprint 0–13** | **~28 weeks** | V1 MVP live |

Post-V1 phases:

| Version | Target | Focus |
|---------|--------|-------|
| V1.1 | +8–12 weeks after V1 | Retention, habits depth, web parity, recipes |
| V2 | +6 months after V1 | Gamification, social (optional), wearables foundation |
| V3 | +12 months after V1 | Professionals, B2B, marketplace, platform expansion |
| Future Vision | Ongoing | Per `vision.md` and `MVP_DEFINITION.md` §13 |

---

### Sprint 0 — Product & Platform Foundation

| Field | Detail |
|-------|--------|
| **Goal** | Establish documentation, design, architecture, compliance, and engineering standards so Sprint 1 starts with Definition of Ready |
| **Duration** | 2 weeks |
| **Responsible teams** | Product Manager, UX/UI Designer, Software Architect, CTO, DevOps, Security, Compliance Officer, CAIO, AI Coach, QA Engineer, Scrum Master |

**Deliverables**

| # | Deliverable | Owner |
|---|-------------|-------|
| D0.1 | Epic breakdown for MVP modules mapped to domains | Product Manager |
| D0.2 | User story backlog structure in `docs/product/backlog.md` | Product Manager |
| D0.3 | Design system specification (`docs/design/system/`) | UX/UI Designer |
| D0.4 | Wireframes: onboarding, dashboard, calendar, coach chat, workout log, meal log | UX/UI Designer |
| D0.5 | ADR-001: Monorepo structure and Supabase integration pattern | Software Architect + CTO |
| D0.6 | API conventions document (`docs/api/CONVENTIONS.md`) | Software Architect |
| D0.7 | Engineering standards (`docs/engineering/STANDARDS.md`) | CTO |
| D0.8 | QA test strategy (`docs/qa/STRATEGY.md`) | QA Engineer |
| D0.9 | AI persona and onboarding flow specs (`docs/ai/persona/`, `docs/ai/coaching-flows/onboarding.md`) | AI Coach + CAIO |
| D0.10 | Compliance review of MVP health flows | Compliance Officer |
| D0.11 | Analytics event taxonomy draft (`docs/analytics/EVENT_TAXONOMY.md`) | Data Analytics Engineer |
| D0.12 | CI/CD pipeline skeleton (lint, typecheck, test gates) | DevOps Engineer |

**Dependencies:** None (first sprint).

**Acceptance criteria**

- [ ] Every MVP module (§8 of `MVP_DEFINITION.md`) has at least one epic with draft user stories
- [ ] UX wireframes approved by Product Manager for all critical paths
- [ ] ADR-001 status = Accepted
- [ ] Compliance Officer sign-off on disclaimer placement for onboarding and coach
- [ ] QA strategy defines critical E2E paths: register → onboard → view daily plan → log workout → log meal
- [ ] DoR checklist from `PROJECT_BIBLE.md` §9 can be applied to Sprint 1 stories

**Risks**

| Risk | Mitigation |
|------|------------|
| Over-documentation delays build | Time-box specs; only MVP-critical paths |
| AI specs start before compliance | Compliance review gate on D0.9 and D0.10 in parallel |

---

### Sprint 1 — Platform Scaffold & Authentication

| Field | Detail |
|-------|--------|
| **Goal** | User can register, log in, recover account on mobile; monorepo and environments operational |
| **Duration** | 2 weeks |
| **Responsible teams** | Mobile Engineer, Backend Engineer, Database Engineer, DevOps, Security, Frontend Engineer (shell), QA |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D1.1 | Monorepo initialized per `TECH_STACK.md` (`apps/mobile`, `apps/web` shell, `packages/*`) | Platform |
| D1.2 | Supabase project: dev + staging environments | Platform |
| D1.3 | User domain: registration, login, password recovery | User (`DOMAIN_MODEL.md` §1) |
| D1.4 | Supabase Auth: email/password (MVP minimum); Google/Apple per `TECH_STACK.md` if capacity allows | User |
| D1.5 | Mobile app shell with auth screens and navigation scaffold | Mobile |
| D1.6 | RLS baseline for User tables | Security + Database |
| D1.7 | Sentry + basic error reporting integrated | DevOps |
| D1.8 | Web app shell (auth only — no MVP feature parity) | Web |

**Dependencies:** Sprint 0 (ADR-001, design tokens, API conventions).

**Acceptance criteria**

- [ ] User can register with email/password on iOS and Android
- [ ] User can log in and persist session securely
- [ ] User can trigger password recovery flow
- [ ] Unauthenticated users cannot access protected routes
- [ ] RLS verified: users access only their own data
- [ ] CI pipeline runs on every PR
- [ ] Auth flows covered by automated tests

**Risks**

| Risk | Mitigation |
|------|------------|
| OAuth complexity delays MVP | Email/password is MVP-critical; OAuth is stretch |
| RLS misconfiguration | Security Engineer review before merge |

---

### Sprint 2 — Profile & Goals

| Field | Detail |
|-------|--------|
| **Goal** | Authenticated user has a complete profile and at least one active goal — prerequisite for onboarding and plan generation |
| **Duration** | 2 weeks |
| **Responsible teams** | Backend, Database, Mobile, UX, QA, Compliance |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D2.1 | Profile domain: age, weight, height, sex, injuries, conditions, fitness level, equipment, schedule, preferences | Profile (§2) |
| D2.2 | Goals domain: create goal with type, start date, target date, status, progress metrics | Goals (§3) |
| D2.3 | Profile capture UI (form-based fallback alongside future conversational onboarding) | Mobile |
| D2.4 | Goal selection/creation UI | Mobile |
| D2.5 | Server-side validation for health profile fields (Zod shared schemas) | Backend |
| D2.6 | Privacy consent capture per `docs/compliance/POLICY_FRAMEWORK.md` | Compliance + UX |

**Dependencies:** Sprint 1 (auth, User domain).

**Acceptance criteria**

- [ ] User can create and edit profile fields defined in `MVP_DEFINITION.md` onboarding data list (§8.2)
- [ ] User can define at least one goal (lose weight, gain muscle, improve health, etc.)
- [ ] Profile data stored server-side; not only on client
- [ ] Health disclaimer shown before profile/onboarding health questions
- [ ] Data export/deletion approach documented (implementation may be partial; full GDPR flow by Sprint 11)

**Risks**

| Risk | Mitigation |
|------|------------|
| Profile form feels like "another health app" | Sprint 3 replaces primary path with conversational onboarding; form remains fallback |
| Over-collection of health data | Collect only fields listed in MVP onboarding spec |

---

### Sprint 3 — Intelligent Onboarding & AI Coach (Foundation)

| Field | Detail |
|-------|--------|
| **Goal** | New user completes conversational onboarding with the AI coach; coach can answer basic contextual questions |
| **Duration** | 2 weeks |
| **Responsible teams** | CAIO, AI Coach, AI Engineer, Backend, Mobile, UX, Compliance, QA |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D3.1 | `AIProvider` interface and first provider adapter (`packages/ai/`) | AI (`TECH_STACK.md`) |
| D3.2 | Conversational onboarding flow replacing manual profile entry as primary path | AI Coach + Profile |
| D3.3 | AI Memory: permanent profile context assembly | AI Memory (§9) |
| D3.4 | Coach chat UI (mobile) | AI Coach (§8) |
| D3.5 | Conversation persistence (historial) | AI Memory |
| D3.6 | Server-side orchestration layer — AI never accesses DB directly | `ARCHITECTURE.md` |
| D3.7 | Compliance guardrails on coach outputs (refusal/disclaimer patterns) | Compliance |
| D3.8 | Coach golden conversation test scenarios (minimum 10) | AI Coach + QA |

**Dependencies:** Sprint 2 (Profile, Goals schema); Sprint 0 (AI specs, compliance).

**Acceptance criteria**

- [ ] New user completes onboarding via coach conversation and ends with populated Profile + Goals
- [ ] Coach responds to basic fitness/nutrition questions using user context
- [ ] Coach refuses prohibited advice categories per `POLICY_FRAMEWORK.md`
- [ ] Disclaimer visible at coach entry
- [ ] Conversation history retrievable across sessions
- [ ] Sensitive plan structures are NOT generated by AI alone in this sprint (foundation only)
- [ ] Response latency acceptable for mobile chat (target: p95 < 5s — subject to CTO confirmation)

**Risks**

| Risk | Mitigation |
|------|------------|
| AI hallucination on health topics | Business rule validation layer in Sprint 4–5; compliance guardrails now |
| Latency on mobile | Streaming responses; context size limits per CAIO |

---

### Sprint 4 — Workout Planner & Exercise Library

| Field | Detail |
|-------|--------|
| **Goal** | User receives a personalized workout plan with routines, sessions, and progressions |
| **Duration** | 2 weeks |
| **Responsible teams** | Backend, Database, Mobile, AI Engineer, AI Coach, UX, QA |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D4.1 | Exercise Library with seed catalog (name, description, muscles, equipment, difficulty) | Exercise Library (§6) |
| D4.2 | Workout domain: routines, sessions, exercises, sets, reps, load, rest | Workout (§5) |
| D4.3 | Plan generation engine with **business rules + AI assist** (not AI-only) | `MVP_DEFINITION.md` §10 |
| D4.4 | Coach-initiated workout plan presentation and explanation | AI Coach |
| D4.5 | Workout plan view on mobile | Mobile |
| D4.6 | Storage for exercise media (images) via Supabase Storage | `TECH_STACK.md` |

**Dependencies:** Sprint 3 (profile, goals, coach infrastructure).

**Acceptance criteria**

- [ ] System generates initial workout plan based on user profile, goals, equipment, injuries
- [ ] Plan includes routines and scheduled sessions for at least 1 week
- [ ] Progression logic documented and server-validated
- [ ] Injuries/constraints from profile affect exercise selection
- [ ] User can view today's workout from plan
- [ ] Exercise library searchable/browseable for reference

**Risks**

| Risk | Mitigation |
|------|------------|
| Unsafe exercise prescription | Server-side injury filter; compliance review of exercise contraindications |
| AI-only plan generation | Mandatory business rule validation before plan persistence |

---

### Sprint 5 — Nutrition Planner

| Field | Detail |
|-------|--------|
| **Goal** | User receives personalized nutrition targets and meal proposals |
| **Duration** | 2 weeks |
| **Responsible teams** | Backend, Database, Mobile, AI Engineer, AI Coach, Compliance, UX, QA |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D5.1 | Nutrition domain: caloric targets, macro distribution, meal proposals | Nutrition (§4) |
| D5.2 | Calorie and macro calculation engine (rule-based, validated) | Backend |
| D5.3 | Meal proposal generation with AI assist for variety and explanation | AI Coach |
| D5.4 | Nutrition plan view on mobile | Mobile |
| D5.5 | Disclaimer on caloric/macro recommendations | Compliance |

**Dependencies:** Sprint 3 (profile, goals); parallel-safe with Sprint 4 but calendar integration waits for Sprint 6.

**Acceptance criteria**

- [ ] System generates daily caloric target and macro split based on user goal and profile
- [ ] User sees meal proposals aligned with targets
- [ ] Caloric targets pass server-side validation (sanity bounds, not extreme deficits)
- [ ] Coach can explain why targets were chosen
- [ ] Supplement advice stays in "caution" category per compliance framework

**Risks**

| Risk | Mitigation |
|------|------------|
| Eating disorder risk from aggressive targets | Hard server-side bounds; coach refusal patterns |
| Nutrition accuracy expectations | Clear UX: estimates, not medical prescription |

---

### Sprint 6 — Calendar

| Field | Detail |
|-------|--------|
| **Goal** | User sees all planned activities in a unified calendar — the product navigation hub |
| **Duration** | 2 weeks |
| **Responsible teams** | Backend, Database, Mobile, UX, QA |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D6.1 | Calendar domain: workouts, meals, goals, habits (as calendar items), weight reminders | Calendar (§7) |
| D6.2 | Calendar views: day and week (month stretch if capacity) | Mobile |
| D6.3 | Integration of workout plan sessions into calendar | Workout + Calendar |
| D6.4 | Integration of meal plan into calendar | Nutrition + Calendar |
| D6.5 | Basic habit items on calendar ( MVP scope: calendar entries, not full Habits module) | Calendar + Habits (§11) |

**Dependencies:** Sprint 4 (workout plan), Sprint 5 (nutrition plan).

**Acceptance criteria**

- [ ] Calendar displays scheduled workouts and meals for each day
- [ ] User can navigate calendar as primary planning view
- [ ] Goals and weight check-in reminders visible on calendar
- [ ] Habit items appear as calendar entries (per MVP §8.6)
- [ ] Calendar loads performantly on mobile (initial render < 2s on mid-range device — CTO to confirm benchmark)

**Risks**

| Risk | Mitigation |
|------|------------|
| Calendar complexity | Start day/week view; defer advanced filtering |
| Data sync across domains | Single calendar service layer per Architect design |

---

### Sprint 7 — Tracking & Progress

| Field | Detail |
|-------|--------|
| **Goal** | User logs workouts, meals, and weight; system tracks adherence and progress |
| **Duration** | 2 weeks |
| **Responsible teams** | Backend, Database, Mobile, UX, QA |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D7.1 | Workout logging: complete session, record sets/reps/load | Workout + Progress |
| D7.2 | Meal logging: record consumed meals (low-friction per MVP §6.5) | Nutrition + Progress |
| D7.3 | Weight tracking | Progress (§10) |
| D7.4 | Adherence metrics: daily/weekly completion vs plan | Progress |
| D7.5 | Progress summary views (weight trend, adherence %) | Mobile |

**Dependencies:** Sprint 4–6 (plans and calendar exist to compare against).

**Acceptance criteria**

- [ ] User can log a workout in under 60 seconds for a typical session (UX target)
- [ ] User can log meals with minimal friction
- [ ] User can record weight
- [ ] Adherence percentage calculable per day and week
- [ ] Logged data reflected in progress views
- [ ] All tracking data persisted server-side

**Risks**

| Risk | Mitigation |
|------|------------|
| Logging friction kills retention | AI-assisted interpretation in V1.1; optimize happy path in UX |
| Incomplete logs skew adherence | Coach handles partial completion gracefully (Sprint 9) |

---

### Sprint 8 — Dashboard & Daily Experience

| Field | Detail |
|-------|--------|
| **Goal** | Deliver the MVP daily loop — user opens app and immediately knows what to do today |
| **Duration** | 2 weeks |
| **Responsible teams** | Mobile, UX, Backend, AI Coach, QA, Data Analytics |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D8.1 | Dashboard: today's tasks, goal status, weekly adherence, coach message | Dashboard (`MVP_DEFINITION.md` §8.8) |
| D8.2 | Daily experience flow per MVP §9: greeting → progress → tasks → recommendations → calendar access | Mobile |
| D8.3 | "Today's plan" aggregation from calendar + workout + nutrition | Backend |
| D8.4 | Coach daily motivational message (contextual) | AI Coach |
| D8.5 | PostHog instrumentation for dashboard views and daily plan completion events | Analytics |

**Dependencies:** Sprint 6 (calendar), Sprint 7 (tracking/adherence).

**Acceptance criteria**

- [ ] On app open, user sees personalized greeting
- [ ] User sees progress summary without navigating away
- [ ] User sees today's tasks (workout + meals + habits)
- [ ] User sees coach recommendation/message
- [ ] One-tap access to calendar
- [ ] Primary question answered: "What should I do next?" within 10 seconds (MVP §6.1)
- [ ] Analytics events fire for `daily_plan_viewed` and `daily_task_completed`

**Risks**

| Risk | Mitigation |
|------|------------|
| Dashboard information overload | UX enforces simplicity principle (MVP §6.1) |
| Empty state for new users | Onboarding must complete before dashboard first view |

---

### Sprint 9 — AI Adaptation & Coach Intelligence

| Field | Detail |
|-------|--------|
| **Goal** | Plans adapt based on adherence and progress; coach detects drop-off and motivates |
| **Duration** | 2 weeks |
| **Responsible teams** | CAIO, AI Engineer, AI Coach, Backend, Mobile, QA |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D9.1 | Plan adaptation engine: adjust workout and nutrition based on compliance, progress, availability, injuries, preferences | `MVP_DEFINITION.md` §6.4, §7 |
| D9.2 | AI Memory: summarized memory for long-term context | AI Memory |
| D9.3 | Activity drop detection and motivational outreach (in-app; push in Sprint 10) | AI Coach |
| D9.4 | Coach-initiated plan revision with user confirmation | AI Coach |
| D9.5 | AI evaluation regression suite in CI | CAIO + QA |

**Dependencies:** Sprint 7 (tracking data), Sprint 8 (daily loop).

**Acceptance criteria**

- [ ] When adherence drops below threshold, coach acknowledges and suggests adjustment
- [ ] User can accept or decline plan adaptations
- [ ] Adaptations respect business rules (not AI-only plan rewrites)
- [ ] Summarized memory reduces context size while preserving key user history
- [ ] Regression tests pass for golden coach scenarios
- [ ] Plan changes reflected in calendar within same session

**Risks**

| Risk | Mitigation |
|------|------------|
| Over-adaptation confuses users | Require user confirmation for major plan changes |
| Wrong adaptation harms user | Server validation + compliance boundaries |

---

### Sprint 10 — Notifications, Analytics & Observability

| Field | Detail |
|-------|--------|
| **Goal** | Complete supporting systems for retention measurement and daily re-engagement |
| **Duration** | 2 weeks |
| **Responsible teams** | DevOps, Mobile, Backend, Data Analytics, QA, Compliance |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D10.1 | Push notifications: daily plan reminder, workout reminder (user-configurable) | Notifications (`ARCHITECTURE.md`) |
| D10.2 | Full PostHog taxonomy implementation for MVP events | Analytics |
| D10.3 | North Star metric dashboard: Percentage of Completed Daily Plans | Analytics |
| D10.4 | Sentry performance monitoring for critical paths | DevOps |
| D10.5 | Notification preferences UI | Mobile |

**Dependencies:** Sprint 8 (daily plan exists); resolves conflict C2.

**Acceptance criteria**

- [ ] User can enable/disable notification categories
- [ ] Push delivery works on iOS and Android for daily reminder
- [ ] North Star metric computable from event data
- [ ] No PII in analytics events per `TECH_STACK.md` and compliance framework
- [ ] Retention funnel trackable: register → onboard → day 1 plan → day 7 active

**Risks**

| Risk | Mitigation |
|------|------------|
| Notification opt-out reduces engagement | Default sensible; coach in-app remains primary |
| Analytics privacy conflict | Compliance review of event properties |

---

### Sprint 11 — Integration Hardening & E2E Quality

| Field | Detail |
|-------|--------|
| **Goal** | Full MVP integration tested; production readiness |
| **Duration** | 2 weeks |
| **Responsible teams** | QA, all engineering, Security, DevOps, Compliance |

**Deliverables**

| # | Deliverable | Domain |
|---|-------------|--------|
| D11.1 | E2E test suite: full user journey from register to 7-day simulated usage | QA |
| D11.2 | Security review: auth, RLS, input validation, coach data flows | Security |
| D11.3 | Performance pass on dashboard, calendar, coach chat | Mobile + Backend |
| D11.4 | Accessibility audit (WCAG 2.1 AA orientation) | UX + QA |
| D11.5 | Account data export and deletion (MVP-minimum GDPR) | Backend + Security |
| D11.6 | Production environment and runbooks | DevOps |
| D11.7 | Known defect triage: zero critical, zero high open | QA |

**Dependencies:** Sprints 1–10 complete.

**Acceptance criteria**

- [ ] All MVP modules (§8) pass Definition of Done (`PROJECT_BIBLE.md` §10)
- [ ] E2E suite passes in CI
- [ ] Security sign-off obtained
- [ ] Compliance sign-off for MVP health flows
- [ ] Staging deployment matches production configuration
- [ ] Tech debt register updated (`PROJECT_BIBLE.md` §16)

**Risks**

| Risk | Mitigation |
|------|------------|
| Integration defects late | Continuous integration testing from Sprint 3 onward |
| Scope creep | Strict MVP module checklist |

---

### Sprint 12 — Closed Beta

| Field | Detail |
|-------|--------|
| **Goal** | Validate MVP with real users; measure North Star metric |
| **Duration** | 2 weeks |
| **Responsible teams** | Product Manager, QA, Data Analytics, all engineering (bugfix), Compliance |

**Deliverables**

| # | Deliverable | |
|---|-------------|---|
| D12.1 | TestFlight / Google Play internal beta deployed | |
| D12.2 | Beta cohort onboarded (target: 20–50 users — CEO to confirm) | |
| D12.3 | Feedback collection instrument | |
| D12.4 | Bug fix releases (OTA where possible) | |
| D12.5 | Beta metrics report: retention, daily plan completion, coach usage | |

**Dependencies:** Sprint 11 production readiness.

**Acceptance criteria**

- [ ] Beta users complete onboarding end-to-end
- [ ] North Star metric measurable and > 0% (baseline established)
- [ ] No critical production incidents unresolved > 24h
- [ ] User feedback documented for V1.1 prioritization

**Risks**

| Risk | Mitigation |
|------|------------|
| Low beta engagement | Recruit aligned target users per MVP §4 |
| AI quality complaints | CAIO monitors coach evaluation metrics daily |

---

### Sprint 13 — V1 Public Release

| Field | Detail |
|-------|--------|
| **Goal** | Ship V1 MVP to public app stores |
| **Duration** | 2 weeks |
| **Responsible teams** | DevOps, QA, Product Manager, Compliance, CEO (go/no-go) |

**Deliverables**

| # | Deliverable | |
|---|-------------|---|
| D13.1 | App Store / Play Store submission | |
| D13.2 | Release notes and store listing copy (Compliance-reviewed) | |
| D13.3 | Post-release monitoring dashboard | |
| D13.4 | Incident response on-call rotation documented | |
| D13.5 | V1 retrospective and V1.1 backlog prioritized | |

**Dependencies:** Sprint 12 beta success criteria met; CEO go/no-go.

**Acceptance criteria**

- [ ] App approved and publicly available
- [ ] Monitoring and alerting operational
- [ ] Support process documented
- [ ] MVP success metrics baseline published internally

**Risks**

| Risk | Mitigation |
|------|------------|
| App store rejection | Compliance review of health claims in listing |
| Launch day instability | Gradual rollout percentage |

---

## 4. Version Planning

### 4.1 V1 — MVP (Sprint 0–13)

| Dimension | Detail |
|-----------|--------|
| **Features** | All 8 MVP modules per `MVP_DEFINITION.md` §8: Authentication, Intelligent Onboarding, AI Coach, Workout Planner, Nutrition Planner, Calendar, Tracking, Dashboard |
| **Why these features** | Minimum set for user to achieve physical goal exclusively within NutriCoach AI (§7) |
| **Business value** | Validates core hypothesis: unified AI coaching beats fragmented tools; establishes North Star baseline |
| **Technical impact** | Full monorepo, Supabase backend, AIProvider layer, 10+ domain modules, mobile-first client, analytics + monitoring |
| **Expected user value** | User always knows next step; personalized plans; single app replaces nutrition + workout + calendar + AI chat fragmentation |

**V1 explicit exclusions** (per `MVP_DEFINITION.md` §12):

Social, gamification (XP, badges, rankings, challenges, communities), professionals, marketplace, wearables, multimedia sharing, B2B, advanced monetization.

---

### 4.2 V1.1 — Retention & Depth (Est. 8–12 weeks post-V1)

| Dimension | Detail |
|-----------|--------|
| **Features** | Dedicated Habits module (beyond calendar entries); recipe library; AI-assisted meal logging; web feature parity for tracking/admin; improved coach memory; hydration tracking; data export polish; performance optimizations from V1 telemetry |
| **Why** | V1 beta feedback likely highlights logging friction (MVP §6.5) and habits depth; web users expect admin access per `ARCHITECTURE.md` |
| **Business value** | Improves Week-2 and Week-4 retention; increases North Star metric |
| **Technical impact** | Moderate — extends Nutrition and Habits domains; web client feature catch-up; no architectural pivot |
| **Expected user value** | Less manual logging effort; stronger habit formation; accessible from web and mobile |

---

### 4.3 V2 — Engagement Platform (Est. 6 months post-V1)

| Dimension | Detail |
|-----------|--------|
| **Features** | Gamification (XP, levels, badges, streaks, achievements — per `ARCHITECTURE.md` and `vision.md`); optional social (follow, groups, challenges — privacy-first); wearables integration foundation; push notification intelligence; subscription/monetization (Subscription domain); multi-language support |
| **Why** | Vision differentiators include gamification and social (`vision.md`); deferred from MVP to reduce complexity (§12) |
| **Business value** | Revenue activation; viral/social loops; broader market |
| **Technical impact** | High — new Gamification and Social modules; wearable API integrations; payment provider ADR required |
| **Expected user value** | Sustainable motivation via gamification; optional community accountability; seamless device data |

**Note:** Gamification in V2 must follow `vision.md` principle: "help build habits, not generate dependency" and `ARCHITECTURE.md`: "reinforce habits, not competition."

---

### 4.4 V3 — Platform Expansion (Est. 12 months post-V1)

| Dimension | Detail |
|-----------|--------|
| **Features** | Professionals (trainers, nutritionists); B2B gym/corporate wellness; marketplace; telemedicine exploration; public API; advanced analytics; AI multimodal (image meal recognition per `ARCHITECTURE.md` Nutrition future) |
| **Why** | Target segments in `vision.md` post-initial audience; future domains in `DOMAIN_MODEL.md` |
| **Business value** | B2B revenue; platform network effects; professional ecosystem |
| **Technical impact** | Very high — multi-tenant patterns, marketplace, external API, compliance expansion |
| **Expected user value** | Access to human professionals; integrated health ecosystem; enterprise wellness programs |

---

### 4.5 Future Vision

Per `vision.md` long-term vision and `MVP_DEFINITION.md` §13:

- Reference platform for AI-powered health, nutrition, and athletic performance
- Millions of users over years; adapts to life stages
- Continuous incorporation of new knowledge, technologies, and devices
- Trust and privacy maintained throughout

Architectural constraint from MVP §13: **V1 architecture must support this evolution without structural redesign** — validates modular domain approach in all V1 sprints.

---

## 5. Prioritization

### 5.1 Included in V1 and Why

| Feature / Module | Included | Justification | MVP Reference |
|------------------|----------|---------------|---------------|
| Authentication | V1 Sprint 1 | Gateway to all features | §8.1 |
| Intelligent Onboarding | V1 Sprint 3 | Coach must know user before planning | §8.2, §6.3 |
| AI Coach | V1 Sprint 3+ | Core differentiator; not a chatbot bolt-on | §8.3, `vision.md` |
| Workout Planner | V1 Sprint 4 | Half of unified plan | §8.4 |
| Nutrition Planner | V1 Sprint 5 | Other half of unified plan | §8.5 |
| Calendar | V1 Sprint 6 | Navigation hub | §8.6, `ARCHITECTURE.md` |
| Tracking | V1 Sprint 7 | Enables adaptation and North Star metric | §8.7 |
| Dashboard / Daily Experience | V1 Sprint 8 | Answers "what do I do today?" | §8.8, §9 |
| Plan Adaptation | V1 Sprint 9 | Continuous adaptation principle | §6.4, §7 |
| Push Notifications | V1 Sprint 10 | Re-engagement; architecture expects mobile notifications | Conflict C2 resolution |
| Exercise Library | V1 Sprint 4 | Required dependency for workout generation | Conflict C5 |
| Analytics (PostHog) | V1 Sprint 8–10 | Measure North Star; `TECH_STACK.md` | §11 |
| Business rule validation for plans | V1 Sprint 4–5 | AI philosophy §10 | §10 |

### 5.2 Excluded from V1 and Why

| Feature | Excluded | Deferred to | Justification | MVP Reference |
|---------|----------|-------------|---------------|---------------|
| Social network | V1 | V2 | Out of scope | §12 |
| Gamification (XP, badges, rankings) | V1 | V2 | Out of scope; coach provides motivation in V1 | §12 |
| Wearables | V1 | V2 | Out of scope | §12 |
| Marketplace | V1 | V3 | Out of scope | §12 |
| B2B / gyms | V1 | V3 | Out of scope | §12 |
| Professionals | V1 | V3 | Out of scope | §12 |
| Advanced monetization | V1 | V2 | Out of scope; free MVP/beta | §12 |
| Image meal recognition | V1 | V3 | Future in `ARCHITECTURE.md` Nutrition | — |
| Full web parity | V1 | V1.1 | Mobile-first; reduces V1 scope | Conflict C3 |
| Dedicated Habits module | V1 (partial) | V1.1 | Calendar entries only in V1 | Conflict C4 |
| Micronutrients / supplements depth | V1 | V1.1+ | MVP nutrition focuses on calories, macros, meal proposals | §8.5 |
| Recipes library | V1 | V1.1 | Not in MVP module list | §8.5 |
| Email notifications | V1 | V1.1 | Push sufficient for mobile MVP | `ARCHITECTURE.md` |
| Google/Apple OAuth | V1 (stretch) | V1.1 | Email/password is MVP-critical path | `TECH_STACK.md` |

### 5.3 Prioritization Framework

When conflicts arise within a sprint, apply in order:

1. **Safety & compliance** (`POLICY_FRAMEWORK.md`)
2. **MVP module completeness** (`MVP_DEFINITION.md` §8)
3. **Daily experience loop** (§9 — can user complete today's plan?)
4. **North Star measurability** (§11)
5. **Product Pillars** (`PROJECT_BIBLE.md` §5)
6. **Technical dependency order** (`DOMAIN_MODEL.md`)

---

## 6. Risks

### 6.1 Product Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| MVP scope too large for timeline | Delayed V1, team burnout | Medium | Strict module checklist; defer stretch goals; CEO scope lock |
| Daily plan completion rate low | MVP fails North Star | Medium | UX simplicity (§6.1); reduce logging friction; coach motivation |
| Users expect medical-grade advice | Trust damage, compliance exposure | Medium | Disclaimers; compliance guardrails; coach refusal patterns |
| Onboarding too long | Drop-off before first plan | Medium | Conversational but bounded; progress indicator; fallback form |
| Competing apps "good enough" | Low acquisition | Medium | Focus daily experience differentiation (§5 Core Value) |

### 6.2 Technical Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| AI latency on mobile | Poor coach UX | High | Streaming; context limits; async processing |
| Supabase scaling limits | Performance at growth | Low (MVP) | ADR migration path documented by Architect |
| Monorepo complexity | Slower early velocity | Medium | ADR-001; shared packages discipline |
| RLS misconfiguration | Data leak | Medium | Security review every migration |
| AI costs exceed budget | Unsustainable unit economics | Medium | CAIO model selection policy; caching; summarized memory |

### 6.3 UX Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Information overload on dashboard | Violates 10-second rule (§6.1) | Medium | UX Designer review gate; user testing in beta |
| Calendar complexity | Cognitive overload | Medium | Day view default; progressive disclosure |
| Logging friction | Abandonment | High | Optimize happy path; V1.1 AI-assisted logging |
| Premium feel not achieved | Brand damage vs vision | Medium | Design system in Sprint 0; UX sign-off on every screen |

### 6.4 AI Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Hallucinated health advice | User harm, legal exposure | Medium | Business rules + compliance guardrails (`MVP_DEFINITION.md` §10) |
| Inconsistent coach personality | Breaks trust | Medium | Prompt versioning; golden conversation tests |
| Over-reliance on AI for plans | Unsafe plans | Medium | Server validation before persistence |
| Context window limits | Coach "forgets" user | Medium | Memory tiers per `ARCHITECTURE.md` |
| Provider lock-in | Vendor risk | Low | `AIProvider` abstraction per `TECH_STACK.md` |

### 6.5 Business Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| No monetization in V1 | No revenue during beta | Expected | Planned; Subscription domain in V2 |
| App store health app scrutiny | Rejection | Medium | Compliance-reviewed store copy |
| GDPR/data subject requests | Legal exposure | Medium | Export/delete by Sprint 11 |
| Founder scope changes mid-sprint | Disruption | Medium | Change control via CEO; Sprint 0 scope lock |

---

## 7. Exit Criteria

### 7.1 Sprint Completion (Every Sprint)

Per `PROJECT_BIBLE.md` §15 and §10:

- [ ] Sprint goal achieved or explicitly renegotiated with Product Manager and documented
- [ ] All committed user stories meet Definition of Done
- [ ] Sprint review conducted; notes in `docs/product/sprints/`
- [ ] Retrospective actions assigned with owners
- [ ] No critical defects open against sprint deliverables
- [ ] Documentation updated for significant changes
- [ ] ADRs filed if architectural decisions were made
- [ ] Next sprint stories meet Definition of Ready

### 7.2 MVP Completion (End of Sprint 11)

- [ ] All 8 MVP modules from `MVP_DEFINITION.md` §8 functional on mobile
- [ ] Daily experience flow (§9) completable end-to-end
- [ ] AI philosophy (§10) enforced: business rules validate sensitive plan data
- [ ] North Star metric instrumented and computable
- [ ] Out-of-scope items (§12) confirmed absent
- [ ] Compliance and Security sign-off obtained
- [ ] E2E test suite passes
- [ ] Staging environment mirrors production

### 7.3 Public Beta (End of Sprint 12)

- [ ] 20+ beta users onboarded (count subject to CEO confirmation)
- [ ] 7-day retention rate measured (baseline — no target defined in SSOT)
- [ ] North Star metric baseline established
- [ ] Zero unresolved critical bugs
- [ ] Incident response tested
- [ ] Feedback synthesized into V1.1 backlog

### 7.4 Official V1 Release (End of Sprint 13)

- [ ] CEO go/no-go approval documented
- [ ] App store approval obtained
- [ ] Production monitoring live (Sentry, PostHog, uptime)
- [ ] Support and incident runbooks published
- [ ] MVP success criteria from `MVP_DEFINITION.md` §11 under active measurement:
  - Recurrent usage
  - Daily summary consulted
  - Workouts and meals logged
  - Weekly goals completed
  - Multi-week retention
  - **Percentage of Completed Daily Plans** tracked as North Star
- [ ] `vision.md` success definition monitored: recurrent value, plan adaptation, coach trust, intuitive onboarding, architecture extensibility

---

## 8. Team Allocation Summary

| Sprint | Primary agents |
|--------|----------------|
| 0 | PM, UX, Architect, CTO, DevOps, Security, Compliance, CAIO, AI Coach, QA, SM |
| 1 | Mobile, Backend, Database, DevOps, Security, Frontend, QA |
| 2 | Backend, Database, Mobile, UX, Compliance, QA |
| 3 | CAIO, AI Coach, AI Engineer, Backend, Mobile, UX, Compliance, QA |
| 4 | Backend, Database, Mobile, AI Engineer, AI Coach, UX, QA |
| 5 | Backend, Database, Mobile, AI Engineer, AI Coach, Compliance, UX, QA |
| 6 | Backend, Database, Mobile, UX, QA |
| 7 | Backend, Database, Mobile, UX, QA |
| 8 | Mobile, UX, Backend, AI Coach, Data Analytics, QA |
| 9 | CAIO, AI Engineer, AI Coach, Backend, Mobile, QA |
| 10 | DevOps, Mobile, Backend, Data Analytics, Compliance, QA |
| 11 | QA, Security, DevOps, all engineering, Compliance |
| 12 | PM, QA, Data Analytics, all engineering (fixes), Compliance |
| 13 | DevOps, QA, PM, Compliance, CEO |

---

## 9. Product Manager Review

### Strengths

- **Fully grounded in SSOT:** Every V1 feature traces to `MVP_DEFINITION.md` §8; exclusions explicitly reference §12.
- **Dependency-aware sequencing:** Profile → Goals → Coach → Plans → Calendar → Tracking → Dashboard → Adaptation follows domain model and MVP goals.
- **AI philosophy respected:** Sprints 4–5 and 9 enforce business-rule validation, aligning with §10 — not a pure chatbot wrapper.
- **Conflict transparency:** Seven documentation conflicts documented without silent resolution.
- **Measurable success:** North Star metric drives Sprint 8–12 analytics work.
- **Compliance integrated:** Not an afterthought — gates at Sprints 0, 2, 3, 5, 11, 13.
- **Realistic post-V1 path:** V1.1/V2/V3 align with `MVP_DEFINITION.md` §13 and `vision.md` long-term segments.

### Weaknesses

- **Sprint duration assumption (2 weeks) is not defined in SSOT** — velocity unknown for AI agent team; timeline may be optimistic or pessimistic.
- **Web client scope remains ambiguous** — roadmap assumes minimal web in V1; `ARCHITECTURE.md` describes fuller web role. Requires CEO decision (Conflict C3).
- **Beta cohort size and success thresholds not defined in SSOT** — exit criteria use placeholders.
- **OAuth scope unclear** — listed as stretch; `TECH_STACK.md` lists Google/Apple as planned auth methods.
- **Exercise video content** — `DOMAIN_MODEL.md` mentions video per exercise; MVP does not specify media depth. Sprint 4 includes images only.
- **No detailed user stories yet** — this roadmap defines sprint goals; Sprint 0 must produce story-level backlog before Sprint 1 DoR is satisfied.
- **Single-mobile-platform testing matrix undefined** — QA device coverage not in SSOT.

### Open Questions (Require CEO / Founder Decision)

| # | Question | Impact | Recommended forum |
|---|----------|--------|-------------------|
| OQ1 | Is minimal web in V1 acceptable, or is web parity required for MVP? | Sprint 1, 8 scope | CEO + Architect |
| OQ2 | Are push notifications mandatory for V1 or acceptable in V1.1? | Sprint 10 placement | CEO (Conflict C2) |
| OQ3 | What is the beta cohort size and duration? | Sprint 12–13 | CEO |
| OQ4 | What North Star target percentage defines MVP success? | Release gate | CEO + Data Analytics |
| OQ5 | Is Google/Apple OAuth required for V1 app store launch? | Sprint 1 scope | CEO + Mobile |
| OQ6 | Will V1 remain free, or is basic subscription in scope despite §12? | V2 timing | CEO |
| OQ7 | What locales/languages for V1? Catalan only? Spanish? English? | UX, AI prompts | CEO + PM |
| OQ8 | Confirm 2-week sprint length and 28-week V1 target | Entire roadmap | CEO + CTO + SM |

### Potential Risks (Summary)

The highest-risk areas for V1 delivery are: **AI coach quality and latency**, **logging friction affecting North Star metric**, **scope creep from vision features (gamification, social)**, and **compliance exposure on nutrition/training recommendations**. The roadmap mitigates these but Sprint 12 beta is the first real validation point.

### Recommendations for the CEO

1. **Approve or adjust V1 scope boundaries** — especially web (OQ1), notifications (OQ2), and OAuth (OQ5).
2. **Lock MVP scope after this roadmap approval** — enforce change control; vision features (gamification, social) remain V2+.
3. **Define quantitative beta success criteria** before Sprint 11 — at minimum North Star baseline and 7-day retention target.
4. **Confirm language/locale strategy** for V1 store launch (OQ7).
5. **Schedule roadmap review at Sprint 6 midpoint** — calendar integration is the architectural keystone; validate timeline then.
6. **Do not approve V1 release without Compliance and Security written sign-off** — health AI carries reputational and regulatory risk.

### Recommendations for the CTO

1. **Prioritize ADR-001 in Sprint 0** — monorepo + Supabase structure blocks all engineering.
2. **Establish AI latency and cost budgets with CAIO before Sprint 3** — coach is on critical path.
3. **Enforce server-side business rules architecture in Sprints 4–5** — do not allow AI-only plan persistence.
4. **CI/CD quality gates from Sprint 1** — not Sprint 11; continuous E2E from Sprint 3 coach flows.
5. **Resolve documentation path inconsistencies** (Conflict C7) — low effort, reduces agent confusion.
6. **Plan Supabase scaling review at V1.1** — before V2 user growth and social features increase load.
7. **Track tech debt register from Sprint 1** per `PROJECT_BIBLE.md` §16 — AI and calendar integration will generate conscious debt.

---

**Status: DRAFT — Awaiting Founder (CEO) approval. This document does not override `MVP_DEFINITION.md` (Approved Founder Draft) and must be aligned upon approval.**
