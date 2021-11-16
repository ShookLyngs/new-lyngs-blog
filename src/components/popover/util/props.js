export const popoverProps = {
  placement: {
    type: String,
    default: 'bottom',
    validator: v => [
      'auto',
      'auto-start',
      'auto-end',
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'right',
      'right-start',
      'right-end',
      'left',
      'left-start',
      'left-end',
    ].includes(v),
  },
  strategy: {
    type: String,
    default: 'absolute',
    validator: v => [
      'absolute',
      'fixed',
    ].includes(v),
  },
  trigger: {
    type: String,
    default: 'hover',
    validator: v => [
      'hover',
      'click',
      'focus',
      'manual',
    ].includes(v),
  },
};