<template>
  <div class="relative">
    <div class="absolute top-0 left-0 w-full h-36 bg-theme-500" />

    <welcome-container class="relative">
      <welcome-card-title theme leading="Contact" id="welcome-contact" />
      <div class="h-4 xl:h-8" />

      <welcome-card class="relative bg-negative-900">
        <div class="absolute top-0 right-0 w-1/2 xl:w-1/4 h-full bg-contact" />

        <div class="relative mx-auto max-w-[500px]">
          <div class="text-2xl xl:text-4xl font-bold text-center text-positive-500">Find me</div>
          <div class="text-sm xl:text-base text-center text-positive-300">For job offering and project outsourcing</div>
          <div class="h-8 xl:h-10" />

          <!-- Github -->
          <div class="mb-3 px-4 py-3 xl:px-5 xl:py-4 flex justify-between items-center bg-negative-700">
            <div class="flex-auto overflow-hidden">
              <div class="text-xs xl:text-lg text-positive-400">Github</div>
              <div class="text-base xl:text-xl font-bold text-positive-900">ShookLyngs</div>
            </div>
            <div class="w-2" />
            <a class="button-icon" href="https://github.com/ShookLyngs" target="_blank">
              <icon>
                <github-filled />
              </icon>
            </a>
          </div>

          <!-- Email -->
          <div class="mb-3 px-4 py-3 flex justify-between items-center bg-negative-700">
            <div class="flex-auto overflow-hidden">
              <div class="text-xs xl:text-lg text-positive-400">Email</div>
              <div class="text-base xl:text-xl font-bold truncate text-positive-900">shook-lyngs@foxmail.com</div>
            </div>
            <div class="w-2" />
            <popover ref="emailPopper" placement="right" trigger="manual">
              <template #trigger>
                <button class="flex-static button-icon" @click="copyEmail">
                  <icon>
                    <copy-filled />
                  </icon>
                </button>
              </template>

              <div class="flex items-center">
                <span>Copied</span>
                <icon class="ml-1.5 text-lg text-success-500">
                  <check-circle-filled />
                </icon>
              </div>
            </popover>
          </div>

          <base-button link class="filled mt-6 w-full" href="" target="_blank">Chat on Telegram</base-button>
          <base-button class="outlined mt-3 w-full">Resume</base-button>
        </div>
      </welcome-card>
    </welcome-container>
  </div>
</template>

<script>
  // Functions
  import { ref } from 'vue';
  import { copyText } from '@/packages/clipboard';

  // Components
  import WelcomeContainer from '../components/welcome-container.vue';
  import WelcomeCardTitle from '../components/welcome-card-title.vue';
  import WelcomeCard from '../components/welcome-card.vue';
  import BaseButton from '@/components/base-button.vue';
  import Popover from '@/components/popover';
  import { GithubFilled, CopyFilled, CheckCircleFilled } from '@vicons/antd';
  import { Icon } from '@vicons/utils';

  export default {
    name: 'welcome-contact',
    components: {
      WelcomeContainer,
      WelcomeCard,
      WelcomeCardTitle,
      BaseButton,
      Popover,
      GithubFilled,
      CopyFilled,
      CheckCircleFilled,
      Icon,
    },
    setup() {
      const emailPopper = ref();
      async function copyEmail() {
        await copyText('shook-lyngs@foxmail.com');
        copySuccess();
      }

      let copyTimer = null;
      function copySuccess() {
        clearTimeout(copyTimer);
        emailPopper.value?.show?.();

        copyTimer = setTimeout(() => {
          emailPopper.value?.hide?.();
        }, 2000);
      }

      function sendMail() {
        window.open('mailto:test@example.com');
      }

      return {
        emailPopper,
        copyEmail,

        sendMail,
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
    @apply w-8 h-8 xl:w-12 xl:h-12 xl:text-2xl inline-flex justify-center items-center rounded-full bg-negative-600;
    @apply select-none cursor-pointer transition hover:text-negative-900 hover:bg-theme-500 active:opacity-70;
  }
</style>