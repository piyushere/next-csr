/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
  },
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: [
        '**/__tests__/**/*.[jt]s?(x)',
        'src/**/?(*.)+(spec|test).[jt]s?(x)',
        // 'jest.setup.js',
      ],
      plugins: ['testing-library'],
      extends: ['plugin:testing-library/react'],
      env: {
        jest: true,
      },
    },
  ],
};
