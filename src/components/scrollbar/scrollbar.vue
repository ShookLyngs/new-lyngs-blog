<template>
  <div class="ls-scrollbar" ref="outer" :class="outerClass">
    <resize-observer @resize="updateWrapperSize">
      <div
        ref="wrapper"
        class="ls-scrollbar__wrap"
        :class="wrapClass"
        :style="wrapperStyle"
        @scroll="onWrapperScroll"
      >
        <resize-observer @resize="updateSizes">
          <div
            ref="view"
            class="ls-scrollbar__view"
            :class="viewClass"
          >
            <slot />
          </div>
        </resize-observer>
      </div>
    </resize-observer>

    <slider
      direction="vertical"
      :size="sliderSize.height"
      :move="sliderPosition.y"
      :thumb-class="thumbClass"
      @drag-start="setDragging(true)"
      @drag-end="setDragging(false)"
      v-if="!disabledVertical"
    />
    <slider
      direction="horizontal"
      :size="sliderSize.width"
      :move="sliderPosition.x"
      :thumb-class="thumbClass"
      @drag-start="setDragging(true)"
      @drag-end="setDragging(false)"
      v-if="!disabledHorizontal"
    />
  </div>
</template>

<script>
  // Functions
  import { ref, computed, reactive, onMounted, onUpdated } from 'vue';
  import { createScrollbar } from './hooks/shared';
  import { useGutter } from './hooks/gutter';
  import { useSlider } from './hooks/slider';

  // Components
  import ResizeObserver from '@/components/resize-observer.vue';
  import Slider from './slider.vue';

  export default {
    name: 'scrollbar',
    components: {
      ResizeObserver,
      Slider,
    },
    props: {
      // Scrollbar
      wrapClass: {
        type: [Object, Array, String],
        default: '',
      },
      viewClass: {
        type: [Object, Array, String],
        default: '',
      },
      keepPosition: {
        type: Boolean,
        default: false,
      },

      // Slider
      disabledVertical: {
        type: Boolean,
        default: false,
      },
      disabledHorizontal: {
        type: Boolean,
        default: false,
      },

      // Slider thumb
      thumbClass: {
        type: [String, Array, Object],
        default: '',
      },
    },
    emits: [ 'scroll', 'update-wrapper-size' ],
    setup(props, { emit }) {
      // Outer
      const outer = ref();
      const outerClass = computed(() => {
        return dragging.value ? 'is-dragging' : '';
      });

      // Wrapper
      const wrapper = ref();
      const wrapperStyle = computed(() => {
        if (!gutterWidth.value) return void 0;

        return {
          marginBottom: gutterWidth.value,
          marginRight: gutterWidth.value,
        };
      });
      function scrollTo(x, y) {
        if (wrapper.value) {
          wrapper.value.scrollTo(x, y);
        }
      }

      const wrapperSize = ref(getWrapperSize());
      function getWrapperSize() {
        if (!wrapper.value) return void 0;

        const {
          scrollTop, scrollLeft, scrollHeight, scrollWidth,
          clientHeight, clientWidth,
        } = wrapper.value;
        const {
          top, right, bottom, left,
          width, height,
        } = wrapper.value.getBoundingClientRect();

        return {
          scrollTop, scrollLeft,
          scrollHeight, scrollWidth,
          clientHeight, clientWidth,
          left, right, top, bottom,
          height, width,
        };
      }
      function updateWrapperSize() {
        const oldHeight = wrapperSize.value?.scrollHeight;
        wrapperSize.value = getWrapperSize();

        if (props.keepPosition) {
          const { scrollHeight, scrollTop, scrollLeft } = wrapperSize.value;
          if (scrollHeight > oldHeight) {
            const distance = scrollHeight - oldHeight;
            scrollTo(scrollLeft, scrollTop + distance);
          }
        }
      }
      function onWrapperScroll() {
        updateWrapperSize();

        const { scrollTop, scrollLeft, clientHeight, clientWidth } = wrapperSize.value;
        sliderPosition.x = (scrollLeft * 100) / clientWidth;
        sliderPosition.y = (scrollTop * 100) / clientHeight;

        triggerOnScroll({ scrollLeft, scrollTop });
      }

      // View
      const view = ref();

      // Gutter width
      const { gutterWidth, updateGutterWidth } = useGutter();

      // Slider position
      const sliderPosition = reactive({ x: 0, y: 0 });

      // Slider size
      const { sliderSize, updateSliderSize } = useSlider({
        wrapperSize: wrapperSize,
      });

      // Action to update all sizes
      function updateSizes() {
        updateGutterWidth();
        updateSliderSize();
        emit('update-wrapper-size', wrapperSize.value);
      }
      onMounted(updateSizes);
      onUpdated(updateSizes);

      // Dragging status
      const dragging = ref(false);
      function setDragging(value) {
        dragging.valuie = value;
      }

      // Scroll behavior observer
      const onScrollListeners = [];
      function onScroll(callback) {
        if (!onScrollListeners.includes(callback)) {
          onScrollListeners.push(callback);
          return () => cancelOnScroll(callback);
        }
      }
      function cancelOnScroll(callback) {
        const index = onScrollListeners.findIndex(row => row === callback);
        if (index > -1) onScrollListeners.splice(index, 1);
      }
      function triggerOnScroll(...args) {
        emit('scroll', ...args);
        onScrollListeners.forEach(callback => callback(...args));
      }

      // Shared scrollbar data
      const shared = {
        outer,
        outerClass,

        wrapper,
        wrapperStyle,
        updateWrapperSize,
        scrollTo,
        onWrapperScroll,

        view,

        dragging,
        setDragging,

        gutterWidth,
        sliderPosition,
        sliderSize,
        updateSizes,

        onScroll,
        cancelOnScroll,
      };

      createScrollbar({ state: shared });
      return shared;
    },
  };
</script>

<style lang="less">
  @ls-scrollbar-padding-column: 4px;
  @ls-scrollbar-width: 6px;

  .ls-scrollbar {
    position: relative;
    overflow: hidden;

    & &__wrap {
      overflow: scroll;
    }
    & &__thumb {
      @apply transition bg-positive-800;
      position: relative;
      transition-property: opacity, height;
      border-radius: @ls-scrollbar-width;
      user-select: none;
      cursor: grab;
      z-index: 40;
      opacity: 0;
    }
    & &__bar {
      position: absolute;
      right: @ls-scrollbar-padding-column;
      bottom: @ls-scrollbar-padding-column;
      z-index: 41;
      user-select: none;

      &.is-horizontal {
        height: @ls-scrollbar-width;
        left: @ls-scrollbar-padding-column;

        & > .ls-scrollbar__thumb {
          height: 100%;
        }
      }
      &.is-vertical {
        width: @ls-scrollbar-width;
        top: @ls-scrollbar-padding-column;

        & > .ls-scrollbar__thumb {
          width: 100%;
        }
      }
    }

    &.is-dragging {
      cursor: grabbing;
    }
    &:hover {
      > .ls-scrollbar__bar {
        > .ls-scrollbar__thumb {
          opacity: 0.3;
        }
      }
    }
    > .ls-scrollbar__bar {
    @apply hidden md:block;

      > .ls-scrollbar__thumb {
        &:hover {
          opacity: 0.4;
        }
      }
      &.is-active {
        > .ls-scrollbar__thumb {
          opacity: 0.2;
        }
      }
    }
  }
</style>