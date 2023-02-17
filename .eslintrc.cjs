const ERROR = 'error';
const OFF = 'off';
const ALWAYS = 'always';

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        "prettier"
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        "prettier"
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        'react/react-in-jsx-scope': 'off',
        camelcase: 'error',
        'spaced-comment': 'error',
        quotes: ['error', 'single'],
        'no-duplicate-imports': 'error',
    },
    "overrides": [
        {
          // enable the rule specifically for TypeScript files
          "files": ["*.ts", "*.mts", "*.cts"],
          "rules": {
            "@typescript-eslint/explicit-function-return-type": "error"
          }
        }
      ]
}