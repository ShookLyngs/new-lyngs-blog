// Plugins
import tailwind from 'tailwindcss';
import toRem from 'postcss-pxtorem';
import autoPreFixer from 'autoprefixer';

// Config
import config from './tailwind.config.js';

export default {
  plugins: [
    autoPreFixer,
    tailwind(config),
    toRem({
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: ['.no-rem'],
    }),
  ],
};
