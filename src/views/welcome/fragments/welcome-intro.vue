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
            <base-button class="filled" @click="toAnchor('#welcome-brief')">
              Who's ShookLyngs
            </base-button>

            <base-button class="mt-4 xl:mt-0 xl:ml-4 outlined" @click="toAnchor('#welcome-contact')">
              Contact
            </base-button>
          </div>
        </div>

        <!-- Background image -->
        <div class="flex-static xl:w-[370px] bg-welcome bg-cover bg-no-repeat bg-bottom bg-positive-500" />
      </div>
    </div>
  </div>
</template>

<script>
  // Functions
  import { ref } from 'vue';
  import { useScrollbar } from '@/components/scrollbar';
  // Components
  import BaseButton from '@/components/base-button.vue';

  export default {
    name: 'welcome-intro',
    components: {
      BaseButton,
    },
    setup() {
      const hoveringContact = ref(false);

      const { animateTo } = useScrollbar();
      function toAnchor(anchor) {
        const target = document.querySelector(anchor);
        if (target) {
          const { y } = target.getBoundingClientRect();
          animateTo({ y: y - 140 , duration: 500 });
        }
      }

      return {
        hoveringContact,

        animateTo,
        toAnchor,
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