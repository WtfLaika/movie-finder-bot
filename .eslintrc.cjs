module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'jest/no-try-expect': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'warn',
    'no-shadow': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-shadow': ['off'],
    'class-methods-use-this': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'dot-notation': 1,
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'never', children: 'never' },
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/sort-comp': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-use-before-define': 'off',
    'react/no-array-index-key': 'warn',
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    'jest/no-disabled-tests': 'error',
    'jest/expect-expect': 'error',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',
    // legacy rules, from previous config
    'jsx-a11y/label-has-associated-control': 'off',
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
    // old + new rules
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['warn'],
    'no-console': 'off',
    camelcase: 'off',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
  },
}
