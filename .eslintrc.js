module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-unresolved': 0,
    indent: [
      'error', 
      4
    ],
    'import/prefer-default-export': 0,
    "import/no-extraneous-dependencies": [
      "error", 
      {
        "devDependencies": [
          "**/*.test.js", 
          "**/*.spec.js", 
          "**/*.test.ts", 
          "**/*.spec.ts", 
        ]
      }
    ],
    'no-useless-constructor': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
  },
};
