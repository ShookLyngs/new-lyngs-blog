<template>
  <component class="button-base" :is="tag">
    <slot />
  </component>
</template>

<script>
  // Functions
  import { computed } from 'vue';

  export default {
    name: 'base-button',
    props: {
      link: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, { attrs }) {
      const tag = computed(() => {
        if (props.link) {
          return 'to' in attrs ? 'router-link' : 'a';
        } else {
          return 'button';
        }
      });

      return {
        tag,
      };
    },
  };
</script>

<style lang="less" scoped>
  .button-base {
    @apply inline-block text-center align-middle cursor-pointer select-none;
    @apply body-x h-14 text-xl font-bold transition;

    a& {
      @apply inline-flex justify-center items-center;
    }

    &.filled {
      @apply text-negative-900 bg-theme-500 hover:opacity-80 active:opacity-60;
    }
  }
</style>