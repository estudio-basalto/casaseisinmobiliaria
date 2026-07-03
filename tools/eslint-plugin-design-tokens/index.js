// ESLint's eslintrc `plugins` array only accepts package names, not file
// paths, so this wrapper package exposes the plugin implementation (which
// lives unchanged in tools/eslint-plugin-design-tokens.js) under the
// resolvable name `eslint-plugin-design-tokens` via a file: dependency.
module.exports = require('../eslint-plugin-design-tokens.js')
