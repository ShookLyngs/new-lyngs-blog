<script>
  import { h } from 'vue';

  export default {
    name: 'popover-target',
    inheritAttrs: false,
    setup(props, { slots }) {
      return () => {
        const content = slots.default();
        return h(Array.isArray(content) ? content?.[0] : content);
      };
    },
  };
</script>