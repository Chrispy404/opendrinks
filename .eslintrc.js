module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
<<<<<<< HEAD
	'@vue/airbnb',
	'@vue/eslint-config-airbnb', 
	'@vue/eslint-config-prettier'
=======
    '@vue/airbnb',
    '@vue/eslint-config-airbnb',
    '@vue/eslint-config-prettier',
>>>>>>> upstream/master
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  overrides: [
    {
<<<<<<< HEAD
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
=======
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
>>>>>>> upstream/master
};
