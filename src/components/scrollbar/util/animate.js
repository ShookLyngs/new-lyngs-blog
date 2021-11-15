import Tween from '@tweenjs/tween.js';

/**
 *
 * @param {Object} from
 * @param {number|undefined} from.x - Start point X
 * @param {number|undefined} from.y - Start point Y
 * @param {Object} to
 * @param {number|undefined} to.x - Destination X
 * @param {number|undefined} to.y - Destination Y
 * @param {number} duration - Animation duration
 * @param {Function} onUpdate - Trigger when animate state updated
 * @returns {Promise<void>}
 */
export async function scrollAnimateTo({
  from,
  to,
  duration = 400,
  onUpdate = () => {},
}) {
  return new Promise((resolve) => {
    // Create position state and tween instance.
    const tween = new Tween.Tween({
      x: from.x,
      y: from.y,
      position: 0,
    });

    // Target state.
    const target = {
      x: to.x ?? from.x,
      y: to.y ?? from.y,
      position: 1,
    };

    // Set animation values.
    tween
      .to(target, duration)
      .easing(Tween.Easing.Cubic.InOut)
      .onUpdate(onUpdate)
      .onComplete(finish)
      .onStop(finish)
      .start();

    // Define animation frame actions.
    let finished = false;
    function frame() {
      if (!finished) requestAnimationFrame(frame);
      Tween.update();
    }
    function finish() {
      finished = true;
      resolve();
    }

    // Start animation.
    requestAnimationFrame(frame);
  });
}