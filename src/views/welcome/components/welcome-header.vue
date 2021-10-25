<template>
  <div class="header sticky top-0 left-0 right-0" :class="scrollTop > 70 ? 'is-active' : void 0">
    <div class="mx-auto xl:content body-x h-full flex justify-between items-center">
      <div>
        header
      </div>
      <div>
        {{ scrollTop }}
      </div>
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
    }
  }
</style>