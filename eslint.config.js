import stylistic from '@stylistic/eslint-plugin';
export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always', { 'omitLastInOneLineClassBody': true }]
    }
  }
];
