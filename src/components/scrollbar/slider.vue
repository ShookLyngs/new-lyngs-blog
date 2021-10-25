<template>
  <div
    ref="slider"
    class="ls-scrollbar__bar"
    :class="barClass"
  >
    <div
      ref="thumb"
      class="ls-scrollbar__thumb"
      :class="thumbClass"
      :style="thumbStyle"
      @mousedown.stop="onThumbMouseDown"
    />
  </div>
</template>

<script>
  // Functions
  import { computed, reactive, ref } from 'vue';
  import { useScrollbar } from './hooks/shared';

  // Defines
  const map = {
    vertical: {
      axis: 'y',
      rectDirection: 'top',
      scrollDirection: 'scrollTop',
      clientAxis: 'clientY',
      offsetSize: 'offsetHeight',
      scrollSize: 'scrollHeight',
    },
    horizontal: {
      axis: 'x',
      rectDirection: 'left',
      scrollDirection: 'scrollLeft',
      clientAxis: 'clientX',
      offsetSize: 'offsetWidth',
      scrollSize: 'scrollWidth',
    },
  };
  const thumbDirectionMap = {
    horizontal: 'width',
    vertical: 'height',
  };
  const thumbTranslateMap = {
    horizontal: 'translateX',
    vertical: 'translateY',
  };

  export default {
    name: 'scrollbar-slider',
    props: {
      direction: {
        type: String,
        default: 'vertical',
        validator: (value) => ['vertical', 'horizontal'].includes(value),
      },
      size: {
        type: String,
        default: void 0,
      },
      move: {
        type: Number,
        default: 0,
      },
      thumbClass: {
        type: [String, Array, Object],
        default: '',
      },
    },
    emits: [ 'drag-start', 'drag-end' ],
    setup(props, { emit }) {
      // Scrollbar
      const scrollbar = useScrollbar();
      const wrapper = scrollbar.wrapper;

      // Bar
      const slider = ref();
      const dragging = ref(false);
      const bar = computed(() => map[props.direction]);
      const barClass = computed(() => {
        const classes = [];
        if (props.direction) classes.push(`is-${props.direction}`);
        if (dragging.value) classes.push('is-active');
        return classes;
      });

      // Thumb
      const thumb = ref();
      const store = reactive({});
      const thumbStyle = computed(() => ({
        [thumbDirectionMap[props.direction]]: props.size,
        transform: `${thumbTranslateMap[props.direction]}(${props.move}%)`,
      }));
      function onThumbMouseDown(event) {
        event.stopImmediatePropagation();
        if (event.ctrlKey || event.button === 2) return;

        dragging.value = true;
        addGlobalListeners();

        const slider = bar.value;
        const target = event.currentTarget;
        const targetRect = target.getBoundingClientRect();

        const size = target[slider.offsetSize];
        const offset = event[slider.clientAxis] - targetRect[slider.rectDirection];
        store[bar.value.axis] = size - offset;

        emit('drag-start');
      }

      // Global mouse events
      const mouseMoveTracker = ref();
      const mouseUpTracker = ref();
      function addGlobalListeners() {
        // mousemove
        document.addEventListener('mousemove', onGlobalMouseMove);
        mouseMoveTracker.value = () => document.removeEventListener('mousemove', onGlobalMouseMove);
        // mouseup
        document.addEventListener('mouseup', onGlobalMouseUp);
        mouseMoveTracker.value = () => document.removeEventListener('mouseup', onGlobalMouseUp);
      }
      function removeGlobalListeners() {
        if (mouseMoveTracker.value) mouseMoveTracker.value?.();
        if (mouseUpTracker.value) mouseUpTracker.value?.();
      }
      function onGlobalMouseMove(event) {
        if (!dragging.value) return;

        const currentBar = bar.value;
        const latest = store[currentBar.axis];
        if (!latest) return;

        const currentWrapper = wrapper.value;
        const currentSlider = slider.value;
        const currentThumb = thumb.value;
        const rect = currentSlider.getBoundingClientRect();

        const offset = -1 * (rect[currentBar.rectDirection] - event[currentBar.clientAxis]);
        const clickPosition = currentThumb[currentBar.offsetSize] - latest;
        const positionPercentage = ((offset - clickPosition) * 100) / currentSlider[currentBar.scrollSize];
        currentWrapper[currentBar.scrollDirection] = positionPercentage * currentWrapper[currentBar.scrollSize] / 100;
      }
      function onGlobalMouseUp() {
        dragging.value = false;
        store[bar.value.axis] = 0;
        removeGlobalListeners();

        emit('drag-end');
      }

      return {
        slider,
        dragging,

        bar,
        barClass,

        thumb,
        thumbStyle,
        onThumbMouseDown,
      };
    },
  };
</script>

<style scoped>

</style>