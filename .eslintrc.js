module.exports = {
  extends: ['@ofadiman/eslint-config-base'],
  ignorePatterns: ["examples/library/src/**/*.ts"],
  overrides: [
    {
      files: ['src/generators/**', 'examples/**/codegen/**'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    }
  ]
}
