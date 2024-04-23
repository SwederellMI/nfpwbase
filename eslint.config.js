import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.ts'],
    ignores: ["*.config.js", './node_modules', './playwright-report', 'test-results'],
    languageOptions: {
      globals: {},
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-base-to-string": [
        "warn",
        { ignoredTypeNames: ["Locator", "Date"] },
      ],
    },
  }
);
