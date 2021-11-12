import { computed, ref } from 'vue';

export function useWrapper({ props, gutterWidth }) {
  const wrapper = ref();
  const wrapperSize = ref(getWrapperSize());
  const wrapperStyle = computed(() => {
    if (!gutterWidth.value) return void 0;

    return {
      marginBottom: gutterWidth.value,
      marginRight: gutterWidth.value,
    };
  });

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
        const yDistance = scrollHeight - oldHeight;
        scrollTo({
          x: scrollLeft,
          y: scrollTop + yDistance,
        });
      }
    }
  }

  function scrollTo({ x, y }) {
    if (wrapper.value) {
      const { scrollLeft, scrollTop } = wrapperSize.value;
      wrapper.value.scrollTo(x ?? scrollLeft, y ?? scrollTop);
    }
  }

  return {
    wrapper,
    wrapperSize,
    wrapperStyle,

    getWrapperSize,
    updateWrapperSize,

    scrollTo,
  };
}