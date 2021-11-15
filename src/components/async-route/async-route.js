import { defineAsyncComponent } from 'vue';

export function createAsyncRoute({ loader, loading }) {
  return async () => defineAsyncComponent({
    loadingComponent: loading,
    loader: loader,
  });
}