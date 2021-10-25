<template>
  <scrollbar class="flex-auto flex" wrap-class="flex-auto flex flex-col" view-clas="flex-auto flex flex-col">
    <welcome-header />

    <div class="screen mt-header flex">
      <div class="flex flex-auto bg-negative-900">
        <div class="mx-auto w-full xl:content flex justify-between">
          <div class="body-x pb-[10vh] self-end">
            <div class="mb-16 w-28 h-28 bg-positive-700" />
            <div class="text-6xl font-roboto font-bold text-positive-900">I’m ShookLyngs, </div>
            <div class="text-4xl font-roboto font-bold text-positive-900">a web-based software developer.</div>

            <div class="mt-10 flex">
              <button class="body-x h-14 text-xl font-roboto font-bold text-negative-900 bg-theme-600">What I've been doing</button>
              <button class="ml-4 body-x h-14 text-xl font-roboto font-bold text-positive-900 border-2 border-positive-900">Contact</button>
            </div>
          </div>

          <div class="w-[496px] welcome-background bg-bottom bg-cover" />
        </div>
      </div>

    </div>
  </scrollbar>
</template>

<script>
  // Components
  import Scrollbar from '@/components/scrollbar';
  import WelcomeHeader from './components/welcome-header.vue';

  // Resources
  import background from '@/assets/images/welcome/background.jpg';

  export default {
    name: 'welcome-index',
    components: {
      Scrollbar,
      WelcomeHeader,
    },
    setup() {
      return {
        background,
      };
    },
  };
</script>

<style lang="less" scoped>
  .mt-header {
    margin-top: -70px;
  }
  .pt-header {
    padding-top: 70px;
  }
  .screen {
    padding-bottom: 18vh;
    min-height: 100vh;
  }

  .welcome-background {
    margin-bottom: -8vh;
    background-image: url('@/assets/images/welcome/background.jpg');
  }
</style>