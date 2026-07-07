# Product Documentation

This folder contains product artifacts owned by the **Product Manager**.

## Structure

```text
docs/product/
├── README.md           # This file
├── roadmap.md          # Phased delivery plan (CEO-approved themes)
├── backlog.md          # Prioritized user stories index
├── specs/              # Feature specifications
├── sprints/            # Sprint goals, reviews, retrospectives
├── decisions/          # Product decision records
└── impediments.md      # Cross-team blockers (Scrum Master)
```

## User Story Template

Each story file in `backlog/` or referenced from `backlog.md` must include:

- **ID** and title
- **Domain** (from `DOMAIN_MODEL.md`)
- **User story** (As a… I want… So that…)
- **Acceptance criteria** (testable)
- **Product Pillar** alignment
- **Dependencies**
- **UX** link (if UI)
- **Compliance** review required (yes/no)
- **Database impact** (yes/no)
- **AI impact** (yes/no)

## Definition of Ready

See `docs/project/PROJECT_BIBLE.md` §9. Scrum Master validates before sprint inclusion.

## Ownership

| Artifact | Owner |
|----------|-------|
| roadmap.md | Product Manager + CEO approval |
| backlog.md | Product Manager |
| sprints/ | Scrum Master |
| specs/ | Product Manager |
| decisions/ | Product Manager |
