<template>
  <div class="relative">
    <div class="absolute bottom-0 left-0 w-full h-80 bg-theme-500" />

    <welcome-container class="relative">
      <welcome-card-title leading="Framework" suffix="options" />
      <div class="h-4 xl:h-8" />

      <welcome-card class="relative bg-negative-900">
        <div class="absolute right-0 top-0 h-44 w-44 xl:h-60 xl:w-60 overflow-hidden">
          <div class="absolute -right-14 -top-14 mb-20 w-full h-full rounded-full bg-negative-700" />
        </div>

        <div class="relative flex flex-col-reverse xl:flex-row">
          <div class="xl:w-[55%]">
            <markdown-renderer breaks :source="article" />
            <base-button link class="filled mt-12 w-full xl:w-auto" href="https://github.com/ShookLyngs?tab=repositories" target="_blank">
              Github repositories
            </base-button>
          </div>

          <div class="h-8 xl:w-24" />

          <div class="flex-auto flex flex-col">
            <div class="text-center xl:text-right">
              <div class="text-xl xl:text-3xl font-bold leading-none text-positive-500">Projects this year</div>
              <div class="text-4xl xl:text-5xl font-bold text-positive-900">Total 50+</div>
            </div>
            <div class="h-4" />
            <div class="h-[40vh] xl:h-auto flex-auto grid grid-cols-4">
              <welcome-progress-bar title="Vue.js" :amount="26" :percentage="0.49" />
              <welcome-progress-bar title="Flutter" :amount="14" :percentage="0.26" :opacity="0.8" />
              <welcome-progress-bar title="UniApp" :amount="12" :percentage="0.22" :opacity="0.6" />
              <welcome-progress-bar title="React" :amount="1" :percentage="0.1" :opacity="0.4" />
            </div>
          </div>

        </div>
      </welcome-card>
    </welcome-container>
  </div>
</template>

<script>
  // Components
  import MarkdownRenderer from '@/components/markdown-renderer.vue';
  import WelcomeContainer from '../components/welcome-container.vue';
  import WelcomeCardTitle from '../components/welcome-card-title.vue';
  import WelcomeCard from '../components/welcome-card.vue';
  import WelcomeProgressBar from '../components/welcome-progress-bar.vue';
  import BaseButton from '../../../components/base-button.vue';

  // Defines
  const article = `
I have completed atleast 50 projects this year, and half of them was powered by Vue.js.

It’s not just a market-oriented result, I often choose to use Vue3 as basement when landing outsourcing projects, due to the simplicity of it.

But when I need to develop an app with more native ability, or when I’m gonna make a Mini-program app, Flutter and UniApp should be some better solutions.

Many of my works are private, but anyway, you can review my open-source projects on Github.
  `;

  export default {
    name: 'welcome-frameworks',
    components: {
      MarkdownRenderer,
      WelcomeContainer,
      WelcomeCard,
      WelcomeCardTitle,
      WelcomeProgressBar,
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

</style>