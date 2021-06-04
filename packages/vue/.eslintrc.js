/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
	'extends': [
		path.join('..', '..', '.eslintrc.js'),
		'sora/vue-3',
		'@vue/typescript/recommended',
	],
}
