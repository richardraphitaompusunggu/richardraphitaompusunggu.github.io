---
name: Executive Precision
colors:
  surface: '#041428'
  surface-dim: '#041428'
  surface-bright: '#2b3a50'
  surface-container-lowest: '#000e23'
  surface-container-low: '#0c1c31'
  surface-container: '#112035'
  surface-container-high: '#1c2a40'
  surface-container-highest: '#27354c'
  on-surface: '#d5e3ff'
  on-surface-variant: '#c2c6d7'
  inverse-surface: '#d5e3ff'
  inverse-on-surface: '#223147'
  outline: '#8c90a0'
  outline-variant: '#424654'
  surface-tint: '#b1c5ff'
  primary: '#b1c5ff'
  on-primary: '#002c72'
  primary-container: '#5a8cff'
  on-primary-container: '#002664'
  inverse-primary: '#0056d0'
  secondary: '#f2be69'
  on-secondary: '#432c00'
  secondary-container: '#765000'
  on-secondary-container: '#fac56f'
  tertiary: '#ffb68c'
  on-tertiary: '#532200'
  tertiary-container: '#e56f17'
  on-tertiary-container: '#481d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001847'
  on-primary-fixed-variant: '#0040a0'
  secondary-fixed: '#ffdeae'
  secondary-fixed-dim: '#f2be69'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68c'
  on-tertiary-fixed: '#321200'
  on-tertiary-fixed-variant: '#753400'
  background: '#041428'
  on-background: '#d5e3ff'
  surface-variant: '#27354c'
  surface-elevated: '#14263F'
  surface-accent: '#1B3252'
  text-primary: '#F8FAFC'
  text-secondary: '#94A3B8'
  data-teal: '#2DD4BF'
typography:
  display-hero:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1em
  stats-num:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 48px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is engineered for a **Senior Process Improvement Analyst**, embodying an "Executive Precision" aesthetic. The brand personality is authoritative, data-driven, and meticulously organized, reflecting the high-stakes environment of fintech and operational strategy. 

The chosen style is **Corporate / Modern** with a **Minimalist** foundation. It prioritizes clarity and high-performance visuals over decorative excess. The UI utilizes a premium dark-themed environment where depth is created through subtle tonal shifts rather than traditional shadows. This approach mirrors the subject’s expertise in streamlining complex systems—eliminating noise to focus on critical metrics and strategic outcomes. The aesthetic is "Blue Chip" meets "Modern Tech," signaling both institutional reliability and innovative thinking.

## Colors

The palette is anchored in a high-contrast dark mode to evoke a sense of premium exclusivity and reduced eye strain for data-heavy viewing.

- **Deep Navy (#0A1A2F):** The foundational surface color. It provides a stable, professional backdrop that allows accents to command attention.
- **Professional Blue (#3E7BFA):** Used exclusively for primary actions, navigation states, and technical highlights. It represents innovation and the "Fintech" edge.
- **Subtle Warm Gold (#E4B15E):** Reserved for prestige moments—achievements, key metrics, and high-level milestones. It adds a layer of "Seniority" and warmth to an otherwise cool palette.
- **Data Teal:** Introduced as a functional accent for specific data visualizations or success states where secondary distinction is required.

Maintain a minimum contrast ratio of 4.5:1 for all body text against the navy background to ensure accessibility compliance.

## Typography

The typography strategy balances modern precision with technical utility.

- **Hanken Grotesk (Headlines):** A sharp, contemporary sans-serif that feels both professional and engineered. It is used for all major section headers and hero statements to convey authority.
- **Inter (Body):** Selected for its exceptional readability at small sizes and its neutral, systematic character. It handles bilingual content (EN/ID) efficiently, maintaining a consistent rhythm even as word lengths shift.
- **JetBrains Mono (Labels/Stats):** Used for metadata, skill tags, and small technical labels. The monospaced nature reinforces the "data-driven" and "process-oriented" theme.

**Bilingual Note:** Always allow for 15% extra vertical expansion in containers to accommodate Bahasa Indonesia translations, which can be more wordy than English.

## Layout & Spacing

The design system utilizes a **Fixed Grid** approach for desktop to maintain "Executive" control over content density, transitioning to a fluid single-column stack for mobile.

- **Grid System:** A 12-column grid with a 1280px max-width. Cards for "Expertise" and "Projects" should span 4 columns on desktop (3-up) or 6 columns (2-up) depending on the content count.
- **Sectioning:** The single-page layout is divided into 9 distinct vertical segments. Each section must be separated by a minimum of 120px padding to create "visual breathing room," emphasizing the premium nature of the content.
- **Bilingual Toggle:** Fixed in the top-right of the sticky header, ensuring the user can switch context at any point in the scroll.
- **Breakpoints:**
  - Desktop: 1024px+ (Full 12-column)
  - Tablet: 768px - 1023px (8-column, reduced margins)
  - Mobile: < 768px (4-column, fluid padding)

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Backdrop Blurs**, avoiding heavy shadows to maintain a clean, technical profile.

- **Base Layer:** Deep Navy (#0A1A2F).
- **Surface Layer:** Elevated cards and containers use a slightly lighter "Surface Elevated" (#14263F).
- **Interactive Depth:** Upon hover, cards should transition to "Surface Accent" (#1B3252) with a subtle 1px border of Professional Blue at 30% opacity.
- **Glassmorphism:** The sticky navigation header uses a backdrop-filter (blur: 12px) with a semi-transparent Deep Navy fill (80% opacity) to create a sense of being on the "top layer" without obscuring the background flow.

## Shapes

The design system uses **Soft (0.25rem)** roundedness. This subtle curve softens the industrial nature of the color palette without becoming overly "friendly" or "casual."

- **Interactive Cards:** Use `rounded-lg` (0.5rem) to distinguish them as distinct, touchable objects.
- **Skill Tags/Pills:** Use `rounded-full` (pill-shaped) to create a visual distinction between informational tags and structural containers.
- **Buttons:** Maintain a strict `rounded-sm` (0.25rem) to reinforce the authoritative, professional tone.

## Components

### Buttons
- **Primary:** Professional Blue background, White text, Bold weight. Hover state: Lighten blue by 10%, add a subtle outer glow.
- **Secondary/Outline:** Transparent background, 1px Subtle Gold border, Gold text. Reserved for secondary CTAs like "Download CV."

### Interactive Cards (Expertise/Projects)
- **Structure:** 24px internal padding, H3 headline, body text, and bottom-aligned skill tags.
- **Animation:** On hover, the card should lift -4px on the Y-axis. Transitions must be smooth (300ms cubic-bezier).

### Skill Tags
- Small pills using JetBrains Mono. Background: Surface Accent; Text: Text-Secondary. On hover, the text changes to Professional Blue and the border brightens.

### Animated Timeline
- A vertical 2px line in Surface Accent. Milestones are marked by 12px circles that "fill" with Subtle Gold as the user scrolls them into view.

### Bilingual Toggle
- A segmented controller style. The active language state is highlighted with Professional Blue, while the inactive state remains Text-Secondary.

### Input Fields (Contact)
- Background: Surface Elevated; Border: 1px at 10% opacity white. On focus: Border becomes Professional Blue with a 2px outer glow.