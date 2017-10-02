"use strict";

module.exports = {
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
			"experimentalObjectRestSpread": true
		}
	},

	"plugins": [
		"react"
	],

	"rules": {
		"jsx-quotes": ["error", "prefer-double"],

		"react/jsx-no-bind": "off",
		"react/jsx-no-comment-textnodes": "warn",
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-no-literals": "off",
		"react/jsx-no-target-blank": "error",
		"react/jsx-no-undef": "error",

		"react/jsx-boolean-value": "error",
		"react/jsx-closing-bracket-location": ["error", {
			"selfClosing": false
		}],
		"react/jsx-closing-tag-location": "error",
		"react/jsx-curly-brace-presence": ["error", {
			"props": "never",
			"children": "ignore"
		}],
		"react/jsx-curly-spacing": "error",
		"react/jsx-equals-spacing": "error",
		"react/jsx-filename-extension": ["error", {
			"extensions": [".js"]
		}],
		"react/jsx-first-prop-new-line": "off",
		"react/jsx-handler-names": "error",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-key": "error",
		"react/jsx-max-props-per-line": "off",
		"react/jsx-pascal-case": "error",
		"react/jsx-sort-props": "off",
		// This rule has been deprecated.
		// "react/jsx-space-before-closing": "error",
		"react/jsx-tag-spacing": "error",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/jsx-wrap-multilines": "error",

		"react/no-array-index-key": "error",
		"react/no-children-prop": "error",
		"react/no-danger": "error",
		"react/no-danger-with-children": "error",
		"react/no-deprecated": "error",
		"react/no-did-mount-set-state": "error",
		"react/no-did-update-set-state": "error",
		"react/no-direct-mutation-state": "error",
		"react/no-find-dom-node": "error",
		"react/no-is-mounted": "error",
		"react/no-multi-comp": "off",
		"react/no-redundant-should-component-update": "error",
		"react/no-render-return-value": "error",
		"react/no-set-state": "off",
		"react/no-string-refs": "off",
		"react/no-typos": "error",
		"react/no-unescaped-entities": "off",
		"react/no-unknown-property": "error",
		"react/no-unused-prop-types": "off",
		"react/no-unused-state": "error",
		"react/no-will-update-set-state": "error",

		"react/boolean-prop-naming": "off",
		// I don't like how it expects the corresponding prop to be optional.
		"react/default-props-match-prop-types": "off",
		"react/display-name": "error",
		"react/forbid-component-props": "off",
		"react/forbid-elements": "off",
		"react/forbid-foreign-prop-types": "off",
		"react/forbid-prop-types": "off",
		"react/prefer-es6-class": "error",
		"react/prefer-stateless-functions": "off",
		"react/prop-types": "error",
		"react/react-in-jsx-scope": "error",
		"react/require-default-props": "off",
		"react/require-optimization": "off",
		"react/require-render-return": "error",
		"react/self-closing-comp": "error",
		"react/sort-comp": "off",
		"react/sort-prop-types": "error",
		"react/style-prop-object": "error",
		"react/void-dom-elements-no-children": "error"
	}
};
