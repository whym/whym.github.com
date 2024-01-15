module.exports = {
  plugins: ["@html-eslint"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
      rules: {
        "@html-eslint/require-img-alt": "error",
        "@html-eslint/indent": ["warn", 2],
        "@html-eslint/require-closing-tags": "warn",
        "@html-eslint/no-extra-spacing-attrs": "off",
        "@html-eslint/element-newline": ["warn", {
          "skip": ["em", "h2", "svg"]
        }],
        "@html-eslint/no-trailing-spaces": "warn",
      },
    },
  ],
};
