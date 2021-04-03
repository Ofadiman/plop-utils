/**
 * For local testing execute `echo "potential commit message" | commitlint`.
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Disable validation for max body/header length.
    'body-max-line-length': [0],
    'header-max-length': [0]
  }
}
