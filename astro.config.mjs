import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://www.riku929hr.com",
  integrations: [icon()],
  vite: { plugins: [tailwindcss()] },
  // Astro v7 changed the default from `true` to `'jsx'`, which leaves extra
  // whitespace between block-level tags. Restore the previous HTML-aware
  // compression so the built output stays byte-identical to before the
  // v5 -> v7 upgrade.
  compressHTML: true,
});
