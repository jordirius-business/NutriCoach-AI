import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "**/node_modules/**",
    "**/.next/**",
    "**/dist/**",
    "**/.turbo/**",
    "**/.expo/**",
    "**/coverage/**",
  ]),
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx}"],
    rules: {},
  },
]);
