<template>
  <div class="flex flex-col justify-end select-none">
    <div class="flex-auto flex flex-col justify-end">
      <div
        class="flex flex-col items-center text-theme-600"
        :style="{ opacity: opacity, minHeight: `${percentage * 180}%` }"
      >
        <div class="mb-2 text-xl xl:text-2xl font-bold">{{ amount }}</div>
        <div
          class="flex-auto w-2 xl:w-3 min-h-[10px] rounded-t-full bg-theme-500"
          :style="{ opacity: opacity }"
          :class="barClass"
        />
      </div>
    </div>

    <div
      class="py-3 w-full text-center text-base xl:text-xl font-bold"
      :class="opacity < 1 ? 'text-positive-400' : 'text-theme-500 bg-negative-800'"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'welcome-progress-bar',
    props: {
      title: {
        type: String,
        required: true,
      },
      percentage: {
        type: Number,
        required: true,
        validator: (v) => v >= 0 && v <= 1,
      },
      amount: {
        type: Number,
        required: true,
      },
      barClass: {
        type: [ String, Array, Object ],
        default: void 0,
      },
      opacity: {
        type: Number,
        default: 1,
        validator: (v) => v >= 0 && v <= 1,
      },
    },
  };
</script>

<style scoped>

</style>