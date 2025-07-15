import { FlatCompat } from '@eslint/eslintrc';          // legacy config 호환
import tsPlugin      from '@typescript-eslint/eslint-plugin';
import tsParser      from '@typescript-eslint/parser';
import reactPlugin   from 'eslint-plugin-react';
import reactHooks    from 'eslint-plugin-react-hooks';
import rnPlugin      from 'eslint-plugin-react-native';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,  // 현재 경로 기준
  recommendedConfig: false,            // eslint:recommended 자동 포함 여부
});

export default [
  /* ------------------------------------------------------------------
   * 1) 기존 extends → FlatCompat 로드
   * ------------------------------------------------------------------ */
  ...compat.extends('airbnb'),
  ...compat.extends('airbnb-typescript'),
  ...compat.extends('airbnb/hooks'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),

  /* ------------------------------------------------------------------
   * 2) 프로젝트 공통 설정
   * ------------------------------------------------------------------ */
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-native': rnPlugin,
    },
    settings: {                                  // import/resolver 등
      'import/resolver': {
        typescript: {},
      },
    },

    extends: ['prettier'],

    rules: {
      /* React Native */
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'warn',
      'react-native/no-raw-text': 'off',
      'react-native/no-single-element-style-arrays': 'error',

      /* TypeScript */
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      /* React */
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      /* Import */
      'import/extensions': ['error', 'ignorePackages', {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }],
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: [
          '**/*.test.{js,jsx,ts,tsx}',
          '**/*.spec.{js,jsx,ts,tsx}',
          '**/__tests__/**',
          '**/jest.config.{js,ts}',
          '**/vite.config.{js,ts}',
        ],
      }],

      /* General */
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',

      /* Style */
      'max-len': ['error', { code: 100, ignoreUrls: true }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
];