<template>
  <div class="header sticky top-0 left-0 right-0" :class="scrollTop > 70 ? 'is-active' : void 0">
    <div class="mx-auto xl:content body-x h-full flex justify-between items-center">
      <div class="inline-flex items-center transition select-none">
        <span class="h-5 w-5 mr-2 rounded-full bg-theme-500" />
        <span class="">LyngsBlog</span>
      </div>

      <welcome-locale-popper>
        <div class="relative button py-1 inline-flex items-center select-none transition text-positive-800 xl:text-negative-900 hover:opacity-80 active:opacity-60">
          <span class="mr-1">{{ $t('common.language') }}</span>
          <icon class="decorator text-xl text-positive-100 xl:text-negative-900">
            <language-round />
          </icon>
        </div>
      </welcome-locale-popper>
    </div>
  </div>
</template>

<script>
  // Components
  import WelcomeLocalePopper from '../components/welcome-locale-popper.vue';
  import { LanguageRound } from '@vicons/material';
  import { Icon } from '@vicons/utils';
  // Functions
  import { computed } from 'vue';
  import { useScrollbar } from 'polacoms';

  export default {
    name: 'welcome-header',
    components: {
      WelcomeLocalePopper,
      Icon,
      LanguageRound,
    },
    setup() {
      // Scrollbar
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
        @apply text-positive-100;
      }
    }
  }
</style>