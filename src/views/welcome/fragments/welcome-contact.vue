<template>
  <div class="relative">
    <div class="absolute top-0 left-0 w-full h-36 bg-theme-500" />

    <welcome-container class="relative">
      <welcome-card-title theme leading="Contact" />
      <div class="h-8" />

      <welcome-card class="relative bg-negative-800">
        <div class="absolute top-0 right-0 w-1/2 xl:w-1/4 h-full bg-contact" />

        <div class="max-w-[400px]">
          <div class="mb-8 text-3xl xl:text-4xl font-bold text-center text-positive-300">Find me</div>

          <div class="mb-3 px-4 py-3 flex justify-between items-center bg-negative-700">
            <div>
              <div class="text-xs xl:text-base text-positive-400">Github</div>
              <div class="text-sm xl:text-xl font-bold text-positive-900">ShookLyngs</div>
            </div>
            <div>copy</div>
          </div>
          <div class="px-4 py-3 flex justify-between items-center bg-negative-700">
            <div>
              <div class="text-xs xl:text-base text-positive-400">Email</div>
              <div class="text-sm xl:text-xl font-bold text-positive-900">shook-lyngs@foxmail.com</div>
            </div>
            <div>copy</div>
          </div>

          <base-button class="filled mt-6 w-full">Message</base-button>
          <base-button class="outlined mt-3 w-full">Resume</base-button>
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
  import BaseButton from '../components/base-button.vue';

  // Defines
  const article = `
I have completed atleast 50 projects this year, and half of them was powered by Vue.js.

It’s not just a market-oriented result, I often choose to use Vue3 as basement when landing outsourcing projects, due to the simplicity of it.

But when I need to develop an app with more native ability, or when I’m gonna make a Mini-program app, Flutter and UniApp should be some better solutions.

Many of my works are private, but anyway, you can review my open-source projects on Github.
  `;

  export default {
    name: 'welcome-contact',
    components: {
      MarkdownRenderer,
      WelcomeContainer,
      WelcomeCard,
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
  .bg-contact {
    @apply bg-contain bg-right-top bg-no-repeat;
    background-image: url('@/assets/images/welcome/contact-background.png');
  }
</style>