<template>
  <div class="ls-loading-circle" :style="styles">
    <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
      <circle
        class="circle-background"
        fill="transparent"
        :cx="2 * viewBoxSize"
        :cy="2 * viewBoxSize"
        :r="radius"
        :stroke-width="strokeWidth"
        :stroke-dasharray="strokeDashArray"
      />
      <circle
        class="circle-bar"
        fill="transparent"
        :cx="2 * viewBoxSize"
        :cy="2 * viewBoxSize"
        :r="radius"
        :stroke-width="strokeWidth"
        :stroke-dasharray="strokeDashArray"
        :stroke-dashoffset="strokeDashOffset"
      />
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'loading-indicator',
    props: {
      size: {
        type: [Number, String],
        default: 26,
      },
      width: {
        type: [Number, String],
        default: 4,
      },
      value: {
        type: [Number, String],
        default: 0,
      },
    },
    data: () => ({
      radius: 20,
    }),
    computed: {
      circumference() {
        return 2 * Math.PI * this.radius;
      },
      normalizedValue() {
        if (this.value < 0) return 0;
        if (this.value > 100) return 100;
        return parseFloat(this.value);
      },
      strokeDashArray() {
        return Math.round(this.circumference * 1000) / 1000;
      },
      strokeDashOffset() {
        return `${((100 - this.normalizedValue) / 100) * this.circumference}px`;
      },
      strokeWidth() {
        return (Number(this.width) / +this.size) * this.viewBoxSize * 2;
      },
      viewBoxSize() {
        return this.radius / (1 - Number(this.width) / +this.size);
      },
      viewBox() {
        const size = this.viewBoxSize;
        const double = this.viewBoxSize * 2;
        return `${size} ${size} ${double} ${double}`;
      },
      styles() {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`,
        };
      },
    },
  };
</script>

<style lang="less">
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loading-infinite {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -125px;
    }
  }

  .ls-loading-circle {
    @apply relative inline-block align-middle justify-center items-center;

    > svg {
      @apply transition-all absolute w-full h-full m-auto top-0 bottom-0 left-0 right-0 z-0;
      animation: rotate 1.4s linear infinite;

      > .circle-background {
        @apply transition-all;
        stroke: rgba(0, 0, 0, 0.1);
        z-index: 2;
      }
      > .circle-bar {
        @apply transition-all;
        stroke: currentColor;
        stroke-dashoffset: 0;
        stroke-dasharray: 80, 200;
        z-index: 2;
        animation: loading-infinite 1.4s ease-in-out infinite;
      }
    }
  }
</style>
