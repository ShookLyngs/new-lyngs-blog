<script>
  import { h } from 'vue';

  export default {
    name: 'base-button',
    props: {
      tag: {
        type: String,
        default: 'button',
      },
    },
    setup(props, { slots }) {
      return () => h(
        props.tag,
        { class: 'button' },
        slots.default?.()
      );
    },
  };
</script>

<style lang="less" scoped>
  .button {
    @apply inline-block text-center align-middle body-x h-14 text-xl font-bold transition cursor-pointer select-none;
  }
  a.button {
    @apply inline-flex justify-center items-center;
  }
</style>