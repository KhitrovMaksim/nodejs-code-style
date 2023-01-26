"use strict";

module.exports = {
  extends: ["metarhia", "plugin:prettier/recommended"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "error",
  },
};
