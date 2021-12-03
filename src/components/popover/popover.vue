<template>
  <popover-target
    tabindex="0"
    ref="trigger"
    @click.capture="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @focus.capture="onFocus"
    @blur.capture="onBlur"
  >
    <slot name="trigger" />
  </popover-target>

  <div class="popover" ref="popper" role="tooltip">
    <transition name="fade" @after-enter="onAfterShow" @after-appear="onAfterHide">
      <div class="popover__body" v-show="showPopper">
        <div class="popover__arrow" data-popper-arrow />
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
  // Functions
  import { nextTick, ref, watch } from 'vue';
  import { createPopper } from '@popperjs/core';
  import { findDOMNode } from '@/modules/util/dom';
  import { onClickOutside } from './util/click-outside';
  // Components
  import PopoverTarget from './target.vue';
  // Models
  import { popoverProps } from './util/props';

  export default {
    name: 'popover',
    props: popoverProps,
    components: {
      PopoverTarget,
    },
    emits: [ 'show', 'hide' ],
    setup(props, { emit }) {
      // Default slot
      const trigger = ref();
      const popper = ref();
      watch([trigger, popper], ([newSlot, newPopper]) => {
        if (newSlot && newPopper) {
          updateInstance();
        }
      });

      // Popper instance
      const instance = ref();
      function updateInstance() {
        if (!trigger.value || !popper.value) {
          return;
        }

        if (instance.value) {
          instance.value.destroy();
        }

        const triggerDom = findDOMNode(trigger.value);
        const popperDom = findDOMNode(popper.value);

        instance.value = createPopper(triggerDom, popperDom, {
          placement: props.placement,
          strategy: props.strategy,
        });
      }
      function update() {
        nextTick(() => instance.value?.update());
      }

      // Watch props changes
      watch(props, () => {
        updateInstance();
      });

      // Visibility controls
      const showPopper = ref(false);
      function show() {
        showPopper.value = true;
        update();
      }
      function hide() {
        showPopper.value = false;
      }

      // Element events
      function onMouseEnter() {
        if (props.trigger === 'hover') {
          show();
        }
      }
      function onMouseLeave() {
        if (props.trigger === 'hover') {
          hide();
        }
      }
      function onFocus() {
        if (props.trigger === 'focus') {
          show();
        }
      }
      function onBlur() {
        if (props.trigger === 'focus') {
          hide();
        }
      }
      function onClick() {
        if (props.trigger === 'click') {
          if (showPopper.value) {
            hide();
          } else {
            show();
          }
        }
      }

      // Transition events
      function onAfterShow() {
        if (props.trigger === 'click') {
          onClickOutside(trigger, hide);
        }

        emit('show');
      }
      function onAfterHide() {
        emit('hide');
      }

      return {
        trigger,

        popper,
        instance,
        update,

        showPopper,
        show,
        hide,

        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur,
        onClick,

        onAfterShow,
        onAfterHide,
      };
    },
  };
</script>

<style lang="less" scoped>
  .popover {
    @apply inline-block;

    &__arrow,
    &__arrow::before {
      position: absolute;
      width: 8px;
      height: 8px;
      background: inherit;
    }

    &__arrow {
      visibility: hidden;

      &::before {
        content: '';
        visibility: visible;
        transform: rotate(45deg);
      }
    }

    [data-popper-placement^='top'] > &__body > &__arrow {
      bottom: -4px;
    }
    [data-popper-placement^='bottom'] > &__body > &__arrow {
      top: -4px;
    }
    [data-popper-placement^='left'] > &__body > &__arrow {
      right: -4px;
    }
    [data-popper-placement^='right'] > &__body > &__arrow {
      left: -4px;
    }

    &__body {
      @apply inline-block px-3 py-2 bg-negative-900;
      box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }
  }
</style>