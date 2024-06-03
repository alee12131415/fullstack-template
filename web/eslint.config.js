import globals from "globals"
import eslintJsPlugin from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import reactEslintPlugin from "eslint-plugin-react";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        files: ["src/**/*.+(js|jsx|ts|tsx)"],
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            react: reactEslintPlugin,
        },
        languageOptions: {
            parser: typescriptEslintParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
            }
        },
        rules: {
            // @typescript-eslint
            ...typescriptEslintPlugin.configs["recommended"].rules,

            // react
            ...reactEslintPlugin.configs["recommended"].rules,

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
    {
        files: ["src/**/*.spec.+(js|jsx|ts|tsx)"],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
];
