<template>
  <div class="progress flex flex-col justify-end select-none cursor-pointer">
    <div class="flex-auto flex flex-col justify-end">
      <div
        class="flex flex-col items-center text-theme-600"
        :style="{ minHeight: `${percentage * 180}%` }"
      >
        <div class="px-3 mb-2 text-xl xl:text-2xl font-bold bg-negative-900">
          <span :style="{ opacity: opacity }">{{ amount }}</span>
        </div>
        <div
          class="flex-auto w-2 xl:w-3 min-h-[10px] rounded-t-full bg-theme-500"
          :style="{ opacity: opacity }"
          :class="barClass"
        />
      </div>
    </div>

    <div
      class="title py-3 w-full transition text-center text-base xl:text-xl font-bold"
      :class="opacity < 1 ? 'text-positive-400' : 'text-theme-500 bg-negative-800'"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
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

<style lang="less" scoped>
  .progress {
    @apply transition origin-bottom;

    &:hover {
      transform: scale3d(1.1, 1.1, 1);

      .title {
        @apply border-4 border-solid border-theme-400;
        @apply text-theme-600 bg-negative-800;
      }
    }
  }
</style>