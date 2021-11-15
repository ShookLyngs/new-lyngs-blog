<template>
  <div
    class="title-card py-2 leading-none text-2xl xl:text-5xl font-bold select-none"
    :class="theme ? 'is-theme' : void 0"
  >
    <span>“</span>
    <span class="mr-2 xl:mr-2.5" v-if="prefix">{{ prefix }}</span>
    <span class="highlighted">
      <span class="relative">{{ leading }}</span>
    </span>
    <span class="ml-2 xl:ml-2.5" v-if="suffix">{{ suffix }}</span>
    <span>”</span>
  </div>
</template>

<script>
  export default {
    name: 'welcome-card-title',
    props: {
      theme: {
        type: Boolean,
        default: false,
      },
      leading: {
        type: String,
        default: void 0,
      },
      prefix: {
        type: String,
        default: void 0,
      },
      suffix: {
        type: String,
        default: void 0,
      },
    },
  };
</script>

<style lang="less" scoped>
  .highlighted {
    @apply relative;

    &::before {
      @apply absolute h-1 left-0 bottom-0 w-full bg-theme-500;
      content: '';

      @media (min-width: theme('screens.xl')) {
        height: theme('spacing[1.5]');
      }
    }
  }

  .title-card {
    @apply text-positive-900;

    &.is-theme {
      @apply text-negative-900;

      .highlighted {
        &::before {
          @apply bg-theme-50;
        }
      }
    }
  }
</style>