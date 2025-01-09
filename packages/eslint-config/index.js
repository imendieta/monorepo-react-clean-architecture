const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const path = require("node:path");

const project = path.resolve(process.cwd(), "tsconfig.json");

module.exports = {
    extends: "expo",
    ignores: ['dist'],
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      ecmaVersion: 2020,
      parser: "@typescript-eslint/parser",
      parseOptions: {
        project,
      }
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react-refresh/only-export-components': [
        'off',
        { allowConstantExport: true },
      ],
    },
  };