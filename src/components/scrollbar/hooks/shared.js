import { provide, inject } from 'vue';

const sharedKey = 'scrollbar';
export function createScrollbar({ state } = {}) {
  provide(sharedKey, state);
}
export function useScrollbar(key = sharedKey) {
  return inject(key, null);
}