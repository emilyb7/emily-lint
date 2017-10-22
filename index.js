module.exports = {
  env: { browser: true, node: true, es6: true },
  rules: {
    "array-bracket-spacing": ["error", "always"],
    camelcase: [error, { properties: "always" }],
    "comma-dangle": ["error", "always"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "object-curly-spacing": ["error", "always"]
  }
};
