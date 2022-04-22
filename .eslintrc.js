/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'airbnb-base',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
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
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
  },
};
