<template>
  <popover ref="popover" placement="bottom-end" trigger="hover">
    <template #trigger>
      <slot />
    </template>

    <div class="xl:w-[240px]">
      <div class="relative body-x py-4 flex justify-between items-center select-none overflow-hidden">
        <icon class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-8xl text-negative-800">
          <language-round />
        </icon>

        <div class="relative">
          <div class="flex items-center text-xl font-bold">{{ $t('header.language') }}</div>
          <div class="text-sm text-positive-100">{{ $t('header.selectLanguage') }}</div>
        </div>
      </div>

      <div class="h-px w-full bg-negative-700" />

      <div class="py-4 flex flex-col">
        <button class="button" @click="setLocale('zh')">
          <span>简体中文</span>
          <icon class="icon">
            <arrow-forward-round />
          </icon>
        </button>
        <button class="button" @click="setLocale('en')">
          <span>English</span>
          <icon class="icon">
            <arrow-forward-round />
          </icon>
        </button>
      </div>
    </div>
  </popover>
</template>

<script>
  // Functions
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  // Components
  import Popover from '@/components/popover';
  import { Icon } from '@vicons/utils';
  import { LanguageRound, ArrowForwardRound } from '@vicons/material';

  export default {
    name: 'welcome-locale-popper',
    components: {
      Popover,
      Icon,
      LanguageRound,
      ArrowForwardRound,
    },
    setup() {
      const popover = ref();

      // Locale
      const { locale } = useI18n();
      function setLocale(name) {
        locale.value = name;
        localStorage.setItem('locale', name);

        popover.value?.hide();
      }

      return {
        popover,
        setLocale,
      };
    },
  };
</script>

<style lang="less" scoped>
  .button {
    @apply body-x h-12 flex justify-between items-center transition cursor-pointer select-none;
    @apply hover:bg-negative-700 active:bg-negative-600;

    .icon {
      @apply transition ml-1 text-xl text-theme-500 opacity-0 transform;
    }

    &:hover {
      .icon {
        @apply opacity-100 translate-x-1;
      }
    }
  }
</style>