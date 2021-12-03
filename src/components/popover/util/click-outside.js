import { findDOMNode } from '@/modules/util/dom';

export function onClickOutside(ref, callback) {
  function onClick(event) {
    const target = findDOMNode(ref.value);
    if (event.target !== target) {
      callback?.();
      off();
    }
  }

  function off() {
    document.removeEventListener('click', onClick);
  }

  document.addEventListener('click', onClick);
  return off;
}