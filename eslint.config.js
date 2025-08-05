import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
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
      // Regras existentes do seu projeto
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // === AIRBNB STYLE GUIDE RULES ===

      // Formatting
      "indent": ["error", 2, { SwitchCase: 1 }],
      "quotes": ["error", "single", { avoidEscape: true }],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "computed-property-spacing": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "comma-spacing": ["error", { before: false, after: true }],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-blocks": "error",
      "space-infix-ops": "error",
      "space-unary-ops": ["error", { words: true, nonwords: false }],
      "spaced-comment": ["error", "always"],

      // Function spacing
      "space-before-function-paren": ["error", {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }],
      "function-paren-newline": ["error", "multiline-arguments"],

      // Braces and blocks
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "curly": ["error", "multi-line", "consistent"],
      "nonblock-statement-body-position": ["error", "beside"],

      // Variable declarations
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "any" }],
      "one-var": ["error", "never"],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],

      // Arrow functions
      "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],
      "arrow-spacing": "error",
      "arrow-parens": ["error", "as-needed"],

      // Objects and arrays
      "object-shorthand": ["error", "always"],
      "quote-props": ["error", "as-needed"],
      "no-duplicate-imports": "error",

      // Best practices
      "eqeqeq": ["error", "always", { null: "ignore" }],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "warn",
      "radix": "error",
      "yoda": "error",

      // Naming conventions
      "camelcase": ["error", {
        properties: "never",
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false
      }],

      // TypeScript specific
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",

      // Imports organization
      "sort-imports": ["error", {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      }],
    },
  }
);