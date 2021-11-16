<template>
  <component
    ref="defaultSlot"
    :is="$slots.default"
  />
</template>

<script>
  // Functions
  import { ref, watchEffect, onBeforeUnmount, onMounted, onUpdated, reactive } from 'vue';
  import { findDOMNode } from '@/assets/util/dom';
  // Objects
  import Observer from 'resize-observer-polyfill';

  export default {
    name: 'resize-observer',
    emits: [ 'resize' ],
    setup(props, { emit }) {
      // Slot
      const defaultSlot = ref();
      watchEffect(() => defaultSlot.value && onSlotUpdated());

      // Current element of slot
      let currentElement = null;

      // Observer
      let observer = null;
      function destroyObserver() {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
      }
      function onSlotUpdated() {
        const element = findDOMNode(defaultSlot.value);

        if (element !== currentElement) {
          destroyObserver();
          currentElement = element;
        }

        if (!observer) {
          observer = new Observer(onResize);
          observer.observe(element);
          onResize([ { target: element } ]);
        }
      }

      // Size
      const size = reactive({
        width: 0,
        height: 0,
      });
      function onResize(entries) {
        const { target } = entries[0];
        const rect = target.getBoundingClientRect();

        const width = Math.floor(rect.width);
        const height = Math.floor(rect.height);

        if (width !== size.width || height !== size.height) {
          Object.assign(size, { width, height });
          emit('resize', rect);
        }
      }

      // Lifecycles
      onMounted(onSlotUpdated);
      onUpdated(onSlotUpdated);
      onBeforeUnmount(destroyObserver);

      return {
        defaultSlot,
        size,
      };
    },
  };
</script>