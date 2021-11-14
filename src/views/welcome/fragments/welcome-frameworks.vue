<template>
  <welcome-container>
    <welcome-card-title leading="FRAMEWORK" text="OPTIONS" />
    <div class="h-8" />

    <welcome-card class="bg-negative-900">
      <div class="flex">
        <div class="xl:w-[55%]">
          <markdown-renderer breaks :source="article" />
          <base-button link class="mt-12 filled" href="https://github.com/ShookLyngs?tab=repositories" target="_blank">
            Github repositories
          </base-button>
        </div>

        <div class="w-20" />

        <div class="flex-auto flex flex-col">
          <div class="text-right">
            <div class="text-3xl font-bold leading-none text-positive-500">Projects this year</div>
            <div class="text-5xl font-bold text-positive-900">Total 50+</div>
          </div>
          <div class="h-4" />
          <div class="flex-auto grid grid-cols-4">
            <welcome-progress-bar title="Vue.js" :amount="26" :percentage="0.49" />
            <welcome-progress-bar title="Flutter" :amount="14" :percentage="0.26" :opacity="0.8" />
            <welcome-progress-bar title="UniApp" :amount="12" :percentage="0.22" :opacity="0.6" />
            <welcome-progress-bar title="React" :amount="1" :percentage="0.1" :opacity="0.4" />
          </div>
        </div>

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
  import WelcomeProgressBar from '../components/welcome-progress-bar.vue';
  import BaseButton from '../components/base-button.vue';

  // Defines
  const article = `
I have completed atleast 50 projects this year, and half of them was powered by Vue.js.

It’s not just a market-oriented result, I often choose to use Vue3 as basement when landing outsourcing projects, due to the simplicity of it.

But when I need to develop an app with more native ability, or when I’m gonna make a Mini-program app, Flutter and UniApp should be some better solutions.

Many of my works are private, but anyway, you can review my open-source projects on Github.
  `;

  export default {
    name: 'welcome-brief',
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