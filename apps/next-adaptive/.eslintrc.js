module.exports = {
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'arrow-body-style': 'error',
    'react/no-unknown-property': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'no-alert': 'warn',
  },
};
