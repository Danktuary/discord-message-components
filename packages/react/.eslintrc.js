/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
	'extends': [
		path.join(__dirname, '..', '..', '.eslintrc.js'),
		'plugin:react/recommended',
	],
	env: {
		browser: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: '^17.0.0',
		},
	},
}
