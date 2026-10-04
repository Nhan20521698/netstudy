---
name: Maritime Professional
colors:
  surface: '#f3fcef'
  surface-dim: '#d4ddd0'
  surface-bright: '#f3fcef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf6ea'
  surface-container: '#e8f0e4'
  surface-container-high: '#e2ebde'
  surface-container-highest: '#dce5d9'
  on-surface: '#161d16'
  on-surface-variant: '#3d4a3d'
  inverse-surface: '#2a322a'
  inverse-on-surface: '#ebf3e7'
  outline: '#6d7b6c'
  outline-variant: '#bccbb9'
  surface-tint: '#006e2f'
  primary: '#006e2f'
  on-primary: '#ffffff'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#4ae176'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#9e4036'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff8b7c'
  on-tertiary-container: '#76231b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#7f2a21'
  background: '#f3fcef'
  on-background: '#161d16'
  surface-variant: '#dce5d9'
  maritime-navy: '#0f172a'
  vibrant-green: '#22c55e'
  surface-bg: '#f8fafc'
  border-subtle: '#e2e8f0'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
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
  gutter: 24px
  margin-mobile: 16px
  container-max: 1280px
  learning-max: 800px
---

## Brand & Style

This design system is engineered for professional advancement in the global logistics and maritime sector. It balances a legacy of institutional trust with a modern, high-efficiency educational environment. The brand personality is authoritative, reliable, and precise, mirroring the rigorous nature of international trade.

The design follows a **Corporate / Modern** aesthetic. It prioritizes clarity and high data density for long-form study and logistics simulations. The visual language uses structured containers, clear functional zoning, and a systematic approach to information hierarchy to evoke a sense of global connectivity and professional excellence.

## Colors

The palette is anchored by **Vibrant Green** (#22c55e), serving as the primary action color for links, primary buttons, and positive progress indicators. This shift introduces a modern, energetic feel to the educational experience while maintaining high visibility.

**Professional Navy** (#0f172a) acts as the secondary color, used for primary navigation, sidebars, and core brand elements to preserve a grounded, maritime authority. The background architecture utilizes a clean, neutral scale (starting at #f8fafc) to reduce eye strain during extended simulation exercises and reading. High-priority alerts or critical "active" states utilize the primary green palette to denote movement and success.

## Typography

This design system utilizes a dual-font strategy. **Montserrat** provides a geometric, confident structure for headings, suggesting the scale and robustness of global shipping infrastructure. **Inter** is used for all body copy, simulation data, and UI labels due to its exceptional legibility at small sizes and high x-height.

On mobile devices, headlines scale down to ensure content remains digestible without excessive scrolling. Body text remains consistent across all devices to maintain a professional reading experience for complex documentation.

## Layout & Spacing

The layout employs a **Fixed Grid** system for dashboard environments and a **Fluid Grid** for educational content. 

- **Dashboards:** Utilize a left-hand sidebar (280px) with a fluid content area for simulation tools on a 12-column grid.
- **Learning Modules:** Content is centered in a max-width container (800px) to optimize reading speed.
- **Mobile:** Transition to a 4-column grid with 16px margins.

Spacing follows a strict 4px base unit to maintain a clean, rhythmic structure suitable for a data-heavy environment.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** supplemented by **Low-contrast outlines**. This approach minimizes visual noise in complex simulations.

1.  **Level 0 (Base):** Subtle neutral background (#f8fafc).
2.  **Level 1 (Cards/Containers):** Pure white background with a 1px solid border (#e2e8f0).
3.  **Level 2 (Interactive):** Pure white background with a subtle, tight shadow (0px 2px 4px rgba(15, 23, 42, 0.05)) for dropdowns.
4.  **Level 3 (Modals):** High-diffusion shadow (0px 10px 25px rgba(15, 23, 42, 0.12)) to separate interaction layers from the background state.

## Shapes

The design system uses a **Soft** shape language. Standard UI elements like inputs and small buttons use a 0.25rem (4px) corner radius. This choice balances the seriousness of a corporate tool with the modern nature of an educational platform. Cards and larger containers use `rounded-lg` (8px) to provide a more approachable feel.

## Components

### Buttons & CTAs
- **Primary Action:** Solid Vibrant Green (#22c55e) with white text.
- **Secondary Action:** Solid Professional Navy (#0f172a) with white text.
- **Ghost Action:** Border 1px #cbd5e1, text #0f172a.

### Progress & Quizzes
- **Progress Bars:** 8px height track (#f1f5f9) with a Vibrant Green (#22c55e) fill.
- **Quiz Elements:** Selected states use a 2px border of Vibrant Green with a subtle light green background tint.

### Simulation Dashboard
- **Status Badges:** Small, caps-heavy labels. "IN TRANSIT" uses Navy/White, while "COMPLETED" or "ACTIVE" uses Green/White.
- **Inputs:** 1px #cbd5e1 border, focusing to a 2px Vibrant Green ring.

### Chat Interface
- **Simulation AI:** Use a light gray bubble (#f1f5f9) aligned to the left.
- **User Input:** Standard white text area with a clear "Send" button in Vibrant Green.