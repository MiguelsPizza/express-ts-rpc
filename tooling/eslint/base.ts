/// <reference types="./types.d.ts" />
import * as path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import turboPlugin from "eslint-plugin-turbo";
import tseslint, { ConfigArray } from "typescript-eslint";

const config: ConfigArray = tseslint.config(
  // Ignore files not tracked by VCS and any config files
  includeIgnoreFile(path.join(import.meta.dirname, "../../.gitignore")),
  { ignores: ["**/*.config.*"] },
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    plugins: {
      import: importPlugin,
      turbo: turboPlugin,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      ...turboPlugin.configs.recommended.rules,
      "@turbo/no-undeclared-env-vars": 0,
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unsafe-assignment": 0,
      "@typescript-eslint/prefer-nullish-coalescing": 0,
      "@typescript-eslint/require-await": 0,
      "@typescript-eslint/no-unsafe-call": 0,
      "@typescript-eslint/no-unsafe-member-access": 0,
      "@typescript-eslint/no-alert": 0,
      "@typescript-eslint/camelcase": 0,
      "@typescript-eslint/no-console": 0,
      "@typescript-eslint/no-param-reassign": 0,
      "@typescript-eslint/no-underscore-dangle": 0,
      "@typescript-eslint/no-nested-ternary": 0,
      "@typescript-eslint/no-restricted-exports": 0,
      "@typescript-eslint/prefer-promise-reject-errors": 0,
      "@typescript-eslint/no-unsafe-argument": 0,
      "@typescript-eslint/no-unsafe-return": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-floating-promises": 0,
      "@typescript-eslint/no-unsafe-enum-comparison": 0,
      "@typescript-eslint/restrict-template-expressions": 0,
      "@typescript-eslint/no-empty-object-type": 0,
      "@typescript-eslint/no-unsafe-function-type": 0,
      "@typescript-eslint/no-base-to-string": 0,
      "@typescript-eslint/prefer-optional-chain": 0,
      "@typescript-eslint/no-redundant-type-constituents": 0,
      "@typescript-eslint/no-non-null-asserted-optional-chain": 0,
      "@typescript-eslint/prefer-for-of": 0,
      "@typescript-eslint/await-thenable": 0,
      "@typescript-eslint/no-misused-promises": ["warn", { checksVoidReturn: { attributes: false } }],
      "@typescript-eslint/no-unnecessary-condition": [
        0,
        {
          allowConstantLoopConditions: true,
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: { parserOptions: { projectService: true } },
  },
);

export default config;

export type ConfigArr = ConfigArray;
