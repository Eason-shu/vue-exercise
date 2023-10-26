/*
 * @Author: EasonShu
 * @Date: 2023-10-26 13:38:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-10-26 15:15:52
 * @FilePath: \vue-manger\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/prettier",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "off",
  },
};
