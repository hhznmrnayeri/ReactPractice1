import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
export default tseslint.config(
  { ignores: ["dist", "eslint.config.js"] },
  {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/tsx-runtime",
      "plugin:react-hooks/recommended",
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react/jsx-no-target-blank": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/tsx-no-target-blank": "off",
      "react/tsx-uses-react": "error",
      "react/tsx-uses-vars": "error",
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
