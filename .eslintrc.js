module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	parser: '@babel/eslint-parser',
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'comma-dangle': ['error', 'never'],
		'no-param-reassign': 0,
		'no-tabs': 0,
		semi: ['error', 'never'],
		'global-require': 0,
		'import/no-unresolved': [2, { caseSensitive: false }],
		'no-console': 'off',
		quotes: ['error', 'single', { allowTemplateLiterals: true }]
	}
}
