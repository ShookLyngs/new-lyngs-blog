import { createTheme } from '@lyngs/themer-vue';
import { alpha } from '../util';

export default createTheme({
  name: 'light',
  data: {
    colors: {
      // Basic
      negative: {
        50: '#929292',
        100: '#9e9e9e',
        200: '#aaaaaa',
        300: '#b6b6b6',
        400: '#c2c2c2',
        500: '#dbdbdb',
        600: '#e7e7e7',
        700: '#f3f3f3',
        800: '#f9f9f9',
        900: '#ffffff',
      },
      positive: {
        default: '#444444',
        900: '#000000',
        800: '#111111',
        700: '#222222',
        600: '#333333',
        500: '#444444',
        400: '#555555',
        300: '#666666',
        200: '#777777',
        100: '#888888',
        50: '#999999',
      },
      theme: {
        default: '#073EFF',
        50: '#cdd8ff',
        100: '#b5c5ff',
        200: '#839fff',
        300: '#5178ff',
        400: '#2051ff',
        500: '#073EFF',
        600: '#002ed2',
        700: '#00239d',
        800: '#001769',
        900: '#000c34',
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
