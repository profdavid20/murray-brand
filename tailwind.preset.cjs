/**
 * @murray/brand — Tailwind preset (v3.2+ / v4).
 * The authoritative shared brand scales as Tailwind theme extensions.
 *
 * Consuming app MUST also load the CSS variables:  import '@murray/brand/tokens.css';
 * Then:  presets: [require('@murray/brand/tailwind-preset')]
 *
 * Colors use the `<alpha-value>` placeholder against the shipped *-rgb channels,
 * so opacity modifiers (e.g. bg-orange/20, border-border/70) work everywhere.
 * These are the SHARED brand colors; each product adds its own page/surface/
 * highlight utilities from its --product-* tokens on top of this.
 */
const c = (v) => `rgb(var(${v}) / <alpha-value>)`;

module.exports = {
  theme: {
    extend: {
      colors: {
        orange: c("--brand-orange-rgb"),
        "orange-hover": c("--brand-orange-hover-rgb"),
        "orange-soft": c("--brand-orange-soft-rgb"),
        "near-black": c("--brand-near-black-rgb"),
        text: c("--brand-text-rgb"),
        "text-muted": c("--brand-text-muted-rgb"),
        "text-subtle": c("--brand-text-subtle-rgb"),
        page: c("--brand-page-rgb"),
        surface: c("--brand-surface-rgb"),
        "surface-raised": c("--brand-surface-raised-rgb"),
        border: c("--brand-border-rgb"),
        "border-strong": c("--brand-border-strong-rgb"),
        success: c("--brand-success-rgb"),
        warning: c("--brand-warning-rgb"),
        error: c("--brand-error-rgb"),
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        xl: ["1.375rem", { lineHeight: "1.4" }],
        "2xl": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "3xl": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "4xl": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        card: "16px",
        feature: "20px",
        pill: "999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(33,24,23,0.05)",
        card: "0 1px 2px rgba(33,24,23,0.04), 0 8px 24px rgba(33,24,23,0.05)",
        feature: "0 2px 4px rgba(33,24,23,0.05), 0 16px 40px rgba(33,24,23,0.07)",
      },
      maxWidth: {
        "content-narrow": "45rem",
        "content-standard": "60rem",
        "content-wide": "80rem",
      },
      transitionTimingFunction: {
        "brand-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};
