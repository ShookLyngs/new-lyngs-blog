<template>
  <div class="relative">
    <div class="absolute top-0 left-0 w-full h-36 bg-theme-500" />

    <welcome-container class="relative">
      <welcome-card-title theme leading="Contact" />
      <div class="h-4 xl:h-8" />

      <welcome-card class="relative bg-negative-800">
        <div class="absolute top-0 right-0 w-1/2 xl:w-1/4 h-full bg-contact" />

        <div class="relative max-w-[400px]">
          <div class="text-2xl xl:text-3xl font-bold text-positive-500">Find me</div>
          <div class="text-sm xl:text-base text-positive-300">For job offering and project outsourcing</div>
          <div class="h-4 xl:h-8" />

          <!-- Github -->
          <div class="mb-3 px-4 py-3 flex justify-between items-center bg-negative-700">
            <div class="flex-auto overflow-hidden">
              <div class="text-xs xl:text-base text-positive-400">Github</div>
              <div class="text-bse xl:text-xl font-bold text-positive-900">ShookLyngs</div>
            </div>
            <div class="w-2" />
            <a class="button-icon" href="https://github.com/ShookLyngs" target="_blank">
              <icon>
                <github-filled />
              </icon>
            </a>
          </div>

          <!-- Email -->
          <div class="px-4 py-3 flex justify-between items-center bg-negative-700">
            <div class="flex-auto overflow-hidden">
              <div class="text-xs xl:text-base text-positive-400">Email</div>
              <div class="text-base xl:text-xl font-bold truncate text-positive-900">shook-lyngs@foxmail.com</div>
            </div>
            <div class="w-2" />
            <button class="flex-static button-icon" @click="copyEmail">
              <icon>
                <copy-filled />
              </icon>
            </button>
          </div>

          <base-button class="filled mt-6 w-full">Message</base-button>
          <base-button class="outlined mt-3 w-full">Resume</base-button>
        </div>
      </welcome-card>
    </welcome-container>
  </div>
</template>

<script>
  // Functions
  import { copyText } from '@/packages/clipboard';

  // Components
  import WelcomeContainer from '../components/welcome-container.vue';
  import WelcomeCardTitle from '../components/welcome-card-title.vue';
  import WelcomeCard from '../components/welcome-card.vue';
  import BaseButton from '../../../components/base-button.vue';
  import { GithubFilled, CopyFilled } from '@vicons/antd';
  import { Icon } from '@vicons/utils';

  export default {
    name: 'welcome-contact',
    components: {
      WelcomeContainer,
      WelcomeCard,
      WelcomeCardTitle,
      BaseButton,
      Icon,
      GithubFilled,
      CopyFilled,
    },
    setup() {
      async function copyEmail() {
        await copyText('shook-lyngs@foxmail.com');
      }

      return {
        copyEmail,
      };
    },
  };
</script>

<style lang="less" scoped>
  .bg-contact {
    @apply bg-contain bg-right-top bg-no-repeat;
    background-image: url('@/assets/images/welcome/contact-background.png');
  }

  .button-icon {
    @apply w-8 h-8 xl:w-9 xl:h-9 xl:text-xl inline-flex justify-center items-center rounded-full bg-negative-600;
    @apply select-none cursor-pointer transition hover:text-negative-900 hover:bg-theme-500 active:opacity-70;
  }
</style>