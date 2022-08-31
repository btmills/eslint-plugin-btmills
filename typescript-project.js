"use strict";

module.exports = {
	"extends": "./typescript.js",

	"rules": {
		"no-constant-condition": "off", // Covered by @typescript-eslint/strict-boolean-expressions
		"import/no-unresolved": "off", // Covered by type checker

		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/consistent-type-exports": ["error", {
			"fixMixedExportsWithInlineTypeSpecifier": true
		}],
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-confusing-void-expression": "error",
		"@typescript-eslint/no-floating-promises": ["error", {
			"ignoreVoid": false,
			"ignoreIIFE": false
		}],
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-meaningless-void-operator": "error",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-redundant-type-constituents": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-condition": "off", // Covered by @typescript-eslint/strict-boolean-expressions
		"@typescript-eslint/no-unnecessary-qualifier": "off",
		"@typescript-eslint/no-unnecessary-type-arguments": "off",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-assignment": "error",
		"@typescript-eslint/no-unsafe-call": "error",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"@typescript-eslint/no-unsafe-return": "error",
		"@typescript-eslint/non-nullable-type-assertion-style": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/prefer-readonly-parameter-types": "off",
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-return-this-type": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/require-array-sort-compare": "off",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/restrict-template-expressions": "error",
		"@typescript-eslint/strict-boolean-expressions": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/unbound-method": "error",

		// Extension rules

		"dot-notation": "off",
		"@typescript-eslint/dot-notation": ["error", {
			"allowKeywords": true
		}],

		"no-implied-eval": "off",
		"@typescript-eslint/no-implied-eval": "error",

		"no-return-await": "off",
		"@typescript-eslint/return-await": "error",

		"no-throw-literal": "off",
		"@typescript-eslint/no-throw-literal": "error",

		"require-await": "off",
		"@typescript-eslint/require-await": "error"
	}
};
