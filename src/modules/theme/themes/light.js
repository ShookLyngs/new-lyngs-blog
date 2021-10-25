import { createTheme } from '@lyngs/themer-vue';
import { alpha } from '../util';

export default createTheme({
  name: 'light',
  data: {
    colors: {
      // Basic
      negative: {
        400: '#cdcdcd',
        500: '#dbdbdb',
        600: '#ececec',
        700: '#f3f3f3',
        800: '#f9f9f9',
        900: '#ffffff',
      },
      positive: {
        default: '#333333',
        900: '#1a1a1a',
        800: '#333333',
        700: '#404040',
        600: '#575757',
        500: '#636363',
        400: '#707070',
        300: '#828282',
        200: '#9e9e9e',
        100: '#aeaeae',
        50: '#bababa',
      },
      theme: {
        default: '#409EFF',
        50: '#c8e3ff',
        100: '#add5ff',
        200: '#92c8ff',
        300: '#77baff',
        400: '#5bacff',
        500: '#409EFF',
        600: '#0b83ff',
        700: '#0069d5',
        800: '#004ea0',
        900: '#00346a',
      },

      // Emotional
      success: {
        500: '#42a773',
        600: '#3e7946',
      },
      error: {
        500: '#e35f5f',
        600: '#b14c4c',
      },

      // Alphas
      mask: {
        50: alpha('#f3f3f3', 0.1),
        100: alpha('#f3f3f3', 0.2),
        200: alpha('#f3f3f3', 0.3),
        300: alpha('#f3f3f3', 0.4),
        400: alpha('#f3f3f3', 0.5),
        500: alpha('#f3f3f3', 0.6),
        600: alpha('#f3f3f3', 0.7),
        700: alpha('#f3f3f3', 0.8),
        800: alpha('#f3f3f3', 0.9),
        900: '#f3f3f3',
      },
      modal: {
        50: alpha('#222', 0.1),
        100: alpha('#222', 0.2),
        200: alpha('#222', 0.3),
        300: alpha('#222', 0.4),
        400: alpha('#222', 0.5),
        500: alpha('#222', 0.6),
        600: alpha('#222', 0.7),
        700: alpha('#222', 0.8),
        800: alpha('#222', 0.9),
        900: '#222',
      },
    },
  },
});
