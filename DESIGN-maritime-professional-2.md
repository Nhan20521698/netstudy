---
name: Maritime Professional
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#43474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#944b00'
  on-secondary: '#ffffff'
  secondary-container: '#fe9743'
  on-secondary-container: '#6b3500'
  tertiary: '#002141'
  on-tertiary: '#ffffff'
  tertiary-container: '#003765'
  on-tertiary-container: '#68a2e9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb783'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#703700'
  tertiary-fixed: '#d3e4ff'
  tertiary-fixed-dim: '#a2c9ff'
  on-tertiary-fixed: '#001c38'
  on-tertiary-fixed-variant: '#004881'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  unit-1: 4px
  unit-2: 8px
  unit-3: 12px
  unit-4: 16px
  unit-6: 24px
  unit-8: 32px
  unit-12: 48px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for professional advancement in the complex field of global logistics. The brand personality is authoritative, reliable, and efficient, reflecting the precision required in import-export operations. 

The design style follows a **Corporate / Modern** aesthetic with high-precision alignment. It prioritizes clarity and data density without sacrificing the user's cognitive load during long-form study sessions. The visual language uses structured containers, clear functional zoning, and a systematic approach to information hierarchy to evoke a sense of global connectivity and institutional trust.

## Colors

The palette is anchored by **Trustworthy Navy** (#1A365D), used for primary navigation and core brand elements to establish authority. **Professional Blue** (#2B6CB0) serves as the primary action color for links and secondary buttons. 

**Energetic Orange** (#ED8936) is reserved exclusively for high-priority Call-to-Actions (CTAs), progress indicators, and "active" states in simulations to ensure they stand out against the corporate blue tones. The background architecture utilizes a tiered gray scale (starting at #F7FAFC) to reduce eye strain during extended reading and simulation exercises.

## Typography

This design system utilizes a dual-font strategy. **Montserrat** provides a geometric, confident structure for headings, suggesting the scale and robustness of global shipping infrastructure. **Inter** is used for all body copy, simulation data, and UI labels due to its exceptional legibility at small sizes and high x-height, which is critical for complex logistics documentation.

For mobile viewports, `headline-xl` should scale down to 32px and `headline-lg` to 24px to ensure readability without excessive scrolling. Body text remains constant across devices to maintain a consistent reading experience.

## Layout & Spacing

The layout employs a **Fixed Grid** system for dashboard environments and a **Fluid Grid** for educational content. On desktop, a 12-column grid with a 24px gutter is standard. 

- **Dashboards:** Utilize a left-hand sidebar (280px) with a fluid content area for simulation tools.
- **Learning Modules:** Content is centered in a max-width container (800px) to optimize reading speed and comprehension.
- **Mobile:** Transition to a 4-column grid with 16px margins.

Spacing follows a strict 4px base unit to maintain a clean, rhythmic structure suitable for a data-heavy professional environment.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** supplemented by **Low-contrast outlines**. This approach minimizes visual noise in complex simulations.

1.  **Level 0 (Base):** Light Gray (#F7FAFC) for the application background.
2.  **Level 1 (Cards/Containers):** White background with a 1px solid border (#E2E8F0). No shadow.
3.  **Level 2 (Interactive/Floating):** White background with a subtle, tight shadow (0px 2px 4px rgba(26, 54, 93, 0.06)). Used for dropdowns and tooltips.
4.  **Level 3 (Modals):** High-diffusion shadow (0px 10px 25px rgba(26, 54, 93, 0.15)) to clearly separate the simulation state from the interaction layer.

## Shapes

The design system uses a **Soft** shape language. Standard UI elements like inputs and small buttons use a 0.25rem (4px) corner radius. This choice balances the seriousness of a corporate tool with the modern, approachable nature of an educational platform. Cards and larger containers use `rounded-lg` (8px) to soften the overall appearance of the dashboard.

## Components

### Buttons & CTAs
- **Primary Action:** Solid #2B6CB0 with white text. 4px radius. 
- **Urgent Action (Enroll/Submit):** Solid #ED8936 with white text.
- **Ghost Action:** Border 1px #CBD5E0, text #1A365D.

### Progress & Quizzes
- **Progress Bars:** A 8px height track (#EDF2F7) with a #ED8936 fill. 
- **Quiz Elements:** Selected states use a 2px border of #2B6CB0 with a subtle #EBF8FF background tint.

### Simulation Dashboard
- **Time Controls:** A specialized button group using the `code-sm` font for digital precision. "Play" uses #2B6CB0, while "Pause" uses #1A365D.
- **Status Badges:** Small, caps-heavy labels with high-contrast backgrounds (e.g., "IN TRANSIT" in Navy/White) for instant status recognition.

### Chat Interface
- **Simulation AI:** Use a light blue bubble (#EBF8FF) aligned to the left.
- **User Input:** Standard white text area with a 1px #CBD5E0 border, using a clear "Send" button in #2B6CB0.