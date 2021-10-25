<template>
  <scrollbar
    class="flex-auto flex flex-col"
    wrap-class="flex-auto flex flex-col"
    view-clas="flex-auto flex flex-col"
  >
    <div v-for="item in 100" :key="item">{{ item }}</div>
  </scrollbar>
</template>

<script>
  // import ResizeObserver from '@/components/resize-observer.vue';
  import Scrollbar from '@/components/scrollbar';

  export default {
    name: 'welcome-index',
    components: {
      // ResizeObserver,
      Scrollbar,
    },
    setup() {
      function onResize(rect) {
        console.log('resize', rect);
      }

      return {
        onResize,
      };
    },
  };
</script>

<style scoped>

</style>