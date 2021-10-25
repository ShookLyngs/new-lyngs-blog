<template>
  <scrollbar class="flex-auto flex" wrap-class="flex-auto flex flex-col" view-clas="flex-auto flex flex-col">
    <welcome-header />
    <div v-for="item in 100" :key="item">{{ item }}</div>
  </scrollbar>
</template>

<script>
  import Scrollbar from '@/components/scrollbar';
  import WelcomeHeader from './components/header.vue';

  export default {
    name: 'welcome-index',
    components: {
      Scrollbar,
      WelcomeHeader,
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