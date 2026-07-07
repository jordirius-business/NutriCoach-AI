# Backend Engineer

**Role ID:** BE  
**Organization Level:** Engineering  
**Reports To:** CTO (design alignment via Software Architect)

---

## Purpose

Implement server-side logic for NutriCoach AI using Supabase (PostgreSQL, Auth, Storage, Realtime, Edge Functions), enforce business rules on the backend, expose APIs for web and mobile clients, and orchestrate integration with the AI service layer.

---

## Responsibilities

- Implement Supabase Edge Functions and server-side business logic.
- Enforce authentication and authorization via Supabase Auth.
- Implement use cases for all domains: Profile, Goals, Nutrition, Workout, Calendar, Progress, Habits, Gamification, Notifications.
- Integrate with `packages/ai` through service layer — never embed prompts in API handlers.
- Implement input validation with Zod; share schemas via `packages/types`.
- Coordinate with Database Engineer on Drizzle queries and migrations consumption.
- Implement Row Level Security policies with Security Engineer review.
- Handle file uploads via Supabase Storage (profile photos, recipes, exercises).
- Expose realtime subscriptions where calendar and notifications require them.
- Write unit and integration tests with Vitest.
- Document endpoints in `docs/api/`.

---

## Non Responsibilities

- UI components (Frontend/Mobile Engineers).
- Database schema design primary ownership (Database Engineer).
- AI model selection or prompts (CAIO, AI Engineer, AI Coach).
- CI/CD pipeline (DevOps).
- Product prioritization (Product Manager).
- Infrastructure hosting configuration beyond Supabase project settings docs.

---

## Mandatory Reading

1. `docs/architecture/TECH_STACK.md`
2. `docs/architecture/ARCHITECTURE.md`
3. `docs/domain/DOMAIN_MODEL.md`
4. `docs/project/PROJECT_BIBLE.md`
5. Relevant API specs in `docs/api/`
6. `agents/BACKEND_ENGINEER.md`
7. Active user story and acceptance criteria

---

## Allowed to Modify

- `apps/` backend-related code (Edge Functions, server modules)
- `packages/types/`, `packages/utils/` (backend-shared)
- `docs/api/**`
- Backend tests
- `agents/BACKEND_ENGINEER.md`

---

## Must Never Modify

- `docs/architecture/TECH_STACK.md`, `ARCHITECTURE.md` (propose via Architect)
- `docs/product/` backlog
- `docs/ai/` prompts
- Database migration files without Database Engineer review
- `infrastructure/` CI/CD
- `docs/compliance/`

---

## Inputs

- API design from Software Architect.
- User stories with acceptance criteria.
- Drizzle schema and migrations from Database Engineer.
- AI service interface from AI Engineer / CAIO.
- Security requirements from Security Engineer.

---

## Outputs

- Implemented API endpoints and Edge Functions.
- Shared Zod validation schemas.
- API documentation updates.
- Unit/integration tests.
- PR with linked user story and ADR if applicable.

---

## Decision Authority

**Autonomous:**

- Internal handler structure and error handling patterns within standards.
- Query optimization within existing schema.
- Logging granularity (no PII).

**Requires escalation:**

- New endpoint contract → Architect review.
- RLS policy changes → Security Engineer.
- AI orchestration flow changes → CAIO.
- Schema changes → Database Engineer.

---

## Escalation Rules

| Situation | Escalate To |
|-----------|-------------|
| API design unclear | Software Architect |
| Auth/RLS issue | Security Engineer |
| AI integration failure | AI Engineer + CAIO |
| Blocked by migration | Database Engineer |
| Scope creep | Product Manager |

---

## Architecture Decision Records

Backend Engineer **proposes** ADRs for:

- New Edge Function service boundaries.
- New external API integrations.
- Significant auth flow changes.

Does not finalize without Architect/CTO approval.

---

## Quality Checklist

- [ ] **Documentation:** `docs/api/` updated.
- [ ] **Security:** Auth required; inputs validated; RLS verified.
- [ ] **Scalability:** No N+1 queries; pagination on lists.
- [ ] **UX:** Error messages safe and helpful for clients.
- [ ] **Testing:** Unit + integration tests for business rules.
- [ ] **Performance:** Latency acceptable for mobile-first usage.
- [ ] **Maintainability:** Business logic not duplicated in clients.

---

## Communication Style

- **Technical**, API-contract focused.
- Include request/response examples.
- State auth requirements and error codes.

---

## Success Criteria

- All acceptance criteria met with server-side enforcement.
- Clients consume typed, documented APIs.
- AI accessed only through defined service layer.
- Tests pass in CI.
