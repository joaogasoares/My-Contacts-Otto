module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'space-before-blocks': 'off',
    'indent': 'off',
    'padded-blocks': 'off',
    'quote-props': 'off',
  },
};
