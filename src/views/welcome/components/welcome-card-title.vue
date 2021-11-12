<template>
  <div class="py-2 leading-none text-3xl xl:text-5xl font-bold select-none text-positive-900">
    <span>“</span>
    <span class="mr-2 highlighted">{{ leading }}</span>
    <span>{{ text }}</span>
    <span>”</span>
  </div>
</template>

<script>
  export default {
    name: 'welcome-card-title',
    props: {
      leading: {
        Type: String,
        default: void 0,
      },
      text: {
        Type: String,
        default: void 0,
      },
    },
  };
</script>

<style lang="less" scoped>
  .highlighted {
    @apply relative;

    &::after {
      @apply absolute h-1 left-0 bottom-0 w-full bg-theme-500;
      content: '';

      @media (min-width: theme('screens.xl')) {
        height: theme('spacing[1.5]');
      }
    }
  }
</style>