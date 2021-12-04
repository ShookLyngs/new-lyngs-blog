<script>
  export default {
    name: 'popover-target',
    render() {
      const slot = this.$slots.default();
      console.log('slot', slot);
      if (slot.length !== 1) {
        throw new Error('[polacoms]: The slot `trigger` in PopoverTarget should have exact one child.');
      }

      const child = slot[0];
      console.log('children', child.children);
      if (Array.isArray(child.children)) {
        if (child.children.length !== 1) {
          throw new Error('[polacoms]: The slot `trigger` in PopoverTarget should have exact one child.');
        }

        return child.children[0];
      } else {
        return child;
      }
    },
  };
</script>