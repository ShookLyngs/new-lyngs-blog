// Create App instance
import { createApp } from 'vue';
import App from './app.vue';
const app = createApp(App);

// VueRouter
import router from '@/modules/router';
app.use(router);

// I18n
import locale from '@/modules/locale';
app.use(locale);

// Themer
import themer from '@/modules/theme';
app.use(themer);

// Import TailwindCSS and custom styles
import '@/assets/styles/index.less';
import 'polacoms/es/style.css';

// Mount
app.mount('#app');