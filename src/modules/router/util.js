import { defineAsyncComponent } from 'vue';

export function createSkeletonRoute({ loader, loading }) {
  return async () => defineAsyncComponent({
    loadingComponent: loading,
    loader: loader,
  });
}