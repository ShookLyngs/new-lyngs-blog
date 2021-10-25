<template>
  <component
    ref="defaultSlot"
    :is="$slots.default"
  />
</template>

<script>
  // Functions
  import { ref, watchEffect, onBeforeUnmount, onMounted, onUpdated } from 'vue';
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

      // Current element of slot,
      // which only store the first child in the default slot
      let currentElement = null;

      // Observer
      let observer = null;
      const width = ref(0);
      const height = ref(0);
      function onSlotUpdated() {
        const element = findDOMNode(defaultSlot.value);
        console.log(element);

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
      function onResize(entries) {
        const { target } = entries[0];
        const rect = target.getBoundingClientRect();

        const size = {
          width: Math.floor(rect.width),
          height: Math.floor(rect.height),
        };

        if (width.value !== size.width || height.value !== size.height) {
          width.value = size.width;
          height.value = size.height;
          emit('resize', rect);
        }
      }
      function destroyObserver() {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
      }

      // Lifecycles
      onMounted(onSlotUpdated);
      onUpdated(onSlotUpdated);
      onBeforeUnmount(destroyObserver);

      return {
        defaultSlot,
        width,
        height,
      };
    },
  };
</script>