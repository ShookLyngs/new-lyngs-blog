<template>
  <div class="py-14 text-negative-700 bg-positive-700">
    <div class="mx-auto w-full xl:content body-x select-none">
      <div class="flex">
        <div class="w-5 h-5 mr-2 rounded-full bg-theme-500" />
        <div>
          <div class="h-5 flex items-center">LyngsBlog</div>
          <div class="mt-1 text-xs text-negative-400">Copyright ©{{ range }} lyngs.top</div>
          <div class="my-3 w-10 h-px bg-positive-400" />
          <a class="text-xs text-theme-300" href="https://beian.miit.gov.cn" target="_blank">桂ICP备18006093号-1</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // Functions
  import { computed } from 'vue';
  import createDay from 'dayjs';

  export default {
    name: 'welcome-footer',
    setup() {
      const start = 2020;
      const now = createDay().year();
      const range = computed(() => start === now ? start : `${start}-${now}`);

      return {
        range,
      };
    },
  };
</script>

<style scoped>

</style>