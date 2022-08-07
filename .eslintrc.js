module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['functional', '@typescript-eslint', 'prettier', 'jest', 'react'],
  extends: [
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prefer-type-alias/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json'],
        moduleDirectory: ['node_modules', './src'],
      },
    },
    'import/ignore': ['react-native'],
  },
  env: {
    node: true,
  },
  rules: {
    curly: 'warn',
    eqeqeq: 'warn',
    'prefer-template': 'warn',
    'func-style': ['warn', 'declaration'],
    'no-restricted-imports': ['warn', { patterns: ['.*'] }],
    'no-negated-condition': 'warn',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'import/order': 'warn',
    'import/first': 'warn',
    'import/exports-last': 'warn',
    'functional/no-class': 'error',
    'functional/no-return-void': 'off',
    'functional/no-expression-statement': 'off',
    'functional/no-conditional-statement': 'off',
    'functional/functional-parameters': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'functional/no-expression-statement': 'off',
        'functional/immutable-data': 'off',
      },
    },
  ],
};
