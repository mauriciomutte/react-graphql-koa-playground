module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react", "react-hooks", "relay"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:relay/recommended",
	],
	env: {
		browser: true,
		es2021: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
