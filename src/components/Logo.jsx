// Géométrie reprise à l'identique des fichiers officiels EVORYA_Logo_Horizontal_*.svg.
// Ne pas modifier les proportions. "dark" = pour fonds sombres, "light" = pour fonds clairs.
const TONES = {
  dark: { bar: "#FFFFFF", bowl: "#38BDF8", word: "#FFFFFF", sub: "#475569" },
  light: { bar: "#0F172A", bowl: "#1D6FEB", word: "#0F172A", sub: "#64748B" },
};

export default function Logo({ tone = "dark", decorative = false, className = "" }) {
  const c = TONES[tone];
  const a11y = decorative
    ? { "aria-hidden": "true" }
    : { role: "img", "aria-label": "Evorya Digital" };

  return (
    <svg viewBox="8 8 192 56" fill="none" className={className} {...a11y}>
      <g fill={c.bar}>
        <rect x="12" y="12" width="5" height="48" />
        <rect x="12" y="12" width="28" height="5" />
        <rect x="12" y="33" width="20" height="4.5" />
        <rect x="12" y="55" width="28" height="5" />
      </g>
      <path d="M38 30H43A15 15 0 0 1 43 60H38Z" fill={c.bowl} />
      {/* Un seul <text> : le texte visible se lit « EVORYA DIGITAL », ce qui correspond au nom accessible. */}
      <text className="font-display">
        <tspan x="78" y="41" fontSize="27" fontWeight="700" letterSpacing="4" fill={c.word}>
          EVORYA
        </tspan>{" "}
        <tspan x="79" y="55" fontSize="10.5" fontWeight="400" letterSpacing="8" fill={c.sub}>
          DIGITAL
        </tspan>
      </text>
    </svg>
  );
}
