/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Palette issue du logo officiel : marine #0F172A, bleu #1D6FEB (fonds clairs), ciel #38BDF8 (fonds sombres).
      colors: {
        ink: { DEFAULT: "#0F172A", raised: "#162036", line: "#24304A" },
        brand: { DEFAULT: "#1D6FEB", strong: "#1659C4", soft: "#EAF2FE" },
        sky: { DEFAULT: "#38BDF8", soft: "#7DD3FC" },
        paper: "#F8FAFC",
        mist: "#E8ECF1",
        line: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.75rem, 1.6rem + 4.8vw, 5.25rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        h2: [
          "clamp(2rem, 1.35rem + 2.4vw, 3.5rem)",
          { lineHeight: "1.06", letterSpacing: "-0.028em", fontWeight: "600" },
        ],
        h3: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" }],
        lead: ["clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)", { lineHeight: "1.6" }],
      },
      // Deux formes seulement, comme le logo : l'angle droit (6 px) et le demi-disque.
      borderRadius: { box: "6px" },
      // Une seule ombre, réservée aux éléments qui flottent.
      boxShadow: { float: "0 1px 0 rgba(15,23,42,0.04), 0 18px 40px -20px rgba(15,23,42,0.35)" },
      maxWidth: { content: "76rem", measure: "60ch" },
      transitionTimingFunction: { soft: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
    },
  },
  plugins: [],
};
