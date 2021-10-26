<template>
  <div class="header sticky top-0 left-0 right-0" :class="scrollTop > 70 ? 'is-active' : void 0">
    <div class="mx-auto xl:content body-x h-full flex justify-between items-center">
      <div class="inline-flex items-center transition select-none">
        <span class="h-5 w-5 mr-2 rounded-full bg-theme-500" />
        <span class="">LyngsBlog</span>
      </div>
      <button class="button inline-flex items-center select-none transition text-positive-800 xl:text-negative-900 hover:opacity-80 active:opacity-60">
        <span class="">English</span>
        <span class="decorator h-4 w-4 ml-2 rounded-full bg-positive-100 xl:bg-negative-900" />
      </button>
    </div>
  </div>
</template>

<script>
  // Functions
  import { computed } from 'vue';
  import { useScrollbar } from '@/components/scrollbar';

  export default {
    name: 'welcome-header',
    setup() {
      const { wrapperSize } = useScrollbar();
      const scrollTop = computed(() => wrapperSize.value?.scrollTop ?? 0);

      return {
        scrollTop,
      };
    },
  };
</script>

<style lang="less" scoped>
  .header {
    @apply transition z-20;
    height: 70px;

    &.is-active {
      @apply bg-negative-900;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.03);

      .button {
        @apply text-positive-800;
      }
      .decorator {
        @apply bg-positive-100;
      }
    }
  }
</style>