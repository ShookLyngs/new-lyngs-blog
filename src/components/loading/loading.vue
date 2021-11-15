<template>
  <teleport to="body" :disabled="!fullscreen">
    <transition
      name="fade"
      mode="in-out"
      :duration="300"
      @after-leave="onAfterLeave"
    >
      <div
        class="ls-loading-wrap"
        v-show="visible"
        :class="wrapClasses"
        @click.stop="onClickWrap"
      >
        <div class="ls-loading-inner">
          <loading-circle class="text-theme-500" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
  // Functions
  import { ref, computed } from 'vue';
  // Components
  import LoadingCircle from './loading-indicator.vue';

  function delayThrottle(callback, delay = 200) {
    let timer = null;

    const event = (args = []) => {
      timer = null;
      callback(...args);
    };

    const throttle = (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => event(args), delay);
    };

    throttle.cancel = () => clearTimeout(timer);

    return throttle;
  }

  export default {
    name: 'loading',
    components: {
      LoadingCircle,
    },
    emits: [
      'after-leave',
      'click-wrap',
    ],
    setup(props, { emit }) {
      // refs
      const text = ref('');
      const theme = ref('');
      const visible = ref(true);
      const fullscreen = ref(false);

      // computed
      const wrapClasses = computed(() => {
        const classes = [];

        if (fullscreen.value) {
          classes.push('is-fullscreen');
        }
        if (theme.value) {
          classes.push(`is-theme-${theme.value}`);
        }

        return classes;
      });

      // proactive
      const setText = (value) => {
        text.value = value;
      };
      const setTheme = (value) => {
        theme.value = value;
      };
      const setVisible = (value) => {
        /*if (value) {
          visible.value = value;
        } else {
          setVisibleAsync(value);
        }*/
        setVisibleAsync(value);
      };
      const setVisibleAsync = delayThrottle((value) => {
        visible.value = value;
      }, 300);
      const setFullscreen = (value) => {
        fullscreen.value = value;
      };

      // passive
      const onAfterLeave = () => emit('after-leave');
      const onClickWrap = () => emit('click-wrap');

      return {
        text,
        visible,
        fullscreen,

        wrapClasses,

        setText,
        setTheme,
        setVisible,
        setFullscreen,
        onAfterLeave,
        onClickWrap,
      };
    },
  };
</script>

<style lang="less" scoped>
  .ls-loading-wrap {
    @apply bg-mask-600 flex justify-center items-center;
    @apply absolute w-full h-full left-0 top-0 overflow-hidden select-none;
    //background-color: rgba(255, 255, 255, .7);
    backface-visibility: hidden;
    z-index: 10;
  }
  .ls-loading-edge {
    @apply overflow-hidden;
  }
</style>
