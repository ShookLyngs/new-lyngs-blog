import { createAsyncRoute } from '@/components/async-route';
import WelcomePlaceholder from '@/views/welcome/placeholder.vue';

export const routes = [
  {
    path: '/',
    name: 'entry',
    redirect: { name: 'welcome' },
  },

  {
    path: '/welcome-loading',
    name: 'welcome-loading',
    component: WelcomePlaceholder,
  },

  {
    path: '/welcome',
    name: 'welcome',
    meta: { title: '首页' },
    component: createAsyncRoute({
      loader: () => import('@/views/welcome/index.vue'),
      loading: WelcomePlaceholder,
    }),
  },

  {
    path: '/404',
    name: 'not-found',
    meta: {
      title: '404',
    },
    component: () => import('@/views/welcome/index.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'no-match',
    redirect: {
      name: 'not-found',
    },
  },
];