// @murray/brand — Murray Brand System v1.0 — token object (JS/TS access).
// The authoritative shared tokens. Mirror of tokens.css. Keep in lockstep with
// the canonical spec (~/.claude/docs/BRAND.md) and tokens.css.

export const brand = {
  version: "1.1.1", // package release; design spec (tokens) unchanged since v1.0

  // Colors as hex, with matching space-separated RGB channels (for opacity).
  color: {
    orange: "#ff4f00",
    orangeHover: "#e94700",
    orangeSoft: "#fff0e8",
    nearBlack: "#211817",
    text: "#241c1a",
    textMuted: "#6e6861",
    textSubtle: "#8a837c",
    page: "#fffdf9",
    surface: "#f7f3ef",
    surfaceRaised: "#ffffff",
    border: "#e8e1d9",
    borderStrong: "#d8cec4",
    success: "#557a46",
    warning: "#a66b12",
    error: "#b83a2f",
  },
  colorRgb: {
    orange: "255 79 0",
    orangeHover: "233 71 0",
    orangeSoft: "255 240 232",
    nearBlack: "33 24 23",
    text: "36 28 26",
    textMuted: "110 104 97",
    textSubtle: "138 131 124",
    page: "255 253 249",
    surface: "247 243 239",
    surfaceRaised: "255 255 255",
    border: "232 225 217",
    borderStrong: "216 206 196",
    success: "85 122 70",
    warning: "166 107 18",
    error: "184 58 47",
  },

  fontFamily: "Inter",
  text: { xs: "0.75rem", sm: "0.875rem", base: "1rem", lg: "1.125rem", xl: "1.375rem", "2xl": "1.75rem", "3xl": "2.25rem", "4xl": "3rem" },
  weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },

  space: { 1: "4px", 2: "8px", 3: "12px", 4: "16px", 5: "20px", 6: "24px", 8: "32px", 10: "40px", 12: "48px", 16: "64px" },
  radius: { sm: "8px", md: "12px", card: "16px", feature: "20px", pill: "999px" },
  shadow: {
    sm: "0 1px 2px rgba(33,24,23,0.05)",
    card: "0 1px 2px rgba(33,24,23,0.04), 0 8px 24px rgba(33,24,23,0.05)",
    feature: "0 2px 4px rgba(33,24,23,0.05), 0 16px 40px rgba(33,24,23,0.07)",
  },
  motion: { fast: "150ms", base: "200ms", easeOut: "cubic-bezier(0.16, 1, 0.3, 1)" },
  focusRing: "0 0 0 3px rgba(255, 79, 0, 0.3)",

  layout: {
    contentNarrow: "720px",
    contentStandard: "960px",
    contentWide: "1280px",
    gutterMobile: "20px",
    gutterTablet: "32px",
    gutterDesktop: "48px",
    sectionGap: "24px",
    sectionGapLg: "32px",
    sidebarWidth: "288px",
    navHeight: "56px",
    measure: "66ch",
  },
  icon: { sm: "16px", md: "20px", lg: "24px" },
};

export default brand;
