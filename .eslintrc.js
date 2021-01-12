module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "react-app",
    "prettier",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier", "prettier", "react", "@typescript-eslint"],
  rules: {
    "no-shadow": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-shadow": "off",
    "no-console": "error",
    "no-param-reassign": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".jsx", ".tsx", ".ts", ".js"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js",
      },
    },
  },
};
