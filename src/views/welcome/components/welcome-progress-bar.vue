<template>
  <div
    class="progress flex flex-col justify-end select-none cursor-pointer"
    @mouseenter="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <div class="flex-auto flex flex-col justify-end">
      <div
        class="flex flex-col items-center text-theme-600"
        :style="{ minHeight: `${percentage * 180}%` }"
      >
        <div class="amount px-3 mb-2 text-xl xl:text-2xl font-bold rounded-full transition-all bg-negative-900">
          <span :style="{ opacity: hover ? 1 : opacity }">{{ amount }}</span>
        </div>
        <div
          class="bar flex-auto w-2.5 xl:w-3 min-h-[10px] rounded-t-full transition-all bg-gradient-to-t from-theme-200 to-theme-500"
          :style="{ opacity: hover ? 1 : opacity }"
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
  import { ref } from 'vue';

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
    setup() {
      const hover = ref(false);
      function setHover(bool) {
        hover.value = !!bool;
      }

      return {
        hover,
        setHover,
      };
    },
  };
</script>

<style lang="less" scoped>
  .progress {
    @apply transition origin-bottom;

    &:hover {
      margin-top: -20%;
      transform: scale3d(1.1, 1.1, 1);

      .amount {
        @apply text-xl xl:text-2xl shadow-xl text-negative-900 bg-theme-400;
      }
      .bar {
        @apply from-theme-50;
      }
      .title {
        @apply border-4 border-solid border-theme-400;
        @apply text-theme-600 bg-negative-800;
      }
    }
  }
</style>