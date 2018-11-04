module.exports = {
  extends: 'airbnb',
  rules: {
    'linebreak-style': 0,
    'implicit-arrow-linebreak': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
