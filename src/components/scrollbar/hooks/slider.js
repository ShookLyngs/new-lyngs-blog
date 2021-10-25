import { reactive } from 'vue';

export function useSlider({ wrapperSize }) {
  const sliderSize = reactive({
    width: '',
    height: '',
  });

  function getSliderWidth() {
    const { clientWidth, scrollWidth } = wrapperSize.value || {};
    const percentage = (clientWidth * 100) / scrollWidth;
    return percentage < 100 ? `${percentage}%` : '0';
  }
  function getSliderHeight() {
    const { clientHeight, scrollHeight } = wrapperSize.value || {};
    const percentage = (clientHeight * 100) / scrollHeight;
    return percentage < 100 ? `${percentage}%` : '';
  }
  function updateSliderSize() {
    sliderSize.width = getSliderWidth();
    sliderSize.height = getSliderHeight();
  }

  return {
    sliderSize,
    getSliderWidth,
    getSliderHeight,
    updateSliderSize,
  };
}