module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'simple-import-sort'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'eol-last': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'no-multi-spaces': 'error',
    'simple-import-sort/imports': 'error',
  },
};
