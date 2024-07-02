import eslint from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import stylisticPlugin from "@stylistic/eslint-plugin";

const errors = {
	"@stylistic/array-bracket-newline": ["error", "consistent"],
	"@stylistic/array-element-newline": ["error", "consistent"],
	"@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
	"@stylistic/dot-location": ["error", "property"],
	"@stylistic/function-call-argument-newline": ["error", "consistent"],
	"@stylistic/generator-star-spacing": ["error", { "before": false, "after": true }],
	"@stylistic/indent": ["error", "tab", { "ignoreComments": true }],
	"@stylistic/multiline-ternary": ["error", "never"],
	"@stylistic/object-curly-spacing": ["error", "always", { "arraysInObjects": false }],
	"@stylistic/object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
	"@stylistic/padded-blocks": ["error", "never"],
	"@stylistic/quotes": ["error", "double", { "allowTemplateLiterals": true }],
	"@stylistic/space-before-function-paren": ["error", { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
	"@stylistic/wrap-iife": ["error", "inside"],
	"func-style": ["error", "declaration", { "allowArrowFunctions": true }],
	"func-style": ["error", "declaration", { "allowArrowFunctions": true }],
	"no-empty": ["error", { "allowEmptyCatch": true }],
	"no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
	"object-shorthand": ["error", "never"],
	"one-var": ["error", "never"],
	"one-var": ["error", "never"],
	"prefer-destructuring": ["error", { "AssignmentExpression": { "array": false, "object": false }}],
	"radix": ["error", "as-needed"],
	"sort-imports": ["error", { "allowSeparatedGroups": true, "ignoreDeclarationSort": true }],
};

const warnings = {
	"@typescript-eslint/no-unused-vars": "warn",
	"no-continue": "warn",
	"no-shadow": "warn",
	"sort-keys": "warn",
	"sort-vars": "warn",
};

const unsure = {
	"@stylistic/lines-around-comment": "off",
	"@stylistic/no-extra-parens": "off", // This rule has undesirable auto-fix behavior.
	"prefer-named-capture-group": "off",
	"no-loop-func": "off",
};

const disabled = {
	"@stylistic/linebreak-style": "off",
	"@stylistic/lines-between-class-members": "off",
	"@stylistic/newline-per-chained-call": "off",
	"@stylistic/spaced-comment": "off",
	"@stylistic/wrap-regex": "off",
	"@typescript-eslint/dot-notation": "off",
	"@typescript-eslint/prefer-nullish-coalescing": "off",
	"arrow-body-style": "off",
	"capitalized-comments": "off",
	"consistent-return": "off",
	"dot-notation": "off",
	"func-names": "off",
	"id-length": "off",
	"init-declarations": "off",
	"line-comment-position": "off",
	"max-classes-per-file": "off",
	"max-lines-per-function": "off",
	"max-lines": "off",
	"max-statements": "off",
	"multiline-comment-style": "off",
	"no-async-promise-executor": "off",
	"no-await-in-loop": "off",
	"no-console": "off",
	"no-inline-comments": "off",
	"no-magic-numbers": "off",
	"no-negated-condition": "off",
	"no-param-reassign": "off",
	"no-ternary": "off",
	"no-undefined": "off",
	"no-underscore-dangle": "off",
	"no-warning-comments": "off",
	"prefer-arrow-callback": "off",
	"prefer-template": "off",
	"no-else-return": "off"
};

export default [
	{
		"plugins": {
			"@typescript-eslint": typescriptPlugin,
			"@stylistic": stylisticPlugin
		},
		"languageOptions": {
			"parser": typescriptParser,
			"parserOptions": {
				"project": "./tsconfig.json"
			}
		},
		"files": ["**/*.ts"],
		"ignores": ["**/node_modules/*"],
		"rules": {
			// Enable baseline ruleset
			...eslint.configs["all"].rules,

			// Disable rules that are incompatible with or better handled by TypeScript
			...typescriptPlugin.configs["eslint-recommended"].overrides[0].rules,

			// All additional rules
			...typescriptPlugin.configs["stylistic-type-checked"].rules,
			...typescriptPlugin.configs["recommended"].rules,
			...stylisticPlugin.configs["all-flat"].rules,

			...errors,
			...warnings,
			...unsure,
			...disabled
		}
	}
];
