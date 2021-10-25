// Create App instance
import { createApp } from 'vue';
import App from './app.vue';
const app = createApp(App);

// VueRouter
import router from '@/modules/router';
app.use(router);

// Themer
import themer from '@/modules/theme';
app.use(themer);

// Import TailwindCSS and custom styles
import '@/assets/styles/index.less';

// Mount
app.mount('#app');