// Util functions about `DOM`, `Element` and their siblings.

// Find DomNode from a VueInstance,
// the target can be VueInstance, Ref, or just Element
export function findDOMNode(target) {
  let node = target && (target.$el || target);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }

  return node;
}