import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config({
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked
  ],
  ignores: [
    'eslint.config.mjs',
    'postcss.config.js',
    'dist',
    '.eslintrc.cjs',
    'tailwind.config.js',
    'vite.config.ts',
    '**/*.test.js',
    '**/*.test.ts',
    '**/*.test.tsx',
    '__tests__/',
    'test/'
  ],

  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    'simple-import-sort': simpleImportSort,
    'react-refresh': reactRefresh
  },
  rules: {
    /*   '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error', */
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // External dependencies
          [
            '^[a-z]',
            '^@',
            'bootstrap/dist/css/bootstrap.min.css',
            'react-toastify/dist/ReactToastify.css'
          ],
          // Local packages
          [
            '^~',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^.+\\.scss$'
          ]
        ]
      }
    ],
    'simple-import-sort/exports': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
});