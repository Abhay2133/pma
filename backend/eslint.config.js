// @ts-check

const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Specify global variables
    languageOptions: {
      globals: {
        process: "readonly",
        __dirname: "readonly", // Represents the directory name of the current module
        __filename: "readonly", // Represents the filename of the current module
        Buffer: "readonly", // Provides a way to handle binary data
        global: "readonly", // The global object in Node.js
        console: "readonly", // The global object in Node.js
      },
    },

    ignores: ["dist/**/*", "node_modules/**/*"], // Specify patterns to ignore

    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-single-quote": "off",
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
    },
  }
);
