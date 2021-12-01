module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-undef": "off",
    "no-var": "error",
    "prettier/prettier": "warn",
    //"vue/max-attributes-per-line": "off",
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s", "**/tests/**/*.spec.{j,t}s"],
      env: {
        mocha: true,
      },
    },
  ],
};
