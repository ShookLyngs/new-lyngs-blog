<template>
  <div class="header sticky top-0 left-0 right-0">
    header {{ y }}
  </div>
</template>

<script>
  // Functions
  import { toRef, watchEffect } from 'vue';
  import { useScrollbar } from '@/components/scrollbar';

  export default {
    name: 'welcome-header',
    setup() {
      const { sliderPosition } = useScrollbar();
      const y = toRef(sliderPosition, 'y');
      watchEffect(() => console.log(y));

      return {
        y,
      };
    },
  };
</script>

<style lang="less" scoped>
  .header {
    height: 70px;
  }
</style>