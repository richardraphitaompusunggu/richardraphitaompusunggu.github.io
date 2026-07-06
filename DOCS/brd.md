# Business Requirements Document (BRD)
# Portfolio Website — Richard Raphita Ompusunggu

No.: 001/BRD/PERSONAL/PORTFOLIO/07/2026   Date: 01 July 2026
Version: 1.7   Department: Personal Project   Prepared by: Richard Raphita Ompusunggu   Status: Draft

---

## §0 Document Control

### Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 01 July 2026 | Richard Raphita Ompusunggu | Initial draft — full BRD based on content plan and about-me questionnaire |
| 1.1 | 01 July 2026 | Richard Raphita Ompusunggu | Added Non-Functional Requirements (§6.5); new functional reqs R-SITE-13–16 (Resume download, Analytics, Favicon/OG/404, Contact-method constraint); Open Decisions log (§9.5); resolved contact-form vs. no-backend conflict; added accessibility/spam/analytics risks and new dependencies |
| 1.2 | 01 July 2026 | Richard Raphita Ompusunggu | Achievement metrics for all 5 expertise areas received (about-me §4–8); updated dependency status, assumptions, roadmap, and next steps accordingly; added Superset/Metabase/Jupyter to analytics tooling |
| 1.3 | 01 July 2026 | Richard Raphita Ompusunggu | Added a 9th section — Personal Projects / Skills Showcase (R-SITE-17) for self-initiated Python/Kaggle, n8n, and McKinsey business-case work; updated section counts (8→9) and dependencies |
| 1.4 | 01 July 2026 | Richard Raphita Ompusunggu | 3 professional case studies received (about-me §9) and professional photo provided (`DOCS/picture.JPG`); updated R-SITE-01/04, assumptions, dependencies, risks, critical path, and next steps; Personal Projects visuals now the critical-path content |
| 1.5 | 03 July 2026 | Richard Raphita Ompusunggu | Locked design system to navy-blue (D-08); decided placeholder-first launch for Personal Projects & Testimonials (D-09); initial website build (index.html + assets) — bilingual, responsive, 9 sections |
| 1.6 | 03 July 2026 | Richard Raphita Ompusunggu | Adopted "Executive Precision" design system from `DESIGN/DESIGN.md` (updated D-08); restyled site — new palette/type, centered expertise cards, two-column case studies, column-based skills; content unchanged |
| 1.7 | 06 July 2026 | Richard Raphita Ompusunggu | Personal Projects now open per-discipline detail pages (`lab.html?topic=`) listing cases; case titles link to rendered GitHub notebooks; horizontal work-experience timeline; misc layout centering |

### Related Documents
- [Implementation Plan](./implementation-plan.md) — Content & deployment strategy
- [About Me](./about-me.md) — Content questionnaire with personal/professional details

---

## §1 Executive Summary

### 1.1 Strategic Context
Richard is a Senior Process Improvement Analyst with 6 years of experience in fintech/financial services. He is actively positioning himself for new career opportunities and needs a professional online presence beyond LinkedIn to stand out to recruiters and hiring managers. A portfolio website will serve as a comprehensive showcase of his expertise that can be linked from his LinkedIn profile.

### 1.2 The Problem in One Sentence
LinkedIn profiles are limited in format and depth — a portfolio website allows Richard to present his expertise in data analysis, business strategy, operational excellence, project management, and automation with richer content, visual proof, and a more compelling narrative.

### 1.3 What This BRD Requests
- Build a single-page, bilingual (English + Bahasa Indonesia) portfolio website
- Showcase 5 core expertise areas with case studies and measurable achievements
- Deploy on GitHub Pages (free hosting)
- Share via LinkedIn profile as a supplementary professional resource

### 1.4 Expected Outcomes

| Outcome | Metric | Baseline | Target |
|---|---|---|---|
| Professional online presence | Live portfolio URL | None | 1 deployed site |
| Recruiter engagement | Click-throughs from LinkedIn | 0 | [X] — track via analytics |
| Interview conversion | Recruiter inquiries via contact form/email | [X] | Increase vs. current rate |
| Expertise visibility | Number of expertise areas showcased with depth | 0 | 5 areas with case studies |

---

## §2 Business Problem Analysis

### 2.1 Finding
A LinkedIn profile alone is insufficient to differentiate a mid-senior professional in a competitive job market. Recruiters spend 30–90 seconds scanning a profile and need quick credibility signals — a well-designed portfolio provides depth, structure, and proof of expertise that LinkedIn's format cannot fully deliver.

### 2.2 Current State

| Dimension | Current State |
|---|---|
| Online presence | LinkedIn profile only |
| Expertise showcase | Limited to LinkedIn's Skills and Experience sections |
| Visual proof of work | None — no dashboards, case studies, or project visuals |
| Contact accessibility | LinkedIn InMail only |
| Bilingual support | Not available on LinkedIn |

### 2.3 Business Impact
- **Missed opportunities:** Recruiters may pass over the profile due to lack of differentiation from other candidates with similar titles
- **Limited storytelling:** LinkedIn restricts how achievements and case studies can be presented
- **No visual portfolio:** Data analysis, dashboarding, and automation work is best demonstrated visually

### 2.4 Root Cause
No dedicated platform exists to present Richard's professional work in a structured, visually compelling format beyond the constraints of LinkedIn's template-based profile.

### 2.5 Cost of Inaction
- Continued reliance on LinkedIn alone in a competitive fintech/analytics job market
- Potential employers cannot see the depth and breadth of Richard's capabilities
- No differentiation from other candidates with similar job titles

---

## §3 Business Objectives & Scope

### Objectives
1. Create a professional, visually premium portfolio website that positions Richard as an expert in his 5 core areas
2. Provide recruiters with a comprehensive view of skills, experience, and achievements
3. Enable bilingual (English + Bahasa Indonesia) content to reach broader audiences
4. Deploy at zero ongoing cost using GitHub Pages
5. Make the site mobile-responsive (recruiters often browse on phones)

### In Scope
- Single-page website with 9 content sections (Hero, About, Expertise, Featured Projects, Personal Projects, Skills, Journey, Testimonials, Contact)
- Bilingual content (English + Bahasa Indonesia)
- Responsive design (desktop + mobile)
- Premium dark-themed UI with animations
- Deployment to GitHub Pages
- SEO best practices

### Out of Scope
- Blog or CMS functionality
- Backend/server-side logic
- Payment processing
- User accounts or authentication
- Content management system (content is static)
- Custom domain purchase (can be added later as an enhancement)

---

## §4 Target Audience & User Roles

### Recruiters & Hiring Managers (Primary)
- **Behavior:** Click portfolio link from LinkedIn, scan quickly (30–90 seconds), look for credibility signals
- **Needs:** Fast-loading, clear expertise areas, measurable achievements, easy contact options
- **Access:** Public — no login required

### Peers & Professional Network (Secondary)
- **Behavior:** Browse to understand Richard's capabilities for potential collaboration
- **Needs:** Technical depth, tools & methodologies used
- **Access:** Public — no login required

### Richard (Owner/Admin)
- **Behavior:** Updates content, deploys changes
- **Needs:** Easy-to-maintain code, clear file structure
- **Access:** GitHub repository (source code)

### Role-Permission Matrix

| Role | View Site | Edit Content | Deploy | Manage Repo |
|---|---|---|---|---|
| Recruiters / Visitors | ✓ | ✗ | ✗ | ✗ |
| Richard (Owner) | ✓ | ✓ | ✓ | ✓ |

---

## §5 Solution Overview

Build a static, single-page portfolio website using HTML, CSS, and JavaScript (vanilla — no heavy frameworks). The site will feature:

- **"Executive Precision" theme** (see `DESIGN/DESIGN.md`) — deep navy base (#041428), light-blue primary (#b1c5ff), warm-gold (#f2be69) and data-teal (#2DD4BF) accents; Hanken Grotesk / Inter / JetBrains Mono type
- **9 scrollable sections** with smooth navigation
- **Responsive design** for desktop, tablet, and mobile
- **Scroll-triggered animations** for engagement
- **Bilingual toggle** (EN/ID) for all content
- **Static hosting** on GitHub Pages for zero cost and high reliability

The technology choice (vanilla HTML/CSS/JS) ensures:
- No build tools or dependencies to maintain
- Easy to understand and update for someone familiar with basic HTML/CSS/JS
- Fast load times (no framework overhead)
- Simple GitHub Pages deployment (push and it's live)

---

## §6 Functional Requirements

### R-SITE-01 — Hero Section
Priority: P0
Requirement: Display Richard's name, professional headline, tagline, and CTA buttons on initial page load.
Business rules:
- Headline: "Turning Data Into Decisions, Processes Into Performance"
- Tagline: "I help organizations improve operational performance through data-driven analysis, structured problem-solving, and intelligent automation — turning messy processes into scalable, efficient systems."
- CTA buttons: "View My Work" (scrolls to projects) + "Connect on LinkedIn" (opens LinkedIn profile)
- Professional photo displayed prominently (provided: `DOCS/picture.JPG` — optimize/convert to WebP and size appropriately per NFR-01 before use)
- Full-viewport height with animated gradient background

### R-SITE-02 — About Me Section
Priority: P0
Requirement: Display professional summary, philosophy, key stats (years of experience, industries), and animated counters.
Business rules:
- Split layout: text on one side, stats/metrics on the other
- Animated number counters triggered on scroll into view
- Industries listed: Fintech, Financial Services / Banking

### R-SITE-03 — Core Expertise Cards
Priority: P0
Requirement: Display 5 expertise areas as interactive cards with descriptions, tools, and achievements.
Business rules:
- 5 cards: Data Analysis, Business Strategy, Operational Excellence, Project Management, Automation
- Each card shows: icon, title, description, key tools, achievement metric
- Cards have hover effects and expand/reveal more detail on click
- Scroll-triggered entrance animations

### R-SITE-04 — Featured Projects / Case Studies
Priority: P1
Requirement: Display 3-5 project case studies with filtering by expertise area.
Business rules:
- Card grid layout with category filter tags
- Each card: title, expertise tags, brief summary
- Click to expand for full case study (Problem → Approach → Result)
- 3 case studies provided (about-me §9): Partnership Lending Dashboard, Workflow Automation, Partnership Lending System; a 4th–5th are optional
- Company names anonymized ("Financial services / fintech") per Richard's preference

### R-SITE-17 — Personal Projects / Skills Showcase
Priority: P1
Requirement: Display self-initiated projects that demonstrate hands-on skill across the expertise areas, with rich visuals. Renders as its own section immediately after Featured Projects (R-SITE-04).
Business rules:
- Purpose: prove technical ability **directly** using public/Kaggle data and personal builds — complements the anonymized professional case studies in R-SITE-04 (which prove *impact*)
- Card/grid layout with filter tags by discipline: Data Analysis, Automation, Business Strategy, Process Improvement, Project Management
- Each card shows: title, discipline tag(s), tools used, short description, and a visual (chart image, workflow screenshot, or diagram)
- Each discipline card on the home page links to a dedicated detail page (`lab.html?topic=<discipline>`) that lists that discipline's cases portfolio-style (title → tags → description → chart)
- Each case title opens the **rendered notebook on GitHub** (inline charts) — or nbviewer — where the `.ipynb`/workflow/write-up lives
- Example projects to feature:
  - **Data Analysis (Python):** Kaggle datasets showing EDA, regression (e.g., Boston House Prices), clustering, and time-series forecasting/ARIMA (e.g., Brazil E-commerce), with charts
  - **Automation (n8n):** an end-to-end workflow with a screenshot/diagram of the node graph and what it automates
  - **Business Strategy:** a business case structured and solved with McKinsey frameworks (MECE, issue tree, hypothesis-driven analysis)
- Visuals optimized (WebP/AVIF) per NFR-01 and given descriptive alt text per NFR-02
- Because this section is image-heavy, lazy-load below-the-fold visuals to protect the NFR-01 performance budget
- *(Content partially available — Data Analysis projects exist; n8n and business-case content pending. Placeholder structure required.)*

### R-SITE-05 — Skills & Tools Grid
Priority: P1
Requirement: Display all skills and tools in a categorized, scannable grid.
Business rules:
- Categories: Data & Analytics, Automation & Integration, Project Management, Business & Strategy, Operational Excellence, Other Tools, Soft Skills
- Skill tags with subtle hover animations
- Tool logos where recognizable (Python, SQL, Tableau, etc.)

### R-SITE-06 — Professional Journey Timeline
Priority: P1
Requirement: Display career history as a vertical animated timeline.
Business rules:
- 3 roles displayed (Amartha → Koinworks Sr → Koinworks Officer)
- Education milestones included (Prasetiya Mulya, Atma Jaya)
- Certifications included (Google PM, Data Science Bootcamp)
- Scroll-triggered animations for each milestone

### R-SITE-07 — Testimonials Section
Priority: P2
Requirement: Display 2-3 testimonial quotes from colleagues/managers.
Business rules:
- Carousel or static card layout
- Quote, name, and title for each testimonial
- *(Content pending — placeholder structure required)*

### R-SITE-08 — Contact / CTA Section
Priority: P0
Requirement: Display contact information and links with a clear call to action.
Business rules:
- Email: richardraphita@gmail.com
- LinkedIn: https://www.linkedin.com/in/richardraphita/
- GitHub: https://github.com/richardraphitaompusunggu
- Closing statement: "I'm always open to new challenges and conversations. Let's discuss how I can bring value to your team."
- Prominent CTA button for LinkedIn connection

### R-SITE-09 — Bilingual Toggle
Priority: P1
Requirement: Allow visitors to switch between English and Bahasa Indonesia.
Business rules:
- Toggle visible in navigation/header
- All content sections must have both EN and ID versions
- Default language: English
- Language preference persisted in browser (localStorage)

### R-SITE-10 — Navigation
Priority: P0
Requirement: Sticky navigation bar with smooth scroll to sections.
Business rules:
- Fixed/sticky header on scroll
- Navigation links for all 9 sections
- Active section highlighting on scroll
- Mobile hamburger menu for smaller screens
- Smooth scroll behavior on click

### R-SITE-11 — Responsive Design
Priority: P0
Requirement: Website must render correctly on desktop, tablet, and mobile.
Business rules:
- Breakpoints: mobile (< 768px), tablet (768px–1024px), desktop (> 1024px)
- All content readable without horizontal scrolling on any device
- Touch-friendly interactive elements on mobile

### R-SITE-12 — SEO & Meta Tags
Priority: P1
Requirement: Implement SEO best practices for discoverability.
Business rules:
- Descriptive title tag: "Richard Raphita Ompusunggu — Senior Process Improvement Analyst | Portfolio"
- Meta description summarizing expertise
- Open Graph tags for LinkedIn sharing (image, title, description)
- Single H1 per page, proper heading hierarchy
- Semantic HTML5 elements

### R-SITE-13 — Resume / CV Download
Priority: P1
Requirement: Provide a one-click download of Richard's up-to-date resume (PDF).
Business rules:
- "Download CV" button in the Hero and/or Contact section
- Serves a PDF hosted in the repository (opens in a new tab / downloads)
- Recruiters frequently want an offline copy to circulate internally

### R-SITE-14 — Analytics & Event Tracking
Priority: P1
Requirement: Instrument the site to measure the engagement metrics defined in §7.
Business rules:
- Track page views plus key events: "View My Work", "Connect on LinkedIn", "Download CV", email clicks, and language-toggle usage
- Prefer a lightweight, privacy-friendly tool (e.g., Cloudflare Web Analytics, Plausible, or GA4) — final choice is an open decision (§9.5)
- Without this, the §7 click-through and inquiry targets cannot actually be measured

### R-SITE-15 — Favicon, Social Preview & 404 Page
Priority: P2
Requirement: Provide brand-polish assets and graceful error handling.
Business rules:
- Favicon and web app manifest (name, theme color, icons)
- Open Graph / Twitter Card preview image (1200×630) so LinkedIn shares render an attractive card
- Custom 404 page that links back to the single page

### R-SITE-16 — Contact Method (Static-Site Constraint)
Priority: P0
Requirement: Provide a working contact path given there is no backend.
Business rules:
- Primary path: a `mailto:` button to richardraphita@gmail.com plus a prominent LinkedIn CTA
- An HTML contact form on a static site sends nothing on its own — any form must post to a third-party service (e.g., Formspree, Web3Forms)
- Resolves the conflict between "contact form" (§1.4) and "no backend" (§3, Out of Scope): a form is in scope **only** if a third-party service is used; otherwise `mailto` + LinkedIn is the contact method
- Obfuscate the raw email address to reduce spam-bot harvesting

---

## §6.5 Non-Functional Requirements (NFRs)

Functional requirements describe *what* the site does; NFRs describe *how well* it must do it. On a recruiter-facing site — where speed, polish, and first impressions drive credibility — these carry as much weight as the functional requirements.

### NFR-01 — Performance
- Lighthouse Performance ≥ 90 on mobile
- Largest Contentful Paint < 2.5s on a mid-tier phone over 4G; Cumulative Layout Shift < 0.1
- Initial page weight < 1 MB — hero image compressed, web fonts subset, no render-blocking third-party scripts
- Images in modern formats (WebP/AVIF) with explicit width/height to prevent layout shift

### NFR-02 — Accessibility (target WCAG 2.1 AA)
- Text/background contrast ≥ 4.5:1 — **explicitly verify the gold and teal accents on the dark theme**, as bright accents on dark backgrounds commonly fail
- All interactive elements keyboard-navigable with a visible focus state
- Descriptive `alt` text on images (including the professional photo)
- Bilingual toggle updates the document `lang` attribute (`en` / `id`) for screen readers
- Honor `prefers-reduced-motion` — reduce/disable animations for users who request it
- Semantic landmarks (`nav`, `main`, `section`, `footer`)

### NFR-03 — Browser & Device Support
- Latest 2 versions of Chrome, Edge, Safari, and Firefox (desktop + mobile)
- iOS Safari and Android Chrome explicitly tested
- Graceful degradation where gradients/animations are unsupported

### NFR-04 — Security & Privacy
- HTTPS enforced (automatic on GitHub Pages)
- No secrets or private data committed to the public repository
- Prefer cookieless analytics to avoid needing a consent banner
- `rel="noopener noreferrer"` on all external links opened in a new tab

### NFR-05 — Maintainability
- Content and EN/ID strings separated from markup where practical (e.g., a JS content/i18n object) so copy edits don't touch layout
- Code commented for someone with basic HTML/CSS/JS familiarity
- Repository README documents file structure and how to update content and deploy

### NFR-06 — SEO & Discoverability (operational)
- `sitemap.xml` and `robots.txt` present
- JSON-LD `Person` structured data for richer search results
- Canonical URL tag set

---

## §7 Success Metrics

| Metric | Baseline | Target | Measurement |
|---|---|---|---|
| Site deployed and live | No site exists | Live on GitHub Pages | URL accessible |
| Mobile responsiveness | N/A | Passes all responsive checks | Manual testing on 3+ devices |
| Page load speed | N/A | < 3 seconds | Lighthouse / PageSpeed Insights |
| LinkedIn click-throughs | [X] | [X] — track over 3 months | Google Analytics or equivalent |
| Recruiter inquiries | [X] | Increase vs. current rate | Email / LinkedIn messages |
| Content completeness | Placeholder content | All 9 sections with real content | Manual review |

---

## §8 Assumptions & Dependencies

### Assumptions
- Professional photo provided (`DOCS/picture.JPG`) for the hero section
- Achievement metrics (about-me §4–8) and 3 professional case studies (about-me §9) are provided; Personal Projects assets (§9A) and testimonials remain pending (placeholders acceptable for v1.0)
- The website will be a static site — no server-side processing needed
- Bilingual content translations will be reviewed by Richard for accuracy

### Dependencies

| Dependency | Owner | Status |
|---|---|---|
| Professional photo | Richard | ✅ Provided (`DOCS/picture.JPG`) |
| Achievement metrics (Sections 4–8) | Richard | ✅ Provided (about-me §4–8) |
| Project case studies (3-5) | Richard | ✅ 3 provided (about-me §9); 4th–5th optional |
| Testimonials (2-3 quotes) | Richard | Pending |
| GitHub account setup | Richard | [Confirmed] |
| Bahasa Indonesia translations | Richard | Pending |
| Resume / CV (PDF) | Richard | Pending |
| Social preview (Open Graph) image, 1200×630 | Richard / Design | Pending |
| Analytics tool choice & account | Richard | Pending (see §9.5, D-01) |
| Personal-project chart images (Python EDA exports) | Richard | Partial — projects exist, images to export |
| n8n workflow screenshot/diagram + description | Richard | Pending |
| Business-case write-up (McKinsey framework) + diagram | Richard | Pending |
| Notebook/repo links (GitHub / Kaggle) for projects | Richard | Pending |

### Critical-Path Dependency
**Personal Projects visuals (§9A)** — chart images, the n8n workflow screenshot, and the business-case diagram are now the main content gating a fully complete v1.0. The site can launch with placeholder cards for this section and have visuals added iteratively. *(Previous critical path — the professional photo — is now resolved: `DOCS/picture.JPG`.)*

---

## §9 Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Content placeholders remain unfilled long-term | Medium | High — reduces credibility | Set a 2-week deadline to complete all placeholder content after initial deployment |
| ~~Photo not provided~~ (resolved) | — | — | ✅ Photo provided (`DOCS/picture.JPG`) — keep a typography-based fallback in case a higher-res version is preferred later |
| Bilingual content has translation errors | Medium | Medium — unprofessional impression | Richard reviews all ID translations before publish |
| Site looks outdated over time | Low | Medium — hurts credibility | Use timeless design patterns; plan annual design refresh |
| GitHub Pages goes down | Very Low | Low — temporary | GitHub has 99.9%+ uptime; no mitigation needed |
| Accent colors (gold/teal on dark) fail WCAG AA contrast | Medium | Medium — hurts readability & accessibility | Test contrast during design (NFR-02); tune accent luminance or reserve accents for large text/non-essential UI |
| Email address harvested by spam bots | Medium | Low — inbox noise | Obfuscate email; prefer a button/`mailto` over plain text (R-SITE-16) |
| Engagement metrics unmeasurable at launch | Medium | Medium — can't prove ROI | Ship lightweight analytics with v1.0 (R-SITE-14) |

---

## §9.5 Open Decisions & Questions Pending

Decisions Richard needs to make before or during the build. Logging them here prevents mid-build stalls.

| # | Decision | Options | Recommendation |
|---|---|---|---|
| D-01 | Analytics tool | GA4 / Plausible / Cloudflare Web Analytics / none | Cloudflare Web Analytics or Plausible — no cookie banner, lightweight |
| D-02 | Contact form vs. links only | `mailto` + LinkedIn only / add a third-party form | Start with `mailto` + LinkedIn; add a form later only if needed |
| D-03 | Resume / CV download | Provide PDF / omit | Provide — recruiters expect an offline copy |
| D-04 | Photo style | Formal headshot / candid professional / typography-only fallback | Professional headshot |
| D-05 | Custom domain | `github.io` subdomain now / buy domain (~$12/yr) | Launch on `github.io`, add a domain later |
| D-06 | Launch strategy | Wait for all real content / launch with tasteful placeholders and iterate | Launch with placeholders, complete content within 2 weeks |
| D-07 | Show location publicly | Show "Bekasi, Indonesia" / hide | Show region — helps local recruiters and SEO |
| D-08 | Design color system | Navy + blue + gold / other | ✅ **Decided (v1.6) — "Executive Precision"** (`DESIGN/DESIGN.md`): surface `#041428`, primary `#b1c5ff`, secondary/gold `#f2be69`, teal `#2DD4BF`; Hanken Grotesk + Inter + JetBrains Mono |
| D-09 | Launch Personal Projects (§9A) & Testimonials (§14) | Placeholder-first / wait for content | ✅ **Decided (v1.5):** ship as placeholder sections, review the live site, then add visuals/quotes |

---

## §10 Implementation Roadmap & Next Steps

### Phase 1: Foundation (Current Sprint)
- ✅ Content strategy and planning
- ✅ BRD creation
- ✅ Achievement metrics collected for all 5 expertise areas
- ✅ 3 professional case studies provided (about-me §9)
- ✅ Professional photo provided (`DOCS/picture.JPG`)
- ⏳ Richard provides remaining content (Personal Projects visuals §9A, testimonials)
- 🔲 Design system (colors, typography, spacing tokens)
- 🔲 HTML structure and CSS styling

### Phase 2: Build (Next Sprint)
- 🔲 Implement all 9 sections with animations
- 🔲 Bilingual toggle system
- 🔲 Responsive design implementation
- 🔲 SEO & meta tags

### Phase 3: Polish & Deploy
- 🔲 Cross-browser and mobile testing
- 🔲 Performance optimization (Lighthouse audit)
- 🔲 Deploy to GitHub Pages
- 🔲 Add portfolio link to LinkedIn profile

### Phase 4: Content Completion (Post-Launch)
- 🔲 Replace all placeholder content with real data
- 🔲 Add testimonials
- 🔲 Consider custom domain

### Immediate Next Steps
1. ✅ Professional photo provided (`DOCS/picture.JPG`)
2. ✅ Standout achievements with numbers collected for each expertise area
3. ✅ 3 professional case studies provided (about-me §9)
4. ⏳ Richard prepares Personal Projects visuals (§9A): Python chart exports, n8n workflow screenshot, business-case diagram, and notebook/repo links
5. Begin website development — content is now sufficient to build with placeholders only for Personal Projects visuals and testimonials

---

## §11 Glossary

| Term | Definition |
|---|---|
| **BRD** | Business Requirements Document — defines what the business needs |
| **PRD** | Product Requirements Document — defines how to build it |
| **SPA** | Single-Page Application — a website that loads as one HTML page with scrollable sections |
| **GitHub Pages** | Free static site hosting provided by GitHub |
| **SEO** | Search Engine Optimization — techniques to improve discoverability |
| **CTA** | Call to Action — a prompt for the user to take a specific action |
| **Lighthouse** | Google's tool for auditing web page quality (performance, accessibility, SEO) |
| **Open Graph** | Meta tags that control how a URL is displayed when shared on social media (LinkedIn, Facebook, etc.) |
| **Lean Six Sigma** | Methodology combining Lean manufacturing and Six Sigma for process improvement |
| **MECE** | Mutually Exclusive, Collectively Exhaustive — a McKinsey problem-structuring framework |
| **NFR** | Non-Functional Requirement — a quality attribute (speed, accessibility, security) rather than a feature |
| **WCAG** | Web Content Accessibility Guidelines — the standard for making web content usable by people with disabilities (AA is the common compliance target) |
| **LCP / CLS** | Largest Contentful Paint / Cumulative Layout Shift — Google Core Web Vitals measuring load speed and visual stability |
| **JSON-LD** | A format for embedding structured data (e.g., a `Person` profile) that search engines read for richer results |
| **i18n** | Internationalization — structuring content so it can be presented in multiple languages (here, EN + ID) |

---

> **Companion-PRD deferral note:**
> Technical implementation details (file structure, CSS architecture, animation specs, responsive breakpoints) will be handled during the build phase. This BRD focuses on business requirements and content strategy. No companion PRD is required for this personal project — implementation will follow the approved BRD directly.
