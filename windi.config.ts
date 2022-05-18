import { defineConfig } from "windicss/helpers";

export default defineConfig({
  preflight: false,
  extract: {
    include: ["**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
});
