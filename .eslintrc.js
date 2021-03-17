module.exports = {
  extends: ['@ofadiman/eslint-config-base'],
  overrides: [
    {
      files: ['src/generators/**'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    }
  ]
}
