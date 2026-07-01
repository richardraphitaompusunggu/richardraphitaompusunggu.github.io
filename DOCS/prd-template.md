# PRD Template — Structure

The canonical PRD structure for this skill, adopted from the user's mature house PRD. The PRD answers **how the product works from the user's perspective** — it is the "how" to the BRD's "what/why."

Output English by default. Dates DD Month YYYY. IDR with comma separators. Screen specs assume **web** unless the surface is confirmed mobile. Mark unknowns `[X]` / put them in Open Questions — never fabricate.

---

## §1 Document Information
```
# Product Requirements Document (PRD)
Project Name: [...]   Version: [x.y]   Last Updated: [DD Month YYYY]
Document Owner: [...]   Parent Document: [BRD ID] v[x.y]
```
- **Version History** — table: Version | Date | Author | Changes.
- **Living Document Notice** — kept in sync with the BRD; update one → review the other.
- **How This Document Relates to the BRD** — restate: BRD = what/why, PRD = how; on conflict, discuss, resolve, update both.

## §2 Product Summary
What the product is, who it's for, the core value, in a few tight paragraphs.

## §3 User Personas
One per role: name + one-line identity, goals, frustrations, context. Keep Indonesian persona names/context where used (e.g. a primary borrower persona).

## §4 User Stories
Grouped by feature area. Format: **"As a [role], I want [capability] so that [benefit]."** Each story traces back to a BRD requirement ID where one exists.

## §5 Screen Specifications
The heart of the PRD. One subsection per screen, grouped by portal (e.g. Borrower portal, Internal portal). Per screen:
- Purpose, surface (web/mobile, default web), entry point.
- Layout / key elements.
- Fields + validation.
- Actions + resulting behavior / state transitions.
- Empty/loading/error states.

## §6 Application Lifecycle — Product Behavior
- **Status Transition Rules** — table/diagram of allowed transitions and triggers.
- **What [each role] Sees Per Status** — the user-facing behavior of each state.

## §7 Data Input Specifications
- Form fields — table: Field | Type | Required | Validation | Notes.
- Document/upload specs (formats, size limits).
- Editable vs read-only fields per role.
- Config/reference data (mark CONFIRMED vs pending).

## §8 File Upload Flow — Technical Product Behavior
Upload sequence, retry/error handling, storage behavior — at product-behavior level (not infra).

## §9 Notification & Feedback Behavior
Triggers → recipient → channel → content. Include in-app + any messaging (e.g. WhatsApp/WABLAS) notifications.

## §10 ID Format Conventions
The ID schemes used across the product (application IDs, loan IDs, user IDs) with format + example.

## §11 Error Handling & Edge Cases
Concurrent access, session expiry mid-work, business-rule limits (e.g. max loans, tenor, ceiling), expiry handling, resubmission behavior. One subsection per case.

## §12 Performance Targets
Table: Aspect | Target | Notes. (e.g. screen load, upload time.) This is the PRD home for performance — it does not live in the BRD.

## §13 Implementation Phases
Phased delivery: Phase N — [name] → scope bullets. Mirrors/extends the BRD roadmap at product-feature granularity.

## §14 Open Questions
- **Resolved Questions** — question + the resolution (dated).
- **Remaining Open Questions** — the live list. This split is how PRD maturity is tracked — keep it current.

## §15 Glossary
Product + domain terms; keep Indonesian regulatory/operational terms intact.
