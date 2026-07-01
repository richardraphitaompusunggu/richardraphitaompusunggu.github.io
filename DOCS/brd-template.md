# BRD Template — Merged Structure

The canonical BRD structure for this skill, merged from a decision-seeking BRD and a build-spec BRD. **All sections present by default; weight them by the purpose switch:**
- **Decision-seeking** → lead on §1 (Decision Required), §2 (Business Impact, Cost of Inaction), §7 (Success Metrics), §12 (Approval).
- **Build-spec** → lead on §3 (Objectives & Scope), §4 (Roles), §6 (Functional Requirements), §8–9 (Assumptions/Deps, Risks). §12 optional.

Output English by default. Dates DD Month YYYY. IDR with comma separators. Mark unknown figures `[X]` — never fabricate.

---

## Header block
```
# Business Requirements Document (BRD)
# [Title — Workstream / Feature]

No.: [ID, e.g. 002/BRD/DEPT/PROJ/M/YYYY]   Date: [DD Month YYYY]
Version: [x.y]   Department: [...]   Prepared by: [Name]   Status: [Draft / Approved]
```

## §0 Document Control
- **Version History** — table: Version | Date | Author | Changes (dated, attributed, specific).
- **Living Document Notice** — this BRD is kept in sync with its PRD; updating one triggers review of the other; both reference each other's current version.
- **Related Documents** — PRD ID + version, sibling BRDs, parent program doc.
- **Program Context** *(if part of a multi-BRD program)* — table of sibling workstreams + the constraint each addresses; note dependencies (or independence).

## §1 Executive Summary
- **1.1 Strategic Context** — why now; what changed.
- **1.2 The Problem in One Sentence** — a single, sharp sentence.
- **1.3 What This BRD Requests** — bulleted list of the asks/changes.
- **1.4 Expected Outcomes** — table: Outcome | Metric | Baseline | Target. (Baselines `[X]` if unknown.)
- **1.5 Decision Required** *(decision BRDs)* — the explicit list of what management must approve.

## §2 Business Problem Analysis
- **2.1 Finding** — the core diagnosis.
- **2.2 Current State** — table of current design/process dimensions.
- **2.3 Business Impact** — quantified where possible, with **evidence cases** (real incidents, figures). Number-first.
- **2.4 Root Cause** — why it happens (architectural/process, not symptom).
- **2.5 Cost of Inaction** — what worsens if not approved.

## §3 Business Objectives & Scope
- Objectives (measurable where possible).
- **In scope** / **Out of scope** — explicit boundaries.

## §4 Target Audience & User Roles
- One subsection per role (responsibilities, access).
- **Role-Permission Matrix** — table: Role × Permission (✓/✗).

## §5 Solution Overview
High-level narrative of the proposed solution — not implementation detail (that's the PRD).

## §6 Functional Requirements
Business-rule level only. One block per requirement:
```
### R-[workstream]-NN — [Short title]
Priority: [P0/P1/P2]
Requirement: [what the system must do, in business terms]
Business rules: [bulleted rules / constraints]
Workflow: [step-by-step if a process; otherwise omit]
[Notes: *(Requires further discussion)* / *(Pending confirmation)* where open]
```
IDs are the traceability spine into the PRD — assign deliberately, never renumber silently.

## §7 Success Metrics
Table: Metric | Baseline | Target | Measurement. Baselines `[X]` if not yet quantified — and call that out as a gating item, not a filled number.

## §8 Assumptions & Dependencies
- **Assumptions** — what must hold true.
- **Dependencies** — internal/external.
- **Critical-Path Dependencies** — table: Dependency | Owner | Status `[Pending/Confirmed]`. Identify the single highest-priority one.

## §9 Risks & Mitigations
Table: Risk | Likelihood | Impact | Mitigation.

## §10 Implementation Roadmap & Next Steps
- Phase/delivery scope (high level).
- Critical-path items to resolve before development.
- Immediate next steps (numbered, owner where known).

## §11 Glossary
Domain + project terms. Keep Indonesian regulatory/operational terms intact.

## §12 Approval Signatures *(decision BRDs)*
Table: No. | Name | Title | Signature | Date.

## Companion-PRD deferral note (footer)
> Technical NFRs, architecture/constraints, screen specs, data schema, and the full risk register are documented in the companion PRD ([ID] v[x]), created following approval.
> Regulatory disclaimer: POJK/UU references are indicative — confirm with Manajer Kepatuhan & APU-PPT before implementation.
