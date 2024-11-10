const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");
const prettier = require("eslint-plugin-prettier");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: ["node_modules/", "dist/", "build/"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        process: "readonly", // Declare 'process' as a global variable
      },
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettier,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "no-unused-vars": "off",
      "prettier/prettier": "error",
    },
  },
  {
    // Configuration for test files using Mocha
    files: ["**/*.test.{js,ts}", "**/*.spec.{js,ts}"], // Match test file patterns
    languageOptions: {
      globals: {
        ...globals.mocha, // Include Mocha globals like `describe`, `it`, etc.
        ...globals.node, // Include Node.js globals if needed
      },
    },
    rules: {
      // Add any test-specific rules here if needed
    },
  },
];
