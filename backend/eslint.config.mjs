// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist/**/*", "node_modules/"],
    "rules": {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-undef": "error", // Disallow undefined variables
      "semi": ["error", "always"], // Enforce semicolons
      "quotes": ["error", "double"], // Enforce double quotes for strings
      "no-single-quote": "off", // Ensure no single quotes are used
      "indent": ["error", 2], // Consistent 2-space indentation
      "no-trailing-spaces": "error", // Disallow trailing spaces
      "comma-dangle": ["error", "always-multiline"], // Require trailing commas in multiline lists
      "object-curly-spacing": ["error", "always"], // Enforce spaces inside curly braces
      "arrow-spacing": ["error", { "before": true, "after": true }], // Require spacing around arrow functions
      "no-console": ["warn", { allow: ["warn", "error"] }], // Allow only console.warn and console.error
      "prefer-const": "error" // Prefer const over let for variables that are not reassigned
    }
  }
);
