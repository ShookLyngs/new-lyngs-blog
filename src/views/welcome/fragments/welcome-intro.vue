<template>
  <div class="screen mt-header flex">
    <div class="flex flex-auto bg-negative-900">
      <div class="mx-auto w-full xl:content flex justify-between">
        <!-- Description -->
        <div class="w-full body-x pt-[70px] pb-[10vh] self-end">
          <div class="h-[70px]" />
          <!-- Avatar -->
          <div class="mb-16 w-28 h-28 bg-positive-500" />

          <!-- Intro -->
          <div class="text-4xl xl:text-6xl font-bold select-none text-positive-900">
            I'm ShookLyngs,
          </div>
          <div class="mt-1 text-xl xl:text-4xl font-bold select-none text-positive-900">
            a web-based software developer.
          </div>

          <!-- Action buttons -->
          <div class="mt-10 flex flex-col xl:flex-row">
            <base-button class="text-negative-900 bg-theme-500 hover:opacity-80 active:opacity-60">
              What I've been doing
            </base-button>

            <base-button
              class="mt-4 xl:mt-0 xl:ml-4 text-positive-900 border-2 border-positive-900 hover:border-theme-500 active:opacity-60"
              @mouseenter="hoveringContact = true"
              @mouseleave="hoveringContact = false"
            >
              <div class="flex justify-center items-center h-full">
                <div>Contact</div>
                <collapse
                  class="h-full"
                  direction="horizontal"
                  :show="hoveringContact"
                  :class="hoveringContact ? 'opacity-100': 'opacity-0'"
                >
                  <div class="pl-6 w-max h-full flex items-center transition-all whitespace-nowrap">
                    <span class="w-5 h-5 rounded-full bg-theme-400" />
                    <span class="ml-2 w-5 h-5 rounded-full bg-theme-400" />
                    <span class="ml-2 w-5 h-5 rounded-full bg-theme-400" />
                  </div>
                </collapse>
              </div>
            </base-button>
          </div>
        </div>

        <!-- Background image -->
        <div class="xl:w-[40vw] bg-welcome bg-cover bg-no-repeat bg-bottom bg-positive-500" />
      </div>
    </div>
  </div>
</template>

<script>
  // Functions
  import { ref } from 'vue';
  // Components
  import Collapse from '@/components/collapse.vue';
  import BaseButton from '../components/base-button.vue';

  export default {
    name: 'welcome-intro',
    components: {
      Collapse,
      BaseButton,
    },
    setup() {
      const hoveringContact = ref(false);

      return {
        hoveringContact,
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

  .bg-welcome {
    margin-bottom: -8vh;
    background-image: url('@/assets/images/welcome/background.jpg');
  }
</style>