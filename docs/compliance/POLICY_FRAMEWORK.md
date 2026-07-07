# Compliance Policy Framework

**Version:** 1.0  
**Date:** 8 July 2026  
**Owner:** Compliance Officer  
**Status:** Active (bootstrap)

---

## Scope

This framework applies to NutriCoach AI as a wellness and fitness coaching application. It is **not** a substitute for licensed legal or medical counsel. It defines product guardrails for agents and engineers.

---

## Product Classification

NutriCoach AI is:

- A **wellness and lifestyle coaching** application.
- **Not** a medical device, diagnostic tool, or telemedicine platform (MVP phase).
- **Not** a substitute for qualified healthcare, nutrition, or mental health professionals.

All user-facing experiences must communicate this clearly.

---

## AI Coach Advice Boundaries

### Allowed (with personalization)

- General nutrition education aligned with user goals.
- Exercise suggestions based on stated fitness level and equipment.
- Habit formation and motivation strategies.
- Reminders and adherence support.
- Summarizing user's self-reported data.

### Caution (disclaimer required)

- Weight loss rate recommendations.
- Supplement discussions (general information only).
- Training with pre-existing conditions user has disclosed.
- Caloric targets and macro splits.

### Prohibited (must refuse or defer)

- Diagnosing medical conditions.
- Prescribing medication or treatment.
- Advice for acute injury, chest pain, severe symptoms.
- Eating disorder enablement (extreme restriction, purging support).
- Contradicting user's physician instructions.
- Claims of guaranteed medical outcomes.

---

## Required Disclaimers

Minimum disclaimer on onboarding and coach entry:

> NutriCoach AI ofereix orientació de benestar i no substitueix l'assessorament mèdic professional. Consulta un professional de la salut abans de canvis significatius en dieta o exercici.

(Localized per user language in implementation.)

---

## Data Classification

| Class | Examples | Controls |
|-------|----------|----------|
| Account PII | Email, name | Auth, RLS, encrypt in transit |
| Health profile | Weight, injuries, conditions | RLS, explicit consent, minimize export |
| Behavioral | Workouts, meals logged | RLS, user deletion rights |
| Conversations | Coach chat | Retention policy required before MVP; no training on user data without consent |
| Analytics | Aggregated events | No sensitive health content in PostHog by default |

---

## Privacy Principles

Aligned with `vision.md`:

1. User controls their data.
2. Collect minimum necessary data.
3. Transparent purpose for each data field in onboarding.
4. Support account deletion and data export (implement with Security Engineer).
5. Social features opt-in; privacy-by-default.

---

## Review Triggers

Compliance Officer review is **mandatory** before release when a feature:

- Displays health recommendations.
- Collects new health-related fields.
- Changes coach autonomy (auto-plan changes).
- Enables social sharing of health data.
- Introduces subscriptions with health outcome claims.
- Integrates third-party health data (future wearables).

---

## Escalation

Red-flag user content or coach outputs suggesting self-harm, eating disorders, or acute medical crisis:

1. Coach must refuse personalized advice and recommend professional help.
2. Log incident type (not content) for product review.
3. Escalate pattern to CAIO + Compliance Officer + CEO.

---

## Related Documents

- `docs/project/vision.md`
- `agents/COMPLIANCE_OFFICER.md`
- `agents/AI_COACH.md`
- `docs/security/` (to be created by Security Engineer)
