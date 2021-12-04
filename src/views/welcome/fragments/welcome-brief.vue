<template>
  <welcome-container>
    <welcome-card-title :prefix="$t('welcome.briefTitle')" :leading="$t('welcome.briefTitle2')" id="welcome-brief" />
    <div class="h-4 xl:h-8" />

    <welcome-card class="font-bold bg-negative-800">
      <div class="flex flex-col xl:flex-row xl:items-center">
        <div class="text-center xl:text-left xl:flex-auto">
          <div class="title">{{ $t('welcome.briefJobTitle') }}</div>
          <div class="description text-positive-500">{{ $t('welcome.briefJobSupplement') }}</div>
        </div>
        <div class="h-8 xl:h-0" />
        <div class="flex justify-center xl:justify-left">
          <div class="flex-auto text-center">
            <div class="title text-theme-500">3+</div>
            <div class="description text-positive-500">{{ $t('welcome.briefExperienceSupplement') }}</div>
          </div>
          <div class="w-6 xl:w-12" />
          <div class="flex-auto text-center">
            <div class="title text-theme-500">70+</div>
            <div class="description text-positive-500">{{ $t('welcome.briefCompletedSupplement') }}</div>
          </div>
        </div>
      </div>
    </welcome-card>

    <welcome-card class="relative bg-negative-900">
      <div class="absolute top-0 right-0 w-1/2 xl:w-2/5 h-full bg-brief" />

      <div class="relative xl:w-3/5">
        <markdown-renderer breaks :source="$t('welcome.briefContent')" />

        <base-button link class="filled mt-12 w-full xl:w-auto" href="https://github.com/ShookLyngs" target="_blank">
          {{ $t('welcome.briefButton') }}
        </base-button>
      </div>
    </welcome-card>
  </welcome-container>
</template>

<script>
  // Components
  import MarkdownRenderer from '@/components/markdown-renderer.vue';
  import WelcomeContainer from '../components/welcome-container.vue';
  import WelcomeCardTitle from '../components/welcome-card-title.vue';
  import WelcomeCard from '../components/welcome-card.vue';
  import BaseButton from '../../../components/base-button.vue';

  export default {
    name: 'welcome-brief',
    components: {
      MarkdownRenderer,
      WelcomeContainer,
      WelcomeCardTitle,
      WelcomeCard,
      BaseButton,
    },
  };
</script>

<style lang="less" scoped>
  .title {
    @apply text-4xl xl:text-6xl;
  }
  .description {
    @apply leading-none text-lg xl:text-2xl;
  }

  .bg-brief {
    @apply bg-contain bg-right-bottom bg-no-repeat;
    background-image: url('@/assets/images/welcome/brief-background.png');
  }
</style>