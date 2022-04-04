module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json']
      }
    },
  },
  rules: {
    'import/extensions': ['off'],
    'import/namespace': ['off'],
    '@typescript-eslint/indent': ['off'],
  },
};
