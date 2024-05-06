import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      semi: ['warn', 'always'],
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
