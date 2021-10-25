export const routes = [
  {
    path: '/',
    name: 'entry',
    redirect: { name: 'welcome' },
  },

  {
    path: '/welcome',
    name: 'welcome',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/welcome/index.vue'),
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