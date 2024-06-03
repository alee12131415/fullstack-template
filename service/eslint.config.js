const eslintJsPlugin = require("@eslint/js");
const typescriptEslintPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptEslintParser = require("@typescript-eslint/parser");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
    {
        files: ["src/**/*.+(js|ts)"],
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
        },
        languageOptions: {
            parser: typescriptEslintParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            // @typescript-eslint
            ...typescriptEslintPlugin.configs["recommended"].rules,

            // eslint
            ...eslintJsPlugin.configs["recommended"].rules,
            indent: [
                "error",
                4,
                { SwitchCase: 1 },
            ],
            "comma-dangle": [
                "warn",
                "always-multiline",
            ],
            semi: [
                "warn",
                "always",
            ],
            "no-console": [
                "warn",
            ],
        },
    },
];
