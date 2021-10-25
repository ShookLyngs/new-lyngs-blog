import { createTailwindPreset } from '@lyngs/themer-vue';
import { manager } from './src/modules/theme';

export default {
  mode: 'jit',
  purge: [
    './src/**/*.{vue,js,html}',
  ],
  darkMode: false,
  variants: {
    extend: {
      textColor: ['active'],
      backgroundColor: ['active'],
      boxShadow: ['active', 'focus'],
      borderWidth: ['hover'],
      borderColor: ['active', 'focus'],
      opacity: ['active'],
    },
  },
  presets: [
    createTailwindPreset(manager),
  ],
};
