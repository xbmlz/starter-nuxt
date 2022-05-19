import { defineConfig } from "windicss/helpers";

export default defineConfig({
  preflight: true,
  extract: {
    include: ["**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
});
