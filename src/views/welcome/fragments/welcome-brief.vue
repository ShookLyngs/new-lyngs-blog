<template>
  <div class="body-x xl:px-0 mx-auto w-full xl:content">
    <welcome-card-title leading="WHO" text="AM I" />
    <div class="h-8" />

    <div class="body-x xl:px-11 py-8 xl:py-14 font-bold bg-negative-800">
      <div class="flex flex-col xl:flex-row xl:items-center">
        <div class="text-center xl:text-left xl:flex-auto">
          <div class="title">Frontend</div>
          <div class="description text-positive-300">Web developer</div>
        </div>
        <div class="h-6 xl:h-0" />
        <div class="flex justify-center xl:justify-left">
          <div class="flex-auto text-center">
            <div class="title text-theme-500">3+</div>
            <div class="description text-positive-300">Years experience</div>
          </div>
          <div class="w-6 xl:w-12" />
          <div class="flex-auto text-center">
            <div class="title text-theme-500">70+</div>
            <div class="description text-positive-300">Project completed</div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative body-x xl:px-11 py-8 xl:py-14 bg-negative-900">
      <div class="absolute top-0 right-0 w-1/2 xl:w-2/5 h-full bg-brief" />

      <div class="relative xl:w-3/5">
        <markdown-renderer
          breaks
          :source="article"
        />

        <base-button
          tag="a"
          href="https://baidu.com"
          class="mt-8 text-negative-900 bg-theme-500 hover:opacity-80 active:opacity-60"
        >
          Github profile
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
  // Components
  import MarkdownRenderer from '@/components/markdown-renderer.vue';
  import WelcomeCardTitle from '../components/welcome-card-title.vue';
  import BaseButton from '../components/base-button.vue';

  // Defines
  const article = `
I’m ShookLyngs.

Basically, I am a software developer, and I’ve been focusing on frontend development of websites and apps for 3 years.

I like to play with new frontend stuffs, and if you check my contributions on Github, you’ll find that I’m the person who’s always working on something.
  `;

  export default {
    name: 'welcome-brief',
    components: {
      MarkdownRenderer,
      WelcomeCardTitle,
      BaseButton,
    },
    setup() {
      return {
        article,
      };
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