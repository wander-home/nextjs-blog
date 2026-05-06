import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettierConfig from 'eslint-plugin-prettier/recommended'; 
import { globalIgnores } from 'eslint/config';

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: [js.configs.recommended, prettierConfig], languageOptions: { globals: {...globals.browser, ...globals.node} }, settings: {react: {version: "19"}}},
  pluginReact.configs.flat.recommended,
  { rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    'prettier/prettier': [
      'error', 
      { 
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        endOfLine: 'lf'
      }],
  }}
]);
