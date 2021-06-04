module.exports = {
	root: true,
	env: {
		node: true,
	},
	'extends': [
		'plugin:@typescript-eslint/recommended',
		'sora',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	rules: {
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
	},
}
