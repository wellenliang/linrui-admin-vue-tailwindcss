import antfu from '@antfu/eslint-config';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },

    typescript: true,
    vue: true,
    jsonc: false,
    yaml: false,
  },
  {
    plugins: [tailwindcssPlugin],
    rules: {},
  },
);
