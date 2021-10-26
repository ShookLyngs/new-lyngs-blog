<template>
  <div class="py-14 text-negative-700 bg-positive-700">
    <div class="mx-auto w-full xl:content body-x">
      <div class="flex items-center select-none">
        <div class="w-5 h-5 mr-2 rounded-full bg-theme-500" />
        <div>LyngsBlog</div>
      </div>
      <div class="flex items-center text-xs text-negative-400">
        <div class="w-5 h-5 mr-2" />
        <div>Copyright ©{{ range }} lyngs.top</div>
      </div>

      <div class="mt-4 flex items-center text-xs text-negative-200">
        <div class="w-5 h-5 mr-2" />
        <a class="text-theme-500" href="https://beian.miit.gov.cn" target="_blank">桂ICP备18006093号-1</a>
      </div>
    </div>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
  import { computed } from 'vue';

  export default {
    name: 'welcome-footer',
    setup() {
      const start = 2020;
      const now = dayjs().year();
      const range = computed(() => start === now ? start : `${start}-${now}`);

      return {
        range,
      };
    },
  };
</script>

<style scoped>

</style>