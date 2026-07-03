# Portfolio Website — Content & Deployment Plan

## Goal

Create a professional, visually stunning single-page portfolio website that positions you as an expert in **Data Analysis, Business Strategy, Operational Excellence, Project Management, and Automation**. The site will be shared on LinkedIn to give recruiters a deeper look at your capabilities beyond your resume.

---

## Content Strategy & Audience

### Who Will Visit?
Recruiters and hiring managers clicking your LinkedIn portfolio link. They typically:
- Spend **30–90 seconds** on a first visit
- Scan visually before reading
- Look for **credibility signals** (results, tools, experience)
- Want to quickly assess if you're worth contacting

### Content Principles
1. **Lead with impact** — Numbers, outcomes, and results first
2. **Show, don't tell** — Demonstrate expertise through case studies, not just claims
3. **Make it effortless** — Clean navigation, clear hierarchy, fast load
4. **End with a CTA** — Make it easy for them to reach out

---

## Decisions Made

| Decision | Choice |
|---|---|
| **Language** | Bilingual (English + Bahasa Indonesia) |
| **Tone** | Modern professional — confident but approachable, using 'I' statements |
| **Deployment** | GitHub Pages (free, reliable, professional) |
| **Photo** | Will be provided by user |

---

## Site Structure (Single-Page, 9 Sections)

The website will be a single-page design with smooth scroll navigation — ideal for a LinkedIn audience who wants a quick, cohesive story.

### Section 1: Hero / First Impression
**Purpose:** Hook the visitor in 3 seconds. Establish who you are and what you do.

**Content needed from you:**
- [x] Your full name
- [x] A professional headline — *"Turning Data Into Decisions, Processes Into Performance"*
- [x] A short tagline (see About Me §2)
- [x] A professional photo — `DOCS/picture.JPG` (optimize/convert to WebP before use)
- [x] LinkedIn profile URL

**Design approach:**
- Full-viewport hero with animated gradient background
- Bold typography with a subtle entrance animation
- CTA buttons: "View My Work" + "Connect on LinkedIn"

---

### Section 2: About Me
**Purpose:** Build a personal connection. Let recruiters understand your professional story.

**Content needed from you:**
- [ ] A 3-4 sentence professional summary (who you are, your career focus, what drives you)
- [ ] Years of experience
- [ ] Industries you've worked in (e.g., FMCG, Banking, Tech, Manufacturing)
- [ ] Your professional philosophy or approach (e.g., *"I believe every process can be improved, every dataset tells a story, and every strategy should be grounded in evidence."*)

**Design approach:**
- Split layout: text on one side, key stats/metrics on the other
- Animated counters for key numbers (years of experience, projects delivered, etc.)

---

### Section 3: Core Expertise (The Big 5)
**Purpose:** Clearly communicate your five pillars of expertise with depth.

Each expertise area will have its own card with an icon, description, and key highlights.

#### 3a. Data Analysis
- [ ] Brief description of your data analysis approach (2-3 sentences)
- [ ] Key tools/technologies (e.g., Python, SQL, Power BI, Tableau, Excel/Advanced)
- [ ] Types of analysis you perform (e.g., trend analysis, forecasting, dashboarding, statistical modeling)
- [ ] A standout achievement or metric (e.g., *"Built dashboards that reduced reporting time by 70%"*)

#### 3b. Business Strategy
- [ ] Brief description of your strategic work (2-3 sentences)
- [ ] Frameworks or methodologies you use (e.g., SWOT, Porter's Five Forces, OKRs, balanced scorecard)
- [ ] Types of strategic work (e.g., market entry, growth planning, competitive analysis)
- [ ] A standout achievement or metric

#### 3c. Operational Excellence
- [ ] Brief description of your operations work (2-3 sentences)
- [ ] Methodologies (e.g., Lean, Six Sigma, Kaizen, process mapping)
- [ ] Types of improvements you've driven (e.g., cost reduction, cycle time improvement, quality improvement)
- [ ] A standout achievement or metric (e.g., *"Reduced operational costs by 25% through process redesign"*)

#### 3d. Project Management
- [ ] Brief description of your PM approach (2-3 sentences)
- [ ] Methodologies & certifications (e.g., Agile, Scrum, Waterfall, PMP, PRINCE2)
- [ ] Project types (e.g., digital transformation, system implementation, cross-functional initiatives)
- [ ] A standout achievement or metric (e.g., *"Led 15+ cross-functional projects with 95% on-time delivery"*)

#### 3e. Automation
- [ ] Brief description of your automation work (2-3 sentences)
- [ ] Tools & technologies (e.g., Python, n8n, Power Automate, UiPath, Zapier, VBA/Macros)
- [ ] Types of automation (e.g., workflow automation, data pipelines, report generation, RPA)
- [ ] A standout achievement or metric (e.g., *"Automated 40+ manual processes, saving 200+ hours/month"*)

**Design approach:**
- Interactive cards with hover effects and icons
- Each card expands or reveals more detail on click
- Subtle entrance animations as cards scroll into view

---

### Section 4: Featured Projects / Case Studies
**Purpose:** Prove your expertise with real examples. This is the most important section for credibility.

> [!TIP]
> Aim for **3–5 projects** that span your expertise areas. Each project should tell a mini-story: Problem → Approach → Result.

**Status:** ✅ 3 case studies provided in About Me §9 — a 4th–5th are optional:
1. **Partnership Lending Dashboard** — Superset/SQL dashboard replacing heavy spreadsheets (Data Analysis, SQL)
2. **Workflow Automation** — n8n + Apps Script automations across reports, emails, Asana, Slack, WhatsApp (Automation)
3. **Partnership Lending System** — BRD, timeline, and UAT for moving a manual process in-system (Project Management)

> [!NOTE]
> These case studies describe outcomes qualitatively (cleaner process, shared dashboard, on-system loans). Where Richard can attach a number later (e.g., hours saved, error reduction), fold it in to strengthen credibility.

**Design approach:**
- Card grid with category filter tags (Data Analysis, Strategy, etc.)
- Each card shows title, tags, and a brief summary
- Click to expand for the full case study
- Visual indicators showing which expertise areas each project covers

---

### Section 4B: Personal Projects / Skills Showcase
**Purpose:** Prove technical skill *directly* with self-initiated work — this is where hands-on ability is visible, not just claimed. Complements Section 4 (professional case studies prove impact; personal projects prove skill).

**Content needed from you (see About Me §9A):**
- [ ] **Data Analysis (Python):** Kaggle projects with charts — EDA, regression (Boston House Prices), clustering + ARIMA (Brazil E-commerce)
- [ ] **Automation (n8n):** a workflow with a node-graph screenshot and a description of what it automates
- [ ] **Business Strategy:** a business case solved with a McKinsey framework (MECE, issue tree, hypothesis-driven analysis)
- [ ] Exported chart images / screenshots / diagrams (compressed, WebP where possible)
- [ ] Optional links to GitHub repos or Kaggle notebooks

**Design approach:**
- Card grid with discipline filter tags (Data Analysis, Automation, Business Strategy, …)
- Each card: thumbnail visual, title, discipline tags, tools, short description
- Click to expand for detail images and an "View notebook / workflow / case" outbound link
- Image-heavy — lazy-load below-the-fold visuals to keep the page fast

---

### Section 5: Skills & Tools
**Purpose:** Quick visual reference of your technical and professional toolkit.

**Content needed from you:**
- [ ] **Data & Analytics:** (e.g., Python, SQL, R, Power BI, Tableau, Excel, Google Sheets)
- [ ] **Automation & Integration:** (e.g., n8n, Power Automate, Zapier, UiPath, Python scripting)
- [ ] **Project Management:** (e.g., Jira, Asana, Trello, MS Project, Monday.com)
- [ ] **Business & Strategy:** (e.g., Financial Modeling, Market Research, Business Planning)
- [ ] **Other Tools:** (e.g., SAP, Salesforce, Google Workspace, Microsoft 365)
- [ ] **Soft Skills:** (e.g., Stakeholder Management, Cross-functional Leadership, Presentation)

**Design approach:**
- Categorized skill tags with subtle animations
- Tool logos where recognizable (Power BI, Python, etc.)
- Clean, scannable grid layout

---

### Section 6: Professional Journey (Timeline)
**Purpose:** Show career progression and growth.

**Content needed from you:**
- [ ] Key career milestones (roles, companies, years — as much as you're comfortable sharing)
- [ ] Certifications or notable training (e.g., Google Data Analytics, PMP, Six Sigma Green Belt)
- [ ] Education highlights

**Design approach:**
- Vertical animated timeline
- Each milestone appears as a card with date, role, and brief description
- Smooth scroll-triggered animations

---

### Section 7: Testimonials / Endorsements (Optional but Powerful)
**Purpose:** Social proof from colleagues, managers, or clients.

**Content needed from you:**
- [ ] 2-3 quotes from colleagues, managers, or clients (you can pull these from LinkedIn recommendations)
- [ ] Name and title of each person (with their permission)

> [!NOTE]
> If you don't have testimonials ready, we can skip this section or add a placeholder for later. Even 1-2 short quotes add significant credibility.

---

### Section 8: Contact / Call to Action
**Purpose:** Make it dead simple for recruiters to reach out.

**Content needed from you:**
- [ ] Preferred contact email
- [ ] LinkedIn URL
- [ ] Any other links (GitHub, blog, etc.)
- [ ] A closing statement (e.g., *"Let's discuss how I can bring value to your team."*)

**Design approach:**
- Clean contact section with a contact form or direct links
- Large, prominent CTA button
- Subtle animated background

---

## Design Direction

| Aspect | Approach |
|---|---|
| **Style** | Modern, professional, premium navy-blue theme with accent gradients |
| **Typography** | Outfit (headings) + Inter (body) from Google Fonts |
| **Colors** | Deep navy-blue base (`#0A1A2F` / `#0F2440`) · professional-blue primary accent (`#3E7BFA`, light `#6FA0FF`) · subtle warm-gold highlight for metrics (`#E4B15E`) · text `#EAF1FA` / muted `#9DB2CC`. Navy + blue + gold is a classic, finance-appropriate, professional pairing. |
| **Animations** | Smooth scroll reveals, hover effects, number counters |
| **Responsiveness** | Fully mobile-responsive (recruiters often check on phones) |
| **Performance** | Lightweight, fast-loading single page |

---

## Deployment: GitHub Pages

| Aspect | Detail |
|---|---|
| **Cost** | Free |
| **URL** | `yourusername.github.io` |
| **Custom Domain** | Supported (you'd buy a domain ~$10-15/year) |
| **Setup** | Push code to GitHub → enable Pages |
| **Best For** | Static sites, zero ongoing cost |
| **Pros** | Free, reliable, easy HTTPS, shows you know Git |

> [!TIP]
> Start with the free `.github.io` URL. If you want extra polish, add a custom domain later — it takes 5 minutes to set up.

---

## Next Steps

1. ✅ Content plan reviewed and approved
2. ✅ Key decisions made (language, tone, deployment, photo)
3. 🔲 You fill in the content details (or we work through them together)
4. 🔲 I build the website with premium design and animations
5. 🔲 We test and refine together
6. 🔲 Deploy to GitHub Pages
7. 🔲 You add the link to your LinkedIn profile
