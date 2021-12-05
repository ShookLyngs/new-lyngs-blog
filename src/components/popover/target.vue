<script>
  import { h } from 'vue';

  export default {
    name: 'popover-target',
    render() {
      let slot = this.$slots.default();
      while (Array.isArray(slot)) {
        if (slot.length !== 1) {
          throw new Error('[polacoms]: The slot `trigger` in PopoverTarget should have exact one child.');
        }

        slot = slot[0];
        if (slot?.shapeFlag === 16) {
          slot = slot?.children;
        }
      }

      return h(slot, {
        ...this.$attrs,
      });
    },
  };
</script>