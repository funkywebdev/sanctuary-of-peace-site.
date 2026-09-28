export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: "var(--bg)", surface: "var(--surface)", ink: "var(--ink)", mute: "var(--mute)", line: "var(--line)", brand: "var(--brand)", "brand-ink": "var(--brand-ink)", gold: "var(--gold)", soft: "var(--soft)", red: "var(--red)", night: "#0E1738" },
      fontFamily: { serif: ["Fraunces", "Georgia", "serif"], sans: ["Figtree", "system-ui", "sans-serif"] },
    },
  },
};
