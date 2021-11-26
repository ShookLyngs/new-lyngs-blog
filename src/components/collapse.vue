<template>
  <div class="collapse" :class="wrapClasses" :style="wrapStyles">
    <resize-observer @resize="onResize">
      <slot :show="show" />
    </resize-observer>

    <temp te />
  </div>
</template>

<script>
  // Functions
  import { reactive, ref, computed } from 'vue';
  // Components
  import { ResizeObserver, Temp } from 'polacoms';

  export default {
    name: 'collapse',
    components: {
      ResizeObserver,
      Temp,
    },
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      direction: {
        type: String,
        default: 'vertical',
        validator: (value) => ['vertical', 'horizontal', 'both'].includes(value),
      },
      hiddenClass: {
        type: [String, Array, Object],
        default: '',
      },
      showClass: {
        type: [String, Array, Object],
        default: 'is-show',
      },
    },
    setup(props) {
      const size = reactive({
        width: ref(void 0),
        height: ref(void 0),
      });

      const onResize = (newSize) => {
        size.width = newSize.width;
        size.height = newSize.height;
      };

      const wrapClasses = computed(() => {
        return props.show ? props.showClass : props.hiddenClass;
      });

      const wrapStyles = computed(() => {
        const styles = {};
        const show = props.show;
        const direction = props.direction;

        if (direction === 'vertical' || direction === 'both') {
          styles.height = show && size.height ? `${size.height}px` : '0px';
        }
        if (direction === 'horizontal' || direction === 'both') {
          styles.width = show && size.width ? `${size.width}px` : '0px';
        }

        return styles;
      });

      return {
        size,
        wrapClasses,
        wrapStyles,
        onResize,
      };
    },
  };
</script>

<style lang="less" scoped>
  .collapse {
    @apply overflow-hidden transition-all duration-300;
  }
</style>
