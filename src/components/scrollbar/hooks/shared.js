import { provide, inject } from 'vue';

const sharedKey = 'scrollbar';
export function createScrollbar({ state, key = sharedKey } = {}) {
  provide(key, state);
}
export function useScrollbar(key = sharedKey) {
  return inject(key, null);
}