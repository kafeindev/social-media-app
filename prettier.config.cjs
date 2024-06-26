module.exports = {
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindConfig: "./packages/tailwind/index.cjs",
  tailwindFunctions: ["cn"],
  importOrder: [
    "^server-only|client-only$",
    "",
    "^(express/(.*)$)|^(express$)",
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@social-media-app/(.*)$",
    "^~/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.4.3",
};
